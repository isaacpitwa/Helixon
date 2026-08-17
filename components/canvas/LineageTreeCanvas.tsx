'use client'
import { useEffect, useRef } from 'react'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const AREAS = ['ONCOLOGY', 'NEUROLOGY', 'CARDIOLOGY', 'IMMUNOLOGY', 'OPHTHALMOLOGY', 'RARE DISEASE', 'HEMATOLOGY', 'METABOLIC']
const MAX_DEPTH = 5

type Seg = { x1: number; y1: number; x2: number; y2: number; d: number }
type Leaf = { x: number; y: number; d: number; label: string | null }

export default function LineageTreeCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const segsRef = useRef<Seg[]>([])
  const leavesRef = useRef<Leaf[]>([])
  const progressRef = useRef(0)
  const reduced = useReducedMotion()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    let raf = 0
    let tw = 0
    let th = 0
    let visible = true

    const size = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const r = canvas.getBoundingClientRect()
      canvas.width = r.width * dpr
      canvas.height = r.height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      tw = r.width
      th = r.height
      buildTree()
    }

    const buildTree = () => {
      const segs: Seg[] = []
      const leaves: Leaf[] = []
      const branch = (x: number, y: number, a: number, len: number, d: number) => {
        const x2 = x + Math.cos(a) * len
        const y2 = y + Math.sin(a) * len
        segs.push({ x1: x, y1: y, x2, y2, d })
        if (d >= MAX_DEPTH || len < 15) {
          leaves.push({ x: x2, y: y2, d: d + 1, label: null })
          return
        }
        const n = d < 1 ? 3 : 2
        for (let i = 0; i < n; i++) {
          const sp = (i - (n - 1) / 2) * (0.5 + Math.random() * 0.25) + (Math.random() - 0.5) * 0.18
          branch(x2, y2, a + sp, len * 0.74, d + 1)
        }
      }
      branch(tw / 2, th - 26, -Math.PI / 2, th * 0.24, 0)
      const k = Math.max(1, Math.floor(leaves.length / AREAS.length))
      leaves.forEach((l, i) => {
        if (i % k === 0 && i / k < AREAS.length) l.label = AREAS[i / k]
      })
      segsRef.current = segs
      leavesRef.current = leaves
    }

    const spores = Array.from({ length: 22 }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: 0.8 + Math.random() * 1.8,
      s: 0.02 + Math.random() * 0.05,
    }))

    const off = (y: number, d: number, t: number) => Math.sin(t * 0.001 + y * 0.015) * d * 0.55
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t

    const sphere = (x: number, y: number, r: number, c1: string, c2: string, c3: string, a: number) => {
      ctx.save()
      ctx.globalAlpha = a
      const g = ctx.createRadialGradient(x - r * 0.35, y - r * 0.4, r * 0.12, x, y, r)
      g.addColorStop(0, c1)
      g.addColorStop(0.45, c2)
      g.addColorStop(1, c3)
      ctx.fillStyle = g
      ctx.beginPath()
      ctx.arc(x, y, r, 0, 7)
      ctx.fill()
      ctx.restore()
    }

    const draw = (t: number) => {
      ctx.clearRect(0, 0, tw, th)

      spores.forEach((s) => {
        s.y -= s.s * 0.0006
        if (s.y < -0.05) { s.y = 1.05; s.x = Math.random() }
        ctx.fillStyle = 'rgba(60,224,184,.28)'
        ctx.beginPath()
        ctx.arc(s.x * tw, s.y * th, s.r, 0, 7)
        ctx.fill()
      })

      const glow = ctx.createRadialGradient(tw / 2, th - 26, 0, tw / 2, th - 26, 120)
      glow.addColorStop(0, 'rgba(60,224,184,.25)')
      glow.addColorStop(1, 'rgba(60,224,184,0)')
      ctx.fillStyle = glow
      ctx.beginPath()
      ctx.arc(tw / 2, th - 26, 120, 0, 7)
      ctx.fill()

      const level = progressRef.current * (MAX_DEPTH + 1.6)
      const sw = reduced ? 0 : t

      segsRef.current.forEach((s) => {
        const local = Math.min(1, Math.max(0, level - s.d))
        if (local <= 0) return
        const o1 = off(s.y1, s.d, sw)
        const o2 = off(s.y2, s.d + 1, sw)
        const ex = lerp(s.x1 + o1, s.x2 + o2, local)
        const ey = lerp(s.y1, s.y2, local)
        ctx.strokeStyle = `rgba(60,224,184,${0.16 + (1 - s.d / MAX_DEPTH) * 0.4})`
        ctx.lineWidth = Math.max(1, 4.5 - s.d * 0.8)
        ctx.lineCap = 'round'
        ctx.beginPath()
        ctx.moveTo(s.x1 + o1, s.y1)
        ctx.lineTo(ex, ey)
        ctx.stroke()
        if (local < 1) {
          ctx.fillStyle = 'rgba(238,242,250,.9)'
          ctx.beginPath()
          ctx.arc(ex, ey, 2.2, 0, 7)
          ctx.fill()
        }
      })

      leavesRef.current.forEach((l) => {
        const a = Math.min(1, Math.max(0, level - l.d))
        if (a <= 0) return
        const o = off(l.y, l.d, sw)
        sphere(l.x + o, l.y, 3.2, '#ffe9d4', '#e0863c', '#4a2a10', a)
        if (l.label) {
          ctx.fillStyle = `rgba(238,242,250,${a * 0.85})`
          ctx.font = '10px "IBM Plex Mono", monospace'
          const left = l.x < tw / 2
          ctx.textAlign = left ? 'right' : 'left'
          ctx.fillText(l.label, l.x + o + (left ? -10 : 10), l.y + 3)
          ctx.textAlign = 'left'
        }
      })
    }

    size()
    window.addEventListener('resize', size)

    // listen to scroll progress dispatched from the section
    const parent = canvas.closest('section')
    const onProgress = ((e: Event) => {
      progressRef.current = (e as CustomEvent<number>).detail ?? 0
    }) as EventListener
    parent?.addEventListener('tree-progress', onProgress)

    const loop = (t: number) => {
      draw(t)
      if (visible) raf = requestAnimationFrame(loop)
    }

    // Pause the rAF loop while the section is scrolled off-screen.
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !visible) {
        visible = true
        raf = requestAnimationFrame(loop)
      } else {
        visible = entry.isIntersecting
      }
    })
    io.observe(canvas)

    raf = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(raf)
      io.disconnect()
      window.removeEventListener('resize', size)
      parent?.removeEventListener('tree-progress', onProgress)
    }
  }, [reduced])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
}
