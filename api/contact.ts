import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

// ─── Types ────────────────────────────────────────────────────────────────────

interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ApiError {
  error: string;
}

// ─── Custom error ─────────────────────────────────────────────────────────────

class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ValidationError";
  }
}

// ─── Validation ───────────────────────────────────────────────────────────────

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validatePayload(body: unknown): ContactPayload {
  if (!body || typeof body !== "object") {
    throw new ValidationError("Request body must be a JSON object.");
  }

  const b = body as Record<string, unknown>;

  const name = typeof b.name === "string" ? b.name.trim() : "";
  const email = typeof b.email === "string" ? b.email.trim().toLowerCase() : "";
  const subject = typeof b.subject === "string" ? b.subject.trim() : "";
  const message = typeof b.message === "string" ? b.message.trim() : "";

  const errors: string[] = [];

  if (!name) errors.push("Name is required.");
  else if (name.length < 2) errors.push("Name must be at least 2 characters.");
  else if (name.length > 100) errors.push("Name must be at most 100 characters.");

  if (!email) errors.push("Email is required.");
  else if (!EMAIL_RE.test(email)) errors.push("Email is invalid.");
  else if (email.length > 254) errors.push("Email is too long.");

  if (!subject) errors.push("Subject is required.");
  else if (subject.length < 2) errors.push("Subject must be at least 2 characters.");
  else if (subject.length > 150) errors.push("Subject must be at most 150 characters.");

  if (!message) errors.push("Message is required.");
  else if (message.length < 10) errors.push("Message must be at least 10 characters.");
  else if (message.length > 5000) errors.push("Message must be at most 5000 characters.");

  if (errors.length > 0) throw new ValidationError(errors.join(" "));

  return { name, email, subject, message };
}

// ─── In-memory rate limiter ───────────────────────────────────────────────────
// Good enough for a personal portfolio (serverless instances are ephemeral).
// For production scale: replace with Upstash Redis + @upstash/ratelimit.

const WINDOW_MS = 60_000; // 1 minute
const MAX_HITS = 3;      // requests per window per IP

interface RateEntry { count: number; resetAt: number }
const rateLimitMap = new Map<string, RateEntry>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  if (entry.count >= MAX_HITS) return true;
  entry.count += 1;
  return false;
}

// ─── Email builders ───────────────────────────────────────────────────────────

interface EmailMeta { ip: string; timestamp: string }

function buildHtml(p: ContactPayload, m: EmailMeta): string {
  const safeMessage = p.message
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\n/g, "<br>");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1.0" />
  <title>New Portfolio Contact</title>
</head>
<body style="margin:0;padding:0;background:#09090b;font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;-webkit-font-smoothing:antialiased;color:#f4f4f5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#09090b;padding:48px 16px;">
    <tr>
      <td align="center">
        <!-- Main Card Container -->
        <table width="620" cellpadding="0" cellspacing="0"
          style="background:#121215;border-radius:8px;overflow:hidden;border:1px solid #27272a;box-shadow:0 24px 48px rgba(0,0,0,0.6);">

          <!-- Header Section -->
          <tr>
            <td style="padding:36px 40px 28px;background:#18181b;border-bottom:1px solid #27272a;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <!-- Badge -->
                    <div style="display:inline-block;padding:5px 14px;border-radius:4px;background:rgba(237,111,99,0.1);border:1px solid rgba(237,111,99,0.25);color:#f0857a;font-family:'JetBrains Mono','Courier New',monospace;font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;margin-bottom:14px;">
                      LET'S CONNECT &bull; NEW MESSAGE
                    </div>
                    <h1 style="margin:0 0 6px;color:#f4f4f5;font-size:24px;font-weight:800;letter-spacing:-0.03em;line-height:1.25;">
                      Portfolio Contact
                    </h1>
                    <p style="margin:0;color:#a1a1aa;font-size:14px;line-height:1.5;">
                      Someone submitted an inquiry through your portfolio website.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Main Content Body -->
          <tr>
            <td style="padding:32px 40px;">

              <!-- Sender Details Card -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;background:#18181b;border-radius:14px;border:1px solid #27272a;border-left:4px solid #ed6f63;">
                <tr>
                  <td style="padding:20px 24px;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td>
                          <p style="margin:0 0 4px;color:#ed6f63;font-family:'JetBrains Mono','Courier New',monospace;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;">Sender</p>
                          <p style="margin:0 0 4px;color:#f4f4f5;font-size:18px;font-weight:800;">${p.name}</p>
                          <a href="mailto:${p.email}" style="color:#f0857a;font-size:14px;text-decoration:none;font-weight:500;">${p.email}</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Subject Box -->
              <div style="margin-bottom:20px;">
                <p style="margin:0 0 6px;color:#a1a1aa;font-family:'JetBrains Mono','Courier New',monospace;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;">Subject</p>
                <div style="padding:14px 18px;background:#18181b;border-radius:12px;border:1px solid #27272a;color:#f4f4f5;font-size:15px;font-weight:700;">
                  ${p.subject}
                </div>
              </div>

              <!-- Message Body Box -->
              <div style="margin-bottom:32px;">
                <p style="margin:0 0 6px;color:#a1a1aa;font-family:'JetBrains Mono','Courier New',monospace;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;">Message Content</p>
                <div style="padding:22px;background:#09090b;border-radius:14px;border:1px solid #27272a;color:#f4f4f5;font-size:15px;line-height:1.75;">${safeMessage}</div>
              </div>

              <!-- Divider -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
                <tr>
                  <td style="border-top:1px solid #27272a;"></td>
                </tr>
              </table>

              <!-- Metadata Section -->
              <p style="margin:0 0 14px;color:#ed6f63;font-family:'JetBrains Mono','Courier New',monospace;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;">Request Metadata</p>
              <table width="100%" cellpadding="0" cellspacing="0" style="font-size:13px;background:#18181b;border-radius:12px;border:1px solid #27272a;padding:16px 20px;">
                <tr>
                  <td style="padding:6px 0;width:120px;color:#71717a;font-family:'JetBrains Mono','Courier New',monospace;font-weight:600;">Timestamp</td>
                  <td style="padding:6px 0;color:#a1a1aa;font-family:'JetBrains Mono','Courier New',monospace;">${m.timestamp}</td>
                </tr>
                <tr>
                  <td style="padding:6px 0;color:#71717a;font-family:'JetBrains Mono','Courier New',monospace;font-weight:600;">Sender IP</td>
                  <td style="padding:6px 0;color:#a1a1aa;font-family:'JetBrains Mono','Courier New',monospace;">${m.ip}</td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer Section -->
          <tr>
            <td style="padding:22px 40px;background:#18181b;border-top:1px solid #27272a;text-align:center;">
              <p style="margin:0 0 4px;color:#71717a;font-size:12px;font-family:'JetBrains Mono','Courier New',monospace;">
                &copy; ${new Date().getFullYear()} Bahaa Youssof &bull; Portfolio Contact System
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function buildText(p: ContactPayload, m: EmailMeta): string {
  return `NEW PORTFOLIO CONTACT
======================

From:      ${p.name} <${p.email}>
Subject:   ${p.subject}

Message:
${p.message}

──────────────────────
Timestamp:  ${m.timestamp}
Sender IP:  ${m.ip}
`;
}

