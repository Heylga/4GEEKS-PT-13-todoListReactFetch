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
		setTasks([...Task, { text: InputMessage, id: Math.random() * 1000 }]);
		SetInputMessage("");
	};

	const onUserTyping = (e) => {
		if (e.keyCode === 13) {
			console.log("---->", e.target.value);
		}
	};

	const removeItem = (e) => {};

	//RETURN

	return (
		<div>
			<h1 className="text-center mt-5">todos</h1>
			<form className="d-flex justify-content-center">
				<input
					type="text"
					className="todo-input border d-flex justify-content-center"
					onChange={addTask}
					value={InputMessage}
					placeholder="What needs to be done?"
					onKeyDown={onUserTyping}></input>
				<ul className="list-group d-flex justify-content-center">
					<li className="list-group-item d-flex justify-content-center"></li>
				</ul>
				<button className="trash"></button>
			</form>
		</div>
	);
};

export default Home;