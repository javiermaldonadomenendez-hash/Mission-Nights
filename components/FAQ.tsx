'use client'

import { useState } from 'react'
import { FAQSchema, faqItems } from './FAQSchema'

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="faq-section" id="faq">
      <FAQSchema />
      <div className="container">
        <div className="faq-header reveal">
          <span className="label">FAQ</span>
          <h2>Häufige Fragen.</h2>
        </div>

        <div className="faq-list">
          {faqItems.map((item, i) => (
            <div key={i} className={`faq-item reveal${i > 0 ? ` d${Math.min(i, 5)}` : ''}`}>
              <button
                className="faq-question"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span>{item.frage}</span>
                <svg
                  className={`faq-icon${open === i ? ' faq-icon--open' : ''}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  width="20"
                  height="20"
                  aria-hidden="true"
                >
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" className={`faq-minus${open === i ? ' faq-minus--hidden' : ''}`} />
                </svg>
              </button>
              {open === i && (
                <p className="faq-answer">{item.antwort}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
