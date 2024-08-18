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
  const [visibleIndex, setVisibleIndex] = useState(null);

  // Toggle visibility function
  const handleToggle = (index) => {
    setVisibleIndex(visibleIndex === index ? null : index);
  };

  return (
    <div className="mt-10">
      <h1 className="text-center m-8 text-4xl poppins-bold text-black/80">
        {" "}
        FAQ'S
      </h1>
      <div className="flex flex-col gap-5 items-center">
        {faq.map((qa, index) => (
          <div
            key={index}
            className="border-2 p-3 w-[60%] rounded-xl border-green-300"
          >
            <div>
              <div className="flex justify-between items-center">
                <h1 className="text-xl poppins-semibold text-black/80">
                  {qa.question}
                </h1>
                <div
                  className="text-xl text-green-400 cursor-pointer"
                  onClick={() => handleToggle(index)}
                >
                  {visibleIndex === index ? (
                    <FaMinusCircle />
                  ) : (
                    <FaPlusCircle />
                  )}
                </div>
              </div>

              {visibleIndex === index && (
                <p className="poppins-semibold text-black/50 mt-2">
                  {qa.answer}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
