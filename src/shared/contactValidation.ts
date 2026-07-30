// Shared between the client form (src/components/ContactForm) and the
// serverless handler (api/contact.ts) so the two never drift apart.

export type ContactField = "name" | "email" | "subject" | "message";

export interface ContactFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const FIELD_LABELS: Record<ContactField, string> = {
  name: "Name",
  email: "Email",
  subject: "Subject",
  message: "Message",
};

const FIELD_LIMITS: Record<ContactField, { min?: number; max: number }> = {
  name: { min: 2, max: 100 },
  email: { max: 254 },
  subject: { min: 2, max: 150 },
  message: { min: 10, max: 5000 },
};

/** Validates one field's trimmed value. Returns "" when valid. */
export function validateContactField(field: ContactField, rawValue: string): string {
  const value = field === "email" ? rawValue.trim().toLowerCase() : rawValue.trim();
  const label = FIELD_LABELS[field];
  const { min, max } = FIELD_LIMITS[field];

  if (!value) return `${label} is required.`;
  if (field === "email" && !EMAIL_RE.test(value)) {
    return "Please enter a valid email address.";
  }
  if (min && value.length < min) return `${label} must be at least ${min} characters.`;
  if (value.length > max) return `${label} must be at most ${max} characters.`;

  return "";
}

const CONTACT_FIELDS: ContactField[] = ["name", "email", "subject", "message"];

/** Validates all fields, returning a map of field -> error ("" when valid). */
export function validateContactForm(
  values: ContactFormValues,
): Record<ContactField, string> {
  return {
    name: validateContactField("name", values.name),
    email: validateContactField("email", values.email),
    subject: validateContactField("subject", values.subject),
    message: validateContactField("message", values.message),
  };
}

/** Validates all fields, returning the list of error messages in field order. */
export function collectContactErrors(values: ContactFormValues): string[] {
  return CONTACT_FIELDS.map((field) => validateContactField(field, values[field])).filter(
    Boolean,
  );
}
