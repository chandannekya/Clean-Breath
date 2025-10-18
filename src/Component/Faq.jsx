import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { Leaf } from "lucide-react";

const faq = [
  {
    question: "What is Clean Breath?",
    answer:
      "Clean Breath is a web application that helps users identify the best plants to reduce air pollution in their local environment. It provides recommendations based on specific air pollutants and suggests trees that can effectively mitigate these pollutants.",
  },
  {
    question: "How does Clean Breath work?",
    answer:
      "Clean Breath analyzes data on common air pollutants such as SO2, PM10, NO2, CO, O3, and PM2.5. Based on this data, it suggests types of trees that can help reduce the levels of these pollutants, improving the air quality in your surroundings.",
   
  },
  {
    question: "What pollutants does Clean Breath focus on?",
    answer:
      "Clean Breath focuses on the following air pollutants: Sulfur Dioxide (SO2), Particulate Matter (PM10 and PM2.5), Nitrogen Dioxide (NO2), Carbon Monoxide (CO), and Ozone (O3).",
   
  },
  {
    question: "How can I use Clean Breath to improve air quality in my area?",
    answer:
      "You can use Clean Breath by entering the type of pollutant prevalent in your area or selecting from a list. The app will then suggest plants that can help absorb or mitigate these pollutants, allowing you to make informed decisions about which plants to grow.",
   
  },
  {
    question: "Do I need to be an expert in plants to use Clean Breath?",
    answer:
      "No, Clean Breath is designed for everyone! Whether you're a gardening novice or an expert, the app provides simple and effective recommendations for improving air quality through plant selection.",
  
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="min-h-screen transition-colors duration-500 overflow-hidden bg-white dark:bg-gray-900 py-12 md:py-20">
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
      <div className="relative z-10 px-6 md:px-12 lg:px-20">
        {/* Header Section */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Icon */}
          <motion.div
            className="flex justify-center mb-6"
            variants={itemVariants}
          >
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-green-400 to-green-600 dark:from-green-500 dark:to-green-700 flex items-center justify-center text-4xl md:text-5xl shadow-lg">
              <Leaf size={40} className="text-white" />
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h2
            className="text-5xl md:text-6xl lg:text-7xl font-black text-green-800 dark:text-green-400 mb-6 tracking-tight"
            variants={titleVariants}
          >
            Frequently Asked <span className="bg-gradient-to-r from-green-600 to-green-500 dark:from-green-400 dark:to-green-300 bg-clip-text text-transparent">Questions</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed font-medium"
            variants={itemVariants}
          >
            Get answers to common questions about Clean Breath and discover how our platform can help you create a healthier environment.
          </motion.p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          className="max-w-4xl mx-auto space-y-4 md:space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {faq.map((item, index) => {
            const isActive = index === activeIndex;

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.01 }}
              >
                <motion.button
                  onClick={() => toggleQuestion(index)}
                  className="w-full text-left"
                  aria-expanded={isActive}
                >
                  <motion.div
                    className={`p-6 md:p-8 rounded-2xl backdrop-blur-lg border transition-all duration-300 ${
                      isActive
                        ? "bg-green-50 dark:bg-green-900/30 border-green-400 dark:border-green-500/50 shadow-lg"
                        : "bg-green-50/50 dark:bg-gray-800 border-green-200 dark:border-gray-700 hover:border-green-400 dark:hover:border-green-600 shadow-md hover:shadow-lg"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      {/* Question Content */}
                      <div className="flex items-start gap-4 flex-1">
                        {/* Icon */}
                        <span className="text-2xl md:text-3xl flex-shrink-0 mt-1">
                          {item.icon}
                        </span>

                        {/* Question Text */}
                        <h3
                          className={`text-lg md:text-xl font-bold transition-colors duration-300 ${
                            isActive
                              ? "text-green-700 dark:text-green-300"
                              : "text-green-800 dark:text-green-200 group-hover:text-green-700"
                          }`}
                        >
                          {item.question}
                        </h3>
                      </div>

                      {/* Toggle Icon */}
                      <motion.span
                        className={`flex-shrink-0 text-2xl md:text-3xl transition-colors duration-300 ${
                          isActive
                            ? "text-green-600 dark:text-green-400"
                            : "text-green-500 dark:text-green-400 group-hover:text-green-600"
                        }`}
                        animate={{ rotate: isActive ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {isActive ? <FaMinusCircle /> : <FaPlusCircle />}
                      </motion.span>
                    </div>
                  </motion.div>
                </motion.button>

                {/* Answer Section */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <motion.div
                        className="p-6 md:p-8 bg-green-50 dark:bg-gray-800/50 border-x border-b border-green-200 dark:border-gray-700 rounded-b-2xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1, duration: 0.3 }}
                      >
                        <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed font-medium">
                          {item.answer}
                        </p>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          className="mt-16 md:mt-20 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <p className="text-gray-600 dark:text-gray-400 text-lg font-medium mb-6">
            Still have questions?
          </p>
          <motion.button
            className="px-8 md:px-10 py-4 md:py-5 rounded-xl font-bold text-lg bg-gradient-to-r from-green-500 to-green-600 text-white hover:shadow-xl hover:shadow-green-500/40 dark:hover:shadow-green-500/50 transition-all duration-300"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Faq;