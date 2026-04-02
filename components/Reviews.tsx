'use client'

import { useState, useEffect, useCallback } from 'react'

const reviews = [
  {
    name: 'Samuel',
    text: 'Mission Nights ist das Beste, was mir passieren konnte. Ich habe an einem Abend mehr wertvolle Kontakte geknüpft als in einem ganzen Jahr auf klassischen Netzwerkveranstaltungen.',
  },
  {
    name: 'Nikita',
    text: 'Die Qualität der Gespräche ist auf einem völlig anderen Level. Man merkt sofort, dass hier Menschen zusammenkommen, die wirklich etwas bewegen wollen. Absolut empfehlenswert.',
  },
  {
    name: 'Kira',
    text: 'Ich bin inspiriert nach Hause gegangen — mit neuen Ideen, neuer Energie und echten Verbindungen. Genau das, was ich gebraucht habe.',
  },
  {
    name: 'Leon',
    text: 'Die Intimität des Formats ist der Schlüssel. Keine anonyme Masse, sondern ein Kreis von Menschen, bei dem man sofort das Gefühl hat: hier passiert etwas Besonderes.',
  },
  {
    name: 'Janina',
    text: 'Als Gründerin bin ich es gewohnt, alleine Entscheidungen zu treffen. Bei Mission Nights habe ich gemerkt, wie viel leichter alles wird, wenn man die richtigen Menschen um sich hat.',
  },
  {
    name: 'Alex',
    text: 'Was mich am meisten überrascht hat: Man spricht hier offen über Herausforderungen und Zweifel — und bekommt echte Antworten. Eine Community, die trägt.',
  },
  {
    name: 'Tim',
    text: 'Ich bin schon mehrfach dabei gewesen und jedes Mal nehme ich etwas mit. Der Input der anderen Unternehmer hat mein Denken mehr verändert als so manches Buch.',
  },
  {
    name: 'Jan',
    text: 'Selten habe ich einen Abend so bewusst erlebt. Die Atmosphäre, die Menschen, die Gespräche — Mission Nights hat eine eigene Energie, die schwer in Worte zu fassen ist.',
  },
]

export default function Reviews() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const [expanded, setExpanded] = useState<number | null>(null)

  const next = useCallback(() => {
    setCurrent(i => (i + 1) % reviews.length)
  }, [])

  const prev = () => {
    setCurrent(i => (i - 1 + reviews.length) % reviews.length)
  }

  useEffect(() => {
    if (paused) return
    const id = setInterval(next, 6000)
    return () => clearInterval(id)
  }, [paused, next])

  useEffect(() => {
    if (expanded === null) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setExpanded(null)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [expanded])

  return (
    <section className="reviews" id="reviews">
      <div className="container">
        <div className="section-header reveal">
          <span className="label">Stimmen</span>
          <h2>Was andere sagen.</h2>
        </div>

        <div
          className="reviews-slider reveal"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="reviews-track">
            {reviews.map((r, i) => (
              <div
                key={r.name}
                className={`review-card${i === current ? ' review-card--active' : ''}`}
                aria-hidden={i !== current}
                onClick={() => i === current && setExpanded(i)}
                style={{ cursor: i === current ? 'zoom-in' : 'default' }}
              >
                <div className="review-quote">
                  <svg width="28" height="20" viewBox="0 0 28 20" fill="none" aria-hidden="true">
                    <path
                      d="M0 20V12.4C0 8.93333 0.8 6.06667 2.4 3.8C4 1.53333 6.33333 0.133333 9.4 0L10.6 2.2C8.6 2.6 7.06667 3.46667 6 4.8C4.93333 6.13333 4.4 7.66667 4.4 9.4H8.8V20H0ZM16.8 20V12.4C16.8 8.93333 17.6 6.06667 19.2 3.8C20.8 1.53333 23.1333 0.133333 26.2 0L27.4 2.2C25.4 2.6 23.8667 3.46667 22.8 4.8C21.7333 6.13333 21.2 7.66667 21.2 9.4H25.6V20H16.8Z"
                      fill="currentColor"
                      opacity="0.12"
                    />
                  </svg>
                </div>
                <p className="review-text">{r.text}</p>
                <div className="review-author">
                  <div className="review-avatar">{r.name[0]}</div>
                  <span className="review-name">{r.name}</span>
                </div>
              </div>
            ))}
          </div>

          <button className="review-btn review-btn--prev" onClick={prev} aria-label="Vorherige Bewertung">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button className="review-btn review-btn--next" onClick={next} aria-label="Nächste Bewertung">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          <div className="review-dots">
            {reviews.map((_, i) => (
              <button
                key={i}
                className={`review-dot${i === current ? ' review-dot--active' : ''}`}
                onClick={() => setCurrent(i)}
                aria-label={`Bewertung ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Expanded overlay */}
      {expanded !== null && (
        <div className="lightbox" onClick={() => setExpanded(null)}>
          <button className="lightbox-close" onClick={() => setExpanded(null)} aria-label="Schließen">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <div className="review-expanded" onClick={e => e.stopPropagation()}>
            <div className="review-quote">
              <svg width="40" height="28" viewBox="0 0 28 20" fill="none" aria-hidden="true">
                <path
                  d="M0 20V12.4C0 8.93333 0.8 6.06667 2.4 3.8C4 1.53333 6.33333 0.133333 9.4 0L10.6 2.2C8.6 2.6 7.06667 3.46667 6 4.8C4.93333 6.13333 4.4 7.66667 4.4 9.4H8.8V20H0ZM16.8 20V12.4C16.8 8.93333 17.6 6.06667 19.2 3.8C20.8 1.53333 23.1333 0.133333 26.2 0L27.4 2.2C25.4 2.6 23.8667 3.46667 22.8 4.8C21.7333 6.13333 21.2 7.66667 21.2 9.4H25.6V20H16.8Z"
                  fill="currentColor"
                  opacity="0.15"
                />
              </svg>
            </div>
            <p className="review-expanded-text">{reviews[expanded].text}</p>
            <div className="review-author" style={{ justifyContent: 'center', marginTop: '32px' }}>
              <div className="review-avatar review-avatar--lg">{reviews[expanded].name[0]}</div>
              <span className="review-name" style={{ fontSize: '1.125rem' }}>{reviews[expanded].name}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
