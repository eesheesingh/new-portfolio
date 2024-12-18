import { link } from "framer-motion/client";
import img1 from "./assets/copartnerProject.png";
import img2 from "./assets/ap-cp.png";
import img3 from "./assets/copartnerChat.png";
import img4 from "./assets/desidabba.png";
import img5 from "./assets/jsHub-img.png";
import img6 from "./assets/freshlo-img.png";
import img7 from "./assets/porfolio2023-img.png";
import img8 from "./assets/humourload.png";

// import img3 from "../assets/an-avatar-of-a-brown-guy-looking-at-you-with-cute-smiles-with-transparent-background-hes-wearing-a-627855248-removebg-preview.png";

export const experienceData = [
  {
    id: 6,
    title: "Front-end Developer",
    company: "India Accelerator",
    period: "Current",
    description:
      "Working on React Native product based apps such Booking Managements in Coworking spaces and Dashboards.",
  },
  {
    id: 1,
    title: "Front-end Developer",
    company: " HailGro Tech Solutions",
    period: "Jan 2024 – Nov 2024",
    description:
      "Built top-notch dashboards and websites with React, Vite, and Next.js. Our team crafts dynamic digital solutions that enhance user experiences and drive business growth.",
  },
  {
    id: 2,
    title: " Front-end Developer",
    company: "Primite Marketing",
    period: "Nov 2023 – Jan 2024",
    description:
      "Contributed to WordPress website creation and maintenance,specializing in theme customization, plugin integration, and content management to improve user experience. Additionally, participated in coding and developing using HTML, CSS, and JavaScript throughout the development lifecycle",
  },
  {
    id: 3,
    title: "WordPress Developer",
    company: "TrainerGoesOnline",
    period: " Aug 2023 – Nov 2023",
    description:
      "At OLX, I collaborated with cross-functional teams to create engaging and user-centric interfaces for the classifieds platform. My role involved creating design systems, conducting user research, and applying design principles to improve overall user engagement.",
  },
  {
    id: 4,
    title: "Web Developer",
    company: "Highkey",
    period: "Oct 2022 – June 2023",
    description:
      "Engaged with clients to understand their design needs, conducted assessments of their websites for improvements, and utilized WordPress tools to create tailored, visually appealing, and functional websites.",
  },
  {
    id: 5,
    title: "Web Developer",
    company: "Tesla Digital LLP",
    period: "April 2022 – Aug 2022",
    description:
      " Designed and implemented an efficient order management system along with maintain in order tracking, processing, and success.",
  },
];

export const aboutData = {
  story: {
    title: "What I'm about?",
    description: `
        I was born and raised in Mumbai, Maharashtra. I have had a passion for code development.`,
    currentRole:
      "I am a front-end developer at India Accelerators, specializing in building responsive dashboards and websites using React.js, Vite.js, Next.js, and Tailwind CSS, with React Native applications with seamless user experiences.",
  },
};

