'use client'

import Image from 'next/image'
import { useState, useEffect, useCallback } from 'react'

const BASE = 'https://assets.mission-nights.de/kunden/mission-nights/images'

const images = [
  { src: `${BASE}/mnvision1.webp`,        alt: 'Mission Nights Vision Dinner' },
  { src: `${BASE}/mnvision2.webp`,        alt: 'Mission Nights Atmosphäre' },
  { src: `${BASE}/mnvision3.webp`,        alt: 'Mission Nights Networking' },
  { src: `${BASE}/mnvision4.webp`,        alt: 'Mission Nights Gespräche' },
  { src: `${BASE}/mnvision5.webp`,        alt: 'Mission Nights Community' },
  { src: `${BASE}/mnvision6.webp`,        alt: 'Mission Nights Inspiration' },
  { src: `${BASE}/mnvision7.webp`,        alt: 'Mission Nights Abend' },
  { src: `${BASE}/mnvision9.webp`,        alt: 'Mission Nights Menschen' },
  { src: `${BASE}/mnvision10.webp`,       alt: 'Mission Nights Verbindungen' },
  { src: `${BASE}/mission-nights2.webp`,  alt: 'Mission Nights Event' },
  { src: `${BASE}/mission-nights3.webp`,  alt: 'Mission Nights Networking' },
  { src: `${BASE}/mission-nights4.webp`,  alt: 'Mission Nights Abendatmosphäre' },
  { src: `${BASE}/mission-nights5.webp`,  alt: 'Mission Nights Talk & Inspiration' },
]

export default function Gallery() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const [lightbox, setLightbox] = useState(false)

  const next = useCallback(() => {
    setCurrent(i => (i + 1) % images.length)
  }, [])

  const prev = () => {
    setCurrent(i => (i - 1 + images.length) % images.length)
  }

  useEffect(() => {
    if (paused) return
    const id = setInterval(next, 5000)
    return () => clearInterval(id)
  }, [paused, next])

  // Schließen mit Escape
  useEffect(() => {
    if (!lightbox) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(false)
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [lightbox, next])

  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <div className="gallery-header reveal">
          <span className="label">Eindrücke</span>
          <h2>
            Atmosphäre,
            <br />
            die inspiriert.
          </h2>
        </div>
      </div>

      <div
        className="slideshow"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          className="slideshow-track"
          onClick={() => setLightbox(true)}
          style={{ cursor: 'zoom-in' }}
        >
          {images.map((img, i) => (
            <div
              key={img.src}
              className={`slide${i === current ? ' slide--active' : ''}`}
              aria-hidden={i !== current}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="100vw"
                style={{ objectFit: 'contain', objectPosition: 'center' }}
                priority={i === 0}
              />
            </div>
          ))}
        </div>

        <button className="slide-btn slide-btn--prev" onClick={prev} aria-label="Vorheriges Bild">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button className="slide-btn slide-btn--next" onClick={next} aria-label="Nächstes Bild">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        <div className="slide-dots">
          {images.map((_, i) => (
            <button
              key={i}
              className={`slide-dot${i === current ? ' slide-dot--active' : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`Bild ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(false)}>
          <button className="lightbox-close" onClick={() => setLightbox(false)} aria-label="Schließen">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <button className="lightbox-prev" onClick={e => { e.stopPropagation(); prev() }} aria-label="Vorheriges Bild">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <div className="lightbox-img" onClick={e => e.stopPropagation()}>
            <Image
              src={images[current].src}
              alt={images[current].alt}
              fill
              sizes="100vw"
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
          <button className="lightbox-next" onClick={e => { e.stopPropagation(); next() }} aria-label="Nächstes Bild">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
          <div className="lightbox-counter">{current + 1} / {images.length}</div>
        </div>
      )}
    </section>
  )
}
