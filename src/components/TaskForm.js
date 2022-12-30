import { useState } from 'react';

const TaskForm = ({ onAddNewTask }) => {
  const [task, setTask] = useState('');

  const onHandleSubmit = (event) => {
    event.preventDefault();
    onAddNewTask(task);
    setTask('');
  };

  return (
    <form onSubmit={onHandleSubmit}>
      <label htmlFor='task'>Task Name</label>
      <input
        type='text'
        id='task'
        name='task'
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type='submit' style={{ backgroundColor: 'lightblue' }}>
        Submit
      </button>
    </form>
  );
};

export default TaskForm;
