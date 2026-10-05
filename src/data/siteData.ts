import profilePic from "@/assets/profile-pic.jpeg";

export interface Project {
  id: string;
  orderNumber: string;
  title: string;
  category: string;
  description: string;
  contribution?: string;
  techStack: string[];
  liveUrl: string | null;
  githubUrl?: string | null;
  featured: boolean;
  role?: string;
  impact: string[];
  caseStudy?: {
    challenge: string;
    approach: string;
    outcome: string;
  };
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: string[];
}

export interface ExperienceItem {
  period: string;
  title: string;
  company: string;
  location: string;
  type: "employment" | "upskilling";
  summary?: string;
  responsibilities: string[];
}

export const profile = {
  name: "Muhammad Usman",
  initials: "MU",
  title: "Full Stack Software Engineer",
  subtitle: "AI/ML Engineering Transition",
  headline: "Full Stack Software Engineer | AI/ML Engineering Transition",
  experienceYears: "4+ years",
  location: "Lahore, Pakistan",
  email: "itsmusman1@gmail.com",
  phone: "+92 344 6153337",
  linkedin: "https://www.linkedin.com/in/m-usman01/",
  github: "https://github.com/itsmusman",
  portfolioUrl: "https://musman-portfolio-one.vercel.app/",
  resumeUrl: "/Muhammad-Usman-Resume.pdf",
  profileImageUrl: profilePic,

  // Grounded Hero supporting copy
  heroSummary:
    "Full Stack Software Engineer with 4+ years of professional experience building web and mobile applications across SaaS, healthcare, e-commerce, fintech, Web3, and AI-driven products. Currently expanding into AI/ML Engineering through hands-on learning and practical projects.",

  // Authentic About Bio
  aboutParagraphs: [
    "I'm a Full Stack Software Engineer with 4+ years of professional experience building web and mobile applications.",
    "My background includes React, Next.js, Node.js, TypeScript, Python and FastAPI, with experience across SaaS, healthcare, e-commerce, fintech, Web3 and AI-driven products.",
    "I'm now expanding my focus into AI/ML Engineering through the NIAI program under NAVTTC, while building practical projects and strengthening my Python and machine learning skills.",
  ],
  bio:
    "I'm a Full Stack Software Engineer with 4+ years of professional experience building web and mobile applications.\n\nMy background includes React, Next.js, Node.js, TypeScript, Python and FastAPI, with experience across SaaS, healthcare, e-commerce, fintech, Web3 and AI-driven products.\n\nI'm now expanding my focus into AI/ML Engineering through the NIAI program under NAVTTC, while building practical projects and strengthening my Python and machine learning skills.",

  education: "Bachelor of Science in Computer Science — University of Lahore (2017 – 2021)",
  currentUpskilling: "AI/ML Engineering Program — NIAI (NETSOL Institute of Artificial Intelligence) under NAVTTC (3 months — In Progress)",
};

export const siteMeta = {
  title: "Muhammad Usman — Full Stack Software Engineer | AI/ML Transition",
  description:
    "Muhammad Usman is a Full Stack Software Engineer with 4+ years of experience in React, Next.js, Node.js, Python, and FastAPI, actively transitioning into AI/ML Engineering.",
  image: "/social-preview.jpeg",
  type: "website",
};

export const contactInfo = {
  email: "itsmusman1@gmail.com",
  github: "https://github.com/itsmusman",
  linkedin: "https://www.linkedin.com/in/m-usman01/",
  phone: "+92 344 6153337",
  location: "Lahore, Pakistan",
};

