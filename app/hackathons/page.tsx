import hackathons from '@/content/hackathons.json'
import { Trophy, MapPin, Users, Calendar } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hackathons',
  description:
    "Rocera's hackathon history — awards, tech stacks, and results from top global competitions.",
}

export default function HackathonsPage() {
  return (
    <div className="min-h-screen pt-24 pb-20" style={{ background: 'var(--color-rocera-bg)' }}>
      <div className="container-rocera">
        {/* Header */}
        <div className="max-w-2xl mb-20">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: 'var(--color-rocera-accent)' }}
          >
            Competition Record
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
            style={{ color: 'var(--color-rocera-text)' }}
          >
            Hackathons
          </h1>
          <p className="text-base leading-relaxed" style={{ color: 'var(--color-rocera-muted-2)' }}>
            We compete at the world&apos;s top hackathons to sharpen our craft, test new
            technologies, and prove our engineering ability under pressure.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-4 md:left-8 top-0 bottom-0 w-px"
            style={{ background: 'var(--color-rocera-border)' }}
          />

          <div className="flex flex-col gap-12">
            {hackathons.map((h, i) => (
              <article key={h.id} className="relative pl-14 md:pl-24">
                {/* Timeline dot */}
                <div
                  className="absolute left-2.5 md:left-6 top-3 w-3 h-3 rounded-full"
                  style={{ background: 'var(--color-rocera-accent)', boxShadow: '0 0 12px var(--color-rocera-accent)' }}
                />

                {/* Year marker */}
                <div
                  className="text-xs font-mono mb-3"
                  style={{ color: 'var(--color-rocera-muted)' }}
                >
                  {new Date(h.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}
                </div>

                {/* Card */}
                <div
                  className="p-6 md:p-8 rounded-xl"
                  style={{
                    background: 'var(--color-rocera-surface)',
                    border: '1px solid var(--color-rocera-border)',
                  }}
                >
                  {/* Awards */}
                  {h.awards.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {h.awards.map((award) => (
                        <div
                          key={award.category}
                          className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium"
                          style={{
                            background: 'color-mix(in srgb, var(--color-rocera-gold) 10%, transparent)',
                            color: 'var(--color-rocera-gold)',
                          }}
                        >
                          <Trophy size={11} />
                          {award.place === '1st' ? '🥇' : award.place === '2nd' ? '🥈' : '🏅'}{' '}
                          {award.category}
                          {award.prize && ` — ${award.prize}`}
                        </div>
                      ))}
                    </div>
                  )}

                  <h2
                    className="text-xl font-bold tracking-tight mb-2"
                    style={{ color: 'var(--color-rocera-text)' }}
                  >
                    {h.name}
                  </h2>

                  <div className="flex flex-wrap gap-4 mb-4 text-xs" style={{ color: 'var(--color-rocera-muted)' }}>
                    <span className="flex items-center gap-1">
                      <MapPin size={12} /> {h.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users size={12} /> {h.teamSize}-person team
                    </span>
                  </div>

                  <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--color-rocera-muted-2)' }}>
                    {h.description}
                  </p>

                  {/* Tech stack */}
                  <div>
                    <p
                      className="text-xs uppercase tracking-widest font-semibold mb-2"
                      style={{ color: 'var(--color-rocera-muted)' }}
                    >
                      Stack Used
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {h.techStack.map((t) => (
                        <span
                          key={t.name}
                          className="px-2 py-0.5 rounded text-xs"
                          style={{
                            background: 'var(--color-rocera-surface-2)',
                            color: 'var(--color-rocera-muted-2)',
                          }}
                        >
                          {t.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
