import Signupform from "../Component/Auth/Signupform";
import Loader from "../Component/Loader";
import { useSelector } from "react-redux";

const SignUp = () => {
  const loading = useSelector((state) => state.auth.loading);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-12">
      {loading ? (
        <Loader />
      ) : (
        <div className="bg-green-50 border border-green-500 rounded-lg shadow-lg w-full max-w-xl p-8">
          <h1 className="text-3xl font-bold text-green-800 mb-4 leading-tight">
            Join Clean Breath
            <br className="hidden sm:block" /> Plant for a Healthier Tomorrow!
          </h1>
          <p className="text-gray-700 text-sm mb-6 leading-relaxed">
            Be part of a greener world! Sign up to explore which plants improve
            air quality and discover how your green choices create a cleaner,
            healthier environment.
          </p>
          <Signupform />
        </div>
      )}
    </div>
  );
};

export default SignUp;
