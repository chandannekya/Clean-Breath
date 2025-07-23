import React, { useState } from "react";
import axios from "axios";
import plantData from "../PlantData.json";
import treeImage from "../assets/treeimage.png";
import airQualityThresholds from "../ThresholdData";
import aqiThresholds from "../AqiTreshhold";
import { Link } from "react-router-dom";
import pimg from "../assets/cactus-pot-isolated_1308-115866-removebg-preview.png";
import Loader from "../Component/Loader";
import { motion } from "framer-motion"; // Import Framer Motion
import { FaLeaf } from "react-icons/fa";

// Function to determine the air quality category and health impact
const getAirQualityCategory = (pollutant, level) => {
  const thresholds = airQualityThresholds[pollutant];
  if (!thresholds) return { category: "Unknown", healthImpact: "N/A" };

  if (level < thresholds.safe)
    return { category: "Safe", healthImpact: thresholds.healthImpact };
  if (level < thresholds.moderate)
    return { category: "Moderate", healthImpact: thresholds.healthImpact };
  return { category: "Dangerous", healthImpact: thresholds.healthImpact };
};

const geoLocation = async () => {
  return new Promise((resolve, reject) => { 
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const longitude = position.coords.longitude; 
          const latitude = position.coords.latitude;
          resolve({ longitude, latitude }); 
        },
        (error) => {
          console.error("Geolocation error:", error);
          reject(error);
        },
        {
          enableHighAccuracy: true, 
          timeout: 10000,          
          maximumAge: 0          
        }
      );
    } else {
      const error = new Error("Geolocation is not supported by this browser.");
      console.error(error.message);
      reject(error);
    }
  });
};
const PlantSection = () => {
  const [Loading, setLoading] = useState(false);
  const [city, setCity] = useState("");
  const [gases, setGases] = useState({});
  const [aqi, setAqi] = useState(0);

  

  const getPlantsByLocation = async () => {

    const { longitude, latitude } = await geoLocation();
    const lat = Math.round(latitude * 100) / 100;
    const lon = Math.round(longitude * 100) / 100;

    try {
      setLoading(true);
      const key = import.meta.env.VITE_API_KEY;
      const response = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=${key}&q=${lat},${lon}&aqi=yes`
      );
      const { co, no2, so2, o3, pm2_5, pm10 } =
        response.data.current.air_quality;
      const airQuality = { co, no2, so2, o3, pm2_5, pm10 };

      const aqi = response.data.current.air_quality["us-epa-index"];
      setAqi(aqi);
      
      setCity(response.data.location.name);

      setGases(airQuality);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const getPlants = async () => {
    try {
      setLoading(true);
      const key = import.meta.env.VITE_API_KEY;
      const response = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=yes`
      );
      const { co, no2, so2, o3, pm2_5, pm10 } =
        response.data.current.air_quality;
      const airQuality = { co, no2, so2, o3, pm2_5, pm10 };

      const aqi = response.data.current.air_quality["us-epa-index"];
      setAqi(aqi);

      console.log(response.data.current.air_quality);
      setGases(airQuality);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const changeHandler = (e) => {
    setCity(e.target.value);
  };

  return (
    <div className="flex flex-col bg-opacity-40 max-h-full p-8 justify-center">
      <div className="flex lg:flex-row flex-col-reverse items-center justify-around">
        <motion.div
          className="lg:w-2/4 mt-8 gap-4 flex flex-col p-4"
          initial={{ opacity: 0, x: -50 }} // Animation start state
          animate={{ opacity: 1, x: 0 }} // Animation end state
          transition={{ duration: 0.6 }} // Duration of animation
        >
          <h1 className="text-6xl text-black/80 font-bold poppins-bold">
            Find Your Green <br /> Guardian!
          </h1>
          <p className="text-md text-green-800 poppins-regular w-3/4">
            Discover plants that purify your air and create a healthier
            environment. Search by air quality needs to find the perfect plant
            that not only enhances your space but also boosts your well-being.
          </p>

          <div className="flex gap-3 w-11/12">
            <input
              type="text"
              className="bg-slate-500 p-2 poppins-regular placeholder:text-green-900/40 w-full bg-opacity-20 input-shadow focus:outline-green-800 focus:outline focus:outline-2 rounded-sm"
              placeholder="Enter your location"
              onChange={changeHandler}
              value={city}
            />
            <motion.button
              whileHover={{ scale: 1.1 }} // Scale up on hover
              className="bg-green-800 poppins-bold rounded-md p-1 text-xs font-bold transition-all hover:scale-105 duration-200 text-green-200 font-inter"
              onClick={getPlantsByLocation}
            >
              <FaLeaf size={20} className="inline height-4 width-4 m-2" />
            </motion.button>
          </div>
        </motion.div>
        <motion.div
          className="ml-3 mt-5"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            style={{
              filter: "drop-shadow(0px 4px 6px rgba(0, 0, 0, 5))",
            }}
            src={pimg}
            alt="Tree"
          />
        </motion.div>
      </div>
      {Loading ? (
        <Loader />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {aqi === 0 ? null : (
            <motion.div
              className="flex flex-col items-center text-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
            >
              <h1
                className={`text-3xl poppins-bold  ${aqiThresholds[aqi].warncolor} font-bold font-inter`}
              >
                <span>AIR QUALITY:</span> {aqiThresholds[aqi].max}
              </h1>
              <h2 className="text-xl poppins-semibold max-w-[800px] font-semibold">
                <span className="uppercase poppins-bold ">Health Impact :</span>{" "}
                {aqiThresholds[aqi].healthImpact}
              </h2>
              <h3 className="text-lg poppins-semibold max-w-[800px] font-semibold">
                <span className="uppercase poppins-bold">Advice :</span>{" "}
                {aqiThresholds[aqi].plantingAdvice}
              </h3>
            </motion.div>
          )}
          <div className="mt-8 flex lg:flex-row flex-col gap-3">
            {Object.entries(gases).map(([key, value]) => {
              const pollutant = plantData[key];
              if (!pollutant) return null;

              const { category, healthImpact } = getAirQualityCategory(
                pollutant.pollutant,
                value
              );

              if (category === "Safe") return null; // Skip rendering if the category is "Safe"

              const categoryColor =
                category === "Moderate" ? "text-yellow-600" : "text-red-600";

              return (
                <motion.div
                  key={key}
                  className="flex flex-col items-center w-11/12"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-4xl mt-5 poppins-bold text-green-950 font-bold font-inter">
                    Air Quality and Mitigating Trees
                  </h2>
                  <div className="mt-4 p-4 border-slate-400 hover:scale-105 transition-all ease-in-out duration-150 poppins-regular text-left max-w-[400px] rounded-md shadow bg-transparent border-[1px]">
                    <h3 className={`text-xl poppins-bold ${categoryColor}`}>
                      {pollutant.pollutant}
                    </h3>
                    <p>Concentration: {value} µg/m³</p>
                    <p>Category: {category}</p>
                    <p>Health Impact: {healthImpact}</p>
                    <h4 className="text-lg font-semibold text-green-700">
                      Trees that help reduce {pollutant.pollutant}:
                    </h4>
                    <ul className="flex flex-col pl-5">
                      {pollutant.trees.map((tree, index) => (
                        <Link
                          to={`/plant/${encodeURIComponent(tree)}`}
                          key={index}
                          className="mt-3 bg-opacity-20 bg-transparent border-green-800/20 border-[1.5px] text-center p-2 rounded-md"
                        >
                          {tree}
                        </Link>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default PlantSection;
