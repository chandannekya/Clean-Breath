import React from "react";
import { FaLeaf, FaGlobeAmericas, FaSeedling } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="relative overflow-hidden text-poppins">
      {/* Background and Overlay */}

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto mt-10 p-8 bg-white rounded-lg shadow-xl border-t-8 border-green-400">
        <h1 className="text-center text-5xl poppins-bold text-black/90 mb-8">
          About Us
        </h1>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Section 1 */}
          <div className="flex-1 bg-gradient-to-br from-green-100 to-slate-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center gap-4 mb-4">
              <FaLeaf className="text-3xl text-green-500" />
              <h2 className="text-2xl poppins-semibold text-black/80">
                Our Mission
              </h2>
            </div>
            <p className="text-black/70 leading-relaxed">
              Clean Breath is dedicated to creating a healthier, greener planet
              by empowering individuals and communities with the knowledge they
              need to combat air pollution. Our mission is to provide accurate
              and accessible information about air pollutants and the plants
              that can help reduce them.
            </p>
          </div>

          {/* Section 2 */}
          <div className="flex-1 bg-gradient-to-br from-green-100 to-slate-100  p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center gap-4 mb-4">
              <FaGlobeAmericas className="text-3xl text-blue-500" />
              <h2 className="text-2xl poppins-semibold text-black/80">
                Our Approach
              </h2>
            </div>
            <p className="text-black/70 leading-relaxed">
              We believe that everyone has a role to play in protecting the
              environment. Whether you're an urban dweller looking to green your
              surroundings or a community leader aiming to reduce pollution,
              Clean Breath provides the guidance you need to make a meaningful
              impact.
            </p>
          </div>
        </div>

        {/* Section 3 */}
        <div className="bg-gradient-to-br from-green-100 to-slate-100  p-6 mt-8 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300">
          <div className="flex items-center gap-4 mb-4">
            <FaSeedling className="text-3xl text-green-600" />
            <h2 className="text-2xl poppins-semibold text-black/80">Join Us</h2>
          </div>
          <p className="text-black/70 leading-relaxed">
            Join us on our journey to cleaner air and a more sustainable future.
            Together, we can make a difference—one plant at a time. Your
            involvement helps us achieve a greener and healthier planet for all.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
