import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Leaf, AlertCircle, CheckCircle2 } from "lucide-react";
import pimg from "../assets/cactus-pot-isolated_1308-115866-removebg-preview.png";
import Loader from "../Component/Loader";

// Mock data - replace with your actual imports
const aqiThresholds = {
  1: { max: "Good", healthImpact: "No impact", plantingAdvice: "Perfect conditions", warncolor: "text-green-600" },
  2: { max: "Moderate", healthImpact: "Minor respiratory symptoms", plantingAdvice: "Plants can help", warncolor: "text-yellow-600" },
  3: { max: "Unhealthy for Sensitive Groups", healthImpact: "Increased respiratory symptoms", plantingAdvice: "Recommended", warncolor: "text-orange-600" },
  4: { max: "Unhealthy", healthImpact: "Respiratory and heart effects", plantingAdvice: "Highly recommended", warncolor: "text-red-600" },
};

const plantData = {
  co: { pollutant: "Carbon Monoxide", trees: ["Neem", "Areca Palm", "Golden Pothos"] },
  no2: { pollutant: "Nitrogen Dioxide", trees: ["Ficus", "Spider Plant", "Bamboo Palm"] },
  so2: { pollutant: "Sulfur Dioxide", trees: ["Peace Lily", "Snake Plant", "Boston Fern"] },
  o3: { pollutant: "Ozone", trees: ["Rubber Plant", "Dracaena", "Philodendron"] },
  pm2_5: { pollutant: "PM2.5", trees: ["Money Plant", "Pothos", "Snake Plant"] },
  pm10: { pollutant: "PM10", trees: ["English Ivy", "Aloe Vera", "ZZ Plant"] },
};

const airQualityThresholds = {
  "Carbon Monoxide": { safe: 1000, moderate: 5000, healthImpact: "Toxic at high levels" },
  "Nitrogen Dioxide": { safe: 40, moderate: 100, healthImpact: "Respiratory issues" },
  "Sulfur Dioxide": { safe: 20, moderate: 50, healthImpact: "Breathing problems" },
  "Ozone": { safe: 60, moderate: 100, healthImpact: "Asthma attacks" },
  "PM2.5": { safe: 12, moderate: 35, healthImpact: "Cardiovascular effects" },
  "PM10": { safe: 50, moderate: 150, healthImpact: "Respiratory disease" },
};

const getAirQualityCategory = (pollutant, level) => {
  const thresholds = airQualityThresholds[pollutant];
  if (!thresholds) return { category: "Unknown", healthImpact: "N/A" };
  if (level < thresholds.safe) return { category: "Safe", healthImpact: thresholds.healthImpact };
  if (level < thresholds.moderate) return { category: "Moderate", healthImpact: thresholds.healthImpact };
  return { category: "Dangerous", healthImpact: thresholds.healthImpact };
};

