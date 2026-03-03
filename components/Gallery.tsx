import Image from 'next/image'

// A7407693.jpg (Koch) moved to VisionDinner section
const images = [
  {
    src: 'https://assets.mission-nights.de/A7R04923.jpg',
    alt: 'Mission Nights Event',
    objectPosition: 'center center',
  },
  {
    src: 'https://assets.mission-nights.de/IMG_4053.jpeg',
    alt: 'Networking',
    objectPosition: 'center top',
  },
  {
    src: 'https://assets.mission-nights.de/IMG_3993.jpeg',
    alt: 'Abendatmosphäre',
    objectPosition: 'center top',
  },
  {
    src: 'https://assets.mission-nights.de/IMG_4156.jpeg',
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
