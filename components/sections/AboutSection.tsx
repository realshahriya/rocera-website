"use client"

import { Zap, Layers, TrendingUp, Target, Code2, ShieldCheck } from 'lucide-react'

export function AboutSection() {
  return (
    <section
      id="about-preview"
      className="section-padding relative overflow-hidden"
      style={{ background: 'var(--color-rocera-surface)' }}
    >
      <div className="container-rocera relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: 'var(--color-rocera-accent)' }}
          >
            Who We Are
          </p>
          <h2
            className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4"
            style={{ color: 'var(--color-rocera-text)' }}
          >
            A Premium Engineering Team
          </h2>
          <p
            className="text-base sm:text-lg leading-relaxed"
            style={{ color: 'var(--color-rocera-muted-2)' }}
          >
            Rocera is an elite technology agency and engineering team. We architect software for high-stakes startups while pushing technical boundaries through open-source and research.
          </p>
        </div>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Bento Box 1 — Large Hero Featured Card (Spans 2 Columns) */}
          <div
            className="group relative rounded-3xl p-8 sm:p-10 overflow-hidden flex flex-col justify-between lg:col-span-2 transition-all duration-500 hover:scale-[1.01]"
            style={{
              background: 'linear-gradient(135deg, var(--color-rocera-bg) 0%, #121520 100%)',
              border: '1px solid var(--color-rocera-border-2)',
            }}
          >
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full blur-[100px] pointer-events-none opacity-20 bg-indigo-500" />
            <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />

            <div className="relative z-10 mb-8">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                <Zap size={24} />
              </div>
              <h3
                className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4"
                style={{ color: 'var(--color-rocera-text)' }}
              >
                Build Exceptional Software
              </h3>
              <p
                className="text-sm sm:text-base max-w-xl leading-relaxed"
                style={{ color: 'var(--color-rocera-muted-2)' }}
              >
                We obsess over architecture, code quality, and long-term maintainability. Every system we ship is built to scale smoothly under heavy load without technical debt.
              </p>
            </div>

            {/* Micro Stats inside Bento Hero Card */}
            <div className="relative z-10 grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
              <div>
                <span className="text-xl sm:text-2xl font-bold font-mono text-indigo-400">99.99%</span>
                <p className="text-xs text-gray-400">Target Uptime</p>
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-bold font-mono text-amber-400">&lt;50ms</span>
                <p className="text-xs text-gray-400">P99 Latency</p>
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-bold font-mono text-emerald-400">$50M+</span>
                <p className="text-xs text-gray-400">TVL Secured</p>
              </div>
            </div>
          </div>

          {/* Bento Box 2 — Accent Challenge Card */}
          <div
            className="group relative rounded-3xl p-8 overflow-hidden flex flex-col justify-between transition-all duration-500 hover:scale-[1.01]"
            style={{
              background: 'var(--color-rocera-bg)',
              border: '1px solid var(--color-rocera-border)',
            }}
          >
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 bg-amber-500/10 border border-amber-500/20 text-amber-400">
              <Layers size={24} />
            </div>
            <div>
              <h3
                className="text-xl font-bold mb-3"
                style={{ color: 'var(--color-rocera-text)' }}
              >
                Solve Difficult Problems
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'var(--color-rocera-muted)' }}
              >
                We tackle complex engineering challenges: distributed real-time pipelines, zero-trust security, and high-frequency Web3 protocols.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-2 text-xs font-mono text-amber-400/80">
              <Code2 size={14} />
              <span>Rust • Python • Solidity • Go</span>
            </div>
          </div>

          {/* Bento Box 3 — Long-Term Value Card */}
          <div
            className="group relative rounded-3xl p-8 overflow-hidden flex flex-col justify-between transition-all duration-500 hover:scale-[1.01]"
            style={{
              background: 'var(--color-rocera-bg)',
              border: '1px solid var(--color-rocera-border)',
            }}
          >
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
              <TrendingUp size={24} />
            </div>
            <div>
              <h3
                className="text-xl font-bold mb-3"
                style={{ color: 'var(--color-rocera-text)' }}
              >
                Create Long-Term Value
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'var(--color-rocera-muted)' }}
              >
                We build lasting technical partnerships, not just deliverables. Our software continues to generate ROI years after initial release.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-2 text-xs font-mono text-emerald-400/80">
              <ShieldCheck size={14} />
              <span>100% On-Time Delivery</span>
            </div>
          </div>

          {/* Bento Box 4 — Wide Craftsmanship Card (Spans 2 Columns) */}
          <div
            className="group relative rounded-3xl p-8 sm:p-10 overflow-hidden flex flex-col justify-between lg:col-span-2 transition-all duration-500 hover:scale-[1.01]"
            style={{
              background: 'linear-gradient(135deg, #121520 0%, var(--color-rocera-bg) 100%)',
              border: '1px solid var(--color-rocera-border-2)',
            }}
          >
            <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 shrink-0">
                <Target size={24} />
              </div>
              <div>
                <h3
                  className="text-xl sm:text-2xl font-bold mb-2"
                  style={{ color: 'var(--color-rocera-text)' }}
                >
                  Earn Trust Through Craft
                </h3>
                <p
                  className="text-sm sm:text-base leading-relaxed"
                  style={{ color: 'var(--color-rocera-muted-2)' }}
                >
                  Craftsmanship is our differentiator. We take pride in clean interfaces, performant systems, zero visual bugs, and software that is a true pleasure to use.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Fade Gradient into Next Section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none z-10"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, var(--color-rocera-bg) 100%)',
        }}
      />
    </section>
  )
}
