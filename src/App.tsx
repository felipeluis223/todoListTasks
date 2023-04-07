import { useState } from 'react';
import { ITask } from './interfaces';
import './styles/styles.css'
import TodoTask from "./components/TodoTask/TodoTask";


function App() {
	const [ todoList, setTodoList ] = useState<ITask[]>([]);
	const [ task, setTask ] = useState<string>("");

	// Add task with id and name:
	const addTask = ():void=>{
		if(task === ""){
			window.alert("Digite alguma task");
		}else{
			// Generate random id:
			const idRandom = (num:number) => Math.floor(Math.random() * num);

			const newTask = {
				id: idRandom(100),
				nameTask: task
			}

			// Add task in array:
			setTodoList([...todoList, newTask]);

			window.alert("Task cadastrada com sucesso!");
		}
	} 

	const deleteTask = (deleteTaskId: number):void=>{
		setTodoList(todoList.filter((taskName)=> taskName.id !== deleteTaskId))
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

			{
				todoList.map((task, index)=>(
					<TodoTask task={task} key={index} deleteTask={deleteTask} />
				))
			}
			
		</div>
	);
}

export default App;
