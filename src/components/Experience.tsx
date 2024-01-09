// import React from "react";

// const Experience = () => {
//   return (
//     <div
//       className="group rounded-lg border border-transparent px-5 py-4 transition-all bg-white h-3/4 overflow-y-auto" 
//       rel="noopener noreferrer"
//     >
//       <div>
//         <h2 className={`mb-3 text-xl font-semibold`}>Objective</h2>
//         <p className={`m-0 text-sm opacity-50`}>
//           A dedicated and proactive software developer with a rich background in
//           NodeJS, ReactJS, Angular, PostgreSQL, and Sequelize. I am passionate
//           about leveraging my expertise to craft robust and innovative software
//           solutions. Eager to join a forward-thinking company where I can
//           further hone my skills with emerging technologies, contribute
//           meaningfully to projects, and collaboratively work towards realizing
//           the organization's vision and objectives.{" "}
//         </p>
//       </div>
//       <div>
//         <h2 className={`mb-3 text-xl font-semibold mt-5`}>Experience</h2>
//         <p className={`m-0 text-sm opacity-70`}>
//           <div>
//             <h2 className={`mb-3 text font-semibold mt-2`}>
//               Fullstack Developer | Tech Agrim
//             </h2>
//             <li>
//               Architected a scalable solution using Node.js and Next.js,
//               supported by AWS RDS for data storage and AWS S3 for efficient
//               object management.
//             </li>
//             <li>
//               Seamlessly integrated AWS Cognito for user authentication and
//               automated administrative operations for enhanced efficiency.
//             </li>
//             <li>
//               Established role-based access controls to ensure stringent
//               security and precise data access permissions at the client level.
//             </li>
//           </div>
//           <div>
//             <h2 className={`mb-3 text font-semibold mt-2`}>
//               Senior Web Developer | DoctorOnCall
//             </h2>
//             <li>
//               Developed multiple modules to handle various user customizations
//               at the backend level with role-based authentication.
//             </li>
//             <li>
//               Implemented a seamless appointment booking platform, facilitating
//               effortless scheduling for both users and administrators.{" "}
//             </li>
//             <li>
//               Led and coordinated a team to manage a product effectively.{" "}
//             </li>
//           </div>
//           <div>
//             <h2 className={`mb-3 text font-semibold mt-2`}>
//               Software Developer | Turing Test
//             </h2>
//             <li>
//               Enhanced system performance and reduced execution time by
//               integrating Sequelize with NodeJS.
//             </li>
//             <li>
//               Designed specialized modules for admin functionality, leading to a
//               10% reduction in development time.
//             </li>
//             <li>
//               Updated and improved legacy code, resulting in a 60% decrease in
//               security vulnerabilities.
//             </li>
//           </div>
//           <div>
//             <h2 className={`mb-3 text font-semibold mt-2`}>
//               Software Developer | Vitalic Health Private Limited
//             </h2>
//             <li>
//               Upgraded the NodeJS version to ensure the seamless functioning of
//               the existing doctor consultation system.
//             </li>
//             <li>
//               Introduced additional features to the admin dashboard, achieving a
//               15% reduction in operational time.
//             </li>
//             <li>
//               Engineered core features, including Algolia Search, Slot
//               Management, and Order Tracking, by seamlessly integrating third-
//               party APIs for various lab aggregators.
//             </li>
//             <li>
//               Redesigned the operational flow using NodeJS and AngularJS to
//               optimize processes and workflows.
//             </li>
//             <li>
//               Oversaw database maintenance across multiple projects and enhanced
//               the admin dashboard to facilitate expansive user management.
//             </li>
//           </div>
//         </p>
//       </div>
//       <div>
//         <h2 className={`mb-3 text-xl font-semibold mt-5`}>Education</h2>
//         <p className={`m-0 text-sm opacity-50`}>
//           <div>
//           <h2 className={`mb-3 text font-semibold mt-2`}>
//             Postgraduate Diploma in Information Technology
//           </h2>
//           <p>Eastern Institute of Technology | 2023-present </p>
//           </div>
//           <div>
//           <h2 className={`mb-3 text font-semibold mt-2`}>
//             Computer Science and Engineering
//           </h2>
//           <p>College of Engineering, Munnar | 2014-2018 </p>
//           </div>
//         </p>
//       </div>
//     </div>
//   );
// };
// import { FaHome, FaFile, FaBriefcase, FaBlogger, FaEnvelope } from 'react-icons/fa';

// const Header = () => {
//   return (
//     <header className="flex justify-between items-center p-4 bg-white shadow">
//       <nav className="flex space-x-4">
//         <a href="#" className="flex items-center space-x-2">
//           <FaHome />
//           <span>Home</span>
//         </a>
//         <a href="#" className="flex items-center space-x-2">
//           <FaFile />
//           <span>CV</span>
//         </a>
//         <a href="#" className="flex items-center space-x-2">
//           <FaBriefcase />
//           <span>Works</span>
//         </a>
//         <a href="#" className="flex items-center space-x-2">
//           <FaBlogger />
//           <span>Blog</span>
//         </a>
//         <a href="#" className="flex items-center space-x-2">
//           <FaEnvelope />
//           <span>Contact Me</span>
//         </a>
//         {/* ... other nav items */}
//       </nav>
//       <div className="flex space-x-4">
//         {/* ... social media icons */}
//       </div>
//     </header>
//   );
// };


// export default Header;


import React from 'react'
import Header from './Header'
import AboutMe from './AboutMe'

const Experience = () => {
  return (
    <div className='rounded-xl shadow-md overflow-hidden'>
    <Header />
    <AboutMe />
    </div>
  )
}

export default Experience