import { useState } from "react";
import AddTaskForm from "./AddTaskForm";
import TaskList from "./TaskList";

function TaskManager() {
  const [tasks, setTasks] = useState([]);

  // Add Task
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  // Toggle Complete
  const toggleTask = (id) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const completedCount = tasks.filter(t => t.completed).length;

  return (
    <div className="main-container">
      <div className="task-wrapper">
        <h1> Task Manager</h1>

        <AddTaskForm onAdd={addTask} />

        <p>Total Tasks: {tasks.length}</p>
        <p>Completed: {completedCount}</p>

        <TaskList
          tasks={tasks}
          onToggle={toggleTask}
          onDelete={deleteTask}
        />
      </div>
    </div>
  );
}

export default TaskManager;