const PlantSection = () => {
  const [Loading, setLoading] = useState(false);
  const [city, setCity] = useState("");
  const [gases, setGases] = useState({});
  const [aqi, setAqi] = useState(0);

  const getPlants = async () => {
    try {
      setLoading(true);
      // Mock API call - replace with your actual API
      setTimeout(() => {
        setGases({
          co: 850,
          no2: 65,
          so2: 35,
          o3: 85,
          pm2_5: 28,
          pm10: 120,
        });
        setAqi(2);
        setLoading(false);
      }, 1500);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const changeHandler = (e) => {
    setCity(e.target.value);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen transition-colors duration-500 overflow-hidden bg-white dark:bg-gray-900">
      {/* Floating Background Elements - Light Mode */}
      <motion.div
        className="fixed top-40 left-10 w-80 h-80 rounded-full blur-3xl opacity-10 bg-green-400 dark:opacity-0 pointer-events-none"
        animate={{
          y: [0, 40, 0],
          x: [0, 30, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />
      <motion.div
        className="fixed -bottom-40 right-10 w-96 h-96 rounded-full blur-3xl opacity-10 bg-green-300 dark:opacity-0 pointer-events-none"
        animate={{
          y: [0, -40, 0],
          x: [0, -30, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />

      {/* Floating Background Elements - Dark Mode */}
      <motion.div
        className="fixed top-40 left-10 w-80 h-80 rounded-full blur-3xl opacity-0 dark:opacity-20 bg-green-500 pointer-events-none"
        animate={{
          y: [0, 40, 0],
          x: [0, 30, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />
      <motion.div
        className="fixed -bottom-40 right-10 w-96 h-96 rounded-full blur-3xl opacity-0 dark:opacity-20 bg-green-600 pointer-events-none"
        animate={{
          y: [0, -40, 0],
          x: [0, -30, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />

      {/* Content */}
      <div className="relative z-10 px-6 md:px-12 lg:px-20 py-8 md:py-16">
        {/* Hero Section */}
        <motion.div
          className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mb-16 md:mb-24"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content */}
          <motion.div
            className="flex flex-col gap-6 md:gap-8"
            variants={itemVariants}
          >
            {/* Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-green-800 dark:text-green-400 tracking-tight leading-tight">
              Find Your Green <br /> <span className="bg-gradient-to-r from-green-600 to-green-500 dark:from-green-400 dark:to-green-300 bg-clip-text text-transparent">Guardian!</span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-medium max-w-2xl">
              Discover plants that purify your air and create a healthier environment. Search by air quality needs to find the perfect plant that not only enhances your space but also boosts your well-being.
            </p>

            {/* Search Section */}
            <motion.div
              className="flex gap-3 w-full max-w-md"
              variants={itemVariants}
            >
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-green-600 dark:text-green-400 pointer-events-none" size={20} />
                <input
                  type="text"
                  className="w-full pl-12 pr-4 py-3 md:py-4 rounded-xl border-2 border-green-200 dark:border-green-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:border-green-500 dark:focus:border-green-400 transition-colors duration-300 font-medium"
                  placeholder="Enter your location"
                  onChange={changeHandler}
                  value={city}
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-green-600 to-green-700 dark:from-green-500 dark:to-green-600 text-white font-bold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-green-500/40 dark:hover:shadow-green-500/50 flex items-center gap-2 whitespace-nowrap"
                onClick={getPlants}
              >
                <Leaf size={20} />
                <span>Get Plants</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            className="hidden lg:flex justify-center"
            variants={itemVariants}
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "mirror",
              }}
              className="drop-shadow-2xl"
            >
              <img
                src={pimg}
                alt="Plant"
                className="w-full max-w-md"
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Results Section */}
        <AnimatePresence>
          {Loading ? (
            <motion.div
              className="h-96 flex justify-center items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Loader />
            </motion.div>
          ) : aqi === 0 ? null : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="space-y-12"
            >
              {/* AQI Card */}
              <motion.div
                className={`p-8 md:p-12 rounded-3xl backdrop-blur-lg border-2 ${
                  aqiThresholds[aqi].warncolor === "text-green-600"
                    ? "bg-green-50 dark:bg-green-900/30 border-green-300 dark:border-green-600"
                    : aqiThresholds[aqi].warncolor === "text-yellow-600"
                    ? "bg-yellow-50 dark:bg-yellow-900/30 border-yellow-300 dark:border-yellow-600"
                    : aqiThresholds[aqi].warncolor === "text-orange-600"
                    ? "bg-orange-50 dark:bg-orange-900/30 border-orange-300 dark:border-orange-600"
                    : "bg-red-50 dark:bg-red-900/30 border-red-300 dark:border-red-600"
                }`}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <p className="text-sm font-bold text-gray-600 dark:text-gray-400 uppercase mb-2">Air Quality</p>
                    <h2 className={`text-4xl md:text-5xl font-black ${aqiThresholds[aqi].warncolor}`}>
                      {aqiThresholds[aqi].max}
                    </h2>
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-bold text-gray-600 dark:text-gray-400 uppercase mb-2">Health Impact</p>
                    <p className="text-lg md:text-xl font-bold text-gray-800 dark:text-gray-200">
                      {aqiThresholds[aqi].healthImpact}
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-bold text-gray-600 dark:text-gray-400 uppercase mb-2">Advice</p>
                    <p className="text-lg md:text-xl font-bold text-gray-800 dark:text-gray-200">
                      {aqiThresholds[aqi].plantingAdvice}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Pollutants Grid */}
              <motion.div
                className="space-y-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <h2 className="text-4xl md:text-5xl font-black text-green-800 dark:text-green-400 text-center">
                  Mitigating Plants for Your Area
                </h2>

                <motion.div
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                  variants={containerVariants}
                >
                  {Object.entries(gases).map(([key, value]) => {
                    const pollutant = plantData[key];
                    if (!pollutant) return null;

                    const { category, healthImpact } = getAirQualityCategory(
                      pollutant.pollutant,
                      value
                    );

                    if (category === "Safe") return null;

                    const categoryConfig =
                      category === "Moderate"
                        ? { color: "yellow", icon: AlertCircle }
                        : { color: "red", icon: AlertCircle };

                    return (
                      <motion.div
                        key={key}
                        variants={itemVariants}
                        whileHover={{ y: -8 }}
                        className={`p-6 md:p-8 rounded-2xl backdrop-blur-lg border-2 transition-all duration-300 ${
                          category === "Moderate"
                            ? "bg-yellow-50 dark:bg-yellow-900/20 border-yellow-300 dark:border-yellow-600"
                            : "bg-red-50 dark:bg-red-900/20 border-red-300 dark:border-red-600"
                        }`}
                      >
                        {/* Header */}
                        <div className="flex items-center justify-between mb-4">
                          <h3 className={`text-2xl font-bold ${
                            category === "Moderate"
                              ? "text-yellow-700 dark:text-yellow-400"
                              : "text-red-700 dark:text-red-400"
                          }`}>
                            {pollutant.pollutant}
                          </h3>
                          <categoryConfig.icon size={28} className={`${
                            category === "Moderate"
                              ? "text-yellow-600 dark:text-yellow-400"
                              : "text-red-600 dark:text-red-400"
                          }`} />
                        </div>

                        {/* Stats */}
                        <div className="space-y-3 mb-6 pb-6 border-b border-gray-200 dark:border-gray-700">
                          <p className="text-gray-700 dark:text-gray-300 font-medium">
                            <span className="font-bold">Level:</span> {value.toFixed(2)} µg/m³
                          </p>
                          <p className={`font-bold ${
                            category === "Moderate"
                              ? "text-yellow-700 dark:text-yellow-300"
                              : "text-red-700 dark:text-red-300"
                          }`}>
                            {category}
                          </p>
                          <p className="text-gray-700 dark:text-gray-300 font-medium">
                            <span className="font-bold">Impact:</span> {healthImpact}
                          </p>
                        </div>

                        {/* Plants List */}
                        <h4 className="text-lg font-bold text-green-700 dark:text-green-400 mb-4">
                          Recommended Plants:
                        </h4>
                        <div className="space-y-2">
                          {pollutant.trees.map((tree, index) => (
                            <motion.div
                              key={index}
                              className="p-3 rounded-lg bg-green-50 dark:bg-green-900/30 border-2 border-green-300 dark:border-green-600 text-center font-bold text-green-700 dark:text-green-300 hover:scale-105 transition-transform duration-200 cursor-pointer"
                              whileHover={{ scale: 1.05 }}
                            >
                              {tree}
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default PlantSection;