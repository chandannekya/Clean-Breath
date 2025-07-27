import React, { useState } from "react";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";

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

  return (
    <section className="py-12 bg-white">
      <h2 className="text-center text-4xl font-bold text-green-800 mb-10">
        FAQs
      </h2>
      <div className="flex flex-col gap-5 items-center">
        {faq.map((item, index) => {
          const isActive = index === activeIndex;

          return (
            <div
              key={index}
              className="w-[90%] md:w-[60%] border border-green-300 rounded-xl p-4 bg-green-50 shadow-md transition-all duration-300"
            >
              <button
                className="flex justify-between items-center w-full text-left"
                onClick={() => toggleQuestion(index)}
                aria-expanded={isActive}
              >
                <span className="text-lg font-medium text-green-800">
                  {item.question}
                </span>
                <span className="text-green-500 text-xl">
                  {isActive ? <FaMinusCircle /> : <FaPlusCircle />}
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isActive ? "max-h-96 mt-3" : "max-h-0"
                }`}
              >
                <p className="text-gray-700 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Faq;
