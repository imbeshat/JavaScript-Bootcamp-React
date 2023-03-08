import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";
import AppTheme from "../Colors";
import Header from "./Header";

const HeroSection = () => {
	const theme = useContext(ThemeContext)[0];
	const currentTheme = AppTheme[theme];
	const [themeMode, setThemeMode] = useContext(ThemeContext);

	return (
		<div
			style={{
				padding: "1rem",
				backgroundColor: `${currentTheme.backgroundColor}`,
				color: `${currentTheme.textColor}`,
				textAlign: "center",
				height: "100vh",
			}}
		>
			<Header />
			<h1>Context API theme toggler</h1>
			<p>This is a paragraph</p>
			<button
				style={{
					backgroundColor: "#26ae60",
					padding: "10px 150px",
					fontSize: "20px",
					color: "#ffffff",
					border: `${currentTheme.border}`,
					cursor: "pointer",
				}}
				onClick={() => {
					setThemeMode(themeMode === "light" ? "dark" : "light");
				}}
			>
				{currentTheme.backgroundColor === "#ffffff" ? "Switch to Dark Mode" : "Switch to Light Mode"}
			</button>
		</div>
	);
};

export default HeroSection;
