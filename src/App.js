import {useEffect, useState} from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function fetchTasks() {
      try {
        const res = await fetch('http://localhost:3001/tasks');
        const data = await res.json(); 
        console.log(data);
        setTasks(data);
      } catch(err) {
        console.log(err);
      }
    }

    fetchTasks(); 
  }, []);

  async function deleteTask(id) {
    try {
      await fetch(`http://localhost:3001/tasks/${id}`, {
        method: 'DELETE'
      });
      setTasks(tasks.filter(task => (task.id !== id)));
    } catch(err) {
      console.log(err);
    }
  }

  async function setReminder(id) {
    try {
      const task = await fetch(`http://localhost:3001/tasks/${id}`);
      const taskData = await task.json();
      await fetch(`http://localhost:3001/tasks/${id}`, {
        method: 'PUT', 
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify({ ...taskData, reminder : !taskData.reminder })
      });
      setTasks(tasks.map(task => task.id === id ? {...task, reminder: !task.reminder} : task));
    } catch(err) {
      console.log(err);
    }
  }

  async function addTask(task) {
    try {
      const res = await fetch('http://localhost:3001/tasks', {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify(task)
      }); // JSON server responds with new entry
      const newTask = await res.json(); 
      setTasks([...tasks, newTask])
    } catch(err) {
      console.log(err);
    }
  }

  function toggleAddTask() {
    setShowAddTask(!showAddTask);
  }

  return (
    <div className="container">
      <Header toggleAddTask={toggleAddTask} showAddTask={showAddTask} title="Task Tracker" />
      {showAddTask && <AddTask addTask={addTask} />}
      <Tasks tasks={tasks} deleteTask={deleteTask} setReminder={setReminder} />
    </div>
  );
}

export default App;