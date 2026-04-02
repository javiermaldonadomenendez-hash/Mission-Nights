export default function NextEvent() {
  return (
    <section className="next-event" id="event">
      <div className="container">
        <div className="section-header reveal">
          <span className="label">Nächstes Event</span>
          <h2>Die Mission wartet.</h2>
          <p>Ein Abend, der bleibt. Limitierte Plätze. Exklusiver Kreis.</p>
        </div>

        <div className="event-card reveal">
          {/* Visual side */}
          <div className="event-visual">
            <div className="ev-date">
              <span className="ev-day">21</span>
              <span className="ev-month">April 2026</span>
            </div>
            <div className="ev-badge">
              <span className="ev-dot" />
              Vision Dinner
            </div>
          </div>

          {/* Details side */}
          <div className="event-details">
            <div>
              <span className="ev-theme-tag">Format</span>
              <div className="ev-theme">
                Vision Dinner —
                <br />
                Tafeln, inspirieren, verbinden.
              </div>

              <ul className="ev-meta">
                <li>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                    <circle cx="12" cy="9" r="2.5" />
                  </svg>
                  Restaurant Thema, Ruhrstraße 26, Mülheim an der Ruhr
                </li>
                <li>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  Ab 19:00 Uhr
                </li>
                <li>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 2h18M3 7h18M3 12h12M3 17h8" />
                  </svg>
                  Exklusives Dinner mit kuratierten Gästen
                </li>
              </ul>

              <div className="ev-spots">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                Limitierte Plätze — sichere dir deinen jetzt
              </div>
            </div>

            <div className="ev-coming-soon">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              Anmelde-Link folgt in Kürze
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
