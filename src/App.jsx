import TaskForm from "./Components/Taskform";
import TaskList from "./Components/TaskList";
import ProgressTracker from "./Components/Progresstracker";

export default function App() {
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
