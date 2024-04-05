import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState("")
	const [todos, setTodos] = useState([])

	return (
		<div className="container">
			<h1>Mis Tareas</h1>
			<ul>
				<input 
						type="text" placeholder="¿Qué necesitas hacer?"
						onChange={e => setInputValue(e.target.value)}
						value={inputValue}
						onKeyDown={e => {
							if (e.key === "Enter") {
								if(inputValue.trim().length >= 3){
									todos.push(inputValue);
									console.log(todos)
									setInputValue("");
								}else {
									alert("Por favor, escriba alguna tarea.")
								}
							}
						}}
						/>

				{todos.map((item, index) => {
					return (
					<div className="contenedor">
						<li key={index}> {item}
							<i className="fa-solid fa-trash" onClick={() => setTodos(prevTodos => prevTodos.filter(todo => todo !== item))}></i>
						</li>
					</div>
					)
				})}
			</ul>
			<div className="counter">{todos.length} tareas</div>
		</div>
	);
};

export default Home;
