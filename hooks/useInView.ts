'use client'
import { useRef } from 'react'
import { useInView as framerUseInView } from 'framer-motion'

export function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = framerUseInView(ref, { once: true, amount: threshold })
  return { ref, inView }
}
