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
import { ContactPrompt, WhatsAppButton } from "./components/ContactPrompt"

export default function App() {
  return (
    <div className="site-shell">
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <section id="skills" className="section section-dark" aria-label="Services and toolkit">
          <Skills />
        </section>
        <section id="experience" className="section section-dark" aria-label="Professional experience">
          <Experience />
        </section>
        <section id="projects" className="section section-dark" aria-label="Projects and portfolio">
          <Projects />
        </section>
        <section id="about" className="section section-dark" aria-label="About Ali Hassan">
          <About />
        </section>
        <section id="faq" className="section section-dark" aria-label="Frequently asked questions">
          <FAQ />
        </section>
        <section id="contact" className="section section-dark" aria-label="Contact Ali Hassan">
          <Contact />
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
      <ContactPrompt />
    </div>
  )
}