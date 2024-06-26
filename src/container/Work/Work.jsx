import React, { useState } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { projects } from "../../data";

import "./Work.scss";
const Work = () => {
	const [activeFilter, setActiveFilter] = useState("All");
	const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
	const [filterWork, setFilterWork] = useState(projects);

	const workFilterHandler = project => {
		setActiveFilter(project);
		setAnimateCard([{ y: 100, opacity: 0 }]);

		setTimeout(() => {
			setAnimateCard([{ y: 0, opacity: 1 }]);

			if (project === "All") setFilterWork(projects);
			else setFilterWork(projects.filter(work => work.tags.includes(project)));
		}, 500);
	};

	return (
		<>
			<h2 className="head-text">
				My creative <span>Portfolio</span> section
			</h2>

			<div className="app__work-filter">
				{["Web App", "Material UI", "React JS", "Bootstrap", "Tailwind", "All"].map(item => (
					<div
						key={item}
						onClick={() => workFilterHandler(item)}
						className={`app__work-filter-item app__flex p-text ${
							activeFilter === item ? "item-active" : ""
						}`}
					>
						{item}
					</div>
				))}
			</div>

			<motion.div
				animate={animateCard}
				transition={{ duration: 0.5, delayChildren: 0.5 }}
				className="app__work-portfolio"
			>
				{filterWork.map(work => (
					<div className="app__work-item app__flex" key={work.id}>
						<div className="app__work-img app__flex">
							<img src={work.imageUrl} alt={work.title} />

							<motion.div
								whileHover={{ opacity: [0, 1] }}
								transition={{ duration: 0.25, ease: "easeInOut", staggerChildren: 0.5 }}
								className="app__work-hover app__flex"
							>
								<a href={work.projectLink} target="_blank" rel="noreferrer">
									<motion.div
										whileInView={{ scale: [0, 1] }}
										whileHover={{ scale: [1, 0.9] }}
										transition={{ duration: 0.25 }}
										className="app__flex"
									>
										<AiFillEye />
									</motion.div>
								</a>
								<a href={work.codeLink} target="_blank" rel="noreferrer">
									<motion.div
										whileInView={{ scale: [0, 1] }}
										whileHover={{ scale: [1, 0.9] }}
										transition={{ duration: 0.25 }}
										className="app__flex"
									>
										<AiFillGithub />
									</motion.div>
								</a>
							</motion.div>
						</div>

						<div className="app__work-content app__flex">
							<h4 className="bold-text">{work.title}</h4>
							<p className="p-text" style={{ marginTop: 10 }}>
								{work.description}
							</p>

							<div className="app__work-tag app__flex">
								<p className="p-text">{work.tags[0]}</p>
							</div>
						</div>
					</div>
				))}
			</motion.div>
		</>
	);
};

export default AppWrap(MotionWrap(Work, "app__works"), "work", "app__primarybg");
