import Image from 'next/image'

export default function VisionDinner() {
  return (
    <section className="vision-dinner">
      <div className="vd-image-full">
        <Image
          src="https://assets.mission-nights.de/kunden/mission-nights/images/mission-nightsvisiondinner.webp"
          alt="Vision Dinner – Mission Nights Special Event"
          fill
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center center' }}
          priority={false}
        />
        <div className="vd-overlay" />
        <div className="vd-content-wrap">
          <div className="container">
            <div className="vd-content reveal">
              <span className="vd-eyebrow">Special Event</span>
              <h2 className="vd-title">Vision Dinner</h2>
              <p className="vd-desc">
                Ein exklusives Dinner-Format, das kulinarische Spitzenküche mit
                tiefsinnigen Gesprächen verbindet. In kleiner, ausgewählter Runde
                trifft Gastronomie auf Unternehmertum — ein Abend voller
                Inspiration, Verbindung und Genuss.
              </p>
              <div className="vd-tags">
                <span>Exklusiv</span>
                <span>Culinaire</span>
                <span>Limitiert</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
