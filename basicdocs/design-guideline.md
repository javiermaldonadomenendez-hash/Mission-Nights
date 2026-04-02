# Design-Guideline

## Meta

| Feld | Wert |
|------|------|
| **Projekt** | Mission Nights |
| **Version** | 0.1 |
| **Status** | In Betrieb |
| **Erstellt** | 2026-04-01 |

---

## 1. Designphilosophie

Minimales, dunkles Luxury-Design — exklusiv, klar, reduziert. Das Design spiegelt die Exklusivität und Ernsthaftigkeit der Events wider: keine Ablenkungen, keine Spielereien — nur Substanz. Schwarz auf Weiß, viel Weißraum, präzise Typografie.

**Leitmotiv:** „Where Vision Meets People" — das Design soll Vertrauen, Qualität und Zugehörigkeit vermitteln.

## 2. Farbpalette

Alle Farben sind als CSS Custom Properties in `app/globals.css` definiert. Kein Tailwind-Config-Override nötig — Tailwind greift über `var(--foreground)` / `var(--background)`.

### Primärfarben

| Name | CSS Variable | Hex | Verwendung |
|------|-------------|-----|-----------|
| Black | `--black` | `#0a0a0a` | Primärfarbe, Texte, `.btn-dark`, dunkle Sections |
| White | `--white` | `#ffffff` | Hintergrund, helle Sections, `.btn-light` Text |

### Neutrals (Grau-Skala)

| Name | CSS Variable | Hex | Verwendung |
|------|-------------|-----|-----------|
| Off-White | `--off-white` | `#fafafa` | Subtile Sections-Hintergründe |
| Gray 100 | `--gray-100` | `#f5f5f5` | Hover-States (`.btn-light`) |
| Gray 200 | `--gray-200` | `#e8e8e8` | Trennlinien, Nav-Border (scrolled) |
| Gray 300 | `--gray-300` | `#d4d4d4` | Subtile Borders |
| Gray 400 | `--gray-400` | `#a3a3a3` | Labels, Captions |
| Gray 500 | `--gray-500` | `#737373` | Sekundärtext, Back-Links |
| Gray 600 | `--gray-600` | `#525252` | Gedämpfte Texte |
| Gray 800 | `--gray-800` | `#262626` | Hover-State `.btn-dark` |
| Gray 900 | `--gray-900` | `#141414` | Sehr dunkle Flächen |

### Tailwind Config

```js
// tailwind.config.ts — Maps auf CSS Custom Properties
colors: {
  foreground: 'var(--foreground)',
  background: 'var(--background)',
}
```

## 3. Typografie

**Fonts:** eingebunden via `next/font/google` in `app/layout.tsx`

| Font | Variable | Gewichte | Verwendung |
|------|----------|----------|-----------|
| **Inter** | `--font-inter` | 400, 500, 600, 700 | Body, Navigation, Buttons, alles |
| **Montserrat** | `--font-montserrat` | 700, 800 | Logo-Wortmarke in Nav |

