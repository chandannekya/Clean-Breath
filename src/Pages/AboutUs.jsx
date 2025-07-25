import React from "react";
import { FaLeaf, FaGlobeAmericas, FaSeedling } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="relative overflow-hidden text-poppins bg-white min-h-screen">
      {/* Main Container */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Title */}
        <h1 className="text-center text-4xl md:text-5xl font-bold text-black/90 mb-12 border-b-4 border-green-400 inline-block pb-2">
          About Us
        </h1>

        {/* Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Our Mission */}
          <div className="bg-gradient-to-br from-green-100 to-slate-100 p-6 rounded-2xl shadow-md hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <FaLeaf className="text-3xl text-green-500" />
              <h2 className="text-2xl font-semibold text-black/85">Our Mission</h2>
            </div>
            <p className="text-black/70 leading-relaxed text-justify">
              Clean Breath is dedicated to creating a healthier, greener planet by
              empowering individuals and communities with the knowledge they need to
              combat air pollution. Our mission is to provide accurate and accessible
              information about air pollutants and the plants that can help reduce them.
            </p>
          </div>

          {/* Our Approach */}
          <div className="bg-gradient-to-br from-green-100 to-slate-100 p-6 rounded-2xl shadow-md hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <FaGlobeAmericas className="text-3xl text-blue-500" />
              <h2 className="text-2xl font-semibold text-black/85">Our Approach</h2>
            </div>
            <p className="text-black/70 leading-relaxed text-justify">
              We believe that everyone has a role to play in protecting the environment.
              Whether you're an urban dweller looking to green your surroundings or a
              community leader aiming to reduce pollution, Clean Breath provides the
              guidance you need to make a meaningful impact.
            </p>
          </div>
        </div>

        {/* Join Us */}
        <div className="bg-gradient-to-br from-green-100 to-slate-100 mt-10 p-6 rounded-2xl shadow-md hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300">
          <div className="flex items-center gap-4 mb-4">
            <FaSeedling className="text-3xl text-green-600" />
            <h2 className="text-2xl font-semibold text-black/85">Join Us</h2>
          </div>
          <p className="text-black/70 leading-relaxed text-justify">
            Join us on our journey to cleaner air and a more sustainable future.
            Together, we can make a difference—one plant at a time. Your involvement
            helps us achieve a greener and healthier planet for all.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
