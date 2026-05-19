# Jashanpreet Singh — Developer Portfolio

A premium, production-grade developer portfolio built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Fully modular, data-driven, and designed to be easily extended.

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run dev server
npm run dev

# 3. Open in browser
http://localhost:3000
```

---

## Project Structure

```
src/
├── app/                      # Next.js App Router
│   ├── layout.tsx            # Root layout (fonts, theme)
│   └── page.tsx              # Main page (assembles sections)
│
├── components/               # All UI components
│   ├── Hero/                 # Hero section
│   ├── About/                # About section
│   ├── Skills/               # Skills visualization
│   ├── Experience/           # Timeline layout
│   ├── Projects/             # Project grid + modal
│   │   ├── Projects.tsx      # Section with filters
│   │   └── ProjectCard.tsx   # Individual card + detail modal
│   ├── Achievements/         # Achievements grid
│   ├── Contact/              # Contact form + socials
│   ├── Shared/               # Reusable UI primitives
│   │   ├── SectionWrapper.tsx
│   │   ├── SectionHeading.tsx
│   │   ├── GlowButton.tsx
│   │   └── SkillBadge.tsx
│   └── Layout/
│       ├── Navbar.tsx        # Fixed nav with scroll tracking
│       └── Footer.tsx
│
├── config/
│   └── portfolio.config.ts   # ← MAIN CONFIG FILE (edit this)
│
├── data/                     # All content data (edit to update content)
│   ├── projects.ts
│   ├── skills.ts
│   ├── experience.ts
│   └── achievements.ts
│
├── hooks/                    # Custom React hooks
│   ├── useActiveSection.ts   # Active nav tracking
│   ├── useScrollProgress.ts  # Scroll progress bar
│   └── useTypingEffect.ts    # Hero typing animation
│
├── lib/
│   ├── animations.ts         # Framer Motion presets
│   └── utils.ts              # Utility helpers
│
└── styles/
    └── globals.css           # CSS variables (design tokens)
```

---

## How to Customize

### Change personal info
Edit `src/config/portfolio.config.ts`:
```ts
author: {
  name: "Your Name",
  email: "you@example.com",
  // ...
}
```

### Add a project
Edit `src/data/projects.ts` — add a new object to the `projects` array:
```ts
{
  id: "my-new-project",
  title: "My New Project",
  description: "...",
  techStack: ["React", "Node.js"],
  category: "Full Stack",
  featured: true,
  status: "completed",
}
```

### Add a skill
Edit `src/data/skills.ts` — add to the relevant category's `skills` array.

### Add an experience
Edit `src/data/experience.ts` — prepend a new `ExperienceItem` to the array.

### Toggle sections on/off
In `portfolio.config.ts`:
```ts
sections: {
  blog: false,    // disable blog section
  projects: true, // keep projects
}
```

### Change theme accent color
In `src/styles/globals.css`:
```css
:root {
  --color-accent: #00d4ff;    /* change to any color */
  --color-secondary: #7c3aed;
}
```

### Disable animations
In `portfolio.config.ts`:
```ts
features: {
  enableScrollProgress: false,
  enableParticles: false,
}
```

---

## Design System

### Typography
- **Display/Headings**: Syne — geometric, modern, distinctive
- **Monospace**: JetBrains Mono — developer-centric labels, code
- **Serif**: Instrument Serif — italic accent text

### Color System (CSS Variables)
```
--color-bg           Dark background
--color-bg-secondary Slightly lighter bg
--color-bg-card      Card surfaces
--color-accent       Primary accent (cyan)
--color-secondary    Purple accent
--color-tertiary     Amber accent
--color-text-primary Bright white text
--color-text-secondary Muted body text
--color-text-muted   Very dim text
```

### Design Tokens Location
All design tokens live in `src/styles/globals.css`. Swap them globally in one place.

---

## Animation System

All animations are centralized in `src/lib/animations.ts`.

### Available Presets
```ts
import {
  fadeInUp,            // Fade up (most used)
  fadeInLeft,          // Slide from left
  fadeInRight,         // Slide from right
  scaleIn,             // Scale from small
  staggerContainer,    // Wraps staggered children
  floatAnimation,      // Infinite floating bob
  glowPulse,           // Glow pulse loop
  scaleOnHover,        // Hover micro-interaction
} from "@/lib/animations";
```

### Usage Pattern
```tsx
<motion.div
  variants={staggerContainer}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  <motion.p variants={fadeInUp}>Content</motion.p>
  <motion.p variants={fadeInUp}>More content</motion.p>
</motion.div>
```

To change animations site-wide, edit the presets in `animations.ts`.

---

## Adding New Sections

1. Create `src/components/NewSection/NewSection.tsx`
2. Add data to `src/data/newSection.ts`
3. Add config toggle in `portfolio.config.ts`
4. Import and render in `src/app/page.tsx`

---

## Future Expansion Paths

| Feature | How to Add |
|---|---|
| Blog | Create `/app/blog/` route + markdown MDX files |
| AI Chatbot | Add API route `/api/chat` + chat widget component |
| CMS | Connect Sanity/Contentful, replace data files with API calls |
| Analytics | Add Vercel Analytics or PostHog via layout.tsx |
| Dark/Light toggle | Read `portfolioConfig.theme.default`, toggle `data-theme` on `<html>` |
| Admin panel | Separate Next.js route with auth |

---

## Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify / Static
```bash
npm run build
# Deploy .next/ or export as static
```

---

## Dependencies

| Package | Version | Purpose |
|---|---|---|
| next | ^14.2 | Framework |
| react | ^18.3 | UI |
| framer-motion | ^11.3 | Animations |
| tailwindcss | ^3.4 | Utility CSS |
| typescript | ^5.4 | Type safety |
| clsx | ^2.1 | Class merging |
| tailwind-merge | ^2.4 | Tailwind conflict resolution |