// projects.js
const projects = [
  {
    id: 1,
    title: "Copartner.in",
    description:
      "CoPartner is a trading platform that connects users with expert traders for real-time guidance. Users can chat directly with experienced traders and access premium subscriptions for personalized advice.",
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
    description:
      "A dashboard designed for affiliate partners to track performance, manage referrals, and access promotional tools, helping affiliates grow their revenue effectively.",
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
    description:
      "A real-time chat platform that connects users with trading experts for personalized guidance. Users can access premium chat features for in-depth advice.",
    aboutData: `CoPartner Chat is built using React.js and SignalR to enable real-time communication between users and experts. The app integrates RESTful APIs and uses Axios for data fetching, providing a seamless and scalable chat experience.`,
    imgSrc: img3,
    status: "https://github.com/eesheesingh/chatui-copartner.git",
    projectLink: "https://chat.copartner.in",
    tools: "React.js, ASP.NET, SignalR, Axios, RestfulAPI, Node.js, Swagger",
    company: "HailGro Tech Solution",
  },
  {
    id: 4,
    title: "Desi Dabba Store",
    description:
      "An online platform offering authentic, homemade Indian meals delivered to your doorstep, connecting users with local chefs for fresh and delicious food.",
    aboutData: `Desi Dabba Store is an e-commerce website built with WordPress and WooCommerce, offering a seamless shopping experience for customers to order homemade Indian meals. The platform is mobile-responsive with secure transactions.`,
    imgSrc: img4,
    status: "https://desidabbastore.com/",
    projectLink: "https://desidabbastore.com/",
    tools: "WordPress, Elementor, Woocommerce, Jet Engine",
    company: "Primite Marketing, Desi Dabba",
  },
  {
    id: 5,
    title: "JS Hub.",
    description: `JS Hub is built using a carefully chosen stack of technologies to deliver a seamless, interactive coding experience. At its core, React provides a structured, component-based framework, allowing the app to manage dynamic content updates efficiently. With Framer Motion integrated, the app’s animations and transitions enhance the user experience, offering smooth visual interactions that make the interface engaging and responsive. Monaco Editor, which powers the in-browser code editor, replicates a professional coding environment with syntax highlighting, error checking, and autocomplete functionality, making it a robust space for real-time coding and learning. EmailJS further adds a communication layer, enabling users to send emails without backend complexity, while React Router ensures smooth navigation across the app, preserving its single-page experience.

Styling and UI components are given special attention through Tailwind CSS and React Icons, providing a modern, cohesive, and mobile-responsive design. The lightweight JavaScript foundation drives interactive elements and real-time code execution within the app. Additionally, Toastify notifies users about the status of their actions, adding instant feedback and enhancing overall usability. Together, these technologies create a visually appealing, responsive, and functional platform that helps JavaScript learners explore, practice, and connect effortlessly within JS Hub.`,
    aboutData: `JS Hub is an interactive learning platform dedicated to JavaScript enthusiasts. Built to help users enhance their coding skills, JS Hub provides tutorials, code challenges, and a live editor, making learning engaging and accessible for all skill levels. Whether you're a beginner or a seasoned developer, the app is designed to challenge and inspire.`,

    imgSrc: img5,
    status: "https://github.com/eesheesingh/learn-js-project.git",
    projectLink: "https://learn-js-project-five.vercel.app/",
    tools:
      "ViteJS, React, Framer Motion, Monaco Editor, EmailJS, CSS/Tailwind, Toastify, SandBox",
    company: "Owned",
  },
  {
    id: 6,
    title: "FreshLo. Landing Page",
    description: `The platform integrates a range of modern tools and libraries. React powers the site’s dynamic user interface, while @heroicons/react and react-icons improve navigation through intuitive icons that provide visual cues in a compact format. For added visual appeal and smooth interaction, Framer Motion enables animations, enriching transitions as users interact with different features. Interactive components like React Compare Image allow before-and-after comparisons, ideal for visually showcasing product transformations. Freshlo also employs React Owl Carousel and Swiper.js to create responsive carousels, which beautifully display featured products and customer testimonials. To support a seamless browsing experience, pagination and filtering features are integrated, making product discovery easy and efficient.`,
    aboutData: `The Freshlo website is a streamlined e-commerce platform dedicated to delivering the freshest groceries directly to customers' doorsteps. Created with a user-centric design and smooth navigation, the site offers features that make online grocery shopping easy, visually engaging, and accessible across all devices. The project was initiated with Create React App to provide a solid foundation and efficient development setup.`,
    imgSrc: img6,
    status: "https://github.com/eesheesingh/Freshlo-Landing-Page.git",
    projectLink: "https://freshlo-landing-page.vercel.app/",
    tools:
      "React, Framer Motion, Owl Carousel , SwiperJs, CSS/Tailwind, FormKit, React Compare Image",
    company: "Owned",
  },
  {
    id: 7,
    title: "Eesheepal Singh - Portfolio 2023",
    description: `Welcome to my React & Vite Portfolio – a vibrant digital showcase of my skills, projects, and journey in modern web development. This portfolio leverages React’s component-driven architecture to create an interactive experience, where each section embodies intuitive UI elements such as modals, carousels, and collapsible sections that provide seamless navigation through my professional landscape. Paired with Vite, this site capitalizes on blazing-fast loading times and highly efficient build processes, ensuring smooth and responsive performance across devices and screen sizes, so visitors can explore my work without interruption.`,
    aboutData: `The project gallery highlights my creative work with dynamic filtering capabilities, allowing users to browse projects by technology and explore rich media representations. With an organized skills section, my proficiency in the React ecosystem and other key technologies is prominently displayed, offering a visually engaging experience into my technical skill set. Designed for engagement, the contact section includes an interactive form and links to social and professional profiles, inviting users to connect or collaborate. Overall, every design choice, from fonts to colors, aligns with my personal branding, making this portfolio not only a showcase of my projects but a reflection of my professional identity.`,
    imgSrc: img7,
    status: "https://github.com/eesheesingh/My-Portfolio-2023.git",
    projectLink: "https://my-portfolio-2023-mu.vercel.app/",
    tools:
      "Vite, React, Framer, EmailJS, Vercel",
    company: "Owned",
  },
  {
    id: 8,
    title: "Humour Load",
    description: "A light-hearted web app designed to brighten your day with dad jokes, inspiring quotes, and dark humor. Enjoy a fun mix of content and interact with each joke or quote to express your reactions.",
    aboutData: "Humour Load is built as a Vite-based application, leveraging the power of React, Tailwind CSS, and Framer Motion for a smooth, animated experience. The project includes three main features: Humour Load, which serves dad jokes; Quote Load, a section dedicated to inspirational quotes with various categories; and Dark Humour, which provides a playful take on darker humor. Each section is enhanced with reaction options, sharing capabilities, and a fun UI with animated emojis. The app integrates APIs for jokes and quotes, supporting real-time data fetching, lazy loading, and category-based browsing, making it an engaging, user-friendly experience.",
    imgSrc: img8,
    status: "https://github.com/eesheesingh/HumourLoad-React.git",
    projectLink: "https://humour-load-react.vercel.app/",
    tools: "Vite, React, Tailwind CSS, Framer Motion, Typewriter Effect, REST APIs",
    company: "Owned",
},
];

export default projects;
