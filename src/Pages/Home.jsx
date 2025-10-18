import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Leaf, Wind, Droplet, Zap } from "lucide-react";
import Plantimg from "../assets/plant-white_1308-41021-removebg-preview.png";

const Home = () => {
  // Marquee animation
  const marqueeVariants = {
    animate: {
      x: [0, -2000],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 25,
          ease: "linear",
        },
      },
    },
  };

  const pollutants = [
    "Reduces SO2",
    "Filters PM10",
    "Eliminates NO2",
    "Removes CO",
    "Controls O3",
    "Cleans PM2.5",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen transition-colors duration-500 overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-cyan-50 dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Floating Background Elements - Light Mode */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl opacity-20 bg-emerald-400 dark:opacity-0"
        animate={{
          y: [0, 30, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-72 h-72 rounded-full blur-3xl opacity-20 bg-cyan-400 dark:opacity-0"
        animate={{
          y: [0, -30, 0],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />

      {/* Floating Background Elements - Dark Mode */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl opacity-0 dark:opacity-20 bg-cyan-500"
        animate={{
          y: [0, 30, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-72 h-72 rounded-full blur-3xl opacity-0 dark:opacity-20 bg-green-500"
        animate={{
          y: [0, -30, 0],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />

      {/* Top Marquee Section */}
      <motion.div
        className="overflow-hidden py-6 border-b border-emerald-200 dark:border-slate-700 bg-emerald-50/50 dark:bg-slate-800/50 backdrop-blur-sm"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <motion.div
          className="flex gap-8 whitespace-nowrap px-4"
          variants={marqueeVariants}
          animate="animate"
        >
          {[...pollutants, ...pollutants].map((pollutant, idx) => (
            <motion.span
              key={idx}
              className="text-sm md:text-base font-bold px-4 py-2 rounded-full flex items-center gap-2 text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-900/50"
              whileHover={{ scale: 1.1 }}
            >
              <Leaf size={16} />
              {pollutant}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

      {/* Main Hero Section */}
      <div className="relative z-10">
        <motion.div
          className="px-6 md:px-12 lg:px-20 py-8 md:py-16 grid lg:grid-cols-2 gap-8 md:gap-12 items-center min-h-[calc(100vh-120px)]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content */}
          <motion.div
            className="flex flex-col justify-center space-y-6 md:space-y-8"
            variants={slideInLeft}
          >
            {/* Icon */}
            <motion.div
              className="w-fit p-4 rounded-2xl bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-300"
              whileHover={{ scale: 1.1, rotate: 10 }}
              whileTap={{ scale: 0.95 }}
            >
              <Leaf size={32} />
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={itemVariants}>
              <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight text-black/80 dark:text-gray-100">
                Clean Breath
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-lg md:text-xl leading-relaxed max-w-2xl text-black/70 dark:text-gray-400 font-medium"
              variants={itemVariants}
            >
              Explore the ideal plants tailored to enhance your indoor air quality using the latest real-time data. Discover which green companions can purify the air and create a healthier living environment by effectively filtering pollutants and improving overall air freshness.
            </motion.p>

            {/* Features List */}
            <motion.div
              className="space-y-3"
              variants={itemVariants}
            >
              {[
                { icon: Wind, text: "Real-time Air Quality Data" },
                { icon: Droplet, text: "Advanced Filtration Analysis" },
                { icon: Zap, text: "Smart Recommendations" },
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-center gap-3"
                  whileHover={{ x: 10 }}
                >
                  <motion.div
                    className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-300"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <feature.icon size={20} />
                  </motion.div>
                  <span className="font-semibold text-black/70 dark:text-slate-300">
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.button
              variants={itemVariants}
              className="group relative w-fit px-8 md:px-10 py-4 md:py-5 rounded-xl font-bold text-lg bg-green-300 dark:bg-green-700 text-black dark:text-white hover:bg-yellow-400 dark:hover:bg-green-600 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-400/50 dark:hover:shadow-emerald-500/50"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                className="flex items-center gap-2 md:gap-3"
                whileHover={{ gap: 16 }}
              >
                Find Your Plant Now
                <motion.div
                  animate={{ x: [0, 6, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight size={22} />
                </motion.div>
              </motion.span>
            </motion.button>
          </motion.div>

          {/* Right Content - Plant Image */}
          <motion.div
            className="hidden lg:flex justify-center items-center"
            variants={slideInRight}
          >
            <motion.div
              className="object-cover m-8"
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                y: { duration: 4, repeat: Infinity, repeatType: "mirror" },
              }}
            >
              <img 
                src={Plantimg} 
                alt="Plants" 
                className="max-w-lg rounded-md drop-shadow-2xl"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;