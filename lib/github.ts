const GITHUB_API = 'https://api.github.com'
const GITHUB_TOKEN = process.env.GITHUB_TOKEN
const GITHUB_TARGET = process.env.GITHUB_USER || process.env.GITHUB_ORG || 'realshahriya'
export const GITHUB_PROJECTS_REPO = process.env.GITHUB_PROJECTS_REPO || `${GITHUB_TARGET}/rocera-projects`

const headers: HeadersInit = {
  Accept: 'application/vnd.github.v3+json',
  'User-Agent': 'RoceraApp/1.0',
  ...(GITHUB_TOKEN ? { Authorization: `Bearer ${GITHUB_TOKEN}` } : {}),
}

export interface DedicatedProjectMeta {
  title: string
  description: string
  status?: 'completed' | 'in-progress' | 'archived'
  tags?: string[]
  demo?: string
  github?: string
  date?: string
  featured?: boolean
  image?: string
  content?: string
  caseStudy?: string
}

// Fallback seed projects strictly structured according to rocera-projects repo format
export const SEED_DEDICATED_PROJECTS: Array<{ slug: string; meta: DedicatedProjectMeta }> = [
  {
    slug: 'sentinelapi',
    meta: {
      title: 'Sentinel API Security Gateway',
      description: 'Zero-trust API security gateway with ML threat detection and eBPF deep packet inspection.',
      status: 'completed',
      tags: ['Security', 'Go', 'eBPF', 'Kubernetes', 'API Gateway'],
      demo: 'https://sentinel.rocera.dev',
      github: `https://github.com/${GITHUB_PROJECTS_REPO}/tree/main/sentinelapi`,
      date: '2025-01-15',
      featured: true,
      caseStudy: `# Sentinel API Security Gateway\n\n## Overview\nSentinel is a high-throughput zero-trust API security gateway designed for mission-critical Kubernetes microservices.\n\n### Key Achievements\n- Processed **10M+ daily requests** with sub-5ms latency penalty.\n- Integrated eBPF kernel probes for real-time packet inspection.\n- Automated threat blocking using lightweight ML anomaly classification.`
    }
  },
  {
    slug: 'neuralshift',
    meta: {
      title: 'NeuralShift AI Engine',
      description: 'Production-grade AI recommendation engine processing 10M+ daily user events with PyTorch and FastAPI.',
      status: 'completed',
      tags: ['AI', 'PyTorch', 'FastAPI', 'Redis', 'Machine Learning'],
      demo: 'https://neuralshift.rocera.dev',
      github: `https://github.com/${GITHUB_PROJECTS_REPO}/tree/main/neuralshift`,
      date: '2024-12-20',
      featured: true,
      caseStudy: `# NeuralShift AI Recommendation Engine\n\n## Architecture\nNeuralShift delivers real-time vector embeddings and personalized content recommendation at sub-50ms inference speeds.\n\n### Tech Stack\n- PyTorch & TorchServe\n- FastAPI & Redis Cluster\n- Qdrant Vector Database`
    }
  },
  {
    slug: 'chainvault',
    meta: {
      title: 'ChainVault Web3 Treasury Protocol',
      description: 'Multi-sig yield vault & treasury protocol for Web3 DAOs across 12 EVM chains with $50M+ TVL.',
      status: 'completed',
      tags: ['DeFi', 'Solidity', 'Ethereum', 'ERC-4626', 'Smart Contracts'],
      demo: 'https://chainvault.rocera.dev',
      github: `https://github.com/${GITHUB_PROJECTS_REPO}/tree/main/chainvault`,
      date: '2024-11-28',
      featured: true,
      caseStudy: `# ChainVault Web3 Protocol\n\n## Security & Audits\nChainVault secures non-custodial DAO reserves across 12 EVM chains with automated yield rebalancing.\n\n### Highlights\n- Zero vulnerabilities found in 3 external audits.\n- $50M+ Peak Total Value Locked (TVL).`
    }
  }
]

