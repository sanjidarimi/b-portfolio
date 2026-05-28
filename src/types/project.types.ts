export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  frontendRepo?: string;
  backendRepo: string;
  liveLink?: string;
  features: string[];
  impactAndVision: string;
}
