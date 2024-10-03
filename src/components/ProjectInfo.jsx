import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FiLink, FiExternalLink } from "react-icons/fi"; // Importing link and external link icons
import { AiOutlineClose } from "react-icons/ai"; // Importing close icon
import { motion } from "framer-motion";
import projects from "../constants";

const ProjectInfo = () => {
  const { id } = useParams(); // Retrieve the project id from the URL
  const project = projects.find((proj) => proj.id === parseInt(id)); // Find the project based on id
  const navigate = useNavigate(); // Hook to navigate

  if (!project) {
    return <div>Project not found</div>;
  }

  const handleClose = () => {
    navigate("/projects"); // Navigate back to projects page
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div className="min-h-screen flex flex-col md:flex-row bg-[#0d0d0d] text-white md:p-6 p-3 border-[1px] border-[#ffffff24] rounded-[30px] m-3 relative"
    initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, type: "spring" }}
          variants={cardVariants}
    >
      {/* Close Button */}
      <div
        className="absolute top-6 right-6 cursor-pointer text-white hover:text-gray-400 transition duration-200 rounded-full bg-[#9696967f] p-2 z-50"
        
        onClick={handleClose}
      >
        <AiOutlineClose size={20} />
      </div>

      {/* Left Side: Project Details */}
      <div className="md:w-1/2 p-6 space-y-4 border-b md:border-r md:border-b-0 border-[#ffffff24] md:sticky md:top-0 md:self-start">
        <h1 className="md:text-4xl text-2xl font-bold">{project.title}</h1>

        {/* Image with hover effect and link */}
        <a href={project.projectLink} target="_blank" rel="noopener noreferrer">
          <div className="relative group mt-4 cursor-pointer">
            <img
              src={project.imgSrc} // Dynamically load the project image
              alt={project.title}
              className="w-full h-auto rounded-[30px]"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-opacity duration-300 rounded-lg flex justify-center items-center">
              <FiLink className="text-white text-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </a>

        <div className="space-y-2 mt-6">
          {/* Company */}
          <div>
            <h3 className="text-sm text-gray-500 uppercase tracking-wider">
              Company
            </h3>
            <p className="text-lg">{project.company}</p>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-sm text-gray-500 uppercase tracking-wider">
              Tools
            </h3>
            <p className="text-lg">{project.tools}</p>
          </div>

          {/* GitHub Link as Snippet */}
          {project.status && (
            <div className="mt-6">
              <h3 className="text-sm text-gray-500 uppercase tracking-wider">
                GitHub Repo
              </h3>
              <a
                href={project.status}
                target="_blank"
                rel="noopener noreferrer"
                className="md:inline-flex sm:hidden hidden items-center justify-between space-x-2 text-sm text-white font-semibold bg-[#4d4d4d24] py-2 px-4 rounded-full border-[1px] border-[#ffffff2f] hover:bg-white hover:text-black transition"
              >
                <span className="truncate overflow-hidden whitespace-nowrap">
                  {project.status}
                </span>
                <FiExternalLink className="text-xl" />
              </a>
              <a
                href={project.status}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex md:hidden items-center justify-between space-x-2 text-sm text-white font-semibold bg-[#4d4d4d24] py-2 px-4 rounded-full border-[1px] border-[#ffffff2f] hover:bg-white hover:text-black transition w-full"
              >
                <span className="truncate overflow-hidden whitespace-nowrap">
                  {project.status}
                </span>
                <FiExternalLink className="text-xl" />
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Right Side: Description and Context */}
      <div className="md:w-1/2 p-6 space-y-6">
        {/* Description */}
        <div className="md:p-6 p-3 bg-[#1c1c1c] border-2 border-[#fffefe11] rounded-[30px] shadow-xl text-left">
          <h3 className="text-sm text-[#000] uppercase tracking-wider mb-2">
            <span className="bg-[#fff] rounded-[30px] py-1 px-3">Description</span>
          </h3>
          <p className="text-lg">{project.description}</p>
        </div>

        {/* About App */}
        <div className="md:p-6 p-3 bg-[#1c1c1c] border-2 border-[#fffefe11] rounded-[30px] shadow-xl text-left">
          <h3 className="text-sm text-[#000] uppercase tracking-wider mb-2">
            <span className="bg-[#fff] rounded-[30px] py-1 px-3">About App</span>
          </h3>
          <p className="text-lg">{project.aboutData}</p>
        </div>

        {/* App Link */}
        {project.projectLink && (
          <div>
            <a
              href={project.projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-sm text-white font-semibold bg-[#ffffff24] py-2 px-4 rounded-full hover:bg-white hover:text-black transition"
            >
              Check the app ↗
            </a>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectInfo;
