import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function CTASection() {
  return (
    <section
      id="cta"
      className="section-padding"
      style={{ background: 'var(--color-rocera-bg)' }}
    >
      <div className="container-rocera">
        <div
          className="relative rounded-2xl overflow-hidden p-10 md:p-16 text-center"
          style={{
            background:
              'linear-gradient(135deg, var(--color-rocera-surface) 0%, color-mix(in srgb, var(--color-rocera-accent) 5%, var(--color-rocera-surface)) 100%)',
            border: '1px solid var(--color-rocera-border)',
          }}
        >
          {/* Background grid */}
          <div className="absolute inset-0 grid-pattern opacity-15" />

          {/* Spotlight */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 60% 50% at 50% 0%, color-mix(in srgb, var(--color-rocera-accent) 10%, transparent) 0%, transparent 70%)',
            }}
          />

          <div className="relative z-10">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: 'var(--color-rocera-gold)' }}
            >
              Let&apos;s Build Together
            </p>
            <h2
              className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
              style={{ color: 'var(--color-rocera-text)' }}
            >
              Ready to Start Your Project?
            </h2>
            <p
              className="text-base md:text-lg max-w-xl mx-auto mb-10"
              style={{ color: 'var(--color-rocera-muted-2)' }}
            >
              Tell us what you&apos;re building. We&apos;ll get back to you within 24 hours with
              a clear path forward.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                id="cta-start-project"
                className="group flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm transition-all duration-300"
                style={{
                  background: 'var(--color-rocera-accent)',
                  color: '#fff',
                  boxShadow:
                    '0 0 30px color-mix(in srgb, var(--color-rocera-accent) 30%, transparent)',
                }}
              >
                Start a Project
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
              <Link
                href="/portfolio"
                id="cta-view-portfolio"
                className="flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm transition-all duration-300"
                style={{
                  background: 'transparent',
                  color: 'var(--color-rocera-text)',
                  border: '1px solid var(--color-rocera-border)',
                }}
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
