import teamData from '@/content/team.json'
import { GitBranch, Link2, X as XIcon, Mail } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Team',
  description: 'Meet the engineers, designers, and builders behind Rocera.',
}

export default function TeamPage() {
  return (
    <div className="min-h-screen pt-24 pb-20" style={{ background: 'var(--color-rocera-bg)' }}>
      <div className="container-rocera">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: 'var(--color-rocera-accent)' }}
          >
            The People
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
            style={{ color: 'var(--color-rocera-text)' }}
          >
            Our Team
          </h1>
          <p className="text-base leading-relaxed" style={{ color: 'var(--color-rocera-muted-2)' }}>
            Engineers, designers, and researchers who care deeply about craft and are
            relentlessly focused on building software that lasts.
          </p>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamData.map((member) => (
            <article
              key={member.id}
              className="p-6 rounded-xl flex flex-col gap-4"
              style={{
                background: 'var(--color-rocera-surface)',
                border: '1px solid var(--color-rocera-border)',
              }}
            >
              {/* Avatar */}
              <div
                className="w-16 h-16 rounded-xl flex items-center justify-center text-2xl font-bold"
                style={{
                  background:
                    'linear-gradient(135deg, var(--color-rocera-surface-2) 0%, color-mix(in srgb, var(--color-rocera-accent) 15%, var(--color-rocera-surface)) 100%)',
                  color: 'var(--color-rocera-accent)',
                }}
              >
                {member.name.split(' ').map((n) => n[0]).join('')}
              </div>

              {/* Name + role */}
              <div>
                <h2
                  className="text-base font-semibold"
                  style={{ color: 'var(--color-rocera-text)' }}
                >
                  {member.name}
                </h2>
                <p className="text-xs mt-0.5" style={{ color: 'var(--color-rocera-accent)' }}>
                  {member.role}
                </p>
              </div>

              {/* Bio */}
              <p className="text-xs leading-relaxed flex-1" style={{ color: 'var(--color-rocera-muted)' }}>
                {member.bio}
              </p>

              {/* Social links */}
              <div className="flex items-center gap-3 pt-3" style={{ borderTop: '1px solid var(--color-rocera-border)' }}>
                {member.github && (
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} GitHub`}
                    style={{ color: 'var(--color-rocera-muted)' }}
                  >
                    <GitBranch size={15} />
                  </a>
                )}
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} LinkedIn`}
                    style={{ color: 'var(--color-rocera-muted)' }}
                  >
                    <Link2 size={15} />
                  </a>
                )}
                {member.x && (
                  <a
                    href={member.x}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} X`}
                    style={{ color: 'var(--color-rocera-muted)' }}
                  >
                    <XIcon size={15} />
                  </a>
                )}
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    aria-label={`Email ${member.name}`}
                    style={{ color: 'var(--color-rocera-muted)' }}
                  >
                    <Mail size={15} />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
