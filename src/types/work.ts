export interface FlagshipMetric {
  label: string;
  value: string;
}

export interface FlagshipProject {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  architecture: string;
  impact: string;
  projectLink: string;
  codeLink: string;
  imageUrl: string;
  techStack: string[];
  metrics: FlagshipMetric[];
}

export interface StudioProject {
  id: string;
  title: string;
  category: string;
  description: string;
  projectLink: string;
  codeLink: string;
  imageUrl: string;
  imageWidth: number;
  imageHeight: number;
  tags: string[];
  highlight: string;
}
