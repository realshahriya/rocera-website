"use client"

import {
  SiNextdotjs,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiPython,
  SiGo,
  SiRust,
  SiPostgresql,
  SiRedis,
  SiSolidity,
  SiKubernetes,
  SiTerraform,
  SiDocker,
  SiPytorch,
  SiLangchain,
} from 'react-icons/si'
import { FaAws } from 'react-icons/fa6'
import type { IconType } from 'react-icons'

interface TechBadge {
  name: string
  icon: IconType
  brandColor: string
}

const frontendTech: TechBadge[] = [
  { name: 'Next.js 16', icon: SiNextdotjs, brandColor: '#ffffff' },
  { name: 'TypeScript', icon: SiTypescript, brandColor: '#3178c6' },
  { name: 'React 19', icon: SiReact, brandColor: '#61dafb' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, brandColor: '#06b6d4' },
]

const aiTech: TechBadge[] = [
  { name: 'PyTorch', icon: SiPytorch, brandColor: '#ee4c2c' },
  { name: 'LangChain', icon: SiLangchain, brandColor: '#38bdf8' },
  { name: 'Python', icon: SiPython, brandColor: '#3776ab' },
]

const web3Tech: TechBadge[] = [
  { name: 'Rust', icon: SiRust, brandColor: '#f74c00' },
  { name: 'Go', icon: SiGo, brandColor: '#00add8' },
  { name: 'Solidity', icon: SiSolidity, brandColor: '#a78bfa' },
]

const cloudTech: TechBadge[] = [
  { name: 'AWS', icon: FaAws, brandColor: '#ff9900' },
  { name: 'Kubernetes', icon: SiKubernetes, brandColor: '#326ce5' },
  { name: 'Terraform', icon: SiTerraform, brandColor: '#844fba' },
  { name: 'Docker', icon: SiDocker, brandColor: '#2496ed' },
  { name: 'PostgreSQL', icon: SiPostgresql, brandColor: '#4169e1' },
  { name: 'Redis', icon: SiRedis, brandColor: '#dc382d' },
]

