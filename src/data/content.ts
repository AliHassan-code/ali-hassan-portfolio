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
  company: string
  duration: string
  points: string[]
}

export interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  githubUrl: string
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
    title: "Full-Stack Products",
    description: "From an early idea to a dependable product that people can use every day.",
    details: ["React interfaces", "ASP.NET Core APIs", "Responsive delivery"],
  },
  {
    number: "02",
    title: "Business Systems",
    description: "Focused software for the workflows that keep a business moving.",
    details: ["POS and inventory", "Booking platforms", "Role-based dashboards"],
  },
  {
    number: "03",
    title: "Data & Cloud",
    description: "Clear data foundations and deployments that stay maintainable as you grow.",
    details: ["SQL and MongoDB", "REST API design", "Microsoft Azure"],
  },
]

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages & Frameworks",
    items: ["C#", "ASP.NET Core", "JavaScript", "Node.js", "React", "MERN Stack"],
  },
  {
    title: "Databases",
    items: ["SQL Server", "PostgreSQL", "MongoDB"],
  },
  {
    title: "Cloud & Tools",
    items: ["Microsoft Azure", "Git/GitHub", "REST APIs"],
  },
  {
    title: "Application Types",
    items: ["Responsive Websites", "SaaS Platforms", ".NET Web Applications", ".NET Desktop Applications"],
  },
]

export const experience: TimelineItem[] = [
  {
    role: "Full-Stack / .NET Developer",
    company: "5+ Years of Professional Experience",
    duration: "2019 – Present",
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
    title: "Trade 360 — Point-of-Sale System",
    description: "Built with ASP.NET Core; manages inventory, billing, and reporting for retail stores.",
    tags: ["ASP.NET Core", "SQL Server", "POS"],
    githubUrl: "https://github.com/AliHassan-code/trade-360",
  },
  {
    id: 2,
    title: "Client Booking & Business Websites — MERN Stack",
    description: "Developed custom websites for clients including property dealer listings, hotel room booking, and tour booking systems, tailored to each client's specific requirements.",
    tags: ["React", "Node.js", "MongoDB", "MERN"],
    githubUrl: "https://github.com/AliHassan-code/mern-bookings",
  },
]

export const faqItems: FaqItem[] = [
  {
    question: "What kind of projects do you take on?",
    answer: "I work on responsive websites, SaaS platforms, booking systems, dashboards, and business applications where a dependable full-stack implementation is needed.",
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