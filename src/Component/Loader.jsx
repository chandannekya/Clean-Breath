import React from "react";
import Lottie from "lottie-react";
import animation from "../wired-lineal-1827-growing-plant.json";

const Loader = () => {
  return (
    // Add a dark mode background and a smooth color transition to the container
    <div className="flex justify-center items-center transition-colors duration-300 dark:bg-gray-900">
      <div className="w-32 h-32">
        {/*
          Note: The colors of this Lottie animation are defined within its JSON file.
          Tailwind CSS dark mode classes cannot directly change the animation's colors,
          but we can style the container around it.
        */}
        <Lottie animationData={animation} loop={true} />
      </div>
    </div>
  );
};

export default Loader;

