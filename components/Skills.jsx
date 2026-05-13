import PORTFOLIO from "@/data/portfolio";

export default function Skills() {
  const p = PORTFOLIO;
  return (
    <section id="skills">
      <div className="container">
        <div className="section-eyebrow">04 · Skills</div>
        <h2 className="section-title serif">The toolkit.</h2>
        <div className="skills-grid">
          {p.skills.map((s, i) => (
            <div className="skill-card card" key={s.group}>
              <div className="skill-num mono">{String(i + 1).padStart(2, "0")}</div>
              <div className="skill-group">{s.group}</div>
              <div className="skill-items">
                {s.items.map((it) => (
                  <span key={it} className="skill-chip">{it}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
