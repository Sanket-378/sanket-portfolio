function About() {
  return (
    <section
      id="about"
      className="border-t border-white/5 px-6 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <div className="mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            About Me
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Building backend systems with purpose.
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:items-start">

          {/* Main introduction */}
          <div>
            <p className="text-lg leading-8 text-slate-300">
              I am a Computer Science Engineering student with a strong
              interest in backend development and software engineering.
              I enjoy designing APIs, working with databases, and building
              practical applications that solve real-world problems.
            </p>

            <p className="mt-6 leading-8 text-slate-400">
              My primary focus is Java backend development using Spring Boot,
              REST APIs, MySQL, and related technologies. I also have
              experience working with React, Python, machine learning,
              and cloud platforms such as AWS.
            </p>

            <p className="mt-6 leading-8 text-slate-400">
              Through projects such as CropCare and other full-stack
              applications, I have worked across frontend, backend,
              database, API integration, and deployment workflows.
            </p>
          </div>

          {/* Highlights */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">

            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/[0.05]">
              <p className="text-sm font-medium text-slate-500">
                Primary Focus
              </p>

              <p className="mt-2 text-lg font-semibold text-white">
                Java Backend Development
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/[0.05]">
              <p className="text-sm font-medium text-slate-500">
                Core Stack
              </p>

              <p className="mt-2 text-lg font-semibold text-white">
                Java · Spring Boot · MySQL
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/[0.05]">
              <p className="text-sm font-medium text-slate-500">
                Also Exploring
              </p>

              <p className="mt-2 text-lg font-semibold text-white">
                AWS · React · AI/ML
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;