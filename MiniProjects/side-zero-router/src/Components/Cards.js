import React from "react";

const Cards = ({ title, cardDesc, imgSrc }) => {
	return (
		<div className="my-4 py-6 px-4 bg-slate-800 text-white rounded-lg w-[25rem]">
			<img src={imgSrc} className="rounded-md" alt="..." />
			<div>
				<h5>{title}</h5>
				<p>{cardDesc}</p>
			</div>
		</div>
	);
};

export default Cards;
