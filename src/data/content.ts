export interface SkillCategory {
  title: string
  items: string[]
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

export const contactForm: ContactFormData = {
  name: "",
  email: "",
  message: "",
}