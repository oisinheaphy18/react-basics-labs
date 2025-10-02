// src/App.jsx
import './App.css';
import Task from './components/Task';
import React, { useState } from 'react';
import AddTaskForm from './components/Form';
import { v4 as uuidv4 } from 'uuid'; // <-- for unique ids

function App() {
  // Task list state (unchanged)
  const [taskState, setTaskState] = useState({
    tasks: [
      { id: 1, title: 'Dishes',  description: 'Empty dishwasher',              deadline: 'Today',    priority: 'Low',    done: false },
      { id: 2, title: 'Laundry', description: 'Fold clothes and put away',     deadline: 'Tomorrow', priority: 'Medium', done: false },
      { id: 3, title: 'Tidy up', description: 'Clear desk and put items away', deadline: 'Today',    priority: 'High',   done: false }
    ]
  });

  // NEW: form state per the lab step
  const [formState, setFormState] = useState({
    title: '',
    description: '',
    deadline: ''
  });

  // Handlers already present
  const doneHandler = (taskIndex) => {
    const tasks = [...taskState.tasks];
    tasks[taskIndex].done = !tasks[taskIndex].done;
    setTaskState({ tasks });
    console.log(`${taskIndex} ${tasks[taskIndex].done}`);
  };

  const deleteHandler = (taskIndex) => {
    const tasks = [...taskState.tasks];
    tasks.splice(taskIndex, 1);
    setTaskState({ tasks });
  };

  // NEW: form change handler (switch on input "name")
  const formChangeHandler = (event) => {
    let form = { ...formState };

    switch (event.target.name) {
      case 'title':
        form.title = event.target.value;
        break;
      case 'description':
        form.description = event.target.value;
        break;
      case 'deadline':
        form.deadline = event.target.value;
        break;
      default:
        form = formState;
    }
    setFormState(form);
  };

  // The lab asks to log formState to verify changes
  console.log(formState);

  // NEW: form submit handler (uses uuid)
  const formSubmitHandler = (event) => {
    event.preventDefault();

    const tasks = [...taskState.tasks];
    const form = { ...formState };

    form.id = uuidv4();
    // keep behaviour consistent with existing cards
    form.done = false;

    tasks.push(form);
    setTaskState({ tasks });

    // optional: clear the form after submit
    setFormState({ title: '', description: '', deadline: '' });
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

      {/* Form BELOW the cards — now wired with change & submit */}
      <section className="formWrap">
        <AddTaskForm submit={formSubmitHandler} change={formChangeHandler} />
      </section>
    </div>
  );
}

export default App;
