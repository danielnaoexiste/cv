import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA_EN = {
  name: "Daniel Gazzaneo Denardo",
  initials: "Dan",
  location: "Bragança Paulista, São Paulo, Brazil",
  locationLink: "https://www.google.com/maps/place/Bragança Paulista",
  avatarUrl: "/me.jpg",
  titles: {
    about: "About",
    work: "Work Experience",
    education: "Education",
    skills: "Skills",
    languages: "Languages",
    projects: "Projects",
  },
  about:
    "Front-end specialist passionate about creating beautiful user experiences.",
  summary:
    "Senior Front-end Developer / Software Architect with extensive experience delivering international projects, specialized in React/Next. Experienced in version control systems, design systems development, micro-frontend architecture, automated tests, object-oriented programming and agile methodologies.",
  personalWebsiteUrl: "https://dangazzaneo.dev",
  contact: {
    email: "danieldenardo1@gmail.com",
    tel: "+55 11 99577-9119",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/danielnaoexiste",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/dangazzaneo/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Federal University of Itajubá (UNIFEI)",
      degree: "Bachelor's Degree in Information Systems",
      start: "2018",
      end: "2022 (incomplete)",
    },
  ],
  work: [
    {
      company: "CI&T",
      link: "https://ciandt.com",
      badges: ["Remote"],
      title:
        "Front-end Developer → Senior Front-end Developer → Software Architect",

      start: "2022",
      end: "Present",
      description:
        "Worked on multiple international projects, focused on the stabilization, migration, and modernization of legacy projects. Currently working as Technical Leadership for a web-core squad, managing the team, defining and defending solutions that may impact other teams, working on technical refinements and KTs/Dojos to share knowledge across multiple squads.",
    },
    {
      company: "Aiqfome",
      link: "https://aiqfome.com",
      badges: ["Remote"],
      title: "Front-end Developer",

      start: "2021",
      end: "2022",
      description:
        "Development of front-end applications in React. Development of internal applications for dashboards, payments, coupon management, marketing campaigns, city management, user reviews, order and delivery details.",
    },
    {
      company: "Hivelabs",
      link: "https://hivelabs.com.br/",
      badges: [],
      title: "Intern: Web Developer → Junior Front-end Developer",
      start: "2020",
      end: "2021",
      description:
        "Development of front-end applications in Vue JS and React and back-end systems with Node.JS / Express. Responsible for the implementation of digital marketing systems and web-app development in partnership with Locaweb All iN. Worked on the E-Training platform and other projects related to e-commerce and digital marketing.",
    },
    {
      company: "Dev-U",
      link: "https://dev-unifei.github.io/",
      badges: ["Volunteer", "University Extension Project"],
      title: "Programmer → Director of Programming",

      start: "2019",
      end: "2020",
      description:
        "Volunteer work on a University Extension Project.  Game development with Godot and Unity (C#). Management and training of the programming sector. Conducting lectures and workshops on game development.",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "React Native/Expo",
    "VueJS",
    "Node.js",
    "Nest.js",
    "GraphQL",
    "CI/CD",
  ],
  languages: ["Portuguese (Native)", "English (C2 Proficient)"],
  projects: [
    {
      title: "Froggy",
      techStack: [
        "Side Project",
        "TypeScript",
        "discord.js",
        "React",
        "Nest.js",
      ],
      description:
        "A customizable general purpose Discord bot for moderators and anime fans.",

      link: {
        label: "Froggy",
        href: "https://github.com/danielnaoexiste/froggy-bot",
      },
    },
    {
      title: "Surigu UI",
      techStack: ["Side Project", "React", "TypeScript"],
      description: "React component library built with styled-system.",

      link: {
        label: "Surigu UI",
        href: "https://github.com/danielnaoexiste/surigu-ui",
      },
    },
    {
      title: "Beeper",
      techStack: ["Side Project", "React Native", "NodeJS"],
      description: "React native cloud note-taking app.",

      link: {
        label: "Beeper",
        href: "https://github.com/danielnaoexiste/beeper-client",
      },
    },
    {
      title: "Portfolio95",
      techStack: ["Side Project", "React", "Typescript"],
      description:
        "Old Windows 95 themed portfolio. See my projects and games, resume and information about my career. Built with React95.",

      link: {
        label: "Portfolio95",
        href: "https://portfolio95.dangazzaneo.dev",
      },
    },
    {
      title: "Yeop Engine",
      techStack: ["Side Project", "Python", "Lua", "C++", "SDL2", "Dear ImGui"],
      description:
        "2D game engine and editor written in C++/SDL2, featuring a CLI built with Python.",

      link: {
        label: "Yeop Engine",
        href: "https://github.com/danielnaoexiste/yeop-engine",
      },
    },
    {
      title: "Raimundo",
      techStack: ["Professional Project", "React", "Module Federation"],
      description:
        "Internal dashboard and action manager for franchisees and employees. Design-system development.",

      link: {
        label: "Raimundo",
        href: "https://raimundo.aiqfome.com",
      },
    },
    {
      title: "All iN Training",
      techStack: ["Professional Project", "VueJS", "Vuetify"],
      description: "E-Training Platform built with Vue for All iN.",

      link: {
        label: "Training",
        href: "https://treinamento.allin.com.br",
      },
    },
    {
      title: "ACIEI Portal",
      techStack: ["Professional Project", "jQuery"],
      description: "Internal Dashboard for ACIEI, built with jQuery.",

      link: {
        label: "Aciei",
        href: "https://portal.aciei.com.br/",
      },
    },
    {
      title: "Awaken the Dev-U",
      techStack: ["Volunteer Project", "Unity"],
      description:
        'Mobile choose-your-adventure game made for "Integra Unifei 2020"',

      link: {
        label: "Awaken",
        href: "https://github.com/danielnaoexiste/Awaken-the-Dev-U",
      },
    },
    {
      title: "Cavescape",
      techStack: ["Volunteer Project", "Godot"],
      description:
        '2-bit platformer metroidvania made for the Community Game Jam 2019, with the theme "The game is a liar".',

      link: {
        label: "Cavescape",
        href: "https://bitsdev.itch.io/cavescape",
      },
    },
    {
      title: "Spacial Dog",
      techStack: ["Volunteer Project", "Unity"],
      description:
        'Prototype made in 72 hours for Ludum Dare 42, with the theme "Running out of Space".',

      link: {
        label: "Spacial",
        href: "https://bitsdev.itch.io/spacial-dog",
      },
    },
    {
      title: "Torrato",
      techStack: ["Volunteer Project", "Godot"],
      description:
        "The mouse got stuck inside an oven and it's unbearably hot! Made in 24 hours for Dev-U Jam!",

      link: {
        label: "Torrato",
        href: "https://bitsdev.itch.io/torrato",
      },
    },
  ],
} as const;
