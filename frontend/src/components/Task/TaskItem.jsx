function TaskItem({ task, onUpdate, onDelete }) {
  const handleStatusChange = async (e) => {
    try {
      await onUpdate(task._id, { status: e.target.value });
    } catch (error) {
      alert("Failed to update task");
    }
  };

  return (
    <div className="card flex justify-between items-center">
      <div>
        <h3 className="text-lg font-semibold text-indigo-700">{task.title}</h3>
        <p className="text-sm text-gray-600">{task.description}</p>
        <p className="text-sm text-gray-500">
          Created: {new Date(task.createdAt).toLocaleDateString()}
        </p>
        {task.completedAt && (
          <p className="text-sm text-gray-500">
            Completed: {new Date(task.completedAt).toLocaleDateString()}
          </p>
        )}
      </div>
      <div className="flex items-center gap-2">
        <select
          value={task.status}
          onChange={handleStatusChange}
          className="input"
        >
          <option value="Not Started">Not Started</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
        <button
          onClick={() => onDelete(task._id)}
          className="btn btn-primary bg-red-600 hover:bg-red-700"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
