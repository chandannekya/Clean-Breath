import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    // Main container now has smooth color transitions
    <div className="flex lg:flex-row flex-col-reverse transition-colors duration-300">
      {/* Left Section */}
      <motion.div
        className="justify-center flex mx-8 h-screen flex-col w-11/12"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          // Heading color for dark mode
          className="poppins-bold text-black/80 text-8xl dark:text-gray-100"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          Clean Breath
        </motion.h1>

        <motion.p
          // Paragraph color for dark mode
          className="text-xl w-[65%] poppins-regular text-black/70 font-medium dark:text-gray-400"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          Explore the ideal plants tailored to enhance your indoor air quality
          using the latest real-time data. Discover which green companions can
          purify the air and create a healthier living environment by
          effectively filtering pollutants and improving overall air freshness.
        </motion.p>

        <motion.div
          // Button colors and hover effects for dark mode
          className="bg-green-300 input-shadow w-fit p-3 rounded-md transition-all duration-300 hover:bg-yellow-400 hover:scale-105 mt-2 font-inter text-sm font-semibold dark:bg-green-700 dark:text-white dark:hover:bg-green-600"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to="/plants"
            className="w-full h-full bg-transparent border-none cursor-pointer"
          >
            Find Your Plant Now
          </Link>
        </motion.div>
      </motion.div>

      {/* Right Section */}
      <motion.div
        className="object-cover m-8"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-sm:w-40 pt-5 mt-5 m-auto">
          <img
            src="https://img.freepik.com/free-vector/plant-white_1308-41021.jpg?w=740&t=st=1722587912~exp=1722588512~hmac=82f333fd6be41f3dbef8a5c8e51d465f182a81395f5c460bbb3816a5d6f75333"
            alt="Plants"
            className="rounded-md"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Home;