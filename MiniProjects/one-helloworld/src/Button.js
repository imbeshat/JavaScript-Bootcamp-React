import React from "react";
import "./App.css";
const Button = ({ title = "Default" }) => {
	return (
		<div>
			<button className="button">{title}</button>
		</div>
	);
};

export default Button;
