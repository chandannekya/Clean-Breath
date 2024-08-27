import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../service/oprations/authApi";
import logo from "../assets/Untitled design (1).png";
import { GiHamburgerMenu } from "react-icons/gi"; // Import a hamburger icon

const Navbar = () => {
  const login = useSelector((state) => state.auth.islogin);
  const token = useSelector((state) => state.auth.token);

  console.log(token);
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
      <nav className="bg-white sticky h-14 rounded-md shadow-lg poppins-regular flex items-center p-4">
        <div className="flex justify-between items-center w-full lg:justify-around p-4">
          {/* Hamburger Icon for Small Screens */}
          <div className="lg:hidden " onClick={toggleMenu}>
            <GiHamburgerMenu className="text-3xl cursor-pointer" />
          </div>

          {/* Centered Logo */}
          <Link to={"/"} className="flex-grow lg:flex-none flex justify-center">
            <div className="flex items-center">
              <h1 className="text-3xl text-green-700/50 font-bold">Clean</h1>
              <img className="w-14" src={logo} alt="Logo" />
            </div>
          </Link>

          {/* Nav Links for Large Screens */}
          <div className="hidden lg:flex gap-3 items-center">
            <NavLink to="/" activeClassName="active">
              Home
            </NavLink>
            <NavLink to="/plants" activeClassName="active">
              Plants
            </NavLink>
            <NavLink to="/blogs" activeClassName="active">
              Blogs
            </NavLink>
            <NavLink to="/contact" activeClassName="active">
              Contact Us
            </NavLink>
            <NavLink to="/about" activeClassName="active">
              About
            </NavLink>
          </div>

          {/* Auth Buttons for Large Screens */}
          <div className="hidden lg:flex gap-3">
            {token !== null ? (
              <button onClick={logouthandel}>Log Out</button>
            ) : (
              <>
                <NavLink to="/signup" activeClassName="active">
                  Sign Up
                </NavLink>
                <NavLink to="/signin" activeClassName="active">
                  Sign In
                </NavLink>
              </>
            )}
          </div>
        </div>

        {/* Dropdown Menu for Small Screens */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white flex flex-col items-center lg:hidden">
            <NavLink
              to="/"
              className="py-2 w-full text-center border-b"
              onClick={toggleMenu}
            >
              Home
            </NavLink>
            <NavLink
              to="/plants"
              className="py-2 w-full text-center border-b"
              onClick={toggleMenu}
            >
              Plants
            </NavLink>
            <NavLink
              to="/blogs"
              className="py-2 w-full text-center border-b"
              onClick={toggleMenu}
            >
              Blogs
            </NavLink>
            <NavLink
              to="/contact"
              className="py-2 w-full text-center border-b"
              onClick={toggleMenu}
            >
              Contact Us
            </NavLink>
            <NavLink
              to="/about"
              className="py-2 w-full text-center border-b"
              onClick={toggleMenu}
            >
              About
            </NavLink>
            {token !== null ? (
              <button
                className="py-2 w-full text-center"
                onClick={logouthandel}
              >
                Log Out
              </button>
            ) : (
              <>
                <NavLink
                  to="/signup"
                  className="py-2 w-full text-center border-b"
                  onClick={toggleMenu}
                >
                  Sign Up
                </NavLink>
                <NavLink
                  to="/signin"
                  className="py-2 w-full text-center"
                  onClick={toggleMenu}
                >
                  Sign In
                </NavLink>
              </>
            )}
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
