import React from "react";
import Header from "./Components/Header/Header.jsx";
import Footer from "./Components/Footer/Footer.jsx";


import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="bg-gray-100"> 
        <Outlet /> 
        <Footer />

      </main>
    </>
  );
};

export default Layout;
