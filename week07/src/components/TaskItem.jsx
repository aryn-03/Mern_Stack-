function TaskItem({ task, onToggle, onDelete }) {
  return (
    <div className={`task-card ${task.completed ? "done" : ""}`}>
      
      <img src={task.image} alt={task.title} />

      <h3>{task.title}</h3>
      <p><b>Brand:</b> {task.brand}</p>
      <p>{task.description}</p>
      <p><b>Price:</b> ₹{task.price}</p>
      <p><b>Priority:</b> {task.priority}</p>

      <button onClick={() => onToggle(task.id)}>
        {task.completed ? "Undo" : "Complete"}
      </button>

      <button onClick={() => onDelete(task.id)}>
        Delete
      </button>
    </div>
  );
}

export default TaskItem;