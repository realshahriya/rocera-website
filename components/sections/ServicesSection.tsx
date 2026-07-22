"use client"

import {
  Code2,
  Brain,
  Link2,
  Cloud,
  Palette,
  Shield,
  Zap,
  Database,
  ArrowRight,
} from 'lucide-react'
import Link from 'next/link'

export function ServicesSection() {
  return (
    <section
      id="services"
      className="section-padding relative overflow-hidden"
      style={{ background: 'var(--color-rocera-bg)' }}
    >
      <div className="container-rocera relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--color-rocera-accent)' }}
            >
              What We Do
            </p>
            <h2
              className="text-3xl md:text-5xl font-extrabold tracking-tight"
              style={{ color: 'var(--color-rocera-text)' }}
            >
              Engineering Across Every Layer
            </h2>
          </div>
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 text-sm font-semibold shrink-0 transition-colors duration-200"
            style={{ color: 'var(--color-rocera-accent)' }}
          >
            View all services
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Bento 1 — Featured AI & Full Stack Hero Card (Spans 2 Columns) */}
          <div
            className="group relative rounded-3xl p-8 sm:p-10 overflow-hidden flex flex-col justify-between lg:col-span-2 transition-all duration-500 hover:scale-[1.01]"
            style={{
              background: 'linear-gradient(135deg, var(--color-rocera-surface) 0%, var(--color-rocera-surface-2) 100%)',
              border: '1px solid var(--color-rocera-border-2)',
            }}
          >
            <div className="absolute top-0 right-0 w-72 h-72 rounded-full blur-[90px] pointer-events-none opacity-20 bg-indigo-500" />
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                <Brain size={24} />
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                FLAGSHIP CORE
              </span>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-3" style={{ color: 'var(--color-rocera-text)' }}>
                AI Systems & Full Stack Engineering
              </h3>
              <p className="text-sm sm:text-base leading-relaxed" style={{ color: 'var(--color-rocera-muted-2)' }}>
                LLM integration, fine-tuning, RAG pipelines, production ML inference engines, and web/mobile platforms built with Next.js, PyTorch, and FastAPI.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-6 border-t border-white/10">
              {['PyTorch', 'LangChain', 'Next.js 16', 'FastAPI', 'Redis', 'PostgreSQL'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-lg text-xs font-mono"
                  style={{ background: 'var(--color-rocera-bg)', color: 'var(--color-rocera-muted-2)' }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Bento 2 — Web3 & Blockchain Card */}
          <div
            className="group relative rounded-3xl p-8 overflow-hidden flex flex-col justify-between transition-all duration-500 hover:scale-[1.01]"
            style={{
              background: 'var(--color-rocera-surface)',
              border: '1px solid var(--color-rocera-border)',
            }}
          >
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 bg-amber-500/10 border border-amber-500/20 text-amber-400">
              <Link2 size={24} />
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--color-rocera-text)' }}>
                Blockchain & Protocol Protocols
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-rocera-muted)' }}>
                Smart contracts, DeFi vaults, zero-knowledge proofs, and Web3 infrastructure across EVM and Solana chains.
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
              {['Solidity', 'Rust', 'Anchor', 'Ethereum', 'Solana'].map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-lg text-xs font-mono"
                  style={{ background: 'var(--color-rocera-bg)', color: 'var(--color-rocera-muted-2)' }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Bento 3 — Cloud & DevOps Architecture Card */}
          <div
            className="group relative rounded-3xl p-8 overflow-hidden flex flex-col justify-between transition-all duration-500 hover:scale-[1.01]"
            style={{
              background: 'var(--color-rocera-surface)',
              border: '1px solid var(--color-rocera-border)',
            }}
          >
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
              <Cloud size={24} />
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--color-rocera-text)' }}>
                Cloud & DevOps Orchestration
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-rocera-muted)' }}>
                Infrastructure as Code (IaC), Kubernetes auto-scaling, CI/CD deployment pipelines, and zero-trust cloud security.
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
              {['AWS', 'Kubernetes', 'Terraform', 'Docker'].map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-lg text-xs font-mono"
                  style={{ background: 'var(--color-rocera-bg)', color: 'var(--color-rocera-muted-2)' }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Bento 4 — Security, UI/UX & API Architecture (Spans 2 Columns) */}
          <div
            className="group relative rounded-3xl p-8 sm:p-10 overflow-hidden flex flex-col justify-between lg:col-span-2 transition-all duration-500 hover:scale-[1.01]"
            style={{
              background: 'linear-gradient(135deg, var(--color-rocera-surface-2) 0%, var(--color-rocera-surface) 100%)',
              border: '1px solid var(--color-rocera-border-2)',
            }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 bg-emerald-500/10 text-emerald-400">
                  <Shield size={20} />
                </div>
                <h4 className="text-sm font-semibold mb-1" style={{ color: 'var(--color-rocera-text)' }}>
                  Security & Audits
                </h4>
                <p className="text-xs" style={{ color: 'var(--color-rocera-muted)' }}>
                  Smart contract audits & zero-trust pen-testing.
                </p>
              </div>

              <div>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 bg-amber-500/10 text-amber-400">
                  <Palette size={20} />
                </div>
                <h4 className="text-sm font-semibold mb-1" style={{ color: 'var(--color-rocera-text)' }}>
                  UI/UX Craftsmanship
                </h4>
                <p className="text-xs" style={{ color: 'var(--color-rocera-muted)' }}>
                  Pixel-perfect interfaces & design systems.
                </p>
              </div>

              <div>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 bg-purple-500/10 text-purple-400">
                  <Zap size={20} />
                </div>
                <h4 className="text-sm font-semibold mb-1" style={{ color: 'var(--color-rocera-text)' }}>
                  API Systems
                </h4>
                <p className="text-xs" style={{ color: 'var(--color-rocera-muted)' }}>
                  gRPC, GraphQL & RESTful microservices.
                </p>
              </div>
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
