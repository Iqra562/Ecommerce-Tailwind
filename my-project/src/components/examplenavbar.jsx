import React from 'react';
import { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-xl font-bold">
          MyApp
        </div>

        {/* Menu Items */}
        <div className={`lg:flex ${isOpen ? 'block' : 'hidden'} space-x-4`}>
          <a href="#" className="text-gray-300 hover:text-white">
            Home
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            About
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            Services
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            Contact
          </a>
        </div>

        {/* User Icon */}
        <div className="flex items-center">
          <FaUserCircle className="text-white text-3xl cursor-pointer" />
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="lg:hidden text-white text-3xl cursor-pointer" onClick={toggleMenu}>
          {isOpen ? '✖' : '☰'}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
