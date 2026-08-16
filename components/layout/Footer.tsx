export default function Footer() {
  return (
    <footer className="border-t border-ink/10 py-16 md:py-20 bg-bg">
      <div className="w-[min(1240px,92vw)] mx-auto px-4 md:px-0">
        <div className="grid md:grid-cols-[2fr_1fr_1fr_1.2fr] gap-10 mb-16">
          <div>
            <a href="#top" className="flex items-baseline gap-2.5 font-display font-extrabold text-lg tracking-wide">
              HELIXON<span className="font-mono text-[11px] tracking-[0.16em] uppercase text-teal">/BIOSCIENCES</span>
            </a>
            <p className="text-ink-dim text-sm max-w-xs mt-4">
              Precision biology, engineered. Reading, modelling and rewriting living systems since 2019.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-[11px] tracking-[0.16em] uppercase text-ink-faint mb-5">Explore</h4>
            <ul className="flex flex-col gap-3 text-ink-dim text-sm">
              <li><a href="#about" className="hover:text-teal transition-colors">About</a></li>
              <li><a href="#lineage" className="hover:text-teal transition-colors">Lineage</a></li>
              <li><a href="#platform" className="hover:text-teal transition-colors">Platform</a></li>
              <li><a href="#impact" className="hover:text-teal transition-colors">Impact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[11px] tracking-[0.16em] uppercase text-ink-faint mb-5">Research</h4>
            <ul className="flex flex-col gap-3 text-ink-dim text-sm">
              <li><a href="#" className="hover:text-teal transition-colors">Publications</a></li>
              <li><a href="#" className="hover:text-teal transition-colors">Whitepapers</a></li>
              <li><a href="#" className="hover:text-teal transition-colors">Clinical Trials</a></li>
              <li><a href="#" className="hover:text-teal transition-colors">Data Portal</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[11px] tracking-[0.16em] uppercase text-ink-faint mb-5">Headquarters</h4>
            <ul className="font-mono text-[11px] tracking-[0.08em] text-ink-dim flex flex-col gap-3">
              <li>KRAFTSTRASSE 12, BASEL CH</li>
              <li>+41 61 000 42 42</li>
              <li>47.5596° N, 7.5886° E</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-5 border-t border-ink/10 pt-8 text-ink-faint font-mono text-[10px] tracking-[0.1em] uppercase">
          <span>© 2026 HELIXON BIOSCIENCES — ALL SEQUENCES RESERVED</span>
          <span>ISO 13485 · GMP · HIPAA-ALIGNED</span>
        </div>
      </div>
    </footer>
  )
}
