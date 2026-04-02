'use client'

import React from 'react'
import { FAQ as FAQTabs } from '@/components/ui/faq-tabs'
import { FAQSchema, faqItems } from './FAQSchema'

const categories = {
  allgemein: 'Allgemein',
  events: 'Events & Formate',
  teilnahme: 'Teilnahme',
}

const faqData = {
  allgemein: [
    {
      question: 'Was ist Mission Nights?',
      answer:
        'Mission Nights ist eine exklusive Veranstaltungsreihe für Unternehmer, Gründer und ambitionierte Menschen in NRW. In kleinen, kuratierten Runden entstehen echte Verbindungen und tiefsinnige Gespräche — jenseits von oberflächlichem Small Talk und Massenveranstaltungen.',
    },
    {
      question: 'Für wen sind die Mission Nights Events geeignet?',
      answer:
        'Mission Nights richtet sich an Unternehmer, Gründer und Selbstständige, die mehr als klassisches Networking suchen. Menschen, die Visionen teilen, an ihrer Weiterentwicklung arbeiten und echte, langfristige Verbindungen aufbauen wollen.',
    },
    {
      question: 'Wie oft finden Mission Nights Events statt?',
      answer:
        'Mission Nights veranstaltet regelmäßig exklusive Events in NRW. Die Frequenz variiert je nach Format — klassische Mission Nights sowie das Vision Dinner-Format finden mehrmals jährlich statt. Aktuelle Termine und Anmeldungen sind auf der Website verfügbar.',
    },
  ],
  events: [
    {
      question: 'Was ist das Vision Dinner bei Mission Nights?',
      answer:
        'Das Vision Dinner ist ein exklusives Dinner-Format, das kulinarische Spitzenküche mit tiefsinnigen Gesprächen verbindet. In kleiner, ausgewählter Runde trifft Gastronomie auf Unternehmertum — ein Abend voller Inspiration, Verbindung und Genuss.',
    },
    {
      question: 'Wo finden die Mission Nights Events statt?',
      answer:
        'Mission Nights finden in ausgewählten Locations in NRW statt. Der nächste Termin am 21. April 2026 findet im Restaurant Thema, Ruhrstraße 26, Mülheim an der Ruhr statt, ab 19:30 Uhr.',
    },
  ],
  teilnahme: [
    {
      question: 'Wie kann ich einen Platz bei Mission Nights sichern?',
      answer:
        'Tickets für Mission Nights sind über Eventbrite erhältlich. Die Plätze sind limitiert und werden kuratiert — wer dabei sein möchte, sollte sich frühzeitig anmelden. Den aktuellen Eventbrite-Link findest du auf der Website unter "Platz sichern".',
    },
  ],
}

export default function FAQ() {
  return (
    <section id="faq">
      <FAQSchema />
      <FAQTabs
        title="Häufige Fragen."
        subtitle="FAQ"
        categories={categories}
        faqData={faqData}
        className="py-[clamp(80px,11vw,144px)]"
        style={{
          '--background':         '#0a0a0a',
          '--foreground':         '#ffffff',
          '--primary':            '#ffffff',
          '--primary-foreground': '#0a0a0a',
          '--muted':              '#1a1a1a',
          '--muted-foreground':   '#a3a3a3',
          '--card':               '#111111',
          '--border':             '#2a2a2a',
        } as React.CSSProperties}
      />
    </section>
  )
}