export function TechStackSection() {
  return (
    <section
      id="tech-stack"
      className="section-padding relative overflow-hidden"
      style={{ background: 'var(--color-rocera-bg)' }}
    >
      <div className="container-rocera relative z-10">
        {/* Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: 'var(--color-rocera-accent)' }}
          >
            Our Stack
          </p>
          <h2
            className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4"
            style={{ color: 'var(--color-rocera-text)' }}
          >
            Technologies We Master
          </h2>
          <p className="text-base leading-relaxed" style={{ color: 'var(--color-rocera-muted-2)' }}>
            We leverage production-proven tools and modern frameworks to deliver scalable, high-performance software.
          </p>
        </div>

        {/* Bento Box Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Bento Box 1 — Frontend & Full Stack Core (Spans 2 Columns) */}
          <div
            className="group relative rounded-3xl p-8 overflow-hidden flex flex-col justify-between lg:col-span-2 transition-all duration-500 hover:scale-[1.01]"
            style={{
              background: 'var(--color-rocera-surface)',
              border: '1px solid var(--color-rocera-border)',
            }}
          >
            <div className="mb-6">
              <span className="text-xs font-mono tracking-widest text-indigo-400 font-semibold uppercase mb-2 block">
                FRONTEND & FULL-STACK ENGINE
              </span>
              <h3 className="text-2xl font-bold" style={{ color: 'var(--color-rocera-text)' }}>
                Modern Web & Client Applications
              </h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {frontendTech.map(({ name, icon: Icon, brandColor }) => (
                <div
                  key={name}
                  className="p-4 rounded-2xl flex flex-col items-center justify-center text-center cursor-pointer hover:-translate-y-0.5"
                  style={{
                    background: 'var(--color-rocera-surface-2)',
                    border: '1px solid var(--color-rocera-border)',
                    transition: 'transform 1200ms cubic-bezier(0.16, 1, 0.3, 1), border-color 1200ms cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                  onMouseEnter={(e) => {
                    ;(e.currentTarget as HTMLElement).style.borderColor = brandColor + '70'
                  }}
                  onMouseLeave={(e) => {
                    ;(e.currentTarget as HTMLElement).style.borderColor = 'var(--color-rocera-border)'
                  }}
                >
                  <Icon size={26} className="mb-2" style={{ color: brandColor }} />
                  <span className="text-xs font-semibold" style={{ color: 'var(--color-rocera-text)' }}>
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Bento Box 2 — AI & ML Box */}
          <div
            className="group relative rounded-3xl p-8 overflow-hidden flex flex-col justify-between transition-all duration-500 hover:scale-[1.01]"
            style={{
              background: 'var(--color-rocera-surface)',
              border: '1px solid var(--color-rocera-border)',
            }}
          >
            <div className="mb-6">
              <span className="text-xs font-mono tracking-widest text-amber-400 font-semibold uppercase mb-2 block">
                AI & MACHINE LEARNING
              </span>
              <h3 className="text-2xl font-bold" style={{ color: 'var(--color-rocera-text)' }}>
                Intelligence Stack
              </h3>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {aiTech.map(({ name, icon: Icon, brandColor }) => (
                <div
                  key={name}
                  className="p-3 rounded-2xl flex flex-col items-center justify-center text-center cursor-pointer hover:-translate-y-0.5"
                  style={{
                    background: 'var(--color-rocera-surface-2)',
                    border: '1px solid var(--color-rocera-border)',
                    transition: 'transform 1200ms cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                >
                  <Icon size={24} className="mb-2" style={{ color: brandColor }} />
                  <span className="text-[11px] font-semibold" style={{ color: 'var(--color-rocera-text)' }}>
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Bento Box 3 — Systems & Blockchain Box */}
          <div
            className="group relative rounded-3xl p-8 overflow-hidden flex flex-col justify-between transition-all duration-500 hover:scale-[1.01]"
            style={{
              background: 'var(--color-rocera-surface)',
              border: '1px solid var(--color-rocera-border)',
            }}
          >
            <div className="mb-6">
              <span className="text-xs font-mono tracking-widest text-emerald-400 font-semibold uppercase mb-2 block">
                SYSTEMS & WEB3
              </span>
              <h3 className="text-2xl font-bold" style={{ color: 'var(--color-rocera-text)' }}>
                High-Performance Core
              </h3>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {web3Tech.map(({ name, icon: Icon, brandColor }) => (
                <div
                  key={name}
                  className="p-3 rounded-2xl flex flex-col items-center justify-center text-center cursor-pointer hover:-translate-y-0.5"
                  style={{
                    background: 'var(--color-rocera-surface-2)',
                    border: '1px solid var(--color-rocera-border)',
                    transition: 'transform 1200ms cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                >
                  <Icon size={24} className="mb-2" style={{ color: brandColor }} />
                  <span className="text-[11px] font-semibold" style={{ color: 'var(--color-rocera-text)' }}>
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Bento Box 4 — Cloud, DevOps & Databases (Spans 2 Columns) */}
          <div
            className="group relative rounded-3xl p-8 overflow-hidden flex flex-col justify-between lg:col-span-2 transition-all duration-500 hover:scale-[1.01]"
            style={{
              background: 'var(--color-rocera-surface)',
              border: '1px solid var(--color-rocera-border)',
            }}
          >
            <div className="mb-6">
              <span className="text-xs font-mono tracking-widest text-cyan-400 font-semibold uppercase mb-2 block">
                CLOUD, DEVOPS & DATA INFRASTRUCTURE
              </span>
              <h3 className="text-2xl font-bold" style={{ color: 'var(--color-rocera-text)' }}>
                Cloud Native Architecture
              </h3>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
              {cloudTech.map(({ name, icon: Icon, brandColor }) => (
                <div
                  key={name}
                  className="p-3 rounded-2xl flex flex-col items-center justify-center text-center cursor-pointer hover:-translate-y-0.5"
                  style={{
                    background: 'var(--color-rocera-surface-2)',
                    border: '1px solid var(--color-rocera-border)',
                    transition: 'transform 1200ms cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                >
                  <Icon size={22} className="mb-2" style={{ color: brandColor }} />
                  <span className="text-[11px] font-semibold" style={{ color: 'var(--color-rocera-text)' }}>
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Fade Gradient into Next Section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none z-10"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, var(--color-rocera-surface) 100%)',
        }}
      />
    </section>
  )
}
