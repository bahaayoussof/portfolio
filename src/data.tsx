import { images } from "./constants";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconBrandLeetcode,
} from "@tabler/icons-react";
import type { CompanyExperience } from "./types/experience";

export const socialLinks = [
  {
    id: 1,
    name: "Github",
    icon: <IconBrandGithub size={20} />,
    link: "https://github.com/bahaayoussof",
  },
  {
    id: 2,
    name: "Linkedin",
    icon: <IconBrandLinkedin size={20} />,
    link: "https://www.linkedin.com/in/bahaayoussof/",
  },
  {
    id: 3,
    name: "Email",
    icon: <IconMail size={20} />,
    link: "mailto:bahaayoussof@gmail.com",
  },
  {
    id: 4,
    name: "Leetcode",
    icon: <IconBrandLeetcode size={20} />,
    link: "https://leetcode.com/bahaayoussof/",
  },
];

export const heroMetrics = [
  {
    value: "300K+",
    label: "Daily Transactions Handled",
    description: "High-scale Petrotrade POS & payment engine",
  },
  {
    value: "4+",
    label: "Years Professional Experience",
    description: "Building production Web, Mobile & SaaS applications",
  },
  {
    value: "1,500+",
    label: "POS Services & Menus Managed",
    description: "Dynamic menu, receipt & commission calculation engine",
  },
  {
    value: "7+",
    label: "Production Enterprise Systems",
    description: "CIB Banking, Legal Platform, Damen Portal, Petrotrade & Tassel",
  },
];

export const featuredTechnologies = [
  {
    name: "React & Next.js",
    badge: "Core",
    description: "SSR, App Router & Component Architecture",
  },
  {
    name: "React Native",
    badge: "Mobile",
    description: "Cross-platform Corporate Banking & Android POS apps",
  },
  {
    name: "TypeScript & JS",
    badge: "Type Safety",
    description: "Strict typing & dynamic DOM client features",
  },
  {
    name: "Vue.js 3 & Pinia",
    badge: "Reactive",
    description: "Composition API & reactive state management",
  },
  {
    name: "Redux & TanStack",
    badge: "State",
    description: "Redux Toolkit, TanStack Query & data caching",
  },
  {
    name: "UI Systems",
    badge: "Styling",
    description: "Tailwind CSS, Material UI, SCSS & Bootstrap",
  },
];

