import { useState } from "react"
import { contactForm } from "../../data/content"

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
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-2xl mx-auto px-6">
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Contact</h2>
          <p className="text-lg text-gray-600">Get in touch or fill out the form below</p>

          {status && (
            <div className="p-4 rounded bg-primary/5 text-primary mb-4">
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
              className="btn btn-primary w-full py-4 mt-6"
            >
              Send Message
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-medium mb-4">Contact Details</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-4">
                    <Mail width={20} height={20} className="text-primary" />
                    <span>
                      alihassantariq107@gmail.com
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone width={20} height={20} className="text-primary" />
                    <span>0327-3911676</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-4">Socials</h3>
                <div className="space-y-3">
                  <a
                    href="https://github.com/AliHassan-code"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:underline"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ali-hassan-choudhary/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:underline"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const validateForm = (name: string, email: string, message: string) => {
  if (!name.trim()) return "Please enter your name"
  if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    "Please enter a valid email"
  if (!message.trim()) return "Please enter a message"
  return true
}