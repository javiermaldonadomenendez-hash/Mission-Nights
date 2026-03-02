const statements = [
  { num: '01', text: 'Große Visionen entstehen gemeinsam.', tag: 'Vision' },
  { num: '02', text: 'Die richtigen Menschen verändern alles.', tag: 'Community' },
  { num: '03', text: 'Wachstum entsteht im Austausch.', tag: 'Wachstum' },
  { num: '04', text: 'On a Mission.', tag: 'Mission Nights' },
]

export default function Philosophy() {
  return (
    <section className="philosophy" id="community">
      <div className="container">
        <div className="philosophy-intro reveal">
          <span className="label label--light">Philosophie</span>
          <h2>Was uns antreibt.</h2>
          <p>
            Mission Nights ist mehr als ein Abend. Es ist die Überzeugung, dass
            große Dinge in den richtigen Räumen entstehen.
          </p>
        </div>

        <div className="stmt-list">
          {statements.map((s, i) => (
            <div key={s.num} className={`stmt reveal${i > 0 ? ` d${i}` : ''}`}>
              <span className="stmt-num">{s.num}</span>
              <div className="stmt-text">{s.text}</div>
              <span className="stmt-tag">{s.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
