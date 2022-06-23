import {useState, useRef} from 'react';

const AddTask = ({addTask}) => {
    const textInput = useRef(); 
    const dayInput = useRef(); 
    const [text, setText] = useState(''); 
    const [day, setDay] = useState(''); 
    const [reminder, setReminder] = useState(false); 

    function onAdd(e) {
        e.preventDefault(); 

        if(!text || !day) {
            !text ? textInput.current.classList.add('error') : textInput.current.classList.remove('error');
            !day ? dayInput.current.classList.add('error') : dayInput.current.classList.remove('error');
            return; 
        }

        setText('');
        setDay('');
        setReminder(false);
        const newId = Math.random() * (9999 - 4) + 4;
        addTask({id: newId, text, day, reminder});
        textInput.current.classList.remove('error');
        dayInput.current.classList.remove('error');
    }
     
    return(
        <form className='add-form' onSubmit={onAdd}> 
            <div className="form-control">
                <label>Task</label>
                <input ref={textInput} type="text" placeholder="Add Task" value={text} onChange={e => {setText(e.target.value)}}/>
            </div>
            <div className="form-control"> 
                <label>Day & Time</label>
                <input ref={dayInput} type="text" placeholder="Add Day & Time " value={day} onChange={e => {setDay(e.target.value)}}/>
            </div>
            <div className="form-control form-control-check">
                <label>Set Reminder</label>
                <input type="checkbox" value={reminder} checked={reminder} onChange={e => {setReminder(e.target.checked)}} />
            </div>
            <button type="submit" className="btn btn-block">Save Task</button>
        </form>
    )
} 

export default AddTask;