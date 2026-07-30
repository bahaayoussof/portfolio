export interface FeaturedProject {
  id: string;
  projectName: string;
  badge?: string;
  statusBadge: string;
  tagline: string;
  description: string;
  techStack: string[];
  liveLink: string;
  githubLink?: string;
  metrics: string[];
}

export interface ClientProject {
  id: string;
  projectName: string;
  period?: string;
  isCurrent?: boolean;
  tagline: string;
  whatWasBuilt: string;
  engineeringChallenges: string;
  impact: string;
  techStack: string[];
}

export interface CompanyExperience {
  id: string;
  company: string;
  role: string;
  overallPeriod: string;
  location: string;
  isCurrent?: boolean;
  featuredProject?: FeaturedProject;
  projects: ClientProject[];
}
