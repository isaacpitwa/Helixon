'use client'
import { useRef, useState, useEffect, type ReactNode } from 'react'
import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export default function MagneticButton({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const reduced = useReducedMotion()

  useEffect(() => {
    if (reduced || !window.matchMedia('(pointer: fine)').matches) return
    const el = ref.current
    if (!el) return
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect()
      setOffset({
        x: (e.clientX - r.left - r.width / 2) * 0.22,
        y: (e.clientY - r.top - r.height / 2) * 0.35,
      })
    }
    const onLeave = () => setOffset({ x: 0, y: 0 })
    el.addEventListener('pointermove', onMove)
    el.addEventListener('pointerleave', onLeave)
    return () => {
      el.removeEventListener('pointermove', onMove)
      el.removeEventListener('pointerleave', onLeave)
    }
  }, [reduced])

  return (
    <motion.div ref={ref} animate={offset} transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}>
      {children}
    </motion.div>
  )
}
