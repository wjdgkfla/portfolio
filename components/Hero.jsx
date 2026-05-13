import PORTFOLIO from "../data/portfolio";
import { Download, ArrowRight, Github, Linkedin } from "./Icons";

export default function Hero() {
  const p = PORTFOLIO;
  return (
    <section id="home" className="hero">
      <div className="container hero-inner">
        <div className="hero-meta mono">
          <span>{p.location}</span>
          <span className="dot-sep">·</span>
          <span>Available for summer 2026 internships</span>
        </div>

        <div className="hero-name-row">
          <div className="hero-photo-wrap">
            <img src="https://raw.githubusercontent.com/wjdgkfla/portfolio/main/public/profile.png" alt="Ha Lim Chung" className="hero-photo" />
          </div>
          <h1 className="hero-name serif">Ha Lim Chung</h1>
        </div>

        <div className="hero-altname mono">Preferred name: Jack</div>
        <p className="hero-role">
          {p.role}
          <span className="hero-divider">/</span>
          <span className="hero-tags">
            {p.tags.map((t, i) => (
              <span key={t}>
                {t}
                {i < p.tags.length - 1 && <span className="dot-sep"> · </span>}
              </span>
            ))}
          </span>
        </p>
        <p className="hero-summary">{p.summary}</p>
        <div className="hero-ctas">
          <a className="btn btn-primary" href={p.resume} target="_blank" rel="noreferrer">
            <Download style={{ width: 15, height: 15 }} /> View Resume
          </a>
          <a className="btn" href="#projects">
            View Projects <ArrowRight style={{ width: 15, height: 15 }} />
          </a>
          <a className="btn" href={p.github} target="_blank" rel="noreferrer">
            <Github style={{ width: 15, height: 15 }} /> GitHub
          </a>
          <a className="btn" href={p.linkedin} target="_blank" rel="noreferrer">
            <Linkedin style={{ width: 15, height: 15 }} /> LinkedIn
          </a>
        </div>
        <div className="hero-stats">
          {p.stats.map((s) => (
            <div className="hero-stat" key={s.k}>
              <div className="hero-stat-k serif">{s.k}</div>
              <div className="hero-stat-v mono">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
