import React from "react";
import { Link } from "react-router-dom";
const FeatureCard = ({ icon, heading, description, path }) => {
  return (
    <div className="border-2 p-4 w-[480px] border-green-300 rounded-xl cursor-pointer">
      <Link to={`${path}`}>
        {" "}
        <div className="flex items-center gap-3">
          {" "}
          <h1 className=" text-2xl text-green-400 ">{icon}</h1>
          <h1 className=" text-2xl text-black/70 poppins-bold">{heading}</h1>
        </div>
        <p className="text-black/50">{description}</p>
      </Link>
    </div>
  );
};

export default FeatureCard;
