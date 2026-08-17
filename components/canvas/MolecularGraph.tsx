'use client'
import { useEffect, useRef } from 'react'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export default function MolecularGraph() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const reduced = useReducedMotion()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    let raf = 0, w = 0, h = 0
    let visible = true
    const mouse = { x: -999, y: -999 }
    const pulses: { x: number; y: number; r: number }[] = []
    const LABELS = ['CRISPR', 'LNP', 'AAV9', 'mRNA', 'Cas12', 'sgRNA', 'PAM', 'Organoid', 'Kinase', 'Receptor', 'Vector', 'Plasmid', 'Fold', 'Assay', 'Seq', 'Capsid', 'Locus', 'Exon']
    const nodes = LABELS.map(l => ({ l, x: 0, y: 0, vx: 0, vy: 0, hx: 0, hy: 0 }))

    const size = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const r = canvas.getBoundingClientRect()
      canvas.width = r.width * dpr; canvas.height = r.height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      w = r.width; h = r.height
      nodes.forEach(n => { n.hx = 30 + Math.random() * (w - 60); n.hy = 26 + Math.random() * (h - 52); if (!n.x) { n.x = n.hx; n.y = n.hy } })
    }

    const onMove = (e: MouseEvent) => { const r = canvas.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top }
    const onLeave = () => { mouse.x = -999; mouse.y = -999 }
    const onClick = (e: MouseEvent) => { const r = canvas.getBoundingClientRect(); pulses.push({ x: e.clientX - r.left, y: e.clientY - r.top, r: 0 }) }

    canvas.addEventListener('mousemove', onMove)
    canvas.addEventListener('mouseleave', onLeave)
    canvas.addEventListener('click', onClick)
    size()
    window.addEventListener('resize', size)

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      for (let i = pulses.length - 1; i >= 0; i--) {
        const p = pulses[i]; p.r += 2.4
        ctx.strokeStyle = `rgba(11,18,32,${Math.max(0, 1 - p.r / 130) * 0.15})`
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, 7); ctx.stroke()
        if (p.r > 130) pulses.splice(i, 1)
      }
      nodes.forEach(n => {
        n.vx += (n.hx - n.x) * 0.004; n.vy += (n.hy - n.y) * 0.004
        const dx = n.x - mouse.x, dy = n.y - mouse.y, d = Math.hypot(dx, dy)
        if (d < 110 && d > 0) { const f = (110 - d) / 110 * 0.9; n.vx += (dx / d) * f; n.vy += (dy / d) * f }
        n.vx *= 0.9; n.vy *= 0.9; n.x += n.vx; n.y += n.vy
      })
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j], d = Math.hypot(a.x - b.x, a.y - b.y)
          if (d < 105) {
            ctx.strokeStyle = `rgba(11,18,32,${(1 - d / 105) * 0.15})`
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke()
          }
        }
      }
      nodes.forEach(n => {
        const hov = Math.hypot(n.x - mouse.x, n.y - mouse.y) < 20
        ctx.fillStyle = hov ? '#b95e27' : '#0ca789'
        ctx.beginPath(); ctx.arc(n.x, n.y, hov ? 4 : 2.4, 0, 7); ctx.fill()
        if (hov) { ctx.fillStyle = 'rgba(11,18,32,.9)'; ctx.font = '10px "IBM Plex Mono", monospace'; ctx.fillText(n.l, n.x + 9, n.y + 3) }
      })
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
      canvas.removeEventListener('mousemove', onMove)
      canvas.removeEventListener('mouseleave', onLeave)
      canvas.removeEventListener('click', onClick)
    }
  }, [reduced])

  return <canvas ref={canvasRef} className="w-full h-[300px] block cursor-crosshair" />
}
