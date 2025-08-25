import React, { useState } from 'react';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import SidebarMenu from "../SideBarMenu/SidebarMenu.jsx"; // adjust path as needed



const Header = () => {
  const { user, isLoggedIn } = useSelector((state) => state.auth);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  






  return (
      <header className="sticky top-0 z-50 w-full h-16 bg-[#F8F8FF] shadow-md flex items-center justify-between">
      {/* Site Name */}
      <h1 className="text-4xl ml-5 font-bold text-[#007bff]">Klinica</h1>

    

      {/* Navigation Links */}
      <nav className="flex items-center mr-10 space-x-5">
        <div
          className="relative flex items-start cursor-pointer p-2"
          onClick={() => setCartOpen(true)}
        >
 
        </div>
        <a href="/" className="text-[#007bff] font-bold px-2 py-1 rounded-md transition duration-300 hover:bg-[#007bff] hover:text-white">Home</a>
        <a href="/login" className="text-[#007bff] font-bold px-2 py-1  rounded-md transition duration-300 hover:bg-[#007bff] hover:text-white">Login</a>
        <a href="/appointments" className="text-[#007bff] font-bold px-2 py-1  rounded-md transition duration-300 hover:bg-[#007bff] hover:text-white">Appointments</a>
        <a href="/store" className="text-[#007bff] font-bold inline-block px-2 py-1 rounded-md transition duration-300 hover:bg-[#007bff] hover:text-white">Store</a>
        <a href="/contact" className="text-[#007bff] font-bold inline-block px-2 py-1 rounded-md transition duration-300 hover:bg-[#007bff] hover:text-white">Contact Us</a>

        {/* User Avatar */}
        {isLoggedIn && user?.email && (
        <div
          className="bg-blue-600 font-bold rounded-full w-10 h-10 flex italic items-center justify-center ml-2 text-white cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)} // toggle menu

        >
          {user.email.slice(0, 2).toUpperCase()}
        </div>
        )}

        

      {/* Sidebar Menu */}
      <SidebarMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
  
      </nav>

    </header>
  );
};

export default Header;
