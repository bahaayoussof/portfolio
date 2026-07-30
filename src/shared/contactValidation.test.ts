import { describe, expect, it } from "vitest";
import {
  collectContactErrors,
  validateContactField,
  type ContactFormValues,
} from "./contactValidation";

const VALID_VALUES: ContactFormValues = {
  name: "Jane Doe",
  email: "jane@example.com",
  subject: "Let's talk",
  message: "This is a valid message body, well over ten characters.",
};

describe("validateContactField", () => {
  it("accepts valid field values", () => {
    expect(validateContactField("name", VALID_VALUES.name)).toBe("");
    expect(validateContactField("email", VALID_VALUES.email)).toBe("");
    expect(validateContactField("subject", VALID_VALUES.subject)).toBe("");
    expect(validateContactField("message", VALID_VALUES.message)).toBe("");
  });

  it("requires every field", () => {
    expect(validateContactField("name", "")).toBe("Name is required.");
    expect(validateContactField("email", "   ")).toBe("Email is required.");
    expect(validateContactField("subject", "")).toBe("Subject is required.");
    expect(validateContactField("message", "")).toBe("Message is required.");
  });

  it("enforces minimum lengths", () => {
    expect(validateContactField("name", "A")).toBe(
      "Name must be at least 2 characters.",
    );
    expect(validateContactField("subject", "A")).toBe(
      "Subject must be at least 2 characters.",
    );
    expect(validateContactField("message", "too short")).toBe(
      "Message must be at least 10 characters.",
    );
  });

  it("enforces maximum lengths", () => {
    expect(validateContactField("name", "a".repeat(101))).toBe(
      "Name must be at most 100 characters.",
    );
    expect(validateContactField("subject", "a".repeat(151))).toBe(
      "Subject must be at most 150 characters.",
    );
    expect(validateContactField("message", "a".repeat(5001))).toBe(
      "Message must be at most 5000 characters.",
    );
    expect(validateContactField("email", `${"a".repeat(250)}@x.co`)).toBe(
      "Email must be at most 254 characters.",
    );
  });

  it("rejects malformed email addresses", () => {
    expect(validateContactField("email", "not-an-email")).toBe(
      "Please enter a valid email address.",
    );
    expect(validateContactField("email", "missing@domain")).toBe(
      "Please enter a valid email address.",
    );
  });

  it("trims whitespace before validating", () => {
    expect(validateContactField("name", "  Jane  ")).toBe("");
    expect(validateContactField("email", "  JANE@EXAMPLE.COM  ")).toBe("");
  });
});

describe("collectContactErrors", () => {
  it("returns an empty list for fully valid values", () => {
    expect(collectContactErrors(VALID_VALUES)).toEqual([]);
  });

  it("returns one message per invalid field, in field order", () => {
    const errors = collectContactErrors({
      name: "",
      email: "bad-email",
      subject: "",
      message: "short",
    });

    expect(errors).toEqual([
      "Name is required.",
      "Please enter a valid email address.",
      "Subject is required.",
      "Message must be at least 10 characters.",
    ]);
  });
});
