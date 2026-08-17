import Image from 'next/image'
import { cn } from '@/lib/cn'

interface StackCardProps {
  index: string
  title: string
  desc: string
  tags: string[]
  img: string
  topOffset: string
}

export default function StackCard({ index, title, desc, tags, img, topOffset }: StackCardProps) {
  return (
    <article
      className={cn(
        'bg-bg-3 border border-ink/10 rounded-[26px] p-6 md:p-8 grid grid-cols-1 md:grid-cols-[1fr_150px] gap-6 transition-colors hover:border-teal/50 sticky'
      )}
      style={{ top: topOffset }}
    >
      <div>
        <span className="font-display font-extrabold text-3xl md:text-5xl text-transparent [-webkit-text-stroke:1px_#3ce0b8] leading-none">/{index}</span>
        <h3 className="font-display uppercase font-bold text-xl md:text-2xl mt-3 mb-2.5">{title}</h3>
        <p className="text-ink-dim text-sm max-w-md">{desc}</p>
        <div className="flex gap-2 flex-wrap mt-4">
          {tags.map(tag => (
            <span key={tag} className="font-mono text-[10px] tracking-[0.12em] uppercase py-1.5 px-3.5 rounded-full bg-teal-dim text-teal">{tag}</span>
          ))}
        </div>
      </div>
      <div className="relative overflow-hidden rounded-2xl self-start h-[150px]">
        <Image src={img} alt={title} fill sizes="(max-width: 768px) 92vw, 150px" className="object-cover saturate-[.85] hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(.19,1,.22,1)]" />
      </div>
    </article>
  )
}
