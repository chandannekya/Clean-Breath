import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/lungs-leaf-nature-ecology-logo-free-vector-removebg-preview.png";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
];

const socialLinks = [
  { icon: <FaFacebookF />, label: "Facebook", url: "#" },
  { icon: <FaTwitter />, label: "Twitter", url: "#" },
  { icon: <FaInstagram />, label: "Instagram", url: "#" },
  { icon: <FaLinkedinIn />, label: "LinkedIn", url: "#" },
];

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-200 via-green-100 to-green-200 text-black rounded-t-lg mt-10">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo & Tagline */}
        <div className="flex flex-col">
          <div className="flex items-center gap-3 mb-2">
            <img src={logo} alt="Clean Breath Logo" className="h-12 w-12" />
            <h1 className="text-2xl font-bold leading-tight">
              Clean <br /> Breath
            </h1>
          </div>
          <p className="text-sm text-gray-600 flex items-center gap-1">
            Breathe better, live greener
            <span className="text-xl md:text-2xl leading-none">🌳</span>
          </p>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col space-y-3 text-base font-medium md:items-center">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="hover:text-green-700 transition duration-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex gap-5 md:justify-end items-center">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              aria-label={social.label}
              className="text-xl hover:text-green-600 transition-transform transform hover:scale-110"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-green-300 text-center py-4 text-sm text-gray-800">
        © {new Date().getFullYear()} Clean Breath. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
