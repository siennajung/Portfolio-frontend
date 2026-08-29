export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string | null;
  summary: string;
  bullets: string[];
  techStack: string[];
}

export const experiences: Experience[] = [
  {
    id: "artistry-community",
    company: "Artistry Community",
    role: "Full Stack Engineer",
    location: "Remote",
    startDate: "2026-03",
    endDate: "2026-08",
    summary:
      "A Canada-based digital art platform hosting curated exhibitions and artist portfolios across North America and Asia.",
    bullets: [
      "Built a CMS with multimedia uploads and real-time layout previews, enabling 50+ non-technical team members to manage and publish digital exhibition content, reducing publishing lead time by 80%.",
      "Collaborated with a cross-functional team on UI/UX overhauls, translating stakeholder feedback into interactive prototypes and iterating features rapidly within Agile sprints.",
    ],
    techStack: ["Next.js", "TypeScript", "React", "Node.js", "RESTful APIs", "Agile"],
  },
  {
    id: "flip-ers",
    company: "Flip-ers",
    role: "Full Stack Engineer",
    location: "Seoul, South Korea",
    startDate: "2025-07",
    endDate: "2026-02",
    summary:
      "An EdTech platform streamlining cross-border university admissions for international students applying to Korean universities.",
    bullets: [
      "Reduced manual processing time by over 90% while streamlining applicant screening for 250+ applicants through a centralised admissions dashboard that replaced external form-based workflows and consolidated applicant data.",
      "Redesigned access to sensitive applicant documents by replacing in-browser rendering with permission-gated downloads, restricting unauthorised access and enabling audit tracking of document downloads using Azure Cloud.",
      "Transformed an AI-assisted MVP into an end-to-end admissions platform, developing the frontend and integrating a NestJS backend via RESTful APIs to streamline application workflows across 5 partner universities.",
      "Implemented CI/CD pipelines using GitHub Actions, automating deployments across separated development and production environments upon branch merges.",
      "Mentored software engineering interns from UC Davis across full-stack development, providing technical guidance and code reviews to support the delivery of a production-ready application.",
    ],
    techStack: ["React", "TypeScript", "NestJS", "PostgreSQL", "Azure", "GitHub Actions", "CI/CD"],
  },
  {
    id: "ffolio-company",
    company: "ffolio Company",
    role: "Full Stack Engineer",
    location: "Seoul, South Korea",
    startDate: "2024-01",
    endDate: "2025-05",
    summary:
      "An enterprise Learning Management System (LMS) built for the Korea Venture Capital Association (KVCA).",
    bullets: [
      "Led the development of an e-learning platform from the ground up using Java and React, serving 13,000+ users, supporting educational programmes contributing to £6M+ in revenue and achieving a 98.5% course completion rate.",
      "Refactored React admin state management by migrating from Redux to Zustand, eliminating redundant category callback logic across 14 administrative pages through custom hooks and store selectors.",
      "Built live class features by integrating the Zoom API, automating attendance and course completion tracking to reduce manual administrative effort across hundreds of students.",
      "Developed a React admin dashboard for KVCA, automating cohort management, participant tracking, and lecture scheduling, supporting 20+ e-learning courses annually across 13,000+ learner records.",
      "Developed an end-to-end certification exam registration system for 3,000+ candidates, integrating Google Maps API for venue discovery and multiple payment gateways to facilitate secure transactions.",
    ],
    techStack: ["React", "TypeScript", "Zustand", "Redux", "RESTful APIs", "Zoom API", "PostgreSQL"],
  },
  {
    id: "wetax-govtech",
    company: "National Tax Revenue Mobile Platform (GovTech)",
    role: "Project Manager",
    location: "Seoul, South Korea",
    startDate: "2022-09",
    endDate: "2023-05",
    summary:
      "A mission-critical GovTech mobile application (Wetax) serving 7.8M+ MAU under the South Korean Ministry of the Interior and Safety.",
    bullets: [
      "Supported the development of a mission-critical GovTech mobile application (Wetax), a national tax revenue platform serving 7.8 M+ MAU under the South Korean Ministry of the Interior and Safety.",
      "Led UI/UX prototyping and user flow design for React Native-based modules, streamlining core workflows for digital tax document delivery and income tax reporting systems.",
    ],
    techStack: ["Project Management", "UI/UX Prototyping", "React Native", "User Flows", "GovTech"],
  },
  {
    id: "digital-wallet",
    company: "Mobile Digital Wallet Platform",
    role: "Project Manager",
    location: "Seoul, South Korea",
    startDate: "2022-03",
    endDate: "2022-08",
    summary:
      "Mobile digital wallet platform renewal focused on streamlined transaction security and seamless user onboarding.",
    bullets: [
      "Led the renewal and launch of a React Native-based digital wallet application, achieving a 4.2/5 App Store rating and surpassing 10,000+ users within the initial release phase.",
      "Managed the end-to-end product delivery lifecycle, designing system-level IA and functional storyboards while coordinating QA and release readiness across frontend and backend teams.",
    ],
    techStack: ["Product Delivery", "Information Architecture", "QA & Release", "React Native", "Agile"],
  },
  {
    id: "apac-o2o-ecommerce",
    company: "Global Brand Campaigns & E-Commerce",
    role: "Project Manager",
    location: "Seoul, South Korea",
    startDate: "2017-04",
    endDate: "2017-04",
    summary:
      "Multinational O2O digital campaigns and US cross-border e-commerce web platform localisation.",
    bullets: [
      "Global O2O Sampling Event (Innisfree): Owned the end-to-end execution of a multinational O2O sampling campaign across 6 APAC countries, distributing 14,000+ units and achieving a 100% redemption rate across 5 markets through a digital-to-offline redemption system.",
      "Cross-Border Web Development (Mediheal/Banila Co): Led US market entry e-commerce projects, defining multilingual UX structures and product page architecture while orchestrating global conference calls with international HQ and regional agency teams.",
    ],
    techStack: ["Global O2O", "E-Commerce", "UX Architecture", "Stakeholder Management"],
  },
];