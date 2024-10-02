import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Importing useNavigate for navigation
import { AiOutlineClose } from "react-icons/ai"; // Import the cross icon from react-icons
import { motion } from "framer-motion";

// Import the images
import img1 from "../assets/among-us-pink-u8hrfnjgysswhlns.jpg";
import img2 from "../assets/among-us-pink-u8hrfnjgysswhlns.jpg";
import img3 from "../assets/an-avatar-of-a-brown-guy-looking-at-you-with-cute-smiles-with-transparent-background-hes-wearing-a-627855248-removebg-preview.png";

// Project data
const projects = [
  {
    id: 1,
    title: "Klear – Portfolio Template",
    description: "Framer Template",
    imgSrc: img1,
    status: "Free",
  },
  {
    id: 2,
    title: "Bolder – Portfolio Template",
    description: "Framer Template",
    imgSrc: img2,
    status: "Free",
  },
  {
    id: 3,
    title: "Design Lead Portfolio",
    description: "Personal Portfolio",
    imgSrc: img3,
    status: "Available",
  },
];

const ProjectsPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Auto-scroll to top in mobile view
  useEffect(() => {
    if (window.innerWidth <= 768) {
      window.scrollTo(0, 0); // Scroll to top if mobile screen
    }
  }, []);

  const handleClose = () => {
    navigate("/"); // Navigate to the home ("/") when the cross icon is clicked
  };

  // Define animation variants for the project cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative min-h-screen bg-[#0d0d0d] text-white p-6 border-[1px] border-[#ffffff24] rounded-[30px] m-3">
      {/* Cross Icon at the top right */}
      <div
        className="absolute top-6 right-6 cursor-pointer text-white hover:text-gray-400 transition duration-200 rounded-full bg-[#9696967f] p-2 z-50" // z-50 for higher stacking context
        onClick={handleClose}
      >
        <AiOutlineClose size={20} /> {/* Cross icon */}
      </div>

      <div className="max-w-screen-xl mx-auto">
        {/* Page Title */}
        <motion.h1
          className="text-4xl font-bold mb-10 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          Explore My Hard Work
        </motion.h1>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, type: "spring" }}
          variants={cardVariants}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-[#1d1d1d] p-4 rounded-[20px] shadow-lg relative border-[2px] border-[#fffefe11] overflow-hidden h-[500px] cursor-pointer"
              whileHover={{ scale: 1.05 }} // Apply hover effect on the entire container
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              {/* Image */}
              <div className="bg-white rounded-[15px] p-4 overflow-hidden h-[80%] flex items-center justify-center">
                <img
                  src={project.imgSrc}
                  alt={project.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Project Info */}
              <div className="mt-4 flex justify-between items-center">
                <h2 className="text-xl font-semibold">{project.title}</h2>
                {/* Status Label moved next to the heading */}
                <span className="text-sm font-semibold px-4 py-1 font-mono rounded-[30px] bg-[#fffefe11]">
                  {project.status}
                </span>
              </div>
              <p className="text-sm text-gray-400 mt-2">{project.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsPage;
