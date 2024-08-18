import React from "react";
import Lottie from "lottie-react";
import animation from "../wired-lineal-1827-growing-plant.json";
const Loader = () => {
  return (
    <div className="flex justify-center   items-center">
      <div className="w-32 h-32">
        {" "}
        {/* Adjust the size as needed */}
        <Lottie animationData={animation} loop={true} />
      </div>
    </div>
  );
};

export default Loader;
