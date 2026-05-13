"use client";
import { useState } from "react";
import PORTFOLIO from "@/data/portfolio";
import { ArrowUpRight, Mail, Copy } from "./Icons";

function CopyEmail({ email }) {
  const [copied, setCopied] = useState(false);
  const onClick = () => {
    navigator.clipboard?.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    });
  };
  return (
    <button onClick={onClick} className="copy-email mono" aria-label="Copy email">
      <Copy style={{ width: 11, height: 11 }} />
      {copied ? "copied" : "copy"}
    </button>
  );
}

export default function Contact() {
  const p = PORTFOLIO;
  return (
    <section id="contact">
      <div className="container">
        <div className="section-eyebrow">06 · Contact</div>
        <h2 className="section-title serif">Let&apos;s talk.</h2>
        <p className="section-lede">I&apos;m open to internships and analytics roles. The fastest way to reach me is email.</p>
        <div className="contact-card card">
          <div className="contact-row">
            <div className="contact-label mono">EMAIL</div>
            <div className="contact-value">
              <a href={`mailto:${p.email}`}>{p.email}</a>
              <CopyEmail email={p.email} />
            </div>
          </div>
          <div className="contact-row">
            <div className="contact-label mono">LINKEDIN</div>
            <div className="contact-value">
              <a href={p.linkedin} target="_blank" rel="noreferrer">
                linkedin.com/in/ha-lim-chung <ArrowUpRight style={{ width: 13, height: 13 }} />
              </a>
            </div>
          </div>
          <div className="contact-row">
            <div className="contact-label mono">GITHUB</div>
            <div className="contact-value">
              <a href={p.github} target="_blank" rel="noreferrer">
                github.com/wjdgkfla <ArrowUpRight style={{ width: 13, height: 13 }} />
              </a>
            </div>
          </div>
          <div className="contact-row">
            <div className="contact-label mono">BASED</div>
            <div className="contact-value">{p.location}</div>
          </div>
          <a href={`mailto:${p.email}`} className="btn btn-accent contact-cta">
            <Mail style={{ width: 15, height: 15 }} /> Start a conversation
          </a>
        </div>
      </div>
    </section>
  );
}
