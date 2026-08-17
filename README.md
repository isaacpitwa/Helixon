# HELIXON Biosciences

A premium, animation-driven biotechnology landing page built for the Creative Frontend Developer role.

## Live Demo
[https://helixon-five.vercel.app/](https://helixon-five.vercel.app/)

## Tech Stack
- **Framework:** Next.js 15 (App Router) + TypeScript
- **Styling:** Tailwind CSS v3 with a design-token theme (`lib/tokens.ts`)
- **Motion:** Framer Motion (scroll reveals, magnetic buttons, count-up stats)
- **Scroll choreography:** GSAP ScrollTrigger + Lenis smooth scroll
- **Interactive visuals:** HTML5 Canvas (hero helix, molecular graph, lineage tree)
- **Typography:** Syne (display) · Instrument Sans (body) · IBM Plex Mono (data)

##  Setup
Requires Node 18.18+ and [pnpm](https://pnpm.io/).

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build    # production build
pnpm start    # serve the production build
```

## Design & Animation Approach

### The Concept: "The Bioluminal Lab"
The visual identity balances the precision of computational biology with the approachability of modern clinical science. The page is built around an alternating rhythm: dark, cinematic bands (deep petrol with teal bioluminescence) alternate with light, rounded "sheets" (paper white with periwinkle and copper accents). This duality mirrors the company's nature — deep, complex data presented through a clean, modern interface.

### Animation Philosophy: Diegetic Motion
Every animation is treated as a "live instrument" rather than mere decoration:
- **The Lineage Tree** grows branch-by-branch, driven entirely by scroll progress (a GSAP-pinned section), visualizing the platform's reach across medical disciplines.
- **The Molecular Graph** uses a custom physics simulation where nodes repel from the user's cursor and emit rings on click.
- **The Hero Helix** uses depth-shaded radial gradients on HTML5 Canvas to create 3D spheres that parallax slightly with mouse movement.

### Engineering & Performance
Next.js (App Router) provides the component architecture, routing, and first-class Vercel deployment; the interactive visuals are hand-written on the Canvas 2D API rather than a charting library, to keep full control of the rendering pipeline.
- **Performance:** Each canvas pauses its `requestAnimationFrame` loop when scrolled out of the viewport via an `IntersectionObserver`, so off-screen visuals cost nothing. Canvas device-pixel-ratio is capped at 2× to prevent GPU overdraw on Retina displays.
- **Accessibility:** Full support for `prefers-reduced-motion` — the helix rotation stops, Lenis smooth scroll is disabled, the sequence-scramble is skipped, and CSS transitions collapse to near-zero duration. Interactive elements use semantic landmarks and ARIA labels; decorative canvases are `aria-hidden`.
- **Motion architecture:** Reveals and micro-interactions run through Framer Motion; the three canvases each own an independent, viewport-gated rAF loop, avoiding layout thrashing during scroll.

## Project Structure
```
app/            App Router entry, global styles
components/
  layout/       Nav, MobileMenu, Footer
  sections/     Hero, Marquee, About, LineageTree, Technology, Capabilities, Impact, FinalCTA
  ui/           Button, RevealText, Scramble, FadeIn, Sheet, Counter, MagneticButton, StackCard, PipelineBar
  canvas/       HelixCanvas, MolecularGraph, LineageTreeCanvas
hooks/          useScrollProgress, useReducedMotion, useInView
lib/            cn (class merge), tokens (design tokens)
```
