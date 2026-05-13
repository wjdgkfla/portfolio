"use client";
import { useState, useEffect } from "react";
import PORTFOLIO from "@/data/portfolio";
import { ArrowUpRight } from "./Icons";

const links = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "leadership", label: "Leadership" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const els = links.map((l) => document.getElementById(l.id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="#home" className="nav-brand">
          <span className="nav-brand-dot" />
          <span>Ha Lim Chung</span>
          <span className="mono dim" style={{ marginLeft: 4, fontSize: 12 }}>· portfolio</span>
        </a>
        <nav className="nav-links">
          {links.map((l) => (
            <a key={l.id} href={`#${l.id}`} className={active === l.id ? "active" : ""}>
              {l.label}
            </a>
          ))}
        </nav>
        <a href={`mailto:${PORTFOLIO.email}`} className="nav-cta">
          Get in touch <ArrowUpRight style={{ width: 14, height: 14 }} />
        </a>
      </div>
    </header>
  );
}
