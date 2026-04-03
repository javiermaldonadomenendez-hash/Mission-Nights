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
              <li><a href="#about">Über uns</a></li>
              <li><a href="#event">Event</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#community">Community</a></li>
              <li><Link href="/blog">Blog</Link></li>
            </ul>
            <div className="nav-cta-wrap">
              <a
                href="#event"
                className={`btn btn-sm ${scrolled ? 'btn-dark' : 'btn-outline-light'}`}
              >
                Anmelden
              </a>
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
        <a href="#about" className="m-link" onClick={closeMenu}>Über uns</a>
        <a href="#event" className="m-link" onClick={closeMenu}>Event</a>
        <a href="#experience" className="m-link" onClick={closeMenu}>Experience</a>
        <a href="#community" className="m-link" onClick={closeMenu}>Community</a>
        <Link href="/blog" className="m-link" onClick={closeMenu}>Blog</Link>
        <a href="#event" className="m-link mobile-cta" onClick={closeMenu}>Platz sichern</a>
      </div>
    </>
  )
}
