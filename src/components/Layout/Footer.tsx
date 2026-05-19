"use client";

import { portfolioConfig } from "@/config/portfolio.config";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-[var(--color-text-muted)]">
          © {new Date().getFullYear()} {portfolioConfig.author.name}. Built with Next.js &amp; ❤️
        </p>
        <div className="flex gap-6">
          {Object.entries(portfolioConfig.socials)
            .filter(([, v]) => v)
            .map(([key, href]) => (
              <a
                key={key}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors capitalize"
              >
                {key}
              </a>
            ))}
        </div>
      </div>
    </footer>
  );
}
