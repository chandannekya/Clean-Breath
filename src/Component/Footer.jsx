// src/components/Footer.js
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/lungs-leaf-nature-ecology-logo-free-vector-removebg-preview.png";
const Footer = () => {
  return (
    <footer className="bg-green-300/40 text-black/80 poppins-regular py-8 mt-8  bottom-0 right-0 left-0 ">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center px-4">
        <div className=" flex items-center lg:mb-0">
          <img className="h-16" src={logo} alt="" />
          <h1 className="text-2xl font-bold poppins-bold text-black/80">
            Clean <br /> Breath
          </h1>
        </div>

        {/* Navigation Links */}
        <nav className="mb-4 lg:mb-0">
          <ul className="flex flex-col lg:flex-row lg:space-x-6 space-y-2 lg:space-y-0">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:underline">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Social Media Links */}
        <div className="flex space-x-4">
          <a href="#" className="text-gray-200 hover:text-white">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.225 0H1.775C.795 0 0 .795 0 1.775v20.45C0 23.205.795 24 1.775 24h20.45C23.205 24 24 23.205 24 22.225V1.775C24 .795 23.205 0 22.225 0zM8.873 20H4.56v-8.701h4.313V20zm-2.155-9.583c-1.371 0-2.488-1.118-2.488-2.488 0-1.371 1.118-2.488 2.488-2.488s2.488 1.118 2.488 2.488c0 1.371-1.118 2.488-2.488 2.488zm14.14 9.583h-4.313v-4.417c0-1.046-.04-2.392-1.459-2.392-1.46 0-1.686 1.144-1.686 2.326v4.483H8.65V11.299h4.146v1.156h.057c.578-1.093 2.017-2.247 4.156-2.247 4.448 0 5.265 2.936 5.265 6.749v4.643z"></path>
            </svg>
          </a>
          {/* Add more social icons as needed */}
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center mt-4">
        <p>&copy; 2024 MyBrand. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
