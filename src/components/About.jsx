import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { aboutData, experienceData } from '../constants';
import { Carousel } from 'react-responsive-carousel';
import { motion } from 'framer-motion'; // Importing framer-motion for animations
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import StackMarquee from './stackCarousel';

const About = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/');
  };

  // Define animation variants for the container sections
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative flex justify-center items-center min-h-screen bg-[#0d0d0d] text-white p-2">
      <motion.div
        className='border-[1px] border-[#ffffff24] rounded-[30px] relative z-10' // Ensure z-index is applied to the containers
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, type: 'spring' }}
        variants={containerVariants}
      >
        {/* Cross Icon at the top center */}
        <div
          className="absolute top-6 right-6 cursor-pointer text-white hover:text-gray-400 transition duration-200 rounded-full bg-[#9696967f] p-2 z-50" // Added z-50 to ensure it's on top
          onClick={handleClose}
        >
          <AiOutlineClose size={20} />
        </div>

        {/* Main container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl p-6 w-full">
          
          {/* What I'm About section */}
          <motion.div
            className="p-6 bg-[#1c1c1c] border-2 border-[#fffefe11] rounded-[30px] shadow-xl text-left"
            variants={containerVariants}
            transition={{ duration: 0.8, type: 'spring' }}
          >
            <h2 className="text-2xl font-bold mb-4 text-[#e0e0e0] border-b-[1px] pb-4 border-[#ffffff1a]">
              {aboutData.story.title}
            </h2>
            <h3 className="text-sm text-[#000] mb-2">
              <span className='bg-[#fff] rounded-[30px] py-1 px-3'>My Story</span>
            </h3>
            <p className="text-md leading-relaxed mb-4">
              {aboutData.story.description}
            </p>
            <div className='pt-5'>
              <h3 className="text-sm text-[#000] mb-2">
                <span className='bg-[#fff] rounded-[30px] py-1 px-3'>What I Do Now</span>
              </h3>
              <p className="text-md leading-relaxed">
                {aboutData.story.currentRole}
              </p>
            </div>
          </motion.div>

          {/* Left Section with What I Do Best and Stack I Use */}
          <div className="space-y-6"> 
            {/* What I Do Best section with Carousel */}
            <motion.div
              className="p-6 bg-[#1c1c1c] border-2 border-[#fffefe11] rounded-[30px] shadow-xl text-left"
              variants={containerVariants}
              transition={{ duration: 0.8, type: 'spring' }}
            >
              <h2 className="text-2xl font-bold mb-4 text-[#e0e0e0] border-b-[1px] pb-4 border-[#ffffff1a]">
                What I do best
              </h2>
              <Carousel 
                showArrows={false}
                showThumbs={false}
                showStatus={false}
                infiniteLoop={true}
                emulateTouch={true}
                useKeyboardArrows={true}
                autoPlay={true}
                showIndicators={true}
              >
                <div className="p-4">
                  <h3 className="text-sm text-[#000] mb-2">
                    <span className='bg-[#fff] rounded-[30px] py-1 px-3'>Web Design</span>
                  </h3>
                  <p className="text-md leading-relaxed mb-4">
                  Craft responsive, visually appealing UIs with JS Frameworks, Tailwind, Bootstrap.
                  </p>
                </div>
                <div className="p-4">
                  <h3 className="text-sm text-[#000] mb-2">
                    <span className='bg-[#fff] rounded-[30px] py-1 px-3'>API Integration</span>
                  </h3>
                  <p className="text-md leading-relaxed mb-4">
                  Seamlessly connect front-end with back-end using RESTful APIs.
                  </p>
                </div>
                <div className="p-4">
                  <h3 className="text-sm text-[#000] mb-2">
                    <span className='bg-[#fff] rounded-[30px] py-1 px-3'>Fluent FrameWorks</span>
                  </h3>
                  <p className="text-md leading-relaxed mb-4">
                    I am fluent in ReactJs, NextJs, Node.Js, ViteJs
                  </p>
                </div>
              </Carousel>
            </motion.div>

            {/* Stack I Use section */}
            <motion.div
              className="p-6 bg-[#1c1c1c] border-2 border-[#fffefe11] rounded-[30px] shadow-xl text-left"
              variants={containerVariants}
              transition={{ duration: 0.8, type: 'spring' }}
            >
              <h2 className="text-2xl font-bold mb-4 text-[#e0e0e0] border-b-[1px] pb-4 border-[#ffffff1a]">Skills I can provide you with - </h2>
              <StackMarquee />
            </motion.div>
          </div>

          {/* Experience section */}
          <motion.div
            className="p-6 bg-[#1c1c1c] border-2 border-[#fffefe11] rounded-[30px] shadow-xl text-left lg:col-span-2"
            variants={containerVariants}
            transition={{ duration: 0.8, type: 'spring' }}
          >
            <h2 className="text-2xl font-bold mb-4 text-[#e0e0e0]">Experience</h2>
            <div className="text-md leading-relaxed">
              {experienceData.map((experience) => (
                <div key={experience.id} className="mb-4">
                  {experience.id !== experienceData.length && <hr className="border-[#444] my-4" />}
                  <div className="flex justify-between items-center">
                    <span>{experience.title} <br/>
                    
                    {experience.company}</span>
                    <span className="text-[#999]">{experience.period}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
