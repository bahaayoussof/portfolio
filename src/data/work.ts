import { images } from "../constants";
import type { FlagshipProject, StudioProject } from "../types/work";

export const flagshipProject: FlagshipProject = {
  id: "customer-support-crm",
  title: "Customer Support CRM",
  subtitle: "Omnichannel Customer Support & AI Operations Platform",
  category: "Full-Stack Customer Support Platform",
  description:
    "A multilingual full-stack customer support platform that unifies ticket management, customer operations, team workflows, SLA tracking, realtime messaging, reporting, and communication across Web, Email, SMS, WhatsApp, Live Chat, and AI-powered support.",
  architecture:
    "React 19 and TypeScript frontend with TanStack Query, Node.js and Express APIs, Prisma ORM, PostgreSQL, JWT authentication, RBAC and team-scoped authorization, realtime SSE events, secure webhooks, and adapter-based integrations for Email, WhatsApp, SMS, AI, and storage providers.",
  impact:
    "Built a role-aware support system with AI-generated ticket summaries, suggested replies, knowledge-base-grounded assistance, team routing, SLA automation, realtime updates, and unified omnichannel ticket workflows.",
  projectLink: "https://crm-bahaa.vercel.app/",
  codeLink: "https://github.com/bahaayoussof/crm",
  imageUrl: images.crm,
  imageWidth: 1672,
  imageHeight: 941,
  techStack: [
    "React 19",
    "TypeScript",
    "Node.js",
    "Express",
    "PostgreSQL",
    "Prisma",
    "TanStack Query",
  ],
  metrics: [
    { label: "User Roles", value: "4 Roles" },
    { label: "Support Channels", value: "6 Channels" },
    { label: "Architecture", value: "Full Stack" },
  ],
};

export const studioProjects: StudioProject[] = [
  {
    id: "resumind",
    title: "Resumind — AI Resume Analyzer",
    category: "Full-Stack SaaS / AI",
    description:
      "An AI-powered resume analysis platform that evaluates resume structure, matches skills and keywords against job descriptions, and provides actionable optimization feedback.",
    projectLink: "https://resumind-by.vercel.app/auth?next=/",
    codeLink: "https://github.com/bahaayoussof/resumind",
    imageUrl: images.resumind,
    imageWidth: 1225,
    imageHeight: 1268,
    tags: ["Next JS", "React JS", "Tailwind CSS", "AI Engine", "TypeScript"],
    highlight:
      "AI-assisted resume scoring, keyword analysis, skill density visualization, and actionable optimization feedback.",
  },
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
