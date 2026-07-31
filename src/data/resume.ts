import {
  Brain,
  Code2,
  Database,
  Globe,
  Cpu,
  Wrench,
  MessagesSquare,
  Zap,
  LineChart,
  Users,
  Puzzle,
  Shuffle,
  Clock,
} from "lucide-react";

export const profile = {
  name: "MV Hema Sree",
  tagline: "Software Developer | Data Analyst | AI/ML Enthusiast",
  summary:
    "Motivated B.Tech Computer Science student (CGPA 9.73) with a strong foundation in Java, Python, SQL and Data Structures & Algorithms, and a growing specialization in Machine Learning and Data Analysis.",
  longSummary:
    "I design and build full-stack web applications and research-driven AI/ML solutions — including sentiment analysis, reinforcement-learning-based recommender systems and disease detection models — backed by 15+ industry certifications from Google, IBM, Microsoft, Simplilearn, MongoDB and NPTEL, along with hands-on internship experience spanning Data Science, AI, Python development and Full Stack Web Development.",
  seeking:
    "A fast learner, analytical thinker and collaborative team player, seeking a Software Developer, Data Analyst or AI/ML internship to deliver measurable impact from day one.",
  location: "Chittoor, Andhra Pradesh, India",
  phone: "6304889040",
  email: "medivenkataramanahema@gmail.com",
  linkedin: "https://linkedin.com/in/mv-hema-sree",
  github: "https://github.com/mvhemasree",
  site: "mvhemasree.dev",
  languages: ["English", "Telugu", "Tamil"],
  interests: ["Technology & self-development reading", "AI/innovation podcasts"],
};

export const stats = [
  { value: 9.73, suffix: "", label: "CGPA", decimals: 2 },
  { value: 4, suffix: "", label: "Internships", decimals: 0 },
  { value: 15, suffix: "+", label: "Certifications", decimals: 0 },
  { value: 7, suffix: "", label: "Major Projects", decimals: 0 },
];

export const education = [
  {
    degree: "B.Tech, Computer Science",
    institution: "The Apollo University",
    board: "Apollo University",
    year: "Ongoing",
    score: "9.73 CGPA",
  },
  {
    degree: "Intermediate (MPC)",
    institution: "PSN's Sri Vivekananda Jr. College",
    board: "BIE, Andhra Pradesh",
    year: "2022–2024",
    score: "873/1000",
  },
  {
    degree: "SSC",
    institution: "Camford English School",
    board: "BSE, Andhra Pradesh",
    year: "2021",
    score: "569/600",
  },
];

export const experience = [
  {
    role: "Data Science Intern",
    company: "Shadowfox",
    points: [
      "Worked on real-world data science tasks including data cleaning, exploratory data analysis, and model building using Python.",
      "Applied statistical and machine learning techniques to derive actionable insights from datasets.",
    ],
    tags: ["Python", "EDA", "Machine Learning", "Statistics"],
  },
  {
    role: "Python Development Intern",
    company: "CodSoft",
    points: [
      "Developed and debugged Python-based mini-projects, strengthening core programming and problem-solving skills.",
      "Applied object-oriented programming and logic-building concepts to deliver functional solutions within deadlines.",
    ],
    tags: ["Python", "OOP", "Problem Solving"],
  },
  {
    role: "AI Intern",
    company: "Slashmark IT Solutions",
    points: [
      "Worked on artificial intelligence tasks, applying ML/AI concepts to solve practical problems and build functional models.",
      "Gained hands-on exposure to AI development workflows and model implementation using Python.",
    ],
    tags: ["Artificial Intelligence", "Python", "Model Building"],
  },
  {
    role: "Full Stack Web Development Intern",
    company: "Orvionar",
    points: [
      "Built and maintained full stack web application features, working across front-end and back-end components.",
      "Collaborated on real-world development tasks, strengthening practical web development and debugging skills.",
    ],
    tags: ["HTML", "CSS", "JavaScript", "Full Stack"],
  },
];

