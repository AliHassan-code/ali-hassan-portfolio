import { motion } from "framer-motion"
import { Briefcase, Code, Globe, Target } from "lucide-react"

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-50">
      <div className="relative grid grid-cols-1 gap-6 md:grid-cols-2 max-w-7xl mx-auto px-6">
        <div className="self-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Full-Stack Developer building fast, reliable web apps with
              <span className="text-primary">.NET & MERN</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              5+ years of experience designing and building responsive web applications, SaaS platforms, and desktop solutions
            </p>
            <div className="flex gap-4">
              <button
                className="btn btn-primary px-6 py-3"
                onClick={() => window.scrollTo({ top: document.getElementById("projects")?.offsetTop || 0, behavior: "smooth" })}
              >
                View Projects
              </button>
              <button
                className="btn btn-outline px-6 py-3"
                onClick={() => window.scrollTo({ top: document.getElementById("contact")?.offsetTop || 0, behavior: "smooth" })}
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>

        <div className="relative self-center animate-fade-in-delay">
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <span className="text-8xl font-bold text-white">AH</span>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-primary/10 rounded-xl p-4 border border-primary/20">
              <Target width={32} height={32} className="text-primary" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-0 right-0 pt-8 pr-8 text-xs text-gray-500">
        <span>•</span>
        <span>•</span>
        <span>•</span>
      </div>
    </section>
  )
}