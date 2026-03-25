import React, { useEffect, useRef } from "react";
import { CalendarCheck, House, LogIn, LogOut, ShoppingBag, UserPlus, X } from "lucide-react";
import { Link } from "react-router-dom";

const iconMap = {
  "/": House,
  "/appointments": CalendarCheck,
  "/store": ShoppingBag,
};

const SidebarMenu = ({
  isOpen,
  onClose,
  navLinks = [],
  isLoggedIn = false,
  user = null,
  onLogout,
  currentPath = "",
}) => {
  const sidebarRef = useRef(null);

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "";
      return undefined;
    }

    document.body.style.overflow = "hidden";

    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        onClose();
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-slate-950/35 transition-opacity duration-300 md:hidden ${
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!isOpen}
      />

      <aside
        ref={sidebarRef}
        className={`fixed left-0 top-0 z-50 flex h-full w-[min(85vw,22rem)] flex-col bg-white shadow-2xl transition-transform duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-hidden={!isOpen}
      >
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">Menu</p>
            <h2 className="text-xl font-bold text-[#007bff]">Klinica</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:bg-slate-100"
            aria-label="Close mobile menu"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-6">
          {isLoggedIn && user?.email ? (
            <div className="mb-6 flex items-center gap-3 rounded-2xl bg-blue-50 p-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-sm font-bold italic text-white">
                {user.email.slice(0, 2).toUpperCase()}
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-slate-900">Signed in</p>
                <p className="truncate text-sm text-slate-500">{user.email}</p>
              </div>
            </div>
          ) : null}

          <nav className="space-y-2">
            {navLinks.map((link) => {
              const Icon = iconMap[link.to] || House;
              const isActive = currentPath === link.to;

              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={onClose}
                  className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                    isActive
                      ? "bg-[#007bff] text-white"
                      : "text-slate-700 hover:bg-blue-50 hover:text-[#007bff]"
                  }`}
                >
                  <Icon size={18} />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="border-t border-slate-200 px-5 py-5">
          {isLoggedIn ? (
            <button
              type="button"
              onClick={onLogout}
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              <LogOut size={18} />
              <span>Logout</span>
            </button>
          ) : (
            <div className="grid grid-cols-2 gap-3">
              <Link
                to="/login"
                onClick={onClose}
                className="flex items-center justify-center gap-2 rounded-2xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
              >
                <LogIn size={18} />
                <span>Login</span>
              </Link>
              <Link
                to="/signup"
                onClick={onClose}
                className="flex items-center justify-center gap-2 rounded-2xl bg-[#007bff] px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                <UserPlus size={18} />
                <span>Sign Up</span>
              </Link>
            </div>
          )}
        </div>
      </aside>
    </>
  );
};

export default SidebarMenu;
