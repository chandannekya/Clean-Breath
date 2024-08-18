import React from "react";
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

const App = () => {
  return (
    <div className="relative">
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>
      <div className="pt-16">
        {" "}
        {/* Adjust padding to prevent content overlap */}
        <Routes>
          <Route path="write-blog" element={<CreateBlog />} />
          <Route path="/blogs/:id" element={<DetailedBlog />} />
          <Route path="/plant/:plantName" element={<PlantsPage />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/plants" element={<PlantDel />} />
          <Route path="/" element={<HeroSection />} />
          <Route path="/Order" element={<OrderPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/plant" element={<PlantSection />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
