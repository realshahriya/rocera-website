"use client"

import Link from 'next/link'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { useEffect, useRef } from 'react'

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = (canvas.width = canvas.offsetWidth)
    let height = (canvas.height = canvas.offsetHeight)
    let animationId: number

    const particles: Array<{
      x: number; y: number; vx: number; vy: number; size: number; opacity: number
    }> = []

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.4 + 0.1,
      })
    }

    function draw() {
      if (!ctx) return
      ctx.clearRect(0, 0, width, height)

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(99, 102, 241, ${(1 - dist / 120) * 0.15})`
            ctx.lineWidth = 1
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      // Draw particles
      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > width) p.vx *= -1
        if (p.y < 0 || p.y > height) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(99, 102, 241, ${p.opacity})`
        ctx.fill()
      })

      animationId = requestAnimationFrame(draw)
    }

    draw()

    const onResize = () => {
      if (!canvas) return
      width = canvas.width = canvas.offsetWidth
      height = canvas.height = canvas.offsetHeight
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'var(--color-rocera-bg)' }}
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ pointerEvents: 'none' }}
      />

      {/* Radial gradient spotlight */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 40%, color-mix(in srgb, var(--color-rocera-accent) 8%, transparent) 0%, transparent 70%)',
        }}
      />

      {/* Content */}
      <div className="container-rocera relative z-10 text-center pt-20">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-8 glass"
          style={{ color: 'var(--color-rocera-muted-2)' }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: 'var(--color-rocera-success)' }}
          />
          Available for new projects
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
          <span className="text-gradient">Engineering Software</span>
          <br />
          <span
            style={{
              background:
                'linear-gradient(135deg, var(--color-rocera-accent) 0%, var(--color-rocera-accent-hover) 50%, var(--color-rocera-gold) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            That Lasts.
          </span>
        </h1>

        {/* Description */}
        <p
          className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ color: 'var(--color-rocera-muted-2)' }}
        >
          Rocera partners with startups, founders, and organizations to design and build
          reliable software, AI systems, blockchain solutions, and modern digital products.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            id="hero-start-project"
            className="group flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm transition-all duration-300"
            style={{
              background: 'var(--color-rocera-accent)',
              color: '#fff',
              boxShadow: '0 0 30px color-mix(in srgb, var(--color-rocera-accent) 30%, transparent)',
            }}
          >
            Start a Project
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link
            href="/portfolio"
            id="hero-view-portfolio"
            className="flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm transition-all duration-300"
            style={{
              background: 'var(--color-rocera-surface)',
              color: 'var(--color-rocera-text)',
              border: '1px solid var(--color-rocera-border)',
            }}
          >
            View Portfolio
          </Link>
        </div>

        {/* Stats */}
        <div
          className="grid grid-cols-3 gap-8 max-w-lg mx-auto mt-20 pt-8"
          style={{ borderTop: '1px solid var(--color-rocera-border)' }}
        >
          {[
            { value: '50+', label: 'Projects Shipped' },
            { value: '$50M+', label: 'TVL Managed' },
            { value: '3×', label: 'Hackathon Wins' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <p
                className="text-2xl font-bold tracking-tight"
                style={{ color: 'var(--color-rocera-text)' }}
              >
                {value}
              </p>
              <p className="text-xs mt-1" style={{ color: 'var(--color-rocera-muted)' }}>
                {label}
              </p>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <ChevronDown
            size={20}
            className="animate-bounce"
            style={{ color: 'var(--color-rocera-muted)' }}
          />
        </div>
      </div>
    </section>
  )
}
