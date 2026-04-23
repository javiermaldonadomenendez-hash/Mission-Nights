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
              <h2>EU-Streitschlichtung</h2>
              <p>
                Die Europäische Kommission stellt eine Plattform zur
                Online-Streitbeilegung (OS) bereit:{' '}
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ec.europa.eu/consumers/odr
                </a>
              </p>
              <p>
                Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>
            </div>

            <div className="legal-section">
              <h2>Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
              <p>
                Wir sind nicht bereit oder verpflichtet, an
                Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>

            <div className="legal-section">
              <h2>Haftung für Inhalte</h2>
              <p>
                Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene
                Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
                gespeicherte fremde Informationen zu überwachen oder nach
                Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
                hinweisen.
              </p>
              <p>
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
                Informationen nach den allgemeinen Gesetzen bleiben hiervon
                unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
                Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.
                Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden
                wir diese Inhalte umgehend entfernen.
              </p>
            </div>

            <div className="legal-section">
              <h2>Haftung für Links</h2>
              <p>
                Unser Angebot enthält Links zu externen Websites Dritter, auf
                deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
                diese fremden Inhalte auch keine Gewähr übernehmen. Für die
                Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
                oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
                wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
                überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
                Verlinkung nicht erkennbar.
              </p>
              <p>
                Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist
                jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
                zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
                derartige Links umgehend entfernen.
              </p>
            </div>

            <div className="legal-section">
              <h2>Bildnachweise</h2>
              <p>
                Einige auf dieser Website verwendete Bilder stammen von{' '}
                <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer">Unsplash</a>{' '}
                (unsplash.com) und werden gemäß der{' '}
                <a href="https://unsplash.com/license" target="_blank" rel="noopener noreferrer">Unsplash-Lizenz</a>{' '}
                genutzt. Die Urheberrechte der jeweiligen Fotografen bleiben davon unberührt.
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
                Downloads und Kopien dieser Seite sind nur für den privaten,
                nicht kommerziellen Gebrauch gestattet.
              </p>
              <p>
                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
                wurden, werden die Urheberrechte Dritter beachtet. Insbesondere
                werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie
                trotzdem auf eine Urheberrechtsverletzung aufmerksam werden,
                bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden
                von Rechtsverletzungen werden wir derartige Inhalte umgehend
                entfernen.
              </p>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
