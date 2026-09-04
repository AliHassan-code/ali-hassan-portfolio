import { useState } from "react"
import { ArrowUpRight, Mail, Phone } from "lucide-react"

export const Contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus(null)

    const result = validateForm(name, email, message)
    if (result !== true) {
      setStatus(result)
      return
    }

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
            <a href="mailto:alihassantariq107@gmail.com"><Mail size={17} /> alihassantariq107@gmail.com</a>
            <a href="tel:03273911676"><Phone size={17} /> 0327-3911676</a>
          </div>
          <div className="contact-signal"><span /> Usually replies within 1 business day</div>
        </div>

        <div className="contact-form-card">
          <div className="contact-form-header"><span>Project inquiry</span><span>01 / 01</span></div>

          {status && (
            <div className="contact-status p-4 rounded bg-primary/5 text-primary mb-4">
              {status}
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-8">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="you@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
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
            >
              Send message <ArrowUpRight size={17} />
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