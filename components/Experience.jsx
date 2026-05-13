"use client";
import { useState } from "react";
import PORTFOLIO from "../data/portfolio";

export default function Experience() {
  const p = PORTFOLIO;
  const [active, setActive] = useState(0);
  const current = p.experience[active];

  return (
    <section id="experience">
      <div className="container">
        <div className="section-eyebrow">03 · Experience</div>
        <h2 className="section-title serif">Where I&apos;ve worked.</h2>
        <div className="xp-layout">
          <nav className="xp-tabs">
            {p.experience.map((e, i) => (
              <button
                key={e.company}
                className={`xp-tab ${active === i ? "active" : ""}`}
                onClick={() => setActive(i)}
              >
                <span className="xp-tab-co">{e.company}</span>
                <span className="xp-tab-when mono">{e.when}</span>
              </button>
            ))}
          </nav>
          <div className="xp-panel card">
            <div className="xp-panel-head">
              <div>
                <h3 className="xp-role serif">{current.role}</h3>
                <div className="xp-co">
                  <span className="xp-co-name">{current.company}</span>
                  <span className="dot-sep">·</span>
                  <span className="mono dim">{current.where}</span>
                </div>
              </div>
              <div className="xp-when mono">{current.when}</div>
            </div>
            <ul className="xp-bullets">
              {current.bullets.map((b, i) => (
                <li key={i}>
                  <span className="xp-bullet-dot" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
