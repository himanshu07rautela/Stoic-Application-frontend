import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-16 px-6 sm:px-8 lg:px-12 relative overflow-hidden">
      <div className="absolute inset-0">
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1440 320" fill="none">
          <path
            fill="#1a202c"
            d="M0,256L30,229.3C60,203,120,149,180,144C240,139,300,181,360,202.7C420,224,480,224,540,186.7C600,149,660,75,720,43.3C780,11,840,23,900,21.3C960,19,1020,1,1080,0C1140-1,1200,23,1260,69.3C1320,115,1380,173,1410,202.7L1440,232L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          />
        </svg>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold mb-6 text-white">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            Books
          </span>
        </h1>
        <p className="text-xl leading-relaxed max-w-3xl mx-auto">
          Explore the ancient philosophy of Stoicism and its relevance in modern times.
        </p>
      </div>
    </header>
  );
};

export default Header;
