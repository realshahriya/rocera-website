"use client"

import Link from 'next/link'
import { ExternalLink, GitBranch, ArrowRight } from 'lucide-react'
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
      className="group rounded-xl overflow-hidden flex flex-col transition-all duration-300"
      style={{
        background: 'var(--color-rocera-surface)',
        border: '1px solid var(--color-rocera-border)',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement
        el.style.border = '1px solid var(--color-rocera-border-2)'
        el.style.transform = 'translateY(-4px)'
        el.style.boxShadow = '0 16px 40px rgba(0,0,0,0.3)'
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement
        el.style.border = '1px solid var(--color-rocera-border)'
        el.style.transform = 'translateY(0)'
        el.style.boxShadow = 'none'
      }}
    >
      {/* Image placeholder */}
      <div
        className="h-44 relative overflow-hidden flex items-center justify-center"
        style={{
          background:
            'linear-gradient(135deg, var(--color-rocera-surface-2) 0%, var(--color-rocera-bg) 100%)',
        }}
      >
        <div
          className="absolute inset-0 grid-pattern opacity-20"
        />
        <span
          className="text-4xl font-bold tracking-tighter text-gradient opacity-30"
        >
          {project.title.slice(0, 2).toUpperCase()}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        {/* Status + date */}
        <div className="flex items-center justify-between">
          <span
            className="px-2 py-0.5 rounded-full text-xs font-medium"
            style={{ background: status.bg, color: status.text }}
          >
            {status.label}
          </span>
          <span className="text-xs" style={{ color: 'var(--color-rocera-muted)' }}>
            {new Date(project.date).getFullYear()}
          </span>
        </div>

        {/* Title + desc */}
        <div>
          <h3
            className="text-base font-semibold mb-1.5 group-hover:text-gradient-accent transition-all"
            style={{ color: 'var(--color-rocera-text)' }}
          >
            {project.title}
          </h3>
          <p className="text-xs leading-relaxed line-clamp-3" style={{ color: 'var(--color-rocera-muted)' }}>
            {project.description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mt-auto">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded text-xs"
              style={{
                background: 'var(--color-rocera-surface-2)',
                color: 'var(--color-rocera-muted-2)',
              }}
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span
              className="px-2 py-0.5 rounded text-xs"
              style={{
                background: 'var(--color-rocera-surface-2)',
                color: 'var(--color-rocera-muted)',
              }}
            >
              +{project.tags.length - 4}
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 pt-2" style={{ borderTop: '1px solid var(--color-rocera-border)' }}>
          <Link
            href={`/portfolio/${project.slug}`}
            className="flex-1 text-center py-1.5 rounded-md text-xs font-medium transition-colors duration-200"
            style={{
              background: 'color-mix(in srgb, var(--color-rocera-accent) 10%, transparent)',
              color: 'var(--color-rocera-accent)',
            }}
          >
            Read more
          </Link>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live demo"
              className="p-1.5 rounded-md transition-colors duration-200"
              style={{ color: 'var(--color-rocera-muted)' }}
            >
              <ExternalLink size={14} />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-1.5 rounded-md transition-colors duration-200"
              style={{ color: 'var(--color-rocera-muted)' }}
            >
              <GitBranch size={14} />
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export function FeaturedPortfolio({ projects }: { projects: Project[] }) {
  return (
    <section
      id="featured-portfolio"
      className="section-padding"
      style={{ background: 'var(--color-rocera-surface)' }}
    >
      <div className="container-rocera">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--color-rocera-accent)' }}
            >
              Our Work
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold tracking-tight"
              style={{ color: 'var(--color-rocera-text)' }}
            >
              Featured Projects
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="group flex items-center gap-1.5 text-sm font-medium shrink-0 transition-colors duration-200"
            style={{ color: 'var(--color-rocera-accent)' }}
          >
            View all projects
            <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
