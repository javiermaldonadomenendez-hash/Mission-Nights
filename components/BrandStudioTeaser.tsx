export default function BrandStudioTeaser() {
  return (
    <section className="bs-teaser">
      <div className="container">
        <div className="bs-teaser-inner">
          <div className="bs-teaser-text reveal">
            <span className="label label--light">Brand Studio</span>
            <h2 className="bs-teaser-title">
              Markenauftritt mit Klarheit.<br />
              Website mit Wirkung.
            </h2>
            <p className="bs-teaser-sub">
              Mission Nights Brand Studio entwickelt Positionierung,
              Markenstrategie und Außenwirkung – für Unternehmen, die
              digital professionell auftreten wollen. Die Umsetzung
              erfolgt in Zusammenarbeit mit Webmoderno: modern,
              strukturiert und mit Launch in 5–7 Tagen.
            </p>
            <a href="/brand-studio" className="btn btn-light btn-md reveal d2">
              Mehr erfahren
            </a>
          </div>
          <div className="bs-teaser-tags reveal d2">
            {[
              'Positionierung',
              'Markenstrategie',
              'Kommunikation',
              'Website',
              'Landingpage',
              'Außenwirkung',
            ].map((tag) => (
              <span key={tag} className="bs-teaser-tag">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
