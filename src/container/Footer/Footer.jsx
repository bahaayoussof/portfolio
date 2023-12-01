import React, { useState, useRef } from "react";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";

import "./Footer.scss";
const Footer = () => {
	const formRef = useRef();
	const [isFormSubmitted, setIsFormSubmitted] = useState(false);
	const [loading, setLoading] = useState(false);

	const getEmailMessage = ({ username, email, message } = {}) => {
		return `
        <p>You have received a new message from your portfolio contact form:</p>
        <div style="padding: 12px">
            <p style="margin: 0">Name: ${username}</p>
            <p style="margin: 12px 0">Email: ${email}</p>
            <p style="margin: 0">Message: ${message}</p>
        </div>
    `;
	};

	const contactHandler = async event => {
		if (event) event.preventDefault();
		setLoading(true);
		const { user_name, user_email, message } = formRef?.current;
		const emailMessage = getEmailMessage({
			username: user_name?.value,
			email: user_email?.value,
			message: message?.value,
		});
		const requestBody = {
			to: "bahaayoussof@gmail.com",
			subject: "Message From Portfolio",
			message: emailMessage,
		};
		try {
			const res = await fetch("https://sendmail-api-docs.vercel.app/api/send", {
				method: "POST",
				body: JSON.stringify(requestBody),
			});
			if (res.ok) {
				setIsFormSubmitted(true);
				const data = await res.json();
				console.log({ data });
			}
		} catch (error) {
			console.log({ error });
		} finally {
			setLoading(false);
			setIsFormSubmitted(false);
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

			{!isFormSubmitted ? (
				<form ref={formRef} className="app__footer-form app__flex" onSubmit={contactHandler}>
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
