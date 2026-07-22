"use client"

const techStack = [
  { name: 'Next.js', category: 'Frontend' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'React', category: 'Frontend' },
  { name: 'Tailwind CSS', category: 'Styling' },
  { name: 'Python', category: 'Backend' },
  { name: 'Go', category: 'Backend' },
  { name: 'Rust', category: 'Systems' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'Redis', category: 'Database' },
  { name: 'Solidity', category: 'Blockchain' },
  { name: 'AWS', category: 'Cloud' },
  { name: 'Kubernetes', category: 'DevOps' },
  { name: 'Terraform', category: 'DevOps' },
  { name: 'Docker', category: 'DevOps' },
  { name: 'PyTorch', category: 'AI' },
  { name: 'LangChain', category: 'AI' },
]

const categoryColors: Record<string, { bg: string; text: string }> = {
  Frontend:   { bg: '#6366f115', text: '#818cf8' },
  Language:   { bg: '#8b5cf615', text: '#a78bfa' },
  Backend:    { bg: '#10b98115', text: '#34d399' },
  Systems:    { bg: '#ef444415', text: '#f87171' },
  Database:   { bg: '#f59e0b15', text: '#fbbf24' },
  Blockchain: { bg: '#ec489915', text: '#f472b6' },
  Cloud:      { bg: '#06b6d415', text: '#22d3ee' },
  DevOps:     { bg: '#84cc1615', text: '#a3e635' },
  AI:         { bg: '#c9a84c15', text: '#c9a84c' },
  Styling:    { bg: '#6366f110', text: '#6366f1' },
}

export function TechStackSection() {
  return (
    <section
      id="tech-stack"
      className="section-padding"
      style={{ background: 'var(--color-rocera-bg)' }}
    >
      <div className="container-rocera">
        <div className="text-center mb-14">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: 'var(--color-rocera-accent)' }}
          >
            Our Stack
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold tracking-tight"
            style={{ color: 'var(--color-rocera-text)' }}
          >
            Technologies We Master
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {techStack.map(({ name, category }) => {
            const colors = categoryColors[category] ?? { bg: '#6366f115', text: '#818cf8' }
            return (
              <div
                key={name}
                className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 cursor-default"
                style={{
                  background: 'var(--color-rocera-surface)',
                  border: '1px solid var(--color-rocera-border)',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.background = colors.bg
                  el.style.borderColor = colors.text + '40'
                  el.style.transform = 'scale(1.04)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.background = 'var(--color-rocera-surface)'
                  el.style.borderColor = 'var(--color-rocera-border)'
                  el.style.transform = 'scale(1)'
                }}
              >
                <span
                  className="text-xs font-semibold"
                  style={{ color: colors.text }}
                >
                  {category}
                </span>
                <span
                  className="text-sm font-medium"
                  style={{ color: 'var(--color-rocera-text)' }}
                >
                  {name}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
