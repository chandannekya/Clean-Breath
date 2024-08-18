import React, { useState } from "react";
import { FaCirclePlus } from "react-icons/fa6";
import { FaCircleMinus } from "react-icons/fa6";
const CarePlant = ({ icon, heading, para }) => {
  const [visible, setVisible] = useState(false);

  // Toggle visibility function
  const handleToggle = () => {
    setVisible(!visible);
  };

  return (
    <div className=" border-[1.5px] border-green-300 max-w-[800px] mx-8 rounded-2xl  my-3">
      <div className="flex items-center justify-between p-4  ">
        <div className="flex gap-5 items-center">
          {" "}
          <div className="text-green-400 text-3xl font-bold"> {icon}</div>
          <h1 className="font-bold text-xl">{heading}</h1>
        </div>
        <button className="text-green-400 text-xl" onClick={handleToggle}>
          <i>{visible ? <FaCircleMinus /> : <FaCirclePlus />}</i>
        </button>
      </div>
      {visible && (
        <div className="p-4 text-[17px]">
          <p>{para}</p>
        </div>
      )}
    </div>
  );
};

export default CarePlant;
