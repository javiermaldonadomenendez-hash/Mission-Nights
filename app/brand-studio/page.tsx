import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ScrollRevealInit from '@/components/ScrollRevealInit'

export const metadata: Metadata = {
  title: 'Brand Studio – Mission Nights Brand Studio',
  description:
    'Markenauftritt mit Klarheit. Website mit Wirkung. Strategische Positionierung, Markenaufbau und professionelle Website-Umsetzung – für Unternehmen jeder Art.',
}

/* ─────────────────────────────────────────────────────────────
   BRAND STUDIO PAGE
   Mission Nights Brand Studio × Webmoderno
───────────────────────────────────────────────────────────── */

const processSteps = [
  {
    num: '01',
    title: 'Analyse',
    desc: 'Wir verstehen dein Unternehmen, dein Angebot und deine Zielgruppe. Wo stehst du heute? Wie wirkst du aktuell nach außen? Was fehlt?',
    tag: 'Start',
  },
  {
    num: '02',
    title: 'Positionierung & Klarheit',
    desc: 'Wir erarbeiten deine klare Positionierung, deine Kernbotschaft und den roten Faden, der sich durch deinen gesamten Auftritt zieht.',
    tag: 'Strategie',
  },
  {
    num: '03',
    title: 'Konzeption der Außenwirkung',
    desc: 'Struktur, Sprache, Tonalität und visuelle Richtung werden definiert. So entsteht ein Markenauftritt, der zu deinem Unternehmen passt – nicht zu irgendeinem.',
    tag: 'Marke',
  },
  {
    num: '04',
    title: 'Umsetzung mit Webmoderno',
    desc: 'Webmoderno setzt die Website mit Fixpreisen, persönlicher Betreuung und Launch in 5–7 Tagen um. Klar. Schnell. Bezahlbar. – von der Unternehmenswebsite bis zur fokussierten Landingpage.',
    tag: 'Launch',
  },
]

const solutionCards = [
  {
    num: '01',
    title: 'Klare Positionierung',
    desc: 'Dein Unternehmen braucht eine klare Antwort auf die Frage: Warum du? Wir schaffen die Grundlage, auf der alles andere aufbaut.',
    tag: 'Strategie',
  },
  {
    num: '02',
    title: 'Stimmiger Markenauftritt',
    desc: 'Farben, Sprache, Struktur und Außenwirkung – alles wird aufeinander abgestimmt. Kein Flickwerk, sondern ein kohärenter Gesamtauftritt.',
    tag: 'Marke',
  },
  {
    num: '03',
    title: 'Durchdachte Kommunikation',
    desc: 'Deine Botschaft muss verstanden werden – beim ersten Blick. Wir formulieren, was dein Unternehmen ausmacht, klar und ohne Umwege.',
    tag: 'Kommunikation',
  },
  {
    num: '04',
    title: 'Digitale Präsenz mit Wirkung',
    desc: 'Eine Website, die nicht nur gut aussieht, sondern Vertrauen aufbaut, Anfragen generiert und professionell überzeugt.',
    tag: 'Digital',
  },
]

const benefits = [
  {
    headline: 'Geschärfter Außenauftritt',
    desc: 'Dein Unternehmen wirkt so, wie es ist: professionell, klar und unverwechselbar.',
  },
  {
    headline: 'Klare Markenbotschaft',
    desc: 'Kein Raten mehr. Wer auf deine Website kommt, versteht sofort, was du anbietest und warum er bei dir richtig ist.',
  },
  {
    headline: 'Stimmige Website-Struktur',
    desc: 'Aufbau, Inhalt und Nutzerführung – alles folgt einer Logik, die Vertrauen aufbaut und zum Handeln einlädt.',
  },
  {
    headline: 'Professioneller digitaler Eindruck',
    desc: 'Vom ersten Blick an wirkt dein Unternehmen seriös, hochwertig und verlässlich – auf allen Endgeräten.',
  },
  {
    headline: 'Mehr Vertrauen bei potenziellen Kunden',
    desc: 'Ein professioneller Auftritt senkt die Hemmschwelle. Menschen nehmen Kontakt auf, weil sie Vertrauen haben.',
  },
  {
    headline: 'Bessere Grundlage für Anfragen und Wachstum',
    desc: 'Deine digitale Präsenz arbeitet für dich – auch dann, wenn du gerade nicht erreichbar bist.',
  },
]

