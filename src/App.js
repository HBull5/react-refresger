import {useState} from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  const [ tasks, setTasks ] = useState([
      {
          id: 1, 
          text: 'Doctors Appointment',
          day: 'Feb 5th at 2:30pm',
          reminder: true
      },
      {
          id: 2, 
          text: 'Learn React',
          day: 'Feb 11th at 5:40pm',
          reminder: false
      },
      {
          id: 3, 
          text: 'Blaze up',
          day: 'April 20th at 4:20pm',
          reminder: true
      },
      {
          id: 4, 
          text: 'Play Pokemon',
          day: 'June 17th at 9:00am',
          reminder: true
      }
  ]);

  function deleteTask(id) {
    setTasks(tasks.filter(task => (task.id !== id)))
  }

  function setReminder(id) {
    setTasks(tasks.map(task => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  function addTask(task) {
    setTasks([...tasks, task]);
  }

  return (
    <div className="container">
      <Header title="Task Tracker" />
      <AddTask addTask={addTask} />
      <Tasks tasks={tasks} deleteTask={deleteTask} setReminder={setReminder} />
    </div>
  );
}

export default App;