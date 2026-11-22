import { ArrowDown, ArrowUpRight, Code2, Database, Layers3 } from "lucide-react"

const profileImage = "/ali-hassan.jpg"

export const Hero = () => {
  return (
    <section id="top" className="hero-section">
      <div className="hero-grid-pattern" />
      <div className="hero-content">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Full-stack systems, thoughtfully built</p>
          <h1>Ali Hassan<br /><span>React.js</span><br /><strong>Developer in Pakistan.</strong></h1>
          <p className="hero-description">I build responsive React.js websites and full-stack web applications with JavaScript, ASP.NET Core, .NET, and the MERN stack, from data model to launch.</p>
          <div className="hero-actions">
            <a href="#projects" className="button button-blue">View my work <ArrowUpRight size={16} /></a>
            <a href="#contact" className="button button-quiet">Start a conversation <ArrowUpRight size={16} /></a>
          </div>
          <p className="client-note">From data models and APIs to responsive website interfaces.</p>
        </div>
        <div className="hero-visual">
          <div className="hero-glow" />
          <div className="hero-portrait-frame">
            <img src={profileImage} alt="Portrait of Ali Hassan, Full Stack Developer" className="hero-portrait" width={842} height={1184} fetchPriority="high" decoding="async" />
          </div>
          <div className="floating-chip chip-one"><Code2 size={16} /> API-first</div>
          <div className="floating-chip chip-two"><Database size={16} /> Data-driven</div>
          <div className="floating-chip chip-three"><Layers3 size={16} /> Built to scale</div>
        </div>
      </div>
      <a href="#about" className="scroll-cue" aria-label="Scroll to about"><ArrowDown size={16} /> Scroll to explore</a>
      <div className="hero-dots">+<br />+<br />+</div>
    </section>
  )
}