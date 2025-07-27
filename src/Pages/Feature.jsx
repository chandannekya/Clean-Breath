import React from "react";
import FeatureCard from "../Component/FeatureCard";
import { GiConvergenceTarget } from "react-icons/gi";
import { RiPlantFill } from "react-icons/ri";
import { BiMessageSquareEdit } from "react-icons/bi";
import { FaStore } from "react-icons/fa";

const Feature = () => {
  const features = [
    {
      icon: <GiConvergenceTarget />,
      path: "/plant",
      heading: "Track Air Quality",
      description:
        "Monitor real-time air quality data and pollutant concentrations to stay informed about your surroundings.",
    },
    {
      icon: <RiPlantFill />,
      path: "/plants",
      heading: "Know Your Plant",
      description:
        "Learn about various plants and their benefits, from air purification to aesthetic appeal, and how they can enhance your indoor environment.",
    },
    {
      icon: <BiMessageSquareEdit />,
      path: "/blogs",
      heading: "Green Insights",
      description:
        "Explore our blogs for insightful articles on plant care, benefits, and tips to create a greener, healthier living space.",
    },
    {
      icon: <FaStore />,
      path: "/store",
      heading: "Find Your Plant",
      description:
        "Discover a wide variety of plants suited to different environments and preferences, and find the perfect addition to your space.",
    },
  ];

  return (
    <div className=" ">
      <h1 className="text-center text-5xl poppins-bold text-black/80 m-8">
        Features
      </h1>
      <p className=" poppins-regular w-[70%] m-auto mt-6 text-center text-black/50">
        Discover how our platform can transform your living space into a
        greener, healthier environment. From real-time air quality monitoring to
        insightful plant care tips, each feature is designed to help you make
        informed decisions and enjoy the numerous benefits of indoor plants.
        Dive into our resources to learn about the best plants for your needs,
        how to care for them, and stay updated with the latest trends and
        information in the world of plant care.
      </p>

      <div className="  flex flex-col items-center gap-4  m-7 ">
        {[0, 1].map((rowIndex) => (
          <div key={rowIndex} className="flex gap-4 lg:flex-row flex-col ">
            {features.slice(rowIndex * 2, rowIndex * 2 + 2).map((feature, i) => (
              <FeatureCard
                key={i}
                icon={feature.icon}
                path={feature.path}
                heading={feature.heading}
                description={feature.description}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
