import Sheet from '@/components/ui/Sheet'
import RevealText from '@/components/ui/RevealText'
import FadeIn from '@/components/ui/FadeIn'

export default function Capabilities() {
  const caps = [
    { icon: '⌬', title: 'Discovery & Target ID', desc: 'Multi-omics target discovery with causal-inference pipelines across 2.1M patient records.' },
    { icon: '✚', title: 'Gene Therapy Design', desc: 'End-to-end construct engineering: editing payloads, regulatory cassettes, safety switches.' },
    { icon: '∿', title: 'mRNA Engineering', desc: 'Sequence-optimized transcripts with modified UTRs for sustained, tissue-specific expression.' },
    { icon: '⌁', title: 'Bioinformatics & AI', desc: 'Foundation models for genomics, plus federated learning across partner hospital networks.' },
    { icon: '❍', title: 'Preclinical & GLP', desc: 'In-house GLP toxicology and biodistribution suites accelerating IND-enabling packages.' },
    { icon: '⬡', title: 'CDMO Manufacturing', desc: 'Continuous-flow vector and LNP manufacturing with 99.4% batch purity, at clinical scale.' },
  ]

  return (
    <Sheet>
      <div id="capabilities" className="w-[min(1240px,92vw)] mx-auto px-4 md:px-0">
        <p className="sec-label !text-teal-deep after:!bg-teal-deep">04 / Capabilities</p>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-10 md:mb-16">
          <FadeIn>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl uppercase leading-[1.04] tracking-tight text-bg">
              <RevealText lines={['Full-stack biology,', 'under one roof.']} />
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-bg/60 max-w-sm">From target identification through GMP release — one team across the entire value chain.</p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {caps.map((cap, i) => (
            <FadeIn key={cap.title} delay={i * 0.05}>
              <div className="relative bg-card border border-bg/10 rounded-3xl p-6 md:p-8 min-h-[260px] flex flex-col transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-bg/10 group">
                <div className={`w-11 h-11 rounded-2xl grid place-items-center text-xl text-white mb-auto ${i % 2 === 0 ? 'bg-gradient-to-br from-teal to-blue-deep' : 'bg-gradient-to-br from-copper to-copper-deep'}`}>
                  {cap.icon}
                </div>
                <span className="font-mono text-[10px] text-bg/40 mt-8">/0{i + 1}</span>
                <h3 className="font-display uppercase font-bold text-lg md:text-xl mt-2 mb-2.5">{cap.title}</h3>
                <p className="text-bg/60 text-sm">{cap.desc}</p>
                <span className="mt-4 text-teal-deep font-mono text-[10px] tracking-[0.14em] flex gap-2 opacity-0 translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                  EXPLORE →
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </Sheet>
  )
}
