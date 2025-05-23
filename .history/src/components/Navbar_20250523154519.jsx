import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ cart = [], searchTerm, setSearchTerm }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="mt-2 bg-white  shadow-md">
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

        {/* Search Input */}
        <div className="my-2 md:my-0 w-full md:w-auto">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-64 p-2 border rounded-md"
          />
        </div>

        {/* Desktop nav */}
        <nav className="space-x-6 hidden md:flex">
          <Link
            to="/"
            className="text-2xl hover:text-blue-500 font-bold text-gray-700 transition"
          >
            Home
          </Link>
          <Link
            to="/about"
            className=" text-2xlhover:text-blue-500 font-bold text-gray-700 transition"
          >
            About
          </Link>
          <Link
            to="/contact"
            className=" text-2xl hover:text-blue-500 font-bold text-gray-700 transition"
          >
            Contact
          </Link>
          <Link
            to="/cart"
            className="rounded p-1 font-bold text-orange-700 transition"
          >
            🛒{cart.length}
          </Link>
          <Link
            to="/login"
            className="rounded p-1 bg-purple-500 font-bold text-white transition"
          >
            Login
          </Link>
        </nav>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <nav className="md:hidden px-4 pb-4 space-y-2">
          {isOpen && (
              <nav className="md:hidden px-4 py-4 flex flex-col space-y-4 bg-white shadow-inner">
              <Link
                to="/"
                className="text-2xl font-bold text-gray-700 hover:text-blue-500 transition"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-2xl font-bold text-gray-700 hover:text-blue-500 transition"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-2xl font-bold text-gray-700 hover:text-blue-500 transition"
              >
                Contact
              </Link>
              <Link
                to="/cart"
                className="text-2xl font-bold text-orange-700 hover:text-orange-500 transition"
              >
                🛒 {cart.length}
              </Link>
              <Link
                to="/login"
                className="text-center text-2xl font-bold bg-purple-500 text-white px-3 py-2 rounded transition"
              >
                Login
              </Link>
            </nav>
          
)}

        </nav>
      )}
    </header>
  );
};

export default Navbar;
