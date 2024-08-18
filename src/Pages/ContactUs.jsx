import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="mt-10">
      <h1 className="text-center m-8 text-4xl poppins-bold text-black/80">
        Contact Us
      </h1>
      <div className="flex flex-col items-center gap-8">
        <div className="border-2 p-5 w-[60%] rounded-xl border-green-300">
          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-xl text-green-400" />
            <div>
              <h2 className="text-xl poppins-semibold text-black/80">Phone</h2>
              <p className="poppins-semibold text-black/50">+123 456 7890</p>
            </div>
          </div>
        </div>

        <div className="border-2 p-5 w-[60%] rounded-xl border-green-300">
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-xl text-green-400" />
            <div>
              <h2 className="text-xl poppins-semibold text-black/80">Email</h2>
              <p className="poppins-semibold text-black/50">
                info@cleanbreath.com
              </p>
            </div>
          </div>
        </div>

        <div className="border-2 p-5 w-[60%] rounded-xl border-green-300">
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-xl text-green-400" />
            <div>
              <h2 className="text-xl poppins-semibold text-black/80">
                Address
              </h2>
              <p className="poppins-semibold text-black/50">
                123 Green Avenue, Eco City, Earth 10101
              </p>
            </div>
          </div>
        </div>

        <div className="border-2 p-5 w-[60%] rounded-xl border-green-300">
          <h2 className="text-xl poppins-semibold text-black/80 mb-4">
            Send Us a Message
          </h2>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="border-2 rounded-lg p-3 poppins-semibold text-black/70 border-green-300 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border-2 rounded-lg p-3 poppins-semibold text-black/70 border-green-300 focus:outline-none"
            />
            <textarea
              placeholder="Your Message"
              className="border-2 rounded-lg p-3 poppins-semibold text-black/70 border-green-300 focus:outline-none"
              rows="5"
            />
            <button
              type="submit"
              className="bg-green-400 text-white p-3 rounded-lg poppins-semibold hover:bg-green-500 transition duration-300"
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
