import {
  ArrowUp,
  Code2,
  ExternalLink,
} from "lucide-react";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-white/10 px-6 py-10 lg:px-8">
      <div className="mx-auto max-w-7xl">

        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

          {/* Brand */}
          <div>
            <a
              href="#home"
              className="inline-flex items-center gap-2 text-lg font-bold tracking-tight text-white"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/5">
                <Code2
                  size={17}
                  className="text-cyan-400"
                />
              </span>

              Sanket Khatkale
            </a>

            <p className="mt-3 max-w-md text-sm leading-6 text-slate-500">
              Computer Science & Engineering student focused on Java backend
              development, Spring Boot, full-stack applications, and cloud
              technologies.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
            <a
              href="#home"
              className="text-slate-500 transition-colors hover:text-cyan-400"
            >
              Home
            </a>

            <a
              href="#about"
              className="text-slate-500 transition-colors hover:text-cyan-400"
            >
              About
            </a>

            <a
              href="#skills"
              className="text-slate-500 transition-colors hover:text-cyan-400"
            >
              Skills
            </a>

            <a
              href="#projects"
              className="text-slate-500 transition-colors hover:text-cyan-400"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="text-slate-500 transition-colors hover:text-cyan-400"
            >
              Contact
            </a>
          </nav>

          {/* Back to top */}
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex w-fit items-center gap-2 rounded-lg border border-white/10 bg-white/[0.02] px-4 py-2.5 text-sm font-medium text-slate-300 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/5 hover:text-white"
          >
            Back to top
            <ArrowUp size={16} />
          </button>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © {new Date().getFullYear()} Sanket Khatkale. All rights reserved.
          </p>

          <div className="flex items-center gap-1">
            <span>Built with</span>

            <span className="text-slate-400">
              React
            </span>

            <span>and</span>

            <span className="text-slate-400">
              Tailwind CSS
            </span>

            <span className="mx-1">·</span>

            <a
              href="https://github.com/Sanket-378"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 transition-colors hover:text-cyan-400"
            >
              GitHub
              <ExternalLink size={12} />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;