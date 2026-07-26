import { useState } from "react";
import {
  IconMail,
  IconSend,
} from "@tabler/icons-react";
import { socialLinks } from "../../data";
import Toastify from "../../components/Toastify";

import "./Footer.scss";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface Web3FormsResponse {
  success: boolean;
  message: string;
}

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

const Footer = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const contactHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, email, message, phone } = formData;

    if (!name.trim() || !email.trim() || !message.trim()) {
      Toastify({
        type: "error",
        message: "Please fill in all required fields.",
        id: "contactForm",
      });
      return;
    }

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      Toastify({
        type: "error",
        message: "Contact form is not configured. Please write to bahaayoussof@gmail.com",
        id: "contactForm",
      });
      return;
    }

    setLoading(true);

    try {
      const body = new FormData();
      body.append("access_key", accessKey);
      body.append("name", name.trim());
      body.append("email", email.trim());
      body.append("message", message.trim());
      if (phone.trim()) body.append("phone", phone.trim());
      body.append("botcheck", "");   // honeypot — must be empty

      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        body,
      });

      const data: Web3FormsResponse = await response.json();

      if (response.ok && data.success) {
        Toastify({
          type: "success",
          message: "Message delivered successfully.",
          id: "contactForm",
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        Toastify({
          type: "error",
          message: data.message ?? "Failed to send. Please try again.",
          id: "contactForm",
        });
      }
    } catch {
      Toastify({
        type: "error",
        message: "Unable to send. Please write to bahaayoussof@gmail.com",
        id: "contactForm",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="studio-footer-section" id="contact">
      <div className="footer-container">
        {/* Contact Hero Banner */}
        <div className="footer-hero-banner">
          <div className="connect-badge">
            <span>LET'S CONNECT</span>
          </div>
          <h2 className="connect-title">
            Building a new digital product or scaling an interface?
          </h2>
          <p className="connect-subtitle">
            I'm always open to discussing new opportunities, interesting
            projects, or just having a chat about technology and development.
            Feel free to reach out!
          </p>

          <a href="mailto:bahaayoussof@gmail.com" className="email-direct-chip">
            <IconMail size={18} />
            <span>bahaayoussof@gmail.com</span>
          </a>
        </div>

        <div className="footer-main-grid">
          <div className="form-box">
            <form onSubmit={contactHandler} className="studio-form" noValidate>
              {/* Spam protection honeypot — must stay hidden and empty */}
              <input
                type="checkbox"
                name="botcheck"
                style={{ display: "none" }}
                tabIndex={-1}
                aria-hidden="true"
              />
              <div className="connect-group">
                <div className="socials-icon-row">
                  {socialLinks.map((social) => {
                    const isMail = social.link.startsWith("mailto:");
                    return (
                      <a
                        key={social.id}
                        href={social.link}
                        target={isMail ? undefined : "_blank"}
                        rel={isMail ? undefined : "noreferrer"}
                        className="social-icon-chip"
                        title={social.name}
                        aria-label={social.name}
                      >
                        {social.icon}
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="form-divider">
                <span className="divider-line" />
                <span className="divider-text">or</span>
                <span className="divider-line" />
              </div>
              <div className="form-field">
                <label htmlFor="name">Name:</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  minLength={2}
                  maxLength={100}
                  disabled={loading}
                  className="form-input"
                />
              </div>

              <div className="form-field">
                <label htmlFor="email">Email:</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="youremail@email.com"
                  required
                  maxLength={254}
                  disabled={loading}
                  className="form-input"
                />
              </div>

              <div className="form-field">
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your message here..."
                  required
                  minLength={10}
                  maxLength={2000}
                  rows={4}
                  disabled={loading}
                  className="form-textarea"
                />
              </div>

              <button type="submit" className="btn-submit" disabled={loading}>
                <span>{loading ? "Sending..." : "Send Message"}</span>
                <IconSend size={18} />
              </button>
            </form>
          </div>
        </div>

        <div className="copy-right">
          <span>© {new Date().getFullYear()} Bahaa Youssof</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
