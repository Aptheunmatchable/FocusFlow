import TaskForm from "./Components/Taskform";
import TaskList from "./Components/TaskList";
import ProgressTracker from "./Components/Progresstracker";
import { useEffect, useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState([]);
  
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  })
  const addTask = (task) => {
    setTasks(...tasks,task);
  }

  return (
    <div>
      <h1>Focus Flow</h1>
      <p>Your best-friend Task Manager</p>
      <TaskForm />
      <TaskList />
      <ProgressTracker />
      <button>Clear all tasks</button>
    </div>
  );
}

// GIT Commands  
// Steps to push project into Repo 
//  
// Git init 
// Git remote –v 
// Git remote add origin url 
// Git add . 
// Git commit –m “message” 
// Git branch 
// Git branch –M main 
// Git push origin main 
// Git push origin main - -force