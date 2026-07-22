import teamData from '@/content/team.json'
import { GitBranch, Link2, X as XIcon, Mail } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Team',
  description: 'Meet the engineers, designers, and builders behind Rocera.',
}

export default function TeamPage() {
  return (
    <div className="min-h-screen pt-24 sm:pt-28 pb-16 sm:pb-24 px-4 sm:px-6" style={{ background: 'var(--color-rocera-bg)' }}>
      <div className="container-rocera">
        {/* Header */}
        <div className="max-w-2xl mb-12 sm:mb-20">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: 'var(--color-rocera-accent)' }}
          >
            The Builders
          </p>
          <h1
            className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4"
            style={{ color: 'var(--color-rocera-text)' }}
          >
            Meet Our Team
          </h1>
          <p className="text-sm sm:text-lg leading-relaxed" style={{ color: 'var(--color-rocera-muted-2)' }}>
            Engineers, designers, and researchers who care deeply about craft and are relentlessly focused on building software that lasts.
          </p>
        </div>

        {/* Clean Equal Team Profile Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {teamData.map((member) => (
            <article
              key={member.id}
              className="group relative rounded-2xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
              style={{
                background: 'var(--color-rocera-surface)',
                border: '1px solid var(--color-rocera-border)',
              }}
            >
              <div>
                {/* Avatar Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div
                    className="w-14 sm:w-16 h-14 sm:h-16 rounded-2xl flex items-center justify-center text-lg sm:text-xl font-extrabold shadow-lg transition-transform duration-300 group-hover:scale-105"
                    style={{
                      background:
                        'linear-gradient(135deg, var(--color-rocera-surface-2) 0%, color-mix(in srgb, var(--color-rocera-accent) 25%, var(--color-rocera-surface)) 100%)',
                      color: 'var(--color-rocera-accent)',
                      border: '1px solid var(--color-rocera-border-2)',
                    }}
                  >
                    {member.name.split(' ').map((n) => n[0]).join('')}
                  </div>

                  <span className="px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-mono bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                    ROCERA CORE
                  </span>
                </div>

                {/* Member Info */}
                <h2 className="text-base sm:text-lg font-bold mb-1 group-hover:text-amber-300 transition-colors" style={{ color: 'var(--color-rocera-text)' }}>
                  {member.name}
                </h2>
                <p className="text-xs font-semibold mb-4" style={{ color: 'var(--color-rocera-accent)' }}>
                  {member.role}
                </p>

                {/* Bio */}
                <p className="text-xs leading-relaxed mb-6" style={{ color: 'var(--color-rocera-muted)' }}>
                  {member.bio}
                </p>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-2.5 sm:gap-3 pt-4 border-t border-white/5">
                {member.github && (
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 sm:p-2 rounded-lg border border-white/10 hover:bg-white/5 text-gray-400 hover:text-white transition-colors"
                    aria-label={`${member.name} GitHub`}
                  >
                    <GitBranch size={15} />
                  </a>
                )}
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 sm:p-2 rounded-lg border border-white/10 hover:bg-white/5 text-gray-400 hover:text-white transition-colors"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <Link2 size={15} />
                  </a>
                )}
                {member.x && (
                  <a
                    href={member.x}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 sm:p-2 rounded-lg border border-white/10 hover:bg-white/5 text-gray-400 hover:text-white transition-colors"
                    aria-label={`${member.name} X`}
                  >
                    <XIcon size={15} />
                  </a>
                )}
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="p-2.5 sm:p-2 rounded-lg border border-white/10 hover:bg-white/5 text-gray-400 hover:text-white transition-colors"
                    aria-label={`Email ${member.name}`}
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
