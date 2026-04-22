import Image from 'next/image'
import { CURRENT_EVENT } from '@/lib/event-config'

export default function VisionDinner() {
  return (
    <section className="vision-dinner">
      <div className="vd-image-full">
        <Image
          src="https://assets.mission-nights.de/kunden/mission-nights/images/mission-nightsvisiondinner.webp"
          alt="Mission Nights Dress to Close"
          fill
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center center' }}
          priority={false}
        />
        <div className="vd-overlay" />
        <div className="vd-content-wrap">
          <div className="container">
            <div className="vd-content reveal">
              <span className="vd-eyebrow">Nächstes Event</span>
              <h2 className="vd-title">{CURRENT_EVENT.name}</h2>
              <p className="vd-desc">
                Ein exklusiver Abend, an dem Stil auf Substanz trifft.
                Netzwerken auf einem anderen Level — mit Menschen, die es ernst meinen.
                Mit Special Guest Jörg Messerschmidt.
              </p>
              <div className="vd-tags">
                <span>Exklusiv</span>
                <span>Business</span>
                <span>Limitiert</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
