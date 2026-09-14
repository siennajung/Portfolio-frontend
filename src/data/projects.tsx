// src/data/projects.ts

export interface Project {
  id: string;
  title: string;
  event?: string;
  role?: string;
  startDate: string;
  endDate: string;
  techStack: string[];
  description: string;
  bullets: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: "london-hackathon-project",
    title: "VibeFlow London",
    event: "London Hackathon 2026",
    role: "Frontend Lead · 3-person team",
    startDate: "2026-06",
    endDate: "2026-06",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Zustand"],
    description:
      "A real-time collaborative mood and activity board built within a 24-hour hackathon window.",
    bullets: [
      "Architected a modular Next.js application, implementing client-side global state management using Zustand for multi-user synchronization.",
      "Delivered an accessible, mobile-first responsive interface with Tailwind CSS under strict time constraints, leading the frontend engineering to a successful pitch.",
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  
  {
    id: "free-uk-genealogy",
    title: "Database Schema Modernisation",
    event: "Free UK Genealogy",
    role: "Volunteer Software Engineer",
    startDate: "2026-06",
    endDate: "Present",
    techStack: ["Ruby on Rails", "PostgreSQL", "Git"],
    description:
      "An open-source public archive initiative digitising historical transcription records across the UK.",
    bullets: [
      "Participated in database schema refactoring and query tuning to enhance retrieval speeds across millions of public historical records.",
      "Collaborated through asynchronous code reviews and continuous integration pipelines within an international open-source contributor community.",
    ],
    githubUrl: "https://github.com",
  },
];