import React from "react";
import { FaLeaf, FaGlobeAmericas, FaSeedling } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-200 transition-colors duration-300">
      {/* Header */}
      <header className="p-8 text-center">
        <h1 className="text-4xl font-bold text-green-700 dark:text-green-500">About Clean Breath</h1>
        <p className="mt-2 text-lg text-gray-700 dark:text-gray-400">Breathing clean, living green 🌱</p>
      </header>

      {/* Who We Are */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-green-800 mb-4 dark:text-green-400">Who We Are</h2>
            <p className="text-gray-700 mb-4 leading-relaxed dark:text-gray-400">
              <strong>Clean Breath</strong> is a smart web application built with a purpose – to improve the air quality around you through the power of plants.
              Our platform uses data-driven insights to recommend the best plants for reducing harmful pollutants like SO₂, PM10, NO₂, CO, O₃, and PM2.5.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed dark:text-gray-400">
              By integrating science, sustainability, and technology, we aim to empower individuals, families, and communities to make informed choices for a healthier environment—both indoors and outdoors.
            </p>
            <a
              href="/plants"
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors duration-200 dark:bg-green-700 dark:hover:bg-green-600"
            >
              🌿 Explore Plants
            </a>
          </div>
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7gU1Q-A0Ds80g38j4C5tmr8OQP7nbblwEXA&s"
              alt="Green Plant"
              className="w-full rounded-lg shadow-md max-h-[400px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="bg-gray-50 py-16 dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-green-800 mb-6 dark:text-green-400">Our Mission 🌍</h2>
          <p className="text-lg text-gray-700 mb-4 dark:text-gray-400">
            Our mission is simple yet powerful:
          </p>
          <p className="text-green-600 font-semibold text-xl mb-6 dark:text-green-500">
            To create cleaner air and healthier lives—one plant at a time.
          </p>
          <p className="text-gray-600 leading-relaxed dark:text-gray-500">
            We believe every home, office, and public space deserves fresh air.
            Through real-time data and plant recommendations,
            we’re building a greener, cleaner future that starts with you.
          </p>
        </div>
      </section>

      {/* Community and Sustainability */}
      <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <img
              src="https://media.istockphoto.com/id/1380361370/photo/decorative-banana-plant-in-concrete-vase-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=eYADMQ9dXTz1mggdfn_exN2gY61aH4fJz1lfMomv6o4="
              alt="Plant Decor"
              className="w-full rounded-lg shadow-md max-h-[400px] object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-green-700 mb-3 dark:text-green-500">
              Community and Sustainability
            </h3>
            <p className="text-gray-700 leading-relaxed dark:text-gray-400">
              Clean Breath isn't just a tool—it’s a movement. We're committed to spreading awareness about indoor and outdoor air pollution and promoting sustainable living through the power of plants.
              Together, we can make a difference—one plant, one home, one breath at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Join Community */}
      <section className="bg-green-100 py-16 dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-green-800 mb-6 dark:text-green-400">Join Our Community 🌿</h2>
          <p className="text-gray-700 mb-6 dark:text-gray-400">
            Become part of our green family. Subscribe to receive the latest updates, plant care tips, and eco-living inspiration straight to your inbox!
          </p>
          <form className="bg-white p-6 rounded-lg shadow space-y-4 dark:bg-gray-700 dark:shadow-md">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400
                         dark:bg-gray-600 dark:text-white dark:border-gray-500 dark:focus:ring-green-400"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400
                         dark:bg-gray-600 dark:text-white dark:border-gray-500 dark:focus:ring-green-400"
              required
            />
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition dark:bg-green-700 dark:hover:bg-green-600"
            >
              Join Now
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;