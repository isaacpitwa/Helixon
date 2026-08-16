# HELIXON Biosciences

A premium, animation-driven biotechnology landing page for a fictional
computational biology company. Built as Task 01 for the Creative Frontend
Developer role.

## Stack

- **Framework:** Next.js 15 (App Router) + TypeScript
- **Styling:** Tailwind CSS v3 with design-token theme
- **Motion:** Framer Motion (component reveals, magnetic buttons)
- **Scroll choreography:** GSAP ScrollTrigger + Lenis smooth scroll
- **Interactive visuals:** HTML Canvas (helix, molecular graph, lineage tree)
- **Typography:** Syne (display) · Instrument Sans (body) · IBM Plex Mono (data)

## Getting started

```bash
pnpm install
pnpm dev         # http://localhost:3000
pnpm build       # production build
pnpm start       # serve the build
```

## Project structure

```
app/            App Router entry, global styles
components/
  layout/       Nav, MobileMenu, Footer
  sections/     Hero, Marquee, About, LineageTree, Technology, Capabilities, Impact, FinalCTA
  ui/           Button, RevealText, FadeIn, Sheet, Counter, MagneticButton, StackCard
  canvas/       HelixCanvas, MolecularGraph, LineageTreeCanvas
hooks/          useScrollProgress, useReducedMotion, useInView
lib/            cn (class merge), tokens (design tokens)
```

## Accessibility

Every animation respects `prefers-reduced-motion`: canvas loops idle, smooth scroll is
disabled, and transitions collapse to near-zero duration.
