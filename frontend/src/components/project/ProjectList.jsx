import { Link } from "react-router-dom";

function ProjectList({ projects }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <Link
          key={project._id}
          to={`/project/${project._id}`}
          className="card hover:bg-indigo-50 transition-colors"
        >
          <h3 className="text-lg font-semibold text-indigo-700">
            {project.title}
          </h3>
          <p className="text-sm text-gray-500">
            Created: {new Date(project.createdAt).toLocaleDateString()}
          </p>
        </Link>
      ))}
    </div>
  );
}

export default ProjectList;
