import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Route, Routes, Navigate, Link, Outlet, useParams, NavLink, useNavigate, useLocation } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<Router>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/myapps" element={<Navigate replace to="/learn" />} />
			<Route path="/learn" element={<Learn />}>
				<Route path="courses" element={<Courses />}>
					<Route path=":courseId" element={<CourseId />} />
				</Route>
				<Route path="bundles" element={<Bundles />} />
			</Route>
			<Route path="/dashboard" element={<Dashboard />} />
		</Routes>
	</Router>
);

function Home() {
	return (
		<div>
			<h1>Home Route</h1>
		</div>
	);
}
function Learn() {
	return (
		<div>
			<h1>Learn</h1>
			<h4>All courses are listed here</h4>
			<Link to="/learn/courses">courses</Link>
			<br />
			<Link to="/learn/bundles">bundles</Link>
			<Outlet />
		</div>
	);
}

function Courses() {
	const courseList = ["React", "Angular", "Vue", "Nodejs"];
	const randomCourseList = courseList[Math.floor(Math.random() * courseList.length)];
	return (
		<div>
			<h1>Courses</h1>
			<p>More Test</p>
			<NavLink
				style={({ isActive }) => {
					return {
						backgroundColor: isActive ? "red" : "yellow",
					};
				}}
				to={`/learn/courses/${randomCourseList}`}
			>
				Random Course
			</NavLink>
			<NavLink to={`/learn/courses/test`}> Test</NavLink>
			<Outlet />
		</div>
	);
}
function Bundles() {
	return (
		<div>
			<h1>Bundle</h1>
		</div>
	);
}
function CourseId() {
	const navigate = useNavigate();
	const { courseId } = useParams();
	return (
		<div>
			<h1>URL Params is: {courseId}</h1>
			<button
				onClick={() => {
					navigate("/dashboard", { state: "399" });
				}}
			>
				Price
			</button>
			<Link to="/dashboard" state={"Django"}>
				Price Link
			</Link>
		</div>
	);
}

function Dashboard() {
	const location = useLocation();
	return (
		<div>
			<h1>Price- Rs. {location.state}</h1>
		</div>
	);
}