export const skillGroups = [
  { title: "Programming", icon: Code2, items: ["Java", "Python", "C", "SQL"] },
  { title: "Web", icon: Globe, items: ["HTML", "CSS"] },
  { title: "Databases", icon: Database, items: ["DBMS", "SQL", "MongoDB"] },
  {
    title: "Core CS",
    icon: Cpu,
    items: ["Data Structures", "Algorithms", "Operating Systems", "Computer Networks", "OOP"],
  },
  {
    title: "AI & Data Science",
    icon: Brain,
    items: [
      "Machine Learning",
      "Reinforcement Learning",
      "Python for Data Analysis",
      "Agentic AI Basics",
    ],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    items: ["Git", "GitHub", "Google Cloud", "MS Word", "PowerPoint", "Digital Productivity Tools"],
  },
];

export type ProjectVisualKind =
  | "nlp"
  | "graph"
  | "predict"
  | "dashboard"
  | "traffic"
  | "campus"
  | "code";

export const projects = [
  {
    title: "Sentiment Analysis",
    subtitle: "Machine Learning",
    stack: ["Python", "NLP", "Machine Learning"],
    description:
      "Built a machine learning model to classify text sentiment (positive/negative/neutral) using NLP preprocessing and classification algorithms.",
    visual: "nlp" as ProjectVisualKind,
    featured: true,
  },
  {
    title: "Recommender System using Reinforcement Learning",
    subtitle: "Applied RL",
    stack: ["Python", "Reinforcement Learning"],
    description:
      "Designed a recommendation engine leveraging reinforcement learning techniques to optimize personalized suggestions based on user feedback.",
    visual: "graph" as ProjectVisualKind,
    featured: true,
  },
  {
    title: "Disease Detection",
    subtitle: "Machine Learning",
    stack: ["Python", "Machine Learning"],
    description:
      "Developed a predictive ML model to detect disease likelihood from health data, focusing on accuracy and model evaluation.",
    visual: "predict" as ProjectVisualKind,
    featured: false,
  },
  {
    title: "Freelance CRM",
    subtitle: "Full Stack Web Application",
    stack: ["HTML", "CSS", "JavaScript", "SQL", "DBMS"],
    description:
      "Designed the database schema and built front-end interfaces for a lightweight CRM enabling freelancers to manage clients, projects and invoices. Implemented core CRUD functionality end-to-end, delivering a functional prototype that streamlined client and project tracking.",
    visual: "dashboard" as ProjectVisualKind,
    featured: false,
  },
  {
    title: "ML-Driven Intelligent Traffic Management",
    subtitle: "Research Article",
    stack: ["Python", "Machine Learning", "Data Analysis"],
    description:
      "Conducted literature review and analyzed traffic datasets; co-authored a data-driven framework for self-adaptive, ML-based traffic signal control.",
    visual: "traffic" as ProjectVisualKind,
    featured: false,
  },
  {
    title: "Future Trends in Mobile OS for Smart Campus Devices",
    subtitle: "Research",
    stack: ["Research", "Mobile Computing"],
    description:
      "Researched emerging mobile OS trends (AI integration, IoT connectivity, security) and their relevance to smart-campus device ecosystems.",
    visual: "campus" as ProjectVisualKind,
    featured: false,
  },
  {
    title: "Java Programming & Logic Building",
    subtitle: "Core Application Development",
    stack: ["Java", "Python", "OOP"],
    description:
      "Independently designed, coded and debugged programs covering OOP, exception handling and iterative logic to build strong programming fundamentals.",
    visual: "code" as ProjectVisualKind,
    featured: false,
  },
];

export const certCategories = [
  "All",
  "AI / ML",
  "Data Science",
  "Programming",
  "Cloud",
  "Web Development",
  "Databases",
  "Productivity / Leadership",
] as const;

