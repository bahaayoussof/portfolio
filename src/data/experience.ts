import type { CompanyExperience } from "../types/experience";

const rawCompanyExperiences: CompanyExperience[] = [
  {
    id: "company-azm",
    company: "AZM Squad",
    role: "Frontend Engineer",
    overallPeriod: "Oct 2024 – Present",
    location: "Remote",
    isCurrent: true,
    featuredProject: {
      id: "proj-component-doc",
      projectName: "Momah Component Documentation",
      badge: "FEATURED SYSTEM SHOWCASE",
      statusBadge: "Production / Internal Tool",
      tagline: "Enterprise ASP.NET MVC UI Components Library",
      description:
        "Clean, fast, and accessible ASP.NET MVC Razor components. Engineered with native Razor helpers, zero-friction ViewModel bindings, and seamless Bootstrap 5 integration across enterprise applications.",
      techStack: [
        "ASP.NET Core MVC",
        "JavaScript",
        "CSS",
        "Bootstrap 5",
        "Razor Partial Views",
      ],
      liveLink: "https://momah-doc.bahaa.qzz.io",
      metrics: [
        "19+ UI Components",
        "4 Categories",
        "100% Razor Native",
        "Code Examples",
        "ViewModel Guidelines",
      ],
    },
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
        techStack: ["React", "JavaScript", "Redux Toolkit", "Material UI", "REST APIs"],
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

// Pre-reversed once at module load — newest project first — so components
// don't re-reverse on every render.
export const companyExperiences: CompanyExperience[] = rawCompanyExperiences.map(
  (company) => ({ ...company, projects: [...company.projects].reverse() }),
);
