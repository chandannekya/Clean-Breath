import Signupform from "../Component/Auth/Signupform";
import Loader from "../Component/Loader";
import { useSelector } from "react-redux";

const SignUp = () => {
  const loading = useSelector((state) => state.auth.loading);

  return (
    // Main container background for dark mode
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-12 transition-colors duration-300 dark:bg-gray-900">
      {loading ? (
        // Loader container background for dark mode
        <div className="min-h-screen w-full flex items-center justify-center dark:bg-gray-900">
          <Loader />
        </div>
      ) : (
        // Signup card styling for dark mode
        <div className="bg-green-50 border border-green-500 rounded-lg shadow-lg w-full max-w-xl p-8 transition-colors duration-300 dark:bg-green-900 dark:border-green-700 dark:shadow-xl">
          {/* Heading text color for dark mode */}
          <h1 className="text-3xl font-bold text-green-800 mb-4 leading-tight dark:text-green-400">
            Join Clean Breath
            <br className="hidden sm:block" /> Plant for a Healthier Tomorrow!
          </h1>
          {/* Paragraph text color for dark mode */}
          <p className="text-gray-700 text-sm mb-6 leading-relaxed dark:text-gray-400">
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