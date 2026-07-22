"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { RoceraLogo } from '@/components/ui/RoceraLogo'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/hackathons', label: 'Hackathons' },
  { href: '/team', label: 'Team' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? 'color-mix(in srgb, var(--color-rocera-bg) 90%, transparent)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--color-rocera-border)' : 'none',
      }}
    >
      <nav className="container-rocera flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group" aria-label="Rocera Home">
          <RoceraLogo className="w-8 h-8 transition-transform duration-300 group-hover:scale-105" />
          <span
            className="font-semibold text-lg tracking-tight"
            style={{ color: 'var(--color-rocera-text)' }}
          >
            Rocera
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200"
                  style={{
                    color: isActive
                      ? 'var(--color-rocera-text)'
                      : 'var(--color-rocera-muted)',
                    background: isActive
                      ? 'var(--color-rocera-surface-2)'
                      : 'transparent',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive)
                      (e.currentTarget as HTMLElement).style.color =
                        'var(--color-rocera-muted-2)'
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive)
                      (e.currentTarget as HTMLElement).style.color =
                        'var(--color-rocera-muted)'
                  }}
                >
                  {link.label}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/contact"
            id="nav-start-project"
            className="px-4 py-1.5 rounded-md text-sm font-medium transition-all duration-200"
            style={{
              background: 'var(--color-rocera-accent)',
              color: '#fff',
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.background =
                'var(--color-rocera-accent-hover)')
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.background =
                'var(--color-rocera-accent)')
            }
          >
            Start a Project
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          id="nav-mobile-toggle"
          className="md:hidden p-2 rounded-md transition-colors duration-200"
          style={{ color: 'var(--color-rocera-muted)' }}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: isOpen ? '400px' : '0',
          background: 'var(--color-rocera-surface)',
          borderBottom: isOpen ? '1px solid var(--color-rocera-border)' : 'none',
        }}
      >
        <ul className="container-rocera py-4 flex flex-col gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                  style={{
                    color: isActive
                      ? 'var(--color-rocera-text)'
                      : 'var(--color-rocera-muted)',
                    background: isActive
                      ? 'var(--color-rocera-surface-2)'
                      : 'transparent',
                  }}
                >
                  {link.label}
                </Link>
              </li>
            )
          })}
          <li className="mt-2">
            <Link
              href="/contact"
              className="block text-center px-4 py-2 rounded-md text-sm font-medium"
              style={{
                background: 'var(--color-rocera-accent)',
                color: '#fff',
              }}
            >
              Start a Project
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
