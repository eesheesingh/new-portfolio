import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
import projects from "../constants"; // Import your project data

const ProjectsPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (window.innerWidth <= 768) {
      window.scrollTo(0, 0);
    }
  }, []);

  const handleClose = () => {
    navigate("/");
  };

  const handleProjectClick = (id) => {
    navigate(`/projects/${id}`); // Navigate to the ProjectInfo page with project id
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const truncateText = (text, length) => {
    if (text.length > length) {
      return text.substring(0, length) + "...";
    }
    return text;
  };

  return (
    <div className="relative min-h-screen bg-[#0d0d0d] text-white p-6 border-[1px] border-[#ffffff24] rounded-[30px] m-3">
      <div
        className="absolute top-6 right-6 cursor-pointer text-white hover:text-gray-400 transition duration-200 rounded-full bg-[#9696967f] p-2 z-50"
        onClick={handleClose}
      >
        <AiOutlineClose size={20} />
      </div>

      <div className="max-w-screen-xl mx-auto">
        <motion.h1
          className="text-4xl font-bold mb-10 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          Explore My Hard Work
        </motion.h1>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, type: "spring" }}
          variants={cardVariants}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-[#1d1d1d] p-4 rounded-[20px] shadow-lg relative border-[2px] border-[#fffefe11] overflow-hidden h-[350px] md:h-[400px] cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              onClick={() => handleProjectClick(project.id)} // Handle project click
            >
              <div className="bg-white rounded-[15px] p-4 overflow-hidden h-[60%] flex items-center justify-center">
                <img
                  src={project.imgSrc}
                  alt={project.title}
                  className="w-full h-full object-contain rounded-[10px]"
                />
              </div>

              <div className="mt-4 flex justify-between items-center">
                <h2 className="text-xl font-semibold">{project.title}</h2>
                <a
                  href={project.status}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold px-4 py-1 font-mono rounded-[30px] bg-[#fffefe11] hover:bg-gray-300 transition"
                >
                  Source Code
                </a>
              </div>
              <p className="text-sm text-gray-400 mt-2">
                {/* Truncate the description for mobile and desktop */}
                {truncateText(project.description, 100)} {/* You can adjust the length as needed */}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsPage;
