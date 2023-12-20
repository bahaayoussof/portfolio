import React, { useState, useRef, useEffect } from "react";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

import "./Footer.scss";
const Footer = () => {
	const formRef = useRef();
	const [isFormSubmitted, setIsFormSubmitted] = useState(false);
	const [loading, setLoading] = useState(false);

	// const getEmailMessage = ({ username, email, message } = {}) => {
	// 	return `
	//       <p>You have received a new message from your portfolio contact form:</p>
	//       <div style="padding: 12px">
	//           <p style="margin: 0">Name: ${username}</p>
	//           <p style="margin: 12px 0">Email: ${email}</p>
	//           <p style="margin: 0">Message: ${message}</p>
	//       </div>
	//   `;
	// };

	// const contactHandler = async event => {
	// 	if (event) event.preventDefault();
	// 	setLoading(true);
	// 	const { user_name, user_email, message } = formRef?.current;
	// 	const emailMessage = getEmailMessage({
	// 		username: user_name?.value,
	// 		email: user_email?.value,
	// 		message: message?.value,
	// 	});
	// 	const requestBody = {
	// 		to: "bahaayoussof@gmail.com",
	// 		subject: "Message From Portfolio",
	// 		message: emailMessage,
	// 	};
	// 	try {
	// 		const res = await fetch("https://sendmail-api-docs.vercel.app/api/send", {
	// 			method: "POST",
	// 			body: JSON.stringify(requestBody),
	// 		});
	// 		if (res.ok) {
	// 			setIsFormSubmitted(true);
	// 			const data = await res.json();
	// 			console.log({ data });
	// 		}
	// 	} catch (error) {
	// 		console.log({ error });
	// 	} finally {
	// 		setLoading(false);
	// 		setTimeout(() => {
	// 			setIsFormSubmitted(false);
	// 		}, 3000);
	// 	}
	// };

	const contactHandler = e => {
		e.preventDefault();
		setLoading(true);

		emailjs
			.sendForm("service_ethure6", "template_easeyqg", formRef.current, "5JmXH7MZatKry6YuU")
			.then(
				result => {
					console.log(result);
					setIsFormSubmitted(true);
					if (result.text === "OK") {
						toast.success("Your message has been sent successfully.");
					} else {
						toast.error("Something went wrong while sending your message!, please try again.");
					}
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
							pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
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
