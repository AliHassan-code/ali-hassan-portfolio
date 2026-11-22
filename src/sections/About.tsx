import { ArrowUpRight, Check, MapPin } from "lucide-react"

const profileImage = "/ali-hassan.jpg"

export const About = () => {
  return (
    <section className="about-section py-24 md:py-32">
      <div className="about-inner max-w-7xl mx-auto px-6">
        <div className="about-copy">
          <p className="eyebrow"><span /> A developer with a product mindset</p>
          <h2>About Ali Hassan,<br /><em>web developer.</em></h2>
          <p className="about-lede">I am Ali Hassan, a React.js and full-stack web developer in Pakistan. I build business software and websites that are straightforward to use and dependable behind the scenes.</p>
          <p className="about-body">My work spans point-of-sale and booking systems, responsive React.js interfaces, and applications built with ASP.NET Core, .NET, and the MERN stack. I focus on clear workflows, maintainable APIs and data models, and interfaces that make complex tasks easier to use.</p>
          <a href="#contact" className="button button-blue about-cta">Let&apos;s work together <ArrowUpRight size={16} /></a>
        </div>

        <div className="about-profile-card">
          <div className="about-card-top"><span>Profile / 01</span><MapPin size={18} /></div>
          <div className="about-monogram"><img src={profileImage} alt="Portrait of Ali Hassan, Full Stack Developer" width={842} height={1184} loading="lazy" decoding="async" /></div>
          <div className="about-profile-meta"><strong>Ali Hassan</strong><span>Full-Stack / .NET Developer</span></div>
          <div className="about-stats">
            <div><strong>Full-stack</strong><span>Product delivery</span></div>
            <div><strong>.NET + MERN</strong><span>Core stacks</span></div>
            <div><strong>Web + desktop</strong><span>Application types</span></div>
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