import React, { useEffect, useState } from "react";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Todo from "./components/Todos";
import TodoForm from "./components/TodoForm";

function App() {
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		const localTodos = localStorage.getItem("todos");
		if (localTodos) {
			setTodos(JSON.parse(localTodos));
		}
	}, []);

	const addTodos = async (todo) => {
		setTodos([...todos, todo]);
	};

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	const markComplete = (id) => {
		setTodos(todos.filter((todos) => todos.id !== id));
	};

	return (
		<Container className="fluid">
			<h1>Todo with local storage</h1>
			<Todo todos={todos} markComplete={markComplete} />
			<TodoForm addTodos={addTodos} />
		</Container>
	);
}

export default App;
