// src/components/Task.jsx
import React from 'react';

const Task = (props) => {
  const { title, deadline, description, priority, done } = props;

  // Exercise Three: choose badge class based on priority
  let badgeClass = "priorityBadge";
  if (priority === "High") {
    badgeClass += " high";
  } else if (priority === "Medium") {
    badgeClass += " medium";
  } else {
    badgeClass += " low";
  }

  return (
    <div
      className="card"
      style={{ backgroundColor: done ? 'lightgrey' : '#5bb4c4' }}
    >
      <p className="title">{title}</p>
      <p><strong>Due:</strong> {deadline}</p>
      {description && <p className="description">{description}</p>}

      {/* Exercise Three: colored badge */}
      <div className={badgeClass}>{priority}</div>

      <button onClick={props.markDone} className="doneButton">Done</button>
      <button className="deleteButton" onClick={props.deleteTask}>Delete</button>
    </div>
  );
};

export default Task;
