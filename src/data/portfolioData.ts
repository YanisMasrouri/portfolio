import type {
  LocalizedText,
  PortfolioData,
  ProjectCategory,
} from "../types/portfolioTypes";
const baseUrl = import.meta.env.BASE_URL;

export const portfolioData: PortfolioData = {
  identity: {
    name: "Yanis Masrouri",
    title: {
      fr: "Ingénieur logiciel & créatif numérique",
      en: "Software Engineer & Creative Technologist",
    },
    tagline: {
      fr: "Entre architecture logicielle et création visuelle, je conçois des expériences claires, robustes et mémorables.",
      en: "Between software architecture and visual creation, I design clear, robust and memorable experiences.",
    },
    location: "France",
  },

  navigation: {
    engineering: {
      fr: "Ingénierie",
      en: "Engineering",
    },
    creative: {
      fr: "Créatif",
      en: "Creative",
    },
    projects: {
      fr: "Projets",
      en: "Projects",
    },
    contact: {
      fr: "Contact",
      en: "Contact",
    },
  },

  actions: {
    exploreEngineering: {
      fr: "Explorer l’ingénierie",
      en: "Explore engineering",
    },
    exploreCreative: {
      fr: "Explorer le créatif",
      en: "Explore creative work",
    },
    viewProjects: {
      fr: "Voir les projets",
      en: "View projects",
    },
    downloadCv: {
      fr: "Télécharger le CV",
      en: "Download resume",
    },
    contactMe: {
      fr: "Me contacter",
      en: "Contact me",
    },
  },

  personas: [
    {
      id: "engineer",
      label: {
        fr: "Ingénieur",
        en: "Engineer",
      },
      eyebrow: {
        fr: "Systèmes · Architecture · Interfaces",
        en: "Systems · Architecture · Interfaces",
      },
      headline: {
        fr: "Je conçois des systèmes fiables.",
        en: "I build reliable systems.",
      },
      description: {
        fr: "Architecture logicielle, interfaces industrielles, supervision, outils internes et développement applicatif.",
        en: "Software architecture, industrial interfaces, supervision, internal tools and application development.",
      },
      skills: [
        "C#",
        "WPF",
        "XAML",
        "MVVM",
        "OPC UA",
        "React",
        "TypeScript",
      ],
    },
    {
      id: "creative",
      label: {
        fr: "Créatif",
        en: "Creative",
      },
      eyebrow: {
        fr: "Image · Narration · Identité",
        en: "Image · Storytelling · Identity",
      },
      headline: {
        fr: "Je donne forme aux idées.",
        en: "I shape ideas into experiences.",
      },
      description: {
        fr: "Montage vidéo, narration, direction visuelle, univers fictionnels, identité graphique et expériences visuelles.",
        en: "Video editing, storytelling, visual direction, fictional worlds, graphic identity and visual experiences.",
      },
      skills: [
        "Video Editing",
        "Storytelling",
        "Motion",
        "Design",
        "Narration",
        "Worldbuilding",
      ],
    },
  ],

  projects: [
    {
      id: "opcua-server-client",
      title: "OPC UA Server / Client",
      category: "engineering",
      description: {
        fr: "Développement d’une architecture OPC UA modulaire composée d’une DLL serveur, d’une DLL client et d’interfaces de supervision.",
        en: "Development of a modular OPC UA architecture with a server DLL, a client DLL and supervision interfaces.",
      },
      technologies: ["C#", ".NET Framework", "OPC UA", "WPF", "MVVM"],
      featured: true,
    },
    {
      id: "test-bench-supervision",
      title: "Test Bench 4.0 Supervision",
      category: "engineering",
      description: {
        fr: "Interface de supervision orientée bancs de test, avec affichage structuré des tags, logs et données temps réel.",
        en: "Test bench oriented supervision interface with structured tag display, logs and near real-time data.",
      },
      technologies: ["WPF", "XAML", "Telerik", "MVVM", "OPC UA"],
      featured: true,
    },
    {
      id: "decklord",
      title: "Decklord",
      category: "hybrid",
      description: {
        fr: "Outil de deckbuilding, simulation et analyse de parties, pensé comme une plateforme d’optimisation de decks.",
        en: "Deckbuilding, match simulation and analysis tool designed as a deck optimization platform.",
      },
      technologies: ["Godot", "Game Design", "UI", "Data", "Systems"],
      featured: true,
    },
    {
      id: "portfolio-react",
      title: "Portfolio React",
      category: "hybrid",
      description: {
        fr: "Portfolio responsive bilingue construit autour d’une double identité : ingénierie logicielle et création visuelle.",
        en: "Responsive bilingual portfolio built around a dual identity: software engineering and visual creation.",
      },
      technologies: ["React", "TypeScript", "Tailwind", "Motion"],
      featured: false,
    },
    {
      id: "video-editing",
      title: "Video Editing Projects",
      category: "creative",
      description: {
        fr: "Projets de montage vidéo centrés sur le rythme, la narration, l’impact visuel et la construction d’une ambiance.",
        en: "Video editing projects focused on rhythm, storytelling, visual impact and atmosphere building.",
      },
      technologies: ["Editing", "Storytelling", "Visual Direction"],
      featured: false,
    },
  ],

  contact: {
    email: "yanismasrouri7@gmail.com",
    phone: "+33 6 45 59 45 67",
    github: "https://github.com/yanismasrouri",
    linkedin: "https://www.linkedin.com/in/yanis-masrouri-783679251/",
  },

  cv: {
    fr: `${baseUrl}cv/CV_Yanis_Masrouri_FR.pdf`,
    en: `${baseUrl}cv/CV_Yanis_Masrouri_EN.pdf`,
  },
};

export const categoryLabels: Record<ProjectCategory, LocalizedText> = {
  engineering: {
    fr: "Ingénierie",
    en: "Engineering",
  },
  creative: {
    fr: "Créatif",
    en: "Creative",
  },
  hybrid: {
    fr: "Hybride",
    en: "Hybrid",
  },
};
