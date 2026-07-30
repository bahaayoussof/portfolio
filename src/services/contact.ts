// ─── Types ────────────────────────────────────────────────────────────────────

import type { ContactFormValues } from "@/shared/contactValidation";
export type { ContactFormValues };

export interface ContactSuccessResponse {
  ok: true;
}

export interface ContactErrorResponse {
  error: string;
}

export type ContactApiResponse = ContactSuccessResponse | ContactErrorResponse;

// ─── Service ──────────────────────────────────────────────────────────────────

/**
 * POST /api/contact
 *
 * Sends a contact form submission to the serverless function.
 * API key is NEVER sent from the client — the server holds it.
 *
 * @throws {Error} with a user-friendly message on any failure.
 */
export async function submitContact(values: ContactFormValues): Promise<void> {
  const payload = {
    name: values.name.trim(),
    email: values.email.trim().toLowerCase(),
    subject: values.subject.trim(),
    message: values.message.trim(),
    // Honeypot — intentionally empty; bots may fill this
    _honey: "",
  };

  let response: Response;

  try {
    response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  } catch {
    // Network-level failure (offline, DNS, etc.)
    throw new Error(
      "Unable to reach the server. Please check your connection and try again.",
    );
  }

  const data: ContactApiResponse = await response.json().catch(() => ({
    error: "Unexpected server response.",
  }));

  if (!response.ok) {
    const errorMessage =
      "error" in data ? data.error : "Something went wrong. Please try again.";
    throw new Error(errorMessage);
  }
}
