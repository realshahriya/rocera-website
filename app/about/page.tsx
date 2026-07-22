import Link from 'next/link'
import { ArrowRight, ShieldCheck, Cpu, Compass, HeartHandshake } from 'lucide-react'
import { RoceraLogo } from '@/components/ui/RoceraLogo'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Rocera — our story, mission, and approach to engineering.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 sm:pt-28 pb-16 sm:pb-24 px-4 sm:px-6" style={{ background: 'var(--color-rocera-bg)' }}>
      <div className="container-rocera">
        {/* Story Hero Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 sm:mb-24">
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3 sm:mb-4"
              style={{ color: 'var(--color-rocera-accent)' }}
            >
              Our Origin & Story
            </p>
            <h1
              className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4 sm:mb-6 leading-[1.1]"
              style={{ color: 'var(--color-rocera-text)' }}
            >
              Built by Engineers,
              <br />
              <span
                style={{
                  background: 'linear-gradient(135deg, var(--color-rocera-accent), var(--color-rocera-gold))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                For Engineers.
              </span>
            </h1>
            <p
              className="text-sm sm:text-lg leading-relaxed mb-4 sm:mb-6"
              style={{ color: 'var(--color-rocera-muted-2)' }}
            >
              Rocera was founded on a simple conviction: the best software comes from teams who care deeply about their craft. We&apos;re not a typical agency — we&apos;re elite engineers who partner with high-stakes founders.
            </p>
            <p
              className="text-xs sm:text-base leading-relaxed"
              style={{ color: 'var(--color-rocera-muted-2)' }}
            >
              Our name is a fusion of &ldquo;Rococo&rdquo; precision and &ldquo;Acera&rdquo; forward motion — reflecting our commitment to timeless craftsmanship in a fast-moving AI & Web3 ecosystem.
            </p>
          </div>

          <div className="flex items-center justify-center">
            <div
              className="relative p-8 sm:p-14 rounded-3xl group transition-all duration-500 hover:scale-[1.02] w-full max-w-sm sm:max-w-none flex items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, var(--color-rocera-surface) 0%, #121520 100%)',
                border: '1px solid var(--color-rocera-border-2)',
              }}
            >
              <RoceraLogo className="w-28 sm:w-40 h-28 sm:h-40 opacity-90 transition-transform duration-500 group-hover:scale-105" />
              <div
                className="absolute inset-0 rounded-3xl pointer-events-none"
                style={{
                  background:
                    'radial-gradient(ellipse at center, color-mix(in srgb, var(--color-rocera-accent) 15%, transparent) 0%, transparent 70%)',
                }}
              />
            </div>
          </div>
        </div>

        {/* Values Bento Box Grid */}
        <div className="mb-16 sm:mb-24">
          <div className="max-w-2xl mb-8 sm:mb-12">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--color-rocera-accent)' }}
            >
              How We Work
            </p>
            <h2
              className="text-2xl sm:text-4xl font-extrabold tracking-tight"
              style={{ color: 'var(--color-rocera-text)' }}
            >
              Our Core Engineering Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Bento Card 1 — Featured Values Card (Spans 2 Cols) */}
            <div
              className="group relative rounded-3xl p-6 sm:p-8 lg:p-10 overflow-hidden flex flex-col justify-between lg:col-span-2 transition-all duration-500 hover:scale-[1.01]"
              style={{
                background: 'linear-gradient(135deg, var(--color-rocera-surface) 0%, var(--color-rocera-surface-2) 100%)',
                border: '1px solid var(--color-rocera-border-2)',
              }}
            >
              <div>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                  <Cpu size={24} />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3" style={{ color: 'var(--color-rocera-text)' }}>
                  Engineering First Principles
                </h3>
                <p className="text-xs sm:text-base leading-relaxed max-w-xl" style={{ color: 'var(--color-rocera-muted-2)' }}>
                  We start every project by understanding the problem at a systems level. No premature solutions. No cargo-culted frameworks. Just clear architectural thinking and the exact right tools for the job.
                </p>
              </div>
            </div>

            {/* Bento Card 2 — Craftsmanship Over Speed */}
            <div
              className="group relative rounded-3xl p-6 sm:p-8 overflow-hidden flex flex-col justify-between transition-all duration-500 hover:scale-[1.01]"
              style={{
                background: 'var(--color-rocera-surface)',
                border: '1px solid var(--color-rocera-border)',
              }}
            >
              <div>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 bg-amber-500/10 border border-amber-500/20 text-amber-400">
                  <ShieldCheck size={24} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3" style={{ color: 'var(--color-rocera-text)' }}>
                  Craftsmanship Over Speed
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--color-rocera-muted)' }}>
                  We take the time to get architecture decisions right from day one rather than spending months refactoring bad tech choices.
                </p>
              </div>
            </div>

            {/* Bento Card 3 — Long-Term Partnership */}
            <div
              className="group relative rounded-3xl p-6 sm:p-8 overflow-hidden flex flex-col justify-between transition-all duration-500 hover:scale-[1.01]"
              style={{
                background: 'var(--color-rocera-surface)',
                border: '1px solid var(--color-rocera-border)',
              }}
            >
              <div>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  <HeartHandshake size={24} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3" style={{ color: 'var(--color-rocera-text)' }}>
                  Long-Term Ownership
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--color-rocera-muted)' }}>
                  We treat client codebases as if they were our own. We write software we are confident maintaining five years down the road.
                </p>
              </div>
            </div>

            {/* Bento Card 4 — Honest Communication (Spans 2 Cols) */}
            <div
              className="group relative rounded-3xl p-6 sm:p-8 lg:p-10 overflow-hidden flex flex-col justify-between lg:col-span-2 transition-all duration-500 hover:scale-[1.01]"
              style={{
                background: 'linear-gradient(135deg, var(--color-rocera-surface-2) 0%, var(--color-rocera-surface) 100%)',
                border: '1px solid var(--color-rocera-border-2)',
              }}
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-purple-500/10 border border-purple-500/20 text-purple-400 shrink-0">
                  <Compass size={24} />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2" style={{ color: 'var(--color-rocera-text)' }}>
                    Direct & Honest Technical Communication
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--color-rocera-muted-2)' }}>
                    We tell clients what they need to hear, not just what is convenient. If a proposed technical path will break at scale, we speak up immediately and provide a battle-tested alternative.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          className="p-6 sm:p-10 md:p-12 rounded-3xl text-center relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, var(--color-rocera-surface) 0%, #121520 100%)',
            border: '1px solid var(--color-rocera-border-2)',
          }}
        >
          <h2
            className="text-xl sm:text-3xl font-extrabold tracking-tight mb-3"
            style={{ color: 'var(--color-rocera-text)' }}
          >
            Want to Build With Us?
          </h2>
          <p className="text-xs sm:text-base max-w-xl mx-auto mb-6 sm:mb-8" style={{ color: 'var(--color-rocera-muted-2)' }}>
            We&apos;re always open to partnering on ambitious engineering projects.
          </p>
          <Link
            href="/contact"
            className="btn-butter w-full sm:w-auto inline-flex justify-center"
          >
            Get in touch <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  )
}
