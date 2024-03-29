import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const SocialMedia = () => {
	return (
		<div className="app__social">
			<div>
				<a href="https://www.linkedin.com/in/bahaayoussof/" target="_blank" rel="noreferrer">
					<FaLinkedinIn />
				</a>
			</div>
			<div>
				<a href="https://github.com/bahaayoussof" target="_blank" rel="noreferrer">
					<BsGithub />
				</a>
			</div>
			<div>
				<a href="https://leetcode.com/bahaayoussof/" target="_blank" rel="noreferrer">
					<SiLeetcode />
				</a>
			</div>
		</div>
	);
};

export default SocialMedia;
