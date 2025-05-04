import Signup from "../components/Auth/Signup.jsx";

function SignupPage() {
  return (
    <div className="max-w-md mx-auto mt-8">
      <h1 className="text-4xl font-bold text-indigo-800 mb-8 text-center">
        Signup for TaskTrove
      </h1>
      <div className="card">
        <Signup />
      </div>
    </div>
  );
}

export default SignupPage;
