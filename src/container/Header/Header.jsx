import React from "react";
import { motion } from "framer-motion";

import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Header.scss";

const scaleVariants = {
	whileInView: {
		scale: [0, 1],
		opacity: [0, 1],
		transition: {
			duration: 1,
			ease: "easeInOut",
		},
	},
};

const Header = () => {
	return (
		<div className="app__header app__flex">
			<motion.div
				whileInView={{ x: [-100, 0], opacity: [0, 1] }}
				transition={{ duration: 0.5 }}
				className="app__header-info"
			>
				<div className="app__header-badge">
					<div className="badge-cmp app__flex">
						<span>👋</span>
						<div style={{ marginLeft: 20 }}>
							<p className="p-text">Hello, I am</p>
							<h1 className="head-text">Bahaa</h1>
						</div>
					</div>

					<div className="tag-cmp app__flex">
						<p className="p-text">Software Engineer</p>
						<p className="p-text">Frontend Developer</p>
					</div>

					<div className="app__flex">
						<a
							rel="noreferrer"
							className="resume-button"
							href="https://docs.google.com/document/d/1mLSGu8-FqpHUCwxHeWgl7eGKT7ku_FfH3oX2CpqRq0Q/edit?usp=sharing"
							target="_blank"
							download="Bahaa_Youssof.pdf"
						>
							Resume
						</a>
					</div>
				</div>
			</motion.div>

			<motion.div
				whileInView={{ opacity: [0, 1] }}
				transition={{ duration: 0.5, delayChildren: 0.25 }}
				className="app__header-img"
			>
				<img src={images.profile} alt="profile_image" fetchpriority="high" />
			</motion.div>

			<motion.div
				variant={scaleVariants}
				whileInView={scaleVariants.whileInView}
				className="app__header-circles"
			>
				{[images.redux, images.react, images.sass].map(circle => (
					<div className="circle-cmp app__flex" key={circle}>
						<img src={circle} alt="circle" />
					</div>
				))}
			</motion.div>
		</div>
	);
};

export default AppWrap(Header, "home");