// Curated Project List in exact priority order (01 to 09)
export const projects: Project[] = [
  {
    id: "unsurfaced-ai",
    orderNumber: "01",
    title: "Unsurfaced AI",
    category: "AI / Trend Discovery",
    description:
      "Real-time Reddit trend discovery platform covering trending topics, industry insights and sentiment analysis.",
    contribution:
      "Optimized backend APIs, debugging and asynchronous data ingestion.",
    techStack: ["Python", "FastAPI", "Next.js", "PostgreSQL", "Redis"],
    liveUrl: "https://unsurfaced-ai.com/brand-explorer",
    featured: true,
    role: "Software Engineer",
    impact: [
      "Optimized and debugged Unsurfaced AI, a real-time Reddit trend discovery platform using Python, FastAPI, Next.js, PostgreSQL and Redis; reduced API latency by 40% and page-load time by 35%.",
      "Moved data ingestion to an asynchronous pipeline and supported production readiness through testing, debugging and performance optimization.",
    ],
    caseStudy: {
      challenge:
        "High ingestion volume of Reddit data caused endpoint bottlenecking and inconsistent load times across brand explorer dashboards.",
      approach:
        "Refactored data collection into an asynchronous ingestion pipeline with Redis caching and tuned PostgreSQL queries backing FastAPI services.",
      outcome:
        "Cut API response latency by 40% and improved dashboard load speed by 35%, ensuring reliable trend discovery under heavy data flow.",
    },
  },
  {
    id: "amaizing",
    orderNumber: "02",
    title: "Amaizing",
    category: "AI / Competitive Intelligence",
    description:
      "AI-driven market intelligence platform for e-commerce brands, combining customer behavior, competitor movements, search trends and actionable market reports.",
    contribution:
      "Frontend development and product feature work.",
    techStack: ["React", "TypeScript", "JavaScript", "AI"],
    liveUrl: "https://amaizing.io/",
    featured: true,
    role: "Associate Software Engineer",
    impact: [
      "Built React.js and Next.js dashboards and contributed to Amaizing, an AI-driven competitive-intelligence platform.",
      "Delivered features in Agile sprints across USA–Pakistan time zones and used AI-assisted workflows to reduce QA effort by 35%.",
    ],
    caseStudy: {
      challenge:
        "Amazon e-commerce operators needed quick, decision-ready intelligence without sifting through unstructured competitor data.",
      approach:
        "Engineered modular React views and clean data-visualization components that translate raw signals into structured, actionable market reports.",
      outcome:
        "Delivered a polished user journey enabling brand managers to track competitor moves and forecast market opportunities rapidly.",
    },
  },
  {
    id: "blocktrust",
    orderNumber: "03",
    title: "BlockTrust",
    category: "Fintech / AI",
    description:
      "AI-managed crypto IRA platform focused on portfolio management, market monitoring, automated rebalancing, reporting and investor education.",
    contribution:
      "Contributed to production readiness, UI state consistency and performance optimization.",
    techStack: ["AI", "Fintech", "Web Applications"],
    liveUrl: "https://blocktrust.com/",
    featured: true,
    role: "Full Stack Engineer",
    impact: [
      "Contributed to production readiness and performance optimization of an AI-managed crypto IRA platform.",
      "Structured secure frontend workflows connecting portfolio monitoring, rebalancing triggers, and investor educational modules.",
    ],
    caseStudy: {
      challenge:
        "Crypto retirement accounts require institutional-grade reliability, clear audit trails, and strict UI responsiveness under fluctuating market conditions.",
      approach:
        "Optimized frontend bundle size, tuned state caching for market signal feeds, and systematically audited user flows for release readiness.",
      outcome:
        "Achieved production readiness with reliable UI state transitions and dependable portfolio reporting across desktop and mobile devices.",
    },
  },
  {
    id: "xana",
    orderNumber: "04",
    title: "XANA",
    category: "Web3 / Metaverse",
    description:
      "Decentralized metaverse platform combining social networking, gaming, digital commerce, NFT workflows, real-time communication and AI-driven interactions.",
    techStack: ["React.js", "Redux", "Web3", "Socket.io", "OpenAI"],
    liveUrl: "https://xana.net/app",
    featured: false,
    role: "React.js Developer",
    impact: [
      "Developed interactive user feeds, comment threads, post creation, and hashtag/mention parsing via custom regex logic.",
      "Integrated Socket.io for low-latency live communication and connected AI avatar interaction endpoints.",
    ],
  },
  {
    id: "writeout",
    orderNumber: "05",
    title: "WriteOut",
    category: "Real-time Applications / AI",
    description:
      "Real-time writing and gaming platform featuring Word Duel, daily puzzles, collaborative stories, leaderboards and AI-assisted content generation.",
    techStack: ["React", "Node.js", "Real-time Applications", "OpenAI"],
    liveUrl: "https://www.writeout.co/",
    featured: false,
    role: "Associate Software Engineer",
    impact: [
      "Built interactive game views and collaborative writing interfaces using React, Redux Toolkit, and Tailwind CSS.",
      "Integrated OpenAI APIs for automated puzzle generation and collaborative prompt assistance.",
    ],
  },
  {
    id: "truckup",
    orderNumber: "06",
    title: "TruckUp",
    category: "Logistics / Marketplace",
    description:
      "Roadside assistance platform connecting truck and trailer operators with mobile mechanics, including mechanic discovery, live location and service workflows.",
    techStack: ["React", "Next.js", "Web Applications"],
    liveUrl: "https://truckup.com/",
    featured: false,
    role: "Associate Software Engineer",
    impact: [
      "Built React.js and Next.js dashboards for TruckUp and delivered features in Agile sprints across USA–Pakistan time zones.",
      "Developed real-time mechanic status visualization and location-based request coordination.",
    ],
  },
  {
    id: "purelab",
    orderNumber: "07",
    title: "PureLab",
    category: "Healthcare / Diagnostics",
    description:
      "Digital healthcare experience supporting diagnostic services, test discovery, laboratory information and patient-oriented journeys.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://purelab.com/",
    featured: false,
    role: "Associate Software Engineer",
    impact: [
      "Built React.js and Next.js admin dashboards for PureLab clinical diagnostics platform.",
      "Engineered patient-centric diagnostic test catalogs, report access journeys, and laboratory discovery maps.",
    ],
  },
  {
    id: "colivease",
    orderNumber: "08",
    title: "Colivease",
    category: "PropTech / Mobile",
    description:
      "Cross-platform co-living product supporting property discovery, roommate and renter connections, messaging, dashboards and virtual meetings.",
    techStack: ["React Native", "Mobile", "Real-time Messaging"],
    liveUrl: "https://colivease.ca/",
    featured: false,
    role: "Associate Software Engineer",
    impact: [
      "Developed React Native features for Colivease and improved team delivery through structured Git branching, reducing merge conflicts by 40%.",
      "Built mobile user dashboards, virtual meeting integrations, and real-time roommate messaging.",
    ],
  },
  {
    id: "speedmeter",
    orderNumber: "09",
    title: "SpeedMeter",
    category: "Browser Extension",
    description:
      "Lightweight Chrome extension for one-click internet speed measurement and instant results.",
    techStack: ["JavaScript", "Chrome Extension APIs"],
    liveUrl: "https://chromewebstore.google.com/detail/dnmefkacijdmefckljigmcdipilgchje",
    featured: false,
    role: "Extension Developer",
    impact: [
      "Developed a Manifest V3 compliant Chrome extension for instantaneous internet download and latency benchmarking.",
      "Implemented Web Workers to keep browser thread responsive during network testing cycles.",
    ],
  },
];

