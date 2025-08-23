import React from "react";
import { AppWrap, MotionWrap } from "../../wrapper";
import { LuMapPin } from "react-icons/lu";
import { socialLinks } from "../../data";

import "./Header.scss";

const Header = () => {
  const handleGetInTouch = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="app__hero" aria-labelledby="hero-title">
      <div className="hero-content">
        {/* Text Content */}
        <div className="hero-text">
          <p className="hero-greeting animate-fade-in">👋 Hello, I'm</p>

          <h1 className="hero-name" id="hero-title">
            <span
              className="floating-text"
              aria-label="Bahaa - animated floating text"
            >
              Bahaa
            </span>
          </h1>

          <h2 className="hero-title animate-fade-in">Software Engineer</h2>

          <p className="hero-description animate-fade-in">
            Passionate Software Engineer with expertise in modern web
            technologies. I specialize in building scalable applications
          </p>
        </div>

        {/* Available for Remote Work Badge */}
        <div
          className="remote-badge animate-fade-in"
          role="status"
          aria-label="Available for remote work"
        >
          <LuMapPin className="location-icon" aria-hidden="true" />
          <span>Available for Remote Work</span>
        </div>

        {/* Social Icons */}
        <div
          className="hero-social-icons animate-fade-in"
          role="navigation"
          aria-label="Social media links"
        >
          {socialLinks.map((social, index) => (
            <a
              key={social.id}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              aria-label={`Visit ${social.name} profile`}
              title={`Visit ${social.name} profile`}
            >
              {React.cloneElement(social.icon, { "aria-hidden": true })}
            </a>
          ))}
        </div>

        {/* Call-to-Action Buttons */}
        <div
          className="hero-buttons animate-fade-in"
          role="group"
          aria-label="Call to action buttons"
        >
          <a
            className="btn-primary"
            rel="noreferrer"
            href="https://docs.google.com/document/d/1sFB48YhA56EVV90pBLlWGts-1O71cSAvuKz-9I2RZsw/edit?usp=sharing"
            target="_blank"
            download="bahaa-youssof-resume.pdf"
            aria-label="Download resume (opens in new tab)"
            title="Download resume"
          >
            Resume
          </a>

          <button
            className="btn-secondary"
            onClick={handleGetInTouch}
            aria-label="Get in touch - navigate to contact form"
            title="Get in touch"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default AppWrap(
  MotionWrap(Header, "app__hero"),
  "home",
  "app__primarybg"
);
