import Link from 'next/link'
import { RoceraLogo } from '@/components/ui/RoceraLogo'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Rocera — our story, mission, and approach to engineering.',
}

const values = [
  {
    title: 'Engineering First',
    description:
      "We start every project by understanding the problem at a systems level. No premature solutions. No cargo-culted frameworks. Just clear thinking and the right tools for the job.",
  },
  {
    title: 'Craftsmanship Over Speed',
    description:
      "We'd rather take an extra day to get an architecture decision right than spend a month refactoring bad choices. Quality is built in from the start, not added at the end.",
  },
  {
    title: 'Long-Term Partnership',
    description:
      "Most of our clients come back. We treat client code like our own — with care, ownership, and pride. We write code we'd be comfortable maintaining five years from now.",
  },
  {
    title: 'Honest Communication',
    description:
      "We tell clients what they need to hear, not what they want to hear. If a technical approach won't work, we say so and propose a better one — clearly and early.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-20" style={{ background: 'var(--color-rocera-bg)' }}>
      <div className="container-rocera">

        {/* Hero area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: 'var(--color-rocera-accent)' }}
            >
              Our Story
            </p>
            <h1
              className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
              style={{ color: 'var(--color-rocera-text)' }}
            >
              Built by Engineers,
              <br />
              <span
                style={{
                  background: 'linear-gradient(135deg, var(--color-rocera-accent), var(--color-rocera-gold))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                For Engineers.
              </span>
            </h1>
            <p
              className="text-base leading-relaxed mb-6"
              style={{ color: 'var(--color-rocera-muted-2)' }}
            >
              Rocera was founded on a simple conviction: the best software comes from
              teams who care deeply about their craft. We&apos;re not a typical agency —
              we&apos;re engineers who happen to work with clients.
            </p>
            <p
              className="text-base leading-relaxed"
              style={{ color: 'var(--color-rocera-muted-2)' }}
            >
              Our name is a blend of &ldquo;Rococo&rdquo; precision and &ldquo;Acera&rdquo; forward motion —
              reflecting our commitment to timeless craftsmanship in a fast-moving
              industry.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div
              className="relative p-12 rounded-2xl"
              style={{
                background: 'var(--color-rocera-surface)',
                border: '1px solid var(--color-rocera-border)',
              }}
            >
              <RoceraLogo className="w-32 h-32 opacity-90" />
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                  background:
                    'radial-gradient(ellipse at center, color-mix(in srgb, var(--color-rocera-accent) 5%, transparent) 0%, transparent 70%)',
                }}
              />
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-24">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: 'var(--color-rocera-accent)' }}
          >
            How We Work
          </p>
          <h2
            className="text-3xl font-bold tracking-tight mb-12"
            style={{ color: 'var(--color-rocera-text)' }}
          >
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="p-6 rounded-xl"
                style={{
                  background: 'var(--color-rocera-surface)',
                  border: '1px solid var(--color-rocera-border)',
                }}
              >
                <h3
                  className="text-base font-semibold mb-3"
                  style={{ color: 'var(--color-rocera-text)' }}
                >
                  {v.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-rocera-muted)' }}>
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          className="p-10 rounded-2xl text-center"
          style={{
            background: 'var(--color-rocera-surface)',
            border: '1px solid var(--color-rocera-border)',
          }}
        >
          <h2
            className="text-2xl font-bold tracking-tight mb-3"
            style={{ color: 'var(--color-rocera-text)' }}
          >
            Want to work with us?
          </h2>
          <p className="text-sm mb-6" style={{ color: 'var(--color-rocera-muted)' }}>
            We&apos;re always open to interesting projects and great people.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm"
            style={{ background: 'var(--color-rocera-accent)', color: '#fff' }}
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  )
}
