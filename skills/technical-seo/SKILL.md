---
name: technical-seo
description: >
  Implementiert vollständiges technisches SEO bei jedem Web-Projekt automatisch.
  IMMER verwenden bei JEDEM Projekt — Landing Pages, Business-Websites, Apps.
  Läuft immer mit, auch wenn SEO nicht explizit erwähnt wird. Enthält alles
  was für Google-Sichtbarkeit nötig ist: Meta-Tags, Sitemap, robots.txt,
  Open Graph, Canonical URLs, Google Search Console Setup und den richtigen
  Zeitpunkt für jede Maßnahme. Kein Projekt ohne diesen Skill.
---

# Technical SEO — Webmoderno Standard

SEO ist kein Nachgedanke — es wird von Anfang an mitgebaut.
Dieser Skill stellt sicher dass jede Webmoderno-Website von Google
gefunden werden kann.

## Wann passiert was? (Zeitplan)

```
PROJEKTSTART (Tag 1):
→ URL-Struktur festlegen
→ Keyword pro Seite definieren (was soll diese Seite bei Google ranken?)
→ Titel und Beschreibungen planen

WÄHREND DEM BAUEN:
→ Meta-Tags auf jeder Seite einbauen
→ Überschriften-Hierarchie korrekt (H1 → H2 → H3)
→ Bilder mit Alt-Texten versehen
→ Interne Links zwischen Seiten setzen

VOR DEM LAUNCH:
→ Sitemap generieren
→ robots.txt konfigurieren
→ Open Graph Bilder erstellen
→ Alles testen

NACH DEM LAUNCH:
→ Google Search Console einrichten
→ Sitemap bei Google einreichen
→ Erste Rankings beobachten (dauert 4–12 Wochen)
```

---

## Meta-Tags — Next.js (Metadata API)

In Next.js werden Meta-Tags über die Metadata API gesetzt.
**Niemals manuell im HTML** — Next.js macht das automatisch richtig.

### Root Layout (gilt für alle Seiten als Standard)
```typescript
// app/layout.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  // metadataBase: Basis-URL der Website — PFLICHT
  metadataBase: new URL('https://www.domain.de'),
  
  // title.template: "%s" wird durch den Seitentitel ersetzt
  // Ergebnis z.B.: "Leistungen | Unternehmensname"
  title: {
    default: 'Unternehmensname — Kurze Beschreibung',
    template: '%s | Unternehmensname'
  },
  
  description: 'Kurze Beschreibung was das Unternehmen macht. Max. 155 Zeichen. Keyword einbauen.',
  
  // Robots: Standard = indexieren erlaubt
  robots: { index: true, follow: true },
  
  // Open Graph: wie die Seite auf WhatsApp/Instagram/LinkedIn aussieht
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    siteName: 'Unternehmensname',
  }
}
```

### Jede Unterseite (eigene Metadaten)
```typescript
// app/leistungen/page.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  // Titel: Keyword vorne, max. 60 Zeichen
  title: 'Webdesign Essen',
  // → Wird automatisch zu: "Webdesign Essen | Unternehmensname"
  
  // Description: Was ist auf dieser Seite? Max. 155 Zeichen.
  description: 'Professionelles Webdesign in Essen. Moderne Websites die verkaufen. Kostenlose Erstberatung.',
  
  // Canonical: Die "echte" URL dieser Seite
  alternates: {
    canonical: 'https://www.domain.de/leistungen/'
  },
  
  // Open Graph für diese Seite
  openGraph: {
    title: 'Webdesign Essen | Unternehmensname',
    description: 'Professionelles Webdesign in Essen...',
    url: 'https://www.domain.de/leistungen/',
    images: [{
      url: '/og/leistungen.png', // 1200×630px Bild
      width: 1200,
      height: 630,
      alt: 'Webdesign Leistungen — Unternehmensname'
    }]
  }
}
```

### Dynamische Seiten (Blog, Produkte etc.)
```typescript
// app/blog/[slug]/page.tsx
export async function generateMetadata({ params }): Promise<Metadata> {
  const post = await getPost(params.slug)
  
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `https://www.domain.de/blog/${params.slug}/` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image, width: 1200, height: 630 }]
    }
  }
}
```

---

## Titel-Regeln

```
Länge:    50–60 Zeichen (sonst schneidet Google ab)
Format:   [Keyword] | [Unternehmensname]
Keyword:  Das wichtigste Wort immer vorne

Beispiele:
✅ "Webdesign Essen | Webmoderno"           (30 Zeichen)
✅ "Landing Pages die verkaufen | Webmoderno" (42 Zeichen)
❌ "Willkommen auf unserer Website"          (kein Keyword)
❌ "Webmoderno – Ihre Agentur für professionelles Webdesign in Essen und Umgebung" (zu lang)
```

---

## Description-Regeln

```
Länge:   120–155 Zeichen
Inhalt:  Was ist auf der Seite + Warum klicken + Keyword

Formel: [Was] + [USP/Nutzen] + [CTA]

