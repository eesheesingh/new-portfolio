import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { FaBriefcase } from 'react-icons/fa'; // Importing icons for job roles
import { motion } from 'framer-motion'; // Importing framer-motion for animations
import { experienceData } from '../constants'; // Import experience data

const Experience = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/');
  };

  // Define animation variants for the container sections
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    if (window.innerWidth <= 768) {
      window.scrollTo(0, 0); // Scroll to top if mobile screen
    }
  }, []);

  return (
    <div className="relative flex justify-center items-center min-h-screen bg-[#0d0d0d] text-white p-2">
      <motion.div
        className="border-[1px] border-[#ffffff24] rounded-[30px] relative z-10"
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, type: 'spring' }}
        variants={containerVariants}
      >
        {/* Cross Icon */}
        <div
          className="absolute top-6 right-6 cursor-pointer text-white hover:text-gray-400 transition duration-200 rounded-full bg-[#9696967f] p-2 z-50" // Ensure z-50 to make the close button on top
          onClick={handleClose}
        >
          <AiOutlineClose size={20} /> {/* Cross icon */}
        </div>

        {/* Main container */}
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 max-w-5xl p-6 w-full">
          {/* Experience Header */}
          <motion.div
            className="lg:col-span-2 p-6 bg-[#1c1c1c] border-2 border-[#fffefe11] rounded-[30px] shadow-xl text-left"
            variants={containerVariants}
            transition={{ duration: 0.8, type: 'spring' }}
          >
            <h2 className="text-3xl font-bold mb-4 text-[#e0e0e0] border-b-[1px] pb-4 border-[#ffffff1a]">
              My Professional Experience
            </h2>
            <p className="text-md leading-relaxed mb-4">
              My journey as Developer has been a rewarding one. Here’s a detailed breakdown of my experiences that
              have shaped me as a professional.
            </p>
          </motion.div>

          {/* Experience Cards */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 md:grid-cols-3 gap-6"
            variants={containerVariants}
            transition={{ duration: 0.8, type: 'spring' }}
          >
            {experienceData.map((experience) => (
              <div key={experience.id} className="p-6 bg-[#1c1c1c] border-2 border-[#555] rounded-[20px] shadow-lg">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center space-x-4">
                    <FaBriefcase className="text-[#ffcc00] text-xl" /> {/* Job Icon */}
                    <span className="text-lg font-semibold">{experience.title}
                    <br/><span className='text-sm'>{experience.company}</span>
                    </span>
                    
                  </div>
                  <span className="text-[#999]">{experience.period}</span>
                </div>
                <p className="text-sm leading-relaxed bg-[#222] p-4 rounded-lg">
                  {experience.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;
