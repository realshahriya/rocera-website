const GITHUB_API = 'https://api.github.com'
const GITHUB_TOKEN = process.env.GITHUB_TOKEN
const GITHUB_ORG = process.env.GITHUB_ORG || 'rocera-dev'

const headers: HeadersInit = {
  Accept: 'application/vnd.github.v3+json',
  ...(GITHUB_TOKEN ? { Authorization: `Bearer ${GITHUB_TOKEN}` } : {}),
}

export interface GitHubRepo {
  id: number
  name: string
  full_name: string
  description: string | null
  html_url: string
  homepage: string | null
  language: string | null
  stargazers_count: number
  forks_count: number
  topics: string[]
  updated_at: string
}

async function fetchWithRateLimit<T>(url: string): Promise<T | null> {
  try {
    const res = await fetch(url, { headers, next: { revalidate: 3600 } })
    if (res.status === 403 || res.status === 429) {
      console.warn('GitHub API rate limit hit, falling back to mock data')
      return null
    }
    if (!res.ok) return null
    return res.json() as Promise<T>
  } catch {
    console.warn('GitHub API fetch failed, falling back to mock data')
    return null
  }
}

// Mock data for when GitHub API is unavailable
const MOCK_REPOS: GitHubRepo[] = [
  {
    id: 1,
    name: 'fluxui',
    full_name: `${GITHUB_ORG}/fluxui`,
    description: 'Open-source design system with 80+ React components and a Figma plugin',
    html_url: `https://github.com/${GITHUB_ORG}/fluxui`,
    homepage: 'https://fluxui.rocera.dev',
    language: 'TypeScript',
    stargazers_count: 423,
    forks_count: 67,
    topics: ['react', 'design-system', 'typescript', 'storybook'],
    updated_at: '2024-12-01T00:00:00Z',
  },
  {
    id: 2,
    name: 'chainvault',
    full_name: `${GITHUB_ORG}/chainvault`,
    description: 'Multi-sig treasury management protocol for DAOs — 12 chains, $50M+ TVL',
    html_url: `https://github.com/${GITHUB_ORG}/chainvault`,
    homepage: 'https://chainvault.app',
    language: 'Solidity',
    stargazers_count: 892,
    forks_count: 134,
    topics: ['defi', 'solidity', 'dao', 'ethereum'],
    updated_at: '2024-11-20T00:00:00Z',
  },
  {
    id: 3,
    name: 'sentinelapi',
    full_name: `${GITHUB_ORG}/sentinelapi`,
    description: 'Zero-trust API security gateway with ML-based threat detection and eBPF inspection',
    html_url: `https://github.com/${GITHUB_ORG}/sentinelapi`,
    homepage: null,
    language: 'Go',
    stargazers_count: 318,
    forks_count: 42,
    topics: ['security', 'api-gateway', 'go', 'ebpf', 'kubernetes'],
    updated_at: '2024-11-05T00:00:00Z',
  },
]

export async function getPinnedRepos(): Promise<GitHubRepo[]> {
  const data = await fetchWithRateLimit<GitHubRepo[]>(
    `${GITHUB_API}/users/${GITHUB_ORG}/repos?sort=stars&per_page=6&type=public`
  )
  return data ?? MOCK_REPOS
}
