import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://rocera.dev'),
  title: {
    default: 'Rocera — Engineering Software That Lasts',
    template: '%s | Rocera',
  },
  description:
    'Rocera is a premium technology agency. We partner with startups, founders, and organizations to design and build reliable software, AI systems, blockchain solutions, and modern digital products.',
  keywords: [
    'software engineering',
    'AI engineering',
    'blockchain development',
    'full stack development',
    'cloud devops',
    'technology agency',
  ],
  authors: [{ name: 'Rocera', url: 'https://rocera.dev' }],
  creator: 'Rocera',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rocera.dev',
    siteName: 'Rocera',
    title: 'Rocera — Engineering Software That Lasts',
    description:
      'Premium technology agency specializing in Full Stack, AI, Blockchain, and Cloud engineering.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Rocera — Engineering Software That Lasts',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rocera — Engineering Software That Lasts',
    description: 'Premium technology agency specializing in Full Stack, AI, Blockchain, and Cloud engineering.',
    images: ['/og-image.png'],
    creator: '@rocera_dev',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
