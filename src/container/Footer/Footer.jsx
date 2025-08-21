import React, { useState, useRef } from "react";

import { images } from "../../constants";
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
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:bahaayoussof@gmail.com" className="p-text">
            bahaayoussof@gmail.com
          </a>
        </div>

        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel: +20 1003254585" className="p-text">
            +20 1003254585
          </a>
        </div>
      </div>

      <form
        ref={formRef}
        className="app__footer-form app__flex"
        onSubmit={contactHandler}
      >
        <div className="app__flex">
          <input
            className="p-text"
            type="text"
            placeholder="Your Name"
            name="user_name"
            required
          />
        </div>
        <div className="app__flex">
          <input
            className="p-text"
            type="email"
            placeholder="Your Email"
            name="user_email"
            pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
          />
        </div>

        <div>
          <textarea
            className="p-text"
            placeholder="Your Message"
            name="message"
            required
          />
        </div>
        <button type="submit" className="p-text">
          {!loading ? "Send Message" : "Sending..."}
        </button>
      </form>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__primarybg"
);
