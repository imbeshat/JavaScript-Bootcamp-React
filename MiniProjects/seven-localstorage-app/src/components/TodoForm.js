import React, { useState } from "react";
import { FormGroup, Input, Form, InputGroup, InputGroupAddon, Button, Container } from "reactstrap";
import { v4 } from "uuid";

const TodoForm = ({ addTodos }) => {
	const [todoString, setTodoString] = useState("");
	const handleSubmit = (e) => {
		e.preventDefault();
		if (todoString === "") {
			alert("Todo can't be empty");
		} else {
			const todo = {
				todoString,
				id: v4(),
			};
			addTodos(todo);
			setTodoString("");
		}
	};
	return (
		<Form onSubmit={handleSubmit}>
			<FormGroup>
				<InputGroup>
					<Input type="text" name="todo" id="todo" placeholder="Enter a todo" value={todoString} onChange={(e) => setTodoString(e.target.value)} />
					<InputGroupAddon addonTypes="prepend">
						<Button color="success">Add Todo</Button>
					</InputGroupAddon>
				</InputGroup>
			</FormGroup>
		</Form>
	);
};

export default TodoForm;
