import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    // Main container with dark mode text color and background transition
    <div className="text-center py-20 min-h-screen flex flex-col items-center justify-center transition-colors duration-300 dark:text-gray-200">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="text-lg mt-4">
        The page you are looking for does not exist.
      </p>
      <Link
        to="/"
        // Updated button colors for consistency and dark mode
        className="mt-6 inline-block bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors duration-200 dark:bg-green-700 dark:hover:bg-green-600"
      >
        Go Back to Home
      </Link>
    </div>
  );
};

export default NotFound;