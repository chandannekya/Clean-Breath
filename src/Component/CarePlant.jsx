import React, { useState } from "react";
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";

const CarePlant = ({ icon, heading, para }) => {
  const [visible, setVisible] = useState(false);

  // Toggle visibility function
  const handleToggle = () => {
    setVisible(!visible);
  };

  return (
    // Card container styling for dark mode
    <div className="border-[1.5px] border-green-300 max-w-[800px] mx-8 rounded-2xl my-3 transition-colors duration-300 dark:bg-gray-800 dark:border-green-700">
      <div className="flex items-center justify-between p-4">
        <div className="flex gap-5 items-center">
          {/* Icon styling for dark mode */}
          <div className="text-green-400 text-3xl font-bold">
            {icon}
          </div>
          {/* Heading styling for dark mode */}
          <h1 className="font-bold text-xl dark:text-gray-100">{heading}</h1>
        </div>
        {/* Toggle button styling for dark mode */}
        <button className="text-green-400 text-xl dark:text-green-500" onClick={handleToggle}>
          <i>{visible ? <FaCircleMinus /> : <FaCirclePlus />}</i>
        </button>
      </div>
      {visible && (
        <div className="p-4 text-[17px] dark:text-gray-300">
          <p>{para}</p>
        </div>
      )}
    </div>
  );
};

export default CarePlant;
