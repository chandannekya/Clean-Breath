import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../service/oprations/authApi";
import logo from "../assets/Untitled_design__1_-removebg-preview.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUser } from "react-icons/fa";
import { motion } from "framer-motion";
import { BsSun, BsMoon } from "react-icons/bs"; // Import sun and moon icons

// Animation Variants
const menuVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

// Accept darkMode and toggleDarkMode as props
const Navbar = ({ darkMode, toggleDarkMode }) => {
  const islogin = useSelector((state) => state.auth.islogin);
  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const logouthandel = () => {
    dispatch(logout());
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {/* Navbar Container: Add dark mode background and transition */}
      <nav className="bg-white sticky h-14 rounded-md shadow-lg poppins-regular flex items-center p-4 transition-colors duration-300 dark:bg-gray-800 dark:text-gray-200">
        <div className="flex justify-between items-center w-full lg:justify-around p-4">
          <div className="lg:hidden" onClick={toggleMenu}>
            <GiHamburgerMenu className="text-3xl cursor-pointer" />
          </div>

          <Link to={"/"} className="flex-grow lg:flex-none flex justify-center">
            <div className="flex items-center">
              {/* Logo Text: Add dark mode text color */}
              <h1 className="text-3xl text-green-700/50 font-bold dark:text-green-400">
                Clean
              </h1>
              <img className="w-14" src={logo} alt="Logo" />
            </div>
          </Link>

          {/* Large Screen Nav Links */}
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            className="hidden lg:flex gap-3 items-center"
          >
            {/* NavLink Styling: Add dark mode hover and text colors */}
            <motion.div variants={itemVariants}>
              <NavLink
                to="/"
                activeClassName="active"
                className="hover:text-green-900 transition-colors duration-200 dark:text-gray-200 dark:hover:text-green-400"
              >
                Home
              </NavLink>
            </motion.div>
            <motion.div variants={itemVariants}>
              <NavLink
                to="/plants"
                activeClassName="active"
                className="hover:text-green-900 transition-colors duration-200 dark:text-gray-200 dark:hover:text-green-400"
              >
                Plants
              </NavLink>
            </motion.div>
            <motion.div variants={itemVariants}>
              <NavLink
                to="/blogs"
                activeClassName="active"
                className="hover:text-green-900 transition-colors duration-200 dark:text-gray-200 dark:hover:text-green-400"
              >
                Blogs
              </NavLink>
            </motion.div>
            <motion.div variants={itemVariants}>
              <NavLink
                to="/contact"
                activeClassName="active"
                className="hover:text-green-900 transition-colors duration-200 dark:text-gray-200 dark:hover:text-green-400"
              >
                Contact Us
              </NavLink>
            </motion.div>
            <motion.div variants={itemVariants}>
              <NavLink
                to="/about"
                activeClassName="active"
                className="hover:text-green-900 transition-colors duration-200 dark:text-gray-200 dark:hover:text-green-400"
              >
                About
              </NavLink>
            </motion.div>
          </motion.div>

          {/* Auth Buttons */}
          <div className="hidden lg:flex gap-3 items-center">
            {token !== null ? (
              <motion.div className="flex items-center gap-3">
                {/* Profile Icon */}
                <NavLink
                  to="/profile"
                  className="hover:scale-110 transition-transform duration-200"
                >
                  <div className="w-8 h-8 bg-green-600 dark:bg-green-500 rounded-full flex items-center justify-center hover:bg-green-700 dark:hover:bg-green-400 transition-colors duration-200">
                    <FaUser className="text-white text-sm" />
                  </div>
                </NavLink>
                
                {/* Logout Button */}
                <button
                  onClick={logouthandel}
                  className="hover:text-green-900 transition-colors duration-200 dark:text-gray-200 dark:hover:text-green-400"
                >
                  Log Out
                </button>
              </motion.div>
            ) : (
              <>
                <NavLink
                  to="/signup"
                  activeClassName="active"
                  className="hover:text-green-900 transition-colors duration-200 dark:text-gray-200 dark:hover:text-green-400"
                >
                  Sign Up
                </NavLink>
                <NavLink
                  to="/signin"
                  activeClassName="active"
                  className="hover:text-green-900 transition-colors duration-200 dark:text-gray-200 dark:hover:text-green-400"
                >
                  Sign In
                </NavLink>
              </>
            )}
            {/* Dark Mode Toggle Button */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <BsSun className="w-5 h-5 text-yellow-500" />
              ) : (
                <BsMoon className="w-5 h-5 text-gray-500" />
              )}
            </button>
          </div>
        </div>

        {/* Dropdown Menu for Small Screens */}
        {isMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            className="absolute top-16 left-0 w-full bg-white flex flex-col items-center lg:hidden shadow-lg dark:bg-gray-800"
          >
            {/* Dropdown Links: Add dark mode text and border colors */}
            <motion.div variants={itemVariants}>
              <NavLink
                to="/"
                className="py-2 w-full text-center border-b dark:border-gray-700 dark:text-gray-200"
                onClick={toggleMenu}
              >
                Home
              </NavLink>
            </motion.div>
            <motion.div variants={itemVariants}>
              <NavLink
                to="/plants"
                className="py-2 w-full text-center border-b dark:border-gray-700 dark:text-gray-200"
                onClick={toggleMenu}
              >
                Plants
              </NavLink>
            </motion.div>
            <motion.div variants={itemVariants}>
              <NavLink
                to="/blogs"
                className="py-2 w-full text-center border-b dark:border-gray-700 dark:text-gray-200"
                onClick={toggleMenu}
              >
                Blogs
              </NavLink>
            </motion.div>
            <motion.div variants={itemVariants}>
              <NavLink
                to="/contact"
                className="py-2 w-full text-center border-b dark:border-gray-700 dark:text-gray-200"
                onClick={toggleMenu}
              >
                Contact Us
              </NavLink>
            </motion.div>
            <motion.div variants={itemVariants}>
              <NavLink
                to="/about"
                className="py-2 w-full text-center border-b dark:border-gray-700 dark:text-gray-200"
                onClick={toggleMenu}
              >
                About
              </NavLink>
            </motion.div>
            {token !== null ? (
              <>
                <motion.div variants={itemVariants}>
                  <NavLink
                    to="/profile"
                    className="py-2 w-full text-center border-b dark:border-gray-700 dark:text-gray-200 flex items-center justify-center gap-2"
                    onClick={toggleMenu}
                  >
                    <FaUser className="text-green-600 dark:text-green-400" />
                    Profile
                  </NavLink>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <div
                    className="py-2 w-full text-center dark:text-gray-200 cursor-pointer"
                    onClick={() => {
                      logouthandel();
                      toggleMenu();
                    }}
                  >
                    Log Out
                  </div>
                </motion.div>
              </>
            ) : (
              <>
                <motion.div variants={itemVariants}>
                  <NavLink
                    to="/signup"
                    className="py-2 w-full text-center border-b dark:border-gray-700 dark:text-gray-200"
                    onClick={toggleMenu}
                  >
                    Sign Up
                  </NavLink>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <NavLink
                    to="/signin"
                    className="py-2 w-full text-center dark:text-gray-200"
                    onClick={toggleMenu}
                  >
                    Sign In
                  </NavLink>
                </motion.div>
              </>
            )}
          </motion.div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
