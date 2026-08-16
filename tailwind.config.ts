import type { Config } from 'tailwindcss'
import { colors, easing, fonts } from './lib/tokens'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: [...fonts.display],
        body: [...fonts.body],
        mono: [...fonts.mono],
      },
      colors,
      borderRadius: {
        sheet: '44px',
        pill: '999px',
      },
      transitionTimingFunction: {
        expo: easing.expo,
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        breathe: 'breathe 6s ease-in-out infinite',
        'pulse-ring': 'ring 2.4s cubic-bezier(0.19,1,0.22,1) infinite',
        'pulse-dot': 'dot 1.6s infinite',
        kenburns: 'kenburns 18s ease-in-out infinite alternate',
        cue: 'cue 2.2s cubic-bezier(0.19,1,0.22,1) infinite',
        bob: 'bob 1.8s ease-in-out infinite',
      },
      keyframes: {
        marquee: { '100%': { transform: 'translateX(-50%)' } },
        breathe: {
          '0%,100%': { opacity: '.7', transform: 'translate(-50%,-50%) scale(1)' },
          '50%': { opacity: '1', transform: 'translate(-50%,-50%) scale(1.12)' },
        },
        ring: {
          '0%': { transform: 'scale(1)', opacity: '.7' },
          '100%': { transform: 'scale(1.7)', opacity: '0' },
        },
        dot: {
          '0%,100%': { boxShadow: '0 0 0 0 rgba(60,224,184,.5)' },
          '50%': { boxShadow: '0 0 0 7px rgba(60,224,184,0)' },
        },
        kenburns: {
          from: { transform: 'scale(1)' },
          to: { transform: 'scale(1.1) translate(-2%,2.5%)' },
        },
        cue: {
          '0%': { transform: 'translateY(-100%)' },
          '55%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(100%)' },
        },
        bob: {
          '0%,100%': { transform: 'translateY(-2px)' },
          '50%': { transform: 'translateY(3px)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
