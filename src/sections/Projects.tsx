import { projects } from "../data/content"

export const Projects = () => {
  return (
    <section className="projects-section py-24 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Projects & Portfolio</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
 showcase of built applications and systems
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.id}
              className="project-card group rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="project-art aspect-video rounded-t-xl bg-primary/10">
                <span className="project-art-label">System / 0{project.id}</span>
                <span className="project-art-mark">{project.id === 1 ? "POS" : "MERN"}</span>
                <span className="project-art-line project-art-line-one" />
                <span className="project-art-line project-art-line-two" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs bg-primary/5 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-6 border-t border-gray-100">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  View on GitHub
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}