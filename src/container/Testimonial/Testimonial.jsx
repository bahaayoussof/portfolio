import React, { useState } from "react";
import { motion } from "framer-motion";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";

import { AppWrap, MotionWrap } from "../../wrapper";
import { testimonials, brands } from "../../data";

import "./Testimonial.scss";
const Testimonial = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const clickHandler = index => {
		setCurrentIndex(index);
	};

	const test = testimonials[currentIndex];

	return (
		<>
			{testimonials.length ? (
				<>
					<div className="app__testimonial-item app__flex">
						<img src={test.imageUrl} alt="testimonial" />
						<div className="app__testimonial-content">
							<p className="p-text">{test.feedback}</p>
							<div>
								<h4 className="bold-text">{test.name}</h4>
								<h5 className="p-text">{test.company}</h5>
							</div>
						</div>
					</div>

					<div className="app__testimonial-btns app__flex">
						<div
							className="app__flex"
							onClick={() =>
								clickHandler(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)
							}
						>
							<HiChevronDoubleLeft />
						</div>

						<div
							className="app__flex"
							onClick={() =>
								clickHandler(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)
							}
						>
							<HiChevronDoubleRight />
						</div>
					</div>
				</>
			) : null}

			<div className="app__testimonial-brands app__flex">
				{brands.map(brand => (
					<motion.div
						key={brand.id}
						whileInView={{ opacity: [0, 1] }}
						transition={{ duration: 0.5, type: "tween" }}
					>
						<img src={brand.imageUrl} alt={brand.name} />
					</motion.div>
				))}
			</div>
		</>
	);
};

export default AppWrap(
	MotionWrap(Testimonial, "app__testimonial"),
	"testimonial",
	"app__primarybg"
);
