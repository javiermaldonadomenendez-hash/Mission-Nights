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

        <div className="phil-header reveal">
          <span className="label label--light">Philosophie</span>
          <div className="phil-header-inner">
            <h2 className="phil-title">Was uns antreibt.</h2>
            <p className="phil-sub">
              Mission Nights ist mehr als ein Abend. Es ist die Überzeugung,
              dass große Dinge in den richtigen Räumen entstehen.
            </p>
          </div>
        </div>

        <div className="phil-grid">
          {statements.map((s, i) => (
            <div key={s.num} className={`phil-card reveal${i > 0 ? ` d${i}` : ''}`}>
              <span className="phil-num">{s.num}</span>
              <p className="phil-text">{s.text}</p>
              <span className="phil-tag">{s.tag}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
