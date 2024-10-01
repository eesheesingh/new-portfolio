import React from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate for navigation
import StackMarquee from './stackCarousel';
import { AiOutlineClose } from 'react-icons/ai';  // Import a cross icon from react-icons
import { aboutData, experienceData } from '../constants';  // Import the aboutData and experienceData

const About = () => {
  const navigate = useNavigate();  // Initialize useNavigate

  const handleClose = () => {
    navigate('/');  // Navigate to the home ("/") when the cross icon is clicked
  };

  return (
    <div className="relative flex justify-center items-center min-h-screen bg-[#0d0d0d] text-white p-2">
      <div className='border-[1px] border-[#ffffff24] rounded-[30px]'>
        {/* Cross Icon at the top center */}
        <div 
          className="absolute top-6 right-6 cursor-pointer text-white hover:text-gray-400 transition duration-200 rounded-full bg-[#9696967f] p-2" 
          onClick={handleClose}
        >
          <AiOutlineClose size={20} />  {/* Cross icon */}
        </div>

        {/* Main container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl p-6 w-full">
          
          {/* What I'm About section */}
          <div className="p-6 bg-[#1c1c1c] border-2 border-[#fffefe11] rounded-[30px] shadow-xl text-left">
            <h2 className="text-2xl font-bold mb-4 text-[#e0e0e0] border-b-[1px] pb-4 border-[#ffffff1a]">{aboutData.story.title}</h2>
            <h3 className="text-sm text-[#000] mb-2"><span className='bg-[#fff] rounded-[30px] py-1 px-3'>My Story</span></h3>
            <p className="text-md leading-relaxed mb-4">
              {aboutData.story.description}
            </p>
            <h3 className="text-sm text-[#000] mb-2 "><span className='bg-[#fff] rounded-[30px] py-1 px-3'>What I Do Now</span></h3>
            <p className="text-md leading-relaxed">
              {aboutData.story.currentRole}
            </p>
          </div>

          {/* What I Do Best section */}
          <div className="p-6 bg-[#1c1c1c] border-2 border-[#fffefe11] rounded-[30px] shadow-xl text-left">
            <h2 className="text-2xl font-bold mb-4 text-[#e0e0e0] border-b-[1px] pb-4 border-[#ffffff1a]">What I do best</h2>
            <h3 className="text-sm text-[#000] mb-2"> <span className='bg-[#fff] rounded-[30px] py-1 px-3'>Digital Design</span></h3>
            <p className="text-md leading-relaxed mb-4">
              Providing innovative problem-solving methods and impactful solutions to ensure a better user experience.
            </p>

            {/* Stack I Use section */}
            <h3 className="text-md text-[#999] mb-2">Skills I can provide you with -</h3>
            <StackMarquee />
          </div>

          {/* Experience section */}
          <div className="p-6 bg-[#1c1c1c] border-2 border-[#fffefe11] rounded-[30px] shadow-xl text-left lg:col-span-2">
            <h2 className="text-2xl font-bold mb-4 text-[#e0e0e0]">Experience</h2>
            <div className="text-md leading-relaxed">
            {experienceData.map((experience) => (
                <div key={experience.id} className="mb-4">
                  <div className="flex justify-between items-center">
                    <span>{experience.title}</span>
                    <span className="text-[#999]">{experience.period}</span>
                  </div>
                  {/* Check if the current experience is not the last one */}
                  {experience.id !== experienceData.length && <hr className="border-[#444] my-4" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
