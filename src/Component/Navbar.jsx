import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../service/oprations/authApi";
import logo from "../assets/Untitled design (1).png";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion, AnimatePresence } from "framer-motion"; // Import AnimatePresence

// Animation Variants
const menuVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.3,
      staggerChildren: 0.1,
      when: "beforeChildren"
    },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.3,
      staggerChildren: 0.05,
      staggerDirection: -1,
      when: "afterChildren"
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, x: -20, transition: { duration: 0.2 } }
};

const desktopMenuVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Navbar = () => {
  const login = useSelector((state) => state.auth.islogin);
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const logouthandel = () => {
    dispatch(logout());
    setIsMenuOpen(false); // Close menu after logout
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking outside
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="relative">
      <nav className="bg-white sticky top-0 z-50 h-16 rounded-md shadow-lg poppins-regular">
        <div className="flex justify-between items-center w-full h-full px-4 lg:px-8 py-2">
          
          {/* Mobile Hamburger Menu */}
          <div className="lg:hidden">
            <button 
              onClick={toggleMenu}
              className="p-2 rounded-md hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              <GiHamburgerMenu className="text-2xl cursor-pointer text-gray-700" />
            </button>
          </div>

          {/* Logo - Centered on mobile, left on desktop */}
          <Link to="/" className="flex items-center lg:flex-none">
            <h1 className="text-2xl lg:text-3xl text-green-700/50 font-bold">Clean</h1>
            <img className="w-10 lg:w-14 ml-1" src={logo} alt="Logo" />
          </Link>

          {/* Desktop Navigation Links */}
          <motion.div
            variants={desktopMenuVariants}
            initial="hidden"
            animate="visible"
            className="hidden lg:flex gap-6 items-center justify-center flex-1"
          >
            <motion.div variants={itemVariants}>
              <NavLink 
                to="/" 
                className="text-gray-700 hover:text-green-600 transition-colors font-medium px-3 py-2 rounded-md hover:bg-green-50"
                activeClassName="text-green-600 bg-green-50"
              >
                Home
              </NavLink>
            </motion.div>
            <motion.div variants={itemVariants}>
              <NavLink 
                to="/plants" 
                className="text-gray-700 hover:text-green-600 transition-colors font-medium px-3 py-2 rounded-md hover:bg-green-50"
                activeClassName="text-green-600 bg-green-50"
              >
                Plants
              </NavLink>
            </motion.div>
            <motion.div variants={itemVariants}>
              <NavLink 
                to="/blogs" 
                className="text-gray-700 hover:text-green-600 transition-colors font-medium px-3 py-2 rounded-md hover:bg-green-50"
                activeClassName="text-green-600 bg-green-50"
              >
                Blogs
              </NavLink>
            </motion.div>
            <motion.div variants={itemVariants}>
              <NavLink 
                to="/contact" 
                className="text-gray-700 hover:text-green-600 transition-colors font-medium px-3 py-2 rounded-md hover:bg-green-50"
                activeClassName="text-green-600 bg-green-50"
              >
                Contact Us
              </NavLink>
            </motion.div>
            <motion.div variants={itemVariants}>
              <NavLink 
                to="/about" 
                className="text-gray-700 hover:text-green-600 transition-colors font-medium px-3 py-2 rounded-md hover:bg-green-50"
                activeClassName="text-green-600 bg-green-50"
              >
                About
              </NavLink>
            </motion.div>
          </motion.div>

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex gap-3 items-center justify-end min-w-fit">
            {token !== null ? (
              <motion.div variants={itemVariants}>
                <button 
                  onClick={logouthandel}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md font-medium transition-colors"
                >
                  Log Out
                </button>
              </motion.div>
            ) : (
              <motion.div variants={itemVariants} className="flex gap-3">
                <NavLink 
                  to="/signup" 
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md font-medium transition-colors"
                  activeClassName="bg-green-600"
                >
                  Sign Up
                </NavLink>
                <NavLink 
                  to="/signin" 
                  className="border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white px-4 py-2 rounded-md font-medium transition-colors"
                  activeClassName="bg-green-500 text-white"
                >
                  Sign In
                </NavLink>
              </motion.div>
            )}
          </div>

          {/* Mobile placeholder to balance layout */}
          <div className="lg:hidden w-10"></div>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="lg:hidden absolute top-16 left-0 w-full bg-white shadow-lg border-t border-gray-100 overflow-hidden z-40"
            >
              <div className="max-h-screen overflow-y-auto">
                <div className="py-2">
                  <motion.div variants={itemVariants}>
                    <NavLink
                      to="/"
                      className="block py-3 px-6 text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors border-b border-gray-100"
                      activeClassName="text-green-600 bg-green-50"
                      onClick={closeMenu}
                    >
                      Home
                    </NavLink>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <NavLink
                      to="/plants"
                      className="block py-3 px-6 text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors border-b border-gray-100"
                      activeClassName="text-green-600 bg-green-50"
                      onClick={closeMenu}
                    >
                      Plants
                    </NavLink>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <NavLink
                      to="/blogs"
                      className="block py-3 px-6 text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors border-b border-gray-100"
                      activeClassName="text-green-600 bg-green-50"
                      onClick={closeMenu}
                    >
                      Blogs
                    </NavLink>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <NavLink
                      to="/contact"
                      className="block py-3 px-6 text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors border-b border-gray-100"
                      activeClassName="text-green-600 bg-green-50"
                      onClick={closeMenu}
                    >
                      Contact Us
                    </NavLink>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <NavLink
                      to="/about"
                      className="block py-3 px-6 text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors border-b border-gray-100"
                      activeClassName="text-green-600 bg-green-50"
                      onClick={closeMenu}
                    >
                      About
                    </NavLink>
                  </motion.div>
                  
                  {/* Mobile Auth Buttons */}
                  <div className="px-6 py-4 bg-gray-50">
                    {token !== null ? (
                      <motion.div variants={itemVariants}>
                        <button 
                          onClick={logouthandel}
                          className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-md font-medium transition-colors"
                        >
                          Log Out
                        </button>
                      </motion.div>
                    ) : (
                      <motion.div variants={itemVariants} className="space-y-3">
                        <NavLink
                          to="/signup"
                          className="block w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-md font-medium text-center transition-colors"
                          activeClassName="bg-green-600"
                          onClick={closeMenu}
                        >
                          Sign Up
                        </NavLink>
                        <NavLink
                          to="/signin"
                          className="block w-full border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white py-3 rounded-md font-medium text-center transition-colors"
                          activeClassName="bg-green-500 text-white"
                          onClick={closeMenu}
                        >
                          Sign In
                        </NavLink>
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

export default Navbar;