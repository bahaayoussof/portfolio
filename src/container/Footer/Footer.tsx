import { IconMail } from "@tabler/icons-react";
import { socialLinks } from "../../data";
import ContactForm from "../../components/ContactForm/ContactForm";

import "./Footer.scss";

const Footer = () => {
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
            {/* Social links */}
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

            {/* Contact form — all logic lives in ContactForm */}
            <ContactForm />
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

