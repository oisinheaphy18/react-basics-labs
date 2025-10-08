// src/App.jsx
import './App.css';
import Task from './components/Task';
import React, { useState } from 'react';
import AddTaskForm from './components/Form';
import { v4 as uuidv4 } from 'uuid'; // for unique ids

function App() {
  // Task list state
  const [taskState, setTaskState] = useState({
    tasks: [
      { id: 1, title: 'Dishes',  description: 'Empty dishwasher',              deadline: 'Today',    priority: 'Low',    done: false },
      { id: 2, title: 'Laundry', description: 'Fold clothes and put away',     deadline: 'Tomorrow', priority: 'Medium', done: false },
      { id: 3, title: 'Tidy up', description: 'Clear desk and put items away', deadline: 'Today',    priority: 'High',   done: false }
    ]
  });

  // --- Exercise Two: form state now includes priority ---
  const [formState, setFormState] = useState({
    title: '',
    description: '',
    deadline: '',
    priority: 'Medium'  // default like the screenshot
  });

  // toggle done
  const doneHandler = (taskIndex) => {
    const tasks = [...taskState.tasks];
    tasks[taskIndex].done = !tasks[taskIndex].done;
    setTaskState({ tasks });
    console.log(`${taskIndex} ${tasks[taskIndex].done}`);
  };

  // delete
  const deleteHandler = (taskIndex) => {
    const tasks = [...taskState.tasks];
    tasks.splice(taskIndex, 1);
    setTaskState({ tasks });
  };

  // Exercise Two: change handler for form inputs
  const formChangeHandler = (event) => {
    let form = { ...formState };

    // use input "name" to decide which field to update
    if (event.target.name === 'title') {
      form.title = event.target.value;
    } else if (event.target.name === 'description') {
      form.description = event.target.value;
    } else if (event.target.name === 'deadline') {
      form.deadline = event.target.value;
    } else if (event.target.name === 'priority') {
      form.priority = event.target.value;
    }
    setFormState(form);
  };

  // (lab asks to log this as you type)
  console.log(formState);

  // Exercise Two: submit adds a new task (with priority)
  const formSubmitHandler = (event) => {
    event.preventDefault();

    const tasks = [...taskState.tasks];
    const form = { ...formState };

    form.id = uuidv4();
    form.done = false;

    // simple guard: if priority somehow empty, keep Medium
    if (!form.priority) {
      form.priority = 'Medium';
    }

    tasks.push(form);
    setTaskState({ tasks });

    // clear inputs after submit (keep Medium default)
    setFormState({ title: '', description: '', deadline: '', priority: 'Medium' });
  };

  return (
    <div className="container">
      <header className="header"><h1>Tasky</h1></header>

      {/* Row of cards */}
      <div className="cards">
        {taskState.tasks.map((task, index) => (
          <Task
            key={task.id}
            title={task.title}
            description={task.description}
            deadline={task.deadline}
            priority={task.priority}
            done={task.done}
            markDone={() => doneHandler(index)}
            deleteTask={() => deleteHandler(index)}
          />
        ))}
      </div>

      {/* Form BELOW the cards */}
      <section className="formWrap">
        <AddTaskForm submit={formSubmitHandler} change={formChangeHandler} />
      </section>
    </div>
  );
}

export default App;
