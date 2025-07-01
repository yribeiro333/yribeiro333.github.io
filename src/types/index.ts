export interface Language {
  code: 'en' | 'pt';
  name: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  githubUrl?: string;
  liveUrl?: string;
  technologies: string[];
}

export interface Skill {
  name: string;
  icon: string;
}

export interface Content {
  nav: {
    about: string;
    projects: string;
    skills: string;
    contact: string;
  };
  hero: {
    greeting: string;
    name: string;
    title: string;
    subtitle: string;
    cta: string;
  };
  projects: {
    title: string;
    items: Project[];
  };
  skills: {
    title: string;
    subtitle: string;
  };
  about: {
    title: string;
    description: string[];
  };
}