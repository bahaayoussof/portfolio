import React, { useState, useRef } from "react";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import emailjs from "@emailjs/browser";

import "./Footer.scss";
const Footer = () => {
	const formRef = useRef();
	const [isFormSubmitted, setIsFormSubmitted] = useState(false);
	const [loading, setLoading] = useState(false);

	const submitHandler = e => {
		e.preventDefault();
		setLoading(true);

		emailjs
			.sendForm("service_ethure6", "template_easeyqg", formRef.current, "5JmXH7MZatKry6YuU")
			.then(
				result => {
					console.log(result.text);
					setIsFormSubmitted(true);
				},
				error => {
					console.log(error.text);
				}
			);
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
					<a href="tel: +20 1006997495" className="p-text">
						+20 1006997495
					</a>
				</div>
			</div>

			{!isFormSubmitted ? (
				<form ref={formRef} className="app__footer-form app__flex" onSubmit={submitHandler}>
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
							required
						/>
					</div>

					<div>
						<textarea className="p-text" placeholder="Your Message" name="message" required />
					</div>
					<button type="submit" className="p-text">
						{!loading ? "Send Message" : "Sending..."}
					</button>
				</form>
			) : (
				<div>
					<h3 className="head-text">Thank you for getting in touch!</h3>
				</div>
			)}
		</>
	);
};

export default AppWrap(MotionWrap(Footer, "app__footer"), "contact", "app__whitebg");
