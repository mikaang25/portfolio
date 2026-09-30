"use client";

import Link from "next/link";
import { useEffect, useState } from "react";


const projects = [
  {
    id: "a",
    title: "CuddleFluff",
    code: "#F9D1D9",
    emoji: "🍓",
    img: "/image/cuddlefluff.jpg",
    tags: ["Next.js", "CSS"],
    short:
      "A project we created to bring our ideas and creativity to life while developing our skills through design and teamwork.",
    
    details: [
      "Paste the full description of your project here.",
      "Explain what problem it solves, who it is for, and how you built it.",
    ],
    features: ["Cozy design", "Gallery page", "Login page"],
    link: "/cuddlefluff/index.html",
  },
  {
    id: "b",
    title: "CuddlyBuddy",
    code: "#838F58",
    emoji: "🍵",
    img: "/image/cuddlybuddy.jpg",
    tags: ["React", "JavaScript"],
    short: "A creative e-commerce project where we combined product presentation, web design, and collaboration.",
    details: [
      "Paste the full description of your second project here.",
      "You can add as many paragraphs as you want.",
    ],
    features: ["Feature one", "Feature two"],
    link: "/cuddlybuddy/home.html",
  },
];

export default function Portfolio() {
  const [open, setOpen] = useState(null);

  
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(null);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const [a, b] = projects;

  const Card = ({ p }) => (
    <article className={`pf-card pf-card-${p.id}`}>
      <span className="pf-sticker">{p.emoji}</span>
      <div className="pf-img">
  {p.img ? (
    <img src={p.img} alt={p.title} />
  ) : (
    "PROJECT IMAGE"
  )}
</div>

      <div className="pf-tags">
        {p.tags.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>
      <p className="pf-desc">{p.short}</p>

      <div className="pf-meta">
        <small>{p.code}</small>
        <h3>{p.title}</h3>
      </div>

      <button
        className="pf-open"
        onClick={() => (p.link ? window.open(p.link, "_blank") : setOpen(p))}
      >
        OPEN PROJECT ↗
      </button>
    </article>
  );

  return (
    <>
      <section className="pf">
        <div className="pf-window">
          <div className="pf-topbar">
            <span />
            <span />
            <span />
          </div>

          <div className="pf-grid">
            
            <div className="pf-intro">
              <div className="pf-dot" />
              <h1 className="pf-title">
                MY
                <br />
                WORKS
              </h1>
              <p className="pf-intro-text">
                is a budget tracker that asks the user for their weekly allowance and their expenses for 5 days. It then calculates the total and average expenses and tells the user whether they saved money, spent exactly their allowance, or overspent.
              </p>
            </div>

            
            <Card p={a} />

            
            <Card p={b} />

            
            <div className="pf-text">
              <p>
                 is an innovative e-commerce website that recommends teddy bears based on the user’s current mood, creating a more personal and emotional shopping experience.
              </p>
              <Link href="/gallery" className="pf-btn">
                SEE GALLERY
              </Link>
            </div>
          </div>
        </div>
      </section>

     
      {open && (
        <div className="pm-overlay" onClick={() => setOpen(null)}>
          <div
            className={`pm-box pm-${open.id}`}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="pm-close" onClick={() => setOpen(null)}>
              ✕
            </button>

            <div
              className="pm-img"
              style={open.img ? { backgroundImage: `url(${open.img})` } : {}}
            >
              {!open.img && <span>{open.emoji}</span>}
            </div>

            <p className="pm-code">{open.code}</p>
            <h2 className="pm-title">{open.title}</h2>

            <div className="pm-tags">
              {open.tags.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>

            <div className="pm-body">
              {open.details.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>

            {open.features.length > 0 && (
              <>
                <h3 className="pm-label">FEATURES</h3>
                <ul className="pm-list">
                  {open.features.map((f) => (
                    <li key={f}>✦ {f}</li>
                  ))}
                </ul>
              </>
            )}

            {open.link && (
              <a
                href={open.link}
                target="_blank"
                rel="noreferrer"
                className="pm-link"
              >
                VISIT PROJECT ↗
              </a>
            )}
          </div>
        </div>
      )}
    </>
  );
}
