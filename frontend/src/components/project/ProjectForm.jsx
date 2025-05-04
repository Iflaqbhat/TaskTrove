import { useState } from "react";
import { createProject } from "../../services/projectService";

function ProjectForm({ onProjectCreated }) {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const project = await createProject({ title });
      onProjectCreated(project);
      setTitle("");
    } catch (error) {
      alert(error.response?.data?.message || "Failed to create project");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-800">Create Project</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Project Title"
        className="input"
        required
      />
      <button type="submit" className="btn btn-primary w-full">
        Create
      </button>
    </form>
  );
}

export default ProjectForm;
