# Architektur — Backend

## Meta

| Feld | Wert |
|------|------|
| **Projekt** | Mission Nights |
| **Stand** | 2026-04-01 |
| **Status** | Nicht vorhanden — geplant |

---

## 1. Übersicht

> **Aktuell kein Backend vorhanden.** Die Landing Page ist rein statisch (SSG via Next.js). Alle Inhalte sind im Code gepflegt. Keine Datenbank, keine Authentifizierung, keine Server-seitige Logik.

Dieses Dokument beschreibt die **geplante Backend-Architektur** für zukünftige Features (z.B. Newsletter-Anmeldung, Mitglieder-Bereich, Event-CMS).

**Geplanter Stack:** Supabase (PostgreSQL, Auth, Storage, Edge Functions)

---

## 2. Geplante Features mit Backend-Bedarf

| Feature | Beschreibung | Priorität |
|---------|-------------|-----------|
| Newsletter / Waitlist | E-Mail-Adressen sammeln, Bestätigung senden | Should-Have |
| Event-CMS | Events ohne Code-Änderung verwalten | Should-Have |
| Mitglieder-Bereich | Login, Community-Features | Nice-to-Have |

---

## 3. Geplantes Datenbank-Schema (Entwurf)

### Tabellen (geplant)

| Tabelle | Beschreibung | RLS |
|---------|-------------|-----|
| `events` | Event-Daten (Datum, Ort, Thema, Speaker) | ✅ |
| `subscribers` | Newsletter-Anmeldungen | ✅ |
| `profiles` | Nutzer-Profile (falls Mitglieder-Bereich) | ✅ |

### Spalten-Konventionen

- `id` — UUID, Primary Key, `gen_random_uuid()`
- `created_at` — `timestamptz`, Default `now()`
- `updated_at` — `timestamptz`, via Trigger
- `user_id` — UUID, FK zu `auth.users` (wo relevant)

---

## 4. Authentifizierung (geplant)

- **Provider:** Magic Link (E-Mail) für Organizer-Zugang
- **Session-Handling:** Supabase SSR (`@supabase/ssr`)
- **Middleware:** `middleware.ts` für Route-Protection (Admin-Bereich)
- **RLS:** Immer aktiv — keine Ausnahmen

---

## 5. Edge Functions (geplant)

| Funktion | Beschreibung | Auth |
|----------|-------------|------|
| `send-confirmation` | Bestätigungs-E-Mail nach Newsletter-Anmeldung | ❌ |
| `notify-event` | Event-Reminder an Subscriber | ✅ (Admin) |

---

## 6. API-Konventionen (für spätere Implementierung)

- Server Components nutzen `createServerClient()` aus `@supabase/ssr`
- Client Components nutzen `createBrowserClient()` aus `@supabase/ssr`
- `SUPABASE_SERVICE_ROLE_KEY` **nie** im Frontend / nie mit `NEXT_PUBLIC_` Prefix
- Alle Queries typsicher via generierte Types (`supabase gen types typescript`)

---

## 7. Migrationen (wenn Backend eingerichtet)

```bash
# Neue Migration erstellen
npx supabase migration new [NAME]

# Migrationen auf Remote anwenden
npx supabase db push

# Types generieren
npx supabase gen types typescript --linked > lib/database.ts
```

---

## 8. Externe APIs / Services

| Service | Zweck | Status |
|---------|-------|--------|
| Eventbrite | Ticket-Verkauf (extern verwaltet) | ✅ Aktiv |
| Resend / Mailgun | Transaktions-E-Mails | ❌ Noch nicht eingerichtet |
