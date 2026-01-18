import { FaPaintBrush } from "react-icons/fa";
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { FaCodeCompare } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { SiLeetcode, SiPython } from "react-icons/si";
import { SiCodeforces } from "react-icons/si"
import {
  project1,
  project2,
  project3,
  project4,
  figma,
  sketch,
  xd,
  css,
  html,
  javascript,
  typescript,
  tailwind,
  bootstrap,
  react,
  reactnative,
  emailicon,
  messengericon,
  whatsappicon,
  mysql,
  nodejs,
  mongodb,
  express,
} from "./assets";

export const menu = [
  { name: "About" },
  { name: "Services" },
  { name: "Skills" },
  { name: "Projects" },
  { name: "Contact" },
];

export const services = [
  {
    title: "Frontend Development",
    icon: <FaPaintBrush />,
    description: `Building responsive, visually stunning, and user-friendly web interfaces using modern technologies. 
                  Proficient in HTML, CSS, JavaScript, React, and Tailwind CSS to create seamless user experiences 
                  with clean design, smooth animations, and optimal performance across all devices.`,
  },
  {
    title: "Backend Development",
    icon: <FaCodeCompare />,
    color: "blueviolet",
    colorRGB: "138, 43, 226",
    description: `Developing robust and scalable server-side applications using Node.js and Express.js. 
    Experienced in designing RESTful APIs, implementing authentication systems, database management with 
    MongoDB and MySQL, ensuring secure, efficient, and maintainable backend architectures.`,
  },
  {
    title: "DSA in Python",
    icon: <SiPython />,
    color: "var(--color-success)",
    colorRGB: "var(--color-success-rgb)",
    description: `Strong foundation in Data Structures and Algorithms using Python. Skilled in problem-solving 
    with arrays, linked lists, trees, graphs, dynamic programming, and more. Actively practicing on 
    platforms like LeetCode and Codeforces to continuously sharpen competitive programming skills.`,
  },
];

export const projects = [
  {
    title: "KarZone",
    image: project1,
    category: "Web",
    description: `MERN Stack Car Rental System with user booking and admin management.
JWT Authentication & Role-Based Access Control.
Admin CRUD Dashboard for cars and bookings.
Optimized UI with search, filter, sort, and pagination.
Cloud Deployed on Vercel, Render, and MongoDB Atlas.`,
    demoLink: "https://kar-zone-yh2q.vercel.app/",
    stacks: [
      {
        name: "React",
        logo: react,
      },
      {
        name: "Tailwind CSS",
        logo: tailwind,
      },
      {
        name: "Node.js",
        logo: nodejs,
      },
      {
        name: "MongoDB",
        logo: mongodb,
      },
      {
        name: "Express.js",
        logo: express,
      },
    ],
  },
  {
    title: "NewsLens",
    image: project4,
    category: "Web",
    description: `Full Stack AI News Aggregator using MERN (MongoDB, Express, React, Node.js).
AI-Powered Summarization & Fact-Checking using SambaNova (Llama-3.1).
Real-Time Credibility Scoring algorithm for news source verification.
Secure Authentication with JWT & Password Hashing.`,
    demoLink: "https://news-lens-fawn.vercel.app/",
    stacks: [
      {
        name: "React",
        logo: react,
      },
      {
        name: "Tailwind CSS",
        logo: tailwind,
      },
      {
        name: "Node.js",
        logo: nodejs,
      },
      {
        name: "MongoDB",
        logo: mongodb,
      },
      {
        name: "Express.js",
        logo: express,
      },

    ],
  },
  {
    title: "Food delivery App",
    image: project3,
    category: "Web",
    description: `A dynamic food delivery application that connects users with local restaurants,`,
    demoLink: "https://foodtrackerr.netlify.app",
    stacks: [
      {
        name: "React",
        logo: react,
      },
      {
        name: "Tailwind CSS",
        logo: tailwind,
      },
    ],
  },
  {
    title: "Modern Ai-Landing Page",
    image: project2,
    category: "Web",
    description: `A sleek, responsive, and visually engaging landing page built to showcase cutting-edge 
                  AI solutions and products. This modern design features a clean layout, 
                  vibrant gradients, smooth animations, and intuitive navigation — all optimized for high user engagement and conversion.`,
    demoLink: "https://glittery-fudge-49c041.netlify.app/",
    stacks: [
      {
        name: "Html",
        logo: html,
      },
      {
        name: "CSS",
        logo: css,
      },
      {
        name: "JavaScript",
        logo: javascript,
      },
    ],
  },
];

export const skills = [
  {
    title: "Frontend Skills",
    data: [
      {
        skill: "HTML",
        level: "Experienced",
        logo: html,
      },
      {
        skill: "CSS",
        level: "Experienced",
        logo: css,
      },
      {
        skill: "JavaScript",
        level: "Intermediate",
        logo: javascript,
      },
      {
        skill: "TypeScript",
        level: "Intermediate",
        logo: typescript,
      },
      {
        skill: "Tailwind",
        level: "Intermediate",
        logo: tailwind,
      },
      {
        skill: "React",
        level: "Intermediate",
        logo: react,
      },
    ],
  },
  {
    title: "Backend Skills",
    data: [
      {
        skill: "Node.js",
        level: "Intermediate",
        logo: nodejs,
      },
      {
        skill: "Express.js",
        level: "Intermediate",
        logo: express,
      },
      {
        skill: "MongoDB",
        level: "Intermediate",
        logo: mongodb,
      },
      {
        skill: "MySQL",
        level: "Basic",
        logo: mysql,
      },
      {
        skill: "Python",
        level: "Intermediate",
        logo: xd,
      },
    ],
  },
];
export const contactInfo = [
  {
    name: "Email",
    value: "manangilhotra09@gmail.com",
    link: "mailto:manangilhotra09@gmail.com",
    icon: emailicon,
    btnIcon: <MdOutlineEmail />,
    color: "rgb(56,115,205)",
  },
  {
    name: "Messenger",
    value: "Manan Gilhotra",
    link: "http://m.me/profile?id=profile-i",
    icon: messengericon,
    btnIcon: <RiMessengerLine />,
    color: "rgb(139,74,251)",
  },
  {
    name: "WhatsApp",
    value: "+919929945446",
    link: "https://api.whatsapp.com/send?phone=+919929945446",
    icon: whatsappicon,
    btnIcon: <BsWhatsapp />,
    color: "rgb(38,234,112)",
  },
];
export const socialHandles = [
  {
    name: "Leetcode",
    icon: <SiLeetcode />,
    link: "https://leetcode.com/u/manangilhotra/",

  },
  {
    name: "Github",
    icon: <AiFillGithub />,
    link: "https://github.com/",
  },
  {
    name: "LinkedIn",
    icon: <AiFillLinkedin />,
    link: "https://www.linkedin.com/in/manan-gilhotra-7048b5324/",
  },
  {
    name: "Codeforces",
    icon: <SiCodeforces />,
    link: "https://codeforces.com/profile/manan.gilhotra",
  },
];