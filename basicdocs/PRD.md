# PRD — Product Requirements Document

## Meta

| Feld | Wert |
|------|------|
| **Projekt** | Mission Nights |
| **Kunde** | Javier Tomas Maldonado Menéndez |
| **Version** | 0.1 |
| **Status** | In Betrieb |
| **Erstellt** | 2026-04-01 |
| **Autor** | Javier Maldonado Menéndez |

---

## 1. Zusammenfassung

Mission Nights ist eine Marketing-Landing Page für exklusive Networking-Events, die Unternehmer, Gründer und ambitionierte Menschen zusammenbringt. Die Seite treibt Ticket-Verkäufe über Eventbrite und baut Community-Awareness auf unter dem Motto „Wo Vision auf Menschen trifft".

## 2. Problemstellung

Unternehmer und Gründer suchen authentische, kuratierte Networking-Formate jenseits von oberflächlichem Smalltalk und Massenveranstaltungen. Mission Nights schafft bewusst kleine, exklusive Abende (~40 Personen) mit echtem Austausch und bedeutsamen Verbindungen.

## 3. Zielgruppe

| Persona | Beschreibung | Primäre Bedürfnisse |
|---------|-------------|---------------------|
| Unternehmer / Gründer | Selbstständige, die aktiv an ihrer Vision arbeiten | Echtes Netzwerk, Impulse, Gleichgesinnte |
| Ambitionierte Einzelpersonen | Menschen mit klaren Zielen, die sich weiterentwickeln wollen | Inspiration, Community, Zugang zu einer exklusiven Gruppe |

## 4. Ziele & Erfolgskriterien

| Ziel | Metrik | Zielwert |
|------|--------|----------|
| Ticket-Verkäufe steigern | Clicks auf Eventbrite-Links | Möglichst hoch |
| Community-Awareness aufbauen | Instagram-Follower (@mission.nights) | Wachstum |
| Events ausverkaufen | Auslastung pro Event | ~40 / 40 Plätze |

## 5. Funktionale Anforderungen

### 5.1 Must-Have (MVP) — vollständig umgesetzt

- [x] Hero-Section mit animiertem Hintergrund und CTA zu Tickets
- [x] About/Mission-Section mit Statistiken (40+ Gäste, 12 Events/Jahr, kuratierte Teilnehmer)
- [x] NextEvent-Karte (Datum, Ort, Thema, Speaker, Ticket-Link)
- [x] Experience-Section (5 Säulen: Networking, Inspiration, Impulse & Talks, Community, Vision & Austausch)
- [x] Galerie (4 Bilder via assets.mission-nights.de CDN)
- [x] Vision Dinner-Section
- [x] Philosophy-Section (4 Leitsätze)
- [x] CTA-Section
- [x] Navigation (Fixed, Scroll-aware, Mobile Hamburger)
- [x] Footer mit Links und Kontakt
- [x] Cookie-Consent Banner (DSGVO-konform, 3 Kategorien)
- [x] Impressum (/impressum)
- [x] Datenschutzerklärung (/datenschutz)
- [x] AGB (/agb)
- [x] Scroll Reveal Animationen
- [x] Responsive Design (Mobile-First)

### 5.2 Should-Have (V1.1)

- [ ] Newsletter-Anmeldung / Waitlist
- [ ] Event-Archiv / vergangene Events
- [ ] Kontaktformular

### 5.3 Nice-to-Have (Backlog)

- [ ] Mitglieder-Login / Community-Bereich
- [ ] Blog / Artikel-Sektion
- [ ] Testimonials von Teilnehmern

## 6. Nicht-funktionale Anforderungen

- **Performance:** LCP < 2.5s, Core Web Vitals grün (Next.js Image Optimization)
- **Sicherheit:** DSGVO-konform, Cookie-Consent, keine personenbezogenen Daten ohne Einwilligung
- **Skalierung:** Statische Seite, skaliert automatisch via Vercel CDN
- **Barrierefreiheit:** Semantisches HTML, keyboard-navigierbar
- **SEO:** Meta-Tags gesetzt, Titel + Description, Open Graph vorbereitet

## 7. Technische Rahmenbedingungen

- **Frontend:** Next.js 15 (App Router), React 19, TypeScript
- **Styling:** Tailwind CSS v3 + CSS Custom Properties (globals.css)
- **Hosting:** Vercel
- **Domain:** mission-nights.de
- **Assets-CDN:** assets.mission-nights.de
- **Drittanbieter:** Eventbrite (Ticket-Verkauf), Google Fonts (Inter, Montserrat)
- **Backend:** Aktuell keins — rein statische / SSG-Seite

## 8. Seitenstruktur / Sitemap

```
/                   # Startseite (Hero → About → NextEvent → Experience → Gallery → VisionDinner → Philosophy → CTA)
/impressum          # Impressum (rechtlich erforderlich)
/datenschutz        # Datenschutzerklärung (DSGVO)
/agb                # Allgemeine Geschäftsbedingungen
```

## 9. Abgrenzung (Out of Scope)

- Backend / Datenbank (Supabase erst bei späteren Features)
- User Authentication / Login
- CMS für Event-Inhalte (Events werden aktuell im Code gepflegt)
- Newsletter-System
- Zahlungsabwicklung (läuft über Eventbrite)

## 10. Offene Fragen

- [ ] Soll ein CMS (z.B. Sanity, Contentful) für Event-Verwaltung integriert werden?
- [ ] Newsletter / Waitlist geplant?
- [ ] Google Analytics oder anderes Tracking aktivieren?

## 11. Timeline

| Phase | Zeitraum | Deliverables |
|-------|----------|-------------|
| Konzept & Design | Q1 2026 | Komponenten, Design-System, Inhalte |
| Entwicklung MVP | Q1 2026 | Vollständige Landing Page |
| Launch | 2026-04-01 | Go-Live auf mission-nights.de |
| V1.1 | TBD | Newsletter, Event-Archiv, Kontaktformular |
