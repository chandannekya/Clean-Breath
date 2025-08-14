import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Home from "./Home";
import PlantSection from "./PlantSection";
import Feature from "./Feature";
import Faq from "../Component/Faq";

const HeroSection = () => {
  // Hook to get the scroll position
  const { scrollYProgress } = useScroll();

  // Use the scroll position to animate properties
  // Scroll value from 0 to 1 is mapped to opacity 0 to 1

  // Similarly, map scroll to scale or other properties if needed
  const scale = useTransform(scrollYProgress, [1, 1], [1, 1]);

  return (
    <motion.div
      style={{
        scale: scale,
      }}
      className="flex flex-col gap-4 mb-12"
    >
      <Home />
      <PlantSection />
      <Feature />
      <Faq />
    </motion.div>
  );
};

export default HeroSection;
