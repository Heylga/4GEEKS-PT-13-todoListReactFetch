import React, { useState, useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	//HOOKS
	const [InputMessage, SetInputMessage] = useState("");
	const [Task, setTasks] = useState([]);

	//FETCH

	const apiURL = "https://assets.breatheco.de/apis/fake/todos/user/deimian";
	fetch(apiURL)
		.then((res) => res.json())
		.then((data) => console.log("My JSON Tasks response", data))
		.catch((erro) => {
			console.log("Oops something went wrong");
		});

	useEffect(() => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/deimian")
			.then((res) => res.json())
			.then((res) => {
				setTasks(res);
				console.log(res);
			})
			.catch((error) => console.log("Oops! Something went wrong", error));
	}, []);

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

	function removeItem(item) {
		const newTask = Task.filter((key) => key !== item);
		setTasks(newTask);
		console.log(newTask);
	}

	const onUserTyping = (e) => {
		if (e.keyCode === 13) {
			console.log("---->", e.target.value);
		}
	};
	//RETURN

	return (
		<div>
			<h1 className="text-center mt-5">todos</h1>
			<form className="d-flex justify-content-center">
				<input
					type="text"
					className="d-flex justify-content-center list-group-item w-25 fs-4 py-3 shadow p-3"
					placeholder="What needs to be done?"
					onChange={addTask}
					value={InputMessage}
				/>
				<button
					// className="todo-button border d-flex justify-content-center"
					type="submit"
					onClick={submitTask}></button>
			</form>

			<ul className="todo-list list-group ">
				{Task.map((item, index) => {
					return (
						<li
							className="task d-flex justify-content-center list-group-item"
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

				<div className="footer">
					<li className="taskLeft d-flex justify-content-center list-group-item">
						<h5>{Task.length} item left</h5>
					</li>
					<div className="list-group-item shadow bottom "></div>
					<div className="list-group-item shadow bottom-leaf"></div>
					<div className="list-group-item shadow bottom-last"></div>
				</div>
			</ul>
		</div>
	);
};

export default Home;
