import React, { Fragment } from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { skills, experiences } from "../../data";

import "./Skills.scss";
const Skills = () => {
	return (
		<>
			<h2 className="head-text">Skills & Experiences</h2>

			<div className="app__skills-container">
				<motion.div className="app__skills-list">
					{skills.map(skill => {
						return (
							<motion.div
								whileInView={{ opacity: [0, 1] }}
								transition={{ duration: 0.5 }}
								className="app__skills-item app__flex"
								key={skill.id}
							>
								<div className="app__flex">
									<img src={skill.icon} alt={skill.name} />
								</div>
								<p className="p-text">{skill.name}</p>
							</motion.div>
						);
					})}
				</motion.div>
				<div className="app__skills-exp">
					{experiences.map(experience => (
						<motion.div className="app__skills-exp-item" key={experience.id}>
							<div className="app__skills-exp-year">
								<p className="bold-text">{experience.year}</p>
							</div>
							<motion.div className="app__skills-exp-works">
								{experience.works.map(work => (
									<Fragment key={work.id}>
										<motion.div
											whileInView={{ opacity: [0, 1] }}
											transition={{ duration: 0.5 }}
											className="app__skills-exp-work"
										>
											<h4 className="bold-text">{work.title}</h4>
											<p className="p-text">{work.company}</p>
										</motion.div>
									</Fragment>
								))}
							</motion.div>
						</motion.div>
					))}
				</div>
			</div>
		</>
	);
};

export default AppWrap(MotionWrap(Skills, "app__skills"), "skills");
