export const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        About Me
      </h2>
      <p className="text-lg text-gray-600 mb-8">
        Full-Stack Developer with 5+ years of experience designing and building responsive web applications, SaaS platforms, and desktop solutions using the .NET ecosystem and the MERN stack. Skilled in delivering end-to-end products — from database design and backend APIs to polished, user-friendly front ends — for clients across retail, hospitality, and real estate. Strong background in point-of-sale systems, booking platforms, and business-focused web applications.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-4">Skills Summary</h3>
          <ul className="space-y-3 text-gray-600">
            <li>C# & ASP.NET Core</li>
            <li>React & MERN Stack</li>
            <li>SQL Server & PostgreSQL</li>
            <li>Microsoft Azure</li>
            <li>Git & GitHub</li>
            <li>REST API Development</li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-4">Experience</h3>
          <p className="text-gray-600 text-sm">
            5+ years of professional full-stack development experience
          </p>
        </div>
      </div>
    </div>
  )
}