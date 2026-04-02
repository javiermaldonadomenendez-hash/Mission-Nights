---
name: security-dsgvo
description: >
  Implementiert Web-Security und DSGVO-Konformität bei jedem Projekt: HTTPS,
  Cookie-Banner, sichere Formulare, API-Keys und Content Security Policy.
  IMMER verwenden bei JEDEM Projekt — kein Launch ohne Security-Check.
  Auch bei "DSGVO", "Datenschutz", "Cookie", "sicher", "API-Key", "Passwort",
  "Formular absichern" oder "was muss ich beim Datenschutz beachten".
---

# Security + DSGVO — Webmoderno Standard

Kein Projekt von Webmoderno geht ohne Datenschutz und Sicherheit online.
Fehler hier kosten den Kunden Geld — und Webmoderno die Reputation.

## Die 5 Pflicht-Maßnahmen (jedes Projekt)

### 1. HTTPS / SSL
```
Vercel:   Automatisch aktiv — kein Handlungsbedarf
IONOS:    Im Hosting-Panel: SSL-Zertifikat aktivieren (kostenlos)
Netlify:  Automatisch aktiv

Prüfen: https://www.ssllabs.com/ssltest/
Ziel:   Grade A

Pflicht-Redirect: HTTP → HTTPS (immer)
// In next.config.ts automatisch bei Vercel
```

### 2. Cookie-Banner

Jede Website die Tracking oder externe Dienste nutzt braucht einen
Cookie-Banner. Das ist gesetzlich vorgeschrieben.

**Empfohlenes Tool: Consentmanager.net**
- Kostenlos bis zu einer gewissen Besucherzahl
- Deutschsprachig, DSGVO-zertifiziert
- Einfache Integration

```html
<!-- Consentmanager Integration -->
<!-- Wird im <head> eingebunden — Code kommt vom Consentmanager-Dashboard -->
<script id="cmp-script" 
  src="https://cdn.consentmanager.net/delivery/autoblocking/[ID].js"
  data-cmp-ab="1">
</script>
```

**Wichtige Regeln für den Cookie-Banner:**
```
✅ "Alle ablehnen" genauso groß wie "Alle akzeptieren"
✅ Kein vorausgewählter Haken bei optionalen Cookies
✅ Widerruf jederzeit möglich (Link im Footer: "Cookie-Einstellungen")
✅ Google Analytics nur laden NACH Einwilligung
✅ Google Fonts: self-hosted (nicht von Google-Servern laden!)
```

### 3. Formulare absichern

Jedes Kontaktformular braucht:

```typescript
// app/api/kontakt/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

// Validierung — prüft ob Eingaben korrekt sind
const KontaktSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  nachricht: z.string().min(10).max(2000),
  datenschutz: z.boolean().refine(val => val === true, {
    message: "Datenschutz muss akzeptiert werden"
  })
})

export async function POST(request: NextRequest) {
  const body = await request.json()
  
  // Validierung prüfen
  const result = KontaktSchema.safeParse(body)
  if (!result.success) {
    return NextResponse.json({ error: 'Ungültige Eingabe' }, { status: 400 })
  }
  
  // E-Mail senden (mit Resend)
  // await resend.emails.send({...})
  
  return NextResponse.json({ success: true })
}
```

**Formular-Frontend:**
```html
<!-- DSGVO-Checkbox ist PFLICHT bei jedem Formular -->
<div class="flex items-start gap-3">
  <input type="checkbox" id="datenschutz" name="datenschutz" required
         class="mt-1 w-4 h-4 border-gray-300" />
  <label for="datenschutz" class="text-sm text-gray-500">
    Ich habe die 
    <a href="/datenschutz" class="underline hover:text-gray-900">
      Datenschutzerklärung
    </a> 
    gelesen und akzeptiere diese. *
  </label>
</div>
```

### 4. API-Keys sicher speichern

```bash
# .env.local — NUR lokal, NIE ins Git-Repository!
RESEND_API_KEY=re_xxxxx
DATABASE_URL=postgresql://...
STRIPE_SECRET_KEY=sk_live_...

# .gitignore — diese Zeile MUSS drin sein:
.env.local
.env
```

```typescript
// In Next.js — Server-side (sicher):
const apiKey = process.env.RESEND_API_KEY  // ✅ Nur auf dem Server

// Client-side (unsicher — NIEMALS für secrets):
const publicKey = process.env.NEXT_PUBLIC_MAPS_KEY  // ⚠️ Wird im Browser sichtbar
// NEXT_PUBLIC_ nur für unkritische Werte (z.B. Google Maps API Key)
// NIEMALS für Stripe Secret Key, Datenbankpasswörter etc.
```

### 5. Google Fonts — DSGVO-konform

Google Fonts direkt von Google laden ist ein DSGVO-Verstoß.
In Next.js ist das automatisch gelöst:

```typescript
// ✅ RICHTIG — next/font lädt Schrift beim Build, kein Google-Kontakt
import { Inter, Playfair_Display } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap'
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  display: 'swap'
})

// ❌ FALSCH — sendet IP-Adresse an Google
// @import url('https://fonts.googleapis.com/...')
```

---

## Security Headers (Next.js)

```typescript
// next.config.ts
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Verhindert Clickjacking
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          // Verhindert MIME-Type Sniffing
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          // HTTPS erzwingen
          { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains' },
          // Referrer kontrollieren
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ]
      }
    ]
  }
}
```

**Check nach Launch:** securityheaders.com → URL eingeben → Ziel: Grade A oder B

---

## DSGVO-Checkliste vor Launch

```
[ ] SSL/HTTPS aktiv
[ ] Google Fonts self-hosted (next/font — nicht von Google geladen)
[ ] Cookie-Banner eingebaut (Consentmanager oder ähnlich)
[ ] "Ablehnen"-Button genauso prominent wie "Akzeptieren"
[ ] Google Analytics nur nach Einwilligung
[ ] Alle Formulare: DSGVO-Checkbox + Datenschutz-Link
[ ] API-Keys in .env.local (nicht im Code, nicht in Git)
[ ] .env.local in .gitignore
[ ] Security Headers gesetzt
[ ] Datenschutzerklärung nennt alle externen Dienste
[ ] Impressum vorhanden und erreichbar
[ ] Cookie-Einstellungen im Footer verlinkbar
```

---

## Was du dem Kunden übergibst

Nach dem Launch bekommt der Kunde eine kurze Erklärung:

```
"Folgendes haben wir für Ihren Datenschutz eingerichtet:
✓ SSL-Verschlüsselung aktiv (HTTPS)
✓ Cookie-Banner nach deutschem Recht
✓ Google Analytics nur nach Einwilligung
✓ Kontaktformular DSGVO-konform mit Datenschutz-Checkbox

Was Sie noch tun müssen:
→ Datenschutzerklärung aktuell halten (bei neuen Diensten anpassen)
→ Bei Fragen zum Datenschutz: Anwalt oder Datenschutzbeauftragten konsultieren"
```

---

## Verknüpfte Skills

- `rechtliches-web` — Impressum, Datenschutzerklärung, AGB
- `technical-seo` — HTTPS ist SEO-Ranking-Faktor
- `mobile-responsive` — Formulare auf Mobile testen
