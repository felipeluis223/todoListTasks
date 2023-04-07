import { ITask } from '../../interfaces';
import './styles.css'

interface TaskProps {
    task: ITask,
    deleteTask(deleteTaskById:number): void
}

function TodoTask({ task, deleteTask }:TaskProps) {
	return (
		<div className="card">
			<div>
                <p>{ task.nameTask }</p>
            </div>

            <div className="line2" >
            <span className="btn-card" onClick={()=>deleteTask(task.id)}>X</span>
            </div>
		</div>
	);
}

export default TodoTask;
