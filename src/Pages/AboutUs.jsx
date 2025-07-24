import React from "react";
import { FaLeaf, FaGlobeAmericas, FaSeedling } from "react-icons/fa";


const AboutUs = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="bg-green-100 shadow p-6 text-center">
        <h1 className="text-4xl font-bold text-green-700">About Clean Breath</h1>
        <p className="mt-2 text-lg text-gray-700">Breathing clean, living green 🌱</p>
      </header>

      {/* About Section */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-green-800 mb-4">Who We Are</h2>
            <p className="text-gray-700 mb-4">
              <strong>Clean Breath</strong> is a smart web application built with a purpose – to improve the air quality around you through the power of plants.
              Our platform uses data-driven insights to recommend the best plants for reducing harmful pollutants like SO2, PM10, NO2, CO, O3, and PM2.5.
            </p>
            <p className="text-gray-700 mb-4">
              By integrating science, sustainability, and technology, we aim to empower individuals, families, and communities to make informed choices for a healthier environment—both indoors and outdoors.
            </p>
            <a
              href="/plants"
              className="inline-block mt-4 bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition"
            >
              Explore Plants
            </a>
          </div>
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7gU1Q-A0Ds80g38j4C5tmr8OQP7nbblwEXA&s"
              alt="Green Plant"
              className="w-full rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-green-800 mb-6">Our Mission 🌍</h2>
          <p className="text-lg text-gray-700 mb-6">
            Our mission is simple yet powerful:
            <br />
            <strong className="text-green-600">
              To create cleaner air and healthier lives—one plant at a time.
            </strong>
          </p>
          <p className="text-gray-600">
            We believe every home, office, and public space deserves fresh air. Through real-time data and plant recommendations,
            we’re building a greener, cleaner future that starts with you.
          </p>
        </div>
      </section>

      {/* Community and Sustainability */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <img
              src="https://media.istockphoto.com/id/1380361370/photo/decorative-banana-plant-in-concrete-vase-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=eYADMQ9dXTz1mggdfn_exN2gY61aH4fJz1lfMomv6o4="
              alt="People Planting Trees"
              className="rounded-lg shadow-md"
            />
            <div>
              <h3 className="text-2xl font-semibold text-green-700 mb-3">
                Community and Sustainability
              </h3>
              <p className="text-gray-700">
                Clean Breath isn't just a tool—it's a movement. We're committed to spreading awareness about indoor and outdoor air pollution and promoting sustainable living through the power of plants.
                Together, we can make a difference—one plant, one home, one breath at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Community */}
      <section className="bg-green-100 py-12">
        <div className="max-w-xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-green-800 mb-6">Join Our Community 🌿</h2>
          <p className="text-gray-700 mb-6">
            Become part of our green family. Subscribe to receive the latest updates, plant care tips, and eco-living inspiration straight to your inbox!
          </p>
          <form className="bg-white p-6 rounded-lg shadow-md space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
            >
              Join Now
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-700 text-white text-center p-6 mt-10">
        <p>&copy; 2025 Clean Breath. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutUs;
