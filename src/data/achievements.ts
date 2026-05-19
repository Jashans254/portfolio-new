// ============================================================
// ACHIEVEMENTS DATA
// ============================================================

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: "coding" | "hackathon" | "leadership" | "certification" | "recognition";
  date?: string;
  link?: string;
  metric?: string;
}

export const achievements: Achievement[] = [
  {
    id: "leetcode",
    title: "250+ LeetCode Problems",
    description: "Consistent problem solver across arrays, trees, DP, graphs, and system design patterns.",
    icon: "🧩",
    category: "coding",
    metric: "250+",
    link: "https://leetcode.com/",
  },
  {
    id: "hackathon",
    title: "Top 50 / 165 Teams — Hack-n-Win 2.0",
    description: "Competed in Hack-n-Win 2.0, reaching top 50 out of 165 teams with a full-stack solution.",
    icon: "🏆",
    category: "hackathon",
    metric: "Top 50",
  },
  {
    id: "agir-residency",
    title: "Top 5 — AgirLabs Superior Agents Residency",
    description: "Ranked Top 5 globally; pitched AI agent solutions to Animoca Brands and KIP Protocol.",
    icon: "🤖",
    category: "recognition",
    date: "2025",
    metric: "Top 5 / Global",
  },
  {
    id: "gdsc",
    title: "Assistant Cloud Lead — GDSC",
    description: "Delivered Google Cloud labs and guided 30+ peers per session as the Assistant Cloud Lead.",
    icon: "☁️",
    category: "leadership",
    metric: "30+ peers/session",
  },
  {
    id: "hackquest",
    title: "Community Advocate — HackQuest",
    description: "Recognized as Community Advocate for contributions to the HackQuest Web3 developer community.",
    icon: "🌐",
    category: "recognition",
  },
  {
    id: "google-cloud",
    title: "Google Cloud Skill Badges",
    description: "Earned multiple Google Cloud skill badges covering core infrastructure and app development.",
    icon: "🏅",
    category: "certification",
    link: "https://cloud.google.com/",
  },
  {
    id: "ibm-cloud",
    title: "IBM Intro to Cloud — Certified",
    description: "Completed IBM's foundational cloud computing certification covering core cloud concepts.",
    icon: "📜",
    category: "certification",
  },
];
