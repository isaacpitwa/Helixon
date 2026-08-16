'use client'
import { motion } from 'framer-motion'

export default function FadeIn({
  children, delay = 0, className = '',
}: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -8% 0px' }}
      transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
