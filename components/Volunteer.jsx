import PORTFOLIO from "../data/portfolio";

export default function Volunteer() {
  const p = PORTFOLIO;
  return (
    <section id="volunteer">
      <div className="container">
        <div className="section-eyebrow">06 · Volunteer</div>
        <h2 className="section-title">Volunteer</h2>
        {p.volunteer.map((v) => (
          <div key={v.org} className="card xp-panel">
            <div className="xp-panel-head">
              <div>
                <h3 className="xp-role serif">{v.role}</h3>
                <div className="xp-co">
                  <span className="xp-co-name">{v.org}</span>
                  <span className="dot-sep">·</span>
                  <span className="mono dim">{v.where}</span>
                </div>
              </div>
            </div>
            <p className="section-lede" style={{ marginBottom: 0 }}>{v.blurb}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
