"use client";
import { useState } from "react";
import PORTFOLIO from "../data/portfolio";

function ProjectThumb({ id }) {
  if (id === "mason-market") {
    return (
      <svg viewBox="0 0 400 220" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id="grid-mm" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.18" />
          </pattern>
        </defs>
        <rect width="400" height="220" fill="url(#grid-mm)" />
        <rect x="60" y="50" width="80" height="100" rx="10" fill="currentColor" opacity="0.92" />
        <rect x="155" y="70" width="80" height="100" rx="10" fill="currentColor" opacity="0.55" />
        <rect x="250" y="50" width="80" height="100" rx="10" fill="currentColor" opacity="0.28" />
      </svg>
    );
  }
  if (id === "rml") {
    return (
      <svg viewBox="0 0 400 220" preserveAspectRatio="xMidYMid slice">
        {[...Array(7)].map((_, i) => (
          <circle key={i} cx={50 + i * 50} cy={110} r={6 + (i % 3) * 6} fill="currentColor" opacity={0.25 + (i % 4) * 0.18} />
        ))}
        <path d="M 30 110 Q 200 30, 380 110" stroke="currentColor" strokeWidth="1.4" fill="none" opacity="0.45" />
        <path d="M 30 110 Q 200 190, 380 110" stroke="currentColor" strokeWidth="1.4" fill="none" opacity="0.45" />
      </svg>
    );
  }
  if (id === "enrollment") {
    const bars = [38, 62, 51, 78, 70, 95, 88, 110, 102, 128];
    return (
      <svg viewBox="0 0 400 220" preserveAspectRatio="xMidYMid slice">
        {bars.map((h, i) => (
          <rect key={i} x={28 + i * 36} y={180 - h} width="22" height={h} rx="3" fill="currentColor" opacity={0.25 + (i / bars.length) * 0.6} />
        ))}
        <line x1="20" y1="180" x2="380" y2="180" stroke="currentColor" strokeWidth="1" opacity="0.4" />
        <path d="M 28 142 L 64 122 L 100 130 L 136 110 L 172 116 L 208 90 L 244 96 L 280 76 L 316 82 L 352 62"
          stroke="currentColor" strokeWidth="2" fill="none" opacity="0.9" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 400 220" preserveAspectRatio="xMidYMid slice">
      {[...Array(10)].map((_, i) => (
        <line key={i} x1={20} y1={22 + i * 18}
          x2={20 + 80 + (i % 4) * 60 + (i * 7) % 100} y2={22 + i * 18}
          stroke="currentColor" strokeWidth="3" opacity={0.18 + (i % 5) * 0.12} />
      ))}
    </svg>
  );
}

export default function Projects() {
  const p = PORTFOLIO;
  const [open, setOpen] = useState(null);

  return (
    <section id="projects">
      <div className="container">
        <div className="section-eyebrow">02 · Projects</div>
        <h2 className="section-title">Selected Projects</h2>
        <p className="section-lede">Internship work, graduate coursework, and side projects. Click any card for details.</p>
        <div className="projects-grid">
          {p.projects.map((pr, i) => {
            const expanded = open === pr.id;
            return (
              <article
                key={pr.id}
                className={`project-card card ${expanded ? "is-open" : ""}`}
                onClick={() => setOpen(expanded ? null : pr.id)}
              >
                <header className="project-head">
                  <div className="project-num mono">P/{String(i + 1).padStart(2, "0")}</div>
                  <div className="project-status mono">
                    <span className={`status-dot ${pr.status.toLowerCase().replace(/\s/g, "-")}`} />
                    {pr.status}
                  </div>
                </header>
                <div className="project-thumb">
                  <ProjectThumb id={pr.id} />
                </div>
                <div className="project-body">
                  <div className="project-kind mono">{pr.kind} · {pr.year}</div>
                  <h3 className="project-name serif">{pr.name}</h3>
                  <p className="project-blurb">{pr.blurb}</p>
                  <div className={`project-details ${expanded ? "open" : ""}`}>
                    <p className="project-details-text">{pr.details}</p>
                    <div className="project-meta-row">
                      <span className="mono dim">ROLE</span>
                      <span>{pr.role}</span>
                    </div>
                  </div>
                  <div className="project-foot">
                    <div className="project-stack">
                      {pr.stack.map((s) => (
                        <span key={s} className="tag">{s}</span>
                      ))}
                    </div>
                    <div className="project-toggle mono">{expanded ? "Less −" : "More +"}</div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
