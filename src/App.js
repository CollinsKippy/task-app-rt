import './App.css';
import TaskList from './components/TaskList';
import Header from './components/Header';
import { useState } from 'react';
import Button from './components/Button';
import TaskForm from './components/TaskForm';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Have Breakfast', completed: true },
    { id: 2, name: 'Go Shopping', completed: true },
    { id: 3, name: 'Learn React', completed: true },
    { id: 4, name: 'Take a Nap', completed: true },
  ]);

  const onAddNewTask = (newTaskName) => {
    const addedTask = {
      id: Math.floor(Math.random() * 1000),
      name: newTaskName,
      completed: false,
    };

    setTasks([...tasks, addedTask]);
  };

  const onDeleteTask = (task) => {
    setTasks([...tasks.filter((t) => t.id !== task.id)]);
  };

  return (
    <div className='App'>
      <Header />
      <Button text='New Task' />
      <TaskForm onAddNewTask={onAddNewTask} /> <hr />
      <TaskList tasks={tasks} onDeleteTask={onDeleteTask} />
    </div>
  );
}

export default App;
