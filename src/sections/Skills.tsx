import { skillCategories } from "../data/content"

export const Skills = () => {
  return (
    <section className="py-24 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Full-Stack Development with .NET ecosystem and MERN stack, cloud deployment, and database design
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="p-6 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-bold mb-4">{category.title}</h3>
              <div className="space-y-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center px-3 py-1 rounded-full bg-primary/5 text-primary text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}