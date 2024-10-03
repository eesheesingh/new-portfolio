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
  call: 'hover:bg-[#05c548]', // Call green
  vercel: 'hover:bg-[#000]', // Vercel black
  instagram: 'hover:bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#515BD4]', // Instagram gradient
  linkedin: 'hover:bg-[#0077B5]', // LinkedIn blue
  github: 'hover:bg-[#49494a]', // GitHub grey
  email: 'hover:bg-[#BB001B]', // Gmail red
};

const ImageContainer = ({ iconName, alt, url }) => {
  const hoverColor = hoverColors[iconName] || 'hover:bg-[#444]'; // Default hover color

  const handleClick = () => {
    if (iconName === 'call') {
      const phoneNumber = '8169499331';
      // Detect if the user is on a mobile device
      const isMobile = /iPhone|Android/i.test(navigator.userAgent);

      if (isMobile) {
        // On mobile, initiate a phone call
        window.location.href = `tel:${phoneNumber}`;
      } else {
        // On desktop, copy the phone number to the clipboard and show a message
        navigator.clipboard.writeText(phoneNumber).then(() => {
          alert("Number has been copied");
        }).catch((error) => {
          console.error("Failed to copy the number: ", error);
        });
      }
    } else if (url) {
      window.open(url, '_blank'); // Open the URL in a new tab
    }
  };

  return (
    <div
      className={`md:w-full md:h-full bg-[#333] p-3 md:rounded-[20px] rounded-[15px] border-[2px] border-[#555] flex items-center justify-center retro-shadow transition-all duration-300 ${hoverColor} cursor-pointer`}
      onClick={handleClick}
    >
      <span className="text-white md:text-3xl text-3xl" aria-label={alt}>
        {icons[iconName]}
      </span>
    </div>
  );
};

export default ImageContainer;
