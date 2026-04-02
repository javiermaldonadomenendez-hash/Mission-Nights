# CLAUDE.md — Projektanweisungen

## Projekt

- **Name:** Mission Nights
- **Kunde:** Javier Tomas Maldonado Menéndez
- **Stack:** Next.js 15 · React 19 · Tailwind CSS v3 · Vercel
- **Repo:** [REPO-URL]
- **Live:** https://mission-nights.de
- **Staging:** [STAGING-URL]

## Workflow-Regeln

1. Für nicht-triviale Aufgaben (3+ Schritte): Erst planen, Plan in `docs/tasks/` dokumentieren.
2. Bei Bugfixes oder Korrekturen: Muster in `docs/decisions/` festhalten.
3. Aufgabe erst als erledigt markieren, wenn Korrektheit verifiziert ist.
4. Eleganz über Hacks — bei komplexen Änderungen prüfen, ob ein sauberer Ansatz existiert.
5. Bei Bug-Reports: Einfach fixen, keine Rückfragen.
6. Minimaler Code-Impact — nur das Nötige ändern, keine neuen Bugs einführen.

## Projektstruktur

```
src/
  app/              # Next.js 15 App Router
  components/       # React-Komponenten
    ui/             # Basis-UI-Komponenten
    features/       # Feature-spezifische Komponenten
    layout/         # Layout-Komponenten (Header, Footer, Nav)
  lib/              # Utilities, Helpers, Configs
    supabase/       # client.ts · server.ts · middleware.ts
  hooks/            # Custom React Hooks
  types/            # TypeScript Types
    database.ts     # Supabase-generierte Types
public/             # Statische Assets
supabase/
  migrations/       # SQL-Migrationen
  functions/        # Edge Functions (Deno 2)
  seed.sql          # Seed-Daten
docs/               # Projektdokumentation
```

## Konventionen

- **Sprache:** Code & Commits auf Englisch, Docs auf Deutsch
- **Commits:** Conventional Commits (`feat:`, `fix:`, `docs:`, `refactor:`, `chore:`)
- **Branches:** `main` → Production, `staging` → Preview, `feat/[name]` → Features
- **Components:** Funktionale Komponenten mit TypeScript, Default Exports
- **Styling:** Tailwind CSS v4, keine inline styles, keine CSS-in-JS
- **State:** React Server Components wo möglich, Client Components nur wenn nötig
- **Forms:** `useActionState` (React 19) statt `useFormState`
- **Datenbank:** Supabase Client via `@supabase/ssr`, Row Level Security immer aktiv
- **Fetch:** In Next.js 15 standardmäßig nicht gecacht — `cache: 'force-cache'` explizit setzen

## Next.js 15 — Wichtige Änderungen

```typescript
// Dynamic APIs sind jetzt async — IMMER awaiten
const cookieStore = await cookies()
const headersList = await headers()

// Page/Layout Props sind Promises
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
}
```

## Umgebungsvariablen

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
```

## Wichtige Befehle

```bash
npm run dev          # Lokaler Dev-Server (mit Turbopack)
npm run build        # Production Build
npm run lint         # ESLint
npx supabase start   # Lokale Supabase-Instanz starten
npx supabase db push # Migrationen auf Remote anwenden
npx supabase gen types typescript --linked > src/types/database.ts
```

## MCP (Model Context Protocol)

Konfiguriert in `.mcp.json` im Projekt-Root. Ermöglicht Claude Code direkten Datenbankzugriff.

```json
{
  "mcpServers": {
    "supabase": {
      "command": "npx",
      "args": ["-y", "@supabase/mcp-server-supabase@latest",
               "--project-ref", "[SUPABASE_PROJECT_REF]"]
    }
  }
}
```
