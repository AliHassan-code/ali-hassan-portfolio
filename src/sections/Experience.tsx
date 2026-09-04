import { experience } from "../data/content"

export const Experience = () => {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            5+ years of professional full-stack development experience
          </p>
        </div>

        <div className="space-y-8">
          {experience.map((item) => (
            <div
              key={item.role}
              className="pt-8 border-l-4 border-primary space-y-6"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-bold">{item.role}</h3>
                  <p className="text-primary">{item.company}</p>
                  <p className="text-gray-500 text-sm">{item.duration}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-500">{item.duration}</p>
                </div>
              </div>

              <ul className="list-disc list-inside space-y-2">
                {item.points.map((point) => (
                  <li key={point} className="text-gray-700">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}