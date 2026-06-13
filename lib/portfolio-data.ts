export type CaseStudy = {
  code: string;
  context: string;
  detail: string;
  highlights: readonly string[];
  links: readonly {
    href: string;
    label: string;
  }[];
  source: string;
  tech: readonly string[];
  title: string;
};

export type Capability = {
  code: string;
  detail: string;
  evidence: string;
  title: string;
};

export type ExperienceItem = {
  detail: string;
  focus: readonly string[];
  organization: string;
  role: string;
  source: string;
};

export type MediaItem = {
  caption: string;
  context: string;
  embedUrl: string;
  href: string;
  kind: "video";
  role: string;
  title: string;
};

export const profileImage = {
  alt: "Yasir Khalid profile photo",
  src: "https://avatars.githubusercontent.com/u/169406957?v=4",
} as const;

export const heroStats = [
  { label: "public GitHub repos", value: "06" },
  { label: "CV-backed roles", value: "02" },
  { label: "core build tracks", value: "05" },
] as const;

export const caseStudies: readonly CaseStudy[] = [
  {
    code: "OPS",
    context: "Factory operations / Flutter mobile",
    title: "production tracking system",
    detail:
      "A production workflow system for factory operations. The public repository is a frontend showcase, while the CV documents the broader system work across FastAPI, MongoDB, and Flutter.",
    source: "CV + public GitHub showcase",
    highlights: [
      "Worker, supervisor, and admin workflow roles.",
      "Offline-first mobile behavior with local persistence and sync retry handling.",
      "Production tracking, quality control, packaging, and shipment operation modules.",
      "Reporting, Excel integration, Turkish-first localization, and shift-aware behavior.",
    ],
    tech: [
      "Flutter",
      "Dart",
      "Riverpod",
      "Drift / SQLite",
      "Dio",
      "FastAPI",
      "MongoDB",
    ],
    links: [
      {
        href: "https://github.com/yasir-karagul/Production_tracking_system_frontend",
        label: "View showcase",
      },
    ],
  },
  {
    code: "EDU",
    context: "Next.js platform / school operations",
    title: "School management system",
    detail:
      "A role-based web platform for centralizing daily school administration across students, teachers, classes, attendance, grades, and reporting.",
    source: "Public GitHub repository",
    highlights: [
      "Admin, teacher, and student dashboards with separated responsibilities.",
      "Class scheduling, attendance tracking, and grade management workflows.",
      "Prisma-managed PostgreSQL schema with Docker-based local deployment.",
      "Modern App Router, TypeScript, and Tailwind implementation.",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "Docker"],
    links: [
      {
        href: "https://github.com/yasir-karagul/school-management-system",
        label: "View repository",
      },
    ],
  },
  {
    code: "UAV",
    context: "Oktant Team / competition systems",
    title: "UAV software, AI, and tracking systems",
    detail:
      "Software development work for the Oktant Team, focused on UAV project integration, desktop tooling, virtual APIs, tracking behavior, and AI-supported model prediction.",
    source: "CV + hosted project media",
    highlights: [
      "Built PyMAVLink-based libraries for UAV control and virtual environment testing.",
      "Developed kamikaze and tracking functions used in virtual scenarios.",
      "Created Python desktop interfaces and Laravel-based virtual APIs.",
      "Optimized the RE3 tracking algorithm and integrated it with YOLO.",
    ],
    tech: ["Python", "PyMAVLink", "YOLO", "RE3", "Laravel", "AI integration"],
    links: [
      {
        href: "https://youtube.com/watch?v=GRgQbeSX0o4",
        label: "Watch reference",
      },
    ],
  },
  {
    code: "ML",
    context: "Python / analytical prototypes",
    title: "Machine learning and analytical experiments",
    detail:
      "Public Python repositories showing practical experimentation with feature engineering, recommendation scoring, clustering, classification, and model comparison.",
    source: "Public GitHub repositories",
    highlights: [
      "Built an Amazon product recommendation score model with TensorFlow/Keras.",
      "Engineered pricing, discount, popularity, and value-for-money features.",
      "Compared clustering-enhanced malware classification workflows.",
      "Used ROC AUC, F1 score, confusion matrices, PCA, and feature importance analysis.",
    ],
    tech: ["Python", "pandas", "scikit-learn", "TensorFlow", "Keras", "K-Means", "PCA"],
    links: [
      {
        href: "https://github.com/yasir-karagul/roc_sys",
        label: "View roc_sys",
      },
      {
        href: "https://github.com/yasir-karagul/va_mmp",
        label: "View va_mmp",
      },
    ],
  },
] as const;

