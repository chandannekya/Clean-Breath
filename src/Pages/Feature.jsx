import React from "react";
import { motion } from "framer-motion";
import { GiConvergenceTarget } from "react-icons/gi";
import { RiPlantFill } from "react-icons/ri";
import { BiMessageSquareEdit } from "react-icons/bi";
import { FaStore } from "react-icons/fa";
import { ArrowRight, Leaf } from "lucide-react";

const Feature = () => {
  const features = [
    {
      icon: <GiConvergenceTarget />,
      path: "/plant",
      heading: "Track Air Quality",
      description:
        "Monitor real-time air quality data and pollutant concentrations to stay informed about your surroundings.",
      color: "from-green-500 to-emerald-600",
      borderColor: "border-green-300 dark:border-green-600",
      lightBg: "bg-green-50",
      darkBg: "dark:bg-green-900/20",
    },
    {
      icon: <RiPlantFill />,
      path: "/plants",
      heading: "Know Your Plant",
      description:
        "Learn about various plants and their benefits, from air purification to aesthetic appeal, and how they can enhance your indoor environment.",
      color: "from-emerald-500 to-teal-600",
      borderColor: "border-emerald-300 dark:border-emerald-600",
      lightBg: "bg-emerald-50",
      darkBg: "dark:bg-emerald-900/20",
    },
    {
      icon: <BiMessageSquareEdit />,
      path: "/blogs",
      heading: "Green Insights",
      description:
        "Explore our blogs for insightful articles on plant care, benefits, and tips to create a greener, healthier living space.",
      color: "from-teal-500 to-green-600",
      borderColor: "border-teal-300 dark:border-teal-600",
      lightBg: "bg-teal-50",
      darkBg: "dark:bg-teal-900/20",
    },
    {
      icon: <FaStore />,
      path: "/store",
      heading: "Find Your Plant",
      description:
        "Discover a wide variety of plants suited to different environments and preferences, and find the perfect addition to your space.",
      color: "from-lime-500 to-green-600",
      borderColor: "border-lime-300 dark:border-lime-600",
      lightBg: "bg-lime-50",
      darkBg: "dark:bg-lime-900/20",
    },
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen transition-colors duration-500 overflow-hidden bg-white dark:bg-gray-900">
      {/* Floating Background Elements - Light Mode */}
      <motion.div
        className="fixed top-40 left-20 w-80 h-80 rounded-full blur-3xl opacity-10 bg-green-400 dark:opacity-0 pointer-events-none"
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
        className="fixed -bottom-40 right-20 w-96 h-96 rounded-full blur-3xl opacity-10 bg-green-300 dark:opacity-0 pointer-events-none"
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
        className="fixed top-40 left-20 w-80 h-80 rounded-full blur-3xl opacity-0 dark:opacity-20 bg-green-500 pointer-events-none"
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
        className="fixed -bottom-40 right-20 w-96 h-96 rounded-full blur-3xl opacity-0 dark:opacity-20 bg-green-600 pointer-events-none"
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
      <div className="relative z-10 px-6 md:px-12 lg:px-20 py-16 md:py-24">
        {/* Header Section */}
        <motion.div
          className="mb-16 md:mb-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Icon */}
          <motion.div
            className="flex justify-center mb-6"
            variants={itemVariants}
          >
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-green-500 to-green-600 dark:from-green-400 dark:to-green-600 flex items-center justify-center text-4xl md:text-5xl shadow-lg">
              <Leaf size={40} className="text-white" />
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h1
            className="text-center text-5xl md:text-6xl lg:text-7xl font-black text-green-800 dark:text-green-400 mb-6 tracking-tight"
            variants={titleVariants}
          >
            Our <span className="bg-gradient-to-r from-green-600 to-emerald-500 dark:from-green-400 dark:to-emerald-300 bg-clip-text text-transparent">Features</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="max-w-3xl mx-auto text-center text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-medium"
            variants={itemVariants}
          >
            Discover how our platform can transform your living space into a greener, healthier environment. From real-time air quality monitoring to insightful plant care tips, each feature is designed to help you make informed decisions and enjoy the numerous benefits of indoor plants.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <a href={feature.path} className="group h-full">
                <motion.div
                  className={`h-full p-8 md:p-10 rounded-2xl border-2 transition-all duration-300 ${
                    feature.lightBg
                  } ${feature.darkBg} ${feature.borderColor} hover:${feature.borderColor} shadow-md hover:shadow-xl hover:shadow-green-500/20 dark:hover:shadow-green-500/30 relative overflow-hidden`}
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Animated Background Gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 dark:group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}
                  />

                  {/* Icon Container */}
                  <motion.div
                    className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${feature.color} p-4 md:p-5 text-white mb-6 flex items-center justify-center text-3xl md:text-4xl shadow-lg group-hover:shadow-xl transition-all duration-300`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {feature.icon}
                  </motion.div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Heading */}
                    <h3 className="text-2xl md:text-3xl font-bold text-green-800 dark:text-green-300 mb-4 group-hover:text-green-700 dark:group-hover:text-green-200 transition-colors duration-300">
                      {feature.heading}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed mb-6 font-medium">
                      {feature.description}
                    </p>

                    {/* Arrow Link */}
                    <motion.div
                      className="flex items-center gap-2 text-green-600 dark:text-green-400 font-semibold group-hover:gap-4 transition-all duration-300"
                      whileHover={{ x: 5 }}
                    >
                      <span>Learn More</span>
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight size={20} />
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Border Animation */}
                  <motion.div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity duration-300 pointer-events-none`}
                  />
                </motion.div>
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          className="mt-20 md:mt-28 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <motion.p
            className="text-gray-700 dark:text-gray-300 text-lg font-medium mb-6"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Ready to enhance your living space?
          </motion.p>
          <motion.button
            className="px-8 md:px-10 py-4 md:py-5 rounded-xl font-bold text-lg bg-gradient-to-r from-green-600 to-green-700 text-white hover:shadow-xl hover:shadow-green-500/40 dark:hover:shadow-green-500/50 transition-all duration-300"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Feature;