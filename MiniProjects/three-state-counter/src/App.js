import React, { useState } from "react";
import "./App.css";

const App = () => {
	const [count, setCount] = useState(0);

	const resetCounter = () => {
		setCount(0);
	};
	const incrementCount = (value) => {
		if (value < 10) {
			value = value + 1;
			setCount(value);
		} else {
			setCount("Limit Reached.");
		}
	};
	const decrementCount = (value) => {
		if (value > 0) {
			value = value - 1;
			setCount(value);
		} else {
			setCount("Can't go beyond 0.");
		}
	};

	return (
		<div className="App">
			<header>
				<h1>Counter App Using States/Hooks</h1>
			</header>
			<h2>Current Value of count is: {count}</h2>
			<button
				onClick={() => {
					incrementCount(count);
				}}
			>
				Increase Counter
			</button>
			<button
				onClick={() => {
					decrementCount(count);
				}}
			>
				Decrease Counter
			</button>
			<button onClick={resetCounter}>Reset Counter</button>
		</div>
	);
};

export default App;