export const certifications = [
  {
    title: "Programming for Everybody (Python)",
    org: "Coursera",
    skills: "Python fundamentals, syntax, problem solving",
    category: "Programming",
  },
  {
    title: "Introduction to Data Science",
    org: "IBM",
    skills: "Data science lifecycle, tools, methodology",
    category: "Data Science",
  },
  {
    title: "Data Structures and Algorithms",
    org: "NPTEL",
    skills: "DSA concepts, complexity analysis",
    category: "Programming",
  },
  {
    title: "Java Programming Masterclass",
    org: "Udemy",
    skills: "Core Java, OOP, application development",
    category: "Programming",
  },
  {
    title: "Web Development",
    org: "freeCodeCamp",
    skills: "HTML, CSS, responsive design",
    category: "Web Development",
  },
  {
    title: "Machine Learning Fundamentals",
    org: "Google",
    skills: "ML concepts, supervised/unsupervised learning",
    category: "AI / ML",
  },
  {
    title: "Introduction to Artificial Intelligence",
    org: "Microsoft",
    skills: "AI foundations, use cases",
    category: "AI / ML",
  },
  {
    title: "Build AI Automations",
    org: "NxtWave",
    skills: "Agentic AI, automation workflows",
    category: "AI / ML",
  },
  {
    title: "MongoDB Certification",
    org: "MongoDB",
    skills: "NoSQL database design, querying, administration",
    category: "Databases",
  },
  {
    title: "Machine Learning using Python",
    org: "Simplilearn",
    skills: "ML algorithms, model building with Python",
    category: "AI / ML",
  },
  {
    title: "Innovating with Google AI",
    org: "Simplilearn",
    skills: "Applied AI innovation concepts",
    category: "AI / ML",
  },
  {
    title: "Python for Data Analysis",
    org: "Simplilearn",
    skills: "Data wrangling and analysis with Python",
    category: "Data Science",
  },
  {
    title: "Introduction to Digital Transformation with Google Cloud",
    org: "Simplilearn",
    skills: "Cloud-driven digital transformation fundamentals",
    category: "Cloud",
  },
  {
    title: "Google Cloud Computing Foundations (Skill Badge)",
    org: "Google Cloud",
    skills: "Core cloud computing concepts",
    category: "Cloud",
  },
  {
    title: "AI Tools Certification",
    org: "be10x",
    skills: "Practical AI tools for productivity",
    category: "Productivity / Leadership",
  },
  {
    title: "Google Student Ambassador",
    org: "Google",
    skills: "Leadership, community tech advocacy",
    category: "Productivity / Leadership",
  },
];

export const research = [
  {
    title: "Machine Learning–Driven Intelligent Traffic Management",
    type: "Research Article",
    stack: ["Python", "Machine Learning", "Data Analysis"],
    description:
      "Conducted literature review and analyzed traffic datasets; co-authored a data-driven framework for self-adaptive, ML-based traffic signal control.",
  },
  {
    title: "Future Trends in Mobile OS for Smart Campus Devices",
    type: "Research Study",
    stack: ["Research", "Mobile Computing Concepts"],
    description:
      "Researched emerging mobile OS trends (AI integration, IoT connectivity, security) and their relevance to smart-campus device ecosystems.",
  },
];

export const strengths = [
  { label: "Excellent Communication", icon: MessagesSquare },
  { label: "Quick Learner", icon: Zap },
  { label: "Analytical Thinking", icon: LineChart },
  { label: "Team Collaboration", icon: Users },
  { label: "Problem Solving", icon: Puzzle },
  { label: "Adaptability", icon: Shuffle },
  { label: "Time Management", icon: Clock },
];

export const workshops =
  "Attended multiple workshops and webinars on Artificial Intelligence, Data Analytics and Entrepreneurship, gaining exposure to industry trends and practical applications.";

export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "research", label: "Research" },
  { id: "contact", label: "Contact" },
];
