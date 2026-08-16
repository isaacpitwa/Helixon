'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { cn } from '@/lib/cn'
import Scramble from './Scramble'

interface RevealTextProps {
  lines: string[]
  className?: string
  /** Line index rendered in the teal accent colour. */
  accentIndex?: number
  /** Line index rendered with the ATCG scramble-in effect. */
  scrambleIndex?: number
}

export default function RevealText({ lines, className, accentIndex, scrambleIndex }: RevealTextProps) {
  // Observe the stable outer wrapper, not the inner spans: the inner spans start
  // translated 112% out of their `overflow-hidden` mask, so an observer on them
  // would report zero visible area and the reveal would never fire.
  const ref = useRef<HTMLDivElement>(null)
  // Fire as soon as the block enters the viewport (mirrors the reference's
  // IntersectionObserver rootMargin of -8%), so the reveal can't get stuck
  // hidden when the heading is only partially scrolled into view.
  const inView = useInView(ref, { once: true, margin: '0px 0px -8% 0px' })

  return (
    <div ref={ref} className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden">
          <motion.span
            initial={{ y: '112%' }}
            animate={inView ? { y: 0 } : { y: '112%' }}
            transition={{ duration: 1, ease: [0.19, 1, 0.22, 1], delay: i * 0.09 }}
            className={cn('block', i === accentIndex && 'text-teal')}
          >
            {i === scrambleIndex ? <Scramble text={line} start={inView} /> : line}
          </motion.span>
        </span>
      ))}
    </div>
  )
}
