import { useState } from "react"
import { ArrowUpRight, Mail, MessageCircle, Phone } from "lucide-react"
import { contactLinks } from "../data/content"

export const Contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus(null)

    const result = validateForm(name, email, message)
    if (result !== true) {
      setStatus(result)
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      })

      const data = await response.json()

      if (!response.ok) {
        setStatus(data.error || "Failed to submit")
        return
      }

      setStatus("Message sent successfully!")
      setName("")
      setEmail("")
      setMessage("")
    } catch (error) {
      console.error("Error:", error)
      setStatus("Error sending message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="contact-section py-24 md:py-32 bg-white">
      <div className="contact-grid-lines" />
      <div className="contact-orbit contact-orbit-one" />
      <div className="contact-orbit contact-orbit-two" />
      <div className="contact-inner max-w-7xl mx-auto px-6">
        <div className="contact-intro">
          <p className="eyebrow"><span /> Let's build something useful</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Have a problem<br /><em>worth solving?</em></h2>
          <p className="contact-lede">Tell me what you are building, where it is stuck, or what you want to improve. I will bring a practical next step to the conversation.</p>
          <div className="contact-details">
            <a href={`mailto:${contactLinks.email}`}><Mail size={17} /> {contactLinks.email}</a>
            <a href={`tel:${contactLinks.phone}`}><Phone size={17} /> 0327-3911676</a>
          </div>
          <div className="contact-socials" aria-label="Contact and social links">
            <a href={contactLinks.whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle size={16} /> WhatsApp</a>
            <a href={contactLinks.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={15} /></a>
            <a href={contactLinks.github} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={15} /></a>
          </div>
          <div className="contact-signal"><span /> Usually replies within 1 business day</div>
        </div>

        <div className="contact-form-card">
          <div className="contact-form-header"><span>Project inquiry</span><span>01 / 01</span></div>

          {status && (
            <div className="contact-status p-4 rounded bg-primary/5 text-primary mb-4" role="status" aria-live="polite">
              {status}
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-8">
            <div>
              <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="you@email.com"
              />
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="contact-message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary h-40 resize-none"
                placeholder="Your message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="button button-blue contact-submit w-full py-4 mt-6"
              disabled={isSubmitting}
              aria-busy={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send message"} {!isSubmitting && <ArrowUpRight size={17} />}
            </button>
          </form>

        </div>
      </div>
    </section>
  )
}

const validateForm = (name: string, email: string, message: string) => {
  if (!name.trim()) return "Please enter your name"
  if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    return "Please enter a valid email"
  if (!message.trim()) return "Please enter a message"
  return true
}