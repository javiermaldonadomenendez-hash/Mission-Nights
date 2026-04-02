# Architektur — Hosting & Deployment

## Meta

| Feld | Wert |
|------|------|
| **Projekt** | Mission Nights |
| **Stand** | 2026-04-01 |
| **Status** | In Betrieb |

---

## 1. Übersicht

| Komponente | Service | Anmerkung |
|-----------|---------|-----------|
| Frontend & Hosting | Vercel | Automatisches Deployment aus Git |
| Domain | mission-nights.de | Produktiv-Domain |
| Assets-CDN | assets.mission-nights.de | Bilder / Event-Fotos |
| Tickets | Eventbrite | Externer Dienst (nicht selbst gehostet) |
| Backend / DB | — | Aktuell nicht vorhanden |
| E-Mail | — | Aktuell nicht vorhanden |
| Monitoring | — | Noch nicht konfiguriert |

## 2. Vercel

### Projekt-Konfiguration

| Einstellung | Wert |
|------------|------|
| **Framework Preset** | Next.js |
| **Root Directory** | `./` |
| **Build Command** | `next build` |
| **Output Directory** | `.next` |
| **Node.js Version** | 22.x |
| **Region** | `fra1` (Frankfurt) empfohlen |

### Deployments

| Branch | Environment | URL |
|--------|------------|-----|
| `main` | Production | https://mission-nights.de |
| `feat/*` | Preview | Auto-generiert |

### Environment Variables

Aktuell keine serverseitigen Secrets erforderlich (rein statische Seite).

```
# Zukünftig bei Backend-Integration:
# NEXT_PUBLIC_SUPABASE_URL=
# NEXT_PUBLIC_SUPABASE_ANON_KEY=
# SUPABASE_SERVICE_ROLE_KEY=
```

## 3. Assets-CDN

| Einstellung | Wert |
|------------|------|
| **Hostname** | `assets.mission-nights.de` |
| **Protokoll** | `https` |
| **Konfiguriert in** | `next.config.ts` (`remotePatterns`) |
| **Optimierung** | `unoptimized: true` — CDN übernimmt Bildoptimierung |

```typescript
// next.config.ts
remotePatterns: [
  {
    protocol: 'https',
    hostname: 'assets.mission-nights.de',
    pathname: '/**',
  },
],
```

## 4. Domain & DNS

| Typ | Host | Wert | TTL |
|-----|------|------|-----|
| A / CNAME | @ | Vercel DNS | 3600 |
| CNAME | www | cname.vercel-dns.com | 3600 |

### SSL

- Automatisch via Vercel (Let's Encrypt)
- HTTPS erzwungen

## 5. Backend / Datenbank

**Aktuell kein Backend vorhanden.** Die Seite ist rein statisch (SSG via Next.js). Keine Datenbank, keine Auth, keine Edge Functions.

Vorbereitung für spätere Features (z.B. Newsletter, Mitglieder-Bereich):
- Supabase (PostgreSQL, Auth, Storage, Edge Functions) — geplant
- Region: `eu-central-1` (Frankfurt) — DSGVO-konform

## 6. E-Mail-Service

Aktuell kein E-Mail-Service konfiguriert. Kontakt läuft über:
- **E-Mail:** info@mission-nights.de (direkt)
- **Telefon:** +49 151 55659712

Bei Bedarf: Resend oder Mailgun mit Domain `mission-nights.de`.

## 7. Monitoring & Logging

| Tool | Zweck | Status |
|------|-------|--------|
| Vercel Analytics | Web Vitals, Traffic | [ ] Noch nicht aktiviert |
| Vercel Speed Insights | Performance | [ ] Noch nicht aktiviert |
| Sentry | Error Tracking | [ ] Nicht eingerichtet |

## 8. CI/CD Pipeline

```
Push → Git → Vercel Auto-Deploy
              ├── Type Check
              ├── Build (next build)
              └── Deploy (Preview / Production)
```

### Pre-Deploy Checks (manuell)

- [ ] `npm run lint` — Keine Errors
- [ ] `npm run build` — Build erfolgreich
- [ ] Browser-Test auf Mobile + Desktop

## 9. Kosten (geschätzt)

| Service | Monatlich | Anmerkung |
|---------|----------|-----------|
| Vercel | 0 € (Hobby) | Kostenfrei für kleine Projekte |
| assets.mission-nights.de | [je nach Hosting] | CDN-Kosten abhängig vom Provider |
| Domain mission-nights.de | ~1–2 € | Jährlich |
| Eventbrite | — | Provision pro Ticket-Verkauf |
| **Gesamt** | ~2 € | Sehr niedrige laufende Kosten |
