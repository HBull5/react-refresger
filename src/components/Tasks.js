import Task from './Task';

const Tasks = ({tasks, deleteTask, setReminder}) => {
    return( 
        <>
            {tasks.map(task => (
                <Task key={task.id} task={task} deleteTask={deleteTask} setReminder={setReminder} />
            ))}
        </>
    )
}

export default Tasks; 