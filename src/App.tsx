import React from "react"
import { Navbar } from "./components/Navbar"
import { Hero } from "./sections/Hero"
import { About } from "./sections/About"
import { Skills } from "./sections/Skills"
import { Experience } from "./sections/Experience"
import { Projects } from "./sections/Projects"
import { FAQ } from "./sections/FAQ"
import { Contact } from "./sections/Contact"
import { Footer } from "./components/Footer"

export default function App() {
  return (
    <div className="site-shell">
      <Navbar />
      <main>
        <Hero />
        <section id="skills" className="section section-dark">
          <Skills />
        </section>
        <section id="experience" className="section section-dark">
          <Experience />
        </section>
        <section id="projects" className="section section-dark">
          <Projects />
        </section>
        <section id="about" className="section section-dark">
          <About />
        </section>
        <section id="faq" className="section section-dark">
          <FAQ />
        </section>
        <section id="contact" className="section section-dark">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  )
}