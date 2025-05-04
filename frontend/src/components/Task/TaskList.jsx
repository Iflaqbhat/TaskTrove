import TaskItem from "./TaskItem.jsx";

function TaskList({ tasks, onUpdate, onDelete }) {
  return (
    <div className="grid gap-4">
      {tasks.map((task) => (
        <TaskItem
          key={task._id}
          task={task}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default TaskList;
