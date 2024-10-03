import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import project1 from "../assets/copartnerProject.png";
import project2 from "../assets/ap-cp.png";
import NewImg from "../assets/Eesheepfp_lg_bg.png";
import resumePDF from "../assets/Eesheepal_Singh_Resume.pdf"; // Import your PDF file
import projectGif from "../assets/responsive-design-unscreen.gif";
import ImageContainer from "./ImageContainer";
import StackMarquee from "./stackCarousel";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Importing framer-motion for animations
import { BsGithub } from "react-icons/bs";
import projects from "../constants"; // Import project data

const Hero = () => {
  const navigate = useNavigate(); // Ensure useNavigate hook is used within the component

  const [repoCount, setRepoCount] = useState(0);
  const [userName, setUserName] = useState("");
  const [githubName, setGithubName] = useState("");
  const [avatarUrl, setAvatarUrl] = useState(""); 

  useEffect(() => {
    const fetchGitHubProfile = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/eesheesingh`
        );
        const data = await response.json();
        setRepoCount(data.public_repos); 
        setUserName(data.login);
        setGithubName(data.name);
        setAvatarUrl(data.avatar_url); 
      } catch (error) {
        console.error("Error fetching GitHub profile:", error);
      }
    };

    fetchGitHubProfile();
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 768) {
      window.scrollTo(0, 0); 
    }
  }, []);

  const handleProjectClick = (id) => {
    navigate(`/projects/${id}`); // Use navigate inside the component function
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", duration: 0.8 },
    },
  };

  return (
    <motion.div
      className="hero-section flex justify-center items-center h-auto md:h-screen bg-[#000] px-3 py-6 md:px-6"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="p-4 md:p-6 bg-[#0d0d0d] border-[2px] border-[#444] rounded-[30px] text-center flex flex-col justify-center items-center retro-shadow w-full">
        {/* First Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4 w-full max-w-screen-xl mb-4 md:mb-4">
          {/* Left Section: Text */}
          <div className="md:col-span-1 w-full bg-[#1d1d1d] border-[2px] border-[#fffefe11] text-left text-[#fff] p-4 rounded-[20px] flex flex-col justify-center retro-shadow">
            <h1 className="text-2xl md:text-3xl font-bold font-mono">
              Hi, I'm Eeshee –
            </h1>
            <p className="mt-2 text-sm md:text-md leading-relaxed font-mono">
              Lead product designer, currently working at{" "}
              <span className="underline">mano</span> based in Cairo.
            </p>
          </div>

          {/* Right Section: Images and Icon Grid */}
          <div className="col-span-2 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 w-full">
            {/* First Project */}
            <motion.div
              className="relative hidden md:block w-full md:w-1/3 bg-[#1d1d1d] rounded-[20px] border-[2px] border-[#fffefe11] overflow-hidden retro-shadow cursor-pointer"
              whileHover={{ scale: 1.05 }} // Add subtle scale on hover
              onClick={() => handleProjectClick(projects[0].id)} // Navigate to the project info page
            >
              <img
                src={projects[0].imgSrc}
                alt={projects[0].title}
                className="w-full h-full object-cover"
              />
              {/* Hover Content */}
              <div className="absolute inset-0 bg-[#00000090] flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white font-bold text-lg mb-2">
                  {projects[0].title}
                </h3>
                <GoArrowRight className="text-white text-2xl" />
              </div>
            </motion.div>

            {/* Second Project */}
            <motion.div
              className="relative hidden md:block w-full md:w-1/3 bg-[#1d1d1d] rounded-[20px] border-[2px] border-[#fffefe11] overflow-hidden retro-shadow cursor-pointer"
              whileHover={{ scale: 1.05 }} 
              onClick={() => handleProjectClick(projects[1].id)} 
            >
              <img
                src={projects[1].imgSrc}
                alt={projects[1].title}
                className="w-full h-full object-cover"
              />
              {/* Hover Content */}
              <div className="absolute inset-0 bg-[#00000090] flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white font-bold text-lg mb-2">
                  {projects[1].title}
                </h3>
                <GoArrowRight className="text-white text-2xl" />
              </div>
            </motion.div>

            {/* Third Section: 3x2 Icon Grid */}
            <div className="w-1/2 md:grid grid-cols-3 gap-2 hidden">
            <ImageContainer iconName="call" alt="Call" /> {/* Calls the handleClick for mobile or desktop */}
  <ImageContainer iconName="vercel" alt="Vercel" url="https://vercel.com/eesheesinghs-projects" />
  <ImageContainer iconName="instagram" alt="Instagram" url="https://www.instagram.com/eesheepal/" />
  <ImageContainer iconName="linkedin" alt="LinkedIn" url="https://www.linkedin.com/in/eesheepal-singh-80057b204/" />
  <ImageContainer iconName="github" alt="GitHub" url="https://github.com/eesheesingh" />
  <ImageContainer iconName="email" alt="Email" url="mailto:singheeshee@gmail.com" />
</div>
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-screen-xl">
          {/* Left Section: Full-width Image */}
          <div className="md:col-span-1 flex justify-center md:justify-between space-x-4 md:space-x-0">
            <div
              className="w-full md:block bg-gradient-to-r from-[#1f1f1f] to-[#3b3b3b] rounded-[20px] border-[2px] border-[#fffefe11] overflow-hidden relative retro-shadow"
              style={{
                backgroundImage: `url('https://i.pinimg.com/736x/cf/df/71/cfdf7123f69072b4986167c7133b814e.jpg')`,
                backgroundBlendMode: "multiply",
                backgroundSize: "cover",
              }}
            >
              <img
                src={NewImg}
                alt="Profile bg"
                className="w-full h-full object-cover"
              />
              {/* Adds a soft vignette effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-30"></div>
              {/* Optional subtle radial gradient for depth */}
              <div className="absolute inset-0 bg-[radial-gradient(circle, rgba(255,255,255,0.15), transparent 70%)]"></div>
            </div>
          </div>

          {/* About Section */}
          <Link
            to="/about"
            className="md:col-span-1 w-full bg-[#1d1d1d] border-[2px] border-[#fffefe11] text-left text-[#fff] p-4 rounded-[20px] flex flex-col justify-center relative retro-shadow group hover:border-[#ffffff5d] transition-all"
          >
            <h1 className="text-lg font-bold font-mono">About</h1>
            <p className="mt-2 text-sm leading-relaxed font-mono">
              Passionate about design and enjoy solving problems.
            </p>
            {/* Arrow Icon at bottom right */}
            <div className="absolute bottom-4 right-4">
              <div className="md:w-10 w-6 h-6 md:h-10 rounded-full bg-[#333] border-[2px] border-[#fffefe11] flex items-center justify-center transition-transform duration-300 group-hover:-rotate-45">
                <GoArrowRight className="text-white md:text-3xl text-lg" />
              </div>
            </div>
          </Link>

          {/* Experience Section */}
          <Link
            to="/experience"
            className="md:col-span-1 w-full bg-[#1d1d1d] border-[2px] border-[#fffefe11] text-left text-[#fff] p-4 rounded-[20px] flex flex-col justify-center relative retro-shadow group hover:border-[#ffffff5d] transition-all"
          >
            <h1 className="text-lg font-bold font-mono">Experience</h1>
            <p className="mt-2 text-sm leading-relaxed font-mono">
              Here is the third container in the second row.
            </p>
            {/* Arrow Icon at bottom right */}
            <div className="absolute bottom-4 right-4">
              <div className="md:w-10 w-6 h-6 md:h-10 rounded-full bg-[#333] border-[2px] border-[#fffefe11] flex items-center justify-center transition-transform duration-300 group-hover:-rotate-45">
                <GoArrowRight className="text-white md:text-3xl text-xl" />
              </div>
            </div>
          </Link>

          {/* Projects Section */}
          <Link
            to="/projects"
            className="md:col-span-1 w-full bg-[#1d1d1d] md:h-[400px] row-span-2 border-[2px] border-[#fffefe11] text-left text-[#fff] p-4 rounded-[20px] flex flex-col justify-center relative retro-shadow group hover:border-[#ffffff5d] transition-all"
          >
            <h1 className="text-lg font-bold font-mono">Projects</h1>
            <p className="mt-2 text-sm leading-relaxed font-mono">
              This is a vertically long container in the second row.
            </p>

            {/* GIF Image Section */}
            <div className="mt-4 mb-2 bg-[#c6c6c6] rounded-lg p-2 border-[1px] border-[#333] flex items-center justify-center">
              <img
                src={projectGif}
                alt="GIF of Project"
                className="rounded-lg md:w-[80%] w-full h-auto object-cover filter grayscale"
                style={{ backgroundColor: "transparent" }}
              />
            </div>

            {/* Arrow Icon at bottom right */}
            <div className="absolute bottom-4 right-4">
              <div className="md:w-12 w-8 h-8 md:h-12 rounded-full bg-[#333] border-[2px] border-[#fffefe11] flex items-center justify-center transition-transform duration-300 group-hover:-rotate-45">
                <GoArrowRight className="text-white md:text-3xl text-xl" />
              </div>
            </div>
          </Link>

          {/* Third Row Containers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:col-span-3">
            {/* First Container: Resume */}
            <div className="bg-[#1d1d1d] border-[2px] border-[#fffefe11] text-left text-[#fff] p-4 rounded-[20px] flex flex-col justify-center retro-shadow">
              <h1 className="md:text-lg text-sm font-bold font-pixel">
                Need More Info?
              </h1>
              <h1 className="text-lg font-bold font-pixel md:block hidden">
                Check Out My Resume
              </h1>
              {/* Resume Download Button */}
              <a
                href={resumePDF} // Use the imported PDF file from the assets folder
                download="Eeshee_Resume.pdf"
                className="mt-2 text-sm bg-[#666] text-[#fff] p-2 rounded-[10px] border-[2px] border-[#888] hover:bg-[#777] transition-all duration-300 text-center"
              >
                Download Resume
              </a>
            </div>

            {/* Stack I Use */}
            <div className="bg-[#1d1d1d] border-[2px] border-[#fffefe11] text-left text-[#fff] p-4 rounded-[20px] flex flex-col justify-center retro-shadow">
              <h1 className="text-lg font-bold font-pixel">Stack I Use</h1>
              <div className="mt-2">
                <StackMarquee /> {/* Here's the new marquee */}
              </div>
            </div>

            {/* GitHub Inquiry with Repo Count */}
            <a
              href={`https://github.com/${userName}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1d1d1d] hidden border-[2px] border-[#fffefe11] text-left text-[#fff] p-4 rounded-[20px] md:flex flex-col justify-center retro-shadow relative cursor-pointer hover:border-[#ffffff5d] transition-all"
            >
              {/* GitHub Link at the top-left corner */}
              <h1 className="absolute top-2 left-4 text-sm font-bold font-pixel font-mono text-[#ffffff6b]">
                /{userName}
              </h1>
              <div className="flex flex-col items-center">
                <img
                  src={avatarUrl}
                  alt="GitHub Avatar"
                  className="rounded-full w-10 h-10 mb-4"
                />
                <h1 className="text-lg font-bold font-pixel">
                  Name: {githubName}
                </h1>
                <p className="mt-2 text-md">Total Repos: {repoCount}</p>{" "}
                {/* Display GitHub repo count */}
              </div>
              {/* Arrow Icon at bottom right */}
              <div className="absolute bottom-4 right-4">
                <div className="w-10 h-10 rounded-full bg-[#333] border-[2px] border-[#fffefe11] flex items-center justify-center transition-transform duration-300 group-hover:-rotate-45">
                  <BsGithub className="text-white text-xl" />
                </div>
              </div>
            </a>
          </div>
        </div>
        {/* GitHub Inquiry with Repo Count */}
        <a
          href={`https://github.com/${userName}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#1d1d1d] md:hidden mt-3 w-full border-[2px] border-[#fffefe11] text-left text-[#fff] p-4 rounded-[20px] flex flex-col justify-center retro-shadow relative cursor-pointer hover:border-[#ffffff5d] transition-all"
        >
          {/* GitHub Link at the top-left corner */}
          <h1 className="absolute top-2 left-4 text-sm font-bold font-pixel font-mono text-[#ffffff6b]">
            /{userName}
          </h1>
          <div className="flex flex-col items-center">
            <img
              src={avatarUrl}
              alt="GitHub Avatar"
              className="rounded-full w-10 h-10 mb-4"
            />
            <h1 className="text-lg font-bold font-pixel">Name: {githubName}</h1>
            <p className="mt-2 text-md">Total Repos: {repoCount}</p>{" "}
            {/* Display GitHub repo count */}
          </div>
          {/* Arrow Icon at bottom right */}
          <div className="absolute bottom-4 right-4">
            <div className="w-10 h-10 rounded-full bg-[#333] border-[2px] border-[#fffefe11] flex items-center justify-center transition-transform duration-300 group-hover:-rotate-45">
              <BsGithub className="text-white text-xl" />
            </div>
          </div>
        </a>
        <div className="w-full grid grid-cols-6 gap-2 md:hidden lg:hidden sm:hidden mt-3">
        <ImageContainer iconName="call" alt="Call" /> {/* Calls the handleClick for mobile or desktop */}
  <ImageContainer iconName="vercel" alt="Vercel" url="https://vercel.com/eesheesinghs-projects" />
  <ImageContainer iconName="instagram" alt="Instagram" url="https://www.instagram.com/eesheepal/" />
  <ImageContainer iconName="linkedin" alt="LinkedIn" url="https://www.linkedin.com/in/eesheepal-singh-80057b204/" />
  <ImageContainer iconName="github" alt="GitHub" url="https://github.com/eesheesingh" />
  <ImageContainer iconName="email" alt="Email" url="mailto:singheeshee@gmail.com" />
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
