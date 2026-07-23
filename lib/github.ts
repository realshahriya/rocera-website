const GITHUB_API = 'https://api.github.com'
const GITHUB_TOKEN = process.env.GITHUB_TOKEN
const GITHUB_USER = process.env.GITHUB_USER || 'realshahriya'
export const GITHUB_PROJECTS_REPO = process.env.GITHUB_PROJECTS_REPO || `${GITHUB_USER}/rocera-projects`

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

async function fetchWithTimeout<T>(url: string, options?: RequestInit): Promise<T | null> {
  try {
    const res = await fetch(url, {
      headers,
      next: { revalidate: 60 },
      ...options,
    })
    if (!res.ok) return null
    return (await res.json()) as T
  } catch {
    return null
  }
}

/**
 * Fetch meta.json for a project folder inside realshahriya/rocera-projects (bypassing REST API rate limits via raw usercontent)
 */
export async function getDedicatedProjectMeta(slug: string): Promise<DedicatedProjectMeta | null> {
  const possiblePaths = [
    `projects/${slug}/meta.json`,
    `${slug}/meta.json`,
  ]

  for (const relPath of possiblePaths) {
    // 1. Try Raw GitHub usercontent FIRST (never rate-limited by GitHub REST API)
    for (const branch of ['main', 'master']) {
      try {
        const rawRes = await fetch(
          `https://raw.githubusercontent.com/${GITHUB_PROJECTS_REPO}/${branch}/${relPath}`,
          { next: { revalidate: 60 } }
        )
        if (rawRes.ok) {
          const data = await rawRes.json()
          if (data && typeof data === 'object') return data as DedicatedProjectMeta
        }
      } catch {
        // Continue
      }
    }

    // 2. Try REST API as fallback
    try {
      const res = await fetch(
        `${GITHUB_API}/repos/${GITHUB_PROJECTS_REPO}/contents/${relPath}`,
        {
          headers: { ...headers, Accept: 'application/vnd.github.raw+json' },
          next: { revalidate: 60 },
        }
      )
      if (res.ok) {
        const data = await res.json()
        if (data && typeof data === 'object') return data as DedicatedProjectMeta
      }
    } catch {
      // Continue
    }
  }

  return null
}

/**
 * Fetch project directory names from realshahriya/rocera-projects
 * 100% Rate-Limit Proof: Checks raw index files first via raw.githubusercontent.com, then API.github.com
 */
export async function getDedicatedProjectDirs(): Promise<string[]> {
  // 1. Try raw github index files FIRST (raw.githubusercontent.com is not subject to 60 req/hr rate limits)
  const rawIndexPaths = [
    'projects/projects.json',
    'projects/index.json',
    'projects.json',
    'index.json',
  ]

  for (const relPath of rawIndexPaths) {
    for (const branch of ['main', 'master']) {
      try {
        const rawRes = await fetch(
          `https://raw.githubusercontent.com/${GITHUB_PROJECTS_REPO}/${branch}/${relPath}`,
          { next: { revalidate: 60 } }
        )
        if (rawRes.ok) {
          const data = await rawRes.json()
          if (Array.isArray(data)) {
            const slugs = data.map((item) => (typeof item === 'string' ? item : item.slug || item.id)).filter(Boolean)
            if (slugs.length > 0) return slugs
          }
        }
      } catch {
        // Continue to next check
      }
    }
  }

  // 2. Try GitHub REST API (if rate limit allows)
  try {
    const projectsUrl = `${GITHUB_API}/repos/${GITHUB_PROJECTS_REPO}/contents/projects`
    const projectsContents = await fetchWithTimeout<Array<{ name: string; type: string }>>(projectsUrl)

    if (projectsContents && Array.isArray(projectsContents)) {
      const dirs = projectsContents
        .filter(item => item.type === 'dir' && !item.name.startsWith('.'))
        .map(item => item.name)
      if (dirs.length > 0) return dirs
    }
  } catch {
    // Continue
  }

  try {
    const rootUrl = `${GITHUB_API}/repos/${GITHUB_PROJECTS_REPO}/contents`
    const rootContents = await fetchWithTimeout<Array<{ name: string; type: string }>>(rootUrl)

    if (rootContents && Array.isArray(rootContents)) {
      const dirs = rootContents
        .filter(item => item.type === 'dir' && !item.name.startsWith('.') && item.name !== 'projects' && item.name !== 'hackathons')
        .map(item => item.name)
      if (dirs.length > 0) return dirs
    }
  } catch {
    // Continue
  }

  // 3. Fallback: Direct probe of project folder slugs via raw.githubusercontent.com
  const candidateSlugs = ['example', 'quantumflow']
  const verifiedSlugs: string[] = []

  for (const slug of candidateSlugs) {
    const meta = await getDedicatedProjectMeta(slug)
    if (meta) {
      verifiedSlugs.push(slug)
    }
  }

  return verifiedSlugs
}

/**
 * Fetch README.md case study for a project folder inside realshahriya/rocera-projects
 */
export async function getDedicatedProjectReadme(slug: string): Promise<string | null> {
  const possiblePaths = [
    `projects/${slug}/README.md`,
    `${slug}/README.md`,
  ]

  for (const relPath of possiblePaths) {
    // 1. Raw GitHub usercontent FIRST
    for (const branch of ['main', 'master']) {
      try {
        const rawRes = await fetch(
          `https://raw.githubusercontent.com/${GITHUB_PROJECTS_REPO}/${branch}/${relPath}`,
          { next: { revalidate: 60 } }
        )
        if (rawRes.ok) {
          return await rawRes.text()
        }
      } catch {
        // Continue
      }
    }

    // 2. REST API fallback
    try {
      const res = await fetch(
        `${GITHUB_API}/repos/${GITHUB_PROJECTS_REPO}/contents/${relPath}`,
        {
          headers: { ...headers, Accept: 'application/vnd.github.raw+json' },
          next: { revalidate: 60 },
        }
      )
      if (res.ok) {
        return await res.text()
      }
    } catch {
      // Continue
    }
  }

  return null
}
