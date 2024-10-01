import React from "react";
import Marquee from "react-fast-marquee";
import { FaReact, FaVuejs, FaNode, FaAws, FaGithub, FaWordpress } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { SiVitess, SiExpress } from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { BiLogoFirebase } from "react-icons/bi";

const StackMarquee = () => {
  return (
    <div className="relative w-full">
      <Marquee speed={50}>
        <div className="flex space-x-8">
          <div className="bg-[#333] p-4 rounded-[10px] retro-shadow ml-8">
            <FaReact className="text-blue-500 text-5xl" />
          </div>
          <div className="bg-[#333] p-4 rounded-[10px] retro-shadow">
            <RiJavascriptFill className="text-yellow-500 text-5xl" />
          </div>
          <div className="bg-[#333] p-4 rounded-[10px] retro-shadow">
            <RiNextjsFill className="text-white text-5xl" />
          </div>
          <div className="bg-[#333] p-4 rounded-[10px] retro-shadow">
            <FaNode className="text-green-500 text-5xl" />
          </div>
          <div className="bg-[#333] p-4 rounded-[10px] retro-shadow">
            <FaVuejs className="text-green-600 text-5xl" />
          </div>
          <div className="bg-[#333] p-4 rounded-[10px] retro-shadow">
            <FaAws className="text-orange-500 text-5xl" />
          </div>
          <div className="bg-[#333] p-4 rounded-[10px] retro-shadow">
            <FaGithub className="text-gray-500 text-5xl" />
          </div>
          <div className="bg-[#333] p-4 rounded-[10px] retro-shadow">
            <FaWordpress className="text-blue-600 text-5xl" />
          </div>
          <div className="bg-[#333] p-4 rounded-[10px] retro-shadow">
            <SiVitess className="text-yellow-400 text-5xl" />
          </div>
          <div className="bg-[#333] p-4 rounded-[10px] retro-shadow">
            <SiExpress className="text-white text-5xl" />
          </div>
          <div className="bg-[#333] p-4 rounded-[10px] retro-shadow">
            <RiTailwindCssFill className="text-blue-400 text-5xl" />
          </div>
          <div className="bg-[#333] p-4 rounded-[10px] retro-shadow">
            <BiLogoFirebase className="text-yellow-500 text-5xl" />
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default StackMarquee;
