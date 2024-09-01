import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import marcus from '../images/marcus bot.jpeg'; // Import the image here

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`fixed top-0 right-0 w-full h-[15vh] bg-primary flex items-center px-6 md:px-12 lg:px-20 ${isOpen ? 'md:h-auto' : 'md:h-[15vh]'} transition-all duration-300 shadow-md z-50`}>
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center space-x-10 md:space-x-12 lg:space-x-16">
          <img src={marcus} alt="Marcus Bot" className="h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 rounded-full border-2 border-white" />
          <Link to="/" className="text-white text-xl md:text-2xl lg:text-3xl font-historical font-semibold">
            Stoic Wisdom
          </Link>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white text-3xl">
            {isOpen ? '×' : '☰'}
          </button>
        </div>
        <div className={`md:flex md:items-center md:space-x-8 lg:space-x-12 ${isOpen ? 'block' : 'hidden'} transition-all duration-300`}>
          <Link to="/resources" className="text-white hover:text-gray-400 transition-colors duration-200">Resources</Link>
          <Link to="/read" className="text-white hover:text-gray-400 transition-colors duration-200">Read</Link>
          <Link to="/about" className="text-white hover:text-gray-400 transition-colors duration-200">Join me</Link>
        </div>
      </div>
      {/* Responsive Menu */}
      <div className={`md:hidden fixed top-0 right-0 w-3/4 h-auto max-h-[300px] bg-primary p-6 ${isOpen ? 'block' : 'hidden'} transition-all duration-300 shadow-lg rounded-lg z-50`}>
        <button onClick={toggleMenu} className="text-white text-3xl mb-4">
          ×
        </button>
        <ul className="space-y-4">
          <li>
            <Link to="/resources" className="text-white hover:text-gray-400 transition-colors duration-200">Resources</Link>
          </li>
          <li>
            <Link to="/read" className="text-white hover:text-gray-400 transition-colors duration-200">Read</Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:text-gray-400 transition-colors duration-200">Join me</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
