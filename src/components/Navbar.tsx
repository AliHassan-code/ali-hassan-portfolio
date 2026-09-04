import { LucideIcon } from "lucide-react"
import { Mail, Phone, GitHub, LinkedIn } from "lucide-react"

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 h-20">
        <div className="flex items-center justify-between">
          <a href="#" className="text-2xl font-bold text-primary">
            <span className="text-secondary">AliHassan</span>
          </a>
          <ul className="flex items-center gap-6">
            <li>
              <a href="#about" className="text-gray-600 hover:text-primary transition-colour">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="text-gray-600 hover:text-primary transition-colour">
                Skills
              </a>
            </li>
            <li>
              <a href="#experience" className="text-gray-600 hover:text-primary transition-colour">
                Experience
              </a>
            </li>
            <li>
              <a href="#projects" className="text-gray-600 hover:text-primary transition-colour">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="text-gray-600 hover:text-primary transition-colour">
                Contact
              </a>
            </li>
          </ul>
          <div className="hidden sm:flex items-center gap-2">
            <a
              href="https://github.com/AliHassan-code"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colour"
            >
              <GitHub width={20} height={20} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/ali-hassan-choudhary/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colour"
            >
              <LinkedIn width={20} height={20} />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}