import { FaHome, FaFile, FaBriefcase, FaBlogger, FaEnvelope } from 'react-icons/fa';
import React, { useState, useEffect } from 'react';

const Header = () => {
    // const [activeTab, setActiveTab] = useState('about');

  return (
    <header className="flex justify-between items-center p-4 bg-white shadow">
      <nav className="flex space-x-6">
        {/* <a href="#" className="flex items-center space-x-2" >
          <FaHome />
          <span>Home</span>
        </a> */}
        {/* <a href="#" className="flex items-center space-x-2" >
          <FaFile />
          <span>CV</span>
        </a>
        <a href="#" className="flex items-center space-x-2" >
          <FaEnvelope />
          <span>Contact Me</span>
        </a> */}
        {/* ... other nav items */}
      </nav>
    </header>
  );
};


export default Header;


