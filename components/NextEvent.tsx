import { CURRENT_EVENT } from '@/lib/event-config'

export default function NextEvent() {
  return (
    <section className="next-event" id="event">
      <div className="container">
        <div className="section-header reveal">
          <span className="label">Nächstes Event</span>
          <h2>Die Mission wartet.</h2>
          <p>Ein Abend, der verbindet. Für Menschen, die mehr wollen.</p>
        </div>

        <div className="event-card reveal">
          {/* Visual side */}
          <div className="event-visual" style={{
            background: 'linear-gradient(160deg, #1a1625 0%, #0e1a2e 40%, #0a0a0a 100%)',
          }}>
            <div className="ev-date">
              <span className="ev-day">{CURRENT_EVENT.day}</span>
              <span className="ev-month">{CURRENT_EVENT.month}</span>
            </div>
            <div className="ev-badge">
              <span className="ev-dot" />
              {CURRENT_EVENT.name}
            </div>
          </div>

          {/* Details side */}
          <div className="event-details">
            <div>
              <span className="ev-theme-tag">Der Abend</span>
              <div className="ev-theme">{CURRENT_EVENT.theme}</div>

              <ul className="ev-meta">
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                    <circle cx="12" cy="9" r="2.5" />
                  </svg>
                  {CURRENT_EVENT.location}
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  {CURRENT_EVENT.time}
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  {CURRENT_EVENT.guest}
                </li>
              </ul>

              <div className="ev-spots">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                Limitierte Plätze — sichere dir deinen jetzt
              </div>
            </div>

            <a
              href={CURRENT_EVENT.eventbriteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark btn-md"
            >
              Jetzt Platz sichern
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
