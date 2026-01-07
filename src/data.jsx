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
    title: "UI/UX Design",
    icon: <FaPaintBrush />,
    description: `Crafting visually stunning and user-centric designs that ensure seamless user experiences. 
                  From wireframes to high-fidelity prototypes, I focus on creating intuitive interfaces that 
                  blend creativity and functionality, enhancing engagement and usability.`,
  },
  {
    title: "Web Development",
    icon: <FaCodeCompare />,
    color: "blueviolet",
    colorRGB: "138, 43, 226",
    description: `Building responsive, dynamic, and high-performance websites tailored to your needs. 
    Using modern technologies like React, javaScript and more, I ensure your site is optimized 
    for speed, scalability, and accessibility, delivering a robust online presence.`,
  },
  {
    title: "Python Developer",
    icon: <SiPython />,
    color: "var(--color-success)",
    colorRGB: "var(--color-success-rgb)",
    description: `I am proficient in the core concepts of Python and capable of building small-scale applications, 
    automating tasks, and writing clean, readable code. I understand how to use Python built-in data types, 
    control structures, functions, and libraries to create efficient and practical solutions.`,
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
    demoLink: "https://kar-zone.vercel.app/",
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
    title: "My Portfolio",
    image: project4,
    category: "Web",
    description: `This portfolio is built using React and styled with CSS, 
                  showcasing my skills in modern front-end development. From intuitive UI to smooth user interactions, every section 
                  reflects my love for clean code and great design.`,
    demoLink: "https://gleaming-babka-c743d3.netlify.app/",
    stacks: [
      {
        name: "React",
        logo: react,
      },
      {
        name: "CSS",
        logo: css,
      },
    ],
  },
];

export const skills = [
  {
    title: "Skills",
    data: [
      {
        skill: "Figma",
        level: "Basic",
        logo: figma,
      },
      {
        skill: "Canva",
        level: "Intermediate",
        logo: sketch,
      },
      {
        skill: "Python",
        level: "Intermediate",
        logo: xd,
      },
      {
        skill: "MySQL",
        level: "Basic",
        logo: mysql,
      },
      {
        skill: "MongoDB",
        level: "Basic",
        logo: mongodb,
      },
    ],
  },
  {
    title: "Development Skills",
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
        skill: "Tailwind",
        level: "Basic",
        logo: tailwind,
      },
      {
        skill: "React",
        level: "Intermediate",
        logo: react,
      },
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