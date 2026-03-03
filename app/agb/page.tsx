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
          <p className="subtitle">Stand: März 2026</p>
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
                45357 Essen<br />
                Deutschland<br /><br />
                Telefon: <a href="tel:+4915155659712">+49 151 55659712</a><br />
                E-Mail: <a href="mailto:info@mission-nights.de">info@mission-nights.de</a>
              </address>
            </div>

            <div className="legal-section">
              <h2>2. Geltungsbereich</h2>
              <p>
                Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für die
                Teilnahme an allen Veranstaltungen der Eventreihe Mission
                Nights. Sie gelten gegenüber Verbrauchern (§ 13 BGB) und
                Unternehmern (§ 14 BGB) gleichermaßen, sofern nicht
                ausdrücklich differenziert wird.
              </p>
              <p>
                Abweichende Bedingungen der Teilnehmenden werden nicht
                anerkannt, es sei denn, wir stimmen ihrer Geltung ausdrücklich
                schriftlich zu.
              </p>
            </div>

            <div className="legal-section">
              <h2>3. Anmeldung und Vertragsschluss</h2>
              <p>
                Die Anmeldung zu einer Veranstaltung erfolgt über die Website
                mission-nights.de oder über sonstige vom Veranstalter
                bereitgestellte Anmeldemöglichkeiten. Mit dem Absenden der
                Anmeldung gibst du ein verbindliches Angebot auf Abschluss
                eines Teilnahmevertrags ab.
              </p>
              <p>
                Der Vertrag kommt zustande, wenn wir deine Anmeldung
                ausdrücklich bestätigen (z. B. per E-Mail) oder indem wir die
                Leistung erbringen. Wir sind nicht verpflichtet, eine Anmeldung
                anzunehmen.
              </p>
              <p>
                Die Bestätigungsmail stellt noch keine Annahme des Angebots
                dar, sofern diese nur den Eingang der Anfrage bestätigt.
              </p>
            </div>

            <div className="legal-section">
              <h2>4. Teilnahmegebühren und Zahlung</h2>
              <p>
                Die Höhe einer etwaigen Teilnahmegebühr wird für jede
                Veranstaltung separat ausgewiesen. Alle Preise sind
                Endpreise in Euro. Sofern Umsatzsteuer anfällt, wird diese
                ausgewiesen.
              </p>
              <p>
                Sofern eine Zahlung erforderlich ist, ist diese vor oder bei
                Beginn der Veranstaltung zu leisten, soweit keine abweichende
                Regelung getroffen wird. Zahlungsmodalitäten werden bei der
                jeweiligen Veranstaltungsankündigung kommuniziert.
              </p>
            </div>

            <div className="legal-section">
              <h2>5. Widerrufsrecht für Verbraucher</h2>
              <p>
                Für Verträge über Veranstaltungen, bei denen ein spezifischer
                Termin vereinbart wird, besteht gemäß{' '}
                <strong>§ 312g Abs. 2 Nr. 9 BGB kein Widerrufsrecht</strong>,
                da es sich um Freizeitdienstleistungen handelt, für die ein
                bestimmter Termin vorgesehen ist.
              </p>
              <p>
                Dies gilt nicht, wenn die Teilnahme unentgeltlich ist und kein
                Kaufvertrag im Sinne des Fernabsatzrechts vorliegt.
              </p>
            </div>

            <div className="legal-section">
              <h2>6. Teilnahmebedingungen</h2>
              <p>
                Die Teilnahme richtet sich an volljährige Personen (ab 18
                Jahren). Minderjährige können nur mit ausdrücklicher
                schriftlicher Einwilligung eines Erziehungsberechtigten
                teilnehmen, sofern die jeweilige Veranstaltung dies zulässt.
              </p>
              <p>
                Der Veranstalter behält sich vor, Anmeldungen ohne Angabe
                von Gründen abzulehnen oder Teilnehmende von der Veranstaltung
                auszuschließen, sofern ein wichtiger Grund vorliegt
                (z. B. störendes Verhalten, Verstoß gegen Hausordnung oder
                diese AGB).
              </p>
            </div>

            <div className="legal-section">
              <h2>7. Pflichten der Teilnehmenden</h2>
              <p>
                Teilnehmende verpflichten sich, die Veranstaltung nicht zu
                stören und die Anweisungen des Veranstalters und des
                Veranstaltungspersonals zu befolgen. Das unbefugte Aufnehmen
                und Veröffentlichen von Vorträgen, Präsentationen oder
                Redebeiträgen Dritter ist ohne deren ausdrückliche Einwilligung
                nicht gestattet.
              </p>
            </div>

            <div className="legal-section">
              <h2>8. Änderungen oder Absage von Veranstaltungen</h2>
              <p>
                Der Veranstalter behält sich vor, Veranstaltungen aus
                wichtigem Grund (z. B. Erkrankung von Referenten,
                höhere Gewalt, behördliche Anordnungen) zu verschieben,
                inhaltlich anzupassen oder abzusagen.
              </p>
              <p>
                Im Fall einer Absage durch den Veranstalter werden bereits
                geleistete Teilnahmegebühren vollständig erstattet. Weitergehende
                Ansprüche – insbesondere auf Ersatz von Reise- oder
                Übernachtungskosten – sind ausgeschlossen, sofern der
                Veranstalter die Absage nicht zu vertreten hat.
              </p>
            </div>

            <div className="legal-section">
              <h2>9. Haftung</h2>
              <p>
                Die Teilnahme an Veranstaltungen erfolgt auf eigene
                Verantwortung der Teilnehmenden.
              </p>
              <p>
                Der Veranstalter haftet uneingeschränkt für Schäden, die durch
                Vorsatz oder grobe Fahrlässigkeit verursacht wurden, sowie
                bei Verletzung von Leben, Körper oder Gesundheit.
              </p>
              <p>
                Bei leichter Fahrlässigkeit haftet der Veranstalter nur bei
                Verletzung einer wesentlichen Vertragspflicht (Kardinalpflicht).
                In diesem Fall ist die Haftung auf den vorhersehbaren,
                vertragstypischen Schaden begrenzt.
              </p>
              <p>
                Für mitgebrachte Gegenstände der Teilnehmenden übernimmt
                der Veranstalter keine Haftung.
              </p>
            </div>

            <div className="legal-section">
              <h2>10. Foto- und Videoaufnahmen</h2>
              <p>
                Im Rahmen der Veranstaltungen können Foto- und Videoaufnahmen
                durch den Veranstalter oder beauftragte Fotografen erstellt
                werden. Diese Aufnahmen können für folgende Zwecke verwendet
                werden:
              </p>
              <ul>
                <li>Dokumentation der Veranstaltung</li>
                <li>Veröffentlichung auf der Website mission-nights.de</li>
                <li>Veröffentlichung auf Social-Media-Kanälen</li>
                <li>Presse- und Öffentlichkeitsarbeit</li>
              </ul>
              <p>
                Rechtsgrundlage für die Nutzung ist § 23 Abs. 1 Nr. 3 KUG
                (Versammlungen, Aufzüge und ähnliche Veranstaltungen), soweit
                Personen nur als Beiwerk erscheinen. Für Bildnisse, auf denen
                Teilnehmende erkennbar im Vordergrund stehen, holen wir eine
                gesonderte Einwilligung ein oder stützen uns auf Art. 6 Abs. 1
                lit. f DSGVO (berechtigtes Interesse an der Dokumentation und
                Vermarktung der Veranstaltung).
              </p>
              <p>
                Teilnehmende können der Nutzung ihres Bildnisses jederzeit
                mit Wirkung für die Zukunft widersprechen. Widersprüche bitte
                an:{' '}
                <a href="mailto:info@mission-nights.de">
                  info@mission-nights.de
                </a>
              </p>
            </div>

            <div className="legal-section">
              <h2>11. Datenschutz</h2>
              <p>
                Informationen zur Verarbeitung personenbezogener Daten im
                Zusammenhang mit der Veranstaltungsteilnahme findest du in
                unserer{' '}
                <a href="/datenschutz">Datenschutzerklärung</a>.
              </p>
            </div>

            <div className="legal-section">
              <h2>12. Schlussbestimmungen</h2>
              <p>
                Es gilt das Recht der Bundesrepublik Deutschland unter
                Ausschluss des UN-Kaufrechts (CISG).
              </p>
              <p>
                Gerichtsstand für Kaufleute, juristische Personen des
                öffentlichen Rechts und öffentlich-rechtliche
                Sondervermögen ist Essen.
              </p>
              <p>
                Sollten einzelne Bestimmungen dieser AGB ganz oder teilweise
                unwirksam oder undurchführbar sein oder werden, bleibt die
                Wirksamkeit der übrigen Regelungen unberührt. An die Stelle der
                unwirksamen oder undurchführbaren Bestimmung tritt die
                gesetzliche Regelung.
              </p>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
