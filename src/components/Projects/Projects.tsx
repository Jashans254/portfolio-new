"use client";

// ============================================================
// Projects Section — Filterable grid with modal details
// ============================================================

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "@/components/Shared/SectionWrapper";
import SectionHeading from "@/components/Shared/SectionHeading";
import ProjectCard from "./ProjectCard";
import { projects, type ProjectCategory } from "@/data/projects";
import { staggerContainer, viewportOnce } from "@/lib/animations";

const ALL = "All";
const categories = [ALL, ...Array.from(new Set(projects.map((p) => p.category)))];

export default function Projects() {
  const [filter, setFilter] = useState<string>(ALL);
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);

  const filtered = projects.filter((p) => {
    const catMatch = filter === ALL || p.category === filter;
    const featuredMatch = !showFeaturedOnly || p.featured;
    return catMatch && featuredMatch;
  });

  return (
    <SectionWrapper id="projects">
      <SectionHeading
        eyebrow="04 / Projects"
        title="Things I've Built"
        subtitle="From distributed infrastructure to AI pipelines — projects I'm proud of."
      />

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`font-mono text-xs px-4 py-2 rounded-full border transition-all duration-200
              ${
                filter === cat
                  ? "border-[var(--color-accent)] text-[var(--color-accent)] bg-[var(--color-accent-dim)]"
                  : "border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-border-hover)] hover:text-[var(--color-text-primary)]"
              }`}
          >
            {cat}
          </button>
        ))}

        <button
          onClick={() => setShowFeaturedOnly((v) => !v)}
          className={`font-mono text-xs px-4 py-2 rounded-full border transition-all duration-200 ml-auto
            ${
              showFeaturedOnly
                ? "border-amber-400 text-amber-400 bg-amber-400/10"
                : "border-[var(--color-border)] text-[var(--color-text-muted)]"
            }`}
        >
          ★ Featured only
        </button>
      </div>

      {/* Project grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={filter + String(showFeaturedOnly)}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          viewport={viewportOnce}
          className="grid md:grid-cols-2 gap-6"
        >
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </AnimatePresence>

      {filtered.length === 0 && (
        <div className="text-center py-20 text-[var(--color-text-muted)] font-mono text-sm">
          No projects match this filter.
        </div>
      )}
    </SectionWrapper>
  );
}
