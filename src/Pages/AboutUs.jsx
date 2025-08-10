// import React from "react";
// import { FaLeaf, FaGlobeAmericas, FaSeedling } from "react-icons/fa";
// import { motion } from "framer-motion"; 

// const AboutUs = () => {
//   return (
//     <div className="bg-white text-gray-800">
//       {/* Header */}
//       <motion.header
//         className="p-8 text-center"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <motion.h1
//           className="text-4xl font-bold text-green-700"
//           initial={{ y: -50 }}
//           animate={{ y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           About Clean Breath
//         </motion.h1>
//         <motion.p
//           className="mt-2 text-lg text-gray-700"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1, delay: 0.5 }}
//         >
//           Breathing clean, living green 🌱
//         </motion.p>
//       </motion.header>

//       {/* Who We Are */}
//       <motion.section
//         className="max-w-6xl mx-auto px-6 py-16"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1, delay: 0.3 }}
//       >
//         <div className="grid md:grid-cols-2 gap-10 items-center">
//           <motion.div
//             initial={{ x: -50 }}
//             animate={{ x: 0 }}
//             transition={{ duration: 1 }}
//           >
//             <h2 className="text-3xl font-bold text-green-800 mb-4">Who We Are</h2>
//             <p className="text-gray-700 mb-4 leading-relaxed">
//               <strong>Clean Breath</strong> is a smart web application built with a purpose – to improve the air quality around you through the power of plants.
//               Our platform uses data-driven insights to recommend the best plants for reducing harmful pollutants like SO₂, PM10, NO₂, CO, O₃, and PM2.5.
//             </p>
//             <p className="text-gray-700 mb-6 leading-relaxed">
//               By integrating science, sustainability, and technology, we aim to empower individuals, families, and communities to make informed choices for a healthier environment—both indoors and outdoors.
//             </p>
//             <a
//               href="/plants"
//               className="inline-block bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition"
//             >
//               🌿 Explore Plants
//             </a>
//           </motion.div>
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1, delay: 0.5 }}
//           >
//             <img
//               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7gU1Q-A0Ds80g38j4C5tmr8OQP7nbblwEXA&s"
//               alt="Green Plant"
//               className="w-full rounded-lg shadow-md max-h-[400px] object-cover"
//             />
//           </motion.div>
//         </div>
//       </motion.section>

//       {/* Our Mission */}
//       <motion.section
//         className="bg-gray-50 py-16"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1, delay: 0.7 }}
//       >
//         <div className="max-w-4xl mx-auto px-6 text-center">
//           <motion.h2
//             className="text-3xl font-bold text-green-800 mb-6"
//             initial={{ y: -50 }}
//             animate={{ y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             Our Mission 🌍
//           </motion.h2>
//           <p className="text-lg text-gray-700 mb-4">
//             Our mission is simple yet powerful:
//           </p>
//           <motion.p
//             className="text-green-600 font-semibold text-xl mb-6"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1, delay: 1 }}
//           >
//             To create cleaner air and healthier lives—one plant at a time.
//           </motion.p>
//           <motion.p
//             className="text-gray-600 leading-relaxed"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1, delay: 1.5 }}
//           >
//             We believe every home, office, and public space deserves fresh air.
//             Through real-time data and plant recommendations,
//             we’re building a greener, cleaner future that starts with you.
//           </motion.p>
//         </div>
//       </motion.section>

//       {/* Community and Sustainability */}
//       <motion.section
//         className="py-16 bg-white"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1, delay: 2 }}
//       >
//         <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1, delay: 2.5 }}
//           >
//             <img
//               src="https://media.istockphoto.com/id/1380361370/photo/decorative-banana-plant-in-concrete-vase-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=eYADMQ9dXTz1mggdfn_exN2gY61aH4fJz1lfMomv6o4="
//               alt="Plant Decor"
//               className="w-full rounded-lg shadow-md max-h-[400px] object-cover"
//             />
//           </motion.div>
//           <motion.div
//             initial={{ x: -50 }}
//             animate={{ x: 0 }}
//             transition={{ duration: 1, delay: 2.5 }}
//           >
//             <h3 className="text-2xl font-semibold text-green-700 mb-3">
//               Community and Sustainability
//             </h3>
//             <p className="text-gray-700 leading-relaxed">
//               Clean Breath isn't just a tool—it’s a movement. We're committed to spreading awareness about indoor and outdoor air pollution and promoting sustainable living through the power of plants.
//               Together, we can make a difference—one plant, one home, one breath at a time.
//             </p>
//           </motion.div>
//         </div>
//       </motion.section>

