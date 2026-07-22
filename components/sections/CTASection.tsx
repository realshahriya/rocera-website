import Link from 'next/link'
import { ArrowRight, Compass } from 'lucide-react'

export function CTASection() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden py-20 sm:py-28 md:py-36 text-center px-4 sm:px-6"
      style={{
        background:
          'linear-gradient(180deg, var(--color-rocera-bg) 0%, #0c0e18 50%, var(--color-rocera-surface) 100%)',
      }}
    >
      {/* 1. North Star & Feather Motif Vector Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
        <svg
          className="w-[500px] sm:w-[700px] md:w-[900px] h-[500px] sm:h-[700px] md:h-[900px]"
          viewBox="0 0 1000 1000"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* North Star (Polaris 4-Point Compass Starburst) */}
          <path
            d="M 500,50 C 505,350 650,495 950,500 C 650,505 505,650 500,950 C 495,650 350,505 50,500 C 350,495 495,350 500,50 Z"
            fill="url(#north-star-fill)"
            stroke="url(#north-star-stroke)"
            strokeWidth="1.5"
            className="animate-pulse"
          />

          {/* Secondary Diagonal Star Rays */}
          <path
            d="M 500,220 L 530,470 L 780,500 L 530,530 L 500,780 L 470,530 L 220,500 L 470,470 Z"
            fill="url(#star-inner-fill)"
            opacity="0.6"
          />

          {/* Feather Quill Geometry Motif (Curved Feather Vanes) */}
          <g opacity="0.7">
            <path d="M 500,150 Q 500,500 500,850" stroke="url(#feather-quill)" strokeWidth="2" strokeDasharray="6 6" />
            <path d="M 500,300 C 420,280 340,320 280,380" stroke="url(#feather-vane-1)" strokeWidth="1.2" />
            <path d="M 500,400 C 400,380 310,430 240,510" stroke="url(#feather-vane-1)" strokeWidth="1.2" />
            <path d="M 500,500 C 380,480 280,540 210,640" stroke="url(#feather-vane-1)" strokeWidth="1.2" />
            <path d="M 500,600 C 390,600 300,670 230,760" stroke="url(#feather-vane-1)" strokeWidth="1.2" />
            <path d="M 500,300 C 580,280 660,320 720,380" stroke="url(#feather-vane-2)" strokeWidth="1.2" />
            <path d="M 500,400 C 600,380 690,430 760,510" stroke="url(#feather-vane-2)" strokeWidth="1.2" />
            <path d="M 500,500 C 620,480 720,540 790,640" stroke="url(#feather-vane-2)" strokeWidth="1.2" />
            <path d="M 500,600 C 610,600 700,670 770,760" stroke="url(#feather-vane-2)" strokeWidth="1.2" />
          </g>

          <circle cx="500" cy="500" r="320" stroke="rgba(99, 102, 241, 0.15)" strokeWidth="1" strokeDasharray="4 8" />
          <circle cx="500" cy="500" r="420" stroke="rgba(201, 168, 76, 0.15)" strokeWidth="1" strokeDasharray="8 12" />

          <defs>
            <linearGradient id="north-star-fill" x1="500" y1="50" x2="500" y2="950" gradientUnits="userSpaceOnUse">
              <stop stopColor="#6366f1" stopOpacity="0.1" />
              <stop offset="0.5" stopColor="#c9a84c" stopOpacity="0.18" />
              <stop offset="1" stopColor="#6366f1" stopOpacity="0.05" />
            </linearGradient>
            <linearGradient id="north-star-stroke" x1="500" y1="50" x2="500" y2="950" gradientUnits="userSpaceOnUse">
              <stop stopColor="#c9a84c" stopOpacity="0.6" />
              <stop offset="0.5" stopColor="#6366f1" stopOpacity="0.5" />
              <stop offset="1" stopColor="#38bdf8" stopOpacity="0.6" />
            </linearGradient>
            <linearGradient id="star-inner-fill" x1="220" y1="220" x2="780" y2="780" gradientUnits="userSpaceOnUse">
              <stop stopColor="#c9a84c" stopOpacity="0.2" />
              <stop offset="1" stopColor="#6366f1" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="feather-quill" x1="500" y1="150" x2="500" y2="850" gradientUnits="userSpaceOnUse">
              <stop stopColor="#c9a84c" stopOpacity="0.8" />
              <stop offset="1" stopColor="#6366f1" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="feather-vane-1" x1="500" y1="300" x2="200" y2="800" gradientUnits="userSpaceOnUse">
              <stop stopColor="#6366f1" stopOpacity="0.4" />
              <stop offset="1" stopColor="#c9a84c" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="feather-vane-2" x1="500" y1="300" x2="800" y2="800" gradientUnits="userSpaceOnUse">
              <stop stopColor="#c9a84c" stopOpacity="0.4" />
              <stop offset="1" stopColor="#6366f1" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* 2. Micro Cyber Mesh Overlay */}
      <div 
        className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" 
        style={{
          maskImage: 'radial-gradient(ellipse 65% 55% at 50% 50%, black 20%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 65% 55% at 50% 50%, black 20%, transparent 100%)'
        }}
      />

      {/* 3. North Star Radial Glow Aura */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[600px] md:w-[750px] h-[250px] sm:h-[350px] md:h-[400px] rounded-full blur-[100px] sm:blur-[140px] md:blur-[150px] pointer-events-none opacity-30"
        style={{
          background: 'radial-gradient(circle, var(--color-rocera-gold) 0%, var(--color-rocera-accent) 50%, transparent 75%)',
        }}
      />

      {/* Main Content */}
      <div className="container-rocera relative z-10 max-w-4xl mx-auto">
        {/* Top Tag Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-mono mb-6 border border-white/10 glass">
          <Compass size={13} className="text-amber-400" />
          <span style={{ color: 'var(--color-rocera-gold)' }}>LET&apos;S BUILD TOGETHER</span>
        </div>

        {/* Headline */}
        <h2
          className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-[1.15]"
          style={{ color: 'var(--color-rocera-text)' }}
        >
          Ready to Start Your Project?
        </h2>

        {/* Description */}
        <p
          className="text-sm sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed px-2 sm:px-0"
          style={{ color: 'var(--color-rocera-muted-2)' }}
        >
          Tell us what you&apos;re building. We&apos;ll get back to you within 24 hours with a clear engineering path forward.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto max-w-xs sm:max-w-none mx-auto">
          <Link
            href="/contact"
            id="cta-start-project"
            className="group btn-butter text-center"
          >
            Start a Project
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
          <Link
            href="/portfolio"
            id="cta-view-portfolio"
            className="btn-butter-secondary text-center"
          >
            View Our Work
          </Link>
        </div>
      </div>

      {/* Bottom Fade Gradient into Footer */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none z-10"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, var(--color-rocera-surface) 100%)',
        }}
      />
    </section>
  )
}
