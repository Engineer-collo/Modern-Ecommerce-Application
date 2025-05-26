import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ cart = [] }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="mt-2 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-10 py-10 flex flex-col md:flex-row md:justify-between md:items-center">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">
            <Link
              to="/"
              className="hover:text-blue-500 text-gray-700 transition"
            >
              <span className="text-purple-600">Malishu's Clothify</span>
            </Link>
          </h1>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={
                    isOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Removed search input here */}

        {/* Desktop nav */}
        <nav className="space-x-6 hidden md:flex">
          <Link
            to="/"
            className="text-xl hover:text-blue-500 font-bold text-gray-700 transition"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-xl hover:text-blue-500 font-bold text-gray-700 transition"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-xl hover:text-blue-500 font-bold text-gray-700 transition"
          >
            Contact
          </Link>
          <Link
            to="/cart"
            className="text-xl rounded p-1 font-bold text-orange-700 transition"
          >
            🛒<span>{cart.length}</span>
          </Link>
          <Link
            to="/login"
            className="rounded p-1 bg-purple-500 font-bold text-white transition"
          >
            Login
          </Link>
        </nav>
      </div>


    </header>
  );
};

export default Navbar;