export const companyExperiences: CompanyExperience[] = [
  {
    id: "company-azm",
    company: "AZM Squad",
    role: "Software Developer",
    overallPeriod: "Oct 2024 – Present",
    location: "Remote",
    isCurrent: true,
    projects: [
      {
        id: "proj-cib",
        projectName: "Corporate Internet Banking",
        tagline:
          "A cross-platform app designed to help corporates manage their finances.",
        whatWasBuilt:
          "Developed key features in the Corporate Credit Card module, enabling companies to issue and manage credit cards as employee benefits.",
        engineeringChallenges:
          "Implemented features including card settlement, limit management, and statement generation.",
        impact:
          "Improved corporate financial operations by enhancing user experience and system efficiency for credit card processing.",
        techStack: [
          "React Native",
          "TypeScript",
          "Redux Toolkit",
          "Azure",
          "FinTech Security",
        ],
      },
      {
        id: "proj-tassel",
        projectName: "Tassel",
        tagline:
          "A real estate platform, designed to streamline property listings and managment for market users.",
        whatWasBuilt:
          "Improved the codebase by adding feature updates, making it more responsive, and refining user interface elements to make the platform easier to use.",
        engineeringChallenges:
          "Resolved site-wide bugs, resulting in enhanced performance and a more stable user experience.",
        impact:
          "Introduced new features that enhanced client usability and navigation while streamlining workflows for real estate listing agents.",
        techStack: ["Vue 3", "Pinia", "Vite", "JavaScript", "Sass", "Azure"],
      },
      {
        id: "proj-legal-platform",
        projectName: "The Unified Legal Platform",
        isCurrent: true,
        tagline:
          "Digitizes legal admin, streamlines committee requests, and manages legal forms.",
        whatWasBuilt:
          "Refactored frontend codebases into modular ASP.NET Core Partial Views, streamlining the development of complex UI components like file uploaders and dynamic forms.",
        engineeringChallenges:
          "Engineered dynamic client-side features using JavaScript and jQuery, including drag-and-drop validation and interactive table management, to ensure robust data integrity and a seamless user experience.",
        impact:
          "Ensured robust data integrity, streamlined committee decision requests, and eliminated manual paper submission delays.",
        techStack: [
          "JavaScript",
          "ASP.NET Core",
          "Partial Views",
          "Sass",
          "Bootstrap",
          "jQuery",
        ],
      },
    ],
  },
  {
    id: "company-damen",
    company: "Damen E-Payment",
    role: "Software Developer",
    overallPeriod: "May 2022 – Oct 2024",
    location: "Cairo, Egypt",
    projects: [
      {
        id: "proj-damen-portal",
        projectName: "Damen Portal",
        tagline:
          "A business-to-business transaction monitoring solution that improves transparency and reduces audit time.",
        whatWasBuilt:
          "Developed advanced transaction management and user management modules to enhance platform functionality.",
        engineeringChallenges:
          "Designing streamlined administrative workflows and real-time transaction monitoring interfaces.",
        impact:
          "Improved user satisfaction by 15% and reduced administrative overhead by 10% through optimized workflows and interfaces.",
        techStack: ["React", "JavaScript", "Redux", "Material UI", "SCSS"],
      },
      {
        id: "proj-oms",
        projectName: "Operating Management System",
        tagline:
          "A management platform for aggregators and merchants, serving operations and financial teams.",
        whatWasBuilt:
          "Introduced multi-account functionality and self-charging features, saving 15 hours weekly and increasing merchant transaction availability by 100%.",
        engineeringChallenges:
          "Fixed key issues in the Aggregator module, reducing error rates by 3% and increasing transaction speed.",
        impact:
          "Improved operational efficiency by 7% through enhanced merchant charging, withdrawal, and settlement processes.",
        techStack: [
          "React",
          "JavaScript",
          "Redux Toolkit",
          "Material UI",
          "REST APIs",
        ],
      },
      {
        id: "proj-service-editor",
        projectName: "Service Editor",
        tagline:
          "A platform designed to create pos menu, receipt templates, and financial calculations.",
        whatWasBuilt:
          "Built dynamic menu and receipt modules to manage 1500+ services more efficiently.",
        engineeringChallenges:
          "Enhanced service charge and commission calculation logic to improve accuracy, flexibility, and scalability across complex scenarios.",
        impact:
          "Developed a history feature to save menu configurations and templates for repeated use.",
        techStack: ["React", "JavaScript", "Redux", "Material UI", "SCSS"],
      },
      {
        id: "proj-petrotrade",
        projectName: "Petro Trade",
        tagline:
          "An Android application for Petrotrade to streamline the process of collecting residential gas bills.",
        whatWasBuilt:
          "Redesigned system architecture for a specialized POS app, improving scalability, maintainability, and readability.",
        engineeringChallenges:
          "Enhanced app to handle 300k daily transactions, reducing processing time by 10% and increasing system reliability.",
        impact:
          "Reduced error rates by 5%, boosted team productivity by 10%, and optimized fetch request speed by 5%.",
        techStack: [
          "React Native",
          "Android",
          "JavaScript",
          "Redux Toolkit",
          "Payment APIs",
        ],
      },
    ],
  },
];

export const flagshipProject = {
  id: "resumind",
  title: "Resumind — AI Resume Analyzer",
  subtitle: "Enterprise AI-Powered Resume Scoring & Optimization Platform",
  category: "Full-Stack SaaS / AI",
  description:
    "An intelligent application that analyzes resume structure, matches keywords against target job descriptions, and provides actionable feedback using modern AI models.",
  architecture:
    "Next.js App Router, Tailwind CSS, Supabase Auth & Database, OpenAI API Integration, Framer Motion.",
  impact:
    "Instant resume analysis under 2 seconds with key skill density visualization and automated bullet point recommendations.",
  projectLink: "https://resumind-by.vercel.app/auth?next=/",
  codeLink: "https://github.com/bahaayoussof/resumind",
  imageUrl: images.resumind,
  techStack: ["Next JS", "React JS", "Tailwind CSS", "AI Engine", "TypeScript"],
  metrics: [
    { label: "Scoring Speed", value: "< 2s" },
    { label: "Analysis Accuracy", value: "94%" },
    { label: "Tech Stack", value: "Next.js + AI" },
  ],
};

export const studioProjects = [
  {
    id: "live-docs",
    title: "Live-Docs",
    category: "Real-Time Collaboration Platform",
    description:
      "Google Docs clone with real-time multi-user document editing, live cursor tracking, dynamic nested comments, and active presence indicators.",
    projectLink: "https://live-docs-by.vercel.app",
    codeLink: "https://github.com/bahaayoussof/live-doc",
    imageUrl: images.liveDocs,
    tags: ["Next JS", "Tailwind", "Liveblocks", "TypeScript"],
    highlight:
      "Real-time sync engine with WebSocket fallback and presence tracking.",
  },
  {
    id: "snapgram",
    title: "Snapgram",
    category: "Social Media Platform",
    description:
      "A modern social sharing web app featuring infinite feed scrolling, instant image uploads, post bookmarking, and interactive social feeds.",
    projectLink: "https://snapgram-by.vercel.app/",
    codeLink: "https://github.com/bahaayoussof/snapgram",
    imageUrl: images.snapgram,
    tags: ["React JS", "Tailwind", "Appwrite", "React Query"],
    highlight: "Optimistic updates & infinite scrolling with TanStack Query.",
  },
];
