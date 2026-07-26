import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

interface ValidationResult {
  valid: boolean;
  error?: string;
}

// ---------------------------------------------------------------------------
// Validation helpers
// ---------------------------------------------------------------------------
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Strip HTML tags to prevent XSS in email body */
function stripHtml(str: string): string {
  return str.replace(/<[^>]*>/g, "").trim();
}

function validatePayload(body: unknown): ValidationResult {
  if (!body || typeof body !== "object") {
    return { valid: false, error: "Invalid request body." };
  }

  const { name, email, message } = body as Record<string, unknown>;

  if (typeof name !== "string" || name.trim().length < 2 || name.trim().length > 100) {
    return { valid: false, error: "Name must be between 2 and 100 characters." };
  }

  if (typeof email !== "string" || !EMAIL_REGEX.test(email) || email.length > 254) {
    return { valid: false, error: "A valid email address is required." };
  }

  if (typeof message !== "string" || message.trim().length < 10 || message.trim().length > 2000) {
    return { valid: false, error: "Message must be between 10 and 2000 characters." };
  }

  return { valid: true };
}

// ---------------------------------------------------------------------------
// Email HTML template
// ---------------------------------------------------------------------------
function buildEmailHtml(name: string, email: string, message: string): string {
  const safeName = stripHtml(name);
  const safeEmail = stripHtml(email);
  const safeMessage = stripHtml(message).replace(/\n/g, "<br/>");

  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <title>New Contact Message</title>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #0a0a0a; color: #e5e5e5; margin: 0; padding: 0; }
          .wrapper { max-width: 600px; margin: 40px auto; background: #111; border: 1px solid #1e1e1e; border-radius: 12px; overflow: hidden; }
          .header { background: linear-gradient(135deg, #6366f1, #8b5cf6); padding: 32px 40px; }
          .header h1 { color: #fff; margin: 0; font-size: 22px; font-weight: 700; }
          .header p { color: rgba(255,255,255,0.7); margin: 6px 0 0; font-size: 14px; }
          .body { padding: 32px 40px; }
          .field { margin-bottom: 24px; }
          .label { font-size: 11px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: #6366f1; margin-bottom: 6px; }
          .value { font-size: 15px; color: #e5e5e5; line-height: 1.6; }
          .message-box { background: #1a1a1a; border-left: 3px solid #6366f1; border-radius: 6px; padding: 16px 20px; }
          .footer { padding: 20px 40px; border-top: 1px solid #1e1e1e; font-size: 12px; color: #555; text-align: center; }
        </style>
      </head>
      <body>
        <div class="wrapper">
          <div class="header">
            <h1>New Portfolio Message</h1>
            <p>Someone reached out via bahaa.qzz.io</p>
          </div>
          <div class="body">
            <div class="field">
              <div class="label">From</div>
              <div class="value">${safeName}</div>
            </div>
            <div class="field">
              <div class="label">Reply To</div>
              <div class="value"><a href="mailto:${safeEmail}" style="color:#6366f1;">${safeEmail}</a></div>
            </div>
            <div class="field">
              <div class="label">Message</div>
              <div class="message-box value">${safeMessage}</div>
            </div>
          </div>
          <div class="footer">Sent via Resend · Bahaa Youssof Portfolio</div>
        </div>
      </body>
    </html>
  `;
}

// ---------------------------------------------------------------------------
// Handler
// ---------------------------------------------------------------------------
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, error: "Method not allowed." });
  }

  // Validate input
  const validation = validatePayload(req.body);
  if (!validation.valid) {
    return res.status(400).json({ success: false, error: validation.error });
  }

  const { name, email, message } = req.body as ContactPayload;

  try {
    const { error } = await resend.emails.send({
      from: "Bahaa Portfolio <noreply@bahaa.qzz.io>",
      to: "bahaayoussof@gmail.com",
      subject: `[Portfolio] New message from ${name.trim()}`,
      replyTo: email.trim(),
      html: buildEmailHtml(name.trim(), email.trim(), message.trim()),
    });

    if (error) {
      // Log server-side for debugging; never send raw Resend errors to client
      console.error("[contact] Resend error:", error);
      return res.status(500).json({ success: false, error: "Failed to send message. Please try again." });
    }

    return res.status(200).json({ success: true, message: "Message delivered successfully." });
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return res.status(500).json({ success: false, error: "Failed to send message. Please try again." });
  }
}
