import React from "react";
import { Link } from "react-router-dom";

const FeatureCard = ({ icon, heading, description, path }) => {
  return (
    // Updated card background, border, and hover for dark mode
    <div className="border-2 p-4 lg:w-[480px] border-green-300 transition-all hover:scale-105 duration-300 rounded-xl m-5 cursor-pointer dark:bg-gray-800 dark:border-green-600 dark:hover:bg-green-900">
      <Link to={`${path}`}>
        <div className="flex items-center gap-3">
          {/* Icon color for dark mode */}
          <h1 className="text-2xl text-green-400">
            {icon}
          </h1>
          {/* Heading color for dark mode */}
          <h1 className="text-2xl text-black/70 poppins-bold dark:text-gray-100">
            {heading}
          </h1>
        </div>
        {/* Description color for dark mode */}
        <p className="text-black/50 dark:text-gray-400">{description}</p>
      </Link>
    </div>
  );
};

export default FeatureCard;
