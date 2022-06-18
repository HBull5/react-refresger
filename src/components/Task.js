import {FaTimes} from 'react-icons/fa';

const Task = ({task, deleteTask, setReminder}) => {
    return(
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => {setReminder(task.id)}}>
            <h3>
                {task.text} 
                <FaTimes style={{color: 'red', cursor: 'pointer'}} onClick={() => {deleteTask(task.id)}}/> {/* Why do you have to call functions like this in react? */}
            </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task; 