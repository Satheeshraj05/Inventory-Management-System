import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold tracking-wide">
        Inventory Management System<span className="text-yellow-300"></span>
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link
              to="/"
              className="text-white text-lg font-medium transition duration-300 hover:text-yellow-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/add"
              className="text-white text-lg font-medium transition duration-300 hover:text-yellow-300"
            >
              Add Item
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
