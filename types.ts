
export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  stats?: {
    label: string;
    value: string;
    subtext?: string;
  }[];
  description: string[];
  skills: string[];
}

export interface VolunteeringItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  author: string;
  role: string;
  company: string;
  quote: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isThinking?: boolean;
  feedback?: 'up' | 'down';
}

export interface NavItem {
  label: string;
  id: string; // Changed from href to id for smooth scrolling handler
}

export interface BookItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  link: string;
  isNew?: boolean;
}

export type ComplexityLevel = 'Low' | 'Medium' | 'High';

export interface PortfolioItem {
  id: string;
  type: 'app' | 'prompt' | 'case-study';
  title: string;
  industry: string;
  description: string;
  fullDescription: string;
  problem: string;
  solution: string;
  businessValue: string;
  technologies: string[];
  roi: string;
  implementationTime: string;
  imageUrl: string;
  complexity?: ComplexityLevel; // For prompts
  demoUrl?: string;
}