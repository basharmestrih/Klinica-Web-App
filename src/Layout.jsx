import React from "react";
import Header from "./Pages/Header/Header.jsx";
import Footer from "./Pages/Footer/Footer.jsx";


import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="bg-gray-100"> {/* Push content below header */}
        <Outlet /> {/* This will render the matched child route */}
        <Footer />

      </main>
    </>
  );
};

export default Layout;
