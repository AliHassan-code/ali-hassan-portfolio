import { ArrowUpRight, Code2, Database, Layers3 } from "lucide-react"
import { services, skillCategories } from "../data/content"

const serviceIcons = [Code2, Layers3, Database]

export const Skills = () => {
  return (
    <section className="services-section py-24 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="section-heading-row">
          <div>
            <p className="eyebrow"><span /> What I build</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Services for ideas<br />that need to work.</h2>
          </div>
          <p className="section-intro">Practical engineering across product design, backend systems, and the interfaces that connect them.</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = serviceIcons[index]
            return (
              <article key={service.number} className="service-card">
                <div className="service-card-top"><span>{service.number}</span><Icon size={24} /></div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul>
                  {service.details.map((detail) => <li key={detail}>{detail}</li>)}
                </ul>
                <a href="#contact" aria-label={`Ask about ${service.title}`}><ArrowUpRight size={18} /></a>
              </article>
            )
          })}
        </div>

        <div className="toolkit-panel">
          <div className="toolkit-heading">
            <span className="skills-label">Toolkit</span>
            <h3>Tools I reach for<br /><em>every day.</em></h3>
            <p>A practical stack shaped around building, shipping, and supporting real products.</p>
          </div>
          <div className="toolkit-categories">
            {skillCategories.map((category, index) => (
              <div className="toolkit-category" key={category.title}>
                <div className="toolkit-category-head"><span>0{index + 1}</span><span>{category.items.length} tools</span></div>
                <h4>{category.title}</h4>
                <div className="skills-list">
                  {category.items.map((item) => <span key={item}>{item}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}