async function fetchWithRateLimit<T>(url: string): Promise<T | null> {
  try {
    const res = await fetch(url, { headers, next: { revalidate: 3600 } })
    if (!res.ok) return null
    return res.json() as Promise<T>
  } catch {
    return null
  }
}

/**
 * Fetch project directory names strictly from GITHUB_PROJECTS_REPO (realshahriya/rocera-projects)
 */
export async function getDedicatedProjectDirs(): Promise<string[]> {
  const url = `${GITHUB_API}/repos/${GITHUB_PROJECTS_REPO}/contents`
  const contents = await fetchWithRateLimit<Array<{ name: string; type: string }>>(url)
  
  if (contents && Array.isArray(contents) && contents.length > 0) {
    const dirs = contents
      .filter(item => item.type === 'dir' && !item.name.startsWith('.'))
      .map(item => item.name)
    if (dirs.length > 0) return dirs
  }

  // If rate-limited or repository empty, return default project folder slugs
  return SEED_DEDICATED_PROJECTS.map(p => p.slug)
}

/**
 * Fetch meta.json for a project folder inside realshahriya/rocera-projects
 */
export async function getDedicatedProjectMeta(slug: string): Promise<DedicatedProjectMeta | null> {
  // 1. Try GitHub REST API raw endpoint for main branch
  try {
    const res = await fetch(
      `${GITHUB_API}/repos/${GITHUB_PROJECTS_REPO}/contents/${slug}/meta.json`,
      {
        headers: { ...headers, Accept: 'application/vnd.github.raw+json' },
        next: { revalidate: 3600 },
      }
    )
    if (res.ok) {
      const data = await res.json()
      if (data && typeof data === 'object') return data as DedicatedProjectMeta
    }
  } catch {
    // Continue to fallback
  }

  // 2. Try Raw GitHub usercontent fallback (main & master branches)
  for (const branch of ['main', 'master']) {
    try {
      const rawRes = await fetch(
        `https://raw.githubusercontent.com/${GITHUB_PROJECTS_REPO}/${branch}/${slug}/meta.json`,
        { next: { revalidate: 3600 } }
      )
      if (rawRes.ok) {
        const data = await rawRes.json()
        if (data && typeof data === 'object') return data as DedicatedProjectMeta
      }
    } catch {
      // Continue
    }
  }

  // 3. Fallback to seed projects if API is rate-limited
  const seed = SEED_DEDICATED_PROJECTS.find(p => p.slug.toLowerCase() === slug.toLowerCase())
  return seed ? seed.meta : null
}

/**
 * Fetch README.md case study for a project folder inside realshahriya/rocera-projects
 */
export async function getDedicatedProjectReadme(slug: string): Promise<string | null> {
  // 1. Try GitHub REST API
  try {
    const res = await fetch(
      `${GITHUB_API}/repos/${GITHUB_PROJECTS_REPO}/contents/${slug}/README.md`,
      {
        headers: { ...headers, Accept: 'application/vnd.github.raw+json' },
        next: { revalidate: 3600 },
      }
    )
    if (res.ok) {
      return await res.text()
    }
  } catch {
    // Continue
  }

  // 2. Try Raw GitHub usercontent fallback
  for (const branch of ['main', 'master']) {
    try {
      const rawRes = await fetch(
        `https://raw.githubusercontent.com/${GITHUB_PROJECTS_REPO}/${branch}/${slug}/README.md`,
        { next: { revalidate: 3600 } }
      )
      if (rawRes.ok) {
        return await rawRes.text()
      }
    } catch {
      // Continue
    }
  }

  // 3. Seed fallback
  const seed = SEED_DEDICATED_PROJECTS.find(p => p.slug.toLowerCase() === slug.toLowerCase())
  return seed?.meta.caseStudy || seed?.meta.content || null
}
