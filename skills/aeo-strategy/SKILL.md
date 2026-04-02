---
name: aeo-strategy
description: >
  Optimiert Inhalte für direkte Antworten in Suchmaschinen: Featured Snippets,
  People Also Ask, Voice Search und Position 0. IMMER verwenden bei jedem Projekt
  — läuft automatisch mit technical-seo und geo-strategy mit. Auch bei "FAQ",
  "Fragen auf der Website", "bei Google direkt beantwortet werden", "Position 0"
  oder "Sprachsuche". Gibt fertige FAQ-Templates und Schema-Code ohne Vorwissen.
---

# AEO Strategy — Webmoderno Standard

AEO (Answer Engine Optimization) sorgt dafür dass Google die Inhalte
direkt als Antwort anzeigt — noch vor den normalen Suchergebnissen.
Das nennt sich "Position 0" oder "Featured Snippet".

## Was ist AEO? (Einfach erklärt)

Wenn jemand googelt: *"Was kostet eine Website?"* — zeigt Google manchmal
direkt eine Antwort oben, ohne dass der Nutzer klicken muss. Das ist
ein Featured Snippet. AEO sorgt dafür dass diese Antwort von der
Kunden-Website kommt.

```
Normale Suche:      [Anzeigen] → [Ergebnis 1] → [Ergebnis 2] → ...
Mit Featured Snippet: [ANTWORT-BOX mit Text von deiner Seite] → [Ergebnis 1] → ...
```

**Warum das wichtig ist:**
- Mehr Sichtbarkeit als Platz 1
- Vertrauen — Google zeigt die Seite als "die beste Antwort"
- Voice Search liest Featured Snippets vor (Alexa, Siri, Google Home)

---

## Was bei jedem Projekt automatisch eingebaut wird

### 1. FAQ-Bereich (Pflicht auf jeder Seite)

Jede Landing Page und Business-Website bekommt einen FAQ-Bereich.
Die Fragen kommen vom Kunden — typische Fragen die er immer wieder
gestellt bekommt.

**FAQ-Struktur:**
```html
<section class="faq py-24 md:py-32">
  <div class="max-w-3xl mx-auto px-5 md:px-8">
    
    <span class="text-xs uppercase tracking-widest text-gray-400 mb-4 block">
      FAQ
    </span>
    <h2 class="text-3xl md:text-4xl font-light text-gray-900 
               tracking-tight mb-16">
      Häufige Fragen.
    </h2>

    <div class="space-y-0 divide-y divide-gray-100">
      {faqItems.map((item, i) => (
        <details key={i} class="group py-6">
          <summary class="flex justify-between items-center cursor-pointer 
                          list-none text-gray-900 font-medium">
            {item.frage}
            <span class="ml-4 text-gray-400 group-open:rotate-45 
                         transition-transform duration-200 text-xl">+</span>
          </summary>
          <p class="mt-4 text-gray-500 leading-relaxed text-sm">
            {item.antwort}
          </p>
        </details>
      ))}
    </div>
    
  </div>
</section>
```

### 2. FAQ Schema (JSON-LD)

Dieser Code sagt Google: *"Hier sind Fragen und Antworten — zeig sie
als Featured Snippet."* Wird im `<head>` der Seite eingefügt.

```typescript
// components/FaqSchema.tsx
export function FaqSchema({ items }: { items: { frage: string; antwort: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map(item => ({
      "@type": "Question",
      "name": item.frage,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.antwort
      }
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// Verwendung in page.tsx:
<FaqSchema items={[
  {
    frage: "Was kostet eine professionelle Website?",
    antwort: "Eine Landing Page bei Webmoderno kostet ab 990 Euro. Business-Websites mit mehreren Unterseiten beginnen ab 2.500 Euro. Der genaue Preis hängt vom Umfang und den Funktionen ab."
  },
  {
    frage: "Wie lange dauert die Erstellung einer Website?",
    antwort: "Eine Landing Page ist in 14 Werktagen fertig. Eine komplette Business-Website dauert 4–8 Wochen."
  }
]} />
```

---

## FAQ-Fragen nach Kundentyp

