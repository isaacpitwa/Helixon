'use client'
import { useEffect, useRef } from 'react'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export default function HelixCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const reduced = useReducedMotion()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    let raf = 0
    let w = 0, h = 0
    let mouseX = 0.5
    let visible = true

    const size = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const r = canvas.getBoundingClientRect()
      canvas.width = r.width * dpr
      canvas.height = r.height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      w = r.width; h = r.height
    }

    const cells = Array.from({ length: 14 }, () => ({
      x: Math.random(), y: Math.random(), r: 16 + Math.random() * 48,
      s: 0.05 + Math.random() * 0.1, a: 0.05 + Math.random() * 0.07,
    }))

    const onMove = (e: MouseEvent) => { mouseX = e.clientX / window.innerWidth }
    window.addEventListener('mousemove', onMove, { passive: true })
    size()
    window.addEventListener('resize', size)

    const sphere = (x: number, y: number, r: number, c1: string, c2: string, c3: string, a: number) => {
      ctx.save(); ctx.globalAlpha = a
      const g = ctx.createRadialGradient(x - r * 0.35, y - r * 0.4, r * 0.12, x, y, r)
      g.addColorStop(0, c1); g.addColorStop(0.45, c2); g.addColorStop(1, c3)
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, r, 0, 7); ctx.fill(); ctx.restore()
    }

    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h)
      cells.forEach(c => {
        c.y -= c.s * 0.0004; if (c.y < -0.1) c.y = 1.1
        const x = c.x * w, y = c.y * h
        sphere(x, y, c.r, 'rgba(214,255,244,.9)', 'rgba(60,224,184,.35)', 'rgba(60,224,184,0)', c.a * 2)
        ctx.fillStyle = `rgba(238,242,250,${c.a})`
        ctx.beginPath(); ctx.arc(x, y, 1.6, 0, 7); ctx.fill()
      })

      const axisX = w * (window.innerWidth < 768 ? 0.5 : 0.76) + (mouseX - 0.5) * 36
      const A = Math.min(110, Math.max(50, w * 0.085))
      const step = 13, sp = reduced ? 0 : t * 0.00095

      for (let y = -30; y < h + 30; y += step) {
        const i = Math.round(y / step), ph = y * 0.013 + sp
        const x1 = axisX + Math.sin(ph) * A, x2 = axisX + Math.sin(ph + Math.PI) * A, z = Math.cos(ph)
        ctx.strokeStyle = `rgba(238,242,250,${0.08 + Math.abs(z) * 0.2})`
        ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(x1, y); ctx.lineTo(x2, y); ctx.stroke()
        if (i % 5 === 0) {
          ctx.fillStyle = `rgba(224,134,60,${0.25 + Math.abs(z) * 0.5})`
          ctx.font = '10px "IBM Plex Mono", monospace'
          ctx.fillText('ATCG'[((i % 20) / 5) | 0], (x1 + x2) / 2 - 3, y - 5)
        }
        sphere(x1, y, Math.min(4.6, Math.max(0.9, 2.6 + z * 1.7)), '#f3fffb', '#59e6c2', '#0a3f34', 0.35 + (z + 1) * 0.3)
        sphere(x2, y, Math.min(4.6, Math.max(0.9, 2.6 - z * 1.7)), '#ffe9d4', '#e0a45c', '#4a2a10', 0.35 + (1 - z) * 0.28)
      }
      if (visible) raf = requestAnimationFrame(draw)
    }

    // Pause the rAF loop while the canvas is scrolled off-screen.
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !visible) {
        visible = true
        raf = requestAnimationFrame(draw)
      } else {
        visible = entry.isIntersecting
      }
    })
    io.observe(canvas)

    raf = requestAnimationFrame(draw)
    return () => {
      cancelAnimationFrame(raf)
      io.disconnect()
      window.removeEventListener('resize', size)
      window.removeEventListener('mousemove', onMove)
    }
  }, [reduced])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" aria-hidden="true" />
}
