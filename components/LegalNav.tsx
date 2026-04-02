import Link from 'next/link'

export default function LegalNav() {
  return (
    <nav className="nav scrolled">
      <div className="container">
        <div className="nav-inner">
          <Link href="/" className="nav-logo">Mission Nights</Link>
          <Link href="/" className="nav-back">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            Zurück
          </Link>
        </div>
      </div>
    </nav>
  )
}
