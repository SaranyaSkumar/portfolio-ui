import React from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";

const BackButton = () => {
  return (
    <div className="m-20">
      <a className="flex items-center mt-4 cursor-pointer hover:cursor-pointer" href="/">
        <FaArrowAltCircleLeft className="mr-2" /> Go back
      </a>
    </div>
  );
};

export default BackButton;
