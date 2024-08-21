import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/lungs-leaf-nature-ecology-logo-free-vector-removebg-preview.png";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa"; // Importing icons

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-400/40 via-green-300/40 to-green-400/40 poppins-regular text-black/80 py-10 mt-12">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center px-6">
        {/* Logo and Brand */}
        <div className="flex items-center mb-6 lg:mb-0">
          <img className="h-16 mr-3" src={logo} alt="Clean Breath Logo" />
          <h1 className="text-3xl font-bold poppins-bold">
            Clean <br /> Breath
          </h1>
        </div>

        {/* Navigation Links */}
        <nav className="mb-6 lg:mb-0">
          <ul className="flex flex-col lg:flex-row lg:space-x-8 space-y-4 lg:space-y-0 text-lg">
            <li>
              <Link
                to="/"
                className="hover:text-gray-100 hover:scale-105 transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-gray-100 hover:scale-105 transition duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="hover:text-gray-100 hover:scale-105 transition duration-300"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-gray-100 hover:scale-105 transition duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Social Media Links */}
        <div className="flex space-x-6">
          <a
            href="#"
            className="hover:text-gray-100 hover:scale-110 transition duration-300"
          >
            <FaFacebookF className="w-6 h-6" />
          </a>
          <a
            href="#"
            className="hover:text-gray-100 hover:scale-110 transition duration-300"
          >
            <FaTwitter className="w-6 h-6" />
          </a>
          <a
            href="#"
            className="hover:text-gray-100 hover:scale-110 transition duration-300"
          >
            <FaInstagram className="w-6 h-6" />
          </a>
          <a
            href="#"
            className="hover:text-gray-100 hover:scale-110 transition duration-300"
          >
            <FaLinkedinIn className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center mt-8">
        <p className="text-sm">
          &copy; 2024 Clean Breath. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
