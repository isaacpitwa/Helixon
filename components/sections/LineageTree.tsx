'use client'
import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import LineageTreeCanvas from '@/components/canvas/LineageTreeCanvas'
import RevealText from '@/components/ui/RevealText'
import { useReducedMotion } from '@/hooks/useReducedMotion'

gsap.registerPlugin(ScrollTrigger)

export default function LineageTree() {
  const sectionRef = useRef<HTMLElement>(null)
  const stickyRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLSpanElement>(null)
  const reduced = useReducedMotion()

  useEffect(() => {
    if (reduced || !sectionRef.current || !stickyRef.current) return
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom bottom',
        pin: stickyRef.current,
        pinSpacing: true,
        onUpdate: (self) => {
          if (progressRef.current) progressRef.current.textContent = String(Math.round(self.progress * 100))
          sectionRef.current?.dispatchEvent(new CustomEvent('tree-progress', { detail: self.progress }))
        },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [reduced])

  return (
    <section
      ref={sectionRef}
      className="relative h-[260vh] bg-bg"
      id="lineage"
      aria-label="Lineage tree — scroll to grow"
    >
      <div ref={stickyRef} className="h-screen relative overflow-hidden">
        <LineageTreeCanvas />
        <div className="absolute top-20 inset-x-0 z-20">
          <div className="w-[min(1240px,92vw)] mx-auto flex justify-between font-mono text-xs tracking-[0.16em] uppercase text-ink-faint px-5 md:px-0">
            <span>FIG. 02 — LINEAGE TREE / SCROLL-DRIVEN GROWTH</span>
            <span>GROWTH <span ref={progressRef}>0</span>%</span>
          </div>
        </div>
        <div className="absolute left-0 right-0 bottom-[5vh] z-20 pointer-events-none px-5 md:px-0">
          <div className="w-[min(1240px,92vw)] mx-auto">
            <RevealText
              lines={['One platform.', 'Every branch of medicine.']}
              className="font-display text-4xl md:text-7xl font-extrabold uppercase leading-[1.04] tracking-tight"
            />
            <p className="mt-4 font-mono text-xs tracking-[0.16em] uppercase text-ink-faint flex items-center gap-2">
              <span className="text-teal animate-bob">↓</span>
              SCROLL — THE TREE GROWS
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
