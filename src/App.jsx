import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import PlantSection from "./Pages/PlantSection";
import HeroSection from "./Pages/HeroSection";
import PlantDel from "./Pages/PlantDel";
import Footer from "./Component/Footer";
import Navbar from "./Component/Navbar";
import PlantsPage from "./Pages/PlantsPage";
import Blogform from "./Component/BlogCom/Blogform";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import Blog from "./Pages/Blog";
import CreateBlog from "./Pages/CreateBlog";
import DetailedBlog from "./Pages/DetailedBlog";
import ContactUs from "./Pages/ContactUs";
import AboutUs from "./Pages/AboutUs";
import OrderPage from "./Pages/OrderPage";
import NotFound from "./Pages/NotFound";
import Feature from "./Pages/Feature";
import Faq from "./Component/Faq";
import Profile from "./Pages/Profile";

const App = () => {
  // 1. Manage the dark mode state
  const [darkMode, setDarkMode] = useState(() => {
    // Check local storage for a saved preference
    const savedPreference = localStorage.getItem('darkMode');
    if (savedPreference !== null) {
      return savedPreference === 'true';
    }
    // If no saved preference, check the user's system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // 2. Function to toggle the state
  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  // 3. Effect to apply the 'dark' class to the root HTML element
  useEffect(() => {
    const htmlElement = document.documentElement;
    if (darkMode) {
      htmlElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      htmlElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [darkMode]);

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <header className="fixed top-0 left-0 right-0 z-50">
        {/* 4. Pass the state and toggle function to the Navbar */}
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </header>

      {/* 5. Main content area with default dark mode background */}
      {/* This ensures the background changes even if a specific page doesn't have a background class */}
      <main className="flex-grow pt-14 bg-white dark:bg-gray-900 transition-colors duration-300">
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="write-blog" element={<CreateBlog />} />
          <Route path="/blogs/:id" element={<DetailedBlog />} />
          <Route path="/plant/:plantName" element={<PlantsPage />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/plants" element={<PlantDel />} />
          <Route path="/plant/:plantName/Order" element={<OrderPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* 6. The Footer component no longer needs the prop */}
      <footer className="mt-auto w-full">
        <Footer />
      </footer>
    </div>
  );
};

export default App;