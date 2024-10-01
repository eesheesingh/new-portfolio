import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { FaBriefcase } from 'react-icons/fa'; // Importing icons for job roles
import { experienceData } from '../constants'; // Import experience data

const Experience = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/');
  };

  return (
    <div className="relative flex justify-center items-center min-h-screen bg-[#0d0d0d] text-white p-2">
      <div className="border-[1px] border-[#ffffff24] rounded-[30px]">
        {/* Cross Icon */}
        <div
          className="absolute top-6 right-6 cursor-pointer text-white hover:text-gray-400 transition duration-200 rounded-full bg-[#9696967f] p-2"
          onClick={handleClose}
        >
          <AiOutlineClose size={20} /> {/* Cross icon */}
        </div>

        {/* Main container */}
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 max-w-5xl p-6 w-full">
          {/* Experience Header */}
          <div className="lg:col-span-2 p-6 bg-[#1c1c1c] border-2 border-[#fffefe11] rounded-[30px] shadow-xl text-left">
            <h2 className="text-3xl font-bold mb-4 text-[#e0e0e0] border-b-[1px] pb-4 border-[#ffffff1a]">
              My Professional Experience
            </h2>
            <p className="text-md leading-relaxed mb-4">
              My journey through design has been a rewarding one. Here’s a detailed breakdown of my experiences that
              have shaped me as a professional.
            </p>
          </div>

          {/* Experience Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 md:grid-cols-3 gap-6">
            {experienceData.map((experience) => (
              <div key={experience.id} className="p-6 bg-[#1c1c1c] border-2 border-[#555] rounded-[20px] shadow-lg">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center space-x-4">
                    <FaBriefcase className="text-[#ffcc00] text-xl" /> {/* Job Icon */}
                    <span className="text-lg font-semibold">{experience.title}</span>
                  </div>
                  <span className="text-[#999]">{experience.period}</span>
                </div>
                <p className="text-sm leading-relaxed bg-[#222] p-4 rounded-lg">
                  {experience.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
