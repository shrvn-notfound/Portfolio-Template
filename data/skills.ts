/**
 * data/skills.ts — typographic skill lists with honest status tags.
 * PROMPT.md §4.5: NO progress bars, NO skill clouds.
 *
 * Status tags (editable, self-reported — never imply "expert" without
 * a project or certification to back it):
 *   experienced — used regularly
 *   learning    — actively studying now
 *   familiar    — aware of the fundamentals
 *   roadmap     — planned, not started
 */

export type SkillStatus = "experienced" | "learning" | "familiar" | "roadmap";

export interface Skill {
  name: string;
  status: SkillStatus;
  /** One-line tooltip description — §4.5 interaction */
  detail: string;
}

export interface SkillCategory {
  label: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    label: "Programming",
    skills: [
      { name: "Python", status: "experienced", detail: "Scripting, automation, study labs" },
      { name: "C", status: "experienced", detail: "Coursework, memory model fundamentals" },
      { name: "C++", status: "familiar", detail: "Coursework basics, OOP fundamentals" },
      { name: "JavaScript", status: "learning", detail: "Web fundamentals, small exercises" },
    ],
  },
  {
    label: "Cybersecurity",
    skills: [
      { name: "Networking fundamentals", status: "learning", detail: "TCP/IP, DNS, HTTP, packet flow" },
      { name: "Linux", status: "learning", detail: "CLI, permissions, shell basics" },
      { name: "Web security", status: "learning", detail: "OWASP Top 10, request/response model" },
      { name: "Vulnerability assessment", status: "familiar", detail: "Scanning + triage concepts" },
      { name: "Ethical hacking", status: "learning", detail: "Methodology, guided lab practice only" },
    ],
  },
  {
    label: "Tools",
    skills: [
      { name: "Git", status: "experienced", detail: "Version control for all coursework + projects" },
      { name: "GitHub", status: "experienced", detail: "Repositories, issues, collaboration basics" },
      { name: "Wireshark", status: "learning", detail: "Packet inspection & traffic analysis" },
      { name: "Nmap", status: "learning", detail: "Network discovery & port scanning (own labs only)" },
      { name: "Burp Suite", status: "familiar", detail: "Web proxy basics in guided labs" },
      { name: "Kali Linux", status: "learning", detail: "Security lab environment in a VM" },
    ],
  },
];

export const statusTagLabel: Record<SkillStatus, string> = {
  experienced: "[Experienced]",
  learning: "[Learning]",
  familiar: "[Familiar]",
  roadmap: "[Roadmap]",
};
