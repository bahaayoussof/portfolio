import { images } from "../constants";
import type { FlagshipProject, StudioProject } from "../types/work";

export const flagshipProject: FlagshipProject = {
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

export const studioProjects: StudioProject[] = [
  {
    id: "live-docs",
    title: "Live-Docs",
    category: "Real-Time Collaboration Platform",
    description:
      "Google Docs clone with real-time multi-user document editing, live cursor tracking, dynamic nested comments, and active presence indicators.",
    projectLink: "https://live-docs-by.vercel.app",
    codeLink: "https://github.com/bahaayoussof/live-doc",
    imageUrl: images.liveDocs,
    imageWidth: 2304,
    imageHeight: 1838,
    tags: ["Next JS", "Tailwind", "Liveblocks", "TypeScript"],
    highlight: "Real-time sync engine with WebSocket fallback and presence tracking.",
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
    imageWidth: 3737,
    imageHeight: 1853,
    tags: ["React JS", "Tailwind", "Appwrite", "React Query"],
    highlight: "Optimistic updates & infinite scrolling with TanStack Query.",
  },
];
