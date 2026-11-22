import { useEffect, useRef, useState } from "react"
import { ArrowUpRight, MessageCircle, Phone, X } from "lucide-react"
import { contactLinks } from "../data/content"

export const ContactPrompt = () => {
  const [isVisible, setIsVisible] = useState(false)
  const promptTimer = useRef<number | null>(null)

  const schedulePrompt = (delay: number) => {
    if (promptTimer.current) window.clearTimeout(promptTimer.current)
    promptTimer.current = window.setTimeout(() => setIsVisible(true), delay)
  }

  useEffect(() => {
    schedulePrompt(10000)

    return () => {
      if (promptTimer.current) window.clearTimeout(promptTimer.current)
    }
  }, [])

  const closePrompt = () => {
    setIsVisible(false)
    schedulePrompt(20000)
  }

  if (!isVisible) return null

  return (
    <div className="contact-prompt-backdrop" role="presentation" onMouseDown={closePrompt}>
      <aside className="contact-prompt" role="dialog" aria-modal="true" aria-label="Contact Ali Hassan" onMouseDown={(event) => event.stopPropagation()}>
        <button
          type="button"
          className="contact-prompt-close"
          aria-label="Close contact prompt"
          onClick={closePrompt}
        >
          <X size={16} />
        </button>
        <span className="contact-prompt-kicker"><span /> Let&apos;s talk</span>
        <h2>Have a project<br /><em>in mind?</em></h2>
        <p>Tell me what you are building and I&apos;ll help turn it into a clear next step.</p>
        <div className="contact-prompt-actions">
          <a href="#contact" className="button button-blue" onClick={closePrompt}>
            Contact me <ArrowUpRight size={15} />
          </a>
          <a href={contactLinks.whatsapp} className="button button-whatsapp" target="_blank" rel="noopener noreferrer" onClick={closePrompt}>
            <span className="whatsapp-icon"><MessageCircle size={17} /><Phone size={8} /></span> WhatsApp
          </a>
        </div>
      </aside>
    </div>
  )
}

export const WhatsAppButton = () => {
  const [isOverContent, setIsOverContent] = useState(false)
  const buttonRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    let frame = 0
    const updateVisibility = () => {
      window.cancelAnimationFrame(frame)
      frame = window.requestAnimationFrame(() => {
        const button = buttonRef.current
        if (!button) return

        const buttonBounds = button.getBoundingClientRect()
        const protectedAreas = document.querySelectorAll<HTMLElement>(
          ".service-card, .experience-stats, .experience-feature, .timeline-item, .toolkit-category, .project-card, .about-copy, .about-profile-card, .contact-intro, .contact-form-card, .footer-cta, .footer-main, .footer-bottom",
        )
        const overlapsContent = Array.from(protectedAreas).some((area) => {
          const bounds = area.getBoundingClientRect()
          return (
            bounds.width > 0 &&
            bounds.height > 0 &&
            bounds.left < buttonBounds.right &&
            bounds.right > buttonBounds.left &&
            bounds.top < buttonBounds.bottom &&
            bounds.bottom > buttonBounds.top
          )
        })

        setIsOverContent(overlapsContent)
      })
    }

    updateVisibility()
    window.addEventListener("scroll", updateVisibility, { passive: true })
    window.addEventListener("resize", updateVisibility)
    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener("scroll", updateVisibility)
      window.removeEventListener("resize", updateVisibility)
    }
  }, [])

  return (
    <a
      ref={buttonRef}
      href={contactLinks.whatsapp}
      className={`whatsapp-float${isOverContent ? " is-obscured" : ""}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Ali Hassan on WhatsApp"
      aria-hidden={isOverContent}
      tabIndex={isOverContent ? -1 : 0}
    >
      <span className="whatsapp-icon whatsapp-icon-large"><MessageCircle size={23} /><Phone size={10} /></span>
      <span className="whatsapp-float-label">WhatsApp</span>
    </a>
  )
}
