import { ITask } from '../../interfaces';
import './styles.css'

interface TaskProps {
    task: ITask
}

function TodoTask({ task }:TaskProps) {
	return (
		<div className="card">
			<div>
                <p>{ task.nameTask }</p>
            </div>

            <div className="line2" >
            <span className="btn-card">X</span>
            </div>
		</div>
	);
}

export default TodoTask;
