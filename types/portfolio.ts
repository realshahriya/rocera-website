export interface Project {
  slug: string
  title: string
  description: string
  image?: string
  tags: string[]
  status: 'completed' | 'in-progress' | 'archived'
  demo?: string
  github?: string
  date: string
  featured: boolean
  stargazersCount?: number
  forksCount?: number
  content?: string
}

export interface ProjectFrontmatter {
  title: string
  description: string
  image?: string
  tags: string[]
  status: 'completed' | 'in-progress' | 'archived'
  demo?: string
  github?: string
  date: string
  featured: boolean
  stargazersCount?: number
  forksCount?: number
}
