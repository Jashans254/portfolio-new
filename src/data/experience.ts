// ============================================================
// EXPERIENCE DATA
// Edit here to update timeline without touching UI components.
// ============================================================

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  location: string;
  type: "full-time" | "internship" | "freelance" | "contract";
  startDate: string;
  endDate: string | "Present";
  description: string;
  bullets: string[];
  techStack: string[];
  logo?: string;
  companyUrl?: string;
  highlight?: string; // e.g. "Top 5 Ranked"
}

export const experiences: ExperienceItem[] = [
  {
    id: "quarkxpress",
    company: "QuarkXPress",
    role: "Software Engineering Intern",
    location: "Onsite - Chandigarh, India",
    type: "internship",
    startDate: "Jan 2026",
    endDate: "Jun 2026",
    description:
      "Engineered enterprise-grade localization pipelines and REST APIs for content transformation workflows.",
    bullets: [
      "Engineered a scalable bidirectional XML ↔ XLIFF 2.1 transformation pipeline using XSLT 3.0, enabling seamless CAT tool integration for enterprise localization.",
      "Developed RESTful APIs using Java 17 and Spring Boot to automate export/import workflows, ensuring reliable content transformation and pipeline orchestration.",
      "Transitioned POCs to production by reusing stable modules, optimizing design (Redis → in-memory), and improving system extensibility and efficiency.",
    ],
    techStack: ["Java 17", "Spring Boot", "XSLT 3.0", "XML", "XLIFF 2.1", "REST APIs"],
    companyUrl: "https://www.quark.com",
  },
  {
    id: "codingpandas",
    company: "CodingPandas",
    role: "Full Stack Developer Intern",
    location: "Remote",
    type: "internship",
    startDate: "Oct 2025",
    endDate: "Dec 2025",
    description:
      "Built distributed code execution infrastructure with real-time feedback and full observability.",
    bullets: [
      "Architected a distributed BullMQ/Redis pipeline with Judge0 batching and Cloudflare R2, ensuring 100% submission reliability via stateful polling.",
      "Built real-time code execution feedback using SSE, Redis distributed locks, and HMAC-secured webhooks for sub-second, high-concurrency delivery.",
      "Deployed containerized observability stack (Prometheus, Grafana, Loki) with instrumented Node.js metrics for zero-refactor real-time system monitoring.",
    ],
    techStack: ["Node.js", "BullMQ", "Redis", "Judge0", "SSE", "Prometheus", "Grafana", "Docker"],
  },
  {
    id: "agirlabs",
    company: "Agir Labs (Singapore)",
    role: "AI Agents Intern",
    location: "Remote — Singapore",
    type: "internship",
    startDate: "Jun 2025",
    endDate: "Jul 2025",
    description:
      "Built multi-agent AI pipelines for marketing automation and ranked Top 5 in an international residency.",
    bullets: [
      "Built a marketing AI agent pipeline automating trend analysis, prompt templates, and content generation.",
      "Designed orchestration workflows integrating session management and multi-agent routing.",
      "Ranked Top 5 in Superior Agents Residency, pitching solutions to Animoca Brands and KIP Protocol.",
    ],
    techStack: ["Python", "LangChain", "OpenAI API", "FastAPI", "Multi-agent Systems"],
    highlight: "Top 5 — Superior Agents Residency",
  },
];
