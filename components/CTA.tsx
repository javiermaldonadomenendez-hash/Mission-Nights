import { CURRENT_EVENT } from '@/lib/event-config'

export default function CTA() {
  return (
    <section className="cta-section">
      <div className="container">
        <span className="label reveal">Werde Teil der Bewegung</span>
        <h2 className="reveal">
          Werde Teil der
          <em>Mission Nights.</em>
        </h2>
        <p className="reveal d1">
          Limitierte Plätze. Exklusiver Kreis.
          <br />
          Der nächste Abend gehört dir.
        </p>
        <a
          href={CURRENT_EVENT.eventbriteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-dark btn-lg reveal d2"
        >
          Platz sichern
        </a>
        <span className="cta-note reveal d3">
          Nächste Mission Night · {CURRENT_EVENT.date} · {CURRENT_EVENT.location}
        </span>
      </div>
    </section>
  )
}
