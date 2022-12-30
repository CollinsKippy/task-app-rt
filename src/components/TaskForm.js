import { useState } from 'react';

const TaskForm = ({ onAddNewTask }) => {
  const [task, setTask] = useState('');

  const onHandleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={onHandleSubmit}>
      <label for='task'>Task Name</label>
      <input
        type='text'
        id='task'
        name='task'
        value={task}
        onChange={(event) => setTask(event.target.value)}
      />
      <button onClick={() => onAddNewTask(task)}>Submit</button>
    </form>
  );
};

export default TaskForm;
