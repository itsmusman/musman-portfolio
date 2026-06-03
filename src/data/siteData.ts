// Static site data - Edit this file to update your portfolio content

import profilePic from "@/assets/profile-pic.png?format=webp&w=400";

export const profile = {
  name: "MUHAMMAD USMAN",
  title: "SENIOR SOFTWARE ENGINEER ( Full Stack )",
  bio: "I am a Senior Software Engineer with over 5 years of professional experience specializing in building scalable web and mobile applications. Leveraging advanced AI coding assistants and agents (such as Antigravity, Claude Code, and Cursor), I rapidly bridge frontend architectures (React.js, Next.js, TypeScript) with backend services, database schemas, and Python scripts. This AI-augmented workflow allows me to build complete, full-stack applications, automate workflows, and integrate AI APIs (such as OpenAI/LLMs) with high speed and precision. Passionate about clean architecture, system optimization, and utilizing intelligent tools to deliver high-quality, modern software solutions.",
  education: "Bachelor of Science in Computer Science - University of Lahore (2017-2021)",
  experience: "5+ Years in Full Stack Development",
  profileImageUrl: profilePic,
  resumeUrl: null as string | null,
};

export const services = [
  {
    id: "1",
    title: "AI-Augmented Development",
    description: "Utilizing advanced AI coding agents (Antigravity, Claude Code, Cursor) to rapidly build full-stack features, write scripts, and optimize codebases.",
    icon: "Code",
  },
  {
    id: "2",
    title: "React.js & Next.js Development",
    description: "Creating highly interactive user interfaces and SEO-optimized web apps, utilizing server-side rendering and component-based structures.",
    icon: "Code",
  },
  {
    id: "3",
    title: "Backend API Engineering",
    description: "Designing and developing robust RESTful and GraphQL APIs using Node.js and Express.js, featuring secure authentication and high throughput.",
    icon: "Zap",
  },
  {
    id: "4",
    title: "Database Design & Management",
    description: "Structuring and optimizing relational (PostgreSQL, SQL) and non-relational (MongoDB) database schemas for performant queries and data integrity.",
    icon: "Database",
  },
  {
    id: "5",
    title: "React Native Mobile Development",
    description: "Developing cross-platform mobile applications with React Native, delivering native-like experiences for iOS and Android.",
    icon: "Smartphone",
  },
  {
    id: "6",
    title: "AI & API Integration",
    description: "Connecting web applications to AI APIs, large language models (LLMs), and automating backend processes using Python.",
    icon: "Globe",
  },
  {
    id: "7",
    title: "Chrome Extension Development",
    description: "Building lightweight, powerful Chrome extensions with JavaScript and Chrome APIs to enhance browser functionality and user productivity.",
    icon: "Globe",
  },
];

