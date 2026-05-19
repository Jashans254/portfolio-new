"use client";

// ============================================================
// Contact Section — Form + social links
// ============================================================

import { useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/Shared/SectionWrapper";
import SectionHeading from "@/components/Shared/SectionHeading";
import GlowButton from "@/components/Shared/GlowButton";
import { portfolioConfig } from "@/config/portfolio.config";
import { staggerContainer, fadeInLeft, fadeInRight, viewportOnce } from "@/lib/animations";
import { Mail, CheckCircle, Send, ArrowRight } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";

const SOCIALS = [
  {
    label: "Email",
    value: portfolioConfig.author.email,
    href: portfolioConfig.socials.email,
    icon: <Mail size={24} />,
  },
  {
    label: "GitHub",
    value: "github.com/Jashans254",
    href: portfolioConfig.socials.github,
    icon: <FiGithub size={24} />,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/jashanpreet-singh",
    href: portfolioConfig.socials.linkedin,
    icon: <FiLinkedin size={24} />,
  },
];

type FormState = { name: string; email: string; message: string };
type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch(process.env.NEXT_PUBLIC_FORMSPREE_URL || "", {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" }); // Clear form
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };


  return (
    <SectionWrapper id="contact">
      <SectionHeading
        eyebrow="06 / Contact"
        title="Let's build something."
        subtitle="Open to SWE roles, internships, collaborations, and interesting conversations."
      />

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left: form */}
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {status === "sent" ? (
            <div className="card-glass glow-border rounded-2xl p-10 text-center">
              <CheckCircle className="w-12 h-12 mx-auto mb-4 text-[var(--color-accent)]" />
              <h3 className="font-display font-bold text-xl text-[var(--color-accent)] mb-2">
                Message sent!
              </h3>
              <p className="text-[var(--color-text-secondary)] text-sm">
                I'll get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {(["name", "email"] as const).map((field) => (
                <div key={field}>
                  <label className="font-mono text-xs text-[var(--color-text-muted)] uppercase tracking-widest block mb-2">
                    {field}
                  </label>
                  <input
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    required
                    value={form[field]}
                    onChange={handleChange}
                    placeholder={field === "name" ? "Your name" : "your@email.com"}
                    className="w-full bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-lg px-4 py-3 text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)] transition-colors font-display"
                  />
                </div>
              ))}
              <div>
                <label className="font-mono text-xs text-[var(--color-text-muted)] uppercase tracking-widest block mb-2">
                  message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What are you working on?"
                  className="w-full bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-lg px-4 py-3 text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)] transition-colors font-display resize-none"
                />
              </div>
              <GlowButton
                variant="primary"
                className="w-full justify-center"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Sending..." : <span className="flex items-center gap-2">Send Message <Send size={16} /></span>}
              </GlowButton>
            </form>
          )}
        </motion.div>

        {/* Right: info */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="space-y-4"
        >
          {SOCIALS.map((s) => (
            <motion.a
              key={s.label}
              variants={fadeInRight}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              whileHover={{ x: 6 }}
              className="flex items-center gap-4 p-4 card-glass glow-border rounded-xl group transition-all duration-200"
            >
              <span className="text-2xl text-[var(--color-accent)]">{s.icon}</span>
              <div>
                <p className="font-mono text-xs text-[var(--color-text-muted)] uppercase tracking-widest">
                  {s.label}
                </p>
                <p className="font-display text-sm text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors">
                  {s.value}
                </p>
              </div>
              <span className="ml-auto text-[var(--color-text-muted)] group-hover:text-[var(--color-accent)] transition-colors">
                <ArrowRight size={18} />
              </span>
            </motion.a>
          ))}

          <div className="p-4 card-glass rounded-xl border border-[var(--color-border)] mt-4">
            <p className="font-mono text-xs text-[var(--color-text-muted)] mb-2">// availability</p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm font-display text-[var(--color-text-primary)]">
                Open to full-time SWE roles — graduating 2026
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
