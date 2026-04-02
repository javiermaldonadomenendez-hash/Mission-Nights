import { Component as EtheralShadow } from '@/components/ui/etheral-shadow'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <EtheralShadow
          color="rgba(255, 255, 255, 0.13)"
          animation={{ scale: 80, speed: 60 }}
          noise={{ opacity: 0.4, scale: 1.2 }}
          sizing="fill"
          style={{ position: 'absolute', inset: 0 }}
        />
        <div className="hero-cloud c1" />
        <div className="hero-cloud c2" />
        <div className="hero-cloud c3" />
        <div className="hero-cloud c4" />
      </div>
      <div className="hero-inner reveal">
<h1 className="hero-title">
          Mission
          <br />
          Nights
        </h1>
        <p className="hero-subtitle">Wo Vision auf Menschen trifft.</p>
        <div className="hero-actions">
          <a href="#event" className="btn btn-light btn-md">
            Zur nächsten Mission Night
          </a>
          <a href="#about" className="btn btn-ghost btn-md">
            Mehr erfahren
          </a>
        </div>
      </div>

    </section>
  )
}