// Clean Technical Skill Categories (Section 22)
export const skillCategories: SkillCategory[] = [
  {
    category: "Programming",
    description: "Core languages used across daily application logic and scripts",
    skills: ["JavaScript", "TypeScript", "Python", "HTML", "CSS"],
  },
  {
    category: "Frontend",
    description: "Component architectures, state management, and modern UI engineering",
    skills: ["React", "Next.js", "Redux Toolkit", "Tailwind CSS"],
  },
  {
    category: "Backend",
    description: "Server runtimes, microservices, and protocol-level integrations",
    skills: ["Node.js", "FastAPI", "REST APIs", "WebSockets"],
  },
  {
    category: "Mobile",
    description: "Cross-platform mobile application development",
    skills: ["React Native"],
  },
  {
    category: "Data",
    description: "Relational, document, and in-memory data persistence",
    skills: ["PostgreSQL", "MongoDB", "Redis"],
  },
  {
    category: "AI / ML",
    description: "Applied AI integrations, agentic workflows, and machine learning foundations",
    skills: ["OpenAI API", "AI-assisted Development", "ML Fundamentals"],
  },
  {
    category: "Cloud / DevOps",
    description: "Deployment pipelines, storage infrastructure, and hosting platforms",
    skills: ["AWS", "Vercel", "Netlify", "Render", "GitHub Actions"],
  },
  {
    category: "Tools",
    description: "Engineering methodologies, automated testing, and team delivery",
    skills: ["Git", "GitHub", "Jest", "Agile/Scrum", "Code Review"],
  },
];

