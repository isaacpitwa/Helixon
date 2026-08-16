'use client'
import { useEffect, useState } from 'react'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const GLYPHS = 'ATCGATCG≡·/\\01'

/**
 * Reveals `text` with a genomic (ATCG) scramble-in, resolving left to right.
 * Renders the final text on the server and until `start` flips true, so there
 * is no hydration mismatch and reduced-motion users see the plain text.
 */
export default function Scramble({ text, start = true }: { text: string; start?: boolean }) {
  const [out, setOut] = useState(text)
  const reduced = useReducedMotion()

  useEffect(() => {
    if (reduced || !start) {
      setOut(text)
      return
    }
    let raf = 0
    let f = 0
    const total = text.length * 3 + 12
    const tick = () => {
      let s = ''
      for (let i = 0; i < text.length; i++) {
        s += text[i] === ' ' ? ' ' : f / 3 > i ? text[i] : GLYPHS[(Math.random() * GLYPHS.length) | 0]
      }
      setOut(s)
      if (f++ < total) raf = requestAnimationFrame(tick)
      else setOut(text)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [text, reduced, start])

  return <>{out}</>
}
