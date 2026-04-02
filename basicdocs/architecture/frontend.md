# Architektur — Frontend

## Meta

| Feld | Wert |
|------|------|
| **Projekt** | Mission Nights |
| **Stand** | 2026-04-01 |
| **Status** | In Betrieb |

---

## 1. Übersicht

Marketing-Landing Page für exklusive Networking-Events. Rein statisch / SSG — kein Backend, keine Authentifizierung. Alle Inhalte sind im Code gepflegt.

**Stack:** Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS v3 · CSS Custom Properties

## 2. Projektstruktur (IST)

```
/                        # Projekt-Root (KEIN src/ Verzeichnis)
├── app/                 # Next.js 15 App Router
│   ├── page.tsx         # Startseite — Component Composition aller Sections
│   ├── layout.tsx       # Root Layout: Fonts (Inter, Montserrat), CookieConsent
│   ├── globals.css      # Design System: CSS Custom Properties, Buttons, Nav, Animations
│   ├── datenschutz/
│   │   └── page.tsx     # Datenschutzerklärung (14 Abschnitte, DSGVO-konform)
│   ├── impressum/
│   │   └── page.tsx     # Impressum
│   └── agb/
│       └── page.tsx     # Allgemeine Geschäftsbedingungen
├── components/          # 14 React-Komponenten
│   ├── Hero.tsx         # Hero-Section: animierter Hintergrund, Headline, CTA
│   ├── About.tsx        # About/Mission: Bild, Text, Statistiken
│   ├── NextEvent.tsx    # Nächstes Event: Datum, Ort, Thema, Speaker, Ticket-Link
│   ├── Experience.tsx   # 5 Säulen des Erlebnisses (Liste)
│   ├── Gallery.tsx      # 4-Bild-Galerie (assets.mission-nights.de)
│   ├── VisionDinner.tsx # Vision Dinner: exklusives Dinner-Format
│   ├── Philosophy.tsx   # 4 Leitsätze / Philosophie
│   ├── CTA.tsx          # Call-to-Action am Seitenende
│   ├── Nav.tsx          # Navigation: Fixed, Scroll-aware, Mobile Hamburger
│   ├── Footer.tsx       # Footer: Links, Kontakt, Social
│   ├── LegalNav.tsx     # Navigation für Legal-Seiten (Zurück-Button)
│   ├── ScrollRevealInit.tsx  # Intersection Observer für .reveal Animationen
│   ├── CookieConsent/
│   │   ├── CookieConsent.tsx         # Cookie-Banner + Einstellungs-Modal
│   │   └── CookieConsent.module.css  # Scoped CSS für Banner
│   └── ui/
│       └── etheral-shadow.tsx  # Animierter Hintergrund (Hero)
├── lib/
│   └── consent.ts       # Cookie-Consent State-Management (localStorage)
├── basicdocs/           # Projekt-Dokumentation
├── package.json
├── tsconfig.json        # Path-Alias: @/* → root
├── tailwind.config.ts   # Tailwind v3, preflight disabled
└── next.config.ts       # Image: unoptimized, remotePatterns: assets.mission-nights.de
```

## 3. Routing

| Route | Typ | Beschreibung | Auth |
|-------|-----|-------------|------|
| `/` | SSG | Startseite (alle Sections) | ❌ |
| `/impressum` | SSG | Impressum | ❌ |
| `/datenschutz` | SSG | Datenschutzerklärung | ❌ |
| `/agb` | SSG | AGB | ❌ |

Keine Middleware, keine geschützten Routen.

## 4. Komponenten-Architektur

### Prinzipien

- **Server Components** als Standard (keine `'use client'` Direktive ohne Grund)
- **Client Components** nur für: Nav (Scroll-State), CookieConsent (State/localStorage), ScrollRevealInit (Intersection Observer)
- **Composition Pattern:** `app/page.tsx` importiert und ordnet alle Section-Komponenten
- **Default Exports** für alle Komponenten

### Namenskonventionen

| Typ | Konvention | Beispiel |
|-----|-----------|---------|
| Komponenten | PascalCase | `NextEvent.tsx` |
| Utilities / Lib | camelCase | `consent.ts` |
| CSS Module | PascalCase.module.css | `CookieConsent.module.css` |
| Ordner | PascalCase (Feature) | `CookieConsent/` |

## 4b. Next.js 15 — Kritische Änderungen

### Async Dynamic APIs

```typescript
// ALLE Dynamic APIs müssen awaitet werden
import { cookies, headers } from 'next/headers'

// ✅ Korrekt
const cookieStore = await cookies()
const headersList = await headers()

// Page/Layout Props
type Props = {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ q?: string }>
}
export default async function Page({ params, searchParams }: Props) {
  const { slug } = await params
}
```

### Fetch-Caching

```typescript
// Next.js 15: fetch() ist standardmäßig NICHT gecacht
fetch(url)                               // kein Cache
fetch(url, { cache: 'force-cache' })     // gecacht
fetch(url, { next: { revalidate: 60 } }) // ISR-Style
```

## 5. State Management

| Bereich | Lösung |
|---------|--------|
| Cookie-Consent | `lib/consent.ts` (localStorage) |
| Nav Scroll-State | `useState` + `useEffect` in `Nav.tsx` |
| Mobile Menu | `useState` in `Nav.tsx` |

Kein globaler State, kein Zustand, kein Context — bewusst minimal gehalten.

## 6. Styling

- **Framework:** Tailwind CSS v3 (utility-first) + `globals.css` (Custom Properties Design System)
- **Methodikl:** CSS Custom Properties für Design-Tokens, Tailwind für Layout-Utilities
- **Preflight:** Deaktiviert in `tailwind.config.ts` (eigener Reset in `globals.css`)
- **Animationen:** CSS Transitions + Intersection Observer (kein Framer Motion)
- **Dark Mode:** Nicht geplant
- **Responsiveness:** Mobile-First via Tailwind Breakpoints

### Wichtig: Kein `cn()` Helper

Aktuell keine `clsx`/`tailwind-merge` Abhängigkeit — Klassen werden direkt zusammengesetzt. Bei Bedarf ergänzen.

## 7. Performance

- [x] Next.js `<Image />` für alle Bilder (Remote: assets.mission-nights.de)
- [x] `next/font` für Font-Loading (Inter, Montserrat via Google Fonts)
- [x] Scroll Reveal via Intersection Observer (kein JS-Framework)
- [ ] Bundle-Analyse via `@next/bundle-analyzer`
- [ ] Core Web Vitals Monitoring (Vercel Analytics)

## 8. SEO

Aktuell nur Root-Metadata in `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: 'Mission Nights – Wo Vision auf Menschen trifft',
  description: 'Mission Nights – Wo Vision auf Menschen trifft. Exklusive Events für Unternehmer, Gründer und ambitionierte Menschen.',
}
```

Ausbau-Potenzial:
- [ ] Open Graph / Twitter Card
- [ ] `sitemap.ts` im App-Root
- [ ] `robots.ts` im App-Root
- [ ] JSON-LD für Events (Schema.org `Event`)

## 9. Testing

Aktuell keine automatisierten Tests. Manuelle Browser-Tests.

| Typ | Tool | Status |
|-----|------|--------|
| Unit | — | ❌ Nicht eingerichtet |
| Component | — | ❌ Nicht eingerichtet |
| E2E | — | ❌ Nicht eingerichtet |
