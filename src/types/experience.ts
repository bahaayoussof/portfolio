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
  projects: ClientProject[];
}
