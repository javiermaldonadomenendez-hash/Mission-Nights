export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg">
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
        <div className="hero-rating reveal d1">
          <span className="hero-stars">★★★★★</span>
          <span className="hero-rating-text">5,0 / 5,0 Sterne bei Google</span>
        </div>
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
