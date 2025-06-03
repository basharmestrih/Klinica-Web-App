import React, { useEffect, useRef } from "react";
import {
  User,
  Clock,
  Calendar,
  ShoppingBag,
  Settings,
  Phone,
  Star,
  LogOut,
} from "lucide-react";

const SidebarMenu = ({ isOpen, onClose }) => {
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        onClose(); // Close the sidebar
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <>
      {isOpen && <div className="fixed inset-0 z-40" />}

      <div
        ref={sidebarRef}
        className={`fixed top-0 right-0 h-full w-64 bg-blue-600 shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6">
          <h2 className="text-xl font-bold text-white mb-4">Menu</h2>
          <ul className="text-white font-medium space-y-5">
            <li className="flex items-center gap-2">
              <User size={18} /> <a href="/profile">Profile</a>
            </li>
            <li className="flex items-center gap-2">
              <Clock size={18} /> <a href="/history">My History</a>
            </li>
            <li className="flex items-center gap-2">
              <Calendar size={18} /> <a href="/appointments">Appointments</a>
            </li>
            <li className="flex items-center gap-2">
              <ShoppingBag size={18} /> <a href="/store">Store</a>
            </li>
            <li className="flex items-center gap-2">
              <Settings size={18} /> <a href="/settings">Settings</a>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={18} /> <a href="/contact">Contact Our Team</a>
            </li>
            <li className="flex items-center gap-2">
              <Star size={18} /> <a href="/rate">Rate Us</a>
            </li>
            <li className="flex items-center gap-2 text-red-300">
              <LogOut size={18} />{" "}
              <button onClick={onClose} className="text-black">
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SidebarMenu;
