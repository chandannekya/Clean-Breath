import React from "react";
import PlantSection from "./PlantSection";
import { Link, Navigate, useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();

  return (
    <div
      className=" flex lg:flex-row
     flex-col-reverse "
    >
      <div className="  justify-center   flex  mx-8   h-screen flex-col w-11/12   ">
        <h1 className="   poppins-bold text-black/80 text-8xl ">
          Clean Breath
        </h1>
        <p className="text-xl w-[65%]  poppins-regular text-black/70 font-medium  ">
          Explore the ideal plants tailored to enhance your indoor air quality
          using the latest real-time data. Discover which green companions can
          purify the air and create a healthier living environment by
          effectively filtering pollutants and improving overall air freshness.
        </p>

        <div className="bg-green-300 input-shadow w-fit p-3 rounded-md transition-all duration-300 hover:bg-yellow-400 hover:scale-105 mt-2 font-inter text-sm font-semibold">
          <Link
            to={"/plant"}
            className="w-full h-full bg-transparent border-none cursor-pointer"
          >
            Find Your Plant Now
          </Link>
        </div>
      </div>

      <div className=" object-cover  m-8">
        <img
          src="https://img.freepik.com/free-vector/plant-white_1308-41021.jpg?w=740&t=st=1722587912~exp=1722588512~hmac=82f333fd6be41f3dbef8a5c8e51d465f182a81395f5c460bbb3816a5d6f75333"
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