export const capabilities: readonly Capability[] = [
  {
    code: "MOBILE",
    title: "Offline-first operational apps",
    detail:
      "Flutter systems built for unstable real-world environments, local persistence, role-based UI, and reliable background synchronization.",
    evidence: "production tracking system",
  },
  {
    code: "WEB",
    title: "Admin platforms and product interfaces",
    detail:
      "Next.js and TypeScript interfaces for structured workflows, dashboards, data models, and practical deployment paths.",
    evidence: "School management system and this portfolio",
  },
  {
    code: "AI/UAV",
    title: "AI-assisted UAV integration",
    detail:
      "Python tooling, PyMAVLink work, tracking logic, YOLO integration, and virtual test environments for competition-grade UAV systems.",
    evidence: "Oktant Team work documented in CV",
  },
  {
    code: "GAME",
    title: "UE5.7 real-time systems mindset",
    detail:
      "Game-engine experience applied as a capability focus: responsive interaction, real-time feedback, cinematic timing, and systems thinking.",
    evidence: "Unreal Engine listed in CV skill set",
  },
  {
    code: "DATA",
    title: "Machine learning prototypes",
    detail:
      "Feature engineering, model training, evaluation, visualization, clustering, and practical experimentation in Python.",
    evidence: "roc_sys and va_mmp repositories",
  },
] as const;

export const experience: readonly ExperienceItem[] = [
  {
    role: "Software Developer",
    organization: "Factory Production Tracking System",
    source: "CV + public frontend showcase",
    detail:
      "Developed a comprehensive factory production tracking system using FastAPI, MongoDB, and Flutter, with offline-first architecture and production reporting.",
    focus: [
      "Production, quality control, packaging, and shipping workflows",
      "Role-based authorization and mobile synchronization",
      "Excel integration and operational reporting",
    ],
  },
  {
    role: "Software Developer",
    organization: "Oktant Team",
    source: "CV + hosted media",
    detail:
      "Contributed software systems for UAV projects while coordinating with mechanical and software teams across desktop apps, AI, tracking, and system integration.",
    focus: [
      "PyMAVLink-based libraries and virtual UAV functions",
      "YOLO + RE3 tracking optimization",
      "Python interfaces and Laravel virtual APIs",
    ],
  },
  {
    role: "Computer Engineering",
    organization: "Education and technical project work",
    source: "CV",
    detail:
      "Participated in technical projects, volunteer work, and team-based engineering activities, including TEKNOFEST Fighting UAV project involvement.",
    focus: [
      "Software development-focused project responsibilities",
      "Analytical thinking and problem solving",
      "Team-based engineering execution",
    ],
  },
] as const;

export const mediaItems: readonly MediaItem[] = [
  {
    kind: "video",
    title: "Oktant UAV project reference",
    context: "Competition and UAV systems media",
    role: "Software developer: AI, tracking, PyMAVLink, and virtual integration",
    caption:
      "Hosted video connected to the Oktant Team UAV work documented in the CV.",
    href: "https://youtube.com/watch?v=GRgQbeSX0o4",
    embedUrl: "https://www.youtube-nocookie.com/embed/GRgQbeSX0o4",
  },
] as const;

export const stackGroups = [
  {
    title: "Web platforms",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
  },
  {
    title: "Mobile systems",
    items: ["Flutter", "Dart", "Riverpod", "Drift / SQLite", "Dio", "Workmanager"],
  },
  {
    title: "Backend and operations",
    items: ["FastAPI", "Node.js", "MongoDB", "MySQL", "Docker", "Nginx", "Linux"],
  },
  {
    title: "AI, UAV, and real-time",
    items: [
      "Python",
      "TensorFlow",
      "scikit-learn",
      "OpenCV",
      "PyMAVLink",
      "YOLO",
      "Unreal Engine",
      "C++",
    ],
  },
] as const;

export const resumeHighlights = {
  title: "Public resume snapshot",
  summary:
    "Computer engineer focused on operational software, Flutter mobile systems, Next.js platforms, AI integration, UAV software, and real-time systems.",
  strengths: [
    "Factory workflow software with offline-first mobile architecture.",
    "UAV software work across PyMAVLink, tracking, AI, and virtual testing.",
    "Web platforms with role-based dashboards and database-backed workflows.",
    "Python ML experiments covering recommendation, clustering, and classification.",
  ],
  note:
    "The public resume view intentionally excludes direct phone numbers and reference contact details.",
} as const;
