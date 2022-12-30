import './App.css';
import TaskList from './components/TaskList';
import Header from './components/Header';
import { useState } from 'react';
import Button from './components/Button';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Have Breakfast', completed: true },
    { id: 2, name: 'Go Shopping', completed: true },
    { id: 3, name: 'Learn React', completed: true },
    { id: 4, name: 'Take a Nap', completed: true },
  ]);
  return (
    <div className='App'>
      <Header />
      <Button text='New Task' />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
