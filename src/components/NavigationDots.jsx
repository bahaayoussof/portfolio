/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";

const NavigationDots = ({ active }) => {
	return (
		<div className="app__navigation">
			{["home", "about", "work", "skills", "testimonials", "contact"].map((item, index) => (
				<a
					key={item + index}
					href={`#${item}`}
					className="app__navigation-dot"
					style={active === item ? { backgroundColor: "#ed6f63" } : {}}
				/>
			))}
		</div>
	);
};

export default NavigationDots;
