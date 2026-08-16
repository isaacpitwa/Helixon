'use client'
import { motion } from 'framer-motion'

/** A pipeline distribution bar that fills from 0 to `width` when scrolled into view. */
export default function PipelineBar({ width, delay = 0 }: { width: string; delay?: number }) {
  return (
    <div className="h-2.5 rounded-md bg-bg/5 relative overflow-hidden">
      <motion.div
        className="absolute inset-y-0 left-0 rounded-md bg-gradient-to-r from-teal to-blue"
        initial={{ width: 0 }}
        whileInView={{ width }}
        viewport={{ once: true, margin: '0px 0px -12% 0px' }}
        transition={{ duration: 1.4, ease: [0.19, 1, 0.22, 1], delay }}
      />
    </div>
  )
}
