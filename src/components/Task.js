const Task = ({ task, onDeleteTask }) => {
  return (
    <div className='task'>
      <span className='task-name'>{task.name}</span>
      <span className='delete-btn'>
        <button onClick={() => onDeleteTask(task)}>Delete</button>
      </span>
    </div>
  );
};

export default Task;
