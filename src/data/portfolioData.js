export const personalInfo = {
  name: "Prasad Jayvant Aware",
  headline: "Hi, I'm Prasad Aware.",
  subheading: "Aspiring Software Engineer | Full-Stack Developer | Agentic AI",
  bio: "I am a B.Tech Information Technology undergraduate with a 9.48/10 CGPA, strong foundations in Data Structures and Algorithms, and hands-on experience building full-stack applications and AI-powered systems. I enjoy developing practical software, integrating APIs, and building applications using retrieval-augmented generation and multi-agent architectures.",
  location: "Solapur, Maharashtra, India",
  institution: "Walchand Institute of Technology, Solapur",
  degree: "B.Tech in Information Technology",
  minor: "Electronics and Telecommunication Engineering (ENTC)",
  duration: "August 2023 – June 2027",
  graduation: "June 2027",
  cgpa: "9.48/10",
  dsaSolved: "500+",
  email: "prasadaware6613@gmail.com",
  phone: "+91 8237463635",
  linkedin: "https://www.linkedin.com/in/prasad-aware-41590627b",
  github: "https://github.com/Prasadaware8125",
  portfolioUrl: "https://prasad-aware-portfolio.onrender.com/",
  resumePath: "/Prasad_Aware_Resume.pdf",
  targetRoles: [
    "Software Engineering Intern",
    "SDE Intern",
    "Graduate Software Engineer",
    "Full-Stack Developer",
    "Backend Developer",
    "AI/ML & Agentic AI Roles"
  ]
};

export const heroStats = [
  { label: "CGPA", value: "9.48/10", icon: "GraduationCap" },
  { label: "DSA Problems Solved", value: "500+", icon: "Code2" },
  { label: "Techathon 1.0", value: "2nd Place", icon: "Trophy" },
  { label: "Expected Graduation", value: "June 2027", icon: "Calendar" }
];

export const focusAreas = [
  "Data Structures & Algorithms",
  "Full-Stack Web Development",
  "Agentic AI & Multi-Agent Systems",
  "Retrieval-Augmented Generation (RAG)",
  "API Design & Backend Systems",
  "Software Engineering & Architecture"
];

export const educationList = [
  {
    institution: "Walchand Institute of Technology, Solapur",
    degree: "Bachelor of Technology in Information Technology",
    minor: "Minor in Electronics and Telecommunication Engineering (ENTC)",
    period: "August 2023 – June 2027",
    cgpa: "9.48/10",
    expectedGraduation: "June 2027",
    isPrimary: true,
    highlights: [
      "Consistently maintained academic excellence with 9.48/10 CGPA",
      "Minor in Electronics and Telecommunication Engineering (ENTC)",
      "Strong coursework in Data Structures, Algorithms, DBMS, OOP, Operating Systems, and Computer Networks",
      "Led technical project teams in state-level hackathons and technical symposiums"
    ]
  },
  {
    institution: "S.E.S. Junior College, Solapur",
    qualification: "Class XII / Higher Secondary Certificate (HSC)",
    stream: "Science",
    board: "Maharashtra State Board",
    score: "73.83%",
    scoreLabel: "Percentage",
    period: "2022–2023",
    isPrimary: false
  },
  {
    institution: "Shri Digamber Jain Gurukul, Solapur",
    qualification: "Class X / Secondary School Certificate (SSC)",
    stream: "General",
    board: "Maharashtra State Board",
    score: "73.20%",
    scoreLabel: "Percentage",
    period: "2020–2021",
    isPrimary: false
  }
];

// Preserving legacy single object export for backward compatibility if needed
export const education = educationList[0];

export const skillsData = [
  {
    category: "Programming Languages",
    icon: "Code",
    skills: ["Java", "JavaScript", "TypeScript", "Python", "SQL", "C"]
  },
  {
    category: "Frontend Development",
    icon: "Layout",
    skills: ["React.js", "React Native", "Redux", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "EJS"]
  },
  {
    category: "Backend Development and APIs",
    icon: "Server",
    skills: ["Node.js", "Express.js", "FastAPI", "Flask", "REST APIs"]
  },
  {
    category: "AI, LLMs & Information Retrieval",
    icon: "Cpu",
    skills: [
      "Retrieval-Augmented Generation (RAG)",
      "LangGraph",
      "LangChain",
      "Gemini",
      "Groq API",
      "ChromaDB",
      "Sentence Transformers",
      "Tavily"
    ]
  },
  {
    category: "Databases & Caching",
    icon: "Database",
    skills: ["MongoDB", "Mongoose", "MySQL", "Firebase", "SQLite", "Redis"]
  },
  {
    category: "Authentication & Validation",
    icon: "Shield",
    skills: ["JWT", "Passport.js", "Joi"]
  },
  {
    category: "Development Tools & Platforms",
    icon: "Wrench",
    skills: ["Git", "GitHub", "Linux", "Postman", "Docker", "Railway", "Render", "Cloudinary", "Tableau"]
  }
];

