"use client"

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { Search, ExternalLink, GitBranch, X, Star } from 'lucide-react'
import type { Project } from '@/types/portfolio'

const statusColors = {
  completed: { bg: '#10b98115', text: '#10b981', label: 'Completed' },
  'in-progress': { bg: '#f59e0b15', text: '#f59e0b', label: 'In Progress' },
  archived: { bg: '#6b728015', text: '#6b7280', label: 'Archived' },
}

function ProjectCard({ project }: { project: Project }) {
  const status = statusColors[project.status]
  return (
    <article
      className="group rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1"
      style={{
        background: 'var(--color-rocera-surface)',
        border: '1px solid var(--color-rocera-border)',
      }}
    >
      <div
        className="h-36 sm:h-40 relative flex items-center justify-center p-4"
        style={{
          background: 'linear-gradient(135deg, var(--color-rocera-surface-2) 0%, var(--color-rocera-bg) 100%)',
        }}
      >
        <div className="absolute inset-0 grid-pattern opacity-20" />

        {/* GitHub Stars pill badge */}
        {project.stargazersCount !== undefined && (
          <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-black/40 backdrop-blur border border-white/10 text-amber-400">
            <Star size={11} className="fill-amber-400" />
            <span>{project.stargazersCount}</span>
          </div>
        )}

        <span className="text-4xl font-extrabold text-gradient opacity-25 group-hover:opacity-50 transition-opacity">
          {project.title.slice(0, 2).toUpperCase()}
        </span>
      </div>

      <div className="p-5 flex flex-col gap-3 flex-1">
        <div className="flex items-center justify-between">
          <span
            className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium"
            style={{ background: status.bg, color: status.text }}
          >
            {status.label}
          </span>
          <span className="text-xs font-mono" style={{ color: 'var(--color-rocera-muted)' }}>
            {new Date(project.date).getFullYear()}
          </span>
        </div>

        <div>
          <h2
            className="text-base sm:text-lg font-bold mb-1.5 group-hover:text-amber-300 transition-colors"
            style={{ color: 'var(--color-rocera-text)' }}
          >
            {project.title}
          </h2>
          <p className="text-xs sm:text-sm leading-relaxed line-clamp-2" style={{ color: 'var(--color-rocera-muted)' }}>
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded text-[11px] font-mono"
              style={{ background: 'var(--color-rocera-surface-2)', color: 'var(--color-rocera-muted-2)' }}
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span
              className="px-2 py-0.5 rounded text-[11px] font-mono"
              style={{ background: 'var(--color-rocera-surface-2)', color: 'var(--color-rocera-muted)' }}
            >
              +{project.tags.length - 4}
            </span>
          )}
        </div>

        <div
          className="flex items-center gap-3 pt-3"
          style={{ borderTop: '1px solid var(--color-rocera-border)' }}
        >
          <Link
            href={`/portfolio/${project.slug}`}
            className="btn-butter-secondary flex-1 text-center text-xs !py-2"
          >
            Read Case Study
          </Link>
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label="Demo" className="p-2 rounded-lg border border-white/10 hover:bg-white/5">
              <ExternalLink size={14} style={{ color: 'var(--color-rocera-muted)' }} />
            </a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository" className="p-2 rounded-lg border border-white/10 hover:bg-white/5">
              <GitBranch size={14} style={{ color: 'var(--color-rocera-muted)' }} />
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export function PortfolioClient({ projects, tags }: { projects: Project[]; tags: string[] }) {
  const [search, setSearch] = useState('')
  const [activeTag, setActiveTag] = useState<string | null>(null)
  const [activeStatus, setActiveStatus] = useState<string | null>(null)

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchSearch =
        !search ||
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase())
      const matchTag = !activeTag || p.tags.includes(activeTag)
      const matchStatus = !activeStatus || p.status === activeStatus
      return matchSearch && matchTag && matchStatus
    })
  }, [projects, search, activeTag, activeStatus])

  return (
    <div>
      {/* Search + filters */}
      <div className="flex flex-col gap-4 mb-10">
        {/* Search */}
        <div
          className="flex items-center gap-2 px-4 py-3 rounded-xl w-full sm:max-w-md"
          style={{
            background: 'var(--color-rocera-surface)',
            border: '1px solid var(--color-rocera-border)',
          }}
        >
          <Search size={16} style={{ color: 'var(--color-rocera-muted)' }} />
          <input
            id="portfolio-search"
            type="text"
            placeholder="Search projects by name or technology..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent outline-none text-sm w-full"
            style={{ color: 'var(--color-rocera-text)' }}
          />
          {search && (
            <button onClick={() => setSearch('')} aria-label="Clear search">
              <X size={14} style={{ color: 'var(--color-rocera-muted)' }} />
            </button>
          )}
        </div>

        {/* Status filter */}
        <div className="flex flex-wrap gap-2">
          {['completed', 'in-progress', 'archived'].map((status) => (
            <button
              key={status}
              id={`filter-status-${status}`}
              onClick={() => setActiveStatus(activeStatus === status ? null : status)}
              className="px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 capitalize"
              style={{
                background:
                  activeStatus === status
                    ? 'var(--color-rocera-accent)'
                    : 'var(--color-rocera-surface)',
                color:
                  activeStatus === status
                    ? '#fff'
                    : 'var(--color-rocera-muted)',
                border: '1px solid var(--color-rocera-border)',
              }}
            >
              {status.replace('-', ' ')}
            </button>
          ))}
        </div>

        {/* Tag filter */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {tags.slice(0, 16).map((tag) => (
            <button
              key={tag}
              id={`filter-tag-${tag.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setActiveTag(activeTag === tag ? null : tag)}
              className="px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-mono font-medium transition-all duration-200"
              style={{
                background:
                  activeTag === tag
                    ? 'color-mix(in srgb, var(--color-rocera-accent) 15%, transparent)'
                    : 'var(--color-rocera-surface)',
                color:
                  activeTag === tag
                    ? 'var(--color-rocera-accent)'
                    : 'var(--color-rocera-muted)',
                border:
                  activeTag === tag
                    ? '1px solid var(--color-rocera-accent)'
                    : '1px solid var(--color-rocera-border)',
              }}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Count */}
      <p className="text-xs sm:text-sm mb-6" style={{ color: 'var(--color-rocera-muted)' }}>
        Showing {filtered.length} of {projects.length} projects
      </p>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 sm:py-20 rounded-2xl border border-white/10" style={{ background: 'var(--color-rocera-surface)' }}>
          <p className="text-base sm:text-lg" style={{ color: 'var(--color-rocera-muted)' }}>
            No projects match your search or filters.
          </p>
          <button
            className="mt-4 text-xs sm:text-sm underline font-semibold"
            style={{ color: 'var(--color-rocera-accent)' }}
            onClick={() => { setSearch(''); setActiveTag(null); setActiveStatus(null) }}
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  )
}
