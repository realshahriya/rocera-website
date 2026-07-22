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
} from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    icon: Code2,
    title: 'Full Stack Development',
    description:
      'End-to-end web and mobile applications built with modern frameworks, clean APIs, and production-ready infrastructure.',
    tags: ['Next.js', 'React', 'Node.js', 'PostgreSQL'],
  },
  {
    icon: Brain,
    title: 'AI Engineering',
    description:
      'LLM integration, fine-tuning, RAG pipelines, computer vision, and production ML systems that scale.',
    tags: ['PyTorch', 'LangChain', 'OpenAI', 'Gemini'],
  },
  {
    icon: Link2,
    title: 'Blockchain Engineering',
    description:
      'Smart contracts, DeFi protocols, NFT platforms, and Web3 infrastructure across EVM and Solana.',
    tags: ['Solidity', 'Rust', 'Hardhat', 'Anchor'],
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    description:
      'Infrastructure as code, CI/CD pipelines, Kubernetes orchestration, and cost-optimized cloud architecture.',
    tags: ['AWS', 'Kubernetes', 'Terraform', 'Docker'],
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description:
      'Premium interfaces grounded in usability research. Design systems, prototypes, and pixel-perfect implementation.',
    tags: ['Figma', 'Framer', 'Design Systems'],
  },
  {
    icon: Shield,
    title: 'Security Consulting',
    description:
      'Smart contract audits, penetration testing, secure architecture reviews, and threat modeling.',
    tags: ['Audit', 'Pentest', 'OWASP', 'ZK'],
  },
  {
    icon: Zap,
    title: 'API Development',
    description:
      'RESTful and GraphQL APIs built for performance, developer experience, and long-term maintainability.',
    tags: ['REST', 'GraphQL', 'gRPC', 'OpenAPI'],
  },
  {
    icon: Database,
    title: 'Technical Architecture',
    description:
      'System design, database modeling, microservices planning, and technology selection for complex domains.',
    tags: ['System Design', 'DDD', 'Microservices'],
  },
]

export function ServicesSection() {
  return (
    <section
      id="services"
      className="section-padding"
      style={{ background: 'var(--color-rocera-bg)' }}
    >
      <div className="container-rocera">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--color-rocera-accent)' }}
            >
              What We Do
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold tracking-tight"
              style={{ color: 'var(--color-rocera-text)' }}
            >
              Engineering Across Every Layer
            </h2>
          </div>
          <Link
            href="/services"
            className="text-sm font-medium transition-colors duration-200 shrink-0"
            style={{ color: 'var(--color-rocera-accent)' }}
          >
            View all services →
          </Link>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map(({ icon: Icon, title, description, tags }) => (
            <article
              key={title}
              className="p-6 rounded-xl flex flex-col gap-4 transition-all duration-300 cursor-default"
              style={{
                background: 'var(--color-rocera-surface)',
                border: '1px solid var(--color-rocera-border)',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.border = '1px solid var(--color-rocera-accent)'
                el.style.transform = 'translateY(-4px)'
                el.style.boxShadow =
                  '0 8px 32px color-mix(in srgb, var(--color-rocera-accent) 10%, transparent)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.border = '1px solid var(--color-rocera-border)'
                el.style.transform = 'translateY(0)'
                el.style.boxShadow = 'none'
              }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{
                  background:
                    'color-mix(in srgb, var(--color-rocera-accent) 12%, transparent)',
                }}
              >
                <Icon
                  size={18}
                  style={{ color: 'var(--color-rocera-accent)' }}
                />
              </div>
              <div>
                <h3
                  className="text-sm font-semibold mb-2"
                  style={{ color: 'var(--color-rocera-text)' }}
                >
                  {title}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--color-rocera-muted)' }}>
                  {description}
                </p>
              </div>
              <div className="flex flex-wrap gap-1 mt-auto">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded text-xs"
                    style={{
                      background: 'var(--color-rocera-surface-2)',
                      color: 'var(--color-rocera-muted-2)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
