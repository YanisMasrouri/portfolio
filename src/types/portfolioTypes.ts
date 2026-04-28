export type Language = "fr" | "en";

export type LocalizedText = {
  fr: string;
  en: string;
};

export type PersonaId = "engineer" | "creative";

export type ProjectCategory = "engineering" | "creative" | "hybrid";

export type Persona = {
  id: PersonaId;
  label: LocalizedText;
  eyebrow: LocalizedText;
  headline: LocalizedText;
  description: LocalizedText;
  skills: string[];
};

export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  description: LocalizedText;
  technologies: string[];
  featured: boolean;
};

export type PortfolioData = {
  identity: {
    name: string;
    title: LocalizedText;
    tagline: LocalizedText;
    location: string;
  };

  navigation: {
    engineering: LocalizedText;
    creative: LocalizedText;
    projects: LocalizedText;
    contact: LocalizedText;
  };

  actions: {
    exploreEngineering: LocalizedText;
    exploreCreative: LocalizedText;
    viewProjects: LocalizedText;
    downloadCv: LocalizedText;
    contactMe: LocalizedText;
  };

  personas: Persona[];

  projects: Project[];

  contact: {
    email: string;
    phone: string;
    github: string;
    linkedin: string;
  };

  cv: {
    fr: string;
    en: string;
  };
};