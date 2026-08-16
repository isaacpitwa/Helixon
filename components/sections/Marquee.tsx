export default function Marquee() {
  const items = ['GENE THERAPY', 'mRNA DESIGN', 'CRISPR DELIVERY', 'PROTEIN FOLDING', 'ORGANOID MODELS', 'BIOINFORMATICS', 'VECTOR ENGINEERING', 'PRECISION EDITING']
  const track = [...items, ...items]
  return (
    <div className="border-y border-ink/10 overflow-hidden bg-bg-2 group/marquee">
      <div className="flex w-max animate-marquee group-hover/marquee:[animation-play-state:paused]">
        {track.map((item, i) => (
          <span key={i} className="font-mono text-[11px] tracking-[0.22em] uppercase py-4 whitespace-nowrap text-ink-dim px-4">
            {item} <span className="text-teal font-normal px-5">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
