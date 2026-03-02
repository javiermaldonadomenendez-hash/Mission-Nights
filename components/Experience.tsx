const items = [
  {
    num: '01',
    title: 'Networking',
    desc: 'Echte Verbindungen zu Menschen, die denken wie du. Kein Small Talk – Gespräche, die bleiben.',
    icon: (
      <svg className="exp-icon" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 28c0-4 3.6-7 8-7h8c4.4 0 8 3 8 7" />
        <circle cx="20" cy="14" r="5" />
        <path d="M4 30c0-3 2.5-5.5 6-6.5" />
        <circle cx="8" cy="14" r="3.5" />
        <path d="M36 30c0-3-2.5-5.5-6-6.5" />
        <circle cx="32" cy="14" r="3.5" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Inspiration',
    desc: 'Atmosphäre und Energie, die zünden. Ein Abend, der deine Perspektive dauerhaft verschiebt.',
    icon: (
      <svg className="exp-icon" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 6 L23 14 H32 L25 19 L28 28 L20 23 L12 28 L15 19 L8 14 H17 Z" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Impulse & Talks',
    desc: 'Kurze, knackige Insights von Menschen, die es getan haben. Praxis statt Theorie.',
    icon: (
      <svg className="exp-icon" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 32 L12 18 L20 26 L26 12 L34 32" />
        <line x1="6" y1="8" x2="6" y2="32" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Community',
    desc: 'Du wirst Teil von etwas Größerem. Ein Netzwerk, das auch nach dem Abend trägt.',
    icon: (
      <svg className="exp-icon" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 36c0 0-14-10-14-22a14 14 0 1 1 28 0c0 12-14 22-14 22z" />
      </svg>
    ),
  },
  {
    num: '05',
    title: 'Vision & Austausch',
    desc: 'Teile deine Vision, höre andere. Hier entstehen Partnerschaften, Ideen und echtes Wachstum.',
    icon: (
      <svg className="exp-icon" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="20" cy="20" r="16" />
        <line x1="20" y1="6" x2="20" y2="20" />
        <line x1="20" y1="20" x2="30" y2="13" />
      </svg>
    ),
  },
]

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="container">
        <div className="section-header reveal">
          <span className="label">Was dich erwartet</span>
          <h2>
            Die Mission Nights
            <br />
            Experience
          </h2>
        </div>

        <div className="exp-grid">
          {items.map((item, i) => (
            <div key={item.num} className={`exp-item reveal${i > 0 ? ` d${i}` : ''}`}>
              <span className="exp-num">{item.num}</span>
              {item.icon}
              <div className="exp-title">{item.title}</div>
              <div className="exp-desc">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
