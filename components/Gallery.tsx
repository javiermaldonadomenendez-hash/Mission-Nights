'use client'

import Image from 'next/image'
import { useState, useEffect, useCallback } from 'react'

// Bilder-CDN: https://assets.mission-nights.de/kunden/mission-nights/images/
// Dateinamen bitte ggf. an tatsächliche Server-Dateinamen anpassen (z.B. "MN Vision 1.webp")
const BASE = 'https://assets.mission-nights.de/kunden/mission-nights/images'

const images = [
  { src: `${BASE}/mnvision1.webp`,  alt: 'Mission Nights Vision Dinner' },
  { src: `${BASE}/mnvision2.webp`,  alt: 'Mission Nights Atmosphäre' },
  { src: `${BASE}/mnvision3.webp`,  alt: 'Mission Nights Networking' },
  { src: `${BASE}/mnvision4.webp`,  alt: 'Mission Nights Gespräche' },
  { src: `${BASE}/mnvision5.webp`,  alt: 'Mission Nights Community' },
  { src: `${BASE}/mnvision6.webp`,  alt: 'Mission Nights Inspiration' },
  { src: `${BASE}/mnvision7.webp`,  alt: 'Mission Nights Abend' },
  { src: `${BASE}/mnvision9.webp`,  alt: 'Mission Nights Menschen' },
  { src: `${BASE}/mnvision10.webp`, alt: 'Mission Nights Verbindungen' },
]

export default function Gallery() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

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
        <div className="slideshow-track">
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
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                priority={i === 0}
              />
            </div>
          ))}
        </div>

        {/* Prev / Next */}
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

        {/* Dots */}
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
    </section>
  )
}
