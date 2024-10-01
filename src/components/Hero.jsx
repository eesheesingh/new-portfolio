import React, { useState, useEffect } from "react";
import img from "../assets/an-avatar-of-a-brown-guy-looking-at-you-with-cute-smiles-with-transparent-background-hes-wearing-a-627855248-removebg-preview.png";
import NewImg from "../assets/among-us-pink-u8hrfnjgysswhlns.jpg";
import resumePDF from "../assets/Eesheepal_Singh_Resume.pdf"; // Import your PDF file
import ImageContainer from "./ImageContainer";
import StackMarquee from "./stackCarousel";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";
import { BsGithub } from "react-icons/bs";

const Hero = () => {
  const [repoCount, setRepoCount] = useState(0); // State to store the total number of repos
  const [userName, setUserName] = useState("");
  const [githubName, setGithubName] = useState("");
  const [avatarUrl, setAvatarUrl] = useState(""); // State to store the GitHub user's avatar URL

  // Fetch GitHub profile data
  useEffect(() => {
    const fetchGitHubProfile = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/eesheesingh`);
        const data = await response.json();
        setRepoCount(data.public_repos); // Set the repository count
        setUserName(data.login);
        setGithubName(data.name);
        setAvatarUrl(data.avatar_url); // Set the GitHub user's avatar
      } catch (error) {
        console.error("Error fetching GitHub profile:", error);
      }
    };

    fetchGitHubProfile();
  }, []);

  return (
    <div className="hero-section flex justify-center items-center h-screen bg-[#000] px-3">
      <div className="p-4 md:p-6 bg-[#000] border-[2px] border-[#444] rounded-[30px] text-center flex flex-col justify-center items-center retro-shadow">
        {/* First Row */}
        <div className="grid md:grid-cols-3 gap-2 w-full max-w-screen-xl mb-2">
          {/* Left Section: Text */}
          <div className="md:col-span-1 w-full bg-[#1d1d1d] border-[2px] border-[#fffefe11] text-left text-[#fff] p-4 rounded-[20px] flex flex-col justify-center retro-shadow">
            <h1 className="text-3xl font-bold font-mono">Hi, I'm Eeshee –</h1>
            <p className="mt-2 text-md leading-relaxed font-mono">
              Lead product designer, currently working at{" "}
              <span className="underline">mano</span> based in Cairo.
            </p>
          </div>

          {/* Right Section: Images and Icon Grid */}
          <div className="col-span-2 flex space-x-2 ">
            {/* First Image */}
            <div className="w-1/3 bg-[#1d1d1d] rounded-[20px] border-[2px] border-[#fffefe11] overflow-hidden retro-shadow">
              <img
                src={img}
                alt="Mobile mockup 1"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Second Image */}
            <div className="w-1/3 bg-[#1d1d1d] rounded-[20px] border-[2px] border-[#fffefe11] overflow-hidden retro-shadow">
              <img
                src={img}
                alt="Mobile mockup 2"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Third Section: 3x2 Icon Grid */}
            <div className="w-1/2 grid grid-cols-3 gap-2">
              <ImageContainer iconName="call" alt="Twitter" />
              <ImageContainer iconName="vercel" alt="Dribbble" />
              <ImageContainer iconName="instagram" alt="Instagram" />
              <ImageContainer iconName="linkedin" alt="LinkedIn" />
              <ImageContainer iconName="github" alt="Behance" />
              <ImageContainer iconName="email" alt="Email" />
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="grid md:grid-cols-4 gap-2 w-full max-w-screen-xl">
          {/* Left Section: Full-width Image */}
          <div className="md:col-span-1 flex justify-between space-x-2">
            <div className="w-full bg-[#1d1d1d] rounded-[20px] border-[2px] border-[#fffefe11] overflow-hidden retro-shadow">
              <img
                src={NewImg}
                alt="2"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Section: Text */}
          <Link to="/about" className="md:col-span-1 w-full bg-[#1d1d1d] border-[2px] border-[#fffefe11] text-left text-[#fff] p-4 rounded-[20px] flex flex-col justify-center relative retro-shadow group hover:border-[#ffffff5d] transition-all">
            <h1 className="text-lg font-bold font-mono">About</h1>
            <p className="mt-2 text-sm leading-relaxed font-mono">
              Passionate about design and enjoy solving problems.
            </p>

            {/* Arrow Icon at bottom right */}
            <div className="absolute bottom-4 right-4">
              <div className="w-10 h-10 rounded-full bg-[#333] border-[2px] border-[#fffefe11] flex items-center justify-center transition-transform duration-300 group-hover:-rotate-45">
                <GoArrowRight className="text-white text-xl" />
              </div>
            </div>
          </Link>

          {/* Third Container: New Section */}
          <Link to="/experience" className="md:col-span-1 w-full bg-[#1d1d1d] border-[2px] border-[#fffefe11] text-left text-[#fff] p-4 rounded-[20px] flex flex-col justify-center relative retro-shadow group hover:border-[#ffffff5d] transition-all">
            <h1 className="text-lg font-bold font-mono">Experience</h1>
            <p className="mt-2 text-sm leading-relaxed font-mono">
              Here is the third container in the second row.
            </p>

            {/* Arrow Icon at bottom right */}
            <div className="absolute bottom-4 right-4">
              <div className="w-10 h-10 rounded-full bg-[#333] border-[2px] border-[#fffefe11] flex items-center justify-center transition-transform duration-300 group-hover:-rotate-45">
                <GoArrowRight className="text-white text-xl" />
              </div>
            </div>
          </Link>

          {/* Fourth Container: Vertical Container */}
          <Link to="/projects" className="md:col-span-1 w-full bg-[#1d1d1d] h-[400px] row-span-2 border-[2px] border-[#fffefe11] text-left text-[#fff] p-4 rounded-[20px] flex flex-col justify-center relative retro-shadow group hover:border-[#ffffff5d] transition-all">
            <h1 className="text-lg font-bold font-mono">Projects</h1>
            <p className="mt-2 text-sm leading-relaxed font-mono">
              This is a vertically long container in the second row.
            </p>

            {/* Arrow Icon at bottom right */}
            <div className="absolute bottom-4 right-4">
              <div className="w-12 h-12 rounded-full bg-[#333] border-[2px] border-[#fffefe11] flex items-center justify-center transition-transform duration-300 group-hover:-rotate-45">
                <GoArrowRight className="text-white text-3xl" />
              </div>
            </div>
          </Link>

          {/* Third Row Containers */}
          <div className="grid md:grid-cols-3 gap-2 md:col-span-3">
            {/* First Container: Design Tips */}
            <div className="bg-[#1d1d1d] border-[2px] border-[#fffefe11] text-left text-[#fff] p-4 rounded-[20px] flex flex-col justify-center retro-shadow">
              <h1 className="text-lg font-bold font-pixel">Need More Info?</h1>

              <h1 className="text-lg font-bold font-pixel">Check Out My Resume</h1>

              {/* Resume Download Button */}
              <a
                href={resumePDF} // Use the imported PDF file from the assets folder
                download="Eeshee_Resume.pdf"
                className="mt-2 bg-[#666] text-[#fff] p-2 rounded-[10px] border-[2px] border-[#888] hover:bg-[#777] transition-all duration-300 text-center"
              >
                Download Resume
              </a>
            </div>

            {/* Second Container: Stack I Use */}
            <div className="bg-[#1d1d1d] border-[2px] border-[#fffefe11] text-left text-[#fff] p-4 rounded-[20px] flex flex-col justify-center retro-shadow">
              <h1 className="text-lg font-bold font-pixel">Stack I Use</h1>
              <div className="mt-2">
                <StackMarquee /> {/* Here's the new marquee */}
              </div>
            </div>

            {/* Third Container: Project Inquiry with GitHub Repo Count */}
            <a
              href={`https://github.com/${userName}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1d1d1d] border-[2px] border-[#fffefe11] text-left text-[#fff] p-4 rounded-[20px] flex flex-col justify-center retro-shadow relative cursor-pointer hover:border-[#ffffff5d] transition-all"
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
                <p className="mt-2 text-md">Total Repos: {repoCount}</p> {/* Display GitHub repo count */}
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
      </div>
    </div>
  );
};

export default Hero;
