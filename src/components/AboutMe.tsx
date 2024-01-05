// components/AboutMe.js
const AboutMe = () => {
  return (
    <div className="bg-white text-gray-800">
      <div className="p-10">
        <h1 className="text-3xl font-bold">About Me</h1>
        <div className="mt-2 mb-6 h-1 w-24 bg-red-500"></div>
        <p className="text-lg">
        I'm Saranya Sasi Kumar, a full-stack developer specializing in NodeJS, ReactJS, Angular, PostgreSQL, and Sequelize. I excel in turning complex problems into simple, elegant designs. Dedicated to constant learning, I'm pursuing a Postgraduate Diploma in IT. My interests in drawing enhance my creativity and contribute to my holistic approach to development and design.
        </p>
      </div>
      <div className="flex justify-around flex-wrap p-10">
        <ServiceCard />
      </div>
    </div>
  );
};

export default AboutMe;

const services = [
  {
    title: "Full-stack Development",
    description:
      "Expertise in building dynamic, user-centric web applications.",
    icon: "💻", // Replace with your icon
  },
  {
    title: "Database Management",
    description:
      "Proficient in designing and maintaining efficient, scalable databases.",
    icon: "💾", // Replace with your icon
  },
  {
    title: "User Experience Design",
    description:
      "Creating intuitive and aesthetically pleasing interfaces.",
    icon: "🎨", // Replace with your icon
  },
  {
    title: "Project Leadership",
    description:
      "Leading teams towards successful project completion with effective coordination and management.",
    icon: "👩‍💼", // Replace with your icon
  },
  // ... add other services as needed
];

// components/ServiceCard.js
const ServiceCard = () => {
  return (
    <div className="py-1 bg-white">
      <h2 className="text-4xl font-bold">What I Do!</h2>
      <div className="mt-2 mb-6 h-1 w-32 bg-red-500 mb-10"></div>
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-purple-100 rounded-xl p-8 shadow-lg">
            <div className="text-6xl text-purple-500 mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold mb-4">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
