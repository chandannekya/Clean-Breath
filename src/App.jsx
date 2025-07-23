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
import NotFound from "./Pages/NotFound"; // Add a NotFound component

import Feature from "./Pages/Feature";
import Faq from "./Component/Faq";
import AirQualityDashboard from "./Pages/AirQualityDashboard";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <header className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </header>

      {/* Main content area with padding */}
      <main className="flex-grow pt-16">
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="write-blog" element={<CreateBlog />} />
          <Route path="/blogs/:id" element={<DetailedBlog />} />
          <Route path="/plant/:plantName" element={<PlantsPage />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/plants" element={<PlantDel />} />
          <Route path="/plant" element={<AirQualityDashboard />} />
          {/* <Route path="/" element={<HeroSection />} /> */}
          <Route path="/plant/:plantName/Order" element={<OrderPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="*" element={<NotFound />} /> {/* 404 route */}
        </Routes>
      </main>

      {/* Footer */}
      <footer className="mt-auto w-full">
        <Footer />
      </footer>
    </div>
  );
};

export default App;