const targetGroups = [
  'Dienstleister',
  'Berater & Coaches',
  'Agenturen',
  'Lokale Unternehmen',
  'Start-ups',
  'Etablierte Unternehmen',
  'Personenmarken mit Unternehmen',
]

export default function BrandStudioPage() {
  return (
    <>
      <Nav />
      <ScrollRevealInit />

      {/* ── 1. HERO ────────────────────────────────────────────── */}
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
          <p className="bs-hero-sub">
            Für Unternehmen, die digital professionell auftreten wollen –
            mit einer klaren Positionierung, einem stimmigen Markenauftritt
            und einer Website, die tatsächlich überzeugt.
          </p>
          <div className="bs-hero-actions">
            <a href="#kontakt" className="btn btn-light btn-lg">
              Projekt anfragen
            </a>
            <a href="#loesung" className="btn btn-ghost btn-lg">
              Wie es funktioniert
            </a>
          </div>
        </div>
      </section>

      {/* ── 2. PROBLEM ─────────────────────────────────────────── */}
      <section className="bs-section" id="problem">
        <div className="container">
          <div className="bs-problem-grid">
            <div className="bs-problem-text">
              <span className="label reveal">Die Realität</span>
              <h2 className="reveal">
                Viele Unternehmen scheitern digital –<br />
                nicht am Produkt, sondern am Auftritt.
              </h2>
              <p className="reveal d1">
                Du hast ein gutes Angebot. Du weißt, was du kannst. Aber nach
                außen wirkt dein Unternehmen nicht so, wie es sein sollte. Die
                Website ist da – aber sie überzeugt nicht. Anfragen bleiben aus.
                Vertrauen entsteht nicht.
              </p>
              <p className="reveal d2">
                Das ist kein Einzelfall. Es ist das häufigste Problem, das
                Unternehmen digital zurückhält.
              </p>
            </div>
            <div className="bs-problem-points reveal d2">
              {[
                { n: '01', t: 'Unklarer Auftritt', d: 'Wer auf die Website kommt, versteht nicht sofort, was das Unternehmen macht – und für wen.' },
                { n: '02', t: 'Austauschbares Erscheinungsbild', d: 'Design und Sprache könnten von hundert anderen Unternehmen stammen. Nichts bleibt hängen.' },
                { n: '03', t: 'Keine klare Botschaft', d: 'Das Angebot ist gut, aber nirgendwo steht klar, warum genau dieses Unternehmen die richtige Wahl ist.' },
                { n: '04', t: 'Kein Vertrauen beim ersten Eindruck', d: 'Innerhalb von Sekunden entscheiden Besucher, ob sie bleiben. Ein schwacher Auftritt kostet diese Chance.' },
                { n: '05', t: 'Kein roter Faden', d: 'Marke, Angebot und Website sprechen nicht dieselbe Sprache. Alles wirkt zusammengestückelt statt durchdacht.' },
              ].map((p, i) => (
                <div key={p.n} className={`bs-problem-item reveal d${i + 1}`}>
                  <span className="bs-problem-num">{p.n}</span>
                  <div>
                    <strong>{p.t}</strong>
                    <p>{p.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. WARUM WEBSITE ALLEIN NICHT REICHT ──────────────── */}
      <section className="bs-why">
        <div className="container">
          <div className="bs-why-inner">
            <span className="label reveal" style={{ marginBottom: '24px', display: 'block' }}>
              Der entscheidende Unterschied
            </span>
            <h2 className="bs-why-title reveal">
              Eine Website allein löst<br />das Problem nicht.
            </h2>
            <p className="bs-why-text reveal d1">
              Eine neue Website ohne klare Positionierung ist wie ein neues
              Schaufenster ohne Konzept. Es sieht vielleicht frischer aus –
              aber es überzeugt noch immer nicht. Wer einfach nur eine Website
              baut, ohne vorher Klarheit über Marke, Botschaft und Außenwirkung
              zu schaffen, investiert in das Falsche.
            </p>
            <p className="bs-why-text reveal d2">
              Es geht nicht um Design. Es geht um Struktur, Vertrauen und
              Wirkung. Darum, dass dein Unternehmen beim ersten Kontakt sofort
              das richtige Gefühl auslöst. Das entsteht nicht durch ein Template.
              Das entsteht durch Strategie.
            </p>
          </div>
        </div>
      </section>

      {/* ── 4. DIE LÖSUNG ──────────────────────────────────────── */}
      <section className="bs-solution" id="loesung">
        <div className="container">
          <div className="bs-solution-header reveal">
            <span className="label label--light">Die Lösung</span>
            <div className="bs-solution-header-inner">
              <h2 className="bs-solution-title">
                Strategie zuerst.<br />Dann Umsetzung.
              </h2>
              <p className="bs-solution-sub">
                Mission Nights Brand Studio schafft die strategische Grundlage,
                auf der ein professioneller Markenauftritt entstehen kann.
              </p>
            </div>
          </div>
          <div className="bs-solution-grid">
            {solutionCards.map((card, i) => (
              <div key={card.num} className={`phil-card reveal${i > 0 ? ` d${i}` : ''}`}>
                <span className="phil-num">{card.num}</span>
                <p className="phil-text">{card.title}</p>
                <p className="bs-card-desc">{card.desc}</p>
                <span className="phil-tag">{card.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. WEBMODERNO PARTNERSCHAFT ────────────────────────── */}
      <section className="bs-section" id="webmoderno">
        <div className="container">
          <div className="bs-partner-header reveal">
            <span className="label">Umsetzungspartner</span>
            <h2 className="reveal">
              Strategie trifft Umsetzung.
            </h2>
            <p className="bs-partner-intro reveal d1">
              Damit ein Markenauftritt nicht nur durchdacht ist, sondern auch
              sauber gebaut wird, arbeiten wir mit Webmoderno zusammen –
              einem Partner für moderne Unternehmenswebsites in Deutschland,
              Österreich und der Schweiz. Fixpreise, persönliche Betreuung,
              Launch in 5–7 Tagen.
            </p>
          </div>

          <div className="bs-partner-grid">
            <div className="bs-partner-card reveal">
              <span className="bs-partner-label">Mission Nights Brand Studio</span>
              <h3>Strategische Richtung</h3>
              <p>
                Wir schaffen die Grundlage: Positionierung, Markenstrategie,
                Kernbotschaft, Kommunikationsstruktur und das Konzept für
                deinen gesamten Außenauftritt. Das ist der Teil, den viele
                überspringen – und der den Unterschied macht.
              </p>
              <ul className="bs-partner-list">
                <li>Klare Positionierung</li>
                <li>Markenstrategie & Kernbotschaft</li>
                <li>Kommunikationsstruktur</li>
                <li>Konzept für den Außenauftritt</li>
              </ul>
            </div>

            <div className="bs-partner-divider">
              <span className="bs-partner-divider-label">+</span>
            </div>

            <div className="bs-partner-card reveal d2">
              <span className="bs-partner-label">Webmoderno</span>
              <h3>
                Klar. Schnell. Bezahlbar.
              </h3>
              <p>
                Webmoderno setzt die strategische Grundlage in eine saubere,
                professionelle Website um – mit Fixpreisen, persönlicher
                Betreuung und einem Launch in 5–7 Tagen. Kein langer
                Prozess, keine versteckten Kosten, kein Rätselraten.
              </p>
              <ul className="bs-partner-list">
                <li>Fixpreise – transparent von Anfang an</li>
                <li>Launch in 5–7 Tagen</li>
                <li>Persönliche Betreuung während des gesamten Projekts</li>
                <li>Pakete für jeden Bedarf: Visitenkarte, Landingpage, Business, Individuell</li>
                <li>Update-Pakete für laufende Pflege & Weiterentwicklung</li>
              </ul>
            </div>
          </div>

          <p className="bs-partner-note reveal">
            Die Zusammenarbeit verbindet das, was zusammengehört: Markenwirkung
            und Web-Umsetzung. Beides aus einer Hand – strukturiert, professionell
            und auf dein Unternehmen abgestimmt.
          </p>
        </div>
      </section>

      {/* ── 6. WAS UNTERNEHMEN BEKOMMEN ────────────────────────── */}
      <section className="bs-benefits">
        <div className="container">
          <span className="label reveal" style={{ marginBottom: '16px', display: 'block' }}>
            Das Ergebnis
          </span>
          <h2 className="bs-benefits-title reveal">
            Was dein Unternehmen konkret bekommt.
          </h2>
          <div className="bs-benefit-grid">
            {benefits.map((b, i) => (
              <div key={i} className={`bs-benefit-item reveal d${(i % 3) + 1}`}>
                <h4>{b.headline}</h4>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. FÜR WEN GEEIGNET ────────────────────────────────── */}
      <section className="bs-section bs-for-whom">
        <div className="container">
          <div className="bs-for-whom-inner">
            <span className="label reveal" style={{ marginBottom: '16px', display: 'block' }}>
              Für wen
            </span>
            <h2 className="reveal">
              Für jedes Unternehmen, das<br />
              professionell auftreten will.
            </h2>
            <p className="bs-for-whom-text reveal d1">
              Ob du gerade erst anfängst oder seit Jahren am Markt bist –
              wenn dein digitaler Auftritt nicht das widerspiegelt, was dein
              Unternehmen wirklich ist, ist es Zeit für Veränderung.
            </p>
            <div className="bs-chip-group reveal d2">
              {targetGroups.map((g) => (
                <span key={g} className="bs-chip">{g}</span>
              ))}
            </div>
            <p className="bs-for-whom-note reveal d3">
              Es geht nicht darum, in welcher Branche du tätig bist. Es geht
              darum, ob du digital so wirkst, wie du es verdienst.
            </p>
          </div>
        </div>
      </section>

      {/* ── 8. ABLAUF ──────────────────────────────────────────── */}
      <section className="bs-process">
        <div className="container">
          <div className="bs-process-header reveal">
            <span className="label label--light">Ablauf</span>
            <div className="bs-process-header-inner">
              <h2 className="bs-process-title">In vier Schritten zu einem<br />Auftritt, der wirkt.</h2>
              <p className="bs-process-sub">
                Kein langes Hin und Her. Kein endloser Prozess. Strukturiert,
                klar und auf das Ergebnis ausgerichtet.
              </p>
            </div>
          </div>
          <div className="bs-process-grid">
            {processSteps.map((step, i) => (
              <div key={step.num} className={`phil-card bs-process-card reveal${i > 0 ? ` d${i}` : ''}`}>
                <span className="phil-num">{step.num}</span>
                <p className="phil-text">{step.title}</p>
                <p className="bs-card-desc">{step.desc}</p>
                <span className="phil-tag">{step.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. DIFFERENZIERUNG ─────────────────────────────────── */}
      <section className="bs-diff">
        <div className="container">
          <div className="bs-diff-inner">
            <span className="label reveal" style={{ marginBottom: '24px', display: 'block' }}>
              Unser Anspruch
            </span>
            <blockquote className="bs-diff-quote reveal">
              Hier geht es nicht um schnell zusammengeklickte Websites<br />
              oder beliebige Designs.
            </blockquote>
            <p className="bs-diff-text reveal d1">
              Jedes Unternehmen ist anders. Jede Branche hat ihre eigene Sprache.
              Jeder Auftritt muss passen – zu dem, was das Unternehmen macht,
              wie es arbeitet und wen es erreichen will. Wir schaffen keinen
              generischen Standard. Wir schaffen Klarheit, die wirkt.
            </p>
            <p className="bs-diff-text reveal d2">
              Das Ergebnis ist kein schönes Template. Es ist ein Auftritt, der
              zum Unternehmen passt, Vertrauen schafft und professionell überzeugt –
              vom ersten Blick an.
            </p>
          </div>
        </div>
      </section>

      {/* ── 10. CTA ────────────────────────────────────────────── */}
      <section className="bs-cta" id="kontakt">
        <div className="container">
          <div className="bs-cta-inner reveal">
            <span className="label label--light" style={{ marginBottom: '28px', display: 'block' }}>
              Nächster Schritt
            </span>
            <h2 className="bs-cta-title">
              Wenn dein Unternehmen digital klar,<br />
              professionell und hochwertig wirken soll –<br />
              braucht es mehr als nur eine Website.
            </h2>
            <p className="bs-cta-sub reveal d1">
              Lass uns besprechen, wo du gerade stehst und was dein Auftritt
              braucht. Kein Verkaufsgespräch. Ein ehrliches Gespräch über
              Positionierung, Wirkung und den nächsten konkreten Schritt.
            </p>
            <div className="bs-cta-actions reveal d2">
              <a href="mailto:info@mission-nights.de" className="btn btn-light btn-lg">
                Gespräch anfragen
              </a>
              <a href="/#contact" className="btn btn-outline-light btn-lg">
                Mehr erfahren
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

/* ═══════════════════════════════════════════════════════════════
   EXTRAS: KÜRZERE LANDINGPAGE-VERSION
   ═══════════════════════════════════════════════════════════════

   Hero:
   ──────
   Label:    Mission Nights Brand Studio × Webmoderno
   Headline: Professioneller Markenauftritt. Sauber umgesetzte Website.
   Sub:      Strategie, Positionierung und digitale Umsetzung – für Unternehmen,
             die beim ersten Eindruck überzeugen wollen.
   CTA:      „Projekt anfragen"

   Problem (3 Zeilen):
   ────────────────────
   Viele Unternehmen haben ein gutes Angebot – aber keinen Auftritt,
   der das zeigt. Kein klares Profil, keine überzeugende Website,
   kein roter Faden zwischen Marke und Botschaft.

   Die Lösung (2 Sätze):
   ──────────────────────
   Mission Nights Brand Studio schafft Positionierung und Klarheit.
   Webmoderno setzt das Ergebnis als professionelle Website um.

   Was du bekommst (5 Punkte):
   ────────────────────────────
   — Klare Positionierung und Markenbotschaft
   — Stimmige Website-Struktur und Tonalität
   — Professioneller digitaler Gesamtauftritt
   — Mehr Vertrauen bei potenziellen Kunden
   — Mehr Anfragen durch eine Website, die überzeugt

   Ablauf (kompakt):
   ──────────────────
   01 Analyse → 02 Strategie → 03 Konzept → 04 Umsetzung mit Webmoderno

   CTA:
   ─────
   „Bereit für einen Auftritt, der wirkt?"
   Button: „Gespräch anfragen"

═══════════════════════════════════════════════════════════════ */

/* ═══════════════════════════════════════════════════════════════
   5 ALTERNATIVE HERO-HEADLINES
   ═══════════════════════════════════════════════════════════════

   1. „Markenauftritt mit Klarheit. Website mit Wirkung."
      → stark, direkt, beide Partner impliziert

   2. „Dein Unternehmen verdient einen Auftritt, der überzeugt."
      → emotional, Wertschätzung, breit anwendbar

   3. „Positionierung. Marke. Website. Alles aus einer Hand."
      → rational, vollständig, lösungsorientiert

   4. „Wer professionell wirken will, braucht mehr als ein Design."
      → provokativ, differenzierend, Problemfokus

   5. „Klarheit ist keine Option. Sie ist dein Wettbewerbsvorteil."
      → selbstbewusst, unternehmerisch, premium

═══════════════════════════════════════════════════════════════ */

/* ═══════════════════════════════════════════════════════════════
   3 ALTERNATIVE CTA-FORMULIERUNGEN
   ═══════════════════════════════════════════════════════════════

   1. „Projekt anfragen"
      → klar, direkt, professionell – empfohlen als primärer CTA

   2. „Kostenloses Erstgespräch sichern"
      → niedrige Hemmschwelle, Betonung auf kostenlos und einfach

   3. „Lass uns über deinen Auftritt sprechen"
      → persönlich, einladend, gesprächsorientiert

═══════════════════════════════════════════════════════════════ */
