import Image from 'next/image'

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-text">
            <span className="label reveal">Über Mission Nights</span>
            <h2 className="reveal">
              Mehr als ein Event.
              <br />
              Eine Bewegung.
            </h2>
            <p className="reveal d1">
              Mission Nights ist entstanden aus dem Wunsch, ambitionierten
              Menschen einen Raum zu geben, der selten existiert: echte
              Gespräche, echte Verbindungen, echter Austausch — in einer
              Atmosphäre, die inspiriert.
            </p>
            <p className="reveal d2">
              Kein Massenangebot. Kein oberflächliches Networking. Mission
              Nights bringt Unternehmer, Gründer und Macher zusammen, die an
              ihren Visionen arbeiten — und daran glauben, dass die richtigen
              Menschen alles verändern können.
            </p>
            <a href="#event" className="btn btn-dark btn-md reveal d3">
              Nächstes Event entdecken
            </a>

            <div
              className="stats-row"
              style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}
            >
              <div className="stat reveal d1">
                <span className="stat-num">40+</span>
                <span className="stat-lbl">Gäste pro Abend</span>
              </div>
              <div className="stat reveal d2">
                <span className="stat-num">12×</span>
                <span className="stat-lbl">Events im Jahr</span>
              </div>
            </div>
          </div>

          <div className="about-image reveal d2">
            <Image
              src="https://assets.mission-nights.de/kunden/mission-nights/images/mission-nights1.webp"
              alt="Mission Nights Atmosphäre"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover', objectPosition: 'center top' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
