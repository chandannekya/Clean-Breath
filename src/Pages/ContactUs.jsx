import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 py-10 px-4">
      <h1 className="text-center text-4xl font-bold text-green-600 mb-10">
        Contact Us
      </h1>

      <div className="flex flex-col lg:flex-row lg:justify-center gap-10 items-center mr-4">
        {/* Contact Info Cards */}
        <div className="flex flex-col gap-6 w-full max-w-md">
          <div className="flex items-start gap-4 border p-5 rounded-xl shadow-sm hover:shadow-md transition border-green-300">
            <FaPhoneAlt className="text-2xl text-green-500 mt-1" />
            <div>
              <h2 className="text-xl font-semibold">Phone</h2>
              <p className="text-gray-600">+123 456 7890</p>
            </div>
          </div>

          <div className="flex items-start gap-4 border p-5 rounded-xl shadow-sm hover:shadow-md transition border-green-300">
            <FaEnvelope className="text-2xl text-green-500 mt-1" />
            <div>
              <h2 className="text-xl font-semibold">Email</h2>
              <p className="text-gray-600">info@cleanbreath.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4 border p-5 rounded-xl shadow-sm hover:shadow-md transition border-green-300">
            <FaMapMarkerAlt className="text-2xl text-green-500 mt-1" />
            <div>
              <h2 className="text-xl font-semibold">Address</h2>
              <p className="text-gray-600">
                123 Green Avenue, Eco City, Earth 10101
              </p>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="w-full max-w-md border p-6 rounded-xl border-green-300 shadow-lg bg-white">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Send Us a Message
          </h2>

          <form className="flex flex-col gap-4">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-sm font-medium mb-1">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                required
                placeholder="Enter your name"
              className="p-3 border border-green-300 rounded-md 
                         focus:outline-none focus:ring-2 focus:ring-green-400 
                         hover:border-green-500 transition"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm font-medium mb-1">
                Your Email
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="Enter your email"
              className="p-3 border border-green-300 rounded-md 
                        focus:outline-none focus:ring-2 focus:ring-green-400 
                       hover:border-green-500 transition"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="text-sm font-medium mb-1">
                Your Message
              </label>
              <textarea
                id="message"
                rows={5}
                required
                placeholder="Type your message..."
               className="p-3 border border-green-300 rounded-md 
                          focus:outline-none focus:ring-2 focus:ring-green-400 
                         hover:border-green-500 transition"
              />
            </div>

            <button
              type="submit"
              className="p-3 border border-green-300 rounded-md 
                         focus:outline-none focus:ring-2 focus:ring-green-400 
                         hover:bg-green-500 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
