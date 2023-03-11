import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="bg-slate-700 text-white h-10 w-full">
			<ul className="flex flex-row justify-around items-center my-2">
				<Link to="/">
					<li>Home</li>
				</Link>
				<Link to="/about">
					<li>About</li>
				</Link>
				<Link to="/contact">
					<li>Contact Us</li>
				</Link>
			</ul>
		</nav>
	);
};

export default Navbar;
