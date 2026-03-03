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
              <p>
                Verantwortlicher im Sinne der Datenschutz-Grundverordnung
                (DSGVO) und anderer nationaler Datenschutzgesetze sowie
                sonstiger datenschutzrechtlicher Bestimmungen ist:
              </p>
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
              <h2>2. Allgemeines zur Datenverarbeitung</h2>
              <p>
                Wir verarbeiten personenbezogene Daten grundsätzlich nur,
                soweit dies zur Bereitstellung einer funktionsfähigen Website
                sowie unserer Inhalte und Leistungen erforderlich ist. Eine
                Verarbeitung personenbezogener Daten erfolgt nur auf Grundlage
                einer gesetzlichen Erlaubnis oder nach Einwilligung der
                betroffenen Person.
              </p>
            </div>

            <div className="legal-section">
              <h2>3. Hosting (Vercel)</h2>
              <p>
                Diese Website wird bei Vercel Inc., 340 S Lemon Ave #4133,
                Walnut, CA 91789, USA, gehostet. Beim Aufruf unserer Website
                werden durch den Hostinganbieter automatisch sogenannte
                Server-Logfiles erfasst. Diese enthalten:
              </p>
              <ul>
                <li>IP-Adresse des anfragenden Rechners</li>
                <li>Datum und Uhrzeit der Anfrage</li>
                <li>Name und URL der abgerufenen Datei</li>
                <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
                <li>Verwendeter Browser und ggf. das Betriebssystem</li>
              </ul>
              <p>
                Die vorübergehende Speicherung der IP-Adresse durch das System
                ist notwendig, um eine Auslieferung der Website an den Rechner
                des Nutzers zu ermöglichen. Die Speicherung in Logfiles erfolgt,
                um die Funktionsfähigkeit der Website sicherzustellen.
              </p>
              <p>
                Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
                Interesse am störungsfreien Betrieb der Website).
              </p>
              <p>
                Da Vercel ein US-amerikanisches Unternehmen ist, kann eine
                Übermittlung personenbezogener Daten in die USA nicht
                ausgeschlossen werden. Vercel ist nach dem
                EU-US Data Privacy Framework zertifiziert, das eine
                angemessene Datenschutzebene für Datenübermittlungen in die
                USA gewährleistet.
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
              <h2>4. Cookies</h2>
              <p>
                Unsere Website verwendet Cookies. Cookies sind kleine
                Textdateien, die auf deinem Endgerät gespeichert werden und
                bestimmte Einstellungen und Daten speichern.
              </p>
              <p>
                Wir setzen ausschließlich technisch notwendige Cookies ein,
                die für den Betrieb der Website erforderlich sind:
              </p>
              <ul>
                <li>
                  <strong>cookie_consent_v1</strong> – Speichert deine
                  Cookie-Einwilligung (Speicherdauer: 1 Jahr). Rechtsgrundlage:
                  Art. 6 Abs. 1 lit. f DSGVO.
                </li>
              </ul>
              <p>
                Weitere Cookies werden nur mit deiner ausdrücklichen
                Einwilligung gesetzt (Art. 6 Abs. 1 lit. a DSGVO). Du kannst
                deine Einwilligung jederzeit mit Wirkung für die Zukunft
                widerrufen, indem du die Cookie-Einstellungen in deinem Browser
                anpasst oder gespeicherte Cookies löschst.
              </p>
            </div>

            <div className="legal-section">
              <h2>5. Kontaktaufnahme per E-Mail</h2>
              <p>
                Wenn du uns per E-Mail kontaktierst, werden deine übermittelten
                Daten (E-Mail-Adresse, Name sowie ggf. weitere Angaben) zum
                Zweck der Bearbeitung deiner Anfrage bei uns gespeichert.
                Diese Daten geben wir nicht ohne deine Einwilligung weiter.
              </p>
              <p>
                Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
                Interesse an der Beantwortung von Anfragen), bei
                vertragsbezogenen Anfragen Art. 6 Abs. 1 lit. b DSGVO.
              </p>
              <p>
                Die Daten werden gelöscht, sobald sie für die Erreichung des
                Zwecks ihrer Erhebung nicht mehr erforderlich sind, spätestens
                jedoch nach Ablauf gesetzlicher Aufbewahrungsfristen.
              </p>
            </div>

            <div className="legal-section">
              <h2>6. Veranstaltungsanmeldung</h2>
              <p>
                Wenn du dich zu einer Veranstaltung anmeldest, verarbeiten wir
                folgende Daten:
              </p>
              <ul>
                <li>Name</li>
                <li>E-Mail-Adresse</li>
                <li>ggf. Telefonnummer</li>
                <li>weitere freiwillig gemachte Angaben</li>
              </ul>
              <p>
                Diese Daten werden ausschließlich zur Organisation und
                Durchführung der Veranstaltung verwendet und nicht an Dritte
                weitergegeben, sofern dies nicht zur Durchführung der
                Veranstaltung erforderlich ist.
              </p>
              <p>
                Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung
                bzw. vorvertragliche Maßnahmen).
              </p>
            </div>

            <div className="legal-section">
              <h2>7. Instagram</h2>
              <p>
                Auf unserer Website sind Links zum Instagram-Profil von Mission
                Nights eingebunden. Beim Anklicken dieser Links wirst du auf
                die Plattform von Meta Platforms Ireland Ltd., 4 Grand Canal
                Square, Dublin 2, Irland weitergeleitet. Erst durch das Anklicken
                findet eine Datenübertragung an Instagram statt. Wir haben
                keinen Einfluss auf Art und Umfang der dabei übertragenen Daten.
              </p>
              <p>
                Weitere Informationen:{' '}
                <a
                  href="https://privacycenter.instagram.com/policy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  privacycenter.instagram.com/policy
                </a>
              </p>
            </div>

            <div className="legal-section">
              <h2>8. Weitergabe von Daten an Dritte</h2>
              <p>
                Eine Weitergabe deiner personenbezogenen Daten an Dritte
                erfolgt grundsätzlich nicht, außer:
              </p>
              <ul>
                <li>
                  wenn dies zur Vertragserfüllung oder Veranstaltungsdurchführung
                  erforderlich ist (Art. 6 Abs. 1 lit. b DSGVO),
                </li>
                <li>
                  wenn eine gesetzliche Verpflichtung zur Weitergabe besteht
                  (Art. 6 Abs. 1 lit. c DSGVO) oder
                </li>
                <li>
                  wenn du ausdrücklich eingewilligt hast (Art. 6 Abs. 1 lit. a
                  DSGVO).
                </li>
              </ul>
            </div>

            <div className="legal-section">
              <h2>9. Speicherdauer</h2>
              <p>
                Personenbezogene Daten werden nur so lange gespeichert, wie
                dies für den jeweiligen Verarbeitungszweck erforderlich ist.
                Sofern gesetzliche Aufbewahrungspflichten bestehen (z. B.
                steuerrechtliche Aufbewahrungsfristen von bis zu 10 Jahren),
                wird eine Löschung erst nach deren Ablauf vorgenommen.
              </p>
            </div>

            <div className="legal-section">
              <h2>10. Betroffenenrechte</h2>
              <p>
                Dir stehen gegenüber uns folgende Rechte hinsichtlich deiner
                personenbezogenen Daten zu:
              </p>
              <ul>
                <li>
                  <strong>Auskunftsrecht</strong> (Art. 15 DSGVO) – Du hast das
                  Recht, Auskunft über die von uns verarbeiteten
                  personenbezogenen Daten zu erhalten.
                </li>
                <li>
                  <strong>Berichtigungsrecht</strong> (Art. 16 DSGVO) – Du
                  kannst die Berichtigung unrichtiger oder unvollständiger Daten
                  verlangen.
                </li>
                <li>
                  <strong>Recht auf Löschung</strong> (Art. 17 DSGVO) – Du
                  kannst die Löschung deiner Daten verlangen, sofern keine
                  gesetzlichen Aufbewahrungspflichten entgegenstehen.
                </li>
                <li>
                  <strong>Recht auf Einschränkung der Verarbeitung</strong>{' '}
                  (Art. 18 DSGVO) – Du kannst die Einschränkung der
                  Verarbeitung verlangen, wenn bestimmte Voraussetzungen
                  vorliegen.
                </li>
                <li>
                  <strong>Recht auf Datenübertragbarkeit</strong> (Art. 20
                  DSGVO) – Du hast das Recht, deine Daten in einem
                  strukturierten, maschinenlesbaren Format zu erhalten.
                </li>
                <li>
                  <strong>Widerspruchsrecht</strong> (Art. 21 DSGVO) – Du
                  kannst der Verarbeitung deiner Daten auf Grundlage von
                  Art. 6 Abs. 1 lit. f DSGVO jederzeit widersprechen.
                </li>
                <li>
                  <strong>Widerruf einer Einwilligung</strong> (Art. 7 Abs. 3
                  DSGVO) – Du kannst eine erteilte Einwilligung jederzeit mit
                  Wirkung für die Zukunft widerrufen.
                </li>
              </ul>
              <p>
                Zur Ausübung deiner Rechte wende dich bitte an:{' '}
                <a href="mailto:info@mission-nights.de">
                  info@mission-nights.de
                </a>
              </p>
            </div>

            <div className="legal-section">
              <h2>11. Beschwerderecht bei der Aufsichtsbehörde</h2>
              <p>
                Du hast das Recht, dich jederzeit bei einer
                Datenschutz-Aufsichtsbehörde zu beschweren (Art. 77 DSGVO).
              </p>
              <p>
                Zuständige Aufsichtsbehörde für Nordrhein-Westfalen:
              </p>
              <address>
                Landesbeauftragte für Datenschutz und Informationsfreiheit
                Nordrhein-Westfalen<br />
                Postfach 20 04 44<br />
                40102 Düsseldorf<br />
                Telefon: +49 211 38424-0<br />
                E-Mail:{' '}
                <a href="mailto:poststelle@ldi.nrw.de">poststelle@ldi.nrw.de</a>
                <br />
                Website:{' '}
                <a
                  href="https://www.ldi.nrw.de"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.ldi.nrw.de
                </a>
              </address>
            </div>

            <div className="legal-section">
              <h2>12. Datensicherheit</h2>
              <p>
                Diese Website nutzt aus Sicherheitsgründen und zum Schutz der
                Übertragung vertraulicher Inhalte eine SSL-/TLS-Verschlüsselung.
                Eine verschlüsselte Verbindung erkennst du daran, dass die
                Adresszeile des Browsers von „http://" auf „https://" wechselt
                und an dem Schloss-Symbol in der Browserzeile.
              </p>
            </div>

            <div className="legal-section">
              <h2>13. Aktualität dieser Datenschutzerklärung</h2>
              <p>
                Diese Datenschutzerklärung hat den Stand März 2026. Wir behalten
                uns vor, sie bei Bedarf zu aktualisieren, um sie stets den
                aktuellen rechtlichen Anforderungen anzupassen.
              </p>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
