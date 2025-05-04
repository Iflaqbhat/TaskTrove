import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProjects, createProject } from "../services/projectService";

function Dashboard() {
  const [projects, setProjects] = useState([]);
  const [newProjectTitle, setNewProjectTitle] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getProjects();
        setProjects(data);
      } catch (err) {
        setError("Failed to load projects");
      }
    };
    fetchProjects();
  }, []);

  const handleCreateProject = async (e) => {
    e.preventDefault();
    try {
      const project = await createProject({ title: newProjectTitle });
      setProjects([...projects, project]);
      setNewProjectTitle("");
    } catch (err) {
      setError("Failed to create project");
    }
  };

  return (
    <div>
      <h1 className="text-4xl font-bold text-indigo-800 mb-8 text-center">
        Your Dashboard
      </h1>
      <div className="card">
        <h2 className="text-2xl font-semibold mb-4">Create New Project</h2>
        <form onSubmit={handleCreateProject} className="space-y-4">
          {error && <p className="text-red-500">{error}</p>}
          <input
            type="text"
            value={newProjectTitle}
            onChange={(e) => setNewProjectTitle(e.target.value)}
            className="input"
            placeholder="Project title"
            required
          />
          <button type="submit" className="btn btn-primary">
            Create Project
          </button>
        </form>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Your Projects</h2>
        {projects.length === 0 ? (
          <p className="text-gray-600">No projects yet. Create one above!</p>
        ) : (
          <div className="grid gap-4">
            {projects.map((project) => (
              <div key={project._id} className="card">
                <h3
                  className="text-xl font-semibold cursor-pointer hover:text-indigo-600"
                  onClick={() => navigate(`/project/${project._id}`)}
                >
                  {project.title}
                </h3>
                <p className="text-gray-600">
                  Created: {new Date(project.createdAt).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
