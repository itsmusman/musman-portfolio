// Static site data - Edit this file to update your portfolio content

export const profile = {
  name: "MUHAMMAD USMAN",
  title: "SENIOR SOFTWARE ENGINEER ( Frontend Focused )",
  bio: "I am a Software Engineer with over 5 years of professional experience specializing in frontend development and modern web and mobile applications. My expertise lies in building scalable, high-performance user interfaces using React.js, Next.js, and React Native, with strong foundations in HTML, CSS, JavaScript, and TypeScript. I have hands-on experience working in agile, cross-functional teams, integrating frontend systems with APIs, and optimizing workflows to ensure timely and high-quality feature delivery. I am particularly passionate about AI-powered solutions, clean architecture, and crafting intuitive user experiences that solve real business problems.",
  education: "Bachelor of Science in Computer Science - University of Lahore (2017-2021)",
  experience: "5+ Years in Frontend Development",
  profileImageUrl: "/src/assets/profile-pic.png",
  resumeUrl: null as string | null,
};

export const services = [
  {
    id: "1",
    title: "JavaScript/TypeScript Development",
    description: "Building dynamic, interactive web applications with JavaScript and TypeScript, leveraging modern ES6+ features and type safety for robust, maintainable code.",
    icon: "Code",
  },
  {
    id: "2",
    title: "React.js Development",
    description: "Building dynamic, interactive web applications with React.js, leveraging component-based architecture for scalable and maintainable codebases.",
    icon: "Code",
  },
  {
    id: "3",
    title: "Next.js Development",
    description: "Creating fast, SEO-friendly applications with Next.js, utilizing server-side rendering and static generation for optimal performance.",
    icon: "Zap",
  },
  {
    id: "4",
    title: "React Native Development",
    description: "Developing cross-platform mobile applications with React Native, delivering native-like experiences for iOS and Android.",
    icon: "Smartphone",
  },
  {
    id: "5",
    title: "Performance Optimization",
    description: "Optimizing web and mobile applications for speed, accessibility, and SEO to deliver the best user experience.",
    icon: "Zap",
  },
  {
    id: "6",
    title: "API Integration",
    description: "Seamlessly integrating frontend systems with REST APIs and third-party services for robust data management.",
    icon: "Globe",
  },
  {
    id: "7",
    title: "Technical Consultation",
    description: "Providing expert advice on frontend architecture, technology choices, and best practices for your projects.",
    icon: "MessageSquare",
  },
  {
    id: "8",
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
  { name: "React.js", level: 95 },
  { name: "JavaScript (ES6+)", level: 95 },
  { name: "HTML5/CSS3", level: 95 },
  { name: "Next.js", level: 92 },
  { name: "TypeScript", level: 90 },
  { name: "Tailwind CSS", level: 90 },
  { name: "React Native", level: 88 },
  { name: "Git & GitHub", level: 88 },
  { name: "API Integrations", level: 85 },
];

export const timeline = [
  {
    year: "Apr 2025 - Present",
    title: "Senior Software Engineer - Freelance",
    company: "Self-Employed — Pakistan",
    description: "Providing frontend development services for clients worldwide. Building modern web and mobile applications using React.js, Next.js, and React Native.",
  },
  {
    year: "Aug 2024 - Apr 2025",
    title: "Senior Software Engineer",
    company: "PieCyfer — Lahore, Pakistan",
    description: "Maintained and enhanced scalable web applications using React.js and Next.js. Integrated frontend systems to optimize deal and data management workflows. Collaborated closely with designers, backend engineers, and stakeholders in agile environments.",
  },
  {
    year: "Dec 2022 - Aug 2024",
    title: "Associate Software Engineer",
    company: "DevBlends — Lahore, Pakistan",
    description: "Developed customized web and mobile applications for multiple industries. Built responsive interfaces using React.js and React Native. Managed deployments, code reviews, and environment setup.",
  },
  {
    year: "Mar 2021 - Nov 2022",
    title: "Junior Software Engineer",
    company: "Ebyrx — Lahore, Pakistan",
    description: "Implemented frontend interfaces using HTML, CSS, and JavaScript. Delivered mobile-first, responsive UI/UX solutions. Created reusable components to reduce redundancy across projects.",
  },
];
