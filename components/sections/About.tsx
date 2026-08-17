import Sheet from '@/components/ui/Sheet'
import RevealText from '@/components/ui/RevealText'
import FadeIn from '@/components/ui/FadeIn'
import MolecularGraph from '@/components/canvas/MolecularGraph'

export default function About() {
  return (
    <Sheet>
      <div id="about" className="w-[min(1240px,92vw)] mx-auto px-4 md:px-0">
        <p className="sec-label !text-teal-deep after:!bg-teal-deep">01 / About — The Innovation Imperative</p>
        <div className="grid md:grid-cols-[1.05fr_0.95fr] gap-10 md:gap-20 items-start">
          <div>
            <FadeIn>
              <h2 className="font-display font-extrabold text-3xl md:text-6xl uppercase leading-[1.04] tracking-tight text-bg">
                <RevealText lines={['Biology is software.', 'We write it carefully.']} />
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="mt-6 text-bg/70 max-w-lg">
                Every cell runs on code. At Helixon we treat the genome as an engineering substrate — <strong className="text-bg font-semibold">reading it at scale, modelling it in silicon, and editing it with nucleotide-level precision</strong> to build therapies that were impossible a decade ago.
              </p>
            </FadeIn>
            <div className="mt-10 border-t border-bg/10">
              {[
                { idx: '/01', title: 'Precision Editing', desc: 'Base and prime editing with off-target rates below 0.03% across validated loci.' },
                { idx: '/02', title: 'In-Silico Design', desc: 'Generative protein and vector models trained on 40M+ proprietary assay readouts.' },
                { idx: '/03', title: 'Scalable Manufacturing', desc: 'Continuous-flow GMP production across 12 facilities on three continents.' },
              ].map((item, i) => (
                <FadeIn key={item.idx} delay={i * 0.1}>
                  <div className="grid grid-cols-[60px_1fr_auto] gap-4 items-baseline py-5 border-b border-bg/10 rounded-xl hover:pl-4 transition-all duration-500 ease-[cubic-bezier(.19,1,.22,1)] hover:bg-gradient-to-r hover:from-teal/15 hover:to-transparent group">
                    <span className="font-mono text-teal-deep text-[11px]">{item.idx}</span>
                    <div>
                      <h3 className="font-display uppercase text-lg md:text-xl font-bold mb-1">{item.title}</h3>
                      <p className="text-bg/60 text-sm">{item.desc}</p>
                    </div>
                    <span className="text-copper-deep transition-transform group-hover:translate-x-1.5">→</span>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <FadeIn>
              <figure className="overflow-hidden rounded-[26px] shadow-2xl shadow-bg/20">
                <img src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&q=80" alt="Research scientist inside a Helixon genomics laboratory" loading="lazy" className="w-full aspect-[4/5] object-cover saturate-[.9] contrast-[1.05] animate-kenburns" />
              </figure>
              <figcaption className="flex justify-between px-1 pt-3 text-bg/40 font-mono text-[10px] tracking-[0.16em] uppercase">
                <span>FIG. 00 — GENOMICS CORE, BASEL</span><span>35mm / f1.8</span>
              </figcaption>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="border border-bg/10 rounded-[26px] bg-card overflow-hidden shadow-xl shadow-bg/10">
                <header className="flex justify-between p-3 px-4 border-b border-bg/10 text-bg/40 font-mono text-[10px] tracking-[0.16em] uppercase">
                  <span>FIG. 01 — MOLECULAR GRAPH</span><em className="text-teal-deep not-italic">INTERACT · MOVE / CLICK</em>
                </header>
                <MolecularGraph />
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </Sheet>
  )
}
