import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 shadow-2xl border-b border-white/20 fixed">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold text-white drop-shadow-lg tracking-wide"
        >
          ✨ MyApp
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:flex">
          <ul className="flex items-center gap-10 text-lg font-semibold text-white">
            <NavItem to="/todo" label="Todo" />
            <NavItem to="/ecommerce" label="Ecommerce" />
            <NavItem to="/dashboard" label="Dashboard" />
            <NavItem to="/about" label="About" />
            <NavItem to="/contact" label="Contact" />
            <NavItem to="/profile" label="Profile" />
          </ul>
        </nav>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden bg-white/20 backdrop-blur-xl border-t border-white/20 shadow-inner">
          <ul className="flex flex-col gap-4 py-4 px-6 text-lg font-medium text-white">
            <NavItemMobile to="/todo" label="Todo" close={setOpen} />
            <NavItemMobile to="/ecommerce" label="Ecommerce" close={setOpen} />
            <NavItemMobile to="/dashboard" label="Dashboard" close={setOpen} />
            <NavItemMobile to="/about" label="About" close={setOpen} />
            <NavItemMobile to="/contact" label="Contact" close={setOpen} />
            <NavItemMobile to="/profile" label="Profile" close={setOpen} />
          </ul>
        </div>
      )}
    </header>
  );
};

/*************** Desktop Nav Item ***************/
const NavItem = ({ to, label }) => (
  <li>
    <Link
      to={to}
      className="relative group"
    >
      <span className="text-white drop-shadow-md group-hover:text-yellow-300 transition duration-200">
        {label}
      </span>

      {/* Glow underline effect */}
      <span className="absolute left-0 -bottom-1 w-0 group-hover:w-full h-[2px] bg-yellow-300 rounded-full transition-all duration-300"></span>
    </Link>
  </li>
);

/*************** Mobile Nav Item ***************/
const NavItemMobile = ({ to, label, close }) => (
  <li>
    <Link
      to={to}
      onClick={() => close(false)}
      className="block py-2 px-3 rounded-lg bg-white/10 hover:bg-white/30 transition text-white font-semibold"
    >
      {label}
    </Link>
  </li>
);

export default Header;
