import { useState, useCallback } from "react";
import { IconSend } from "@tabler/icons-react";
import Toastify from "@/components/Toastify";
import { submitContact, type ContactFormValues } from "@/services/contact";

// ─── Types ────────────────────────────────────────────────────────────────────

type FormField = keyof ContactFormValues;

interface FieldError {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

// ─── Validation ───────────────────────────────────────────────────────────────

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateField(field: FormField, value: string): string {
  const v = value.trim();
  switch (field) {
    case "name":
      if (!v) return "Name is required.";
      if (v.length < 2) return "Name must be at least 2 characters.";
      if (v.length > 100) return "Name must be at most 100 characters.";
      return "";
    case "email":
      if (!v) return "Email is required.";
      if (!EMAIL_RE.test(v)) return "Please enter a valid email address.";
      if (v.length > 254) return "Email is too long.";
      return "";
    case "subject":
      if (!v) return "Subject is required.";
      if (v.length < 2) return "Subject must be at least 2 characters.";
      if (v.length > 150) return "Subject must be at most 150 characters.";
      return "";
    case "message":
      if (!v) return "Message is required.";
      if (v.length < 10) return "Message must be at least 10 characters.";
      if (v.length > 5000) return "Message must be at most 5000 characters.";
      return "";
    default:
      return "";
  }
}

function validateAll(values: ContactFormValues): FieldError {
  return {
    name: validateField("name", values.name),
    email: validateField("email", values.email),
    subject: validateField("subject", values.subject),
    message: validateField("message", values.message),
  };
}

function hasErrors(errors: FieldError): boolean {
  return Object.values(errors).some(Boolean);
}

// ─── Initial state ────────────────────────────────────────────────────────────

const INITIAL_VALUES: ContactFormValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

// ─── Component ────────────────────────────────────────────────────────────────

const ContactForm = () => {
  const [values, setValues] = useState<ContactFormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<FieldError>({});
  const [touched, setTouched] = useState<Partial<Record<FormField, boolean>>>(
    {},
  );
  const [loading, setLoading] = useState(false);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target as { name: FormField; value: string };
      setValues((prev) => ({ ...prev, [name]: value }));

      // Live-validate only after the user has touched the field
      if (touched[name]) {
        setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
      }
    },
    [touched],
  );

  const handleBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target as { name: FormField; value: string };
      setTouched((prev) => ({ ...prev, [name]: true }));
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    },
    [],
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Mark all fields touched so errors appear on submit-with-empty-fields
    const allTouched: Partial<Record<FormField, boolean>> = {
      name: true,
      email: true,
      subject: true,
      message: true,
    };
    setTouched(allTouched);

    const validationErrors = validateAll(values);
    setErrors(validationErrors);

    if (hasErrors(validationErrors)) {
      Toastify({
        type: "error",
        message: "Please fix the errors before sending.",
        id: "contactForm",
      });
      return;
    }

    setLoading(true);

    try {
      await submitContact(values);
      Toastify({
        type: "success",
        message: "Message delivered successfully! I'll be in touch soon.",
        id: "contactForm",
      });
      setValues(INITIAL_VALUES);
      setErrors({});
      setTouched({});
    } catch (err) {
      const message =
        err instanceof Error
          ? err.message
          : "Something went wrong. Please write to bahaayoussof@gmail.com";
      Toastify({ type: "error", message, id: "contactForm" });
    } finally {
      setLoading(false);
    }
  };

  const fieldError = (field: FormField) =>
    touched[field] ? errors[field] : undefined;

  return (
    <form
      onSubmit={handleSubmit}
      className="studio-form"
      noValidate
      aria-label="Contact form"
    >
      {/*
        Honeypot field — hidden from real users via CSS, not `display:none`
        (screen readers & some bots can still detect display:none).
        Bots auto-fill all visible inputs; we check this on the server too.
      */}
      <input
        type="text"
        name="_honey"
        tabIndex={-1}
        aria-hidden="true"
        autoComplete="off"
        style={{
          opacity: 0,
          position: "absolute",
          height: 0,
          width: 0,
          pointerEvents: "none",
        }}
      />

      {/* Name */}
      <div
        className={`form-field ${fieldError("name") ? "form-field--error" : ""}`}
      >
        <label htmlFor="contact-name">Name</label>
        <input
          id="contact-name"
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Your name"
          required
          minLength={2}
          maxLength={100}
          disabled={loading}
          className="form-input"
          aria-describedby={
            fieldError("name") ? "contact-name-error" : undefined
          }
          aria-invalid={!!fieldError("name")}
        />
        {fieldError("name") && (
          <span id="contact-name-error" className="field-error" role="alert">
            {fieldError("name")}
          </span>
        )}
      </div>

      {/* Email */}
      <div
        className={`form-field ${fieldError("email") ? "form-field--error" : ""}`}
      >
        <label htmlFor="contact-email">Email</label>
        <input
          id="contact-email"
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="youremail@email.com"
          required
          maxLength={254}
          disabled={loading}
          className="form-input"
          aria-describedby={
            fieldError("email") ? "contact-email-error" : undefined
          }
          aria-invalid={!!fieldError("email")}
        />
        {fieldError("email") && (
          <span id="contact-email-error" className="field-error" role="alert">
            {fieldError("email")}
          </span>
        )}
      </div>

      {/* Subject */}
      <div
        className={`form-field ${fieldError("subject") ? "form-field--error" : ""}`}
      >
        <label htmlFor="contact-subject">Subject</label>
        <input
          id="contact-subject"
          type="text"
          name="subject"
          value={values.subject}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="What's this about?"
          required
          minLength={2}
          maxLength={150}
          disabled={loading}
          className="form-input"
          aria-describedby={
            fieldError("subject") ? "contact-subject-error" : undefined
          }
          aria-invalid={!!fieldError("subject")}
        />
        {fieldError("subject") && (
          <span id="contact-subject-error" className="field-error" role="alert">
            {fieldError("subject")}
          </span>
        )}
      </div>

      {/* Message */}
      <div
        className={`form-field ${fieldError("message") ? "form-field--error" : ""}`}
      >
        <label htmlFor="contact-message">Message</label>
        <textarea
          id="contact-message"
          name="message"
          value={values.message}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Type your message here..."
          required
          minLength={10}
          maxLength={5000}
          rows={4}
          disabled={loading}
          className="form-textarea"
          aria-describedby={
            fieldError("message") ? "contact-message-error" : undefined
          }
          aria-invalid={!!fieldError("message")}
        />
        {fieldError("message") && (
          <span id="contact-message-error" className="field-error" role="alert">
            {fieldError("message")}
          </span>
        )}
      </div>

      {/* Submit */}
      <button
        id="contact-submit-btn"
        type="submit"
        className={`btn-submit ${loading ? "btn-submit--loading" : ""}`}
        disabled={loading}
        aria-busy={loading}
      >
        <span>{loading ? "Sending…" : "Send Message"}</span>
        {loading ? (
          <span className="btn-spinner" aria-hidden="true" />
        ) : (
          <IconSend size={18} aria-hidden="true" />
        )}
      </button>
    </form>
  );
};

export default ContactForm;
