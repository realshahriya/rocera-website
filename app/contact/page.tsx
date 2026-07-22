import { ContactForm } from '@/components/contact/ContactForm'
import { GitBranch, Link2, Mail, MessageSquare } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: "Start a project with Rocera. Tell us what you're building.",
}

const contactDetails = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@rocera.dev',
    href: 'mailto:hello@rocera.dev',
  },
  {
    icon: MessageSquare,
    label: 'Discord',
    value: 'discord.gg/rocera',
    href: 'https://discord.gg/rocera',
  },
  {
    icon: GitBranch,
    label: 'GitHub',
    value: 'github.com/rocera-dev',
    href: 'https://github.com/rocera-dev',
  },
  {
    icon: Link2,
    label: 'LinkedIn',
    value: 'linkedin.com/company/rocera',
    href: 'https://linkedin.com/company/rocera',
  },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-24 sm:pt-28 pb-16 sm:pb-24 px-4 sm:px-6" style={{ background: 'var(--color-rocera-bg)' }}>
      <div className="container-rocera">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left: info */}
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--color-rocera-accent)' }}
            >
              Get in Touch
            </p>
            <h1
              className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4 sm:mb-6"
              style={{ color: 'var(--color-rocera-text)' }}
            >
              Start a Project
            </h1>
            <p
              className="text-sm sm:text-base leading-relaxed mb-8 sm:mb-10"
              style={{ color: 'var(--color-rocera-muted-2)' }}
            >
              Tell us about what you&apos;re building. We respond within 24 hours with a clear proposal and timeline.
            </p>

            {/* Contact details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactDetails.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-3 p-3.5 rounded-xl border border-white/10 group transition-all duration-200 hover:bg-white/5"
                  style={{ background: 'var(--color-rocera-surface)' }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-200"
                    style={{ background: 'var(--color-rocera-surface-2)', border: '1px solid var(--color-rocera-border)' }}
                  >
                    <Icon size={16} style={{ color: 'var(--color-rocera-accent)' }} />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-[11px] font-mono uppercase" style={{ color: 'var(--color-rocera-muted)' }}>
                      {label}
                    </p>
                    <p
                      className="text-xs sm:text-sm font-semibold truncate transition-colors duration-200"
                      style={{ color: 'var(--color-rocera-text)' }}
                    >
                      {value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Response time */}
            <div
              className="mt-8 sm:mt-10 p-4 rounded-xl flex items-center gap-3"
              style={{ background: 'var(--color-rocera-surface)', border: '1px solid var(--color-rocera-border)' }}
            >
              <span
                className="w-2.5 h-2.5 rounded-full shrink-0"
                style={{ background: 'var(--color-rocera-success)' }}
              />
              <p className="text-xs sm:text-sm" style={{ color: 'var(--color-rocera-muted)' }}>
                Average response time:{' '}
                <span className="font-semibold" style={{ color: 'var(--color-rocera-text)' }}>under 24 hours</span>
              </p>
            </div>
          </div>

          {/* Right: form */}
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