**Font-Stack:**
```css
--font: var(--font-inter), -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

**Typografische Skala** (aus globals.css abgeleitet):

| Element | Font | Gewicht | Beschreibung |
|---------|------|---------|-------------|
| Logo | Montserrat | 800 | `1.0625rem`, uppercase, `letter-spacing: 0.02em` |
| Label | Inter | 500 | `0.6875rem`, uppercase, `letter-spacing: 0.14em`, `--gray-400` |
| Nav-Links | Inter | normal | `0.875rem`, opacity 0.65 |
| Body | Inter | 400 | `1rem`, `line-height: 1.6` |
| Btn SM | Inter | 500 | `0.875rem` |
| Btn MD | Inter | 500 | `0.9375rem` |
| Btn LG | Inter | 500 | `1.0625rem` |

## 4. Spacing & Layout

| Variable | Wert | Beschreibung |
|----------|------|-------------|
| `--nav-h` | `72px` | Navigationshöhe |
| `--pad-v` | `clamp(80px, 11vw, 144px)` | Vertikales Section-Padding (fluid) |
| `--pad-h` | `clamp(24px, 6vw, 80px)` | Horizontales Container-Padding (fluid) |
| `--max-w` | `1280px` | Maximale Container-Breite |

**Container-Klasse:**
```css
.container {
  width: 100%;
  max-width: var(--max-w);  /* 1280px */
  margin: 0 auto;
  padding: 0 var(--pad-h);
}
```

## 5. Komponenten

### Buttons

Alle Buttons erben von `.btn` (Base) + Größen-Modifier + Varianten-Modifier.

| Klasse | Style | Verwendung |
|--------|-------|-----------|
| `.btn-dark` | `#0a0a0a` Hintergrund, weiß Text | Haupt-CTAs auf hellen Flächen |
| `.btn-light` | `#ffffff` Hintergrund, schwarz Text | CTAs auf dunklen Flächen |
| `.btn-outline-light` | Transparentes Outline + weißer Text | Sekundäre CTAs auf dunklen Flächen |
| `.btn-ghost` | Kein Hintergrund, weißer Text | Tertiäre Aktionen (z.B. „Mehr erfahren") |

Größen: `.btn-sm` (10px 22px) · `.btn-md` (14px 30px) · `.btn-lg` (18px 44px)

**Hover-Effekte:** `translateY(-2px)` + Box-Shadow für `.btn-dark` / `.btn-light`

### Labels

```css
.label        /* Uppercase, tracked, grau — Abschnitts-Bezeichner */
.label--light /* Für dunkle Hintergründe */
```

### Navigation

- **Typ:** Fixed (`position: fixed`)
- **Höhe:** 72px (`--nav-h`)
- **Default-State:** Transparent, weißer Text (über Hero/dunklen Sections)
- **Scrolled-State:** Weißer Glasmorphism-Hintergrund (`rgba(255,255,255,0.93)` + `backdrop-filter: blur(20px)`) + dunkler Text
- **Mobile:** Hamburger-Button → vollflächiges weißes Overlay-Menü

### Scroll Reveal

```css
.reveal        /* Startposition: opacity 0, translateY(28px) */
.reveal.in     /* Endposition: opacity 1, translateY(0) — via Intersection Observer */
.d1 – .d5     /* Transition-Delays: 0.08s Schritte */
```

Aktiviert via `ScrollRevealInit.tsx` (Intersection Observer, kein JS-Bundle).

## 6. Bilder & Medien

- **CDN:** `assets.mission-nights.de` — alle Event-Fotos
- **Komponente:** Next.js `<Image />` mit `remotePatterns` konfiguriert
- **Optimierung:** `unoptimized: true` in next.config.ts (CDN übernimmt Optimierung)
- **Icons:** Inline SVG in Komponenten (kein Icon-Library-Overhead)

## 7. Animationen & Transitions

| Typ | Implementierung |
|-----|----------------|
| Hover (Buttons) | `transition: all 0.22s var(--ease-out)` |
| Hover (Nav-Links) | `transition: opacity 0.2s` |
| Nav Background | `transition: background 0.4s var(--ease), border-color 0.4s var(--ease)` |
| Scroll Reveal | `transition: opacity 0.75s var(--ease-out), transform 0.75s var(--ease-out)` |
| Hero Background | Custom Animation via `ui/etheral-shadow.tsx` |

**Easing-Kurven:**
```css
--ease-out: cubic-bezier(0.16, 1, 0.3, 1);  /* Snappy, spring-artig */
--ease:     cubic-bezier(0.4, 0, 0.2, 1);   /* Material Design Standard */
```

## 8. Responsive Breakpoints

Tailwind v3 Default-Breakpoints (Mobile-First):

| Breakpoint | Tailwind | Ab |
|-----------|----------|----|
| Mobile | Default | 0px |
| Tablet | `sm:` | ≥ 640px |
| Tablet Landscape | `md:` | ≥ 768px |
| Desktop | `lg:` | ≥ 1024px |
| Wide | `xl:` | ≥ 1280px |

Mobile Navigation: Hamburger-Menü ab `< 768px` (via CSS `display: none` / Media Query in globals.css).

## 9. Dark Mode

- [x] Nicht geplant — die Seite arbeitet bewusst mit einem definierten Hell-Dunkel-Kontrast je Section. Kein System-Dark-Mode-Support.
