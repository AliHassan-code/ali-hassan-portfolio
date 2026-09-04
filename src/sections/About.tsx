import { ArrowUpRight, Check, MapPin } from "lucide-react"

const profileImage = "/ali-hassan.jpg"

export const About = () => {
  return (
    <section className="about-section py-24 md:py-32">
      <div className="about-inner max-w-7xl mx-auto px-6">
        <div className="about-copy">
          <p className="eyebrow"><span /> A developer with a product mindset</p>
          <h2>Good software makes<br /><em>complex things clear.</em></h2>
          <p className="about-lede">I am Ali Hassan, a full-stack developer focused on building business software that feels straightforward to use and dependable behind the scenes.</p>
          <p className="about-body">For more than five years, I have worked across retail, hospitality, and real estate, connecting thoughtful interfaces with solid APIs, useful data models, and deployments that can grow with the team using them.</p>
          <a href="#contact" className="button button-blue about-cta">Let&apos;s work together <ArrowUpRight size={16} /></a>
        </div>

        <div className="about-profile-card">
          <div className="about-card-top"><span>Profile / 01</span><MapPin size={18} /></div>
          <div className="about-monogram"><img src={profileImage} alt="Ali Hassan" /></div>
          <div className="about-profile-meta"><strong>Ali Hassan</strong><span>Full-Stack / .NET Developer</span></div>
          <div className="about-stats">
            <div><strong>5+</strong><span>Years experience</span></div>
            <div><strong>2</strong><span>Primary stacks</span></div>
            <div><strong>∞</strong><span>Curiosity</span></div>
          </div>
          <div className="about-focus">
            <span>Current focus</span>
            <ul>
              <li><Check size={14} /> Product-minded engineering</li>
              <li><Check size={14} /> Clear, maintainable systems</li>
              <li><Check size={14} /> Interfaces people enjoy using</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}