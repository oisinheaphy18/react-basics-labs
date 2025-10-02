// src/components/Form.jsx
import React from "react";

const AddTaskForm = (props) => {
  return (
    <form className="taskForm" onSubmit={props.submit}>
      <label htmlFor="title">Task title:</label>
      <input
        id="title"
        type="text"
        name="title"
        required
        onChange={(event) => props.change(event)}
      />

      <label htmlFor="deadline">Due date:</label>
      <input
        id="deadline"
        type="date"
        name="deadline"
        required
        onChange={(event) => props.change(event)}
      />

      <label htmlFor="description">Details:</label>
      <input
        id="description"
        type="text"
        name="description"
        onChange={(event) => props.change(event)}
      />

      <input type="submit" value="Submit" />
    </form>
  );
};

export default AddTaskForm;
