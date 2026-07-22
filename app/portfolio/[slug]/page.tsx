import { getProjectBySlug, getAllProjectSlugs } from '@/lib/portfolio'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, GitBranch, Calendar, Tag } from 'lucide-react'
import type { Metadata } from 'next'

export async function generateStaticParams() {
  const slugs = await getAllProjectSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = await getProjectBySlug(slug)
  if (!project) return { title: 'Project Not Found' }
  return {
    title: project.title,
    description: project.description,
  }
}

const statusColors = {
  completed: { bg: '#10b98115', text: '#10b981', label: 'Completed' },
  'in-progress': { bg: '#f59e0b15', text: '#f59e0b', label: 'In Progress' },
  archived: { bg: '#6b728015', text: '#6b7280', label: 'Archived' },
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = await getProjectBySlug(slug)
  if (!project) notFound()

  const status = statusColors[project.status]

  return (
    <div className="min-h-screen pt-24 sm:pt-28 pb-16 sm:pb-24 px-4 sm:px-6" style={{ background: 'var(--color-rocera-bg)' }}>
      <div className="container-rocera">
        {/* Back Button */}
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-xs sm:text-sm mb-8 transition-colors duration-200"
          style={{ color: 'var(--color-rocera-muted)' }}
        >
          <ArrowLeft size={16} />
          Back to Portfolio
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Main content */}
          <div className="lg:col-span-2">
            {/* Title */}
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4"
              style={{ color: 'var(--color-rocera-text)' }}
            >
              {project.title}
            </h1>
            <p className="text-base sm:text-lg mb-8 leading-relaxed" style={{ color: 'var(--color-rocera-muted-2)' }}>
              {project.description}
            </p>

            {/* Markdown Case Study Body */}
            <div
              className="prose-rocera max-w-full overflow-hidden"
              dangerouslySetInnerHTML={{ __html: project.content ?? '' }}
            />
          </div>

          {/* Sidebar */}
          <aside className="flex flex-col gap-6">
            {/* Status */}
            <div
              className="p-6 rounded-2xl"
              style={{
                background: 'var(--color-rocera-surface)',
                border: '1px solid var(--color-rocera-border)',
              }}
            >
              <h2
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: 'var(--color-rocera-muted)' }}
              >
                Project Details
              </h2>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <span
                    className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium"
                    style={{ background: status.bg, color: status.text }}
                  >
                    {status.label}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm font-mono" style={{ color: 'var(--color-rocera-muted)' }}>
                  <Calendar size={14} />
                  {new Date(project.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}
                </div>
              </div>
            </div>

            {/* Links */}
            {(project.demo || project.github) && (
              <div
                className="p-6 rounded-2xl flex flex-col gap-3"
                style={{
                  background: 'var(--color-rocera-surface)',
                  border: '1px solid var(--color-rocera-border)',
                }}
              >
                <h2
                  className="text-xs font-semibold uppercase tracking-widest"
                  style={{ color: 'var(--color-rocera-muted)' }}
                >
                  Links
                </h2>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium transition-colors duration-200"
                    style={{ color: 'var(--color-rocera-accent)' }}
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium transition-colors duration-200"
                    style={{ color: 'var(--color-rocera-muted-2)' }}
                  >
                    <GitBranch size={14} />
                    GitHub Repository
                  </a>
                )}
              </div>
            )}

            {/* Tags */}
            <div
              className="p-6 rounded-2xl"
              style={{
                background: 'var(--color-rocera-surface)',
                border: '1px solid var(--color-rocera-border)',
              }}
            >
              <h2
                className="text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: 'var(--color-rocera-muted)' }}
              >
                Technologies
              </h2>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-mono"
                    style={{
                      background: 'var(--color-rocera-surface-2)',
                      color: 'var(--color-rocera-muted-2)',
                    }}
                  >
                    <Tag size={10} />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
