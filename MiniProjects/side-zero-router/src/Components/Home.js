import React from "react";
import Cards from "./Cards";
import image from "./image.png";

const Home = () => {
	return (
		<div className="py-2 pb-10 bg-slate-400 flex flex-col justify-center items-center">
			<h1 className="text-3xl py-2 text-center">This is Home</h1>
			<img src={image} className="w-full" alt="" />
			<Cards
				title="Home"
				cardDesc="This is our Home Page"
				imgSrc={"https://images.pexels.com/photos/2522663/pexels-photo-2522663.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
			/>
		</div>
	);
};

export default Home;
