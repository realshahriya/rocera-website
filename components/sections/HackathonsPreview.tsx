"use client"

import Link from 'next/link'
import { Trophy, ArrowRight } from 'lucide-react'
import hackathons from '@/content/hackathons.json'

export function HackathonsPreview() {
  const recent = hackathons.slice(0, 3)

  return (
    <section
      id="hackathons-preview"
      className="section-padding relative overflow-hidden"
      style={{ background: 'var(--color-rocera-surface)' }}
    >
      <div className="container-rocera relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--color-rocera-accent)' }}
            >
              Competition
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold tracking-tight"
              style={{ color: 'var(--color-rocera-text)' }}
            >
              Hackathon Record
            </h2>
          </div>
          <Link
            href="/hackathons"
            className="group flex items-center gap-1.5 text-sm font-medium shrink-0"
            style={{ color: 'var(--color-rocera-accent)' }}
          >
            View full record
            <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="flex flex-col gap-4">
          {recent.map((h, i) => (
            <article
              key={h.id}
              className="flex flex-col md:flex-row md:items-center gap-4 p-5 rounded-xl transition-all duration-200"
              style={{
                background: 'var(--color-rocera-bg)',
                border: '1px solid var(--color-rocera-border)',
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLElement).style.borderColor =
                  'var(--color-rocera-border-2)'
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLElement).style.borderColor =
                  'var(--color-rocera-border)'
              }}
            >
              {/* Index */}
              <span
                className="text-4xl font-bold tabular-nums opacity-20 shrink-0"
                style={{ color: 'var(--color-rocera-text)' }}
              >
                0{i + 1}
              </span>

              {/* Info */}
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h3
                    className="text-base font-semibold"
                    style={{ color: 'var(--color-rocera-text)' }}
                  >
                    {h.name}
                  </h3>
                  <span className="text-xs" style={{ color: 'var(--color-rocera-muted)' }}>
                    · {h.location}
                  </span>
                </div>
                <p className="text-sm" style={{ color: 'var(--color-rocera-muted)' }}>
                  {h.description.slice(0, 120)}...
                </p>
              </div>

              {/* Award */}
              <div
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg shrink-0"
                style={{
                  background: 'color-mix(in srgb, var(--color-rocera-gold) 10%, transparent)',
                }}
              >
                <Trophy size={14} style={{ color: 'var(--color-rocera-gold)' }} />
                <span
                  className="text-xs font-medium"
                  style={{ color: 'var(--color-rocera-gold)' }}
                >
                  {h.awards[0]?.place === '1st'
                    ? '1st Place'
                    : h.awards[0]?.place === '2nd'
                    ? '2nd Place'
                    : 'Finalist'}
                </span>
              </div>
            </article>
          ))}
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
