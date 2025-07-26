import Logingform from "../Component/Auth/Loginform";

const Login = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-12">
      <div className="bg-green-50 border border-green-600 shadow-lg rounded-lg w-full max-w-xl p-8">
        <h1 className="text-3xl font-bold text-green-800 mb-4">
          Welcome Back!
        </h1>
        <p className="text-gray-700 text-sm mb-6">
          Sign in to access your dashboard, track air quality, and find the perfect plant for a cleaner, healthier environment.
        </p>
        <Logingform />
      </div>
    </div>
  );
};

export default Login;
