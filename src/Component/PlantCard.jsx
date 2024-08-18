import React, { useEffect, useState } from "react";
import PlantDis from "../PlantDis";
import searchPhotos from "./Function/SearchImage";
import { Link } from "react-router-dom";
const PlantCard = ({ plantName, plantDetails }) => {
  const [Img, setImg] = useState("");

  useEffect(() => {
    // Call searchPhotos when the component mounts or plantName changes
    const fetchPhotos = async () => {
      const results = await searchPhotos(plantName);
      setImg(results);
    };

    fetchPhotos();
  }, [plantName]);

  return (
    <div>
      <div className="w-[370px] flex flex-col rounded-lg border-2 mt-3 ">
        <img
          className=" w-[370px] h-[370px] object-cover hover:scale-95 transition-all duration-500 ease-in-out rounded-md  "
          src={Img}
          alt=""
          srcset=""
        />
        <div className="flex justify-between mr-4">
          <div>
            <h1 className="poppins-bold m-2  text-black/80 ">{plantName}</h1>
            <h2 className="poppins-regular mx-2 mb-1 text-black/50">
              {plantDetails.scientificName}
            </h2>
          </div>
          <Link
            to={`/plant/${encodeURIComponent(plantName)}`}
            className="bg-green-300 rounded-md flex p-2 items-center m-4 text-white/70 hover:scale-105 transition-all duration-300 ease-in-out  poppins-regular"
          >
            Know More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PlantCard;
