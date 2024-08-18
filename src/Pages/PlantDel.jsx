import React, { useState } from "react";
import { useParams } from "react-router-dom";
import PlantCard from "../Component/PlantCard";
import PlantDis from "../PlantDis";

const gases = ["All", "co", "no2", "so2", "o3", "pm2_5", "pm10"];

const PlantDel = () => {
  const { plantName } = useParams();
  const [selectedGas, setSelectedGas] = useState("All");

  const handleGasSelection = (gas) => {
    setSelectedGas(gas);
  };

  const filteredPlants =
    selectedGas === "All"
      ? Object.entries(PlantDis)
      : Object.entries(PlantDis).filter(([key, plantDetails]) =>
          plantDetails.gases.includes(selectedGas)
        );

  return (
    <div>
      <div className="flex flex-col justify-around items-center gap-5">
        <div className="border-2 flex  items-center  p-2 bg-transparent rounded-lg mt-5">
          {gases.map((gas) => (
            <div
              key={gas}
              className={`text-center poppins-regular text-black/80 cursor-pointer ${
                selectedGas === gas ? "bg-green-300 rounded-md p-2" : ""
              }`}
              onClick={() => handleGasSelection(gas)}
            >
              <h1 className="p-2">{gas}</h1>
            </div>
          ))}
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
          {filteredPlants.map(([key, plantDetails]) => (
            <div key={key}>
              <PlantCard plantName={key} plantDetails={plantDetails} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlantDel;
