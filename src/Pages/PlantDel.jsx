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
      const plants = await dispatch(getPlants()); // Await the result of the getPlants call
      if (plants && Array.isArray(plants)) {
        setPlantDis(plants); // Set the plant data to state
      } else {
        console.error("Invalid plant data received:", plants);
        setPlantDis([]); // Set empty array as fallback
      }
    } catch (error) {
      console.error("Error fetching plant data:", error);
      setPlantDis([]); // Set empty array on error
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
      ? PlantDis
      : PlantDis.filter((plant) =>
          plant.gases && plant.gases.includes(selectedGas)
        );

  return loading ? (
    <div className=" h-screen flex justify-center items-center">
      {" "}
      <Loader />
    </div>
  ) : (
    <div className="flex flex-col justify-around items-center gap-5 mb-12">
      <div className="border-2 flex items-center gap-2 p-2 bg-transparent rounded-lg mt-5">
        {gases.map((gas) => (
          <div
            key={gas}
            className={`text-center poppins-regular text-black/80 cursor-pointer ${selectedGas === gas ? "bg-green-300 rounded-md scale-105" : "scale-100"
              }`}
            onClick={() => handleGasSelection(gas)}
          >
            <h1 className="p-2">{gas}</h1>
          </div>
        ))}
      </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
          {filteredPlants && filteredPlants.length > 0 ? (
            filteredPlants.map((plant) => (
              <div key={plant._id}>
                <PlantCard
                  plantName={plant.name}
                  plantDetails={plant.scientificName}
                />
              </div>
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500">
              No plants found for the selected gas filter.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlantDel;