// Flat skills array for quick reference
export const skillsList = skillCategories.flatMap((c) => c.skills);

// Verified Professional Experience Timeline (3 official employment positions, Section 12)
export const timeline: ExperienceItem[] = [
  {
    period: "Jan 2026 – Apr 2026",
    title: "Software Engineer",
    company: "Grayphite",
    location: "Lahore, Pakistan",
    type: "employment",
    summary:
      "Core engineer on Unsurfaced AI, optimizing data ingestion pipelines and server response metrics.",
    responsibilities: [
      "Optimized and debugged Unsurfaced AI, a real-time Reddit trend discovery platform using Python, FastAPI, Next.js, PostgreSQL and Redis; reduced API latency by 40% and page-load time by 35%.",
      "Moved data ingestion to an asynchronous pipeline and supported production readiness through testing, debugging and performance optimization.",
    ],
  },
  {
    period: "Aug 2024 – Apr 2025",
    title: "Associate Software Engineer",
    company: "PieCyfer",
    location: "Lahore, Pakistan",
    type: "employment",
    summary:
      "Full-stack development across logistics, diagnostic health, and AI competitive intelligence products.",
    responsibilities: [
      "Built React.js and Next.js dashboards for TruckUp and PureLab and contributed to Amaizing, an AI-driven competitive-intelligence platform.",
      "Delivered features in Agile sprints across USA–Pakistan time zones and used AI-assisted workflows to reduce QA effort by 35%.",
    ],
  },
  {
    period: "Dec 2022 – Mar 2024",
    title: "Associate Software Engineer",
    company: "DevBlends",
    location: "Lahore, Pakistan",
    type: "employment",
    summary:
      "Frontend and mobile application delivery across gaming, collaborative writing, and co-living platforms.",
    responsibilities: [
      "Built web applications and dashboards with React, Node.js, Redux Toolkit and Tailwind CSS, including work on WriteOut.",
      "Developed React Native features for Colivease and improved team delivery through structured Git branching, reducing merge conflicts by 40%.",
    ],
  },
];

// Continuing Development (Separate from Employment, Section 13)
export const continuingDevelopment = {
  title: "AI/ML Engineering",
  field: "Artificial Intelligence & Machine Learning",
  institution: "NIAI — NETSOL Institute of Artificial Intelligence",
  program: "NAVTTC",
  duration: "3-month program",
  status: "Currently in progress",
  description:
    "Focused on strengthening Python, machine learning fundamentals, data handling, feature engineering, model development and practical AI application development.",
};

// Education (Section 15)
export const educationAndTraining = [
  {
    title: "Bachelor of Science in Computer Science",
    institution: "University of Lahore",
    period: "2017 – 2021",
    description: "Foundations in data structures, algorithms, databases, and software engineering principles.",
  },
  {
    title: "AI/ML Engineering Program",
    institution: "NIAI — NETSOL Institute of Artificial Intelligence (NAVTTC)",
    period: "3 months — In Progress",
    description: "Intensive training in Python, ML algorithms, feature engineering, and model deployment.",
  },
  {
    title: "MERN Stack Development",
    institution: "NexusBerry",
    period: "Jan 2021 – Mar 2021",
    description: "Production web development across MongoDB, Express, React, and Node.js.",
  },
];
