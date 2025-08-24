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

export const abouts = [
  {
    id: "1",
    title: "Software Engineer",
    description: `I am a JavaScript developer with a strong understanding of OOP principles and a solid background in web development. I have experience in building and improving complex systems. With a strong foundation in software development and a keen eye for innovation, I am always eager to take on new challenges and contribute to projects that make a real difference.`,
    imageUrl: images.about02,
  },
  {
    id: "2",
    title: "Frontend Developer",
    description: `I specialize in crafting user-friendly and efficient interfaces that align with both user and business needs. With a solid background in developing and optimizing complex systems, I have a proven track record of delivering high-quality code and solutions that improve scalability, maintainability, and overall performance.`,
    imageUrl: images.about01,
  },
];

export const experiences = [
  {
    year: "2021",
    works: [
      {
        id: "1",
        title: "Frontend Developer",
        company: "Freelancing",
        date: "Jan 2021 - May 2022",
        location: "Remote",
        description:
          "I worked as a frontend developer on various client projects, delivering responsive web applications and improving user experiences.",
        achievements: [
          "Developed 10+ responsive websites for diverse clients",
          "Improved client satisfaction scores by 25%",
          "Reduced page load times by 40% through optimization",
        ],
        tags: ["HTML", "CSS", "JavaScript", "React", "Bootstrap"],
      },
    ],
  },
  {
    year: "2022",
    works: [
      {
        id: "2",
        title: "Frontend Developer",
        company: "Smart Cards Applications",
        date: "May 2023 - Dec 2023",
        location: "Cairo, Egypt",
        description:
          "I worked as a Frontend developer specializing in React.js, building scalable web applications and collaborating with cross-functional teams.",
        achievements: [
          "Refactor the codebase to improve performance and maintainability",
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
        id: "3",
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
        id: "4",
        title: "Mid-level Software Engineer",
        company: "Algoriza, Sumerge",
        date: "Oct 2024 - Mar 2025",
        location: "Cairo, Egypt",
        description:
          "I contributed to the development of the Alinma Corporate Internet Banking (CIB) application for six months, where I worked on various responsibilities and collaborated with team members.",
        achievements: [
          "Developed key features in the Corporate Credit Card module, enabling companies to issue and manage credit cards as employee benefits.",
          "I implemented features including card settlement, limit management, and statement generation.",
          "Improved corporate financial operations by enhancing user experience and system efficiency for credit card processing",
        ],
        tags: ["React Native", "TypeScript", "Redux", "Azure"],
      },
      {
        id: "5",
        title: "Mid-level Software Engineer",
        company: "Algoriza, Tassel",
        date: "Mar 2025 - Present",
        location: "Cairo, Egypt",
        description:
          "A platform designed to help people list their properties in the real estate market.",
        achievements: [
          "Improved the codebase by adding feature updates, making it more responsive, and refining user interface elements to make the platform easier to use.",
          "Repaired and fixed bugs throughout the site to ensure smoother performance and a more reliable user experience.",
          "Introduced new features that enhanced client usability and navigation while streamlining workflows for real estate listing agents.",
        ],
        tags: ["JavaScript", "Vue.js 3", "Pinia", "Vite", "Sass", "Azure"],
      },
    ],
  },
];

export const testimonials = [
  {
    id: "1",
    name: "Ahmed",
    company: "DXC",
    imageUrl: images.test,
    feedback: "Great job, would recommend!",
  },
  {
    id: "2",
    name: "Mohamed",
    company: "Amazon",
    imageUrl: images.test,
    feedback: "Bahaa is a good developer!",
  },
  {
    id: "3",
    name: "Ebram",
    company: "Damen E-payment",
    imageUrl: images.test,
    feedback:
      "Your attention to detail and commitment to creating intuitive, seamless interfaces is evident in the quality of your work. You tackle challenges head-on and always find efficient solutions, making a significant impact on our team’s success.",
  },
  {
    id: "4",
    name: "Saeed",
    company: "Damen E-payment",
    imageUrl: images.test,
    feedback:
      " I just wanted to thank you for the incredible work you’ve done with our team. Your contributions have been invaluable, and your frontend expertise really elevated the project. Your attention to detail and creativity have made a significant difference, and I’m genuinely grateful for your hard work and dedication. Thanks again for being such a great collaborator!",
  },
];

export const brands = [
  { id: "1", name: "Smart Cards", imageUrl: images.smart },
  { id: "2", name: "Damen E-Payments", imageUrl: images.damen },
  { id: "3", name: "Algoriza", imageUrl: images.algoriza },
  { id: "3", name: "Sumerge", imageUrl: images.sumerge },
  { id: "3", name: "Alinma", imageUrl: images.alinma },
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
    id: "2",
    title: "ConFusion",
    description: "A reservation web portal",
    projectLink: "",
    codeLink: "https://github.com/bahaayoussof/conFusion",
    imageUrl: images.confusion,
    tags: ["Bootstrap", "All"],
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
