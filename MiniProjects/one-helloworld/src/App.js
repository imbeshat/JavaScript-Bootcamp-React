import "./App.css";
import Button from "./Button";

const App = () => {
	return (
		<div className="App">
			<header className="App-header">
				<p>Hello World!</p>
				<p className="btn-div">
					{/* <button className="button">App Store</button>
					<button className="button">Play Store</button>
					OR */}
					<Button title="App Store" />
					<Button title="Play Store" />
				</p>
			</header>
		</div>
	);
};

export default App;
