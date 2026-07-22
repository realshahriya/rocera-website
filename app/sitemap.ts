import { MetadataRoute } from 'next'
import { getAllProjectSlugs } from '@/lib/portfolio'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const slugs = await getAllProjectSlugs()
  const baseUrl = 'https://rocera.dev'

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/portfolio`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/hackathons`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/team`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.8 },
  ]

  const projectRoutes: MetadataRoute.Sitemap = slugs.map((slug) => ({
    url: `${baseUrl}/portfolio/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  return [...staticRoutes, ...projectRoutes]
}
