import { useState } from "react";
import { createTask } from "../../services/taskService";

function TaskForm({ projectId, onTaskCreated }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "Not Started",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const task = await createTask({ ...formData, projectId });
      onTaskCreated(task);
      setFormData({ title: "", description: "", status: "Not Started" });
    } catch (error) {
      alert(error.response?.data?.message || "Failed to create task");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-800">Create Task</h2>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Task Title"
        className="input"
        required
      />
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Task Description"
        className="input"
        required
      />
      <select
        name="status"
        value={formData.status}
        onChange={handleChange}
        className="input"
      >
        <option value="Not Started">Not Started</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
      <button type="submit" className="btn btn-primary w-full">
        Create
      </button>
    </form>
  );
}

export default TaskForm;
