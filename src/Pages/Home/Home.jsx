// pages/Home.jsx
import React from "react";
import BlueSection from "./components/BlueSection.jsx";
import ServicesSection from "./components/ServicesSection.jsx";
import StoreBanner from "./components/StoreBanner.jsx";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <BlueSection />
      <ServicesSection />
      <StoreBanner />
    </div>
  );
};

export default Home;