### Webdesign-Agentur (Webmoderno selbst)
```
- Was kostet eine professionelle Website?
- Wie lange dauert die Erstellung einer Website?
- Was brauche ich um mit dem Projekt zu starten?
- Kann ich die Website danach selbst bearbeiten?
- Ist die Website auch auf dem Handy optimiert?
- Was ist der Unterschied zwischen einer Landing Page und einer Website?
- Bieten Sie auch SEO an?
```

### Lokales Unternehmen / Dienstleister
```
- Was kostet [Leistung]?
- Wie lange dauert [Leistung]?
- Wo sind Sie tätig? (Wichtig für lokale Suche)
- Wie kann ich einen Termin buchen?
- Was unterscheidet Sie von der Konkurrenz?
- Haben Sie Referenzen / Erfahrungen?
```

### Coach / Berater
```
- Für wen ist das Angebot geeignet?
- Was sind die Voraussetzungen?
- Wie läuft eine Zusammenarbeit ab?
- Was kostet das Coaching / die Beratung?
- Wie schnell sehe ich Ergebnisse?
- Gibt es eine Geld-zurück-Garantie?
```

---

## Antwort-Regeln für Featured Snippets

Damit Google die Antwort als Featured Snippet anzeigt:

```
Länge:    40–60 Wörter pro Antwort (nicht mehr, nicht weniger)
Format:   Direkte Antwort im ersten Satz
Stil:     Einfache, klare Sprache — kein Fachjargon
Keyword:  Das Wort aus der Frage in der Antwort wiederholen

Beispiel:
Frage:   "Was kostet eine Landing Page?"
❌ "Das kommt ganz auf die Anforderungen an und hängt von
   verschiedenen Faktoren ab die wir gemeinsam besprechen."
✅ "Eine Landing Page kostet bei Webmoderno ab 990 Euro.
   Im Preis enthalten sind Design, Entwicklung, mobile
   Optimierung und SEO-Setup. Fertig in 14 Werktagen."
```

---

## Voice Search (Sprachsuche)

Wenn jemand Siri, Alexa oder Google fragt, liest die KI
den Featured Snippet laut vor. Deshalb:

```
✅ Antworten in natürlicher Sprache schreiben
✅ Fragen ausschreiben wie Menschen sie stellen
   ("Wie viel kostet..." nicht "Kosten Landing Page")
✅ Kurze, vollständige Sätze — keine Stichpunkte als Antwort
✅ Lokale Infos einbauen: "in Essen", "in NRW", "in Deutschland"
```

---

## People Also Ask (PAA) nutzen

People Also Ask sind die aufklappbaren Fragen bei Google die zeigen
was andere Leute noch fragen. Das sind perfekte FAQ-Kandidaten.

**So findet man die richtigen Fragen:**
```
1. Haupt-Keyword des Kunden bei Google eingeben
   z.B. "Webdesign Essen"
2. Die "Nutzer fragen auch"-Box anschauen
3. Diese Fragen als FAQ auf der Seite einbauen
4. Mit dem FAQPage Schema auszeichnen

Tools: AlsoAsked.com (kostenlos, zeigt alle verwandten Fragen)
```

---

## AEO Checkliste (bei jedem Projekt)

```
[ ] FAQ-Bereich auf jeder Hauptseite
[ ] Mindestens 5 echte Fragen (die Kunden wirklich stellen)
[ ] Antworten 40–60 Wörter, direkte Antwort im ersten Satz
[ ] FAQPage Schema (JSON-LD) eingebaut
[ ] Fragen in natürlicher Sprache formuliert
[ ] Lokale Fragen eingebaut ("in [Stadt]", "in [Region]")
[ ] People Also Ask für Haupt-Keywords recherchiert
[ ] Antworten ohne Fachjargon — verständlich für jeden
```

---

## Verknüpfte Skills

- `technical-seo` — Basis muss stimmen bevor AEO wirkt
- `geo-strategy` — AEO und GEO ergänzen sich direkt
- `landing-page` — FAQ ist Pflichtbestandteil jeder Landing Page
- `business-website` — FAQ auf jeder Unterseite
