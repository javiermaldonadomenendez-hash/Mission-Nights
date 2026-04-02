import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <div className="footer-brand">Mission Nights</div>
            <div className="footer-tagline">Wo Vision auf Menschen trifft.</div>
          </div>
          <div className="footer-cols">
            <div className="footer-col">
              <h4>Navigation</h4>
              <a href="/#about">Über uns</a>
              <a href="/#event">Events</a>
              <a href="/#experience">Experience</a>
              <a href="/#community">Community</a>
            </div>
            <div className="footer-col">
              <h4>Social</h4>
              <a
                href="https://www.instagram.com/mission.nights/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              <a href="mailto:info@mission-nights.de">E-Mail</a>
            </div>
            <div className="footer-col">
              <h4>Rechtliches</h4>
              <Link href="/impressum">Impressum</Link>
              <Link href="/datenschutz">Datenschutz</Link>
              <Link href="/agb">AGB</Link>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span className="footer-copy">
            © 2025 Mission Nights. Alle Rechte vorbehalten.
          </span>
          <div className="footer-legal">
            <Link href="/impressum">Impressum</Link>
            <Link href="/datenschutz">Datenschutz</Link>
            <Link href="/agb">AGB</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