Beispiele:
✅ "Professionelles Webdesign in Essen. Moderne Websites ab 990€. Jetzt kostenloses Erstgespräch buchen."
✅ "Mission Nights: Networking-Events für Unternehmer in NRW. Nächster Termin: 31. März. Platz sichern."
❌ "Willkommen auf unserer Website. Wir sind ein tolles Unternehmen."
```

---

## Überschriften-Hierarchie (H1–H3)

```
Regel: Jede Seite hat genau EINE H1.

H1 = Hauptthema der Seite (enthält das Haupt-Keyword)
H2 = Hauptabschnitte der Seite (3–6 pro Seite)
H3 = Unterabschnitte (nur wenn nötig)

Beispiel Landing Page:
H1: "Webdesign Essen — Websites die überzeugen"
  H2: "Unsere Leistungen"
    H3: "Landing Pages"
    H3: "Business Websites"
  H2: "Warum Webmoderno?"
  H2: "Referenzen"
  H2: "FAQ"
  H2: "Kontakt"
```

---

## Alt-Texte für Bilder

```
Jedes Bild braucht einen Alt-Text — außer reine Dekorationsbilder.

✅ Gut: alt="Webdesign Projekt für Restaurant Essen — Startseite"
✅ Gut: alt="Tim Scholten — Speaker Mission Nights März 2026"
❌ Schlecht: alt="Bild" oder alt="image1.jpg"
❌ Dekorativ: alt="" (leerer Alt-Text ist korrekt für rein dekorative Bilder)

In Next.js:
<Image src="..." alt="Beschreibender Text" ... />
```

---

## Sitemap (Next.js)

```typescript
// app/sitemap.ts — wird automatisch zu /sitemap.xml
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.domain.de',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1, // Startseite = höchste Priorität
    },
    {
      url: 'https://www.domain.de/leistungen/',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.domain.de/ueber-uns/',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://www.domain.de/kontakt/',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // Blog-Posts dynamisch hinzufügen wenn vorhanden
  ]
}
```

---

## robots.txt (Next.js)

```typescript
// app/robots.ts — wird automatisch zu /robots.txt
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // Diese Seiten sollen NICHT bei Google erscheinen:
      disallow: ['/api/', '/admin/', '/danke/', '/checkout/'],
    },
    sitemap: 'https://www.domain.de/sitemap.xml',
  }
}
```

---

## Open Graph Bild erstellen

Das OG-Bild erscheint wenn jemand die Seite auf WhatsApp, Instagram,
LinkedIn oder Twitter teilt. Es muss existieren — sonst sieht der
Link-Preview generisch aus.

```
Größe:    1200 × 630 Pixel
Format:   PNG oder JPG
Inhalt:   Logo + Seitenname + kurze Beschreibung
          (lesbar auch als kleines Thumbnail)
Ablage:   /public/og/seitenname.png

Tipp: In Canva erstellen — Template "LinkedIn Post" hat fast
      die richtige Größe, auf 1200×630px anpassen.
```

---

## Google Search Console einrichten (nach Launch)

```
1. search.google.com/search-console aufrufen
2. "Property hinzufügen" → Domain eingeben
3. Verifizierung: HTML-Tag in <head> einfügen
   → In Next.js: metadata.verification.google = "CODE"
4. Sitemap einreichen: 
   Sitemaps → URL eingeben: https://www.domain.de/sitemap.xml
5. Fertig — erste Daten kommen nach 1–2 Wochen

Was Google Search Console zeigt:
→ Welche Seiten sind indexiert?
→ Für welche Keywords rankt die Seite?
→ Wie viele Klicks und Impressionen?
→ Welche Fehler gibt es?
```

---

## SEO Pflicht-Checklist vor Launch

```
[ ] Jede Seite hat einen einzigartigen Titel (50–60 Zeichen)
[ ] Jede Seite hat eine einzigartige Description (120–155 Zeichen)
[ ] Jede Seite hat genau eine H1
[ ] Alle Bilder haben Alt-Texte
[ ] Sitemap unter /sitemap.xml erreichbar
[ ] robots.txt unter /robots.txt erreichbar
[ ] Canonical Tag auf jeder Seite
[ ] OG-Bild vorhanden (1200×630px)
[ ] HTTPS aktiv (kein HTTP)
[ ] Keine 404-Fehler (alle Links funktionieren)
[ ] Google Search Console eingerichtet
[ ] Sitemap bei Google eingereicht
[ ] PageSpeed Insights Score > 80 (pagespeed.web.dev)
```

---

## Verknüpfte Skills

- `geo-strategy` — KI-Suche (Perplexity, ChatGPT Search) — aufbauend auf Tech-SEO
- `aeo-strategy` — Featured Snippets, FAQ für Google — aufbauend auf Tech-SEO
- `rechtliches-web` — Impressum, Datenschutz (auch SEO-relevant)
- `mobile-responsive` — Mobile-Friendly ist Google-Ranking-Faktor
