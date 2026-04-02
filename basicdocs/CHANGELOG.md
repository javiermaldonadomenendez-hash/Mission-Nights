# Changelog

Alle relevanten Änderungen an diesem Projekt werden hier dokumentiert.

Format basiert auf [Keep a Changelog](https://keepachangelog.com/de/1.0.0/).
Versionierung folgt [Semantic Versioning](https://semver.org/lang/de/).

---

## [Unreleased]

### Hinzugefügt

### Geändert

### Behoben

### Entfernt

---

## [0.1.0] — 2026-04-01

### Hinzugefügt

**Landing Page — vollständiger MVP**

- `Hero.tsx` — Hero-Section mit animiertem Hintergrund (`ui/etheral-shadow.tsx`), Headline, Subline und Ticket-CTA
- `About.tsx` — Mission-Section mit Event-Bild, Beschreibungstext und Statistiken (40+ Gäste, 12 Events/Jahr, kuratierte Teilnehmer)
- `NextEvent.tsx` — Nächstes-Event-Karte mit Datum, Ort, Thema, Speaker und Eventbrite-Link
- `Experience.tsx` — 5 Säulen des Mission-Nights-Erlebnisses (Networking, Inspiration, Impulse & Talks, Community, Vision & Austausch)
- `Gallery.tsx` — 4-Bild-Galerie mit Fotos von assets.mission-nights.de
- `VisionDinner.tsx` — Sektion für das exklusive Vision Dinner Format
- `Philosophy.tsx` — 4 Leitsätze / Philosophie von Mission Nights
- `CTA.tsx` — Call-to-Action-Sektion am Seitenende

**Navigation & Layout**
- `Nav.tsx` — Fixed Navigation mit Scroll-aware Hintergrund (transparent → Glasmorphism), Mobile Hamburger-Menü
- `Footer.tsx` — Footer mit Links (Impressum, Datenschutz, AGB), Kontaktdaten und Instagram-Link
- `LegalNav.tsx` — Zurück-Navigation für Rechtliche Seiten

**Design System**
- `app/globals.css` — CSS Custom Properties Design System: Farb-Skala (`--black` bis `--gray-900`), Typografie-Variablen, Button-Klassen (`.btn-dark`, `.btn-light`, `.btn-outline-light`, `.btn-ghost`), Nav-Styles, Scroll Reveal Animationen
- `ScrollRevealInit.tsx` — Intersection Observer für `.reveal` / `.reveal.in` Scroll-Animationen
- Fonts: Inter (Body) + Montserrat 700/800 (Logo) via `next/font/google`

**Rechtliche Seiten (DSGVO-konform)**
- `/impressum` — Vollständiges Impressum (Angaben nach §5 TMG)
- `/datenschutz` — Datenschutzerklärung (14 Abschnitte, DSGVO / EU-US DPF)
- `/agb` — Allgemeine Geschäftsbedingungen für Event-Teilnahme

**Cookie-Consent**
- `CookieConsent.tsx` + `CookieConsent.module.css` — DSGVO-konformes Cookie-Banner mit 3 Kategorien (Notwendig, Analyse, Marketing) und Einstellungs-Modal
- `lib/consent.ts` — Cookie-Consent State-Management via localStorage

**Technisches Setup**
- Next.js 15 App Router mit TypeScript (strict mode)
- Tailwind CSS v3 (preflight deaktiviert, Custom Properties stattdessen)
- `next.config.ts` — Image remotePatterns für `assets.mission-nights.de`
- `tsconfig.json` — Path-Alias `@/*` → root
- Responsive Design (Mobile-First, alle Breakpoints)
- SEO: Basis-Metadata (Titel, Description) in `app/layout.tsx`

---

<!-- Template für neue Einträge:

## [X.Y.Z] — YYYY-MM-DD

### Hinzugefügt
- Neue Features

### Geändert
- Änderungen an bestehenden Features

### Behoben
- Bugfixes

### Entfernt
- Entfernte Features

### Sicherheit
- Sicherheitsrelevante Änderungen

-->
