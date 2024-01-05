import React from "react";
import { FaPhone, FaHome, FaEnvelope, FaLinkedin, FaGithub, FaGlobe } from "react-icons/fa";

const Basics = () => {
  return (
    <div
      className="group rounded-lg border border-transparent px-5 py-4 transition-all bg-white"
      rel="noopener noreferrer"
    >
      <h2 className={`mb-3 text-2xl font-semibold`}>Saranya Sasi Kumar</h2>
      <p className={`m-0 max-w-[40ch] text-sm opacity-70`}>
        <div>
          <div className="flex items-center mb-4">
            <FaPhone className="mr-2" />
            <span>022 466 9982</span>
          </div>
          <div className="flex items-center mb-4">
            <FaHome className="mr-2" />
            <span>5/39 Woodward Road, <br></br>Mount Albert, Auckland 1025</span>
          </div>
          <div className="flex items-center mb-4">
            <FaEnvelope className="mr-2" />
            <span>connect.saranyasasikumar06@gmail.com</span>
          </div>
          <div className="flex items-center mb-4">
            <FaLinkedin className="mr-2" />
            <span>https://www.linkedin.com/in/saranya-s-kumar/</span>
          </div>
          <div className="flex items-center mb-4">
            <FaGithub className="mr-2" />
            <span>https://github.com/SaranyaSkumar</span>
          </div>
          <div className="flex items-center mb-4">
            <FaGlobe className="mr-2" />
            <span>https://www.saranyadevspace.com</span>
          </div>
         
        </div>{" "}
      </p>
    </div>
  );
};

export default Basics;
