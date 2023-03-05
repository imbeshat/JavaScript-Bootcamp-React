import React from "react";

const Card = ({ title = "Football", buttonText = "Click", cardDesc = "lorem ipsum", imgSrc }) => {
	return (
		<div className="card" style={{ width: "18rem" }}>
			<img src={imgSrc} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{title}</h5>
				<p className="card-text">{cardDesc}</p>
				<a href="/" className="btn btn-success">
					{buttonText}
				</a>
			</div>
		</div>
	);
};

export default Card;
