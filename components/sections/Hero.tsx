'use client'
import { useEffect, useState } from 'react'
import Button from '@/components/ui/Button'
import RevealText from '@/components/ui/RevealText'
import FadeIn from '@/components/ui/FadeIn'
import HelixCanvas from '@/components/canvas/HelixCanvas'

export default function Hero() {
  const [seq, setSeq] = useState('ATGCGTACG')

  useEffect(() => {
    const interval = setInterval(() => {
      setSeq(prev => (prev + 'ATCG'[Math.floor(Math.random() * 4)]).slice(-34))
    }, 130)
    return () => clearInterval(interval)
  }, [])

  return (
    <header id="top" className="min-h-screen flex flex-col justify-between relative pt-[var(--nav-h)] bg-[radial-gradient(1000px_640px_at_76%_26%,rgba(60,224,184,0.10),transparent_60%),radial-gradient(760px_520px_at_8%_92%,rgba(125,149,214,0.10),transparent_60%),#070b14]">
      <HelixCanvas />

      <div className="w-[min(1240px,92vw)] mx-auto px-4 md:px-0 relative z-10 pb-10 md:pb-16">
        <FadeIn>
          <p className="font-mono text-[11px] tracking-[0.16em] uppercase text-teal mb-6 flex items-center gap-4">
            <span className="w-11 h-px bg-teal" /> EST. 2019 · CAMBRIDGE / BASEL / SINGAPORE
          </p>
        </FadeIn>

        <h1 className="font-display font-extrabold text-[clamp(2.8rem,min(10vw,calc(24vh-106px)),11rem)] leading-[1.04] tracking-tight uppercase w-fit max-w-[94vw]">
          <RevealText lines={['We program', 'living systems.']} accentIndex={1} scrambleIndex={1} className="block" />
        </h1>

        <FadeIn delay={0.2}>
          <p className="max-w-xl text-ink-dim mt-6 mb-8 text-base md:text-lg">
            Helixon is a computational biotechnology company engineering gene therapies, proteins and delivery vehicles from first principles — from sequence to clinic.
          </p>
        </FadeIn>

        <FadeIn delay={0.3} className="flex gap-4 flex-wrap items-center">
          <Button href="#platform" variant="solid">Explore the platform</Button>
          <a href="#lineage" className="group inline-flex items-center gap-3 font-mono text-[11px] tracking-[0.14em] uppercase text-ink-dim">
            <i className="not-italic relative grid place-items-center w-[46px] h-[46px] rounded-full border border-ink/15 text-ink-dim transition-colors group-hover:border-teal group-hover:text-teal">
              ▶
              <span aria-hidden className="absolute -inset-px rounded-full border border-teal opacity-0 animate-pulse-ring" />
            </i>
            Watch the lineage grow
          </a>
        </FadeIn>
      </div>

      {/* Scroll cue */}
      <div className="hidden md:flex absolute right-[clamp(16px,4vw,48px)] bottom-[130px] z-10 flex-col items-center gap-2.5 text-ink-faint font-mono text-[11px] tracking-[0.14em] uppercase" aria-hidden="true">
        SCROLL
        <span className="w-px h-14 bg-ink/15 relative overflow-hidden">
          <span className="absolute inset-0 bg-teal animate-cue" />
        </span>
      </div>

      {/* HUD Strip */}
      <div className="relative z-10 border-t border-ink/10 grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="p-4 md:px-10 border-b md:border-b-0 md:border-r border-ink/10 font-mono text-[11px] tracking-[0.12em]">
          <span className="text-ink-faint block mb-1.5">SEQ.RUN — LIVE READOUT</span>
          <span className="text-teal whitespace-nowrap overflow-hidden text-ellipsis block">{seq}</span>
        </div>
        <div className="p-4 md:px-10 border-b md:border-b-0 md:border-r border-ink/10 font-mono text-[11px] tracking-[0.12em]">
          <span className="text-ink-faint block mb-1.5">THROUGHPUT</span>
          <span className="text-teal">4.3B BP / WEEK</span>
        </div>
        <div className="p-4 md:px-10 font-mono text-[11px] tracking-[0.12em] flex items-center md:items-start flex-col md:flex-col">
          <span className="text-ink-faint block mb-1.5">STATUS</span>
          <span className="text-teal flex items-center">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-teal mr-2 animate-pulse-dot" />
            SEQUENCER ACTIVE — BAY 04
          </span>
        </div>
      </div>
    </header>
  )
}
