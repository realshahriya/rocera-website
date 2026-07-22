import Link from 'next/link'
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
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Full Stack Development, AI Engineering, Blockchain, Cloud & DevOps, UI/UX Design, Security Consulting, API Development, and Technical Architecture.',
}

const services = [
  {
    icon: Code2,
    title: 'Full Stack Development',
    description:
      'End-to-end web and mobile applications. We handle everything from database design and API architecture to pixel-perfect frontend interfaces and CI/CD deployment.',
    capabilities: [
      'Next.js & React applications',
      'REST and GraphQL APIs',
      'Database design & optimization',
      'Authentication & authorization',
      'Performance optimization',
      'Responsive & accessible UIs',
    ],
    tags: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'TypeScript'],
  },
  {
    icon: Brain,
    title: 'AI Engineering',
    description:
      'We build production-grade AI systems: LLM integrations, RAG pipelines, fine-tuning workflows, computer vision, and recommendation engines.',
    capabilities: [
      'LLM integration & fine-tuning',
      'RAG pipeline architecture',
      'ML model deployment',
      'Computer vision systems',
      'AI-powered search',
      'Recommendation engines',
    ],
    tags: ['PyTorch', 'LangChain', 'OpenAI', 'Gemini', 'FastAPI'],
  },
  {
    icon: Link2,
    title: 'Blockchain Engineering',
    description:
      'Smart contract development, auditing, DeFi protocol design, NFT infrastructure, and full Web3 application stacks across EVM and Solana ecosystems.',
    capabilities: [
      'Smart contract development',
      'Smart contract auditing',
      'DeFi protocol design',
      'NFT platform development',
      'Cross-chain bridges',
      'On-chain governance',
    ],
    tags: ['Solidity', 'Rust', 'Hardhat', 'Anchor', 'The Graph'],
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    description:
      'Infrastructure as code, Kubernetes orchestration, CI/CD pipelines, observability, and cost-optimized multi-cloud architectures.',
    capabilities: [
      'Infrastructure as code (Terraform)',
      'Kubernetes orchestration',
      'CI/CD pipeline design',
      'Monitoring & observability',
      'Cost optimization',
      'Disaster recovery',
    ],
    tags: ['AWS', 'Kubernetes', 'Terraform', 'Docker', 'GitHub Actions'],
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description:
      'Premium interface design grounded in usability research. We create design systems, prototypes, and pixel-perfect implementation.',
    capabilities: [
      'Design system creation',
      'Interactive prototyping',
      'User research & testing',
      'Accessibility audits (WCAG AA)',
      'Figma to code',
      'Animation & micro-interactions',
    ],
    tags: ['Figma', 'Framer Motion', 'Design Systems'],
  },
  {
    icon: Shield,
    title: 'Security Consulting',
    description:
      'Smart contract audits, penetration testing, secure architecture reviews, threat modeling, and remediation roadmaps.',
    capabilities: [
      'Smart contract audits',
      'Web application pentesting',
      'Secure architecture review',
      'Threat modeling',
      'OWASP compliance',
      'Security training',
    ],
    tags: ['Audit', 'Pentest', 'OWASP', 'ZK Proofs'],
  },
  {
    icon: Zap,
    title: 'API Development',
    description:
      'High-performance, well-documented APIs built for developer experience, scalability, and long-term maintainability.',
    capabilities: [
      'RESTful API design',
      'GraphQL schema design',
      'gRPC services',
      'OpenAPI documentation',
      'Rate limiting & security',
      'SDK development',
    ],
    tags: ['REST', 'GraphQL', 'gRPC', 'OpenAPI'],
  },
  {
    icon: Database,
    title: 'Technical Architecture',
    description:
      'System design, database modeling, technology selection, and architecture consulting for complex product domains.',
    capabilities: [
      'System design & planning',
      'Database architecture',
      'Microservices design',
      'Technology selection',
      'Performance analysis',
      'Architecture reviews',
    ],
    tags: ['System Design', 'DDD', 'Microservices', 'Event-Driven'],
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-24 pb-20" style={{ background: 'var(--color-rocera-bg)' }}>
      <div className="container-rocera">
        {/* Header */}
        <div className="max-w-2xl mb-20">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: 'var(--color-rocera-accent)' }}
          >
            What We Do
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
            style={{ color: 'var(--color-rocera-text)' }}
          >
            Services
          </h1>
          <p className="text-base leading-relaxed" style={{ color: 'var(--color-rocera-muted-2)' }}>
            We cover the full spectrum of modern software engineering — from product
            design through to production deployment and beyond.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {services.map(({ icon: Icon, title, description, capabilities, tags }) => (
            <article
              key={title}
              className="p-6 md:p-8 rounded-xl flex flex-col gap-5"
              style={{
                background: 'var(--color-rocera-surface)',
                border: '1px solid var(--color-rocera-border)',
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    background: 'color-mix(in srgb, var(--color-rocera-accent) 12%, transparent)',
                  }}
                >
                  <Icon size={20} style={{ color: 'var(--color-rocera-accent)' }} />
                </div>
                <div>
                  <h2
                    className="text-base font-semibold mb-1"
                    style={{ color: 'var(--color-rocera-text)' }}
                  >
                    {title}
                  </h2>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--color-rocera-muted)' }}>
                    {description}
                  </p>
                </div>
              </div>

              <ul className="grid grid-cols-2 gap-1.5">
                {capabilities.map((cap) => (
                  <li
                    key={cap}
                    className="flex items-center gap-1.5 text-xs"
                    style={{ color: 'var(--color-rocera-muted-2)' }}
                  >
                    <span
                      className="w-1 h-1 rounded-full shrink-0"
                      style={{ background: 'var(--color-rocera-accent)' }}
                    />
                    {cap}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5 mt-auto">
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

        {/* CTA */}
        <div
          className="p-10 rounded-2xl text-center"
          style={{
            background: 'var(--color-rocera-surface)',
            border: '1px solid var(--color-rocera-border)',
          }}
        >
          <h2
            className="text-2xl font-bold tracking-tight mb-3"
            style={{ color: 'var(--color-rocera-text)' }}
          >
            Have a project in mind?
          </h2>
          <p className="text-sm mb-6" style={{ color: 'var(--color-rocera-muted)' }}>
            We&apos;d love to learn more about it. Let&apos;s talk.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm"
            style={{ background: 'var(--color-rocera-accent)', color: '#fff' }}
          >
            Start a Conversation
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  )
}
