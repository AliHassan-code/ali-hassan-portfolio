export interface SkillCategory {
  title: string
  items: string[]
}

export interface Service {
  number: string
  title: string
  description: string
  details: string[]
}

export interface TimelineItem {
  role: string
  points: string[]
}

export interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  features: string[]
  image?: string
  githubUrl?: string
  demoUrl?: string
}

export interface ContactFormData {
  name: string
  email: string
  message: string
}

export interface FaqItem {
  question: string
  answer: string
}

export const services: Service[] = [
  {
    number: "01",
    title: "React.js & Full-Stack Development",
    description: "Responsive React.js websites and full-stack web applications shaped around real user workflows.",
    details: ["React.js interfaces", "JavaScript development", "ASP.NET Core APIs"],
  },
  {
    number: "02",
    title: "Custom Business Web Applications",
    description: "Custom business software for the workflows that keep a business moving.",
    details: ["POS and inventory", "Booking platforms", "Role-based dashboards"],
  },
  {
    number: "03",
    title: "Backend, Database & API Solutions",
    description: "Maintainable data foundations and APIs for modern web application development.",
    details: ["SQL and MongoDB", "REST API design", "Microsoft Azure"],
  },
]

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    items: ["React", "JavaScript"],
  },
  {
    title: "Backend Development",
    items: ["C#", "ASP.NET Core", "Node.js", "REST APIs", "MERN Stack"],
  },
  {
    title: "Databases",
    items: ["SQL Server", "PostgreSQL", "MongoDB"],
  },
  {
    title: "Cloud & Development Tools",
    items: ["Microsoft Azure", "Git/GitHub"],
  },
  {
    title: "Application Development",
    items: ["Responsive Websites", "SaaS Platforms", ".NET Web Applications", ".NET Desktop Applications"],
  },
]

export const experience: TimelineItem[] = [
  {
    role: "Full-Stack / .NET Developer",
    points: [
      "Designed, developed, and maintained full-stack web applications using ASP.NET Core, React, and the MERN stack for clients across multiple industries.",
      "Built responsive, mobile-friendly websites and SaaS platforms tailored to individual client business requirements.",
      "Developed a complete Point-of-Sale system (Trade 360) handling inventory management, billing, and reporting using ASP.NET Core.",
      "Delivered custom web solutions for property dealers, hotel room booking, and tour booking businesses using the MERN stack.",
      "Built and consumed RESTful APIs, integrated SQL Server and PostgreSQL databases, and deployed applications on Microsoft Azure.",
      "Developed .NET desktop applications for business process automation.",
    ],
  },
]

export const projects: Project[] = [
  {
    id: 1,
    title: "Trade 360 — ASP.NET Core Point-of-Sale System",
    description: "A retail point-of-sale web application for inventory management, billing, and reporting, built with ASP.NET Core and SQL Server.",
    tags: ["ASP.NET Core", "SQL Server", "POS"],
    features: ["Inventory management", "Billing", "Reporting"],
  },
  {
    id: 2,
    title: "MERN Stack Booking & Business Websites",
    description: "Responsive React.js and MERN stack websites for property listings, hotel reservations, and tour booking.",
    tags: ["React", "Node.js", "MongoDB", "MERN"],
    features: ["Property listings", "Hotel booking", "Tour booking"],
  },
]

export const contactLinks = {
  email: "alihassantariq107@gmail.com",
  phone: "03273911676",
  whatsapp: "https://wa.me/923434795732",
  linkedin: "https://www.linkedin.com/in/ali-hassan-choudhary/",
  github: "https://github.com/AliHassan-code",
}

export const faqItems: FaqItem[] = [
  {
    question: "What kind of projects do you take on?",
    answer: "I build responsive React.js websites, SaaS platforms, booking systems, dashboards, and business applications that need a dependable full-stack implementation.",
  },
  {
    question: "Can you work with an existing codebase?",
    answer: "Yes. I can extend an existing React, Node.js, or ASP.NET Core application, improve its architecture, fix difficult issues, and ship focused new features.",
  },
  {
    question: "Which technologies do you use?",
    answer: "My core stack is C#, ASP.NET Core, React, JavaScript, Node.js, SQL Server, PostgreSQL, MongoDB, REST APIs, and Microsoft Azure.",
  },
  {
    question: "How do you approach a new product idea?",
    answer: "I start by clarifying the user workflow and the smallest useful release, then shape the data model, technical plan, interface, and delivery milestones around it.",
  },
  {
    question: "How can we start a conversation?",
    answer: "Send a short message through the contact form with what you are building, your current stage, and the outcome you need. I will reply with a practical next step.",
  },
]

export const contactForm: ContactFormData = {
  name: "",
  email: "",
  message: "",
}