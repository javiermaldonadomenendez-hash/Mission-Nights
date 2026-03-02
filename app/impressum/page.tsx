import type { Metadata } from 'next'
import LegalNav from '@/components/LegalNav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Impressum – Mission Nights',
}

export default function Impressum() {
  return (
    <>
      <LegalNav />

      <div className="page-header">
        <div className="container">
          <span className="label">Rechtliches</span>
          <h1>Impressum</h1>
        </div>
      </div>

      <main>
        <div className="container">
          <div className="legal-content">

            <div className="legal-section">
              <h2>Angaben gemäß § 5 TMG</h2>
              <address>
                Mission Nights<br />
                Javier Tomas Maldonado Menendez<br />
                Askaristraße 6<br />
                45357 Essen<br />
                Deutschland
              </address>
            </div>

            <div className="legal-section">
              <h2>Kontakt</h2>
              <p>Telefon: <a href="tel:+4915155659712">+49 151 55659712</a></p>
              <p>E-Mail: <a href="mailto:info@mission-nights.de">info@mission-nights.de</a></p>
            </div>

            <div className="legal-section">
              <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
              <address>
                Javier Tomas Maldonado Menendez<br />
                Askaristraße 6<br />
                45357 Essen
              </address>
            </div>

            <div className="legal-section">
              <h2>Haftung für Inhalte</h2>
              <p>
                Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt.
                Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
                können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter
                sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen
                Seiten nach den allgemeinen Gesetzen verantwortlich.
              </p>
            </div>

            <div className="legal-section">
              <h2>Haftung für Links</h2>
              <p>
                Unsere Website enthält Links zu externen Websites Dritter, auf
                deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
                diese fremden Inhalte auch keine Gewähr übernehmen. Für die
                Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
                oder Betreiber der Seiten verantwortlich.
              </p>
            </div>

            <div className="legal-section">
              <h2>Urheberrecht</h2>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
                diesen Seiten unterliegen dem deutschen Urheberrecht. Die
                Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
                schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
