---
name: seo
description: >
  Implementiert technisches und On-Page SEO für Next.js-Projekte. IMMER
  verwenden wenn: der User nach "SEO", "Suchmaschinenoptimierung", "Meta Tags",
  "Sitemap", "robots.txt", "Google Rankings", "Keywords", "Schema Markup",
  "Open Graph", "Core Web Vitals", "Structured Data", "Canonical", oder
  "wie werde ich bei Google gefunden" fragt.
---

# SEO Skill

Suchmaschinenoptimierung für Next.js (App Router).

## Technisches SEO

### Metadata API

```tsx
// app/page.tsx — Statische Metadata
export const metadata = {
  title: 'Seitentitel | Firmenname',
  description: 'Beschreibung in 150–160 Zeichen...',
  openGraph: {
    title: 'Seitentitel',
    description: 'Beschreibung',
    url: 'https://example.com',
    siteName: 'Firmenname',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Seitentitel',
    description: 'Beschreibung',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://example.com/seite',
  },
}

// Dynamische Metadata
export async function generateMetadata({ params }): Promise<Metadata> {
  const data = await getData(params.slug)
  return {
    title: data.title,
    description: data.description,
  }
}
```

### Sitemap

```typescript
// app/sitemap.ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://example.com', lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: 'https://example.com/leistungen', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://example.com/kontakt', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.5 },
  ]
}
```

### robots.txt

```typescript
// app/robots.ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/', disallow: '/api/' },
    sitemap: 'https://example.com/sitemap.xml',
  }
}
```

## On-Page SEO

| Element | Best Practice |
|---------|--------------|
| Title | Keyword vorne, 50–60 Zeichen |
| Description | CTA enthalten, 150–160 Zeichen |
| H1 | 1x pro Seite, Haupt-Keyword |
| H2/H3 | Logische Struktur, Keywords natürlich |
| Images | Alt-Text mit Keyword, beschreibend |
| URLs | Kurz, sprechend, mit Keyword |
| Interne Links | Relevante Seiten verlinken |

## Structured Data (JSON-LD)

```tsx
// Organization Schema (auf jeder Seite)
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Firmenname',
  url: 'https://example.com',
  logo: 'https://example.com/logo.png',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+49-XXX-XXXXXXX',
    contactType: 'customer service',
    availableLanguage: 'German',
  },
}
```

## Core Web Vitals

| Metrik | Zielwert | Wie erreichen |
|--------|----------|---------------|
| LCP | < 2.5s | Image Optimization, CDN |
| FID/INP | < 200ms | Code Splitting, wenig JS |
| CLS | < 0.1 | Feste Bild-Dimensionen, Fonts |

## Checkliste

- [ ] Unique Title + Description pro Seite
- [ ] Open Graph + Twitter Cards
- [ ] Canonical URLs
- [ ] Sitemap generiert und eingereicht
- [ ] robots.txt konfiguriert
- [ ] JSON-LD Schema Markup
- [ ] H1-Hierarchie korrekt
- [ ] Alt-Texte für alle Bilder
- [ ] Core Web Vitals bestanden
- [ ] Google Search Console eingerichtet
- [ ] Keine 404-Fehler
