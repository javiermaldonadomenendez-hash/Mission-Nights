import type { Metadata } from 'next'
import LegalNav from '@/components/LegalNav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'AGB – Mission Nights',
}

export default function AGB() {
  return (
    <>
      <LegalNav />

      <div className="page-header">
        <div className="container">
          <span className="label">Rechtliches</span>
          <h1>Allgemeine Geschäfts&shy;bedingungen</h1>
          <p className="subtitle">AGB für Veranstaltungen der Eventreihe Mission Nights</p>
        </div>
      </div>

      <main>
        <div className="container">
          <div className="legal-content">

            <div className="legal-section">
              <h2>1. Veranstalter</h2>
              <address>
                Mission Nights<br />
                Javier Tomas Maldonado Menendez<br />
                Askaristraße 6<br />
                45357 Essen
              </address>
            </div>

            <div className="legal-section">
              <h2>2. Geltungsbereich</h2>
              <p>
                Diese AGB gelten für die Teilnahme an allen Veranstaltungen der
                Eventreihe Mission Nights.
              </p>
            </div>

            <div className="legal-section">
              <h2>3. Anmeldung und Vertragsschluss</h2>
              <p>
                Die Anmeldung zu einer Veranstaltung erfolgt über die Website
                oder über bereitgestellte Anmeldeformulare.
              </p>
              <p>
                Mit Bestätigung der Anmeldung kommt ein Teilnahmevertrag
                zustande.
              </p>
            </div>

            <div className="legal-section">
              <h2>4. Teilnahmebedingungen</h2>
              <p>Die Teilnahme richtet sich an volljährige Personen.</p>
              <p>
                Der Veranstalter behält sich vor, Anmeldungen im Einzelfall
                abzulehnen.
              </p>
            </div>

            <div className="legal-section">
              <h2>5. Änderungen oder Absage von Veranstaltungen</h2>
              <p>
                Der Veranstalter behält sich vor, Veranstaltungen aus wichtigen
                Gründen zu verschieben, anzupassen oder abzusagen.
              </p>
              <p>
                Bereits gezahlte Teilnahmegebühren werden in diesem Fall
                erstattet.
              </p>
            </div>

            <div className="legal-section">
              <h2>6. Haftung</h2>
              <p>Die Teilnahme an Veranstaltungen erfolgt auf eigene Verantwortung.</p>
              <p>Der Veranstalter haftet nur bei Vorsatz oder grober Fahrlässigkeit.</p>
            </div>

            <div className="legal-section">
              <h2>7. Foto- und Videoaufnahmen</h2>
              <p>
                Im Rahmen der Veranstaltungen können Foto- und Videoaufnahmen
                erstellt werden. Diese können für folgende Zwecke verwendet
                werden:
              </p>
              <ul>
                <li>Website</li>
                <li>Social Media</li>
                <li>Marketingzwecke</li>
              </ul>
              <p>
                Teilnehmende können der Nutzung jederzeit widersprechen. Bitte
                wende dich dazu an:{' '}
                <a href="mailto:info@mission-nights.de">info@mission-nights.de</a>
              </p>
            </div>

            <div className="legal-section">
              <h2>8. Schlussbestimmungen</h2>
              <p>Es gilt das Recht der Bundesrepublik Deutschland.</p>
              <p>
                Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt
                die Wirksamkeit der übrigen Regelungen unberührt.
              </p>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
