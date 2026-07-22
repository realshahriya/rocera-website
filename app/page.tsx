import { HeroSection } from '@/components/sections/HeroSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { FeaturedPortfolio } from '@/components/sections/FeaturedPortfolio'
import { TechStackSection } from '@/components/sections/TechStackSection'
import { HackathonsPreview } from '@/components/sections/HackathonsPreview'
import { CTASection } from '@/components/sections/CTASection'
import { getFeaturedProjects } from '@/lib/portfolio'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Rocera — Engineering Software That Lasts',
  description:
    'Rocera partners with startups, founders, and organizations to design and build reliable software, AI systems, blockchain solutions, and modern digital products.',
}

export default async function HomePage() {
  const featuredProjects = await getFeaturedProjects()

  return (
    <>
      {/* JSON-LD Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Rocera',
            url: 'https://rocera.dev',
            logo: 'https://rocera.dev/logo.svg',
            description:
              'Premium technology agency specializing in Full Stack, AI, Blockchain, and Cloud engineering.',
            sameAs: [
              'https://github.com/rocera-dev',
              'https://linkedin.com/company/rocera',
            ],
          }),
        }}
      />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <FeaturedPortfolio projects={featuredProjects} />
      <TechStackSection />
      <HackathonsPreview />
      <CTASection />
    </>
  )
}
