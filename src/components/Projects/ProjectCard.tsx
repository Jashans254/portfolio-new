"use client";

// ============================================================
// ProjectCard — Reusable card for each project
// ============================================================

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "@/data/projects";
import SkillBadge from "@/components/Shared/SkillBadge";
import GlowButton from "@/components/Shared/GlowButton";
import { scaleIn } from "@/lib/animations";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <>
      <motion.div
        variants={scaleIn}
        whileHover={{ y: -6 }}
        onClick={() => setShowDetail(true)}
        className="card-glass glow-border rounded-2xl p-6 cursor-pointer flex flex-col h-full transition-all duration-300 group"
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <span className="font-mono text-xs text-[var(--color-text-muted)] uppercase tracking-widest">
              {project.category}
            </span>
            <h3 className="font-display font-bold text-xl text-[var(--color-text-primary)] mt-1 group-hover:text-[var(--color-accent)] transition-colors">
              {project.title}
            </h3>
          </div>
          <div className="flex gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-2 rounded-lg border border-[var(--color-border)] text-[var(--color-text-muted)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-all text-xs font-mono"
              >
                GH
              </a>
            )}
          </div>
        </div>

        <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed flex-1 mb-4">
          {project.description}
        </p>

        {/* Metrics */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="flex gap-4 mb-4">
            {project.metrics.slice(0, 3).map((m) => (
              <div key={m.label}>
                <p className="font-mono text-sm font-semibold text-[var(--color-accent)]">{m.value}</p>
                <p className="font-mono text-xs text-[var(--color-text-muted)]">{m.label}</p>
              </div>
            ))}
          </div>
        )}

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[var(--color-border)]">
          {project.techStack.slice(0, 5).map((t) => (
            <SkillBadge key={t} name={t} size="sm" />
          ))}
          {project.techStack.length > 5 && (
            <span className="font-mono text-xs text-[var(--color-text-muted)] self-center">
              +{project.techStack.length - 5}
            </span>
          )}
        </div>

        {/* Click hint */}
        <p className="font-mono text-xs text-[var(--color-text-muted)] mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
          Click to expand →
        </p>
      </motion.div>

      {/* Detail Modal */}
      <AnimatePresence>
        {showDetail && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowDetail(false)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="card-glass rounded-2xl border border-[var(--color-border)] p-8 max-w-2xl w-full max-h-[85vh] overflow-y-auto"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <span className="font-mono text-xs text-[var(--color-accent)] uppercase tracking-widest">
                    {project.category}
                  </span>
                  <h2 className="text-2xl font-bold font-display text-[var(--color-text-primary)] mt-1">
                    {project.title}
                  </h2>
                  <p className="text-[var(--color-text-secondary)] text-sm mt-1">{project.tagline}</p>
                </div>
                <button
                  onClick={() => setShowDetail(false)}
                  className="text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] text-2xl leading-none ml-4"
                >
                  ×
                </button>
              </div>

              <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6">
                {project.longDescription || project.description}
              </p>

              {/* Metrics */}
              {project.metrics && (
                <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-[var(--color-bg)] rounded-xl">
                  {project.metrics.map((m) => (
                    <div key={m.label} className="text-center">
                      <p className="font-mono text-lg font-bold text-[var(--color-accent)]">{m.value}</p>
                      <p className="font-mono text-xs text-[var(--color-text-muted)]">{m.label}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Architecture */}
              {project.architectureNotes && (
                <div className="mb-6 p-4 bg-[var(--color-bg)] rounded-xl border-l-2 border-[var(--color-accent)]">
                  <p className="font-mono text-xs text-[var(--color-accent)] mb-2">// architecture notes</p>
                  <p className="text-sm text-[var(--color-text-secondary)]">{project.architectureNotes}</p>
                </div>
              )}

              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((t) => (
                  <SkillBadge key={t} name={t} size="sm" />
                ))}
              </div>

              <div className="flex gap-3">
                {project.githubUrl && (
                  <GlowButton href={project.githubUrl} target="_blank" variant="outline">
                    View on GitHub
                  </GlowButton>
                )}
                {project.liveUrl && (
                  <GlowButton href={project.liveUrl} target="_blank" variant="primary">
                    Live Demo
                  </GlowButton>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
