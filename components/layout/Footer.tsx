"use client"

import Link from 'next/link'
import { GitBranch, Link2, Mail, MessageSquare } from 'lucide-react'
import { RoceraLogo } from '@/components/ui/RoceraLogo'

const footerLinks = {
  Company: [
    { href: '/about', label: 'About' },
    { href: '/team', label: 'Team' },
    { href: '/hackathons', label: 'Hackathons' },
    { href: '/contact', label: 'Contact' },
  ],
  Services: [
    { href: '/services', label: 'Full Stack Development' },
    { href: '/services', label: 'AI Engineering' },
    { href: '/services', label: 'Blockchain Engineering' },
    { href: '/services', label: 'Cloud & DevOps' },
  ],
  Work: [
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/portfolio?tag=open-source', label: 'Open Source' },
  ],
}

const socialLinks = [
  { href: 'https://github.com/rocera-dev', label: 'GitHub', Icon: GitBranch },
  { href: 'https://linkedin.com/company/rocera', label: 'LinkedIn', Icon: Link2 },
  { href: 'https://discord.gg/rocera', label: 'Discord', Icon: MessageSquare },
  { href: 'mailto:hello@rocera.dev', label: 'Email', Icon: Mail },
]

export function Footer() {
  return (
    <footer
      style={{
        background: 'var(--color-rocera-surface)',
        borderTop: '1px solid var(--color-rocera-border)',
      }}
    >
      <div className="container-rocera py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <RoceraLogo className="w-8 h-8" />
              <span
                className="font-semibold text-lg tracking-tight"
                style={{ color: 'var(--color-rocera-text)' }}
              >
                Rocera
              </span>
            </Link>
            <p
              className="text-sm leading-relaxed mb-6 max-w-xs"
              style={{ color: 'var(--color-rocera-muted)' }}
            >
              Premium technology agency. We build exceptional software that lasts.
            </p>
            <p
              className="text-xs font-mono tracking-widest uppercase"
              style={{ color: 'var(--color-rocera-gold)' }}
            >
              Secure. Own. Advance.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  className="p-2 rounded-md transition-all duration-200"
                  style={{ color: 'var(--color-rocera-muted)' }}
                  onMouseEnter={(e) => {
                    ;(e.currentTarget as HTMLElement).style.color =
                      'var(--color-rocera-text)'
                    ;(e.currentTarget as HTMLElement).style.background =
                      'var(--color-rocera-surface-2)'
                  }}
                  onMouseLeave={(e) => {
                    ;(e.currentTarget as HTMLElement).style.color =
                      'var(--color-rocera-muted)'
                    ;(e.currentTarget as HTMLElement).style.background = 'transparent'
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: 'var(--color-rocera-muted)' }}
              >
                {category}
              </h3>
              <ul className="flex flex-col gap-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors duration-200"
                      style={{ color: 'var(--color-rocera-muted)' }}
                      onMouseEnter={(e) =>
                        ((e.currentTarget as HTMLElement).style.color =
                          'var(--color-rocera-text)')
                      }
                      onMouseLeave={(e) =>
                        ((e.currentTarget as HTMLElement).style.color =
                          'var(--color-rocera-muted)')
                      }
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4 mt-12 pt-8"
          style={{ borderTop: '1px solid var(--color-rocera-border)' }}
        >
          <p className="text-xs" style={{ color: 'var(--color-rocera-muted)' }}>
            © {new Date().getFullYear()} Rocera. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: 'var(--color-rocera-muted)' }}>
            Built with Next.js · TypeScript · Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
