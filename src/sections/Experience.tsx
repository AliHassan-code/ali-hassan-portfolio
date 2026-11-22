import { ArrowUpRight, CheckCircle2 } from "lucide-react"
import { experience } from "../data/content"

export const Experience = () => {
  const currentRole = experience[0]

  return (
    <section className="experience-section py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="section-heading-row experience-heading">
          <div>
            <p className="eyebrow"><span /> The work behind the work</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience that<br /><em>ships.</em></h2>
          </div>
          <p className="section-intro">I bring product thinking to technical decisions, keeping each system clear enough to evolve and useful enough to matter.</p>
        </div>

        <div className="experience-layout">
          <div className="experience-stats">
            <div><strong>Full-stack</strong><span>Product delivery</span></div>
            <div><strong>Business</strong><span>Systems & workflows</span></div>
            <div><strong>Web + desktop</strong><span>Application development</span></div>
          </div>
          <article className="experience-feature">
            <div className="experience-feature-head"><span>Professional focus</span><span className="status-dot">Available for selected work</span></div>
            <h3>{currentRole.role}</h3>
            <p className="experience-summary">Building and maintaining web applications, APIs, and business software from data models through deployment.</p>
            <div className="experience-capabilities">
              <span>Core delivery</span>
              <div><b>01</b> Architecture</div>
              <div><b>02</b> APIs & data</div>
              <div><b>03</b> Product UI</div>
              <div><b>04</b> Azure delivery</div>
            </div>
            <a href="#contact" className="button button-blue">Work with me <ArrowUpRight size={16} /></a>
          </article>
        </div>

        <div className="timeline-list">
          {currentRole.points.map((point, index) => (
            <div className="timeline-item" key={point}>
              <div className="timeline-index"><span>0{index + 1}</span><CheckCircle2 size={17} className="timeline-icon" /></div>
              <div className="timeline-content">
                <span className="timeline-kicker">Delivery point</span>
                <p>{point}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}