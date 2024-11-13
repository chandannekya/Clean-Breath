import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-center py-20">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="text-lg mt-4">
        The page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="mt-6 inline-block bg-blue-500 text-white px-6 py-3 rounded-md"
      >
        Go Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
