import React from "react";
import ThemeToggler from "./ThemeToggler";

const Header = () => {
	return (
		<header
			style={{
				display: "flex",
				flexDirection: "row",
				alignItems: "center",
				justifyContent: "space-between",
			}}
		>
			<h1>Theme Toggler</h1>
			<ThemeToggler />
		</header>
	);
};

export default Header;
