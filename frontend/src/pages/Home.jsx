import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="text-center py-16">
      {/* Hero Section */}
      <h1 className="text-5xl font-bold text-indigo-800 mb-6">
        Welcome to TaskTrove
      </h1>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
        Organize your projects and tasks effortlessly. TaskTrove helps you stay
        on top of your work with a simple, intuitive interface. Sign up today to
        get started!
      </p>
      <div className="space-x-4 mb-12">
        <Link to="/signup" className="btn btn-primary text-lg px-6 py-3">
          Get Started
        </Link>
        <Link to="/login" className="btn btn-secondary text-lg px-6 py-3">
          Login
        </Link>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div className="card">
          <h3 className="text-xl font-semibold text-indigo-700 mb-3">
            Manage Projects
          </h3>
          <p className="text-gray-600">
            Create and organize your projects with ease. Keep all your tasks in
            one place.
          </p>
        </div>
        <div className="card">
          <h3 className="text-xl font-semibold text-indigo-700 mb-3">
            Track Tasks
          </h3>
          <p className="text-gray-600">
            Monitor task progress with statuses like Not Started, In Progress,
            and Completed.
          </p>
        </div>
        <div className="card">
          <h3 className="text-xl font-semibold text-indigo-700 mb-3">
            Stay Organized
          </h3>
          <p className="text-gray-600">
            Access your dashboard to see all your projects and tasks at a
            glance.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
