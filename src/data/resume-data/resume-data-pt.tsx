import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA_PT = {
  name: "Dan Gazzaneo",
  initials: "DG",
  location: "Bragança Paulista, São Paulo, Brasil",
  locationLink: "https://www.google.com/maps/place/Bragança Paulista",
  summary:
    "Desenvolvedor Front-end Sênior com mais de 4 anos de experiência, especializado em React e Vue. Experiência em sistemas de controle de versão, desenvolvimento de design systems, arquitetura de micro-frontends, testes automatizados, programação orientada a objetos e metodologias ágeis.",
  about:
    "Especialista em Front-end apaixonado por criar experiências de usuário incríveis.",
  avatarUrl: "https://avatars.githubusercontent.com/u/40382473?v=4",
  personalWebsiteUrl: "https://dangazzaneo.dev",
  contact: {
    email: "danieldenardo1@gmail.com",
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
      school: "Universidade Federal de Itajubá (UNIFEI)",
      degree: "Bacharelado em Sistemas de Informação",
      start: "2018",
      end: "2022 (incompleto)",
    },
  ],
  work: [
    {
      company: "CI&T",
      link: "https://ciandt.com",
      badges: ["Remoto"],
      title:
        "Desenvolvedor Front-end → Desenvolvedor Front-end SR → Arquiteto de Software",

      start: "2022",
      end: "Atualmente",
      description:
        "Trabalhei em múltiplos projetos internacionais, com foco na estabilização, migração e modernização de projetos legados. Atualmente atuando como Liderança Técnica de uma squad web-core, gerenciando a equipe, definindo e defendendo soluções que possam impactar outras equipes, trabalhando em refinamentos técnicos e KTs/Dojos para compartilhar conhecimento entre múltiplas squads.",
    },
    {
      company: "Aiqfome",
      link: "https://aiqfome.com",
      badges: ["Remoto"],
      title: "Desenvolvedor Front-end",

      start: "2021",
      end: "2022",
      description:
        "Desenvolvimento de aplicações front-end em React. Desenvolvimento de aplicações internas para dashboards, pagamentos, gestão de cupons, campanhas de marketing, gestão de cidades, avaliações de usuários, detalhes de pedidos e entregas.",
    },
    {
      company: "Hivelabs",
      link: "https://hivelabs.com.br/",
      badges: [],
      title: "Estágio: Web Developer → Desenvolvedor Front-end JR",
      start: "2020",
      end: "2021",
      description:
        "Desenvolvimento de aplicações front-end em Vue JS e React e sistemas back-end com Node.JS/Express. Responsável pela implementação de sistemas de marketing digital e desenvolvimento de web-apps em parceria com a Locaweb All iN. Trabalhei na plataforma E-Training e outros projetos relacionados ao e-commerce e marketing digital.",
    },
    {
      company: "Dev-U",
      link: "https://dev-unifei.github.io/",
      badges: ["Voluntário", "Projeto de Extensão Universitário"],
      title: "Programador → Diretor de Programação",

      start: "2019",
      end: "2020",
      description:
        "Trabalho voluntário em projeto de extensão universitário. Desenvolvimento de jogos com Godot e Unity (C#). Gestão e treinamento do setor de programação. Realização de palestras e workshops sobre desenvolvimento de jogos.",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "React Native",
    "VueJS",
    "Node.js",
    "Nest.js",
    "GraphQL",
  ],
  languages: ["Portuguese (Nativo)", "English (C2 Proficiente)"],
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
        "Bot de Discord customizável de uso geral para mods e fans de anime.",

      link: {
        label: "Froggy",
        href: "https://github.com/danielnaoexiste/froggy-bot",
      },
    },
    {
      title: "Surigu UI",
      techStack: ["Side Project", "React", "TypeScript"],
      description: "Biblioteca de componentes React feita com styled-system.",

      link: {
        label: "Surigu UI",
        href: "https://github.com/danielnaoexiste/surigu-ui",
      },
    },
    {
      title: "Beeper",
      techStack: ["Side Project", "React Native", "NodeJS"],
      description: "Aplicativo React Native de anotações em nuvem.",

      link: {
        label: "Beeper",
        href: "https://github.com/danielnaoexiste/beeper-client",
      },
    },
    {
      title: "Portfolio95",
      techStack: ["Side Project", "React", "Typescript"],
      description:
        "Portfolio antigo feito baseado no Windows 95. Veja meus projetos e jogos, curriculo e informações sobre minha carreira.",

      link: {
        label: "Portfolio95",
        href: "https://portfolio95.dangazzaneo.dev",
      },
    },
    {
      title: "Yeop Engine",
      techStack: ["Side Project", "Python", "Lua", "C++", "SDL2", "Dear ImGui"],
      description:
        "Engine de desenvolvimento e editor de jogos 2D feito em C++/SDL2, com uma CLI feita em Python.",

      link: {
        label: "Yeop Engine",
        href: "https://github.com/danielnaoexiste/yeop-engine",
      },
    },
    {
      title: "Raimundo",
      techStack: ["Professional Project", "React", "Module Federation"],
      description:
        "Dashboard e gerenciador de ações interno para franqueados e empregados. Desenvolvimento de design-system.",
      link: {
        label: "Raimundo",
        href: "https://raimundo.aiqfome.com",
      },
    },
    {
      title: "Treinamento All iN",
      techStack: ["Professional Project", "VueJS", "Vuetify"],
      description:
        "Plataforma de Treinamento virtual feita em Vue para All iN.",

      link: {
        label: "Training",
        href: "https://treinamento.allin.com.br",
      },
    },
    {
      title: "Portal ACIEI",
      techStack: ["Professional Project", "jQuery"],
      description: "Dashboard interno da ACIEI, feito com jQuery.",

      link: {
        label: "Aciei",
        href: "https://portal.aciei.com.br/",
      },
    },
    {
      title: "Awaken the Dev-U",
      techStack: ["Volunteer Project", "Unity"],
      description:
        'Jogo choose-your-adventure mobile feito para "Integra Unifei 2020".',

      link: {
        label: "Awaken",
        href: "https://github.com/danielnaoexiste/Awaken-the-Dev-U",
      },
    },
    {
      title: "Cavescape",
      techStack: ["Volunteer Project", "Godot"],
      description:
        'Jogo de plataforma metroidvania 2-bit feito para a Community Game Jam 2019, com o tema "O jogo mente".',

      link: {
        label: "Cavescape",
        href: "https://bitsdev.itch.io/cavescape",
      },
    },
    {
      title: "Spacial Dog",
      techStack: ["Volunteer Project", "Unity"],
      description:
        'Protótipo feito em 72 horas para a Ludum Dare 42, com o tema "Running out of Space".',

      link: {
        label: "Spacial",
        href: "https://bitsdev.itch.io/spacial-dog",
      },
    },
    {
      title: "Torrato",
      techStack: ["Volunteer Project", "Godot"],
      description:
        "O mouse ficou preso dentro do forno e está muito quente! Feito em 24 horas para Dev-U Jam!",

      link: {
        label: "Torrato",
        href: "https://bitsdev.itch.io/torrato",
      },
    },
  ],
} as const;
