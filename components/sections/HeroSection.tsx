"use client"

import Link from 'next/link'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { useEffect, useRef } from 'react'

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Bespoke Interactive Background Canvas
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = (canvas.width = canvas.offsetWidth)
    let height = (canvas.height = canvas.offsetHeight)
    let animId: number

    let mouse = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2 }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.targetX = e.clientX - rect.left
      mouse.targetY = e.clientY - rect.top
    }
    window.addEventListener('mousemove', handleMouseMove)

    // Animated Quasar Star Burst Ray geometry
    let rotationAngle = 0
    let waveOffset = 0

    // Small Feather Particles (Floating Motif)
    const featherParticles: Array<{
      x: number
      y: number
      scale: number
      angle: number
      vRot: number
      vx: number
      vy: number
      opacity: number
    }> = []

    for (let i = 0; i < 28; i++) {
      featherParticles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        scale: Math.random() * 8 + 8,
        angle: Math.random() * Math.PI * 2,
        vRot: (Math.random() - 0.5) * 0.005,
        vx: (Math.random() - 0.5) * 0.2,
        vy: -Math.random() * 0.25 - 0.05,
        opacity: Math.random() * 0.25 + 0.1,
      })
    }

    const drawBackground = () => {
      ctx.clearRect(0, 0, width, height)

      // Smooth viscous mouse lerp for grid displacement
      mouse.x += (mouse.targetX - mouse.x) * 0.012
      mouse.y += (mouse.targetY - mouse.y) * 0.012

      // Interactive Curved Wave Lines
      const rows = 14
      const cols = 24
      const gridSpacingX = width / cols
      const gridSpacingY = height / rows

      ctx.lineWidth = 0.75

      waveOffset += 0.005
      rotationAngle += 0.0006

      for (let r = 0; r <= rows; r++) {
        ctx.beginPath()
        for (let c = 0; c <= cols; c++) {
          const baseX = c * gridSpacingX
          const baseY = r * gridSpacingY

          const dx = baseX - mouse.x
          const dy = baseY - mouse.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          const maxDist = 300
          
          let pushX = 0
          let pushY = 0
          if (dist < maxDist) {
            const factor = (1 - dist / maxDist) * 5
            pushX = (dx / (dist || 1)) * factor
            pushY = (dy / (dist || 1)) * factor
          }

          const wave = Math.sin(c * 0.4 + waveOffset + r * 0.3) * 6
          const x = baseX + pushX
          const y = baseY + pushY + wave

          if (c === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }
        ctx.strokeStyle = `rgba(99, 102, 241, ${0.04 + (r / rows) * 0.06})`
        ctx.stroke()
      }

      // Central North Star & Feather Geometry
      const centerX = width / 2
      const centerY = height * 0.42
      const starScale = Math.min(width, height) * 0.38

      ctx.save()
      ctx.translate(centerX, centerY)
      ctx.rotate(rotationAngle)

      ctx.beginPath()
      ctx.moveTo(0, -starScale)
      ctx.quadraticCurveTo(starScale * 0.12, -starScale * 0.12, starScale, 0)
      ctx.quadraticCurveTo(starScale * 0.12, starScale * 0.12, 0, starScale)
      ctx.quadraticCurveTo(-starScale * 0.12, starScale * 0.12, -starScale, 0)
      ctx.quadraticCurveTo(-starScale * 0.12, -starScale * 0.12, 0, -starScale)
      ctx.closePath()

      const starGrad = ctx.createRadialGradient(0, 0, 10, 0, 0, starScale)
      starGrad.addColorStop(0, 'rgba(201, 168, 76, 0.2)')
      starGrad.addColorStop(0.5, 'rgba(99, 102, 241, 0.12)')
      starGrad.addColorStop(1, 'rgba(10, 11, 15, 0)')
      ctx.fillStyle = starGrad
      ctx.fill()

      ctx.strokeStyle = 'rgba(201, 168, 76, 0.3)'
      ctx.lineWidth = 1
      ctx.stroke()

      for (let i = 0; i < 8; i++) {
        const angle = (i * Math.PI) / 4
        const len = starScale * (0.75 + Math.sin(waveOffset + i) * 0.25)
        ctx.beginPath()
        ctx.moveTo(0, 0)
        ctx.lineTo(Math.cos(angle) * len, Math.sin(angle) * len)
        ctx.strokeStyle = i % 2 === 0 ? 'rgba(201, 168, 76, 0.25)' : 'rgba(99, 102, 241, 0.2)'
        ctx.lineWidth = i % 2 === 0 ? 1.2 : 0.8
        ctx.stroke()
      }

      ctx.restore()

      // Small Floating Bended Feather Particles
      const time = Date.now() * 0.001
      featherParticles.forEach((p) => {
        p.x += p.vx + Math.sin(time * 0.8 + p.y * 0.01) * 0.2
        p.y += p.vy
        p.angle += p.vRot

        if (p.y < -30) {
          p.y = height + 30
          p.x = Math.random() * width
        }
        if (p.x < -30) p.x = width + 30
        if (p.x > width + 30) p.x = -30

        ctx.save()
        ctx.translate(p.x, p.y)
        ctx.rotate(p.angle)

        const s = p.scale
        const op = p.opacity

        ctx.beginPath()
        ctx.moveTo(-s * 0.4, -s * 1.3)
        ctx.bezierCurveTo(s * 0.8, -s * 0.7, s * 0.65, s * 0.5, -s * 0.2, s * 1.3)
        ctx.bezierCurveTo(-s * 0.85, s * 0.5, -s * 0.95, -s * 0.7, -s * 0.4, -s * 1.3)
        ctx.closePath()

        const bendedGrad = ctx.createLinearGradient(-s * 0.4, -s, s * 0.4, s)
        bendedGrad.addColorStop(0, `rgba(201, 168, 76, ${op * 0.4})`)
        bendedGrad.addColorStop(0.5, `rgba(99, 102, 241, ${op * 0.25})`)
        bendedGrad.addColorStop(1, 'rgba(10, 11, 15, 0)')
        ctx.fillStyle = bendedGrad
        ctx.fill()

        ctx.beginPath()
        ctx.moveTo(-s * 0.4, -s * 1.35)
        ctx.quadraticCurveTo(s * 0.4, 0, -s * 0.2, s * 1.35)
        ctx.strokeStyle = `rgba(201, 168, 76, ${op * 0.9})`
        ctx.lineWidth = 1
        ctx.stroke()

        const barbCount = 6
        for (let b = 1; b <= barbCount; b++) {
          const t = b / (barbCount + 1)
          const qx = (1 - t) * (1 - t) * (-s * 0.4) + 2 * (1 - t) * t * (s * 0.4) + t * t * (-s * 0.2)
          const qy = (1 - t) * (1 - t) * (-s * 1.35) + 2 * (1 - t) * t * (0) + t * t * (s * 1.35)
          const bw = (1 - Math.abs(b - barbCount / 2) / (barbCount / 2)) * (s * 0.42) + s * 0.1

          ctx.beginPath()
          ctx.moveTo(qx, qy)
          ctx.quadraticCurveTo(qx + bw, qy + s * 0.1, qx + bw * 0.85, qy + s * 0.22)
          ctx.strokeStyle = `rgba(201, 168, 76, ${op * 0.65})`
          ctx.lineWidth = 0.65
          ctx.stroke()

          ctx.beginPath()
          ctx.moveTo(qx, qy)
          ctx.quadraticCurveTo(qx - bw, qy + s * 0.1, qx - bw * 0.85, qy + s * 0.22)
          ctx.strokeStyle = `rgba(99, 102, 241, ${op * 0.65})`
          ctx.lineWidth = 0.65
          ctx.stroke()
        }

        ctx.restore()
      })

      animId = requestAnimationFrame(drawBackground)
    }

    drawBackground()

    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = canvas.offsetWidth
      height = canvas.height = canvas.offsetHeight
    }
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <section
      id="hero"
      className="relative pt-28 sm:pt-40 md:pt-44 pb-20 sm:pb-32 overflow-hidden flex flex-col items-center justify-center min-h-[100dvh]"
      style={{ background: 'var(--color-rocera-bg)' }}
    >
      {/* Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Radial Soft Aura Glow Overlay */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[600px] md:w-[800px] h-[300px] sm:h-[450px] md:h-[500px] rounded-full blur-[100px] sm:blur-[140px] md:blur-[160px] pointer-events-none opacity-25"
        style={{ background: 'radial-gradient(circle, var(--color-rocera-accent) 0%, transparent 70%)' }}
      />
      <div
        className="absolute top-1/3 left-1/4 w-[280px] sm:w-[400px] md:w-[500px] h-[200px] sm:h-[300px] md:h-[350px] rounded-full blur-[90px] sm:blur-[120px] md:blur-[140px] pointer-events-none opacity-15"
        style={{ background: 'radial-gradient(circle, var(--color-rocera-gold) 0%, transparent 70%)' }}
      />

      {/* Main Content */}
      <div className="container-rocera relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center my-auto px-4 sm:px-6">
        {/* Status Pill Badge */}
        <div
          className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-mono mb-6 sm:mb-10 border border-white/10 glass max-w-full flex-wrap justify-center"
          style={{ color: 'var(--color-rocera-muted-2)' }}
        >
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="tracking-wide">ROCERA ENGINE v2.0</span>
          <span className="text-white/30 hidden xs:inline">•</span>
          <span style={{ color: 'var(--color-rocera-accent-hover)' }} className="truncate max-w-[200px] sm:max-w-none">Available for Q3/Q4 Projects</span>
        </div>

        {/* Hero Headline */}
        <h1 className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 sm:mb-8 leading-[1.12] sm:leading-[1.08] text-balance">
          <span className="text-gradient">Engineering Software</span>
          <br />
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(135deg, #ffffff 0%, var(--color-rocera-accent-hover) 50%, var(--color-rocera-gold) 100%)',
            }}
          >
            That Lasts.
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-sm sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed px-2 sm:px-0"
          style={{ color: 'var(--color-rocera-muted-2)' }}
        >
          Rocera is an elite technology agency. We partner with founders and enterprises to architect high-stakes AI systems, Web3 protocols, cloud infrastructure, and enterprise software.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto px-4 sm:px-0">
          <Link
            href="/contact"
            id="hero-start-project"
            className="group btn-butter w-full sm:w-auto text-center"
          >
            Start a Project
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link
            href="/portfolio"
            id="hero-view-portfolio"
            className="btn-butter-secondary w-full sm:w-auto text-center"
          >
            View Work & Case Studies
          </Link>
        </div>
      </div>

      {/* Clean Scroll Indicator */}
      <a
        href="#about-preview"
        aria-label="Scroll down to About section"
        className="relative z-20 mt-10 sm:mt-20 flex flex-col items-center gap-1.5 opacity-70 hover:opacity-100 transition-opacity"
      >
        <span className="text-[10px] uppercase tracking-widest font-mono text-gray-400">Scroll</span>
        <ChevronDown size={18} className="animate-bounce text-indigo-400" />
      </a>

      {/* Bottom Fade Gradient into Next Section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-12 pointer-events-none z-10"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, var(--color-rocera-surface) 100%)',
        }}
      />
    </section>
  )
}
