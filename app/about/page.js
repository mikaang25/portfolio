import Link from "next/link";

const words = ["MATCHA", "STRAWBERRY", "CREATIVE", "DEVELOPER", "DESIGN", "COFFEE"];

export default function About() {
  return (
    <section className="ab">
      <span className="ab-blob ab-blob-1" />
      <span className="ab-blob ab-blob-2" />

      <div className="ab-wrap">
        {/* photo (top-left) */}
        <div className="ab-photo">
          <span className="ab-tape" />
          <span className="ab-sticker ab-sticker-1">🍓</span>
          <span className="ab-sticker ab-sticker-2">🍵</span>
          <div className="ab-img">
  <img src="/image/mikhaella.jpg" alt="Mikhaella Grace G. Ang" />
</div>
          <div className="ab-name">
            <h3>Mikhaella Ang</h3>
            
          </div>
        </div>

        {/* bio (beside photo) */}
        <div className="ab-box ab-bio-box">
          <span className="ab-spark ab-spark-1">✦</span>S
          <span className="ab-spark ab-spark-2">✦</span>
          <p className="ab-tag">HELLO, NICE TO MEET YOU</p>
          <h1 className="ab-title">
            ABOUT <em>ME</em>
          </h1>
          <p className="ab-bio">
            I’m Mikhaella Grace G. Ang, a second-year BSIT student with a genuine interest in computers and technology. My curiosity about how technology works has inspired me to explore different areas of the tech field, from software to hardware.

I enjoy exploring, discovering new things, and learning through hands-on experiences. I’m always open to learning new skills and challenging myself through different projects. Each project gives me an opportunity to improve, gain experience, and grow both personally and academically.

As I continue my journey in Information Technology, I hope to expand my knowledge, strengthen my skills, and discover the areas of technology that I’m most passionate about.
          </p>
          <Link href="/portfolio" className="ab-btn">
            SEE MY WORKS
          </Link>
        </div>

        {/* currently (under photo) */}
        <div className="ab-box ab-now">
          <h2 className="ab-label">CURRENTLY</h2>
          <ul>
            <li><span>🍵</span> Sipping matcha</li>
            <li><span>💻</span> Building my portfolio</li>
            <li><span>🎧</span> Lo-fi on repeat</li>
          </ul>
        </div>

        {/* skills */}
        <div className="ab-box ab-skills">
          <h2 className="ab-label">SKILLS</h2>
          <div className="ab-chips">
            <span>TO BE ANNOUCED</span>
            
          </div>
        </div>

        {/* stats */}
        <div className="ab-box ab-stats">
          <div className="ab-stat">
            <strong>1 and a Half</strong>
            <small>YEARS LEARNING</small>
          </div>
          <div className="ab-stat">
            <strong>2 mwheh</strong>
            <small>PROJECTS</small>
          </div>
          <div className="ab-stat">
            <strong>1000%</strong>
            <small>MATCHA LOVER</small>
          </div>
        </div>

        {/* trio (below About Me) */}
        <div className="ab-trio">
          <div className="ab-box ab-hobby">
            <span className="ab-icon">🎨</span>
            <h2 className="ab-label">HOBBIES</h2>
            <p>I enjoy playing the guitar, reading novels, comics, and fan fiction, watching movies, especially horror and gory ones, café hopping, and exploring new places..</p>
          </div>
          <div className="ab-box ab-goal">
            <span className="ab-icon">🌱</span>
            <h2 className="ab-label">GOALS</h2>
            <p>My goal is to keep learning, improve my skills, and explore different areas of technology while gaining experience through projects and new challenges that will help me grow and prepare for my future career.</p>
          </div>
          <div className="ab-box ab-fun">
            <span className="ab-icon">✨</span>
            <h2 className="ab-label">FUN FACT</h2>
            <p>I can spend hours reading, watching, or playing without noticing the time, I easily get lost in my own little world.</p>
          </div>
        </div>

        {/* scrolling ribbon */}
        <div className="ab-ribbon">
          <div className="ab-track">
            {[...words, ...words, ...words, ...words].map((w, i) => (
              <span key={i}>{w} ✦</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}