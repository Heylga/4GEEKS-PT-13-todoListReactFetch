import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	//HOOKS
	const [InputMessage, SetInputMessage] = useState("")
	const [Task, setTasks] = useState([])

	//FETCH


	//Functions addItem and RemoveItem

	const addTask = (e) => {
		SetInputMessage (e.target.value);
		console.log (e.target.value);
	};

	const removeItem = (e) => {
		
	}



	return (
		<div>
			<h1 className="text-center mt-5">todos</h1>
			
		</div>
	);
};

export default Home;
