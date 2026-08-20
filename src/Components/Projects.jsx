import {
  ExternalLink,
  ArrowUpRight,
  Code2,
} from "lucide-react";

const projects = [
  {
    title: "CropCare",
    type: "Full-Stack Agriculture Platform",

    description:
      "A smart agriculture platform designed to help farmers with crop recommendations, plant disease detection, weather information, and AI-assisted agricultural guidance.",

    features: [
      "AI-based plant disease detection",
      "Soil and weather-based crop recommendation",
      "Real-time weather integration",
      "AI farmer assistant",
      "Market and agricultural resources",
    ],

    technologies: [
      "Java",
      "Spring Boot",
      "React",
      "MySQL",
      "Python",
      "Machine Learning",
      "AWS",
    ],

    github: "https://github.com/Sanket-378/CropCare",

    live: "https://sanket-378.github.io/CropCare/",

    featured: true,
  },

  {
    title: "Library Management System",
    type: "Java Web Application",

    description:
      "A web-based library management system that streamlines student registration, book borrowing, returns, and administrative operations.",

    features: [
      "Student registration and authentication",
      "Book borrowing and return management",
      "Admin dashboard",
      "Library inventory management",
      "MySQL database integration",
    ],

    technologies: [
      "Java",
      "Servlets",
      "HTML",
      "CSS",
      "MySQL",
      "Tomcat",
    ],

    github: "https://github.com/Sanket-378",

    live: null,

    featured: false,
  },

  {
    title: "SUVIDHA Unified Kiosk",
    type: "Full-Stack Utility Platform",

    description:
      "A unified digital service platform that brings multiple public utility services together through a single interface with dedicated user and administrative workflows.",

    features: [
      "Electricity service management",
      "Gas service management",
      "Municipal services",
      "Authentication system",
      "Admin analytics dashboard",
    ],

    technologies: [
      "React",
      "Node.js",
      "Express",
      "MySQL",
      "Tailwind CSS",
      "REST APIs",
    ],

    github: "https://github.com/Sanket-378",

    live: null,

    featured: false,
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-white/5 px-6 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        {/* =========================
            SECTION HEADING
        ========================== */}

        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Projects
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Things I've built.
          </h2>

          <p className="mt-4 leading-7 text-slate-400">
            A selection of projects where I have applied backend development,
            full-stack engineering, databases, machine learning, and cloud
            technologies to solve practical problems.
          </p>
        </div>

        {/* =========================
            PROJECT LIST
        ========================== */}

        <div className="space-y-8">

          {projects.map((project) => (
            <article
              key={project.title}
              className={`group overflow-hidden rounded-2xl border bg-white/[0.02] transition-all duration-300 ${
                project.featured
                  ? "border-cyan-400/20 hover:border-cyan-400/40"
                  : "border-white/10 hover:border-white/20"
              }`}
            >

              <div className="grid lg:grid-cols-[1fr_1.2fr]">

                {/* =========================
                    LEFT SIDE
                ========================== */}

                <div className="border-b border-white/10 p-7 lg:border-b-0 lg:border-r lg:p-9">

                  {/* Featured Badge */}

                  {project.featured && (
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 text-xs font-medium text-cyan-300">
                      Featured Project
                    </div>
                  )}

                  {/* Project Type */}

                  <p className="text-sm font-medium text-cyan-400">
                    {project.type}
                  </p>

                  {/* Project Title */}

                  <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                    {project.title}
                  </h3>

                  {/* Description */}

                  <p className="mt-5 leading-7 text-slate-400">
                    {project.description}
                  </p>

                  {/* =========================
                      PROJECT LINKS
                  ========================== */}

                  <div className="mt-7 flex flex-wrap gap-3">

                    {/* GitHub */}

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:border-cyan-400/30 hover:bg-cyan-400/10"
                    >
                      <Code2 size={17} />
                      GitHub
                    </a>

                    {/* Live Demo */}

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-4 py-2.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-300"
                      >
                        Live Demo
                        <ExternalLink size={16} />
                      </a>
                    )}

                  </div>
                </div>

                {/* =========================
                    RIGHT SIDE
                ========================== */}

                <div className="p-7 lg:p-9">

                  {/* =========================
                      FEATURES
                  ========================== */}

                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                      Key Features
                    </h4>

                    <ul className="mt-5 space-y-3">

                      {project.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3 text-sm leading-6 text-slate-300"
                        >
                          <ArrowUpRight
                            size={16}
                            className="mt-1 shrink-0 text-cyan-400"
                          />

                          <span>{feature}</span>
                        </li>
                      ))}

                    </ul>
                  </div>

                  {/* =========================
                      TECHNOLOGIES
                  ========================== */}

                  <div className="mt-9 border-t border-white/10 pt-7">

                    <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                      Technologies
                    </h4>

                    <div className="mt-4 flex flex-wrap gap-2">

                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-md border border-white/10 bg-slate-900/60 px-3 py-1.5 text-xs text-slate-300"
                        >
                          {technology}
                        </span>
                      ))}

                    </div>
                  </div>

                </div>
              </div>
            </article>
          ))}

        </div>

        {/* =========================
            GITHUB CTA
        ========================== */}

        <div className="mt-12 flex flex-col items-start justify-between gap-5 rounded-xl border border-white/10 bg-white/[0.02] p-6 sm:flex-row sm:items-center">

          <div>
            <h3 className="font-semibold text-white">
              Want to see more?
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Explore more of my work and repositories on GitHub.
            </p>
          </div>

          <a
            href="https://github.com/Sanket-378"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-white/10 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-cyan-400/30 hover:bg-cyan-400/10"
          >
            <Code2 size={17} />
            View GitHub
            <ExternalLink size={15} />
          </a>

        </div>

      </div>
    </section>
  );
}

export default Projects;