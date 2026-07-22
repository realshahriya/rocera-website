import { getAllProjects, getAllTags } from '@/lib/portfolio'
import { PortfolioClient } from '@/components/portfolio/PortfolioClient'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'Explore Rocera\'s portfolio — production AI systems, DeFi protocols, SaaS platforms, and open-source tools built with engineering excellence.',
}

export default async function PortfolioPage() {
  const projects = await getAllProjects()
  const tags = getAllTags(projects)

  return (
    <div className="min-h-screen pt-24 pb-20" style={{ background: 'var(--color-rocera-bg)' }}>
      <div className="container-rocera">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: 'var(--color-rocera-accent)' }}
          >
            Our Work
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
            style={{ color: 'var(--color-rocera-text)' }}
          >
            Portfolio
          </h1>
          <p className="text-base leading-relaxed" style={{ color: 'var(--color-rocera-muted-2)' }}>
            Production systems, open-source tools, and research prototypes built with
            engineering excellence.
          </p>
        </div>

        {/* Client: filtering + search */}
        <PortfolioClient projects={projects} tags={tags} />
      </div>
    </div>
  )
}
