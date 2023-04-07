import { useState } from 'react';
import TodoTask from "./components/TodoTask/TodoTask";
import './styles/styles.css'

interface ITask{
	id: number,
	nameTask: string,
}

function App() {
	const [ todoList, setTodoList ] = useState<ITask[]>([]);
	const [ task, setTask ] = useState<string>("");

	// Add task with id and name:
	const addTask = ()=>{
		// Generate random id:
		const idRandom = (num:number) => Math.floor(Math.random() * num);

		const newTask = {
			id: idRandom(100),
			nameTask: task
		}

		// Add task in array:
		setTodoList([...todoList, newTask]);

	}

	return (
		<div className="App">

			<header>

				<h2>Lists</h2>

				<input
					type="text" autoComplete="off" 
					placeholder="Escrever task..." 
					name="task"
					className="input"
					value={task}
					onChange={(e)=>setTask(e.target.value)}
				/>

				<button type="submit" className="btn-header" onClick={addTask}>Adicionar Task</button>
			</header>
			
			<div className="line"></div>

			<TodoTask />
			
		</div>
	);
}

export default App;
