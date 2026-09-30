import Link from "next/link";

const words = ["COZY", "MATCHA", "STRAWBERRY", "CREATIVE", "SWEET", "CALM"];

export default function Home() {
  return (
    <section className="hm">
      <span className="hm-blob hm-blob-1" />
      <span className="hm-blob hm-blob-2" />

      
      <div className="hm-hero">
        <div className="fl">
          <span className="fl-tape" />
          <span className="fl-sticker fl-sticker-1">🍓</span>
          <span className="fl-sticker fl-sticker-2">🍵</span>

          
          <div
            className="fl-inner"
            style={{ "--hero-img": "url(/hero.jpg)" }}
          >
            <p className="fl-top">STUDENT · BSIT 2nd year</p>
            <p className="hm-tag">☕ WELCOME TO MY COZY CORNER</p>
            <h1 className="hm-title">
             
              
              
              <br />
              <em>Mikhaella Ang</em>
            </h1>
            <p className="hm-sub">
             Hi! I'm Mikhaella Grace G. Ang, a student passionate about learning, creating, and growing. Take a look around and discover my work and journey.
            </p>
            <div className="hm-cta">
              <Link href="/portfolio" className="hm-btn hm-btn-main">
                VIEW MY WORK
              </Link>
              <Link href="/about" className="hm-btn hm-btn-alt">
                ABOUT ME
              </Link>
            </div>
            <div className="hm-chips">
              <span>🍵 Matcha</span>
              <span>🍓 Strawberry</span>
              <span>🎧 Lo-fi</span>
            </div>
          </div>
        </div>
      </div>

      
      <div className="hm-collage">
        <div className="hm-right">
          <span className="hm-steam hm-steam-1">~</span>
          <span className="hm-steam hm-steam-2">~</span>

          <div className="hm-polaroid"> 
  <span className="hm-tape" /> 

  <div className="hm-photo">
    <img src="/image/mikhaella.jpg" alt="Profile Picture" />
  </div>

  <h3>Profile Picture</h3> 
</div>

          <div className="hm-cup">
            <span className="hm-cup-emoji">🍵</span>
            
            <h3>Matcha</h3>
          </div>

          <div className="hm-sticky">
            <h4>TODAY&apos;S MOOD</h4>
            <ul>
              <li>☑ coding</li>
              <li>☑ matcha</li>
              <li>☐ nap later</li>
            </ul>
          </div>

          <span className="hm-sticker hm-sticker-1">🍓</span>
          <span className="hm-sticker hm-sticker-2">🌿</span>
          <span className="hm-sticker hm-sticker-3">✦</span>
        </div>
      </div>

     
      <div className="hm-cards">
        <Link href="/portfolio" className="hm-card hm-card-1">
          <span className="hm-card-icon">💻</span>
          <h3>PORTFOLIO</h3>
          <p>Projects I made with love and a lot of matcha.</p>
          <b>OPEN →</b>
        </Link>
        <Link href="/about" className="hm-card hm-card-2">
          <span className="hm-card-icon">🌸</span>
          <h3>ABOUT</h3>
          <p>Get to know me, my hobbies and my goals.</p>
          <b>OPEN →</b>
        </Link>
        <Link href="/gallery" className="hm-card hm-card-3">
          <span className="hm-card-icon">📸</span>
          <h3>GALLERY</h3>
          <p>Little memories from school, events and more.</p>
          <b>OPEN →</b>
        </Link>
      </div>

     
      <div className="hm-quote">
        <span>✦</span>
        <p>&ldquo;Slow days, warm cups and small wins.&rdquo;</p>
        <span>✦</span>
      </div>

      
      <div className="hm-ribbon">
        <div className="hm-track">
          {[...words, ...words, ...words, ...words].map((w, i) => (
            <span key={i}>{w} ✦</span>
          ))}
        </div>
      </div>
    </section>
  );
}
