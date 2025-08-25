// pages/Home.jsx
import React from "react";
import BlueSection from "../Features/Home/components/IntroSection.jsx";
import ServicesSection from "../Features/Home/components/ServicesSection.jsx";
import StoreBanner from "../Features/Home/components/StoreBanner.jsx";

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