export const projectsData = [
  {
    id: "wanderlust",
    title: "WanderLust",
    subtitle: "Full-Stack Accommodation Listing Platform",
    type: "Independently developed project",
    isTeam: false,
    categories: ["Full Stack", "Backend"],
    tech: ["Node.js", "Express.js", "MongoDB", "EJS", "Passport.js", "Cloudinary", "Joi", "Leaflet"],
    description: "An Airbnb-style accommodation listing platform that allows users to publish, discover, and review accommodation listings.",
    problemSolved: "Enables travelers and hosts to discover accommodations with map-based spatial search, manage media assets, and leave verified ratings with robust session authorization.",
    keyFeatures: [
      "Complete listing CRUD operations with image management",
      "Spatial search and interactive map discovery powered by Leaflet",
      "Secure image uploads and cloud asset delivery via Cloudinary",
      "Interactive user reviews and community rating calculations",
      "Session-based user authentication and role-based listing authorization",
      "MongoDB-backed persistent session store",
      "Strict incoming data validation schemas using Joi",
      "MVC pattern with modular routing, reusable middleware, and centralized error handling"
    ],
    contribution: "Independently designed and built the entire application end-to-end, implementing MVC architecture, secure authentication, Joi schema validation, Cloudinary image pipeline, and Leaflet interactive map integration.",
    github: "https://github.com/Prasadaware8125/WanderLust"
  },
  {
    id: "krishisakhi",
    title: "KrishiSakhi",
    subtitle: "AI-Powered Smart Farming Platform",
    type: "Group project — Team AgriNova (Team of 4)",
    isTeam: true,
    teamSize: "Four members",
    role: "Team Leader",
    categories: ["Mobile", "AI / ML"],
    tech: ["React Native", "Python/ML", "Firebase", "WeatherAPI", "Groq API"],
    description: "An AI-powered smart farming platform designed to help farmers interpret soil reports, identify suitable crops, monitor weather, and access agricultural guidance.",
    problemSolved: "Assists farmers in interpreting complex laboratory soil tests, mitigating weather unpredictability, and obtaining timely agronomic guidance through automated recommendations and AI chat.",
    keyFeatures: [
      "Soil report analysis based on official soil-testing laboratory parameters",
      "Dataset-driven crop recommendations using regional, historical, and environmental inputs",
      "Real-time weather alerts and crop-cycle advisory",
      "Multilingual AI agricultural chatbot powered by Groq API",
      "Plant disease analysis and recommended remedies",
      "Interactive farmer community forum"
    ],
    contribution: "Contributed to crop recommendation functionality, integrated weather services and chatbot/LLM functionality using Groq API, connected frontend and backend services via APIs, and coordinated team members, feature integration, and the final demonstration.",
    github: "https://github.com/Prasadaware8125/skn_hackthon",
    achievement: "2nd Place — Techathon 1.0",
    achievementDetail: "State-level technical hackathon team runner-up award won by Team AgriNova under my leadership."
  },
  {
    id: "sourceiq",
    title: "SourceIQ",
    subtitle: "Web-Grounded LLM Content Generation for Engineering Education",
    type: "Sponsored college major project (Team of 4)",
    isTeam: true,
    teamSize: "Four members",
    role: "Team Leader",
    categories: ["Full Stack", "Backend", "AI / ML"],
    tech: ["React.js", "Python", "RAG", "MongoDB", "Redis", "Railway"],
    description: "A web-grounded AI platform that searches and retrieves information from online sources to generate educational responses supported by source references.",
    problemSolved: "Addresses LLM hallucination in engineering education by retrieving and grounding answers in verified online sources with clickable citations and conversation persistence.",
    keyFeatures: [
      "Web-grounded search and multi-document retrieval pipeline for engineering topics",
      "Transparent answer generation citing online source URLs and references",
      "Multi-turn conversation flow with searchable chat history",
      "Markdown formatting with code blocks, math equations, and document uploads",
      "Parallel webpage extraction and Upstash Redis caching to minimize redundant fetches",
      "Observed manual-test timings: ~10 seconds for initial web queries and 4–5 seconds for cached follow-ups"
    ],
    contribution: "Developed the complete React frontend (authentication, multi-turn chat, searchable history, Markdown rendering, source citations, document upload interfaces, and response actions), contributed to backend retrieval logic and API integration, configured Railway deployment services, and implemented Redis caching.",
    githubFrontend: "https://github.com/Prasadaware8125/RAG_FRONTEND_DEPLOY",
    githubBackend: "https://github.com/Prasadaware8125/RAG_SERVER_DEPLOY"
  },
  {
    id: "aptimind",
    title: "AptiMind",
    subtitle: "Agentic AI Aptitude Preparation Platform",
    type: "Independently developed project",
    isTeam: false,
    categories: ["AI / ML", "Backend"],
    tech: ["Python", "FastAPI", "LangGraph", "Gemini", "ChromaDB", "Sentence Transformers", "SQLite"],
    description: "An Agentic AI platform for personalized aptitude learning, practice generation, mock tests, flashcards, and adaptive study planning.",
    problemSolved: "Transforms traditional static test prep into an adaptive, multi-agent AI environment that evaluates learner weaknesses, generates validated problems, and ensures mathematical correctness.",
    keyFeatures: [
      "Multi-agent orchestration architecture built using LangGraph",
      "Retrieval-Augmented Generation utilizing Sentence Transformers embeddings and ChromaDB vector store",
      "Dynamic practice question generation with automated question validation and regeneration",
      "AST-based safe calculator ensuring strict mathematical consistency in generated solutions",
      "Timed mock tests with automatic grading and performance tracking",
      "Interactive flashcards and adaptive study plan generation",
      "High-throughput REST API endpoints engineered with FastAPI and SQLite persistence",
      "Persistent topic-level weak area diagnosis and analytics"
    ],
    contribution: "Independently conceptualized, architected, and built the multi-agent orchestration workflows, RAG pipeline, FastAPI backend, AST validation calculator, and topic analytics.",
    github: "https://github.com/Prasadaware8125/AptiMind"
  }
];