//       {/* Join Community */}
//       <motion.section
//         className="bg-green-100 py-16"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1, delay: 3 }}
//       >
//         <div className="max-w-xl mx-auto px-6 text-center">
//           <motion.h2
//             className="text-3xl font-bold text-green-800 mb-6"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1, delay: 3.5 }}
//           >
//             Join Our Community 🌿
//           </motion.h2>
//           <p className="text-gray-700 mb-6">
//             Become part of our green family. Subscribe to receive the latest updates, plant care tips, and eco-living inspiration straight to your inbox!
//           </p>
//           <form className="bg-white p-6 rounded-lg shadow space-y-4">
//             <motion.input
//               type="text"
//               placeholder="Your Name"
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
//               required
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.8, delay: 4 }}
//             />
//             <motion.input
//               type="email"
//               placeholder="Your Email"
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
//               required
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.8, delay: 4.5 }}
//             />
//             <motion.button
//               type="submit"
//               className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.8, delay: 5 }}
//             >
//               Join Now
//             </motion.button>
//           </form>
//         </div>
//       </motion.section>
//     </div>
//   );
// };

// export default AboutUs;
import React from "react";
import { FaLeaf, FaGlobeAmericas, FaSeedling } from "react-icons/fa";
import { motion } from "framer-motion"; 

const AboutUs = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Header */}
      <motion.header
        className="p-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-4xl font-bold text-green-700"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Clean Breath
        </motion.h1>
        <motion.p
          className="mt-2 text-lg text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Breathing clean, living green 🌱
        </motion.p>
      </motion.header>

      {/* Who We Are */}
      <motion.section
        className="max-w-6xl mx-auto px-6 py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ x: -50 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl font-bold text-green-800 mb-4">Who We Are</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              <strong>Clean Breath</strong> is a smart web application built with a purpose – to improve the air quality around you through the power of plants.
              Our platform uses data-driven insights to recommend the best plants for reducing harmful pollutants like SO₂, PM10, NO₂, CO, O₃, and PM2.5.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              By integrating science, sustainability, and technology, we aim to empower individuals, families, and communities to make informed choices for a healthier environment—both indoors and outdoors.
            </p>
            <a
              href="/plants"
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition"
            >
              🌿 Explore Plants
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7gU1Q-A0Ds80g38j4C5tmr8OQP7nbblwEXA&s"
              alt="Green Plant"
              className="w-full rounded-lg shadow-md max-h-[400px] object-cover"
              style={{ objectPosition: "center" }} 
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Our Mission */}
      <motion.section
        className="bg-gray-50 py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            className="text-3xl font-bold text-green-800 mb-6"
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Mission 🌍
          </motion.h2>
          <p className="text-lg text-gray-700 mb-4">
            Our mission is simple yet powerful:
          </p>
          <motion.p
            className="text-green-600 font-semibold text-xl mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            To create cleaner air and healthier lives—one plant at a time.
          </motion.p>
          <motion.p
            className="text-gray-600 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            We believe every home, office, and public space deserves fresh air.
            Through real-time data and plant recommendations,
            we’re building a greener, cleaner future that starts with you.
          </motion.p>
        </div>
      </motion.section>

      {/* Community and Sustainability */}
      <motion.section
        className="py-16 bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.5 }}
          >
            <img
              src="https://media.istockphoto.com/id/1380361370/photo/decorative-banana-plant-in-concrete-vase-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=eYADMQ9dXTz1mggdfn_exN2gY61aH4fJz1lfMomv6o4="
              alt="Plant Decor"
              className="w-full rounded-lg shadow-md max-h-[400px] object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ x: -50 }}
            animate={{ x: 0 }}
            transition={{ duration: 1, delay: 2.5 }}
          >
            <h3 className="text-2xl font-semibold text-green-700 mb-3">
              Community and Sustainability
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Clean Breath isn't just a tool—it’s a movement. We're committed to spreading awareness about indoor and outdoor air pollution and promoting sustainable living through the power of plants.
              Together, we can make a difference—one plant, one home, one breath at a time.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Join Community */}
      <motion.section
        className="bg-green-100 py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3 }}
      >
        <div className="max-w-xl mx-auto px-6 text-center">
          <motion.h2
            className="text-3xl font-bold text-green-800 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 3.5 }}
          >
            Join Our Community 🌿
          </motion.h2>
          <p className="text-gray-700 mb-6">
            Become part of our green family. Subscribe to receive the latest updates, plant care tips, and eco-living inspiration straight to your inbox!
          </p>
          <form className="bg-white p-6 rounded-lg shadow space-y-4">
            <motion.input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              required
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 3 }} 
            />
            <motion.input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              required
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 3.5 }} 
            />
            <motion.button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 4 }} 
            >
              Join Now
            </motion.button>
          </form>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutUs;
