import React from "react";
import image from "./image.png";

const Home = () => {
	return (
		<div className="my-3">
			<h1 className="text-3xl py-2 text-center">This is Home</h1>
			<img src={image} className="w-full" alt="" />
		</div>
	);
};

export default Home;
