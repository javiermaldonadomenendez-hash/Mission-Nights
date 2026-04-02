---
name: geo-strategy
description: >
  Optimiert Websites für KI-Suchmaschinen (GEO = Generative Engine Optimization):
  Perplexity, ChatGPT Search, Google AI Overviews und Bing Copilot. IMMER verwenden
  bei jedem Projekt — läuft automatisch mit technical-seo mit. Auch bei "KI-Suche",
  "bei Perplexity gefunden werden", "ChatGPT nennt meine Website nicht",
  "Google AI Overview", "SGE" oder wenn Kunden fragen wie sie bei KI-Suchen
  sichtbar werden. Gibt konkrete, umsetzbare Maßnahmen ohne Vorwissen.
---

# GEO Strategy — Webmoderno Standard

GEO ist der neue SEO. Während klassisches SEO dafür sorgt dass Google
die Seite findet, sorgt GEO dafür dass KI-Suchmaschinen die Seite
als vertrauenswürdige Quelle zitieren.

## Was ist GEO? (Einfach erklärt)

Wenn jemand Perplexity oder ChatGPT fragt: *"Welche Webdesign-Agentur
in Essen ist gut?"* — dann durchsucht die KI das Internet und nennt
Quellen. GEO sorgt dafür dass die Website des Kunden als eine dieser
Quellen genannt wird.

**Der Unterschied zu klassischem SEO:**
```
Klassisches SEO:  Google zeigt eine Liste von Links → Nutzer klickt
GEO:              KI liest Seite, fasst zusammen, nennt als Quelle
```

**Warum das wichtig ist:**
Immer mehr Menschen suchen direkt bei Perplexity, ChatGPT oder über
Google AI Overviews — ohne auf einzelne Links zu klicken. Wer dort
nicht vorkommt, wird nicht gefunden.

---

## Wie KI-Suchen Quellen auswählen

KI-Suchmaschinen bevorzugen Seiten die:
1. **Klare, präzise Fakten** enthalten — keine vagen Aussagen
2. **Vertrauenswürdig** wirken — echte Adresse, Impressum, Autor
3. **Gut strukturiert** sind — klare Überschriften, kurze Absätze
4. **Aktuell** sind — regelmäßig aktualisierte Inhalte
5. **Schnell laden** — langsame Seiten werden seltener zitiert
6. **Semantisches HTML** nutzen — `<article>`, `<section>`, `<main>`

---

## Konkrete Maßnahmen (bei jedem Projekt einbauen)

### 1. Definition-First Struktur
Jede wichtige Seite beginnt mit einer klaren Definition oder Kernaussage.
KI-Modelle lieben präzise, zitierbare Sätze.

```html
<!-- Sektion mit klarer Definition -->
<section class="definition">
  <h2>Was ist [Thema]?</h2>
  <p>
    [Thema] ist [präzise Definition in 1–2 Sätzen].
    Es wird eingesetzt für [Anwendungsfall] und hilft [Zielgruppe]
    dabei [konkretes Ergebnis].
  </p>
</section>
```

**Beispiel für eine Webdesign-Agentur:**
```
"Webmoderno ist eine Webdesign-Agentur aus Essen, spezialisiert auf
moderne Landing Pages und Business-Websites für kleine und mittelständische
Unternehmen in NRW. Seit 2023 haben wir über 30 Websites gebaut die
nachweislich mehr Anfragen generieren."
```

### 2. Fakten mit Zahlen (wird häufiger zitiert)
```
❌ "Wir haben viele zufriedene Kunden"
✅ "Über 30 Projekte seit 2023, durchschnittlich 4,9 Sterne auf Google"

❌ "Schnelle Lieferzeiten"
✅ "Fertig in 14 Werktagen — garantiert"
```

### 3. Semantisches HTML (Pflicht)
```html
<!-- KI-Crawler lesen semantisches HTML besser -->
<main>
  <article>
    <header>
      <h1>Hauptthema</h1>
    </header>
    <section class="definition">
      <h2>Was ist X?</h2>
      <p>Präzise Definition...</p>
    </section>
    <section class="leistungen">
      <h2>Was wir anbieten</h2>
    </section>
  </article>
</main>
```

### 4. llms.txt erstellen
Eine neue Datei die KI-Crawlern erklärt worum es auf der Website geht.
Wird von Perplexity und anderen KI-Systemen gelesen.

