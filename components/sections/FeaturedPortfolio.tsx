"use client"

import Link from 'next/link'
import { ExternalLink, GitBranch, ArrowRight, Star } from 'lucide-react'
import type { Project } from '@/types/portfolio'

const statusColors = {
  completed: { bg: '#10b98115', text: '#10b981', label: 'Completed' },
  'in-progress': { bg: '#f59e0b15', text: '#f59e0b', label: 'In Progress' },
  archived: { bg: '#6b728015', text: '#6b7280', label: 'Archived' },
}

export function FeaturedPortfolio({ projects }: { projects: Project[] }) {
  if (!projects || projects.length === 0) return null

  const spotlight = projects[0]
  const second = projects[1]
  const third = projects[2]

  return (
    <section
      id="featured-portfolio"
      className="section-padding relative overflow-hidden"
      style={{ background: 'var(--color-rocera-surface)' }}
    >
      <div className="container-rocera relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--color-rocera-accent)' }}
            >
              Our Engineering Portfolio
            </p>
            <h2
              className="text-3xl md:text-5xl font-extrabold tracking-tight"
              style={{ color: 'var(--color-rocera-text)' }}
            >
              Featured Projects
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-2 text-sm font-semibold shrink-0 transition-colors duration-200"
            style={{ color: 'var(--color-rocera-accent)' }}
          >
            View all projects
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Bento Box Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Bento Card 1 — Large Featured Spotlight Project (Spans 2 Columns) */}
          {spotlight && (
            <article
              className="group relative rounded-3xl p-8 sm:p-10 overflow-hidden flex flex-col justify-between lg:col-span-2 transition-all duration-500 hover:scale-[1.01]"
              style={{
                background: 'linear-gradient(135deg, var(--color-rocera-bg) 0%, var(--color-rocera-surface-2) 100%)',
                border: '1px solid var(--color-rocera-border-2)',
              }}
            >
              <div className="absolute top-0 right-0 w-80 h-80 rounded-full blur-[100px] pointer-events-none opacity-20 bg-indigo-500" />
              <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />

              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-mono font-medium"
                    style={{
                      background: statusColors[spotlight.status].bg,
                      color: statusColors[spotlight.status].text,
                    }}
                  >
                    FEATURED • {statusColors[spotlight.status].label.toUpperCase()}
                  </span>

                  {spotlight.stargazersCount !== undefined && (
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-black/40 border border-white/10 text-amber-400">
                      <Star size={12} className="fill-amber-400" />
                      <span>{spotlight.stargazersCount} Stars</span>
                    </div>
                  )}
                </div>

                <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight mb-4 group-hover:text-amber-300 transition-colors" style={{ color: 'var(--color-rocera-text)' }}>
                  {spotlight.title}
                </h3>
                <p className="text-sm sm:text-base leading-relaxed max-w-2xl mb-8" style={{ color: 'var(--color-rocera-muted-2)' }}>
                  {spotlight.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mb-8">
                  {spotlight.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-lg text-xs font-mono"
                      style={{ background: 'var(--color-rocera-surface-2)', color: 'var(--color-rocera-muted-2)' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                  <Link
                    href={`/portfolio/${spotlight.slug}`}
                    className="btn-butter text-xs !py-2.5 !px-5"
                  >
                    Read Full Case Study
                    <ArrowRight size={14} />
                  </Link>
                  {spotlight.demo && (
                    <a href={spotlight.demo} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl border border-white/10 hover:bg-white/5 transition-colors">
                      <ExternalLink size={16} style={{ color: 'var(--color-rocera-muted)' }} />
                    </a>
                  )}
                  {spotlight.github && (
                    <a href={spotlight.github} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl border border-white/10 hover:bg-white/5 transition-colors">
                      <GitBranch size={16} style={{ color: 'var(--color-rocera-muted)' }} />
                    </a>
                  )}
                </div>
              </div>
            </article>
          )}

          {/* Bento Card 2 — Vertical Highlight Card */}
          {second && (
            <article
              className="group relative rounded-3xl p-8 overflow-hidden flex flex-col justify-between transition-all duration-500 hover:scale-[1.01]"
              style={{
                background: 'var(--color-rocera-bg)',
                border: '1px solid var(--color-rocera-border)',
              }}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span
                    className="px-2.5 py-1 rounded-full text-xs font-mono"
                    style={{
                      background: statusColors[second.status].bg,
                      color: statusColors[second.status].text,
                    }}
                  >
                    {statusColors[second.status].label}
                  </span>
                  {second.stargazersCount !== undefined && (
                    <div className="flex items-center gap-1 text-xs font-mono text-amber-400">
                      <Star size={12} className="fill-amber-400" />
                      <span>{second.stargazersCount}</span>
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-amber-300 transition-colors" style={{ color: 'var(--color-rocera-text)' }}>
                  {second.title}
                </h3>
                <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--color-rocera-muted)' }}>
                  {second.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {second.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-xs font-mono"
                      style={{ background: 'var(--color-rocera-surface-2)', color: 'var(--color-rocera-muted-2)' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                  <Link
                    href={`/portfolio/${second.slug}`}
                    className="btn-butter-secondary flex-1 text-center text-xs !py-2"
                  >
                    Read Case Study
                  </Link>
                  {second.github && (
                    <a href={second.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg border border-white/10 hover:bg-white/5">
                      <GitBranch size={15} style={{ color: 'var(--color-rocera-muted)' }} />
                    </a>
                  )}
                </div>
              </div>
            </article>
          )}

          {/* Bento Card 3 — Wide Project Banner Card (Spans 3 Columns on lg) */}
          {third && (
            <article
              className="group relative rounded-3xl p-8 sm:p-10 overflow-hidden flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 lg:col-span-3 transition-all duration-500 hover:scale-[1.01]"
              style={{
                background: 'linear-gradient(135deg, var(--color-rocera-surface-2) 0%, var(--color-rocera-bg) 100%)',
                border: '1px solid var(--color-rocera-border-2)',
              }}
            >
              <div className="max-w-2xl">
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="px-2.5 py-0.5 rounded-full text-xs font-mono"
                    style={{
                      background: statusColors[third.status].bg,
                      color: statusColors[third.status].text,
                    }}
                  >
                    {statusColors[third.status].label}
                  </span>
                  <span className="text-xs font-mono text-gray-500">{new Date(third.date).getFullYear()}</span>
                </div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-amber-300 transition-colors" style={{ color: 'var(--color-rocera-text)' }}>
                  {third.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-rocera-muted-2)' }}>
                  {third.description}
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <Link href={`/portfolio/${third.slug}`} className="btn-butter text-xs !py-2.5 !px-6">
                  Read Case Study
                </Link>
                {third.github && (
                  <a href={third.github} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl border border-white/10 hover:bg-white/5">
                    <GitBranch size={16} style={{ color: 'var(--color-rocera-muted)' }} />
                  </a>
                )}
              </div>
            </article>
          )}
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
