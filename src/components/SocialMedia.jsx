import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const SocialMedia = () => {
	return (
		<div className="app__social">
			<div>
				<a href="https://www.linkedin.com/in/bahaayoussof/" target="_blank">
					<FaLinkedinIn />
				</a>
			</div>
			<div>
				<a href="https://github.com/bahaayoussof" target="_blank">
					<BsGithub />
				</a>
			</div>
			<div>
				<a href="https://facebook.com/baha2youssof" target="_blank">
					<FaFacebookF />
				</a>
			</div>
		</div>
	);
};

export default SocialMedia;
