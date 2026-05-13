import PORTFOLIO from "../data/portfolio";

export default function Leadership() {
  const p = PORTFOLIO;
  return (
    <section id="leadership">
      <div className="container">
        <div className="section-eyebrow">05 · Leadership</div>
        <h2 className="section-title serif">Student involvement.</h2>
        <div className="xp-layout">
          <nav className="xp-tabs">
            {p.leadership.map((l) => (
              <button key={l.org} className="xp-tab active">
                <span className="xp-tab-co">{l.org}</span>
                <span className="xp-tab-when mono">{l.when}</span>
              </button>
            ))}
          </nav>
          <div className="xp-panel card">
            {p.leadership.map((l) => (
              <div key={l.org}>
                <div className="xp-panel-head">
                  <div>
                    <h3 className="xp-role serif">{l.role}</h3>
                    <div className="xp-co">
                      <span className="xp-co-name">{l.org}</span>
                      <span className="dot-sep">·</span>
                      <span className="mono dim">{l.where}</span>
                    </div>
                  </div>
                  <div className="xp-when mono">{l.when}</div>
                </div>
                <ul className="xp-bullets">
                  {l.bullets.map((b, i) => (
                    <li key={i}>
                      <span className="xp-bullet-dot" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
