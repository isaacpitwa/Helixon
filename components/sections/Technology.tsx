import RevealText from '@/components/ui/RevealText'
import FadeIn from '@/components/ui/FadeIn'
import Button from '@/components/ui/Button'
import StackCard from '@/components/ui/StackCard'

export default function Technology() {
  const cards = [
    { index: '01', title: 'HelixEdit™ — Base Editing Suite', desc: 'Programmable base and prime editors with tissue-tuned specificity. sgRNA libraries screened against 19 cell-type epigenomes before a single construct is built.', tags: ['CRISPR', 'Prime Editing', 'Off-Target 0.03%'], img: 'https://picsum.photos/seed/crispr-editing-lab/400/300' },
    { index: '02', title: 'FoldMind™ — Protein Structure AI', desc: 'Generative structure models proposing de-novo binders and enzymes, scored by physics-informed neural potentials and validated in 72-hour expression cycles.', tags: ['De-novo Design', 'Neural Potentials', '72h Loop'], img: 'https://picsum.photos/seed/protein-folding-model/400/300' },
    { index: '03', title: 'Vectra™ — Delivery Engineering', desc: 'Capsid and lipid-nanoparticle libraries evolved by directed selection. Tropism-programmed vectors reaching CNS, retina and muscle with single-dose durability.', tags: ['AAV', 'LNP', 'CNS Tropism'], img: 'https://picsum.photos/seed/viral-vector-design/400/300' },
    { index: '04', title: 'OrganoCore™ — Human-Relevant Screening', desc: 'Patient-derived organoid panels across 14 disease indications replace animal models early, de-risking candidates before first-in-human studies.', tags: ['Organoids', '14 Indications', 'High-Content'], img: 'https://picsum.photos/seed/organoid-screening/400/300' },
  ]

  return (
    <section id="platform" className="py-20 md:py-32 bg-bg-2 border-y border-ink/5">
      <div className="w-[min(1240px,92vw)] mx-auto px-4 md:px-0">
        <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-20 items-start">
          <div className="md:sticky md:top-[calc(var(--nav-h)+2rem)]">
            <FadeIn>
              <p className="sec-label">03 / Technology &amp; Research</p>
              <h2 className="font-display font-extrabold text-3xl md:text-6xl uppercase leading-[1.04] tracking-tight">
                <RevealText lines={['Four engines.', 'One continuum.']} />
              </h2>
              <p className="text-ink-dim mt-6 mb-8 max-w-md">
                Our platform couples computation and biology end-to-end. Designs validated in silico are synthesized, screened in organoids, and refined again — until a candidate is ready for the clinic.
              </p>
              <Button href="#contact" variant="outline">Request the whitepaper ↗</Button>
            </FadeIn>
          </div>

          {/* Direct children of the scroll container so each card's `position: sticky`
              can stack; wrapping them individually would trap each card in its own box. */}
          <div className="flex flex-col gap-6">
            {cards.map((card, i) => (
              <StackCard key={card.index} {...card} topOffset={`calc(var(--nav-h) + 22px + ${i * 24}px)`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
