'use client'

import Image from 'next/image'
import { InfiniteSlider } from '@/components/ui/infinite-slider-horizontal'

const BASE = 'https://assets.mission-nights.de/kunden/mission-nights/images'

const images = [
  { src: `${BASE}/mnvision1.webp`,        alt: 'Mission Nights Vision Dinner' },
  { src: `${BASE}/mnvision2.webp`,        alt: 'Mission Nights Atmosphäre' },
  { src: `${BASE}/mnvision3.webp`,        alt: 'Mission Nights Networking' },
  { src: `${BASE}/mnvision4.webp`,        alt: 'Mission Nights Gespräche' },
  { src: `${BASE}/mnvision5.webp`,        alt: 'Mission Nights Community' },
  { src: `${BASE}/mnvision6.webp`,        alt: 'Mission Nights Inspiration' },
  { src: `${BASE}/mnvision7.webp`,        alt: 'Mission Nights Abend' },
  { src: `${BASE}/mnvision9.webp`,        alt: 'Mission Nights Menschen' },
  { src: `${BASE}/mnvision10.webp`,       alt: 'Mission Nights Verbindungen' },
  { src: `${BASE}/mission-nights2.webp`,  alt: 'Mission Nights Event' },
  { src: `${BASE}/mission-nights3.webp`,  alt: 'Mission Nights Networking' },
  { src: `${BASE}/mission-nights4.webp`,  alt: 'Mission Nights Abendatmosphäre' },
  { src: `${BASE}/mission-nights5.webp`,  alt: 'Mission Nights Talk & Inspiration' },
]

const firstRow = images.slice(0, 7)
const secondRow = images.slice(6)

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
      </div>

      <div className="gallery-slider-wrap">
        <InfiniteSlider gap={12} duration={35} durationOnHover={80}>
          {firstRow.map((img) => (
            <div key={img.src} className="gallery-slide-item">
              <Image
                src={img.src}
                alt={img.alt}
                width={480}
                height={320}
                className="gallery-slide-img"
              />
            </div>
          ))}
        </InfiniteSlider>

        <InfiniteSlider gap={12} duration={40} durationOnHover={80} reverse>
          {secondRow.map((img) => (
            <div key={img.src} className="gallery-slide-item">
              <Image
                src={img.src}
                alt={img.alt}
                width={480}
                height={320}
                className="gallery-slide-img"
              />
            </div>
          ))}
        </InfiniteSlider>
      </div>
    </section>
  )
}
