import React from 'react';
import github from '../images/github.png';
import gmail from '../images/gmail.jpg';
import insta from '../images/insta2.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-gray-900 text-white py-8 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex justify-center gap-8 mb-6">
          {/* Instagram */}
          <a href="https://www.instagram.com/himanshu_07_rautela/" target="_blank" rel="noopener noreferrer" className="footer-icon transition-transform transform hover:scale-110">
            <img src={insta} alt="Instagram" className="w-10 h-10" />
          </a>

          {/* GitHub */}
          <a href="https://github.com/himanshu07rautela" target="_blank" rel="noopener noreferrer" className="footer-icon transition-transform transform hover:scale-110">
            <img src={github} alt="GitHub" className="w-10 h-10" />
          </a>

          {/* Email */}
          <a href="mailto:rohitharris01072003@gmail.com" className="footer-icon transition-transform transform hover:scale-110">
            <img src={gmail} alt="Email" className="w-10 h-10" />
          </a>
        </div>
        <p className="text-sm text-gray-400 mt-4">
          Love from Pithoragarh ❤️
        </p>
      </div>
    </footer>
  );
};

export default Footer;
