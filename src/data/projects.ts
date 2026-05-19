// ============================================================
// PROJECTS DATA
// Add/remove/edit projects here. UI automatically updates.
// ============================================================

export type ProjectCategory =
  | "Full Stack"
  | "AI/ML"
  | "DevOps"
  | "Blockchain"
  | "Tools";

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription?: string;
  techStack: string[];
  category: ProjectCategory;
  liveUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
  metrics?: { label: string; value: string }[];
  featured: boolean;
  status: "completed" | "in-progress" | "archived";
  architectureNotes?: string;
}

export const projects: Project[] = [
  {
    id: "chatster",
    title: "Chatster",
    tagline: "Real-time Social Media Platform",
    description:
      "Full-featured social platform with real-time chat, reels, follow systems, and secure JWT auth.",
    longDescription:
      "Chatster is a full-stack social media platform built with the MERN stack. It features real-time messaging powered by Socket.io, a cloud media pipeline via Cloudinary, and a robust follow/search/discovery system. JWT-based authentication ensures secure sessions.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "Cloudinary", "JWT"],
    category: "Full Stack",
    githubUrl: "https://github.com/Jashans254",
    featured: true,
    status: "completed",
    metrics: [
      { label: "Real-time Latency", value: "<100ms" },
      { label: "Auth Method", value: "JWT" },
      { label: "Media Storage", value: "Cloudinary" },
    ],
    architectureNotes:
      "WebSocket layer via Socket.io for pub/sub messaging. Cloudinary as CDN for image/video. MongoDB Atlas for scalable NoSQL storage.",
  },
  {
    id: "code-submission-engine",
    title: "Code Submission Engine",
    tagline: "Distributed Online Judge Pipeline",
    description:
      "Architected a BullMQ/Redis pipeline with Judge0 batching and 100% submission reliability via stateful polling.",
    longDescription:
      "Built at CodingPandas — a distributed code execution engine using BullMQ for job queuing, Judge0 for sandboxed execution, Cloudflare R2 for result storage, and SSE for real-time feedback. Observability stack with Prometheus, Grafana, and Loki.",
    techStack: ["Node.js", "BullMQ", "Redis", "Judge0", "SSE", "Prometheus", "Grafana", "Loki", "Docker"],
    category: "DevOps",
    githubUrl: "https://github.com/Jashans254",
    featured: true,
    status: "completed",
    metrics: [
      { label: "Submission Reliability", value: "100%" },
      { label: "Feedback Latency", value: "<1s" },
      { label: "Stack", value: "Containerized" },
    ],
    architectureNotes:
      "BullMQ workers + Redis distributed locks. HMAC-secured webhooks for Judge0 callbacks. Prometheus metrics exposed from Node.js instrumentation. Loki for log aggregation.",
  },
  {
    id: "marketing-ai-agent",
    title: "Marketing AI Agent",
    tagline: "Multi-agent AI pipeline for content automation",
    description:
      "Built a marketing AI agent pipeline automating trend analysis, prompt templates, and content generation at Agir Labs.",
    longDescription:
      "Designed orchestration workflows integrating session management and multi-agent routing for content marketing automation. Ranked Top 5 in Superior Agents Residency, pitching to Animoca Brands and KIP Protocol.",
    techStack: ["Python", "LangChain", "OpenAI API", "Multi-agent", "FastAPI"],
    category: "AI/ML",
    githubUrl: "https://github.com/Jashans254",
    featured: true,
    status: "completed",
    metrics: [
      { label: "Residency Rank", value: "Top 5" },
      { label: "Automations", value: "3 pipelines" },
      { label: "Audience", value: "Animoca Brands" },
    ],
    architectureNotes:
      "Multi-agent routing with session context. LLM-powered trend ingestion → content generation pipeline. Modular prompt templates for reuse.",
  },
  {
    id: "xliff-pipeline",
    title: "XML ↔ XLIFF Pipeline",
    tagline: "Enterprise localization transformation engine",
    description:
      "Scalable bidirectional XML ↔ XLIFF 2.1 transformation pipeline for QuarkXPress enterprise CAT tool integration.",
    longDescription:
      "Engineered at QuarkXPress using XSLT 3.0 for bidirectional XML↔XLIFF 2.1 transformations. Exposed RESTful APIs via Spring Boot to automate export/import workflows with optimized in-memory processing.",
    techStack: ["Java 17", "Spring Boot", "XSLT 3.0", "REST APIs", "XML", "XLIFF 2.1"],
    category: "Tools",
    featured: false,
    status: "completed",
    metrics: [
      { label: "Format", value: "XLIFF 2.1" },
      { label: "Optimization", value: "Redis→In-memory" },
      { label: "Integration", value: "CAT Tools" },
    ],
    architectureNotes:
      "XSLT transformation layer decoupled from API layer. Spring Boot REST endpoints for CI/CD pipeline orchestration. Reusable stable modules from POC.",
  },
];
