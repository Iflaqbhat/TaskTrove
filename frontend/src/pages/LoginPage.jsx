import Login from "../components/Auth/Login.jsx";

function LoginPage() {
  return (
    <div className="max-w-md mx-auto mt-8">
      <h1 className="text-4xl font-bold text-indigo-800 mb-8 text-center">
        Login to TaskTrove
      </h1>
      <div className="card">
        <Login />
      </div>
    </div>
  );
}

export default LoginPage;
