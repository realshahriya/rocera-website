import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
import remarkHtml from 'remark-html'
import type { Project, ProjectFrontmatter } from '@/types/portfolio'

const PORTFOLIO_DIR = path.join(process.cwd(), 'content', 'portfolio')

export async function getAllProjects(): Promise<Project[]> {
  const filenames = fs.readdirSync(PORTFOLIO_DIR).filter(f => f.endsWith('.md'))
  
  const projects = filenames.map((filename) => {
    const slug = filename.replace(/\.md$/, '')
    const filePath = path.join(PORTFOLIO_DIR, filename)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data } = matter(fileContents)
    const frontmatter = data as ProjectFrontmatter

    return {
      slug,
      ...frontmatter,
    } as Project
  })

  return projects.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export async function getFeaturedProjects(): Promise<Project[]> {
  const projects = await getAllProjects()
  return projects.filter(p => p.featured)
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const filePath = path.join(PORTFOLIO_DIR, `${slug}.md`)

  if (!fs.existsSync(filePath)) return null

  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)
  const frontmatter = data as ProjectFrontmatter

  const processedContent = await remark()
    .use(remarkGfm)
    .use(remarkHtml)
    .process(content)
  const htmlContent = processedContent.toString()

  return {
    slug,
    ...frontmatter,
    content: htmlContent,
  }
}

export async function getAllProjectSlugs(): Promise<string[]> {
  const filenames = fs.readdirSync(PORTFOLIO_DIR).filter(f => f.endsWith('.md'))
  return filenames.map(f => f.replace(/\.md$/, ''))
}

export function getAllTags(projects: Project[]): string[] {
  const tagSet = new Set<string>()
  projects.forEach(p => p.tags.forEach(t => tagSet.add(t)))
  return Array.from(tagSet).sort()
}
