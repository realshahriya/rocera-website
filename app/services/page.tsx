import {
  Code2,
  Brain,
  Link2,
  Cloud,
  Palette,
  Shield,
  Zap,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Full Stack, AI, Blockchain, Cloud & DevOps, Security, and UI/UX design services offered by Rocera.',
}

const services = [
  {
    icon: Code2,
    title: 'Full Stack Development',
    description:
      'End-to-end web and mobile applications built with modern frameworks, clean APIs, and production-ready infrastructure.',
    capabilities: [
      'Next.js 16 & React 19 apps',
      'TypeScript end-to-end',
      'Real-time WebSockets & SSE',
      'PostgreSQL & Redis optimization',
      'Tailwind CSS & Framer Motion',
      'Serverless & Edge deployments',
    ],
    tags: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'TypeScript'],
    featured: true,
  },
  {
    icon: Brain,
    title: 'AI Engineering',
    description:
      'LLM integration, fine-tuning, RAG pipelines, computer vision, and production ML systems that scale.',
    capabilities: [
      'Custom RAG vector search',
      'LLM fine-tuning & prompt design',
      'PyTorch model deployment',
      'FastAPI & TorchServe backends',
      'Agentic workflow automation',
      'Sub-50ms inference optimization',
    ],
    tags: ['PyTorch', 'LangChain', 'OpenAI', 'Gemini', 'FastAPI'],
    featured: true,
  },
  {
    icon: Link2,
    title: 'Blockchain Engineering',
    description:
      'Smart contracts, DeFi protocols, NFT platforms, and Web3 infrastructure across EVM and Solana.',
    capabilities: [
      'Solidity & Rust smart contracts',
      'Anchor framework on Solana',
      'DeFi liquidity & yield vaults',
      'ERC-4626 & ERC-721 protocols',
      'Zero-knowledge proof integration',
      'Web3 frontend dApp integrations',
    ],
    tags: ['Solidity', 'Rust', 'Hardhat', 'Anchor', 'Web3'],
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    description:
      'Infrastructure as code, CI/CD pipelines, Kubernetes orchestration, and cost-optimized cloud architecture.',
    capabilities: [
      'AWS & GCP cloud setup',
      'Terraform & Pulumi IaC',
      'Kubernetes cluster management',
      'Docker containerization',
      'GitHub Actions CI/CD',
      'Cost optimization audits',
    ],
    tags: ['AWS', 'Kubernetes', 'Terraform', 'Docker'],
  },
  {
    icon: Palette,
    title: 'UI/UX Design & Craftsmanship',
    description:
      'Premium interfaces grounded in usability research. Design systems, prototypes, and pixel-perfect implementation.',
    capabilities: [
      'Figma design systems',
      'Interactive prototyping',
      'Responsive dark-mode UI',
      'Micro-animations & CSS keyframes',
      'Accessibility (WCAG 2.1)',
      'Design-to-code fidelity',
    ],
    tags: ['Figma', 'Framer', 'Design Systems', 'Micro-interactions'],
  },
  {
    icon: Shield,
    title: 'Security & Audit Consulting',
    description:
      'Smart contract audits, penetration testing, secure architecture reviews, and zero-trust threat modeling.',
    capabilities: [
      'Smart contract static audits',
      'Penetration testing & OWASP',
      'Zero-trust API security',
      'Role-based access control',
      'Vulnerability remediation',
      'Compliance & data protection',
    ],
    tags: ['Audit', 'Pentest', 'OWASP', 'ZK', 'Zero-Trust'],
  },
  {
    icon: Zap,
    title: 'API & Microservices Architecture',
    description:
      'RESTful, gRPC, and GraphQL APIs built for performance, high concurrency, and long-term maintainability.',
    capabilities: [
      'gRPC high-throughput streams',
      'GraphQL & Apollo Gateway',
      'OpenAPI 3.0 documentation',
      'Distributed telemetry & tracing',
      'Rate limiting & DDoS protection',
      'Cross-platform SDK generation',
    ],
    tags: ['REST', 'GraphQL', 'gRPC', 'OpenAPI', 'Telemetry'],
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-24 sm:pt-28 pb-16 sm:pb-24 px-4 sm:px-6" style={{ background: 'var(--color-rocera-bg)' }}>
      <div className="container-rocera">
        {/* Header */}
        <div className="max-w-2xl mb-12 sm:mb-20">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: 'var(--color-rocera-accent)' }}
          >
            What We Do
          </p>
          <h1
            className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4"
            style={{ color: 'var(--color-rocera-text)' }}
          >
            Services & Engineering
          </h1>
          <p className="text-sm sm:text-lg leading-relaxed" style={{ color: 'var(--color-rocera-muted-2)' }}>
            We cover the full spectrum of modern software engineering — from architecture design through to production deployment and beyond.
          </p>
        </div>

        {/* Bento Box Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 sm:mb-24">
          {/* Service 1 — Full Stack Hero Card (Spans 2 Columns) */}
          <article
            className="group relative rounded-3xl p-6 sm:p-8 lg:p-10 overflow-hidden flex flex-col justify-between lg:col-span-2 transition-all duration-500 hover:scale-[1.01]"
            style={{
              background: 'linear-gradient(135deg, var(--color-rocera-surface) 0%, var(--color-rocera-surface-2) 100%)',
              border: '1px solid var(--color-rocera-border-2)',
            }}
          >
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full blur-[100px] pointer-events-none opacity-20 bg-indigo-500" />
            <div>
              <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                  <Code2 size={24} />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  CORE SERVICE
                </span>
              </div>
              <h2 className="text-xl sm:text-3xl font-extrabold mb-3" style={{ color: 'var(--color-rocera-text)' }}>
                {services[0].title}
              </h2>
              <p className="text-xs sm:text-base leading-relaxed max-w-xl mb-6 sm:mb-8" style={{ color: 'var(--color-rocera-muted-2)' }}>
                {services[0].description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6 sm:mb-8">
                {services[0].capabilities.map((cap) => (
                  <div key={cap} className="flex items-center gap-2 text-xs font-medium" style={{ color: 'var(--color-rocera-text)' }}>
                    <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-6 border-t border-white/10">
              {services[0].tags.map((tag) => (
                <span key={tag} className="px-2.5 sm:px-3 py-1 rounded-lg text-[11px] sm:text-xs font-mono" style={{ background: 'var(--color-rocera-bg)', color: 'var(--color-rocera-muted-2)' }}>
                  {tag}
                </span>
              ))}
            </div>
          </article>

          {/* Service 2 — AI Engineering Bento Box */}
          <article
            className="group relative rounded-3xl p-6 sm:p-8 overflow-hidden flex flex-col justify-between transition-all duration-500 hover:scale-[1.01]"
            style={{
              background: 'var(--color-rocera-surface)',
              border: '1px solid var(--color-rocera-border)',
            }}
          >
            <div>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 bg-amber-500/10 border border-amber-500/20 text-amber-400">
                <Brain size={24} />
              </div>
              <h2 className="text-lg sm:text-xl font-bold mb-3" style={{ color: 'var(--color-rocera-text)' }}>
                {services[1].title}
              </h2>
              <p className="text-xs sm:text-sm leading-relaxed mb-6" style={{ color: 'var(--color-rocera-muted)' }}>
                {services[1].description}
              </p>
              <div className="space-y-2 mb-6">
                {services[1].capabilities.slice(0, 4).map((cap) => (
                  <div key={cap} className="flex items-center gap-2 text-xs" style={{ color: 'var(--color-rocera-muted-2)' }}>
                    <CheckCircle2 size={13} className="text-amber-400 shrink-0" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
              {services[1].tags.map((tag) => (
                <span key={tag} className="px-2.5 py-1 rounded-lg text-xs font-mono" style={{ background: 'var(--color-rocera-bg)', color: 'var(--color-rocera-muted-2)' }}>
                  {tag}
                </span>
              ))}
            </div>
          </article>

          {/* Service 3 — Blockchain Bento Box */}
          <article
            className="group relative rounded-3xl p-6 sm:p-8 overflow-hidden flex flex-col justify-between transition-all duration-500 hover:scale-[1.01]"
            style={{
              background: 'var(--color-rocera-surface)',
              border: '1px solid var(--color-rocera-border)',
            }}
          >
            <div>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 bg-purple-500/10 border border-purple-500/20 text-purple-400">
                <Link2 size={24} />
              </div>
              <h2 className="text-lg sm:text-xl font-bold mb-3" style={{ color: 'var(--color-rocera-text)' }}>
                {services[2].title}
              </h2>
              <p className="text-xs sm:text-sm leading-relaxed mb-6" style={{ color: 'var(--color-rocera-muted)' }}>
                {services[2].description}
              </p>
              <div className="space-y-2 mb-6">
                {services[2].capabilities.slice(0, 4).map((cap) => (
                  <div key={cap} className="flex items-center gap-2 text-xs" style={{ color: 'var(--color-rocera-muted-2)' }}>
                    <CheckCircle2 size={13} className="text-purple-400 shrink-0" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
              {services[2].tags.map((tag) => (
                <span key={tag} className="px-2.5 py-1 rounded-lg text-xs font-mono" style={{ background: 'var(--color-rocera-bg)', color: 'var(--color-rocera-muted-2)' }}>
                  {tag}
                </span>
              ))}
            </div>
          </article>

          {/* Service 4 & 5 — Cloud, UI/UX & Security Wide Bento Card (Spans 2 Columns) */}
          <article
            className="group relative rounded-3xl p-6 sm:p-8 lg:p-10 overflow-hidden flex flex-col justify-between lg:col-span-2 transition-all duration-500 hover:scale-[1.01]"
            style={{
              background: 'linear-gradient(135deg, var(--color-rocera-surface-2) 0%, var(--color-rocera-surface) 100%)',
              border: '1px solid var(--color-rocera-border-2)',
            }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-6">
              <div>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 bg-cyan-500/10 text-cyan-400">
                  <Cloud size={20} />
                </div>
                <h3 className="text-base sm:text-lg font-bold mb-2" style={{ color: 'var(--color-rocera-text)' }}>
                  {services[3].title}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--color-rocera-muted)' }}>
                  {services[3].description}
                </p>
              </div>

              <div>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 bg-amber-500/10 text-amber-400">
                  <Palette size={20} />
                </div>
                <h3 className="text-base sm:text-lg font-bold mb-2" style={{ color: 'var(--color-rocera-text)' }}>
                  {services[4].title}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--color-rocera-muted)' }}>
                  {services[4].description}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-6 border-t border-white/10">
              {['AWS', 'Kubernetes', 'Terraform', 'Figma', 'Framer', 'Design Systems'].map((tag) => (
                <span key={tag} className="px-2.5 sm:px-3 py-1 rounded-lg text-[11px] sm:text-xs font-mono" style={{ background: 'var(--color-rocera-bg)', color: 'var(--color-rocera-muted-2)' }}>
                  {tag}
                </span>
              ))}
            </div>
          </article>

          {/* Service 6 & 7 — API & Security Banner Bento Box (Spans 3 Columns) */}
          <article
            className="group relative rounded-3xl p-6 sm:p-8 lg:p-10 overflow-hidden flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-6 lg:col-span-3 transition-all duration-500 hover:scale-[1.01]"
            style={{
              background: 'linear-gradient(135deg, var(--color-rocera-surface) 0%, var(--color-rocera-bg) 100%)',
              border: '1px solid var(--color-rocera-border-2)',
            }}
          >
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono mb-3 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <Shield size={13} />
                <span>ZERO-TRUST ARCHITECTURE</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2" style={{ color: 'var(--color-rocera-text)' }}>
                Security Audits & API Gateway Engineering
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--color-rocera-muted-2)' }}>
                Zero-trust penetration testing, smart contract audits, gRPC streaming, and GraphQL microservices designed for absolute reliability under attack vectors.
              </p>
            </div>

            <Link href="/contact" className="btn-butter text-xs !py-3 !px-6 text-center shrink-0 w-full sm:w-auto">
              Schedule Security Review
            </Link>
          </article>
        </div>

        {/* Bottom CTA */}
        <div
          className="p-6 sm:p-10 md:p-12 rounded-3xl text-center relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, var(--color-rocera-surface) 0%, #121520 100%)',
            border: '1px solid var(--color-rocera-border-2)',
          }}
        >
          <h2
            className="text-xl sm:text-3xl font-extrabold tracking-tight mb-3"
            style={{ color: 'var(--color-rocera-text)' }}
          >
            Have a High-Stakes Project in Mind?
          </h2>
          <p className="text-xs sm:text-base max-w-xl mx-auto mb-6 sm:mb-8" style={{ color: 'var(--color-rocera-muted-2)' }}>
            We&apos;d love to learn about your architectural requirements. Tell us what you&apos;re building.
          </p>
          <Link
            href="/contact"
            className="group btn-butter w-full sm:w-auto inline-flex justify-center"
          >
            Start a Conversation
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  )
}
