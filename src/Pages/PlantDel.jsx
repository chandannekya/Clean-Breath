import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PlantCard from "../Component/PlantCard";
import Loader from "../Component/Loader";
import { getPlants } from "../service/oprations/plantsApi";
const gases = ["All", "co", "no2", "so2", "o3", "pm2_5", "pm10"];
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
const PlantDel = () => {
  const { plantName } = useParams();
  const [selectedGas, setSelectedGas] = useState("All");
  const [PlantDis, setPlantDis] = useState([]);
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);
  const AllPlants = async () => {
    try {
      const plants = await dispatch(getPlants());
      setPlantDis(plants);
    } catch (error) {
      console.error("Error fetching plant data:", error);
    }
  };
  useEffect(() => {
    AllPlants();
  }, []);

  const handleGasSelection = (gas) => {
    setSelectedGas(gas);
  };

  const filteredPlants =
    selectedGas === "All"
      ? Object.entries(PlantDis)
      : Object.entries(PlantDis).filter(([key, plantDetails]) =>
          plantDetails.gases.includes(selectedGas)
        );

  return loading ? (
    // Loader container background for dark mode
    <div className="h-screen flex justify-center items-center transition-colors duration-300 dark:bg-gray-900">
      <Loader />
    </div>
  ) : (
    <div className="flex flex-col justify-around items-center gap-5 mb-12 transition-colors duration-300">
      {/* Filter buttons border and text for dark mode */}
      <div className="border-2 flex items-center gap-2 p-2 bg-transparent rounded-lg mt-5 dark:border-gray-700">
        {gases.map((gas) => (
          <div
            key={gas}
            className={`text-center poppins-regular cursor-pointer dark:text-gray-200 ${
              selectedGas === gas
                ? "bg-green-300 rounded-md scale-105 dark:bg-green-700"
                : "scale-100"
            }`}
            onClick={() => handleGasSelection(gas)}
          >
            <h1 className="p-2">{gas}</h1>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
        {filteredPlants.map(([key, plantDetails]) => (
          <div key={plantDetails._id}>
            <PlantCard
              plantName={plantDetails.name}
              plantDetails={plantDetails.scientificName}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlantDel;