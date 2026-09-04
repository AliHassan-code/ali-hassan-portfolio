import { motion } from "framer-motion"
import { ArrowDown, ArrowUpRight, Code2, Database, Layers3 } from "lucide-react"

const robotImage = "https://www.figma.com/api/mcp/asset/6f6490f9-f70b-47e2-a0b9-ee0e48c88573.png"

export const Hero = () => {
  return (
    <section id="top" className="hero-section">
      <div className="hero-grid-pattern" />
      <div className="hero-content">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Full-stack systems, thoughtfully built</p>
          <h1>Transforming <span>ideas</span><br />into <strong>digital products.</strong></h1>
          <p className="hero-description">I design and build fast, reliable web applications with .NET, React, and the MERN stack, from first database schema to polished launch.</p>
          <div className="hero-actions">
            <a href="#projects" className="button button-blue">View my work <ArrowUpRight size={16} /></a>
            <a href="#contact" className="button button-quiet">Start a conversation <ArrowUpRight size={16} /></a>
          </div>
          <div className="client-note"><span className="avatar-stack"><i /><i /><i /></span> 5+ years turning complex requirements into clear software</div>
        </div>
        <div className="hero-visual">
          <div className="hero-glow" />
          <img src={robotImage} alt="Abstract robot illustration from the reference theme" />
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