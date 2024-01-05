import Image from "next/image";
import {
  FaFacebook,
  FaMedium,
  FaLinkedin,
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
  FaBirthdayCake,
  FaDownload,
} from "react-icons/fa";

const ProfileCard = () => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      <div className="p-8 bg-pink-300 rounded-xl mb-6">
        <div className="flex justify-center">
          {/* Replace the src with your actual image path */}
          <Image
            src="/me.jpeg"
            alt="Profile Picture"
            width={120}
            height={120}
            className="rounded-full"
          />
        </div>
        <h2 className="mt-4 text-center text-xl font-bold">
          Saranya Sasi Kumar
        </h2>
        <p className="text-center text-gray-600">Fullstack developer</p>
        <div className="flex justify-center mt-4 space-x-3">
          <a
            href="https://medium.com/@saranyasasikumar06" // Replace with your Medium profile link
            target="_blank"
            rel="noopener noreferrer" // Important for security reasons when using target="_blank"
            className="text-pink-500"
          >
            <FaMedium size={24} />
          </a>

          <a
            href="https://linkedin.com/in/saranya-s-kumar/" // Replace with your LinkedIn profile link
            target="_blank"
            rel="noopener noreferrer" // Important for security reasons when using target="_blank"
            className="text-blue-700"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
      <div className="px-8 pb-8">
        <div className="flex items-center mb-4">
          <FaPhone className="text-red-500 mr-2" />
          <span>022 466 9982</span>
        </div>
        <div className="flex items-center mb-4">
          <FaMapMarkerAlt className="text-green-500 mr-2" />
          <span>Mount Albert, Auckland</span>
        </div>
        <div className="flex items-center mb-4">
          <FaEnvelope className="text-indigo-500 mr-2" />
          <span>connect.saranyasasikumar06@gmail.com</span>
        </div>
        {/* <div className="flex items-center">
          <FaBirthdayCake className="text-pink-500 mr-2" />
          <span>28-06-1996</span>
        </div> */}
        <a
          className="w-full mt-8 py-2 px-4 bg-pink-500 text-white font-bold rounded-full flex items-center justify-center"
          href="/saranyasasikumar_cv.pdf"
          download="saranyasasikumar_cv.pdf"
        >
          <FaDownload className="mr-2" />
          Download CV
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;
