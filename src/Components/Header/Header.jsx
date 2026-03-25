import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { logoutUser } from "../../Redux/AuthSlice.jsx";
import SidebarMenu from "../SideBarMenu/SidebarMenu.jsx";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/appointments", label: "Appointments" },
  { to: "/store", label: "Store" },
  { to: "/contact", label: "Contact Us" },
];

const Header = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { user, isLoggedIn } = useSelector((state) => state.auth);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logoutUser());
    setIsMenuOpen(false);
  };

  const closeMenu = () => setIsMenuOpen(false);

  const navLinkClassName = (to) =>
    `rounded-full px-3 py-2 text-sm font-semibold transition duration-300 ${
      location.pathname === to
        ? "bg-[#007bff] text-white"
        : "text-[#007bff] hover:bg-[#007bff] hover:text-white"
    }`;

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-blue-100 bg-[#F8F8FF]/95 shadow-sm backdrop-blur">
        <div className="mx-auto flex md:h-16 sm:h-12 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
            <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-blue-100 text-[#007bff] transition hover:bg-blue-50 md:hidden"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          
          
          <Link to="/"className="absolute left-1/2 -translate-x-1/2 text-2xl font-bold tracking-tight text-[#007bff] sm:text-3xl md:static md:translate-x-0"
>
            Klinica
          </Link>

          <nav className="hidden items-center gap-2 md:flex">
            {navLinks.map((link) => (
              <Link key={link.to} to={link.to} className={navLinkClassName(link.to)}>
                {link.label}
              </Link>
            ))}

            {isLoggedIn ? (
              <>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="rounded-full px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-200"
                >
                  Logout
                </button>
                <div className="ml-1 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-bold italic text-white">
                  {user?.email?.slice(0, 2).toUpperCase()}
                </div>
              </>
            ) : (
              <>
                <Link to="/login" className={navLinkClassName("/login")}>
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  Sign Up
                </Link>
              </>
            )}
          </nav>


        </div>
      </header>

      <SidebarMenu
        isOpen={isMenuOpen}
        onClose={closeMenu}
        navLinks={navLinks}
        isLoggedIn={isLoggedIn}
        user={user}
        onLogout={handleLogout}
        currentPath={location.pathname}
      />
    </>
  );
};

export default Header;
