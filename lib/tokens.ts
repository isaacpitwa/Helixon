/**
 * Design tokens for the HELIXON identity — "bioluminal lab meets clinical sheet".
 * Single source of truth for the palette, easing and font stacks. Consumed by
 * `tailwind.config.ts` so these values stay in sync with the utility classes.
 */

export const colors = {
  bg: { DEFAULT: '#070b14', 2: '#0b1322', 3: '#0e1830' },
  ink: {
    DEFAULT: '#eef2fa',
    dim: 'rgba(238,242,250,0.62)',
    faint: 'rgba(238,242,250,0.38)',
  },
  teal: { DEFAULT: '#3ce0b8', deep: '#0ca789', dim: 'rgba(60,224,184,0.14)' },
  blue: { DEFAULT: '#7d95d6', deep: '#4f6aa5' },
  copper: { DEFAULT: '#e0863c', deep: '#b95e27' },
  paper: '#f5f7fb',
  card: '#ffffff',
} as const

export const fonts = {
  display: ['Syne', 'sans-serif'],
  body: ['Instrument Sans', 'sans-serif'],
  mono: ['IBM Plex Mono', 'monospace'],
} as const

export const easing = {
  expo: 'cubic-bezier(0.19, 1, 0.22, 1)',
} as const
