import PORTFOLIO from "@/data/portfolio";

export default function Footer() {
  const p = PORTFOLIO;
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="mono dim">© 2026 · Ha Lim Chung</div>
        <div className="footer-links mono">
          <a href={`mailto:${p.email}`}>Email</a>
          <span className="dim">·</span>
          <a href={p.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <span className="dim">·</span>
          <a href={p.github} target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
