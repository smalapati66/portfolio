export interface Bio {
  name: string;
  tagline?: string;
  blurb: string;
  resumeUrl: string;
  email: string;
  linkedinUrl: string;
  githubUrl: string;
}
export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  startDate: string;
  endDate: string;
  bullets: string[];
  tags?: string[];
}
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  contributionLabel?: string;
}
export interface TechStack {
  categories: { label: string; items: string[] }[];
}
