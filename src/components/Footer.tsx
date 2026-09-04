import { ArrowUpRight } from "lucide-react"

export const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-cta max-w-7xl mx-auto px-6">
        <div>
          <p className="eyebrow"><span /> Open to meaningful work</p>
          <h2>Let&apos;s make the<br /><em>next thing useful.</em></h2>
        </div>
        <a href="#contact" className="button button-blue footer-cta-button">Start a conversation <ArrowUpRight size={17} /></a>
      </div>

      <div className="footer-main max-w-7xl mx-auto px-6">
        <div className="footer-brand">
          <a href="#top" className="brand-mark">
            <span className="footer-portrait"><img src="/ali-hassan.jpg" alt="Ali Hassan" /></span>
            <span><strong>Ali</strong><small>Hassan / Developer</small></span>
          </a>
          <p>Full-stack development for products, platforms, and business systems that need to work.</p>
        </div>
        <div className="footer-column">
          <span>Explore</span>
          <a href="#skills">Services</a>
          <a href="#projects">Portfolio</a>
          <a href="#experience">Experience</a>
        </div>
        <div className="footer-column">
          <span>Connect</span>
          <a href="#about">About</a>
          <a href="#faq">FAQ</a>
          <a href="mailto:alihassantariq107@gmail.com">Email me</a>
        </div>
        <div className="footer-column">
          <span>Elsewhere</span>
          <a href="https://github.com/AliHassan-code" target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={14} /></a>
          <a href="https://www.linkedin.com/in/ali-hassan-choudhary/" target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={14} /></a>
        </div>
      </div>

      <div className="footer-bottom max-w-7xl mx-auto px-6">
        <span>© {new Date().getFullYear()} Ali Hassan</span>
        <span>Built with React, Node.js & care</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  )
}