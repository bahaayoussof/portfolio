import React, { useState, useRef } from "react";
import { LuMail, LuMapPin, LuUser, LuSend } from "react-icons/lu";
import { socialLinks } from "../../data";
import { AppWrap, MotionWrap } from "../../wrapper";
import emailjs from "@emailjs/browser";
import Toastify from "../../components/Toastify";

import "./Footer.scss";

const Footer = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const contactHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );

      if (result.text === "OK") {
        Toastify({
          type: "success",
          message: "Your message has been sent successfully.",
          id: "contactForm",
        });
        formRef.current.reset();
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      Toastify({
        type: "error",
        message:
          "Something went wrong while sending your message! Please try again.",
        id: "contactForm",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app__footer-container">
      {/* Header Section */}
      <div className="app__footer-header">
        <h1 className="app__footer-title">
          Let's <span>Connect</span>
        </h1>
        <p className="app__footer-subtitle">
          Have a project in mind or want to discuss opportunities? I'd love to
          hear from you!
        </p>
      </div>

      {/* Main Content */}
      <div className="app__footer-content">
        {/* Left Column - Contact Information and Social */}
        <div className="app__footer-left-column">
          <div className="app__footer-contact-card">
            <h2>Let's Start a Conversation</h2>
            <p>
              I'm always open to discussing new opportunities, interesting
              projects, or just having a chat about technology and development.
              Feel free to reach out!
            </p>

            <div className="app__footer-contact-details">
              <div className="app__footer-contact-item">
                <LuMail className="contact-icon" />
                <div>
                  <span className="contact-label">Email</span>
                  <a
                    href="mailto:bahaayoussof@gmail.com"
                    className="contact-value"
                  >
                    bahaayoussof@gmail.com
                  </a>
                </div>
              </div>

              <div className="app__footer-contact-item">
                <LuMapPin className="contact-icon" />
                <div>
                  <span className="contact-label">Location</span>
                  <span className="contact-value">
                    Available for Remote Work
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Card */}
          <div className="app__footer-social-card">
            <h3>Connect with me</h3>
            <div className="social-icons">
              {socialLinks.map((social) => (
                <a
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  key={social.id}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="app__footer-form-container">
          <h2>Send Me a Message</h2>
          <form
            ref={formRef}
            className="app__footer-form"
            onSubmit={contactHandler}
          >
            <div className="form-group">
              {/* <label>Your Name</label> */}
              <div className="input-wrapper">
                <input
                  type="text"
                  placeholder="Enter your name"
                  name="user_name"
                  required
                />
                <LuUser className="input-icon user-icon" />
              </div>
            </div>

            <div className="form-group">
              {/* <label>Your Email</label> */}
              <div className="input-wrapper">
                <input
                  type="email"
                  placeholder="Enter your email"
                  name="user_email"
                  pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
                  required
                />
                <LuMail className="input-icon email-input-icon" />
              </div>
            </div>

            <div className="form-group">
              {/* <label>Your Message</label> */}
              <div className="input-wrapper">
                <textarea
                  placeholder="Tell me about your project or just say hello!"
                  name="message"
                  required
                />
              </div>
            </div>

            <button type="submit" className="send-button" disabled={loading}>
              <LuSend />
              {!loading ? "Send Message" : "Sending..."}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__primarybg"
);