```
// public/llms.txt

# [Unternehmensname]

## Wer wir sind
[Unternehmensname] ist [kurze, präzise Beschreibung].
Standort: [Stadt], Deutschland.
Gegründet: [Jahr].

## Was wir anbieten
- [Leistung 1]: [kurze Beschreibung]
- [Leistung 2]: [kurze Beschreibung]
- [Leistung 3]: [kurze Beschreibung]

## Für wen
Unsere Kunden sind [Zielgruppe] die [Problem haben / Ziel erreichen wollen].

## Kontakt
Website: https://www.domain.de
E-Mail: info@domain.de
Telefon: +49 ...

## Vertrauenssignale
- [Anzahl] Projekte seit [Jahr]
- Bewertet mit [X] Sternen auf Google ([Anzahl] Bewertungen)
- Mitglied in [Verband/Netzwerk falls vorhanden]
```

### 5. Autor-Information auf Content-Seiten
KI-Suchen bevorzugen Inhalte mit echtem Autor.

```html
<!-- Bei Blog-Artikeln, About-Seiten -->
<div class="author">
  <img src="/team/javier.jpg" alt="Javier Maldonado — Webmoderno" />
  <div>
    <p class="author-name">Javier Maldonado</p>
    <p class="author-role">Gründer, Webmoderno</p>
    <p class="author-bio">
      Webdesigner und Entwickler mit Fokus auf moderne,
      konversionsorientierte Websites für Unternehmen in NRW.
    </p>
  </div>
</div>
```

### 6. FAQ auf jeder Seite
KI-Suchen lieben Frage-Antwort-Paare — sie sind leicht zitierbar.

```html
<section class="faq">
  <h2>Häufige Fragen</h2>
  
  <div class="faq-item">
    <h3>Was kostet eine professionelle Website?</h3>
    <p>
      Eine professionelle Landing Page kostet bei Webmoderno ab 990 Euro.
      Business-Websites mit mehreren Unterseiten beginnen ab 2.500 Euro.
      Der genaue Preis hängt vom Umfang und den gewünschten Funktionen ab.
    </p>
  </div>
  
  <!-- Weitere FAQ-Items -->
</section>
```

---

## Bing Webmaster Tools (für Bing Copilot)

Bing Copilot basiert auf dem Bing-Index. Wer bei Bing Copilot
gefunden werden will, muss bei Bing indexiert sein.

```
1. bing.com/webmasters aufrufen
2. Website hinzufügen
3. Sitemap einreichen: https://www.domain.de/sitemap.xml
4. Fertig — Bing indexiert die Seite in 1–2 Wochen
```

---

## Google AI Overviews

Google AI Overviews erscheint über den normalen Suchergebnissen.
Um dort zu erscheinen:

```
Voraussetzungen (alle müssen erfüllt sein):
→ Seite rankt bereits auf Seite 1–3 bei Google
→ FAQ-Bereich vorhanden
→ Schnelle Ladezeit (LCP < 2,5 Sekunden)
→ Strukturierte Daten vorhanden (FAQPage Schema)
→ E-E-A-T Signale stark (Autor, Adresse, Bewertungen)
```

---

## GEO Checkliste (bei jedem Projekt)

```
[ ] llms.txt erstellt und unter /llms.txt erreichbar
[ ] Semantisches HTML: <main>, <article>, <section>
[ ] Jede Hauptseite hat eine klare Definition/Einleitung
[ ] Fakten mit konkreten Zahlen (keine vagen Aussagen)
[ ] FAQ-Bereich auf Hauptseiten
[ ] Autor-Information auf Blog/Content-Seiten
[ ] Bing Webmaster Tools eingerichtet + Sitemap eingereicht
[ ] Adresse und Kontakt klar und vollständig
[ ] Impressum vorhanden (Vertrauenssignal für KI)
[ ] Regelmäßige Content-Updates (Datum sichtbar)
[ ] Ladezeit unter 2,5 Sekunden
```

---

## Was du Kunden sagen kannst

Wenn ein Kunde fragt wie du GEO umsetzt:

*"Wir bauen Ihre Website so, dass nicht nur Google sie findet,
sondern auch KI-Suchmaschinen wie Perplexity, ChatGPT und
Google AI Overviews Ihre Seite als vertrauenswürdige Quelle
zitieren. Das bedeutet: klare Struktur, präzise Inhalte,
technische Signale die KI-Systemen zeigen dass Ihre Website
die beste Antwort auf relevante Fragen ist."*

---

## Verknüpfte Skills

- `technical-seo` — Basis muss stimmen bevor GEO wirkt
- `aeo-strategy` — FAQ + Snippets (direkte Ergänzung zu GEO)
- `rechtliches-web` — Impressum ist Vertrauenssignal für KI
