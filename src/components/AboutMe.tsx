// components/AboutMe.js

import dynamic from 'next/dynamic';
import ServiceCard from './ServiceCard';


// const DynamicServiceCard = dynamic(() => import('./ServiceCard'), { ssr: false });

const AboutMe = () => {
  return (
    <div className="abg-white text-gray-800">
      <div className="p-10">
        <h1 className="text-3xl font-bold">About Me</h1>
        <div className="mt-2 mb-6 h-1 w-24 bg-red-500"></div>
        <p className="text-lg">
        I&apos;m Saranya Sasi Kumar, a full-stack developer specializing in NodeJS, ReactJS, Angular, PostgreSQL, and Sequelize. I excel in turning complex problems into simple, elegant designs. Dedicated to constant learning, I&apos;m pursuing a Postgraduate Diploma in IT. My interests in drawing enhance my creativity and contribute to my holistic approach to development and design.
        </p>
      </div>
      <div className="flex justify-around flex-wrap p-10">
        <ServiceCard />
      </div>
    </div>
  );
};

export default AboutMe;

