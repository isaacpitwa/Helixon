import Sheet from '@/components/ui/Sheet'
import RevealText from '@/components/ui/RevealText'
import FadeIn from '@/components/ui/FadeIn'
import Counter from '@/components/ui/Counter'
import PipelineBar from '@/components/ui/PipelineBar'

export default function Impact() {
  const stats = [
    { value: 38, decimals: 0, suffix: '', label: 'Clinical-stage programs' },
    { value: 240, decimals: 0, suffix: '+', label: 'Candidates in pipeline' },
    { value: 99.4, decimals: 1, suffix: '%', label: 'Batch purity, GMP scale' },
    { value: 4.3, decimals: 1, suffix: 'B', label: 'Base pairs analyzed / week' },
  ]

  const pipeline = [
    { phase: 'Discovery', count: 142, width: '100%' },
    { phase: 'Preclinical', count: 61, width: '43%' },
    { phase: 'Phase I', count: 24, width: '17%' },
    { phase: 'Phase II', count: 9, width: '6.3%' },
    { phase: 'Phase III', count: 4, width: '2.8%' },
  ]

  return (
    <Sheet className="!bg-gradient-to-br from-[#edf3ff] via-paper to-[#e9faf3]">
      <div id="impact" className="w-[min(1240px,92vw)] mx-auto px-4 md:px-0">
        <p className="sec-label !text-teal-deep after:!bg-teal-deep">05 / Impact</p>
        <FadeIn>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl uppercase leading-[1.04] tracking-tight text-bg">
            <RevealText lines={['Measured in patients,', 'not press releases.']} />
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-bg/10 border border-bg/10 rounded-[26px] overflow-hidden mt-12 mb-12 md:mb-20">
            {stats.map(stat => (
              <div key={stat.label} className="bg-card p-6 md:p-8">
                <div className="font-display font-extrabold text-3xl md:text-5xl text-bg leading-none">
                  <Counter value={stat.value} decimals={stat.decimals} />
                  <sup className="text-[0.4em] text-copper-deep">{stat.suffix}</sup>
                </div>
                <div className="mt-3 text-bg/60 text-sm max-w-[160px]">{stat.label}</div>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn>
          <h3 className="font-display uppercase font-bold text-xl md:text-2xl mb-6">Pipeline distribution — 2026 Q3</h3>
          <div className="space-y-3">
            {pipeline.map((p, i) => (
              <div key={p.phase} className="grid grid-cols-[90px_1fr_50px] md:grid-cols-[130px_1fr_60px] gap-4 items-center py-3 border-b border-bg/10">
                <span className="font-mono text-[10px] tracking-[0.12em] uppercase text-bg/60">{p.phase}</span>
                <PipelineBar width={p.width} delay={i * 0.12} />
                <span className="font-mono text-copper-deep text-right text-sm">{p.count}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </Sheet>
  )
}