export const experienceData = [
  {
    role: "Green Intern",
    company: "1M1B (One Million for One Billion)",
    period: "July 2025 – August 2025",
    type: "Remote Internship",
    partner: "In partnership with AICTE & supported by Salesforce",
    description: "Completed the 1M1B Green Internship conducted in partnership with AICTE and supported by Salesforce. Focused on structured learning in sustainability frameworks, Tableau data visualization, and data-driven problem-solving methodologies.",
    highlights: [
      "Tableau training for environmental data visualization and interactive metrics dashboarding",
      "In-depth analysis of environmental sustainability standards and carbon reduction frameworks",
      "Data-driven problem-solving methodologies for industrial environmental impact scenarios",
      "Collaborative project development in a multi-disciplinary team environment"
    ],
    collaborativeProject: {
      name: "EcoVision — Carbon Neutral Mine",
      teamSize: "Three-member collaborative team",
      description: "A sustainability-focused web application developed by a three-member team. It collects mining-operation information such as coal extraction, machinery, vehicles, transportation, and environmental inputs to estimate carbon credits and recommend environmental mitigation measures such as plantation.",
      myRole: "Frontend Developer",
      contribution: "Developed frontend interfaces for entering mining-operation data and presenting carbon-credit estimates and environmental recommendations."
    }
  }
];

export const achievementsData = [
  {
    id: "programming-contest",
    title: "Programming Contest",
    award: "2nd Rank",
    organization: "Walchand Institute of Technology, Solapur",
    description: "Engineers' Day Celebration 2k26 technical competition organized at WIT Solapur.",
    icon: "Award"
  },
  {
    id: "techathon",
    title: "Techathon 1.0",
    award: "2nd Place (Team Runner-Up)",
    organization: "State-Level Technical Event",
    description: "Team Runner-Up for KrishiSakhi smart farming platform; led Team AgriNova through technical architecture and judging presentation.",
    icon: "Trophy"
  },
  {
    id: "code-a-thon",
    title: "Code-a-thon 2026-1",
    award: "6th Rank — Round 3",
    organization: "Competitive Coding Event",
    description: "Secured 6th Rank in Round 3 of Code-a-thon 2026-1 and received a ₹1,000 cash prize.",
    icon: "Award"
  },
  {
    id: "dsa-stats",
    title: "Data Structures & Algorithms",
    award: "500+ Problems Solved",
    organization: "Coding Platforms & Practice",
    description: "Solved 500+ algorithmic problems across coding platforms, focusing on trees, graphs, dynamic programming, and optimal space-time complexities in Java and Python.",
    icon: "BrainCircuit"
  }
];

export const certificationsData = [
  {
    title: "Alpha — Data Structures and Algorithms with Java",
    issuer: "Apna College",
    skills: ["Java", "Data Structures", "Algorithms", "Problem Solving"]
  },
  {
    title: "Delta — Full Stack Web Development",
    issuer: "Apna College",
    skills: ["React.js", "Node.js", "Express.js", "MongoDB", "Full-Stack Architecture"]
  },
  {
    title: "Python",
    issuer: "Infosys Springboard",
    skills: ["Python Programming", "OOP", "Data Structures"]
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    skills: ["Network Security", "Threat Analysis", "Cyber Safety"]
  },
  {
    title: "Research Methodology (Elite)",
    issuer: "NPTEL",
    skills: ["Scientific Research", "Data Analysis", "Academic Writing"]
  },
  {
    title: "AI-Assisted Coding Workshop",
    issuer: "NASSCOM AI Code Sarathi",
    skills: ["AI Developer Tools", "Copilot Engineering", "Code Generation Workflows"]
  },
  {
    title: "Soft Skill Development",
    issuer: "NPTEL",
    skills: ["Communication", "Professional Ethics", "Team Leadership"]
  }
];
