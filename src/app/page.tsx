// ============================================================
// Main Page — Assembles all sections
// To add/remove/reorder sections: edit this file only.
// ============================================================

import type { Metadata } from "next";
import { portfolioConfig } from "@/config/portfolio.config";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Skills from "@/components/Skills/Skills";
import Experience from "@/components/Experience/Experience";
import Projects from "@/components/Projects/Projects";
import Achievements from "@/components/Achievements/Achievements";
import Contact from "@/components/Contact/Contact";

export const metadata: Metadata = {
  title: portfolioConfig.site.title,
  description: portfolioConfig.site.description,
  keywords: [...portfolioConfig.site.keywords],
  authors: [{ name: portfolioConfig.author.name }],
  openGraph: {
    title: portfolioConfig.site.title,
    description: portfolioConfig.site.description,
    url: portfolioConfig.site.url,
    type: "website",
  },
};

export default function Home() {
  const { sections } = portfolioConfig;

  return (
    <main className="relative">
      <Navbar />
      {sections.hero && <Hero />}
      {sections.about && <About />}
      {sections.skills && <Skills />}
      {sections.experience && <Experience />}
      {sections.projects && <Projects />}
      {sections.achievements && <Achievements />}
      {sections.contact && <Contact />}
      <Footer />
    </main>
  );
}
