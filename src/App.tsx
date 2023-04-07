import { useState } from 'react';
import TodoTask from "./components/TodoTask/TodoTask";

import './styles/styles.css'

function App() {
	const [ task, setTask ] = useState<string>("");
    console.log(task);

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

				<button type="submit" className="btn-header">Adicionar Task</button>
			</header>
			
			<div className="line"></div>

			<TodoTask />
			
		</div>
	);
}

export default App;
