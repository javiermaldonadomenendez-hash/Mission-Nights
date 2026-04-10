'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface NavProps {
  alwaysScrolled?: boolean
}

export default function Nav({ alwaysScrolled = false }: NavProps) {
  const [scrolled, setScrolled] = useState(alwaysScrolled)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (alwaysScrolled) return
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [alwaysScrolled])

  const closeMenu = () => {
    setMenuOpen(false)
    document.body.style.overflow = ''
  }

  const toggleMenu = () => {
    const next = !menuOpen
    setMenuOpen(next)
    document.body.style.overflow = next ? 'hidden' : ''
  }

  return (
    <>
      <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
        <div className="container">
          <div className="nav-inner">
            <Link href="/" className="nav-logo">Mission Nights</Link>
            <ul className="nav-links">
              <li><Link href="/#about">Über uns</Link></li>
              <li><Link href="/#event">Event</Link></li>
              <li><Link href="/#experience">Experience</Link></li>
              <li><Link href="/#community">Community</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/brand-studio">Brand Studio</Link></li>
            </ul>
            <div className="nav-cta-wrap">
              <Link
                href="/#event"
                className={`btn btn-sm ${scrolled ? 'btn-dark' : 'btn-outline-light'}`}
              >
                Anmelden
              </Link>
            </div>
            <button
              className={`nav-hamburger${menuOpen ? ' open' : ''}`}
              onClick={toggleMenu}
              aria-label="Menü"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <Link href="/#about" className="m-link" onClick={closeMenu}>Über uns</Link>
        <Link href="/#event" className="m-link" onClick={closeMenu}>Event</Link>
        <Link href="/#experience" className="m-link" onClick={closeMenu}>Experience</Link>
        <Link href="/#community" className="m-link" onClick={closeMenu}>Community</Link>
        <Link href="/blog" className="m-link" onClick={closeMenu}>Blog</Link>
        <Link href="/brand-studio" className="m-link" onClick={closeMenu}>Brand Studio</Link>
        <Link href="/#event" className="m-link mobile-cta" onClick={closeMenu}>Platz sichern</Link>
      </div>
    </>
  )
}
