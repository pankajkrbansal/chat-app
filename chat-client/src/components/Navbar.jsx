// src/components/Navbar.jsx
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-600 p-3">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-red text-xl font-bold">
          <a href="#">ChatMe</a>
        </div>

        {/* Menu for larger screens */}
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="text-white hover:text-gray-300">Home</a>
          <a href="#about" className="text-white hover:text-gray-300">About</a>
          <a href="#services" className="text-white hover:text-gray-300">Services</a>
          <a href="#contact" className="text-white hover:text-gray-300">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-2">
          <a href="#home" className="block text-white hover:bg-blue-700 p-2 rounded">Home</a>
          <a href="#about" className="block text-white hover:bg-blue-700 p-2 rounded">About</a>
          <a href="#services" className="block text-white hover:bg-blue-700 p-2 rounded">Services</a>
          <a href="#contact" className="block text-white hover:bg-blue-700 p-2 rounded">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
