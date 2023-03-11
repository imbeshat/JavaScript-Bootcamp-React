import React from "react";
import Cards from "./Cards";

const About = () => {
	return (
		<div className="my-3">
			<h1 className="text-3xl py-2 text-center">This is About</h1>
			<p>This is our about page and it's empty.</p>
			<Cards
				title="About Section"
				cardDesc="This is our about page and it's empty."
				imgSrc={"https://images.pexels.com/photos/3532557/pexels-photo-3532557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
			/>
		</div>
	);
};

export default About;
