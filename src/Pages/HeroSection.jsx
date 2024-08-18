import React from "react";
import Home from "./Home";
import PlantSection from "./PlantSection";
import Feature from "./Feature";
import Faq from "../Component/Faq";

const HeroSection = () => {
  return (
    <div className="flex flex-col gap-4">
      <Home />
      <PlantSection />
      <Feature />
      <Faq />
    </div>
  );
};

export default HeroSection;
