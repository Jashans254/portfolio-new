// ============================================================
// SKILLS DATA
// Add/remove skills here. Each category renders independently.
// ============================================================

export type SkillLevel = "expert" | "advanced" | "intermediate" | "learning";

export interface Skill {
  name: string;
  level: SkillLevel;
  icon?: string; // emoji or icon key
}

export interface SkillCategory {
  id: string;
  label: string;
  icon: string;
  color: string; // tailwind accent color class
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    label: "Languages",
    icon: "⌨️",
    color: "cyan",
    skills: [
      { name: "JavaScript", level: "expert" },
      { name: "TypeScript", level: "advanced" },
      { name: "Python", level: "advanced" },
      { name: "Java", level: "intermediate" },
      { name: "C++", level: "advanced" },
      { name: "HTML5/CSS3", level: "expert" },
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    icon: "🎨",
    color: "violet",
    skills: [
      { name: "React.js", level: "expert" },
      { name: "Next.js", level: "advanced" },
      { name: "Tailwind CSS", level: "advanced" },
      { name: "Framer Motion", level: "intermediate" },
      { name: "Socket.io (client)", level: "advanced" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    icon: "⚙️",
    color: "emerald",
    skills: [
      { name: "Node.js", level: "expert" },
      { name: "Express.js", level: "expert" },
      { name: "Spring Boot", level: "intermediate" },
      { name: "REST APIs", level: "expert" },
      { name: "BullMQ", level: "advanced" },
      { name: "WebSockets", level: "advanced" },
    ],
  },
  {
    id: "databases",
    label: "Databases & Cloud",
    icon: "🗄️",
    color: "amber",
    skills: [
      { name: "MongoDB", level: "expert" },
      { name: "MySQL", level: "advanced" },
      { name: "Redis", level: "advanced" },
      { name: "Cloudinary", level: "advanced" },
      { name: "Cloudflare R2", level: "intermediate" },
    ],
  },
  {
    id: "ai",
    label: "AI / GenAI",
    icon: "🤖",
    color: "pink",
    skills: [
      { name: "LangChain", level: "advanced" },
      { name: "OpenAI API", level: "advanced" },
      { name: "Multi-agent Systems", level: "intermediate" },
      { name: "Prompt Engineering", level: "advanced" },
      { name: "RAG", level: "learning" },
    ],
  },
  {
    id: "devops",
    label: "DevOps & Tools",
    icon: "🛠️",
    color: "sky",
    skills: [
      { name: "Docker", level: "advanced" },
      { name: "Git/GitHub", level: "expert" },
      { name: "Prometheus", level: "intermediate" },
      { name: "Grafana", level: "intermediate" },
      { name: "Loki", level: "intermediate" },
      { name: "Postman", level: "expert" },
    ],
  },
];

// Flat list for quick lookups
export const allSkills = skillCategories.flatMap((c) => c.skills);
