import React from "react"
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { Hero } from "./sections/Hero"
import { About } from "./sections/About"
import { Skills } from "./sections/Skills"
import { Experience } from "./sections/Experience"
import { Projects } from "./sections/Projects"
import { Contact } from "./sections/Contact"
import { Footer } from "./components/Footer"
import { useLocation } from "react-router-dom"

export default function App() {
  const navigate = useNavigate()
  const location = useLocation()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <Router>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <span className="logo-icon">🚀</span> AliHassan
          </Link>
          <ul className="navbar-links">
            <li>
              <Link to="#about" onClick={() => scrollToSection("about")}>About</Link>
            </li>
            <li>
              <Link to="#skills" onClick={() => scrollToSection("skills")}>Skills</Link>
            </li>
            <li>
              <Link to="#experience" onClick={() => scrollToSection("experience")}>Experience</Link>
            </li>
            <li>
              <Link to="#projects" onClick={() => scrollToSection("projects")}>Projects</Link>
            </li>
            <li>
              <Link to="#contact" onClick={() => scrollToSection("contact")}>Contact</Link>
            </li>
          </ul>
          <div className="navbar-cta">
            <Link to="#contact" className="btn btn-primary">Contact</Link>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <section id="about" className="section">
          <About />
        </section>
        <section id="skills" className="section">
          <Skills />
        </section>
        <section id="experience" className="section">
          <Experience />
        </section>
        <section id="projects" className="section">
          <Projects />
        </section>
        <section id="contact" className="section">
          <Contact />
        </section>
      </main>

      <Footer />
    </Router>
  )
}