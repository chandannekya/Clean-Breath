import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../service/oprations/authApi";
import logo from "../assets/Untitled design (1).png";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion";

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

const Navbar = () => {
  const login = useSelector((state) => state.auth.islogin);
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const logouthandel = () => {
    dispatch(logout());
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Prevent scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  // Active link styling function
  const getNavLinkClass = ({ isActive }) =>
    `hover:text-green-900 ${
      isActive ? "text-green-900 font-semibold underline" : ""
    }`;

  return (
    <div>
      <nav className="bg-white sticky top-0 z-50 h-14 rounded-md shadow-lg poppins-regular flex items-center p-4">
        <div className="flex justify-between items-center w-full lg:justify-around p-4">
          {/* Hamburger Toggle */}
          <div className="lg:hidden" onClick={toggleMenu}>
            {isMenuOpen ? (
              <span className="text-3xl cursor-pointer">&times;</span>
            ) : (
              <GiHamburgerMenu className="text-3xl cursor-pointer" />
            )}
          </div>

          {/* Logo */}
          <Link to={"/"} className="flex-grow lg:flex-none flex justify-center">
            <div className="flex items-center">
              <h1 className="text-3xl text-green-700/50 font-bold">Clean</h1>
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
            <motion.div variants={itemVariants}>
              <NavLink to="/" className={getNavLinkClass}>Home</NavLink>
            </motion.div>
            <motion.div variants={itemVariants}>
              <NavLink to="/plants" className={getNavLinkClass}>Plants</NavLink>
            </motion.div>
            <motion.div variants={itemVariants}>
              <NavLink to="/blogs" className={getNavLinkClass}>Blogs</NavLink>
            </motion.div>
            <motion.div variants={itemVariants}>
              <NavLink to="/contact" className={getNavLinkClass}>Contact Us</NavLink>
            </motion.div>
            <motion.div variants={itemVariants}>
              <NavLink to="/about" className={getNavLinkClass}>About</NavLink>
            </motion.div>
          </motion.div>

          {/* Auth Buttons - Desktop */}
          <div className="hidden lg:flex gap-3">
            {token !== null ? (
              <motion.div>
                <button onClick={logouthandel}>Log Out</button>
              </motion.div>
            ) : (
              <>
                <NavLink to="/signup" className={getNavLinkClass}>Sign Up</NavLink>
                <NavLink to="/signin" className={getNavLinkClass}>Sign In</NavLink>
              </>
            )}
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            className="absolute top-16 left-0 w-full bg-white shadow-md rounded-b-md z-50 flex flex-col items-center lg:hidden"
          >
            <motion.div variants={itemVariants}>
              <NavLink to="/" className="py-2 w-full text-center border-b" onClick={toggleMenu}>
                Home
              </NavLink>
            </motion.div>
            <motion.div variants={itemVariants}>
              <NavLink to="/plants" className="py-2 w-full text-center border-b" onClick={toggleMenu}>
                Plants
              </NavLink>
            </motion.div>
            <motion.div variants={itemVariants}>
              <NavLink to="/blogs" className="py-2 w-full text-center border-b" onClick={toggleMenu}>
                Blogs
              </NavLink>
            </motion.div>
            <motion.div variants={itemVariants}>
              <NavLink to="/contact" className="py-2 w-full text-center border-b" onClick={toggleMenu}>
                Contact Us
              </NavLink>
            </motion.div>
            <motion.div variants={itemVariants}>
              <NavLink to="/about" className="py-2 w-full text-center border-b" onClick={toggleMenu}>
                About
              </NavLink>
            </motion.div>
            {token !== null ? (
              <motion.div variants={itemVariants}>
                <div className="py-2 w-full text-center" onClick={() => {
                  toggleMenu();
                  logouthandel();
                }}>
                  Log Out
                </div>
              </motion.div>
            ) : (
              <>
                <motion.div variants={itemVariants}>
                  <NavLink to="/signup" className="py-2 w-full text-center border-b" onClick={toggleMenu}>
                    Sign Up
                  </NavLink>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <NavLink to="/signin" className="py-2 w-full text-center" onClick={toggleMenu}>
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