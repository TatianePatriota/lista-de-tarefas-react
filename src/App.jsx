import React, { useState } from "react";
import { v4 as uuidv4} from "uuid";
import {BrowserRouter as Router} from "react-router-dom";

import Tasks from "./Components/Tasks";
import AddTask from "./Components/AddTask";
import Header from "./Components/Header";

import "./App.css"

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Estudar Javascript',
      completed:false,
    },
    {
      id: '2',
      title: 'Estudar React',
      completed: true,
    },
    {
      id:'3',
      title: 'Melhorar LinkedIn',
      completed: false,
    },
    {
      id:'4',
      title: 'Fazer um Projeto Novo',
      completed: false,
    },
    {
      id:'5',
      title: 'Fazer Reunião 1a1',
      completed: true,
    }
  ]);

  const handleTaskClick = (taskId) => {
    const newTasks =tasks.map((task) => {
      if (task.id === taskId) return { ...task, completed: !task.completed }
      return task; 
    });

    setTasks(newTasks);
  };

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [
      ...tasks, 
      {
        title: taskTitle,
        id: uuidv4(),
        completed: false,
      },
    ];
    setTasks(newTasks);
  };

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter(task => task.id !== taskId)

    setTasks(newTasks)
  };

  return (
    <Router>
      <div className="container"> 
        <Header />
            <AddTask handleTaskAddition={handleTaskAddition} />
            <Tasks tasks={tasks} 
            handleTaskClick={handleTaskClick} 
            handleTaskDeletion={handleTaskDeletion} />     
      </div>
    </Router>
  );
};

export default App;