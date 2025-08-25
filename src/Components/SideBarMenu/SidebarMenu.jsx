import React, { useEffect, useRef } from "react";
import {
  User,
  CalendarCheck,
  ShoppingBag,
  Phone,
  Star,
  LogOut,
  LogIn,
  UserPlus,
} from "lucide-react";

const SidebarMenu = ({ isOpen, onClose }) => {
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  return (
    <>
      {isOpen && <div className="fixed inset-0 z-[9998]" />}

      <div
        ref={sidebarRef}
        className={`fixed top-0 right-0 h-full w-64 bg-blue-600 shadow-lg z-[9999] transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6">
          <h2 className="text-xl font-bold text-white mb-4">Menu</h2>
          <ul className="text-gray-100 font-medium space-y-7">
            <li className="flex items-center gap-2">
              <CalendarCheck size={18} /> <a href="/appointments">Appointments</a>
            </li>
            <li className="flex items-center gap-2">
              <ShoppingBag size={18} /> <a href="/store">Store</a>
            </li>
            <li className="flex items-center gap-2">
              <User size={18} /> <a href="/profile">Profile (Coming soon)</a>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={18} /> <a href="/contact">Contact Our Team</a>
            </li>
            <li className="flex items-center gap-2">
              <Star size={18} /> <a href="/rate">Rate Us</a>
            </li>
            <li className="flex items-center gap-2">
              <LogIn size={18} /> <a href="/login">Login</a>
            </li>
            <li className="flex items-center gap-2">
              <UserPlus size={18} /> <a href="/signup">Sign Up</a>
            </li>
            <li className="flex items-center gap-2 text-red-300">
              <LogOut size={18} />
              <button onClick={onClose} className="text-black">Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SidebarMenu;