// ─── Handler ──────────────────────────────────────────────────────────────────

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
): Promise<void> {
  // Method guard
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    res.status(405).json({ error: "Method not allowed." } satisfies ApiError);
    return;
  }

  // CORS — tighten ALLOWED_ORIGIN to your domain in production
  const origin = process.env.ALLOWED_ORIGIN ?? "*";
  res.setHeader("Access-Control-Allow-Origin", origin);
  res.setHeader("Access-Control-Allow-Methods", "POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Env var guard — fail fast before any processing
  const apiKey = process.env.RESEND_API_KEY;
  const contactEmail = process.env.CONTACT_EMAIL;

  if (!apiKey || !contactEmail) {
    console.error("[contact] Missing RESEND_API_KEY or CONTACT_EMAIL env vars.");
    res.status(500).json({ error: "Server misconfiguration." } satisfies ApiError);
    return;
  }

  // Resolve sender IP
  const ip =
    (req.headers["x-forwarded-for"] as string | undefined)
      ?.split(",")[0]
      ?.trim() ??
    req.socket?.remoteAddress ??
    "unknown";

  // Rate limit
  if (isRateLimited(ip)) {
    res.status(429).json({ error: "Too many requests. Please wait a minute and try again." } satisfies ApiError);
    return;
  }

  // Honeypot — bots fill hidden fields; humans don't
  const body = req.body as Record<string, unknown>;
  if (body?._honey) {
    // Return 200 to fool bots — silently discard
    res.status(200).json({ ok: true });
    return;
  }

  // Validate payload
  let payload: ContactPayload;
  try {
    payload = validatePayload(req.body);
  } catch (err) {
    if (err instanceof ValidationError) {
      res.status(422).json({ error: err.message } satisfies ApiError);
      return;
    }
    throw err;
  }

  // Build metadata
  const timestamp = new Date().toLocaleString("en-US", {
    dateStyle: "full",
    timeStyle: "short",
    timeZone: "UTC",
  }) + " (UTC)";
  const meta: EmailMeta = { ip, timestamp };

  // Send via Resend
  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [contactEmail],
      replyTo: payload.email,
      subject: `Portfolio Contact — ${payload.subject}`,
      html: buildHtml(payload, meta),
      text: buildText(payload, meta),
      headers: {
        "X-Contact-Form": "portfolio",
      },
    });

    if (error) {
      console.error("[contact] Resend error:", error);
      res.status(502).json({ error: "Failed to deliver email. Please try again later." } satisfies ApiError);
      return;
    }

    res.status(200).json({ ok: true });
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    res.status(500).json({ error: "An unexpected error occurred. Please try again." } satisfies ApiError);
  }
}
