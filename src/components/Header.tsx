import {
  FaHome,
  FaFile,
  FaBriefcase,
  FaBlogger,
  FaTerminal,
  FaCode,
} from "react-icons/fa";
import React, { useState, useEffect } from "react";

const Header = () => {
  // const [activeTab, setActiveTab] = useState('about');

  return (
    <header className="flex justify-between items-center p-4 shadow">
      <nav className="flex space-x-6">
        <a
          href="/"
          className="flex items-center space-x-2"
        >
          <FaHome />
          <span>Home</span>
        </a>
        <a href="/playground" 
                  className="flex items-center space-x-2 ">
          <FaCode />
          <span>Playgorund</span>
        </a>
        {/* <a href="#" className="flex items-center space-x-2" >
          <FaFile />
          <span>CV</span>
        </a>
       */}
        {/* ... other nav items */}
      </nav>
    </header>
  );
};

export default Header;
