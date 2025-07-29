import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 py-16 px-4 font-sans">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-4 tracking-tight">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're here to answer your questions and help you breathe cleaner air.
            Reach out to us today!
          </p>
        </header>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Contact Info Section */}
          <section className="w-full lg:w-1/2">
            <h2 className="text-2xl font-semibold text-green-700 mb-6">
              Contact Information
            </h2>
            <div className="space-y-6">
              {[
                {
                  icon: <FaPhoneAlt className="text-2xl text-green-500" />,
                  title: "Phone",
                  content: "+123 456 7890",
                },
                {
                  icon: <FaEnvelope className="text-2xl text-green-500" />,
                  title: "Email",
                  content: "info@cleanbreath.com",
                },
                {
                  icon: <FaMapMarkerAlt className="text-2xl text-green-500" />,
                  title: "Address",
                  content: "123 Green Avenue, Eco City, Earth 10101",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 rounded-xl bg-white 
                           shadow-lg hover:shadow-xl transition-all duration-300 
                           border-l-4 border-green-200 hover:border-green-400"
                >
                  <div className="mt-1">{item.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Form Section */}
          <section className="w-full lg:w-1/2">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <h2 className="text-2xl font-semibold text-green-700 mb-6">
                Send Us a Message
              </h2>
              <form className="space-y-6">
                {[
                  { id: "name", label: "Your Name", type: "text", placeholder: "Enter your name" },
                  { id: "email", label: "Your Email", type: "email", placeholder: "Enter your email" },
                ].map((field) => (
                  <div key={field.id} className="flex flex-col">
                    <label
                      htmlFor={field.id}
                      className="text-sm font-medium text-gray-700 mb-2"
                    >
                      {field.label}
                    </label>
                    <input
                      id={field.id}
                      type={field.type}
                      required
                      placeholder={field.placeholder}
                      className="p-3 bg-gray-50 border border-gray-200 rounded-lg 
                               focus:outline-none focus:ring-2 focus:ring-green-400 
                               hover:border-green-400 transition-all duration-200 
                               text-gray-800 placeholder-gray-400"
                    />
                  </div>
                ))}
                <div className="flex flex-col">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-gray-700 mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    placeholder="Type your message..."
                    className="p-3 bg-gray-50 border border-gray-200 rounded-lg 
                             focus:outline-none focus:ring-2 focus:ring-green-400 
                             hover:border-green-400 transition-all duration-200 
                             text-gray-800 placeholder-gray-400 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-green-600 text-white rounded-lg 
                           hover:bg-green-700 focus:outline-none focus:ring-2 
                           focus:ring-green-400 transition-all duration-200 
                           font-medium text-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;