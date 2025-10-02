// src/components/Form.jsx
import React from "react";

const AddTaskForm = () => {
  return (
    <form className="taskForm">
      <label htmlFor="title">Task title:</label>
      <input id="title" type="text" name="title" required />

      <label htmlFor="deadline">Due date:</label>
      <input id="deadline" type="date" name="deadline" required />

      <label htmlFor="description">Details:</label>
      <input id="description" type="text" name="description" />

      <input type="submit" value="Submit" />
    </form>
  );
};

export default AddTaskForm;
