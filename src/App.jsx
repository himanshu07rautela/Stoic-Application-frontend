import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Resources from './pages/Resources';
import Read from './pages/Read';
import AboutMe from './pages/AboutMe';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-[15vh]"> {/* Add padding-top to account for the Navbar height */}
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/read" element={<Read />} />
          <Route path="/about" element={<AboutMe />} />
        </Routes>
      </div>
      <Footer></Footer>

    </Router>
  );
}

export default App;
