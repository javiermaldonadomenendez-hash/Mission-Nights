import type { Metadata } from 'next'
import Image from 'next/image'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ScrollRevealInit from '@/components/ScrollRevealInit'

export const metadata: Metadata = {
  title: 'Brand Studio – Mission Nights Brand Studio',
  description:
    'Markenauftritt mit Klarheit. Website mit Wirkung. Strategische Positionierung, Markenaufbau und professionelle Website-Umsetzung – für Unternehmen jeder Art.',
}

const targetGroups = [
  'Dienstleister',
  'Berater & Coaches',
  'Agenturen',
  'Lokale Unternehmen',
  'Start-ups',
  'Etablierte Unternehmen',
  'Personenmarken',
]

const benefits = [
  'Geschärfter Außenauftritt',
  'Klare Markenbotschaft',
  'Stimmige Website-Struktur',
  'Professioneller Ersteindruck',
  'Mehr Kundenvertrauen',
  'Bessere Anfragen',
]

export default function BrandStudioPage() {
  return (
    <>
      <Nav />
      <ScrollRevealInit />

      {/* ── 1. HERO ─────────────────────────────────────────── */}
      <section className="bs-hero">
        <div className="bs-hero-bg">
          <div className="bs-hero-cloud c1" />
          <div className="bs-hero-cloud c2" />
          <div className="bs-hero-cloud c3" />
        </div>
        <div className="bs-hero-inner reveal">
          <span className="label label--light" style={{ marginBottom: '28px', display: 'block' }}>
            Mission Nights Brand Studio
          </span>
          <h1 className="bs-hero-title">
            Markenauftritt mit Klarheit.<br />
            Website mit Wirkung.
          </h1>
          <p className="bs-hero-sub" style={{ fontSize: 'clamp(0.8rem, 1.4vw, 1rem)' }}>
            Strategie, Positionierung und digitale Umsetzung – für Unternehmen,
            die beim ersten Eindruck überzeugen wollen.
          </p>
          <div className="bs-hero-actions">
            <a href="#kontakt" className="btn btn-light btn-lg">Projekt anfragen</a>
            <a href="#ablauf" className="btn btn-ghost btn-lg">Wie es funktioniert</a>
          </div>
        </div>
      </section>

      {/* ── 2. VORHER / NACHHER SPLIT ───────────────────────── */}
      <section className="bs-split">
        <div className="container">
          <div className="bs-split-grid">
            <div className="bs-split-col bs-split-col--before reveal">
              <span className="bs-split-label">Ohne uns</span>
              {['Unklar', 'Austauschbar', 'Vertrauenslos', 'Kein Faden', 'Keine Anfragen'].map((w) => (
                <span key={w} className="bs-split-word bs-split-word--dim">{w}</span>
              ))}
            </div>
            <div className="bs-split-divider">
              <span className="bs-split-vs">→</span>
            </div>
            <div className="bs-split-col bs-split-col--after reveal d2">
              <span className="bs-split-label">Mit uns</span>
              {['Klar', 'Unverwechselbar', 'Vertrauenswürdig', 'Roter Faden', 'Mehr Anfragen'].map((w) => (
                <span key={w} className="bs-split-word">{w}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. STATEMENT ────────────────────────────────────── */}
      <section className="bs-why">
        <div className="container">
          <div className="bs-why-inner">
            <span className="label reveal" style={{ marginBottom: '24px', display: 'block' }}>
              Der entscheidende Unterschied
            </span>
            <h2 className="bs-why-title reveal">
              Eine Website ohne Strategie<br />ist verlorenes Geld.
            </h2>
          </div>
        </div>
      </section>

      {/* ── 4. DIE LÖSUNG ───────────────────────────────────── */}
      <section className="bs-solution" id="loesung">
        <div className="container">
          <div className="bs-solution-header reveal">
            <span className="label label--light">Die Lösung</span>
            <div className="bs-solution-header-inner">
              <h2 className="bs-solution-title">Strategie zuerst.<br />Dann Umsetzung.</h2>
            </div>
          </div>
          <div className="bs-solution-grid">
            {[
              { num: '01', title: 'Klare Positionierung', tag: 'Strategie' },
              { num: '02', title: 'Stimmiger Markenauftritt', tag: 'Marke' },
              { num: '03', title: 'Durchdachte Kommunikation', tag: 'Botschaft' },
              { num: '04', title: 'Digitale Präsenz mit Wirkung', tag: 'Digital' },
            ].map((card, i) => (
              <div key={card.num} className={`phil-card reveal${i > 0 ? ` d${i}` : ''}`}>
                <span className="phil-num">{card.num}</span>
                <p className="phil-text">{card.title}</p>
                <span className="phil-tag">{card.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. WEBMODERNO ───────────────────────────────────── */}
      <section className="bs-section" id="webmoderno">
        <div className="container">
          <div className="bs-partner-header reveal">
            <span className="label">Umsetzungspartner</span>
            <h2 className="reveal">Strategie trifft Umsetzung.</h2>
          </div>

          <div className="bs-partner-grid">
            <div className="bs-partner-card reveal">
              <span className="bs-partner-label">Mission Nights Brand Studio</span>
              <h3>Strategische Richtung</h3>
              <ul className="bs-partner-list">
                <li>Positionierung</li>
                <li>Markenstrategie & Kernbotschaft</li>
                <li>Kommunikationsstruktur</li>
                <li>Konzept Außenauftritt</li>
              </ul>
            </div>
            <div className="bs-partner-divider">
              <span className="bs-partner-divider-label">+</span>
            </div>
            <div className="bs-partner-card reveal d2">
              <a href="https://www.webmoderno.de" target="_blank" rel="noopener noreferrer" className="bs-wm-logo-link">
                <Image
                  src="https://assets.webmoderno.de/global/logos/webmoderno-logo.png"
                  alt="Webmoderno"
                  width={160}
                  height={36}
                  style={{ objectFit: 'contain', objectPosition: 'left' }}
                />
              </a>
              <h3>Klar. Schnell. Bezahlbar.</h3>
              <div className="bs-wm-stats">
                <div className="bs-wm-stat">
                  <span className="bs-wm-num">5–7</span>
                  <span className="bs-wm-lbl">Tage bis Launch</span>
                </div>
                <div className="bs-wm-stat">
                  <span className="bs-wm-num">Fix</span>
                  <span className="bs-wm-lbl">preis, transparent</span>
                </div>
                <div className="bs-wm-stat">
                  <span className="bs-wm-num">100%</span>
                  <span className="bs-wm-lbl">persönliche Betreuung</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. BENEFITS ─────────────────────────────────────── */}
      <section className="bs-benefits">
        <div className="container">
          <span className="label reveal" style={{ marginBottom: '16px', display: 'block' }}>Das Ergebnis</span>
          <h2 className="bs-benefits-title reveal">Was dein Unternehmen bekommt.</h2>
          <div className="bs-benefit-grid">
            {benefits.map((b, i) => (
              <div key={i} className={`bs-benefit-item reveal d${(i % 3) + 1}`}>
                <h4>{b}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. FÜR WEN ──────────────────────────────────────── */}
      <section className="bs-section bs-for-whom">
        <div className="container">
          <div className="bs-for-whom-inner">
            <span className="label reveal" style={{ marginBottom: '16px', display: 'block' }}>Für wen</span>
            <h2 className="reveal">Für jedes Unternehmen,<br />das professionell auftreten will.</h2>
            <div className="bs-chip-group reveal d1">
              {targetGroups.map((g) => (
                <span key={g} className="bs-chip">{g}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. ABLAUF — FLOW ────────────────────────────────── */}
      <section className="bs-process" id="ablauf">
        <div className="container">
          <span className="label label--light reveal" style={{ marginBottom: '56px', display: 'block' }}>Ablauf</span>
          <div className="bs-flow reveal">
            {[
              { num: '01', title: 'Analyse', desc: 'Wo stehst du? Was fehlt?' },
              { num: '02', title: 'Positionierung', desc: 'Botschaft & roter Faden.' },
              { num: '03', title: 'Konzept', desc: 'Sprache, Struktur, Wirkung.' },
              { num: '04', title: 'Launch', desc: 'Umsetzung mit Webmoderno.' },
            ].map((step, i) => (
              <>
                <div key={step.num} className="bs-flow-step">
                  <span className="bs-flow-num">{step.num}</span>
                  <span className="bs-flow-title">{step.title}</span>
                  <span className="bs-flow-desc">{step.desc}</span>
                </div>
                {i < 3 && <span key={`arrow-${i}`} className="bs-flow-arrow">→</span>}
              </>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. STATEMENT ────────────────────────────────────── */}
      <section className="bs-diff">
        <div className="container">
          <div className="bs-diff-inner">
            <blockquote className="bs-diff-quote reveal">
              Kein Template. Kein Standard.<br />
              Ein Auftritt, der zu dir passt.
            </blockquote>
          </div>
        </div>
      </section>

      {/* ── 10. CTA ─────────────────────────────────────────── */}
      <section className="bs-cta" id="kontakt">
        <div className="container">
          <div className="bs-cta-inner reveal">
            <span className="label label--light" style={{ marginBottom: '28px', display: 'block' }}>Nächster Schritt</span>
            <h2 className="bs-cta-title">
              Bereit für einen Auftritt,<br />der wirklich wirkt?
            </h2>
            <p className="bs-cta-sub reveal d1">
              Ein Gespräch. Kein Verkauf. Ehrliche Einschätzung, was dein Auftritt braucht.
            </p>
            <div className="bs-cta-actions reveal d2">
              <a href="mailto:info@mission-nights.de" className="btn btn-light btn-lg">Gespräch anfragen</a>
              <a href="mailto:info@mission-nights.de" className="bs-cta-mail reveal d3">info@mission-nights.de</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
