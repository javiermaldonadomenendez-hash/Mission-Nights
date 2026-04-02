const faqItems = [
  {
    frage: 'Was ist Mission Nights?',
    antwort:
      'Mission Nights ist eine exklusive Veranstaltungsreihe für Unternehmer, Gründer und ambitionierte Menschen in NRW. In kleinen, kuratierten Runden entstehen echte Verbindungen und tiefsinnige Gespräche — jenseits von oberflächlichem Small Talk und Massenveranstaltungen.',
  },
  {
    frage: 'Für wen sind die Mission Nights Events geeignet?',
    antwort:
      'Mission Nights richtet sich an Unternehmer, Gründer und Selbstständige, die mehr als klassisches Networking suchen. Menschen, die Visionen teilen, an ihrer Weiterentwicklung arbeiten und echte, langfristige Verbindungen aufbauen wollen.',
  },
  {
    frage: 'Wie kann ich einen Platz bei Mission Nights sichern?',
    antwort:
      'Tickets für Mission Nights sind über Eventbrite erhältlich. Die Plätze sind limitiert und werden kuratiert — wer dabei sein möchte, sollte sich frühzeitig anmelden. Den aktuellen Eventbrite-Link findest du auf der Website unter "Platz sichern".',
  },
  {
    frage: 'Wo finden die Mission Nights Events statt?',
    antwort:
      'Mission Nights finden in ausgewählten Locations in NRW statt. Der nächste Termin am 21. April 2026 findet im Restaurant Thema, Ruhrstraße 26, Mülheim an der Ruhr statt, ab 19:30 Uhr.',
  },
  {
    frage: 'Was ist das Vision Dinner bei Mission Nights?',
    antwort:
      'Das Vision Dinner ist ein exklusives Dinner-Format, das kulinarische Spitzenküche mit tiefsinnigen Gesprächen verbindet. In kleiner, ausgewählter Runde trifft Gastronomie auf Unternehmertum — ein Abend voller Inspiration, Verbindung und Genuss.',
  },
  {
    frage: 'Wie oft finden Mission Nights Events statt?',
    antwort:
      'Mission Nights veranstaltet regelmäßig exklusive Events in NRW. Die Frequenz variiert je nach Format — klassische Mission Nights sowie das Vision Dinner-Format finden mehrmals jährlich statt. Aktuelle Termine und Anmeldungen sind auf der Website verfügbar.',
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.frage,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.antwort,
    },
  })),
}

export function FAQSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export { faqItems }
