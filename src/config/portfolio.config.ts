// ============================================================
// PORTFOLIO CONFIGURATION - Edit this file to customize
// your portfolio without touching any UI component.
// ============================================================

export const portfolioConfig = {
  // --- Site Metadata ---
  site: {
    name: "Jashanpreet Singh",
    title: "Jashanpreet Singh — Full Stack & AI Engineer",
    description:
      "Final-year CSE student building scalable systems with MERN, AI/GenAI, and Web3 technologies.",
    url: "https://jashanpreet.dev",
    locale: "en_IN",
    keywords: [
      "Full Stack Developer",
      "AI Engineer",
      "MERN Stack",
      "GenAI",
      "Blockchain",
      "Next.js",
    ],
  },

  // --- Author Info ---
  author: {
    name: "Jashanpreet Singh",
    email: "jashanps254@gmail.com",
    phone: "+91 78884 10527",
    location: "India",
    tagline: "Full Stack Engineer & AI Builder",
    bio: "Final-year B.Tech CSE student with a strong foundation in Data Structures, Algorithms, and OOP. Skilled in C++, JavaScript, and Full-Stack Development. Seeking a Software Engineering role to build scalable solutions and contribute to innovative projects.",
    avatar: "/avatar.jpg",
    resumeUrl: "/JashanpreetSingh_Resume.pdf",
  },

  // --- Social Links ---
  socials: {
    github: "https://github.com/Jashans254",
    linkedin: "https://linkedin.com/in/jashanpreet-singh-819077251",
    email: "mailto:jashanps254@gmail.com",
    twitter: "",
    leetcode: "https://leetcode.com/u/jashanps_254",
  },

  // --- Theme ---
  theme: {
    default: "dark" as "dark" | "light",
    accentColor: "#00d4ff",
    secondaryAccent: "#7c3aed",
  },

  // --- Feature Toggles ---
  features: {
    enableParticles: true,
    enableScrollProgress: true,
    enableLoadingScreen: true,
    enableCommandPalette: false,
    enableTerminalMode: false,
    enableBlog: false,
    enableDarkModeToggle: true,
    enableActiveNavTracking: true,
  },

  // --- Navigation ---
  nav: [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Achievements", href: "#achievements" },
    { label: "Contact", href: "#contact" },
  ],

  // --- Typing Animation Strings ---
  typingStrings: [
    "Software Developer",
    "AI & GenAI Builder",
    "MERN Stack Developer",
    "Blockchain Explorer",
    "Open Source Contributor",
  ],

  // --- Section visibility toggles ---
  sections: {
    hero: true,
    about: true,
    skills: true,
    experience: true,
    projects: true,
    achievements: true,
    contact: true,
  },
} as const;

export type PortfolioConfig = typeof portfolioConfig;
