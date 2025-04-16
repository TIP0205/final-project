import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './index.css';

import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';

import profilePic from './assets/profile.jpg';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(prev => !prev);

  return (
    <Router>
      <div className={darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"}>
        <header className="flex flex-col sm:flex-row sm:items-center justify-between px-4 sm:px-8 py-4 sm:py-6 bg-blue-600 text-white shadow-md space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-4">
            <img
              src={profilePic}
              alt="Profile"
              className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-white"
            />
            <h1 className="text-3xl font-bold">My Portfolio</h1>
          </div>
          <div className="flex flex-wrap justify-center gap-2 sm:justify-end">
            <Link to="/" className="hover:underline">About</Link>
            <Link to="/education" className="hover:underline">Education</Link>
            <Link to="/experience" className="hover:underline">Experience</Link>
            <Link to="/skills" className="hover:underline">Skills</Link>
            <Link to="/contact" className="hover:underline">Contact</Link>
            <button
              onClick={toggleDarkMode}
              className="bg-white text-blue-600 px-3 py-1 rounded shadow hover:bg-gray-100"
            >
              {darkMode ? 'Light' : 'Dark'}
            </button>
          </div>
        </header>

        <main className="max-w-5xl mx-auto px-4 sm:px-6 py-6">
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/education" element={<Education />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="text-center py-4 text-xs sm:text-sm text-gray-500">
          © {new Date().getFullYear()} My Portfolio. All rights reserved.
        </footer>
      </div>
    </Router>
  );
}

export default App;
