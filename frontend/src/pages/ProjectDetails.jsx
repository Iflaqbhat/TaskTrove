import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} from "../services/taskService";

function ProjectDetails() {
  const { id } = useParams();
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    status: "Not Started",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const data = await getTasks(id);
        setTasks(data);
      } catch (err) {
        setError("Failed to load tasks");
      }
    };
    fetchTasks();
  }, [id]);

  const handleCreateTask = async (e) => {
    e.preventDefault();
    try {
      const task = await createTask({ ...newTask, projectId: id });
      setTasks([...tasks, task]);
      setNewTask({ title: "", description: "", status: "Not Started" });
    } catch (err) {
      setError("Failed to create task");
    }
  };

  const handleUpdateStatus = async (taskId, status) => {
    try {
      const updatedTask = await updateTask(taskId, { status });
      setTasks(tasks.map((task) => (task._id === taskId ? updatedTask : task)));
    } catch (err) {
      setError("Failed to update task");
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
      await deleteTask(taskId);
      setTasks(tasks.filter((task) => task._id !== taskId));
    } catch (err) {
      setError("Failed to delete task");
    }
  };

  return (
    <div>
      <h1 className="text-4xl font-bold text-indigo-800 mb-8 text-center">
        Project Tasks
      </h1>
      <div className="card">
        <h2 className="text-2xl font-semibold mb-4">Add New Task</h2>
        <form onSubmit={handleCreateTask} className="space-y-4">
          {error && <p className="text-red-500">{error}</p>}
          <input
            type="text"
            value={newTask.title}
            onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
            className="input"
            placeholder="Task title"
            required
          />
          <textarea
            value={newTask.description}
            onChange={(e) =>
              setNewTask({ ...newTask, description: e.target.value })
            }
            className="input"
            placeholder="Task description"
          />
          <select
            value={newTask.status}
            onChange={(e) => setNewTask({ ...newTask, status: e.target.value })}
            className="input"
          >
            <option value="Not Started">Not Started</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
          <button type="submit" className="btn btn-primary">
            Add Task
          </button>
        </form>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Tasks</h2>
        {tasks.length === 0 ? (
          <p className="text-gray-600">No tasks yet. Add one above!</p>
        ) : (
          <div className="grid gap-4">
            {tasks.map((task) => (
              <div key={task._id} className="card">
                <h3 className="text-xl font-semibold">{task.title}</h3>
                <p className="text-gray-600">{task.description}</p>
                <p className="text-gray-600">Status: {task.status}</p>
                <p className="text-gray-600">
                  Created: {new Date(task.createdAt).toLocaleDateString()}
                </p>
                <div className="mt-4 space-x-2">
                  <select
                    value={task.status}
                    onChange={(e) =>
                      handleUpdateStatus(task._id, e.target.value)
                    }
                    className="input"
                  >
                    <option value="Not Started">Not Started</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                  </select>
                  <button
                    onClick={() => handleDeleteTask(task._id)}
                    className="btn btn-secondary"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectDetails;
