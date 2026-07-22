"use client"

export function AboutSection() {
  const pillars = [
    {
      icon: '⚡',
      title: 'Build Exceptional Software',
      description:
        'We obsess over architecture, code quality, and long-term maintainability. Every system we ship is designed to scale.',
    },
    {
      icon: '🧩',
      title: 'Solve Difficult Problems',
      description:
        'We tackle the hard engineering challenges that others avoid — distributed systems, ML pipelines, cryptographic protocols.',
    },
    {
      icon: '⏳',
      title: 'Create Long-Term Value',
      description:
        'We build lasting partnerships, not just deliverables. Our clients come back because the software we ship continues to deliver.',
    },
    {
      icon: '🎯',
      title: 'Earn Trust Through Craft',
      description:
        "Craftsmanship is our differentiator. We take pride in clean interfaces, performant systems, and software that's a pleasure to use.",
    },
  ]

  return (
    <section
      id="about-preview"
      className="section-padding"
      style={{ background: 'var(--color-rocera-surface)' }}
    >
      <div className="container-rocera">
        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: 'var(--color-rocera-accent)' }}
          >
            Who We Are
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4" style={{ color: 'var(--color-rocera-text)' }}>
            A Premium Engineering Team
          </h2>
          <p className="text-base leading-relaxed" style={{ color: 'var(--color-rocera-muted-2)' }}>
            Rocera is a technology agency and engineering team that builds software for
            clients while pushing the boundaries of what&apos;s possible through hackathons,
            open-source, and research. We are engineering-first by design.
          </p>
        </div>

        {/* Mission pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.title}
              className="p-6 rounded-xl transition-all duration-300 group"
              style={{
                background: 'var(--color-rocera-bg)',
                border: '1px solid var(--color-rocera-border)',
                animationDelay: `${i * 100}ms`,
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLElement).style.border =
                  '1px solid var(--color-rocera-border-2)'
                ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLElement).style.border =
                  '1px solid var(--color-rocera-border)'
                ;(e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
              }}
            >
              <span className="text-2xl mb-4 block">{pillar.icon}</span>
              <h3
                className="text-sm font-semibold mb-2"
                style={{ color: 'var(--color-rocera-text)' }}
              >
                {pillar.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-rocera-muted)' }}>
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
