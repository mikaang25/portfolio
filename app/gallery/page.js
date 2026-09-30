"use client";

import { useState } from "react";

const filters = ["All", "Photos", "School Events", "Campus life"];

const items = [
  {
    title: "Awards Event",
    tag: "Photos",
    emoji: "📸",
    size: "tall",
    src: "/image/Awards.jpg",
  },
  {
    title: "Bahandi Night",
    tag: "School Events",
    emoji: "🍓",
    size: "short",
    src: "/image/Events.jpg",
  },
  {
    title: "School Moments",
    tag: "Campus life",
    emoji: "🌅",
    size: "tall",
    src: "/image/life.jpg",
  },
  {
    title: "Matcha Moments",
    tag: "Photos",
    emoji: "🍵",
    size: "short",
    src: "/image/matcha.jpg",
  },
  {
    title: "BSIT-1f",
    tag: "School Events",
    emoji: "🍓",
    size: "tall",
    src: "/image/section1f.jpg",
  },
  {
    title: "Campus Moments",
    tag: "Campus life",
    emoji: "🌸",
    size: "short",
    src: "/image/campusmoments.jpg",
  },
  {
    title: "Cozy Day",
    tag: "Photos",
    emoji: "☕",
    size: "tall",
    src: "/image/random.jpg",
  },
  {
    title: "Creative Moments",
    tag: "School Events",
    emoji: "🎨",
    size: "short",
    src: "/image/creative.jpg",
  },
  {
    title: "Little Memories",
    tag: "Campus life",
    emoji: "🌷",
    size: "tall",
    src: "/image/littlememo.jpg",
  },
];

const words = ["MEMORIES", "MATCHA", "Campus", "MOMENTS", "CREATIVE", "COZY"];

export default function Gallery() {
  const [active, setActive] = useState("All");

  const shown = items.filter((it) => active === "All" || it.tag === active);

  return (
    <section className="gl">
      <span className="gl-blob gl-blob-1" />
      <span className="gl-blob gl-blob-2" />

      <div className="gl-wrap">
        
        <div className="gl-head">
          <span className="gl-spark gl-spark-1">✦</span>
          <span className="gl-spark gl-spark-2">✦</span>
          <p className="gl-tag">A LITTLE COLLECTION OF</p>
          <h1 className="gl-title">
            MY <em>GALLERY</em>
          </h1>
          <p className="gl-sub">
            Snapshots of campus life, school events, and random moments worth remembering.
          </p>
        </div>

        
        <div className="gl-filters">
          {filters.map((f) => (
            <button
              key={f}
              className={active === f ? "on" : ""}
              onClick={() => setActive(f)}
            >
              {f.toUpperCase()}
            </button>
          ))}
        </div>

        
        <div className="gl-grid">
          {shown.map((it, i) => (
            <article key={it.title} className={`gl-card gl-c${i % 3}`}>
              <span className="gl-tape" />
              {i % 3 === 0 && <span className="gl-sticker">🍓</span>}
              {i % 3 === 2 && <span className="gl-sticker">🍵</span>}
              <div
                className={`gl-img gl-${it.size}`}
                style={it.src ? { backgroundImage: `url(${it.src})` } : {}}
              >
                {!it.src && it.emoji}
              </div>
              <div className="gl-cap">
                <h3>{it.title}</h3>
                <small>{it.tag.toUpperCase()}</small>
              </div>
            </article>
          ))}
        </div>

        
        <div className="gl-ribbon">
          <div className="gl-track">
            {[...words, ...words, ...words, ...words].map((w, i) => (
              <span key={i}>{w} ✦</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
