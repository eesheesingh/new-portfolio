import { link } from "framer-motion/client";
import img1 from "./assets/copartnerProject.png";
import img2 from "./assets/ap-cp.png";
import img3 from "./assets/copartnerChat.png";
import img4 from "./assets/desidabba.png";
// import img3 from "../assets/an-avatar-of-a-brown-guy-looking-at-you-with-cute-smiles-with-transparent-background-hes-wearing-a-627855248-removebg-preview.png";

export const experienceData = [
    {
      id: 1,
      title: 'Front-end Developer',
      company: ' HailGro Tech Solutions',
      period: 'Current',
      description:
        'Currently building top-notch dashboards and websites with React, Vite, and Next.js. Our team crafts dynamic digital solutions that enhance user experiences and drive business growth.',
    },
    {
      id: 2,
      title: ' Front-end Developer',
      company: 'Primite Marketing',
      period: 'Nov 2023 – Jan 2024',
      description:
        'Contributed to WordPress website creation and maintenance,specializing in theme customization, plugin integration, and content management to improve user experience. Additionally, participated in coding and developing using HTML, CSS, and JavaScript throughout the development lifecycle',
    },
    {
      id: 3,
      title: 'WordPress Developer',
      company: 'TrainerGoesOnline',
      period: ' Aug 2023 – Nov 2023',
      description:
        'At OLX, I collaborated with cross-functional teams to create engaging and user-centric interfaces for the classifieds platform. My role involved creating design systems, conducting user research, and applying design principles to improve overall user engagement.',
    },
    {
      id: 4,
      title: 'Web Developer',
      company: 'Highkey',
      period: 'Oct 2022 – June 2023',
      description:
        'Engaged with clients to understand their design needs, conducted assessments of their websites for improvements, and utilized WordPress tools to create tailored, visually appealing, and functional websites.'
    },
    {
      id: 5,
      title: 'Web Developer',
      company: 'Tesla Digital LLP',
      period: 'April 2022 – Aug 2022',
      description:' Designed and implemented an efficient order management system along with maintain in order tracking, processing, and success.',
    },
  ];

  
  export const aboutData = {
    story: {
      title: 'What I\'m about?',
      description: `
        I was born and raised in Mumbai, Maharashtra. I have had a passion for code development.`,
      currentRole: 'I am a front-end developer at HailGro Tech Solutions, specializing in building responsive dashboards and websites using React.js, Vite.js, Next.js, and Tailwind CSS, with a focus on real-time chat functionalities using SignalR, API integration, and seamless user experiences.',
    },
   
  };


  // projects.js
  const projects = [
    {
      id: 1,
      title: "Copartner.in",
      description: "CoPartner is a trading platform that connects users with expert traders for real-time guidance. Users can chat directly with experienced traders and access premium subscriptions for personalized advice.",
      aboutData: `CoPartner is a trading platform built using ReactJS for a responsive interface and SQL for secure data management. The platform integrates APIs, tested via Swagger, ensuring seamless user experience and real-time chat functionality.`,
      imgSrc: img1,
      status: "https://github.com/hailgrowtech/copartner_user_ui.git",
      projectLink: "https://copartner.in",
      tools: "React.js, Tailwind CSS, RestfulAPI, Axios, Swagger",
      company: "HailGro Tech Solution",
    },
    {
      id: 2,
      title: "Affiliate Partner Dashboard",
      description: "A dashboard designed for affiliate partners to track performance, manage referrals, and access promotional tools, helping affiliates grow their revenue effectively.",
      aboutData: `Built with React and SQL, the Affiliate Partner Dashboard offers real-time analytics, custom date filtering, and wallet management for affiliate earnings. The platform is mobile-responsive, with graphs for better visualization.`,
      imgSrc: img2,
      status: "https://github.com/eesheesingh/ap-dashboard-copartner-ui.git",
      projectLink: "https://ap.copartner.in",
      tools: "React.js, Tailwind CSS, RestfulAPI, Axios, Swagger",
      company: "HailGro Tech Solution",
    },
    {
      id: 3,
      title: "Copartner Chat",
      description: "A real-time chat platform that connects users with trading experts for personalized guidance. Users can access premium chat features for in-depth advice.",
      aboutData: `CoPartner Chat is built using React.js and SignalR to enable real-time communication between users and experts. The app integrates RESTful APIs and uses Axios for data fetching, providing a seamless and scalable chat experience.`,
      imgSrc: img3,
      status: "https://github.com/eesheesingh/chatui-copartner.git",
      projectLink:"https://chat.copartner.in",
      tools: "React.js, ASP.NET, SignalR, Axios, RestfulAPI, Node.js, Swagger",
      company: "HailGro Tech Solution",
    },
    {
      id: 4,
      title: "Desi Dabba Store",
      description: "An online platform offering authentic, homemade Indian meals delivered to your doorstep, connecting users with local chefs for fresh and delicious food.",
      aboutData: `Desi Dabba Store is an e-commerce website built with WordPress and WooCommerce, offering a seamless shopping experience for customers to order homemade Indian meals. The platform is mobile-responsive with secure transactions.`,
      imgSrc: img4,
      status: "https://desidabbastore.com/",
      projectLink:"https://desidabbastore.com/",
      tools: "WordPress, Elementor, Woocommerce, Jet Engine",
      company: "Primite Marketing, Desi Dabba",
    },
  ];
  
  export default projects;
  