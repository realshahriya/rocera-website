import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
import remarkHtml from 'remark-html'
import type { Project, ProjectFrontmatter } from '@/types/portfolio'
import {
  getDedicatedProjectDirs,
  getDedicatedProjectMeta,
  getDedicatedProjectReadme,
  GITHUB_PROJECTS_REPO,
} from '@/lib/github'

const PORTFOLIO_DIR = path.join(process.cwd(), 'content', 'portfolio')

/**
 * Reads local Markdown file for a project slug if present
 */
function getLocalProject(slug: string): Project | null {
  const filePath = path.join(PORTFOLIO_DIR, `${slug}.md`)
  if (!fs.existsSync(filePath)) return null

  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)
  const frontmatter = data as ProjectFrontmatter

  return {
    slug,
    ...frontmatter,
    content,
  }
}

/**
 * Reads all local project Markdown files
 */
function getAllLocalProjects(): Project[] {
  if (!fs.existsSync(PORTFOLIO_DIR)) return []
  const filenames = fs.readdirSync(PORTFOLIO_DIR).filter(f => f.endsWith('.md'))

  return filenames.map((filename) => {
    const slug = filename.replace(/\.md$/, '')
    const filePath = path.join(PORTFOLIO_DIR, filename)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContents)
    const frontmatter = data as ProjectFrontmatter

    return {
      slug,
      ...frontmatter,
      content,
    } as Project
  })
}

/**
 * Retrieves all projects EXCLUSIVELY from the dedicated content repository (realshahriya/rocera-projects)
 * Each project folder contains meta.json, image.png, and optional case study text or README.md
 */
export async function getAllProjects(): Promise<Project[]> {
  const dedicatedDirs = await getDedicatedProjectDirs()
  const projects: Project[] = []
  const seenSlugs = new Set<string>()

  for (const slug of dedicatedDirs) {
    const meta = await getDedicatedProjectMeta(slug)
    if (meta) {
      seenSlugs.add(slug.toLowerCase())
      projects.push({
        slug,
        title: meta.title || slug.charAt(0).toUpperCase() + slug.slice(1),
        description: meta.description || 'Rocera engineering project.',
        image:
          meta.image ||
          `https://raw.githubusercontent.com/${GITHUB_PROJECTS_REPO}/main/${slug}/image.png`,
        tags: meta.tags || ['Engineering', 'Software'],
        status: meta.status || 'completed',
        demo: meta.demo,
        github: meta.github || `https://github.com/${GITHUB_PROJECTS_REPO}/tree/main/${slug}`,
        date: meta.date || new Date().toISOString().split('T')[0],
        featured: meta.featured ?? true,
      })
    }
  }

  // Merge local markdown seed files if any exist and aren't already included
  const localProjects = getAllLocalProjects()
  for (const local of localProjects) {
    if (!seenSlugs.has(local.slug.toLowerCase())) {
      seenSlugs.add(local.slug.toLowerCase())
      projects.push(local)
    }
  }

  return projects.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

/**
 * Returns featured projects for Home Page
 */
export async function getFeaturedProjects(): Promise<Project[]> {
  const projects = await getAllProjects()
  const featured = projects.filter(p => p.featured)
  return featured.length > 0 ? featured.slice(0, 3) : projects.slice(0, 3)
}

/**
 * Retrieves a single project by slug with rendered markdown content from meta.json / caseStudy / README.md inside realshahriya/rocera-projects
 */
export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const projects = await getAllProjects()
  const project = projects.find(p => p.slug.toLowerCase() === slug.toLowerCase())
  if (!project) return null

  // Fetch meta.json from dedicated content repository
  const dedicatedMeta = await getDedicatedProjectMeta(slug)
  
  // Resolve case study markdown text (meta.json -> caseStudy -> dedicated README.md -> local .md)
  let markdownContent = dedicatedMeta?.content || dedicatedMeta?.caseStudy || ''

  if (!markdownContent) {
    markdownContent = (await getDedicatedProjectReadme(slug)) || ''
  }

  if (!markdownContent) {
    const local = getLocalProject(slug)
    markdownContent = local?.content || ''
  }

  // Render Markdown to HTML using remark
  let htmlContent = ''
  if (markdownContent) {
    const processedContent = await remark()
      .use(remarkGfm)
      .use(remarkHtml)
      .process(markdownContent)
    htmlContent = processedContent.toString()
  }

  return {
    ...project,
    content: htmlContent,
  }
}

/**
 * Returns all project slugs for static path generation (SSG)
 */
export async function getAllProjectSlugs(): Promise<string[]> {
  const projects = await getAllProjects()
  return projects.map(p => p.slug)
}

/**
 * Collects all unique tags across all projects
 */
export function getAllTags(projects: Project[]): string[] {
  const tagSet = new Set<string>()
  projects.forEach(p => p.tags.forEach(t => tagSet.add(t)))
  return Array.from(tagSet).sort()
}
