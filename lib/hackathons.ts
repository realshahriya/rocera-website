import localHackathons from '@/content/hackathons.json'

const GITHUB_API = 'https://api.github.com'
const GITHUB_USER = process.env.GITHUB_USER || 'realshahriya'
export const GITHUB_PROJECTS_REPO = process.env.GITHUB_PROJECTS_REPO || `${GITHUB_USER}/rocera-projects`

export interface HackathonAward {
  place: string
  category: string
  prize?: string
}

export interface HackathonTech {
  name: string
}

export interface Hackathon {
  id: string
  name: string
  date: string
  location: string
  description: string
  result?: string
  awards: HackathonAward[]
  techStack: HackathonTech[]
  teamSize?: number
  url?: string
}

/**
 * Fetches hackathons data from realshahriya/rocera-projects repository under /hackathons/ directory
 */
export async function getDedicatedHackathons(): Promise<Hackathon[]> {
  // 1. Try fetching /hackathons/hackathons.json from raw GitHub usercontent
  for (const branch of ['main', 'master']) {
    try {
      const rawRes = await fetch(
        `https://raw.githubusercontent.com/${GITHUB_PROJECTS_REPO}/${branch}/hackathons/hackathons.json`,
        { next: { revalidate: 60 } }
      )
      if (rawRes.ok) {
        const data = await rawRes.json()
        if (Array.isArray(data) && data.length > 0) {
          return data as Hackathon[]
        }
      }
    } catch {
      // Continue to next check
    }
  }

  // 2. Try REST API for subfolders in /hackathons/
  try {
    const res = await fetch(`${GITHUB_API}/repos/${GITHUB_PROJECTS_REPO}/contents/hackathons`, {
      headers: {
        Accept: 'application/vnd.github.v3+json',
        'User-Agent': 'RoceraApp/1.0',
        ...(process.env.GITHUB_TOKEN ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : {}),
      },
      next: { revalidate: 60 },
    })

    if (res.ok) {
      const contents = await res.json()
      if (Array.isArray(contents)) {
        const dirNames = contents.filter((item) => item.type === 'dir' && !item.name.startsWith('.')).map(item => item.name)
        const remoteHackathons: Hackathon[] = []

        for (const slug of dirNames) {
          for (const branch of ['main', 'master']) {
            try {
              const metaRes = await fetch(
                `https://raw.githubusercontent.com/${GITHUB_PROJECTS_REPO}/${branch}/hackathons/${slug}/meta.json`,
                { next: { revalidate: 60 } }
              )
              if (metaRes.ok) {
                const meta = await metaRes.json()
                remoteHackathons.push({
                  id: slug,
                  name: meta.name || meta.title || slug,
                  date: meta.date || new Date().toISOString().split('T')[0],
                  location: meta.location || 'Global',
                  description: meta.description || '',
                  result: meta.result,
                  awards: meta.awards || [],
                  techStack: (meta.techStack || meta.tags || []).map((t: string | { name: string }) =>
                    typeof t === 'string' ? { name: t } : t
                  ),
                  teamSize: meta.teamSize || 3,
                  url: meta.url || meta.demo || meta.github,
                })
                break
              }
            } catch {
              // Continue
            }
          }
        }

        if (remoteHackathons.length > 0) {
          return remoteHackathons.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        }
      }
    }
  } catch {
    // Fallback to local
  }

  // 3. Fallback to local hackathons data
  return localHackathons as Hackathon[]
}
