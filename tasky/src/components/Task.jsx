import React from 'react';

const Task = (props) => {
  // read the props passed in
  const title = props.title;
  const deadline = props.deadline;
  const description = props.description;

  return (
    <div className="card">
      <p className="title">{title}</p>
      <p>Due: {deadline}</p>
      <p className="description">{description}</p>
    </div>
  );
};

export default Task;
