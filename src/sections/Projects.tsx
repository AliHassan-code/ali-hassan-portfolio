import { ArrowUpRight, Check } from "lucide-react"
import { projects } from "../data/content"

export const Projects = () => {
  return (
    <section className="projects-section py-24 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="projects-heading">
          <p className="eyebrow"><span /> Selected work</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Projects &amp; Portfolio</h2>
          <p>Business software and client projects built around practical workflows.</p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article key={project.id} className="project-card">
              <div className="project-preview">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.title} project preview`}
                    width={640}
                    height={360}
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <div className="project-placeholder">
                    <span>Project / 0{project.id}</span>
                    <strong>Screenshot pending</strong>
                  </div>
                )}
              </div>

              <div className="project-card-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags" aria-label="Technologies">
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <ul className="project-features">
                  {project.features.map((feature) => (
                    <li key={feature}><Check size={14} aria-hidden="true" />{feature}</li>
                  ))}
                </ul>
              </div>

              {(project.demoUrl || project.githubUrl) && (
                <div className="project-actions">
                  {project.demoUrl && (
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      Live demo <ArrowUpRight size={15} />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      GitHub repository <ArrowUpRight size={15} />
                    </a>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
