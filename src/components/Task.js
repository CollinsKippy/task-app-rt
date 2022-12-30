const Task = ({ task }) => {
  return (
    <div className='task'>
      <span className='task-name'>{task.name}</span>
      <span className='delete-btn'>
        <button>Delete</button>
      </span>
    </div>
  );
};

export default Task;
