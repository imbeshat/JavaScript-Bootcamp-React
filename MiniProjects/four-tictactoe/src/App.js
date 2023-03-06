import React, { useState } from "react";
import "./App.css";
import Icon from "./components/Icon";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardBody, Container, Button, Col, Row } from "reactstrap";

const itemArray = new Array(9).fill("empty");

const App = () => {
	const [isCross, setIsCross] = useState(false);
	const [winMessage, setWinMessage] = useState("");

	const reloadGame = () => {
		//
	};

	const checkIsWinner = () => {
		//
	};

	const changeItem = (itemNumber) => {
		//
	};

	return (
		<div className="App">
			<header className="App-header">
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					<Icon />
					Learn React
				</a>
			</header>
		</div>
	);
};

export default App;
