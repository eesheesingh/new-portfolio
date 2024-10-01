import React from 'react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { IoMdCall } from "react-icons/io";
import { CgVercel } from 'react-icons/cg';
import { BsGithub } from 'react-icons/bs';


const icons = {
  call: <IoMdCall />,
  vercel: <CgVercel />,
  instagram: <FaInstagram />,
  linkedin: <FaLinkedin />,
  github: <BsGithub />,
  email: <MdEmail />,
};

// Define hover colors for each social media platform
const hoverColors = {
  call: 'hover:bg-[#05c548]', // Twitter blue
  vercel: 'hover:bg-[#000]', // Dribbble pink
  instagram: 'hover:bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#515BD4]', // Instagram gradient
  linkedin: 'hover:bg-[#0077B5]', // LinkedIn blue
  github: 'hover:bg-[#49494a]', // Behance blue
  email: 'hover:bg-[#BB001B]', // Gmail red
};

const ImageContainer = ({ iconName, alt }) => {
  // Get the appropriate hover color for the icon
  const hoverColor = hoverColors[iconName] || 'hover:bg-[#444]'; // Default hover color

  return (
    <div
      className={`w-full h-full bg-[#333] rounded-[20px] border-[2px] border-[#555] flex items-center justify-center retro-shadow transition-all duration-300 ${hoverColor}`}
    >
      <span className="text-white text-3xl" aria-label={alt}>
        {icons[iconName]}
      </span>
    </div>
  );
};

export default ImageContainer;
