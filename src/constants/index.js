import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nextJs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  mysql,
  git,
  hikmah,
  cubosquare,
  slashrtc,
  hasbasoft,  
  ansaar,
  BudgetTrackerApp,
  CareerGuidesApp,
  evaluer,
  sourcevehicle,
  linkedIn,
  github,
} from "../assets";

const navigationPaths = {
  home: "/",
  about: "about",
  work: "work",
  contact: "contact",
};

export const navLinks = [
  {
    id: navigationPaths.about,
    title: "About",
  },
  {
    id: navigationPaths.work,
    title: "Work",
  },
  {
    id: navigationPaths.contact,
    title: "Contact",
  },
];

const services = [
  {
    title: "React Developer",
    icon: web,
  },
  {
    title: "NextJs Developer",
    icon: creator,
  },
  {
    title: "Flutter Developer",
    icon: mobile,
  },
  {
    title: "NodeJs Developer",
    icon: backend,
  },
  {
    title: "NestJs Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextJs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Backend Developer & DevOps Engineer",
    company_name: "Hikmah Infotech",
    company_website: "https://www.ansaar.in/",
    icon: hikmah, // replace with your company logo asset
    iconBg: "#E6DEDD",
    date: "2024 – Present",
    points: [
      "Currently working on the Sehati Auditing Project using React, Node.js, Django, PostgreSQL.",
      "Implemented containerization and orchestration with Docker, Rancher, Kubernetes, and Helm.",
      "Set up CI/CD pipelines using Argo for automated deployments.",
      "Optimized PostgreSQL database performance.",
      "Building a SaaS project in Next.js for auditing services.",
      "Developing and training models with Ollama 3.2 for AI-driven prompt engineering.",
      "Implemented unit and integration testing using Jest."
    ],
  },
  {
    title: "Backend Developer",
    company_name: "Cubosquare IT Systems & Solutions",
    company_website: "https://staging.sourcevehicle.com/",
    icon: cubosquare, // replace with your company logo asset
    iconBg: "#E6DEDD",
    date: "2023 – 2024",
    points: [
      "Developed REST APIs for Property Management Software using Next.js and MongoDB with secure authentication (NextAuth).",
      "Implemented real-time push notifications using Firebase.",
      "Built Vehicle E-commerce APIs using Nest.js & MongoDB with Swagger docs.",
      "Developed Ophthalmic Hospital Management APIs (Node.js, Express, MongoDB) with multi-organization setup.",
      "Integrated AI CRUD operations using OpenAI models in a MERN environment.",
      "Built Speech-to-Text and Recognition features for enterprise projects.",
      "Developed Video Editing product (MERN Stack) with trimming, merging, and watermarking features."
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Slashrtc",
    company_website: "https://slashrtc.com/",
    icon: slashrtc,
    iconBg: "#E6DEDD",
    date: "2022 – 2023",
    points: [
      "Developed and maintained SOW-Ticketing Portal Dashboard using React, Express.js, Node.js, MongoDB, MySQL.",
      "Built real-time ticket tracking system with dynamic filters and dashboards.",
      "Integrated Razorpay payment gateway for secure transactions.",
      "Developed Sales Portal with CRUD operations, audit logs, and API integrations.",
      "Wrote automated test cases to improve reliability and maintainability."
    ],
  },
  {
    title: "MERN Stack Intern",
    company_name: "Hasbasoft Technologies Pvt. Ltd.",
    company_website: "https://www.hasbasoft.com/",
    icon: hasbasoft,
    iconBg: "#E6DEDD",
    date: "2021 – 2022",
    points: [
      "Built real-time and dashboard applications using React, Node.js, and MongoDB.",
      "Worked on multiple client-facing projects gaining strong foundations in full-stack development.",
      "Deployed and maintained projects in production environments."
    ],
  },
  {
    title: "Self-Employed / Freelancer",
    company_name: "Freelance Projects",
    company_website: "https://github.com/kadir70-dev",
    icon: github,
    iconBg: "#E6DEDD",
    date: "2018 – Present",
    points: [
      "Developed personal and freelance projects including CRM System, Chatting Application, To-do List, and Video Sharing Application.",
      "Created and published mobile apps such as Budget Tracker and Career Guides on Google Play Store.",
      "Currently building an Android Notepad app and an iOS Medical Clinic Booking System.",
      "Most repositories are private but available on request (GitHub: kadir70-dev)."
    ],
  },
];

const projects = [
  {
    name: "Ansaar.in",
    description:
      "A complete company website where I developed the backend API to support dynamic features and business operations.",
    tags: [
      { name: "nodejs", color: "blue-text-gradient" },
      { name: "express", color: "green-text-gradient" },
      { name: "mysql", color: "pink-text-gradient" },
    ],
    image: ansaar,
    hosted_link: "https://www.ansaar.in/",
  },
  {
    name: "Evaluer.online",
    description:
      "An online evaluation platform where I contributed to backend development, ensuring scalable and secure APIs.",
    tags: [
      { name: "nodejs", color: "blue-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
      { name: "express", color: "pink-text-gradient" },
    ],
    image: evaluer, 
    hosted_link: "https://www.evaluer.online/",
  },
  {
    name: "SourceVehicle",
    description:
      "An e-commerce platform for vehicles. I worked as part of the backend team, contributing to core functionality and API integration.",
    tags: [
      { name: "nodejs", color: "blue-text-gradient" },
      { name: "reactjs", color: "green-text-gradient" },
      { name: "mysql", color: "pink-text-gradient" },
    ],
    image: sourcevehicle,
    hosted_link: "https://staging.sourcevehicle.com/",
  },
  {
    name: "Budget Tracker App",
    description:
      "A mobile app that helps users manage expenses and track budgets effectively. Published on Google Play Store.",
    tags: [
      { name: "Flutter", color: "blue-text-gradient" },
      { name: "firebase", color: "green-text-gradient" },
    ],
    image: BudgetTrackerApp,
    hosted_link:
      "https://play.google.com/store/apps/details?id=com.budgetTracker.app",
  },
  {
    name: "Career Guides App",
    description:
      "A career guidance mobile app providing resources and support for students. Published on Google Play Store.",
    tags: [
      { name: "Flutter", color: "blue-text-gradient" },
      { name: "nodejs", color: "green-text-gradient" },
    ],
    image: CareerGuidesApp, 
    hosted_link:
      "https://play.google.com/store/apps/details?id=com.career_guides",
  },
  {
    name: "Personal Projects",
    description:
      "Currently working on a CRM system and a Chatting Application (repos on GitHub, some private but will be public soon). Also developing an Android notepad app and an iOS clinic booking system.",
    tags: [
      { name: "Flutter", color: "blue-text-gradient" },
      { name: "nodejs", color: "green-text-gradient" },
      { name: "mongodb", color: "pink-text-gradient" },
    ],
    image: github, // GitHub logo for personal projects
    hosted_link: "https://github.com/kadir70-dev",
  },
];

const personalInfo = {
  name: "Abdul kadir",
  fullName: "Abdul Kadir Qamruddin Mukadam",
  email: "kadirab1999@gmail.com",
  mobile: "9930514782",
  role: "Senior Software Developer",
  about: `I'm a skilled software developer with experience in TypeScript and
  JavaScript, and expertise in frameworks like React.Js, Next.Js, Flutter,
  Node.js etc. I'm a quick learner and collaborate closely with clients to
  create efficient, scalable, and user-friendly solutions that solve
  real-world problems. Let's work together to bring your ideas to life!`,
  projectsIntro: `Following projects showcases my skills and experience through
  real-world examples of my work. Each project is briefly described with
  live demos. It reflects my ability to solve complex problems, work
  with different technologies, and manage projects effectively.`,
};

const publicUrls = {
  resume:
    "https://drive.google.com/file/d/1IMsAcR8fVwSeVj5En8DcIRTQkTlnoT7C/view?usp=sharing",
  socialProfiles: {
    linkedin: {
      title: "linkedin",
      link: "https://www.linkedin.com/in/abdul-kadir-mukadam-63957422b/",
      icon: linkedIn,
    },
    github: {
      title: "github",
      link: "https://github.com/Kadir70-dev",
      icon: github,
    },
  },
};

export {
  services,
  technologies,
  experiences,
  projects,
  navigationPaths,
  personalInfo,
  publicUrls,
};
