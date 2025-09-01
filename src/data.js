import { images } from "./constants";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconBrandLeetcode,
} from "@tabler/icons-react";

export const socialLinks = [
  {
    id: 1,
    name: "Github",
    icon: <IconBrandGithub />,
    link: "https://github.com/bahaayoussof",
  },
  {
    id: 2,
    name: "Linkedin",
    icon: <IconBrandLinkedin />,
    link: "https://www.linkedin.com/in/bahaayoussof/",
  },
  {
    id: 3,
    name: "Email",
    icon: <IconMail />,
    link: "mailto:bahaayoussof@gmail.com",
  },
  {
    id: 4,
    name: "Leetcode",
    icon: <IconBrandLeetcode />,
    link: "https://leetcode.com/bahaayoussof/",
  },
];

export const aboutHighlights = [
  "3+ years of experience in web development",
  "Expertise in React ecosystem and modern JavaScript",
  "Passionate about UI/UX design and user experience",
  "Begin developing web applications with the Vue.js 3 framework.",
];

export const experiences = [
  {
    year: "2022",
    works: [
      {
        id: "1",
        title: "Frontend Developer",
        company: "Smart Cards Applications",
        date: "May 2023 - Dec 2023",
        location: "Cairo, Egypt",
        description:
          "I worked as a Frontend developer specializing in React.js, building scalable web applications and collaborating with cross-functional teams.",
        achievements: [
          "Refactor the codebase to improve performance and maintainability.",
          "Implement new features to enhance user experience",
          "Collaborate with the design team to implement new designs",
        ],
        tags: ["React", "JavaScript", "Redux", "Material UI", "Scss"],
      },
    ],
  },
  {
    year: "2023",
    works: [
      {
        id: "2",
        title: "Software Engineer",
        company: "Damen E-payment",
        date: "Jan 2023 - Oct 2024",
        location: "Cairo, Egypt",
        description:
          "As a Frontend Developer, I've led changes in different projects, making them better and helping teams achieve their goals.",
        achievements: [
          "Improved UX and Integrations: Better UI, optimized data flow, and added external integrations, such as Mwasalat Misr, for smoother user experiences.",
          "Increased Performance: Reworked Petrotrade to manage over 300,000 daily transactions with improved speed and scalability.",
          "Led System Upgrades: Overhauled OMS with important features like multi-account support and aggregator improvements.",
        ],
        tags: ["React", "JavaScript", "React Native", "Redux", "Material UI"],
      },
    ],
  },
  {
    year: "2024",
    works: [
      {
        id: "3",
        title: "Mid-level Software Engineer",
        company: "Algoriza, Sumerge",
        date: "Oct 2024 - Mar 2025",
        location: "Remote",
        description:
          "I contributed to the development of the Alinma Corporate Internet Banking (CIB) application for six months, where I worked on various responsibilities and collaborated with team members.",
        achievements: [
          "Developed key features in the Corporate Credit Card module, enabling companies to issue and manage credit cards as employee benefits.",
          "I implemented features including card settlement, limit management, and statement generation.",
          "Improved corporate financial operations by enhancing user experience and system efficiency for credit card processing.",
        ],
        tags: ["React Native", "TypeScript", "Redux", "Azure"],
      },
    ],
  },
  {
    year: "2025",
    works: [
     {
        id: "4",
        title: "Mid-level Software Engineer",
        company: "Algoriza, Tassel",
        date: "Mar 2025 - Present",
        location: "Remote",
        description:
          "A platform designed to help people list their properties in the real estate market.",
        achievements: [
          "Improved the codebase by adding feature updates, making it more responsive, and refining user interface elements to make the platform easier to use.",
          "Repaired and fixed bugs throughout the site to ensure smoother performance and a more reliable user experience.",
          "Introduced new features that enhanced client usability and navigation while streamlining workflows for real estate listing agents.",
        ],
        tags: ["JavaScript", "Vue.js 3", "Pinia", "Vite", "Sass", "Azure"],
      },
  }
];

export const TECHNOLOGIES = [
  "Web App",
  "Material UI",
  "React JS",
  "Tailwind",
  "All",
];

export const projects = [
  {
    id: "1",
    title: "Expense Tracker",
    description: "React Js web app to track expenses",
    projectLink: "https://by-expense-tracker.netlify.app/",
    codeLink:
      "https://github.com/bahaayoussof/react-the-complete-guide/tree/master/expenses-tracker",
    imageUrl: images.expensesTracker,
    tags: ["React JS", "All"],
  },
  {
    id: "3",
    title: "Menu",
    description: "Menu web app (restaurant menu)",
    projectLink: "",
    codeLink:
      "https://github.com/bahaayoussof/react-projects/tree/master/05-menu",
    imageUrl: images.menu,
    tags: ["React JS", "All"],
  },
  {
    id: "4",
    title: "Color Generator",
    description: "Web app helps you to generate color",
    projectLink: "https://bahaa-color-generator.netlify.app/",
    codeLink:
      "https://github.com/bahaayoussof/react-projects/tree/master/09-color-generator",
    imageUrl: images.colorGenerator,
    tags: ["React Js", "All"],
  },
  {
    id: "5",
    title: "Kanban",
    description: "Todo List",
    projectLink: "",
    codeLink: "https://github.com/bahaayoussof/kanban-board",
    imageUrl: images.kanban,
    tags: ["React JS", "Web App", "All"],
  },
  {
    id: "6",
    title: "Material Blog",
    description: "ReactJs Web blog Using Material UI",
    projectLink: "https://material-template-sand.vercel.app/",
    codeLink: "https://github.com/bahaayoussof/material-template",
    imageUrl: images.materialTemp,
    tags: ["Material UI", "All", "Web App", "React JS"],
  },
  {
    id: "7",
    title: "Admin Dashboard",
    description: "ReactJs admin dashboard",
    projectLink: "https://by-admin-dashboard.vercel.app/",
    codeLink: "https://github.com/bahaayoussof/admin-dashboard",
    imageUrl: images.dashboard,
    tags: ["React JS", "Material UI", "All", "Web App"],
  },
  {
    id: "8",
    title: "Snapgram",
    description: "ReactJs instagram clone",
    projectLink: "https://snapgram-by.vercel.app/",
    codeLink: "https://github.com/bahaayoussof/snapgram",
    imageUrl: images.snapgram,
    tags: ["React JS", "Tailwind", "All", "Web App"],
  },
  {
    id: "9",
    title: "Live-docs",
    description: "Google document clone",
    projectLink: "https://live-doc-by.vercel.app/",
    codeLink: "https://github.com/bahaayoussof/live-doc",
    imageUrl: images.comingSoon,
    tags: ["React JS", "Tailwind", "All", "Web App"],
  },
];



