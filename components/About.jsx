import PORTFOLIO from "../data/portfolio";

export default function About() {
  const p = PORTFOLIO;
  return (
    <section id="about">
      <div className="container">
        <div className="section-eyebrow">01 · About</div>
        <h2 className="section-title">Business Analytics Graduate Student</h2>
        <div className="about-grid">
          <div className="about-copy">
            {p.about.map((para, i) => <p key={i}>{para}</p>)}
          </div>
          <aside className="about-card card">
            <div className="about-card-label mono">CURRENTLY</div>
            <ul className="about-card-list">
              <li>
                <span className="mono dim">EDU</span>
                <span>M.S. Business Analytics, The George Washington University</span>
              </li>
              <li>
                <span className="mono dim">PRIOR</span>
                <span>B.S. Management Information Systems, GMU</span>
              </li>
              <li>
                <span className="mono dim">FOCUS</span>
                <span>Analytics · Machine Learning · Business Technology</span>
              </li>
              <li>
                <span className="mono dim">LANGS</span>
                <span>English · Korean · Chinese</span>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
