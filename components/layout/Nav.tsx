'use client'
import { useState, useEffect } from 'react'
import Button from '@/components/ui/Button'
import MobileMenu from './MobileMenu'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['About', 'Lineage', 'Platform', 'Capabilities', 'Impact']

  return (
    <nav
      className={`fixed top-0 inset-x-0 h-[var(--nav-h)] z-50 flex items-center border-b transition-all duration-500 ${
        scrolled ? 'bg-bg/80 backdrop-blur-xl border-ink/5' : 'border-transparent'
      }`}
    >
      <div className="w-[min(1240px,92vw)] mx-auto flex items-center justify-between gap-6 px-4 md:px-0">
        <a href="#top" className="flex items-baseline gap-2.5 font-display font-extrabold text-lg tracking-wide">
          HELIXON<span className="font-mono text-[11px] tracking-[0.16em] uppercase text-teal">/BIOSCIENCES</span>
        </a>

        <ul className="hidden md:flex gap-8 list-none">
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} className="font-mono text-[11px] tracking-[0.14em] uppercase text-ink-dim hover:text-ink relative py-1.5 transition-colors group/link">
                {l}
                <span className="absolute left-0 bottom-0 h-px w-full bg-teal scale-x-0 group-hover/link:scale-x-100 origin-right group-hover/link:origin-left transition-transform duration-500 ease-[cubic-bezier(.19,1,.22,1)]" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button href="#contact" variant="solid">Partner with us</Button>
        </div>

        <MobileMenu
          links={links}
          open={menuOpen}
          onToggle={() => setMenuOpen((v) => !v)}
          onClose={() => setMenuOpen(false)}
        />
      </div>
    </nav>
  )
}
