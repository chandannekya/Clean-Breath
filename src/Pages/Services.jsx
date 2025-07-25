import React from "react";
import { FaLeaf, FaWind, FaHeart, FaMicroscope, FaHandsHelping, FaTree } from "react-icons/fa";

const services = [
  {
    icon: <FaLeaf className="text-green-500 text-3xl" />,
    title: "Real-Time Plant Suggestions",
    description:
      "Discover the best air-purifying plants based on live air quality data in your area. Get recommendations that evolve with your environment.",
  },
  {
    icon: <FaWind className="text-blue-500 text-3xl" />,
    title: "Indoor Air Quality Monitoring",
    description:
      "Track indoor pollutant levels and get actionable insights to maintain fresh and breathable indoor air with minimal effort.",
  },
  {
    icon: <FaHeart className="text-red-400 text-3xl" />,
    title: "Personalized Plant Matchmaking",
    description:
      "Answer a few questions and we’ll suggest plants suited to your lifestyle, space, and air quality improvement goals.",
  },
  {
    icon: <FaMicroscope className="text-purple-500 text-3xl" />,
    title: "Pollutant Detection & Analysis",
    description:
      "Identify hidden pollutants like VOCs and carbon monoxide. Our analysis helps you take the right action at the right time.",
  },
  {
    icon: <FaHandsHelping className="text-yellow-500 text-3xl" />,
    title: "Plant Care Guidance",
    description:
      "From watering schedules to sunlight needs, we help you keep your air-cleaning plants happy, healthy, and effective.",
  },
  {
    icon: <FaTree className="text-emerald-600 text-3xl" />,
    title: "Green Space Planning",
    description:
      "Design beautiful, functional, and purifying indoor or balcony gardens with our expert-backed green layout suggestions.",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-white text-poppins py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-black/90 mb-12 border-b-4 border-green-400 inline-block pb-2">
          Our Services
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-green-100 to-slate-100 p-6 rounded-2xl shadow-md hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                {service.icon}
                <h2 className="text-xl font-semibold text-black/85">
                  {service.title}
                </h2>
              </div>
              <p className="text-black/70 leading-relaxed text-justify">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
