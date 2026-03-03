import Image from 'next/image'

const images = [
  {
    src: 'https://assets.mission-nights.de/kunden/mission-nights/images/mission-nights2.webp',
    alt: 'Mission Nights Event',
    objectPosition: 'center center',
  },
  {
    src: 'https://assets.mission-nights.de/kunden/mission-nights/images/mission-nights3.webp',
    alt: 'Networking',
    objectPosition: 'center top',
  },
  {
    src: 'https://assets.mission-nights.de/kunden/mission-nights/images/mission-nights4.webp',
    alt: 'Abendatmosphäre',
    objectPosition: 'center top',
  },
  {
    src: 'https://assets.mission-nights.de/kunden/mission-nights/images/mission-nights5.webp',
    alt: 'Talk & Inspiration',
    objectPosition: 'center top',
  },
]

export default function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <div className="gallery-header reveal">
          <span className="label">Eindrücke</span>
          <h2>
            Atmosphäre,
            <br />
            die inspiriert.
          </h2>
        </div>

        <div className="gallery-grid">
          {images.map((img, i) => (
            <div key={img.src} className={`g-item reveal${i > 0 ? ` d${i}` : ''}`}>
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                style={{ objectFit: 'cover', objectPosition: img.objectPosition }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
