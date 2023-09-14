import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [inputValue,setInputValue] = useState ("")
	const [todos, setTodos] = useState([]);

	return (
		<div className="container">
			<h1>My ToDos</h1>
			<ul>
				<li>
					<input
						type="text"
						onChange={(e)=> setInputValue(e.target.value)}
						value={inputValue}
						onKeyUp={(e) => {
							if (e.key === "Enter") {
								setTodos(todos.concat([inputValue]));
								setInputValue("");
							}
						}}						
						placeholder="Que necesito hacer?" />
				</li>
				{todos.map((item, index) => (
				<li>
					{item}{""}
					<FontAwesomeIcon 
						icon={faTrash}
						onClick={()=>
							setTodos(
								todos.filter(
									(t, currentIndex) =>
										index !== currentIndex
								)
							)						
						}
					/>					 
				</li>
			))}
			</ul>
			<div>{todos.length} tasks</div>
		</div>
	);
};

export default Home;
