import { useState } from "react"
import { ArrowUpRight, Menu, X } from "lucide-react"

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className={`site-nav${menuOpen ? " menu-open" : ""}`}>
      <div className="nav-inner">
        <a href="#top" className="brand-mark" aria-label="Ali Hassan home" onClick={closeMenu}>
          <span className="brand-icon">AH</span>
          <span>
            <strong>Ali</strong>
            <small>Hassan / Developer</small>
          </span>
        </a>
        <ul className="nav-links">
          <li><a href="#top">Home</a></li>
          <li><a href="#skills">Services</a></li>
          <li><a href="#projects">Portfolio</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
        </ul>
        <div className="nav-actions">
          <a href="https://github.com/AliHassan-code" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            GH
          </a>
          <a href="https://www.linkedin.com/in/ali-hassan-choudhary/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            IN
          </a>
          <a href="#contact" className="button button-blue nav-cta">Let's talk <ArrowUpRight size={16} /></a>
        </div>
        <button
          type="button"
          className="mobile-menu-toggle"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>
      <div className="mobile-nav-panel">
        <a href="#top" onClick={closeMenu}>Home</a>
        <a href="#skills" onClick={closeMenu}>Services</a>
        <a href="#projects" onClick={closeMenu}>Portfolio</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#experience" onClick={closeMenu}>Experience</a>
        <a href="#faq" onClick={closeMenu}>FAQ</a>
        <a href="#contact" className="button button-blue mobile-nav-cta" onClick={closeMenu}>Let&apos;s talk <ArrowUpRight size={16} /></a>
      </div>
    </nav>
  )
}