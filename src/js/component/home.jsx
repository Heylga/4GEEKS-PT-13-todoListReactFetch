import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	//HOOKS
	const [InputMessage, SetInputMessage] = useState("");
	const [Task, setTasks] = useState([]);

	//FETCH

	//Functions addItem and RemoveItem

	const addTask = (e) => {
		SetInputMessage(e.target.value);
		console.log(e.target.value);
	};

	const submitTask = (e) => {
		e.preventDefault();
		setTasks([...Task, { Text: InputMessage, id: Math.random() * 1000 }]);
		SetInputMessage("");
	};

	const onUserTyping = (e) => {
		if (e.keyCode === 13) {
			console.log("---->", e.target.value);
		}
	};

	function removeItem(item) {
		const newTask = Task.filter((key) => key !== item);
		setTasks(newTask);
		console.log(newTask);
	}

	//RETURN

	return (
		<div>
			<h1 className="text-center mt-5">todos</h1>
			<form className="d-flex justify-content-center">
				<input
					type="text"
					className="todo-input border d-flex justify-content-center"
					placeholder="What needs to be done?"
					onChange={addTask}
					value={InputMessage}></input>
				<button onClick={submitTask}></button>
			</form>
			<ul>
				{Task.map((item, index) => {
					return (
						<li
							className="list-group-item d-flex justify-content-center"
							key={index}>
							{item.label}
							<button
								className="btn btn-light"
								type="button"
								onClick={() => {
									removeItem(item);
								}}>
								X
							</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Home;
