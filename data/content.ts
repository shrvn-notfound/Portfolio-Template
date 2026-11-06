/**
 * data/content.ts — single source of truth for all site copy.
 * PROMPT.md §11: placeholders are marked with square brackets.
 * NEVER replace them with invented credentials, projects, or links.
 */

export const site = {
  // TODO: replace with your real details
  name: "[YOUR FULL NAME HERE]",
  monogram: "[NN]",
  role: "Aspiring Cybersecurity Engineer",
  studentRole: "B.Tech Information Technology Student",
  email: "[you@domain.com]",
  github: "[github.com/@handle]",
  linkedin: "[linkedin.com/in/handle]",
  university: "[Your University Name]",
  location: "[City, Country]",
  description:
    "Exploring cybersecurity, network security, ethical hacking and secure digital systems through continuous learning and practical projects.",
  lastUpdated: "November 2026",
};

export const hero = {
  greeting: "Hello, I'm",
  headline: site.name,
  subtitle: ["Building a more", "secure digital future."],
  meta: [site.studentRole, site.role],
  description: site.description,
  primaryCta: { label: "View My Projects", href: "#projects" },
  secondaryCta: { label: "Download CV", href: "/cv.pdf" },
  socials: [
    { label: "GitHub", href: site.github },
    { label: "LinkedIn", href: site.linkedin },
  ],
};

export const about = {
  bio: `I'm an information technology student working toward a career in
cybersecurity. My focus is practical, honest learning: understanding how
networks, operating systems, and web applications actually work — and where
they break. I spend my time on coursework, self-study, and hands-on labs,
and I document what I learn in public. I'm early in my journey, and this
site reflects exactly that: real progress, real gaps, no exaggeration.`,
  panels: [
    {
      label: "Academic Background",
      title: "B.Tech in Information Technology",
      body: `Currently studying at ${site.university}. Core coursework in
programming, data structures, computer networks, and operating systems.`,
    },
    {
      label: "Career Interests",
      title: "Security engineering, in practice",
      body: "Network security, ethical hacking, and building secure systems. Interested in security operations, vulnerability assessment, and defense-in-depth engineering.",
    },
    {
      label: "Learning Philosophy",
      title: "Continuous, practical learning",
      body: "Theory only counts when it survives contact with a real system. I learn by doing: labs, small projects, and writing down what broke and why.",
    },
    {
      label: "Professional Goals",
      title: "Cybersecurity engineer",
      body: "Roadmap: CompTIA Security+ → eJPT → OSCP (all planned, none claimed yet). Goal: a security engineering role — internship, graduate program, or full-time — where I can keep learning on real infrastructure.",
    },
  ],
};

export interface Project {
  year: string;
  title: string;
  problem: string;
  description: string;
  implementation: string;
  results: string;
  tech: string[];
  role: string;
  github?: string;
  demo?: string;
}

/**
 * §11 + §4.4: ONLY real projects belong here. Do not fabricate entries.
 * The list is intentionally empty until real projects are added;
 * the section renders the honest empty state below.
 */
export const projects: Project[] = [];

export const projectsEmptyState = {
  message: "No public projects yet. Working on one — check back soon.",
  linkLabel: "Follow what I'm studying →",
  href: "#learning",
};

export const education = [
  {
    period: "2024 — Present",
    degree: "B.Tech in Information Technology",
    institution: site.university,
    detail: "Expected graduation: 2028",
    coursework: [
      "Data Structures",
      "Computer Networks",
      "Operating Systems",
      "Database Systems",
    ],
  },
  {
    period: "2024",
    degree: "Higher Secondary (10+2), Science",
    institution: "[School Name]",
    detail: "Completed 2024",
    coursework: [],
  },
];

export interface Certification {
  name: string;
  provider: string;
  date: string;
  status: "earned" | "in-progress" | "roadmap" | "planning";
  statusLabel: string;
  verification?: string;
}

/** §4.7: never invent credentials — everything below is a declared roadmap. */
export const certifications: Certification[] = [
  {
    name: "CompTIA Security+",
    provider: "CompTIA",
    date: "2026 (Target)",
    status: "roadmap",
    statusLabel: "[Roadmap — not yet earned]",
  },
  {
    name: "eJPT",
    provider: "INE Security",
    date: "2027 (Target)",
    status: "roadmap",
    statusLabel: "[Roadmap — not yet earned]",
  },
  {
    name: "OSCP",
    provider: "OffSec",
    date: "Post-graduation (Target)",
    status: "roadmap",
    statusLabel: "[Roadmap — not yet earned]",
  },
];

export const learningJourney = {
  framing: "What I'm studying this quarter",
  topics: [
    {
      topic: "Networking fundamentals",
      status: "[Currently studying]",
      target: "Proficiency target: Q1 2027",
    },
    {
      topic: "Linux internals",
      status: "[Learning]",
      target: "Proficiency target: Q2 2027",
    },
    {
      topic: "Web security",
      status: "[Learning]",
      target: "Proficiency target: Q3 2027",
    },
  ],
};

export const contact = {
  heading: "Get in touch",
  body: "Open to internships, entry-level and full-time security roles, collaborative research, CTF teams, and study groups. Whether you're hiring, mentoring, or building something secure — I'd like to hear from you.",
  email: site.email,
  github: site.github,
  linkedin: site.linkedin,
  resume: { label: "Download CV", href: "/cv.pdf" },
};

export const nav = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const footer = {
  line: `© 2026 ${site.name}. Built with Next.js + Tailwind + React Three Fiber.`,
  updated: `Last updated: ${site.lastUpdated}`,
};
