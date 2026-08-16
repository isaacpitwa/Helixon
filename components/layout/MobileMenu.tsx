'use client'

interface MobileMenuProps {
  links: string[]
  open: boolean
  onToggle: () => void
  onClose: () => void
}

export default function MobileMenu({ links, open, onToggle, onClose }: MobileMenuProps) {
  return (
    <>
      <button
        onClick={onToggle}
        className="md:hidden flex flex-col gap-1.5 p-2.5 z-50"
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        <span className={`w-6 h-0.5 bg-ink transition-transform duration-300 ${open ? 'translate-y-2 rotate-45' : ''}`} />
        <span className={`w-6 h-0.5 bg-ink transition-opacity duration-300 ${open ? 'opacity-0' : ''}`} />
        <span className={`w-6 h-0.5 bg-ink transition-transform duration-300 ${open ? '-translate-y-2 -rotate-45' : ''}`} />
      </button>

      <div
        className={`fixed inset-0 z-40 bg-bg flex flex-col justify-center px-[8vw] gap-2 md:hidden transition-transform duration-500 ease-[cubic-bezier(.19,1,.22,1)] ${open ? 'translate-y-0' : '-translate-y-full'}`}
      >
        {[...links, 'Contact'].map((l, i) => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            onClick={onClose}
            className="font-display font-extrabold uppercase text-4xl py-4 border-b border-ink/10 flex justify-between items-center hover:text-teal transition-colors"
          >
            {l} <span className="font-mono text-xs tracking-[0.16em] text-teal">0{i + 1}</span>
          </a>
        ))}
      </div>
    </>
  )
}
