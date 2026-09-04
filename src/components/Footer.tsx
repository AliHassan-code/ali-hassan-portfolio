export const Footer = () => {
  return (
    <footer className="bg-navy py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-2xl font-bold text-primary">
            AliHassan
          </div>
          <p className="text-sm text-gray-400">
            Built with React & Node.js
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/AliHassan-code"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colour"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/ali-hassan-choudhary/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colour"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}