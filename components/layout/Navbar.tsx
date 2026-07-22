"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'
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
    document.body.style.overflow = ''
  }, [pathname])

  const toggleMobileMenu = () => {
    const nextState = !isOpen
    setIsOpen(nextState)
    if (nextState) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled || isOpen
          ? 'color-mix(in srgb, var(--color-rocera-bg) 95%, transparent)'
          : 'transparent',
        backdropFilter: scrolled || isOpen ? 'blur(16px)' : 'none',
        borderBottom: scrolled || isOpen ? '1px solid var(--color-rocera-border)' : 'none',
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
                  className="px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all duration-200"
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
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/contact"
            id="nav-start-project"
            className="btn-butter !py-2 !px-5 text-sm"
          >
            Start a Project
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          id="nav-mobile-toggle"
          className="md:hidden p-2 rounded-xl transition-colors duration-200 border border-white/10"
          style={{ background: 'var(--color-rocera-surface)', color: 'var(--color-rocera-text)' }}
          onClick={toggleMobileMenu}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Drawer Navigation Overlay */}
      <div
        className="md:hidden fixed top-16 left-0 right-0 bottom-0 z-40 transition-all duration-300 flex flex-col justify-between p-6"
        style={{
          background: 'var(--color-rocera-bg)',
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? 'auto' : 'none',
          transform: isOpen ? 'translateY(0)' : 'translateY(-10px)',
          minHeight: 'calc(100vh - 4rem)',
        }}
      >
        <ul className="flex flex-col gap-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-semibold transition-colors duration-200 border border-transparent"
                  style={{
                    color: isActive
                      ? 'var(--color-rocera-text)'
                      : 'var(--color-rocera-muted-2)',
                    background: isActive
                      ? 'var(--color-rocera-surface-2)'
                      : 'var(--color-rocera-surface)',
                    borderColor: isActive ? 'var(--color-rocera-border-2)' : 'var(--color-rocera-border)',
                  }}
                >
                  <span>{link.label}</span>
                  <ArrowRight size={16} className="opacity-50" />
                </Link>
              </li>
            )
          })}
        </ul>

        <div className="pt-6 border-t border-white/10">
          <Link
            href="/contact"
            className="btn-butter w-full !py-3.5 text-center text-sm"
          >
            Start a Project
          </Link>
        </div>
      </div>
    </header>
  )
}
