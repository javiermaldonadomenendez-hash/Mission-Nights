import type { Metadata } from 'next'
import LegalNav from '@/components/LegalNav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung – Mission Nights',
}

export default function Datenschutz() {
  return (
    <>
      <LegalNav />

      <div className="page-header">
        <div className="container">
          <span className="label">Rechtliches</span>
          <h1>Datenschutz&shy;erklärung</h1>
        </div>
      </div>

      <main>
        <div className="container">
          <div className="legal-content">

            <div className="legal-section">
              <h2>1. Verantwortlicher</h2>
              <p>Verantwortlich für die Datenverarbeitung auf dieser Website ist:</p>
              <address>
                Mission Nights<br />
                Javier Tomas Maldonado Menendez<br />
                Askaristraße 6<br />
                45357 Essen<br />
                Deutschland<br /><br />
                Telefon: <a href="tel:+4915155659712">+49 151 55659712</a><br />
                E-Mail: <a href="mailto:info@mission-nights.de">info@mission-nights.de</a>
              </address>
            </div>

            <div className="legal-section">
              <h2>2. Erhebung und Speicherung personenbezogener Daten</h2>
              <p>
                Beim Besuch dieser Website werden automatisch Informationen durch
                den Hostinganbieter erfasst. Dies sind insbesondere:
              </p>
              <ul>
                <li>IP-Adresse</li>
                <li>Datum und Uhrzeit der Anfrage</li>
                <li>Browsertyp und Browserversion</li>
                <li>Verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
              </ul>
              <p>
                Die Verarbeitung erfolgt zur Sicherstellung eines störungsfreien
                Betriebs der Website sowie zur Verbesserung unseres Angebots
                gemäß Art. 6 Abs. 1 lit. f DSGVO.
              </p>
            </div>

            <div className="legal-section">
              <h2>3. Hosting über Vercel</h2>
              <p>
                Diese Website wird bei Vercel Inc., 340 S Lemon Ave #4133,
                Walnut, CA 91789, USA gehostet.
              </p>
              <p>
                Beim Aufruf der Website werden technisch notwendige Daten an die
                Server von Vercel übertragen. Die Verarbeitung erfolgt auf
                Grundlage unseres berechtigten Interesses gemäß Art. 6 Abs. 1
                lit. f DSGVO.
              </p>
              <p>
                Weitere Informationen:{' '}
                <a
                  href="https://vercel.com/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  vercel.com/legal/privacy-policy
                </a>
              </p>
            </div>

            <div className="legal-section">
              <h2>4. Eventanmeldung / Kontaktaufnahme</h2>
              <p>
                Wenn du dich zu einer Mission Night anmeldest oder Kontakt mit
                uns aufnimmst, werden folgende Daten verarbeitet:
              </p>
              <ul>
                <li>Name</li>
                <li>E-Mail-Adresse</li>
                <li>ggf. Telefonnummer</li>
                <li>weitere freiwillige Angaben</li>
              </ul>
              <p>
                Diese Daten werden ausschließlich zur Organisation und
                Durchführung der Veranstaltung verwendet.
              </p>
              <p>
                Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertrag bzw.
                vorvertragliche Maßnahmen).
              </p>
            </div>

            <div className="legal-section">
              <h2>5. Weitergabe von Daten</h2>
              <p>
                Eine Weitergabe deiner personenbezogenen Daten erfolgt nur, wenn:
              </p>
              <ul>
                <li>dies zur Veranstaltungsdurchführung erforderlich ist,</li>
                <li>eine gesetzliche Verpflichtung besteht oder</li>
                <li>du ausdrücklich eingewilligt hast.</li>
              </ul>
            </div>

            <div className="legal-section">
              <h2>6. Speicherdauer</h2>
              <p>
                Personenbezogene Daten werden nur so lange gespeichert, wie dies
                für die jeweiligen Zwecke erforderlich ist oder gesetzliche
                Aufbewahrungspflichten bestehen.
              </p>
            </div>

            <div className="legal-section">
              <h2>7. Deine Rechte</h2>
              <p>Du hast jederzeit das Recht auf:</p>
              <ul>
                <li>Auskunft über deine gespeicherten Daten</li>
                <li>Berichtigung</li>
                <li>Löschung</li>
                <li>Einschränkung der Verarbeitung</li>
                <li>Datenübertragbarkeit</li>
                <li>Widerruf einer Einwilligung</li>
              </ul>
              <p>
                Anfragen bitte an:{' '}
                <a href="mailto:info@mission-nights.de">info@mission-nights.de</a>
              </p>
            </div>

            <div className="legal-section">
              <h2>8. Beschwerderecht</h2>
              <p>
                Du hast das Recht, dich bei einer Datenschutzaufsichtsbehörde
                zu beschweren.
              </p>
              <p>
                Zuständige Behörde in Nordrhein-Westfalen: Landesbeauftragte
                für Datenschutz und Informationsfreiheit Nordrhein-Westfalen.
              </p>
            </div>

            <div className="legal-section">
              <h2>9. SSL-Verschlüsselung</h2>
              <p>
                Diese Website nutzt aus Sicherheitsgründen eine
                SSL-Verschlüsselung. Eine verschlüsselte Verbindung erkennst du
                daran, dass die Adresszeile des Browsers von „http://" auf
                „https://" wechselt.
              </p>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
