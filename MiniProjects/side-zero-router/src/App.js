import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

function App() {
	return (
		<div className="bg-slate-400 flex flex-col items-center h-screen">
			<Navbar />
			<Outlet />
			<Footer />
		</div>
	);
}

export default App;
