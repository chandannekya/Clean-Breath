import React, { useEffect, useState } from "react";
import { BsDropletHalf } from "react-icons/bs";
import { IoSunny } from "react-icons/io5";
import { GiFertilizerBag } from "react-icons/gi";
import { FaWater, FaTemperatureHigh } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";
import CarePlant from "./CarePlant";
import sunimage from "../assets/climate_lightening_full_sun_da7f3a0b51.webp";
import difficultyimage from "../assets/climate_difficulty_66231487c6.webp";
import { Link } from "react-router-dom";
import { getPlant } from "../service/oprations/plantsApi";
import { useDispatch } from "react-redux";
import searchPhotos from "./Function/SearchImage";

const Plants = ({ plantName }) => {
  const [Plant, setPlant] = useState(null);
  const [photos, setPhotos] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPhotosAndPlant = async () => {
      const results = await searchPhotos(plantName);
      const data = await dispatch(getPlant(plantName));
      setPlant(data);
      setPhotos(results);
    };

    fetchPhotosAndPlant();
  }, [plantName, dispatch]);

  if (!Plant) {
    return (
      // Loader text for dark mode
      <div className="flex justify-center items-center h-screen dark:bg-gray-900 dark:text-gray-300 transition-colors duration-300">
        Loading plant data...
      </div>
    );
  }

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
    // Main container with dark mode background and smooth transition
    <div className="flex justify-center p-5 dark:bg-gray-900 transition-colors duration-300">
      <div className="w-full max-w-7xl">
        {/* Back button styling for dark mode */}
        <div className="bg-black/85 ml-2 text-white flex w-fit p-2 rounded-full dark:bg-gray-700 dark:text-gray-200">
          <Link className="rounded-full" to="/plants">
            <IoMdArrowRoundBack />
          </Link>
        </div>
        <div className="flex justify-between">
          <div className="m-8 lg:mx-8 mx-3 flex flex-col gap-2">
            {/* Plant name heading for dark mode */}
            <h1 className="text-4xl text-black/80 poppins-bold dark:text-gray-100">
              {plantName}
            </h1>
            {/* Scientific name and other names for dark mode */}
            <p className="text-lg poppins-medium text-black/50 dark:text-gray-400">
              {Plant.scientificName}
            </p>
            <p className="poppins-medium text-lg dark:text-gray-200">
              Other Names:
              <span className="ml-1 text-lg poppins-medium-italic text-black/50 dark:text-gray-400">
                {Plant.otherNames?.join(", ")}
              </span>
            </p>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col gap-5 justify-around">
          <div>
            <img
              className="lg:w-[400px] rounded-2xl hover:scale-105 transition duration-300 ease-in-out shadow-lg shadow-green-100 dark:shadow-green-900"
              src={photos}
              alt="Plant"
            />
          </div>

          <div className="lg:w-[60%] flex flex-col gap-5">
            {/* Plant description heading for dark mode */}
            <h2 className="text-3xl text-black/80 poppins-bold dark:text-gray-100">
              Plant Description
            </h2>
            {/* Description paragraph for dark mode */}
            <p className="text-[16px] poppins-regular dark:text-gray-300">
              {Plant.description}
            </p>

            <div className="m-8">
              <div className="flex gap-4 lg:flex-row flex-col">
                {/* Sunlight and Difficulty cards for dark mode */}
                <div className="flex h-[60px] gap-1">
                  <img
                    className="object-contain w-[60px] border-2 p-2 rounded-2xl dark:border-gray-700"
                    src={sunimage}
                    alt="Sunlight"
                  />
                  <div className="flex flex-col justify-between">
                    <p className="text-black/50 poppins-regular dark:text-gray-400">
                      Sunlight
                    </p>
                    <p className="text-black poppins-bold dark:text-gray-200">
                      {Plant.sunlight}
                    </p>
                  </div>
                </div>
                <div className="flex h-[60px] gap-1">
                  <div className="flex gap-1">
                    <img
                      className="object-contain w-[60px] border-2 p-2 rounded-2xl dark:border-gray-700"
                      src={difficultyimage}
                      alt="Difficulty"
                    />
                    <div className="flex flex-col justify-between">
                      <p className="text-black/50 poppins-regular dark:text-gray-400">
                        Difficulty
                      </p>
                      <p className="text-black poppins-bold dark:text-gray-200">
                        {Plant.difficulty}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          {/* Care heading for dark mode */}
          <h1 className="text-2xl poppins-bold m-8 dark:text-gray-100">
            How to Care for the Plant
          </h1>

          <div className="flex lg:flex-row flex-col items-center lg:items-start">
            <div className="lg:w-[60%] w-full">
              {/* This is a child component that also needs to be updated. */}
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
            <div className="lg:w-[30%] text-center">
              {/* Price box styling for dark mode */}
              <div className="p-2 border-[1px] w-full border-green-400 poppins-bold rounded-md dark:border-green-700 dark:text-gray-200">
                Price : {Plant.price}
              </div>
              {/* Buy Plant button styling for dark mode */}
              <div className="bg-green-300 rounded-md p-2 m-4 hover:scale-105 transition-all  text-white duration-300 ease-in-out poppins-regular dark:bg-green-700 dark:text-white">
                <Link
                  to={`/plant/${encodeURIComponent(plantName)}/Order`}
                  className=""
                >
                  Buy Plant
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plants;