import React, { useEffect, useState } from "react";
import Card from "./Card";
import Axios from "axios";

function App() {
	const [details, setDetails] = useState({});

	const fetechDetails = async () => {
		const { data } = await Axios.get("https://randomuser.me/api");
		console.log("RESPONSE", data);

		const details = data.results[0];
		setDetails(details);
	};

	let list = ["batman", "ironman", "spiderman"];

	useEffect(() => {
		fetechDetails();
	}, []);

	return (
		<>
			<div>App</div>
			<Card myname="batman" list={list} details={details} />
			<button onClick={fetechDetails}>get Details</button>
		</>
	);
}

export default App;
