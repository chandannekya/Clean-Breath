import React, { useEffect } from "react";
import { BsDropletHalf } from "react-icons/bs";
import { IoSunny } from "react-icons/io5";
import { GiFertilizerBag } from "react-icons/gi";
import { FaWater, FaTemperatureHigh } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";
import CarePlant from "./CarePlant";
import sunimage from "../assets/climate_lightening_full_sun_da7f3a0b51.webp";
import difficultyimage from "../assets/climate_difficulty_66231487c6.webp";
import PlantDis from "../PlantDis";
import searchPhotos from "./Function/SearchImage";
import { useState } from "react";
import { Link } from "react-router-dom";

const Plants = ({ plantName }) => {
  const Plant = PlantDis[plantName];

  if (!Plant) {
    console.error(`Plant data for '${plantName}' not found.`);
    return <div>Plant data not available.</div>;
  }
  const [photos, setPhotos] = useState("");

  useEffect(() => {
    // Call searchPhotos when the component mounts or plantName changes
    const fetchPhotos = async () => {
      const results = await searchPhotos(plantName);
      setPhotos(results);
    };

    fetchPhotos();
  }, [plantName]);

  const CarePlants = [
    {
      heading: "Water",
      para: Plant.watering,
      icon: <BsDropletHalf />,
    },
    {
      heading: "Sunlight",
      para: Plant.sunlight,
      icon: <IoSunny />,
    },
    {
      heading: "Fertilizer",
      para: Plant.fertilizer,
      icon: <GiFertilizerBag />,
    },
    {
      heading: "Soil",
      para: Plant.soil,
      icon: <FaWater />,
    },
    {
      heading: "Temperature",
      para: Plant.temperature,
      icon: <FaTemperatureHigh />,
    },
  ];

  return (
    <div className="flex  justify-center p-5 ">
      <div className=" ">
        <div className="bg-black/85 ml-2 text-white flex w-fit p-2 rounded-full">
          <Link className=" rounded-full " to="/plants">
            <IoMdArrowRoundBack />{" "}
          </Link>
        </div>
        <div className="m-8 lg:mx-8 mx-3  flex flex-col gap-2">
          <h1 className="text-4xl text-black/80 poppins-bold">{plantName}</h1>
          <p className="text-lg poppins-medium text-black/50">
            {Plant.scientificName}
          </p>
          <p className="poppins-medium text-lg">
            Other Names:
            <span className=" ml-1 text-lg poppins-medium-italic text-black/50">
              {Plant.otherNames.join(", ")}
            </span>
          </p>
        </div>

        <div className="flex lg:flex-row flex-col gap-5    justify-around">
          <div>
            <img
              className=" lg:w-[400px] rounded-2xl hover:scale-105 transition duration-300 ease-in-out shadow-lg shadow-green-100"
              src={photos}
              alt="Plant"
            />
          </div>

          <div className="lg:w-[60%] flex flex-col gap-5">
            <h2 className="text-3xl text-black/80 poppins-bold">
              Plant Description
            </h2>
            <p className="text-[16px] poppins-regular">{Plant.description}</p>

            <div className="m-8">
              <div className="flex  gap-4 lg:flex-row flex-col">
                <div className="flex h-[60px] gap-1">
                  <img
                    className="object-contain w-[60px] border-2 p-2 rounded-2xl"
                    src={sunimage}
                    alt="Sunlight"
                  />
                  <div className="flex flex-col justify-between">
                    <p className="text-black/50 poppins-regular">Sunlight</p>
                    <p className="text-black poppins-bold">{Plant.sunlight}</p>
                  </div>
                </div>
                <div className="flex   h-[60px] gap-1">
                  <div className="flex gap-1">
                    <img
                      className="object-contain w-[60px] border-2 p-2 rounded-2xl"
                      src={difficultyimage}
                      alt="Difficulty"
                    />
                    <div className="flex flex-col justify-between">
                      <p className="text-black/50 poppins-regular">
                        Difficulty
                      </p>
                      <p className="text-black poppins-bold">
                        {Plant.difficulty}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-2xl poppins-bold m-8">
            How to Care for the Plant
          </h1>

          <div>
            {CarePlants.map((care, index) => (
              <div key={index}>
                <CarePlant
                  icon={care.icon}
                  heading={care.heading}
                  para={care.para}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plants;
