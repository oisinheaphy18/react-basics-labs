// src/components/Task.jsx
import React from 'react';

const Task = (props) => {
  const { title, deadline, description, priority, done } = props;

  return (
    <div
      className="card"
      style={{ backgroundColor: done ? 'lightgrey' : '#5bb4c4' }}  // <— required ternary
    >
      <p className="title">{title}</p>
      <p><strong>Due:</strong> {deadline}</p>
      <p className="description">{description}</p>
      <p className="priority">{priority}</p>

      <button onClick={props.markDone} className="doneButton">Done</button>
     <button className='deleteButton' onClick={props.deleteTask}>Delete</button>
    </div>
  );
};

export default Task;
