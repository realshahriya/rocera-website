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
    <div className="min-h-screen pt-24 pb-20" style={{ background: 'var(--color-rocera-bg)' }}>
      <div className="container-rocera">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: info */}
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--color-rocera-accent)' }}
            >
              Get in Touch
            </p>
            <h1
              className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
              style={{ color: 'var(--color-rocera-text)' }}
            >
              Start a Project
            </h1>
            <p
              className="text-base leading-relaxed mb-10"
              style={{ color: 'var(--color-rocera-muted-2)' }}
            >
              Tell us about what you&apos;re building. We respond within 24 hours with a
              clear proposal and timeline.
            </p>

            {/* Contact details */}
            <div className="flex flex-col gap-4">
              {contactDetails.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-3 group transition-colors duration-200"
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-200"
                    style={{ background: 'var(--color-rocera-surface)', border: '1px solid var(--color-rocera-border)' }}
                  >
                    <Icon size={15} style={{ color: 'var(--color-rocera-accent)' }} />
                  </div>
                  <div>
                    <p className="text-xs" style={{ color: 'var(--color-rocera-muted)' }}>
                      {label}
                    </p>
                    <p
                      className="text-sm font-medium transition-colors duration-200"
                      style={{ color: 'var(--color-rocera-muted-2)' }}
                    >
                      {value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Response time */}
            <div
              className="mt-10 p-4 rounded-xl flex items-center gap-3"
              style={{ background: 'var(--color-rocera-surface)', border: '1px solid var(--color-rocera-border)' }}
            >
              <span
                className="w-2 h-2 rounded-full shrink-0"
                style={{ background: 'var(--color-rocera-success)' }}
              />
              <p className="text-sm" style={{ color: 'var(--color-rocera-muted)' }}>
                Average response time:{' '}
                <span style={{ color: 'var(--color-rocera-text)' }}>under 24 hours</span>
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
