import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { faqItems } from "../data/content"

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="faq-section py-24 md:py-32">
      <div className="faq-inner max-w-3xl mx-auto px-6">
        <div className="faq-heading">
          <p className="eyebrow"><span /> Clear answers, useful next steps</p>
          <h2>Frequently asked<br /><em>questions.</em></h2>
          <p>Everything you need to know before we turn an idea into something people can use.</p>
        </div>

        <div className="faq-list">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index

            return (
              <div className={`faq-item${isOpen ? " is-open" : ""}`} key={item.question}>
                <button
                  type="button"
                  className="faq-trigger"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span className="faq-number">0{index + 1}</span>
                  <span className="faq-question">{item.question}</span>
                  <ChevronDown size={17} className="faq-chevron" />
                </button>
                <div className="faq-answer" aria-hidden={!isOpen}>
                  <p>{item.answer}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
