import "./App.css";
import { useState } from "react";

function SuperHeros() {
	const [hero, setHero] = useState(["Batman", "Ironman", "Superman"]);
	const [name, setName] = useState(() => "Antman");

	const onAddName = () => {
		setHero([...hero, name]);
		setName("");
	};

	return (
		<div>
			<ul>
				{hero.map((hero) => (
					<li key={hero}>{hero}</li>
				))}
			</ul>
			<input type="text" value={name} onChange={(e) => setName(e.target.value)} />
			<button onClick={onAddName}>Add Value</button>
		</div>
	);
}

function Counter() {
	let [count, setCount] = useState(100);

	function OneUp() {
		setCount(count + 1);
	}

	return (
		<div>
			<button onClick={OneUp}>Count: {count}</button>
			<SuperHeros />
		</div>
	);
}

function App() {
	return (
		<>
			<Counter />
		</>
	);
}

export default App;
