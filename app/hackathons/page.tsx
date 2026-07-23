import { getDedicatedHackathons } from '@/lib/hackathons'
import { Trophy, MapPin, Users, Calendar } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hackathons',
  description:
    "Rocera's hackathon history — awards, tech stacks, and results from top global competitions.",
}

export default async function HackathonsPage() {
  const hackathons = await getDedicatedHackathons()

  return (
    <div className="min-h-screen pt-24 sm:pt-28 pb-16 sm:pb-24 px-4 sm:px-6" style={{ background: 'var(--color-rocera-bg)' }}>
      <div className="container-rocera">
        {/* Header */}
        <div className="max-w-2xl mb-12 sm:mb-20">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: 'var(--color-rocera-accent)' }}
          >
            Competition Track Record
          </p>
          <h1
            className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4"
            style={{ color: 'var(--color-rocera-text)' }}
          >
            Hackathons & Podium Wins
          </h1>
          <p className="text-sm sm:text-lg leading-relaxed" style={{ color: 'var(--color-rocera-muted-2)' }}>
            We compete at premier global hackathons to test new technology under extreme time constraints and prove engineering capability under pressure.
          </p>
        </div>

        {/* Competition Achievements Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Glowing Axis Line */}
          <div
            className="absolute left-3 sm:left-4 md:left-8 top-0 bottom-0 w-0.5"
            style={{ background: 'linear-gradient(180deg, var(--color-rocera-accent) 0%, var(--color-rocera-gold) 50%, var(--color-rocera-border) 100%)' }}
          />

          <div className="flex flex-col gap-8 sm:gap-12">
            {hackathons.map((h) => (
              <article key={h.id} className="relative pl-8 sm:pl-12 md:pl-24 group">
                {/* Timeline Pulsing Node */}
                <div
                  className="absolute left-[7px] sm:left-[11px] md:left-[27px] top-5 w-3.5 h-3.5 rounded-full border-2 border-indigo-400 bg-indigo-500 shadow-[0_0_12px_rgba(99,102,241,0.8)] transition-transform duration-300 group-hover:scale-125"
                />

                {/* Event Card */}
                <div
                  className="p-5 sm:p-6 md:p-8 rounded-2xl transition-all duration-300 group-hover:-translate-y-1"
                  style={{
                    background: 'var(--color-rocera-surface)',
                    border: '1px solid var(--color-rocera-border)',
                  }}
                >
                  {/* Date & Location */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-1.5 text-xs font-mono text-indigo-400">
                      <Calendar size={13} />
                      <span>{new Date(h.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}</span>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-gray-400">
                      <span className="flex items-center gap-1">
                        <MapPin size={13} /> {h.location}
                      </span>
                      {h.teamSize && (
                        <span className="flex items-center gap-1">
                          <Users size={13} /> {h.teamSize}-person team
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Trophy Badges */}
                  {h.awards && h.awards.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {h.awards.map((award) => (
                        <div
                          key={award.category}
                          className="flex flex-wrap items-center gap-1.5 px-3 py-1.5 rounded-xl text-[11px] sm:text-xs font-semibold bg-amber-400/10 text-amber-300 border border-amber-400/25"
                        >
                          <Trophy size={12} className="text-amber-400 shrink-0" />
                          <span>{award.place === '1st' ? '🥇 1st Place' : award.place === '2nd' ? '🥈 2nd Place' : '🏅 Finalist'} — {award.category}</span>
                          {award.prize && <span className="font-mono text-amber-200">({award.prize})</span>}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Event Title & Description */}
                  <h2
                    className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight mb-3 group-hover:text-amber-300 transition-colors"
                    style={{ color: 'var(--color-rocera-text)' }}
                  >
                    {h.name}
                  </h2>

                  <p className="text-xs sm:text-sm leading-relaxed mb-6" style={{ color: 'var(--color-rocera-muted-2)' }}>
                    {h.description}
                  </p>

                  {/* Tech Stack Used */}
                  {h.techStack && h.techStack.length > 0 && (
                    <div>
                      <p
                        className="text-[10px] sm:text-xs uppercase tracking-widest font-mono font-semibold mb-2 text-gray-400"
                      >
                        STACK BUILT
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {h.techStack.map((t) => (
                          <span
                            key={t.name}
                            className="px-2.5 py-1 rounded-lg text-[11px] sm:text-xs font-mono"
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
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