export const projects = [
  {
    id: "1",
    title: "XANA",
    description: "XANA is a decentralized metaverse platform combining social networking, gaming, and digital commerce. It allows users to create and customize avatars, build virtual environments, trade NFTs through the XANALIA marketplace, and interact via real-time chat. The platform operates on a native token (XETA), supports cross-chain compatibility, and incorporates AI-driven avatar interactions.",
    techStack: ["React.js", "Redux", "Socket.io", "API Integration", "Cross-Device Compatibility"],
    liveUrl: "https://xana.net/app",
    featured: true,
    imageUrl: null as string | null,
  },
  {
    id: "2",
    title: "TruckUp",
    description: "TruckUp is a service platform connecting fleet operators, truck drivers, and trailer owners with verified mobile mechanics for medium- and heavy-duty vehicles. The platform offers roadside assistance, mobile repairs, and fleet maintenance services available 24/7. Users can locate nearby mechanics, track ETAs, receive real-time updates, and access reliable repair support anytime, anywhere.",
    techStack: ["Next.js", "JavaScript", "TypeScript", "Redux", "API Integration"],
    liveUrl: "https://truckup.com",
    featured: true,
    imageUrl: null as string | null,
  },
  {
    id: "3",
    title: "PureLab",
    description: "PureLab is a leading diagnostic laboratory network providing high-quality clinical testing and healthcare services. The platform offers comprehensive test listings, location-based lab discovery, online report access, and appointment scheduling. Built with a focus on trust, accuracy, and user accessibility, it serves millions of patients with dependable healthcare diagnostics across multiple regions.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "API Integration", "Responsive Design"],
    liveUrl: "https://purelab.com",
    featured: true,
    imageUrl: null as string | null,
  },
  {
    id: "4",
    title: "Amaizing",
    description: "Amaizing is an AI-driven growth platform designed for e-commerce brands and agencies. It transforms complex marketplace data into actionable growth forecasts, identifies performance gaps, and runs uplift-focused optimization tests. The platform charges only on verified revenue gains and continuously improves through AI learning to maximize business scalability and efficiency.",
    techStack: ["JavaScript", "React.js", "TypeScript", "Tailwind UI", "API Integration"],
    liveUrl: "https://www.amaizing.io",
    featured: true,
    imageUrl: null as string | null,
  },
  {
    id: "5",
    title: "Kokobeo",
    description: "Kokobeo is a next-generation hybrid service marketplace that connects users with local, international, and emergency service professionals. The platform enables both online and on-site service bookings, supporting urgent requests, scheduled appointments, and specialized services. It delivers a seamless user experience through intuitive workflows, real-time matching, professional profiles, and efficient service coordination.",
    techStack: ["React.js", "JavaScript", "TypeScript", "Material-UI", "API Integration"],
    liveUrl: "https://makakao.com",
    featured: false,
    imageUrl: null as string | null,
  },
  {
    id: "6",
    title: "Vineyard Vines",
    description: "Vineyard Vines is a state-of-the-art e-commerce platform offering premium lifestyle and apparel products for men, women, and children. The platform supports a wide range of clothing categories, seamless product discovery, secure payments, and efficient order fulfillment. It is designed to deliver a fast, visually engaging, and user-friendly shopping experience across all devices.",
    techStack: ["React.js", "Material-UI", "Node.js", "Express.js", "MongoDB", "PayPal Integration"],
    liveUrl: "https://www.vineyardvines.com/",
    featured: false,
    imageUrl: null as string | null,
  },
  {
    id: "7",
    title: "SpeedMeter",
    description: "SpeedMeter is a lightweight Chrome extension that enables users to instantly measure their internet connection speed directly from the browser. The extension features real-time download speed testing, an intuitive circular progress UI, and accurate performance metrics displayed in Mbps/Kbps. Built for simplicity and efficiency, it provides quick speed insights without navigating to external websites.",
    techStack: ["JavaScript", "Chrome APIs", "HTML5", "CSS3", "Web Workers", "Manifest V3"],
    liveUrl: "https://chromewebstore.google.com/detail/dnmefkacijdmefckljigmcdipilgchje",
    featured: false,
    imageUrl: null as string | null,
  },
];

export const contactInfo = {
  email: "itsmusman1@gmail.com",
  github: "https://github.com/itsmusman",
  linkedin: "https://www.linkedin.com/in/m-usman01/",
  twitter: null as string | null,
  phone: "+92 344 6153337",
  location: "Pakistan",
};

export const skills = [
  { name: "React.js / Next.js", level: 95 },
  { name: "JavaScript / TypeScript", level: 95 },
  { name: "AI-Augmented Workflows", level: 95 },
  { name: "AI & API Integrations", level: 90 },
  { name: "Node.js / Express.js", level: 88 },
  { name: "Databases (SQL / MongoDB)", level: 88 },
  { name: "Python", level: 85 },
  { name: "Tailwind CSS / UI Design", level: 90 },
  { name: "Git & CI/CD", level: 88 },
];

export const timeline = [
  {
    year: "Apr 2025 - Present",
    title: "Senior Software Engineer - Freelance",
    company: "Self-Employed — Pakistan",
    description: "Delivering full-stack development and Python scripting services for global clients, leveraging advanced AI coding agents to accelerate delivery times. Architected custom endpoints and integrated AI APIs with React frontends.",
  },
  {
    year: "Aug 2024 - Apr 2025",
    title: "Senior Software Engineer",
    company: "PieCyfer — Lahore, Pakistan",
    description: "Maintained and enhanced scalable full-stack web applications using React.js, Next.js, and Node.js. Used AI-assisted tools to streamline scripting tasks, integrated third-party REST APIs, and optimized query operations.",
  },
  {
    year: "Dec 2022 - Aug 2024",
    title: "Associate Software Engineer",
    company: "DevBlends — Lahore, Pakistan",
    description: "Developed customized web and mobile applications. Built backend helper services in Python and Node.js, and integrated them with frontend React and React Native views. Spearheaded transition to AI-augmented development.",
  },
  {
    year: "Mar 2021 - Nov 2022",
    title: "Junior Software Engineer",
    company: "Ebyrx — Lahore, Pakistan",
    description: "Built web interfaces using HTML, CSS, JavaScript, and React. Collaborated with backend engineers to integrate APIs. Developed reusable UI components and optimized layouts for responsiveness.",
  },
];
