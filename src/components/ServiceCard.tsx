"use client";
import React from "react";
import Lottie from "lottie-react";
import fullstack from "@/images/full-stack.json";
import database from "@/images/database.json";
import uiux from "@/images/uiux.json";
import project from "@/images/project.json";

const services = [
  {
    title: "Full-stack Development",
    description:
      "Expertise in building dynamic, user-centric web applications.",
    icon: "💻", // Replace with your icon,
    animation: <Lottie animationData={fullstack} height={140} width={140} />,
  },
  {
    title: "Database Management",
    description:
      "Proficient in designing and maintaining efficient, scalable databases.",
    icon: "💾", // Replace with your icon,
    animation: <Lottie animationData={database} height={140} width={140} />,
  },
  {
    title: "User Experience Design",
    description: "Creating intuitive and aesthetically pleasing interfaces.",
    icon: "🎨", // Replace with your icon
    animation: <Lottie animationData={uiux} height={140} width={140} />,
  },
  {
    title: "Project Leadership",
    description:
      "Leading teams towards successful project completion with effective coordination and management.",
    icon: "👩‍💼", // Replace with your icon
    animation: <Lottie animationData={project} height={140} width={140} />,
  },
];

// components/ServiceCard.js
const ServiceCard = () => {
  return (
    <div className="py-1 bg-black text-white text-center md:text-left">
      <h2 className="text-4xl font-bold inline-block">What I Do!</h2>
      <div className="mt-2 mb-6 h-1 w-32 bg-red-500 mb-10 mx-auto md:mx-0"></div>
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-black-100 rounded-xl p-8 shadow-lg flex flex-col justify-between"
          >
            <div className="text-6xl text-purple-500 mb-4">
              {service.animation}
            </div>
            <h3 className="text-xl font-bold mb-4">{service.title}</h3>
            <p className="text-gray-400">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;
