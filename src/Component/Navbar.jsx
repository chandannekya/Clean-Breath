import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../service/oprations/authApi";
import logo from "../assets/Untitled design (1).png";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion";

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

  // Scroll effect state
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const logouthandel = () => { dispatch(logout()); };
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div>
      <nav
        className={`
          sticky h-14 rounded-md poppins-regular flex items-center p-4 z-50
          transition-all duration-700 ease-in-out
          ${scrolled ? "bg-white shadow-lg" : "shadow-md"}
        `}
        style={{
          background: scrolled
            ? "#fff"
            : "linear-gradient(90deg, #fff 0%, #eff1f4 60%, #eff1f4 100%)"
        }}
      >
        <div className="flex justify-between items-center w-full lg:justify-around p-4">
          <div className="lg:hidden" onClick={toggleMenu}>
            <GiHamburgerMenu className="text-3xl cursor-pointer" />
          </div>
          <Link to={"/"} className="flex-grow lg:flex-none flex justify-center">
            <div className="flex items-center">
              <h1
                className="text-3xl font-bold text-green-700/50"
                style={{
                  // Default color for "Clean", no gradient so it matches left side background.
                  background: "none",
                  WebkitBackgroundClip: "unset",
                  WebkitTextFillColor: "rgb(21 128 61 / 0.5)",
                  color: "rgb(21 128 61 / 0.5)",
                  transition: "all 0.7s cubic-bezier(.4,0,.2,1)",
                  marginRight: 8,
                }}
              >
                Clean
              </h1>
              <img className="w-14" src={logo} alt="Logo" />
            </div>
          </Link>

          {/* Large Screen Nav Links with Staggered Animation */}
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            className="hidden lg:flex items-center"
          >
            {[
              { to: "/", label: "Home" },
              { to: "/plants", label: "Plants" },
              { to: "/blogs", label: "Blogs" },
              { to: "/contact", label: "Contact Us" },
              { to: "/about", label: "About" },
            ].map(({ to, label }, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <NavLink
                  to={to}
                  activeClassName="active"
                  className={`
                    hover:text-green-900 transition-all rounded-md
                    ${scrolled
                      ? "mx-5 px-4 py-2"
                      : "mx-3 px-3 py-2"}
                  `}
                  style={{
                    transition: "all 0.7s cubic-bezier(.4,0,.2,1)",
                  }}
                >
                  {label}
                </NavLink>
              </motion.div>
            ))}
          </motion.div>

          {/* Auth Buttons */}
          <div className="hidden lg:flex gap-3">
            {token !== null ? (
              <motion.div>
                <button
                  className={`transition-all duration-700 ease-in-out rounded-md
                    ${scrolled ? "mx-5 px-4 py-2" : "mx-3 px-3 py-2"}
                  `}
                  style={{
                    transition: "all 0.7s cubic-bezier(.4,0,.2,1)",
                  }}
                  onClick={logouthandel}
                >
                  Log Out
                </button>
              </motion.div>
            ) : (
              <>
                <NavLink
                  to="/signup"
                  activeClassName="active"
                  className={`transition-all duration-700 ease-in-out rounded-md
                    ${scrolled ? "mx-5 px-4 py-2" : "mx-3 px-3 py-2"}
                  `}
                  style={{ transition: "all 0.7s cubic-bezier(.4,0,.2,1)" }}
                >
                  Sign Up
                </NavLink>
                <NavLink
                  to="/signin"
                  activeClassName="active"
                  className={`transition-all duration-700 ease-in-out rounded-md
                    ${scrolled ? "mx-5 px-4 py-2" : "mx-3 px-3 py-2"}
                  `}
                  style={{ transition: "all 0.7s cubic-bezier(.4,0,.2,1)" }}
                >
                  Sign In
                </NavLink>
              </>
            )}
          </div>
        </div>

        {/* Dropdown Menu for Small Screens with Staggered Animation */}
        {isMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            className="absolute top-16 left-0 w-full bg-white flex flex-col items-center lg:hidden"
          >
            {[
              { to: "/", label: "Home" },
              { to: "/plants", label: "Plants" },
              { to: "/blogs", label: "Blogs" },
              { to: "/contact", label: "Contact Us" },
              { to: "/about", label: "About" },
            ].map(({ to, label }, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <NavLink
                  to={to}
                  className="py-2 w-full text-center border-b"
                  onClick={toggleMenu}
                >
                  {label}
                </NavLink>
              </motion.div>
            ))}
            {token !== null ? (
              <motion.div variants={itemVariants}>
                <div className="py-2 w-full text-center" onClick={logouthandel}>
                  Log Out
                </div>
              </motion.div>
            ) : (
              <>
                <motion.div variants={itemVariants}>
                  <NavLink
                    to="/signup"
                    className="py-2 w-full text-center border-b"
                    onClick={toggleMenu}
                  >
                    Sign Up
                  </NavLink>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <NavLink
                    to="/signin"
                    className="py-2 w-full text-center"
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
