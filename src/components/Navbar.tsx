import { useEffect, useState } from "react"
import { ArrowUpRight, Menu, X } from "lucide-react"
import { contactLinks } from "../data/content"

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    if (!menuOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false)
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [menuOpen])

  return (
    <nav className={`site-nav${menuOpen ? " menu-open" : ""}`} aria-label="Main navigation">
      <div className="nav-inner">
        <a href="#top" className="brand-mark" aria-label="Ali Hassan home" onClick={closeMenu}>
          <span className="brand-icon"><img src="/ali-hassan.jpg" alt="" width={842} height={1184} /></span>
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
          <a href={contactLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            GH
          </a>
          <a href={contactLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            IN
          </a>
          <a href="#contact" className="button button-blue nav-cta">Let's talk <ArrowUpRight size={16} /></a>
        </div>
        <button
          type="button"
          className="mobile-menu-toggle"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>
      <div
        id="mobile-navigation"
        className="mobile-nav-panel"
        aria-hidden={!menuOpen}
        inert={!menuOpen}
      >
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