import React from "react";
import { motion } from "framer-motion";
import {
  MdOutlineWaterDrop,
  MdOutlineWbSunny,
  MdOutlineBugReport,
  MdOutlineCleaningServices,
  MdOutlineErrorOutline,
  MdOutlineLightbulb,
  MdOutlineYard,
  MdReportGmailerrorred,
} from "react-icons/md";

const dontList = [
  {
    icon: <MdOutlineWaterDrop className="text-yellow-600 text-2xl" />,
    text: "Don’t overwater — let the soil dry before the next drink.",
  },
  {
    icon: <MdOutlineWbSunny className="text-yellow-600 text-2xl" />,
    text: "Don’t expose shade-loving plants to harsh sunlight.",
  },
  {
    icon: <MdOutlineBugReport className="text-yellow-600 text-2xl" />,
    text: "Don’t ignore pests — treat bugs or mold immediately.",
  },
  {
    icon: <MdOutlineCleaningServices className="text-yellow-600 text-2xl" />,
    text: "Don’t forget to dust leaves — clean leaves breathe better.",
  },
  {
    icon: <MdOutlineErrorOutline className="text-yellow-600 text-2xl" />,
    text: "Don’t repot too often — it can stress the plant.",
  },
  {
    icon: <MdOutlineLightbulb className="text-yellow-600 text-2xl" />,
    text: "Don’t rely solely on artificial light for all plants.",
  },
  {
    icon: <MdOutlineYard className="text-yellow-600 text-2xl" />,
    text: "Don’t crowd your plants — they need airflow.",
  },
  {
    icon: <MdReportGmailerrorred className="text-yellow-600 text-2xl" />,
    text: "Avoid pots without drainage — root rot is real.",
  },
];

const Donts = () => {
  return (
    <div className="w-[90%] lg:w-[80%] m-auto mt-16">
      <motion.div
        className="bg-green-50 p-8 rounded-2xl shadow-lg border border-green-200"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center gap-3 mb-6">
          <MdReportGmailerrorred className="text-green-700 text-4xl" />
          <h2 className="text-3xl poppins-bold text-green-800">
            🚫 Don’ts of Indoor Plant Care
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 mt-6">
          {dontList.map((item, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <div className="mt-1">{item.icon}</div>
              <p className="text-lg text-black/80 poppins-regular leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Donts;
