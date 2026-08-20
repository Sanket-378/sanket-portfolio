import { ArrowDown, ExternalLink } from "lucide-react";

function Hero() {
  const scrollToProjects = () => {
    const section = document.getElementById("projects");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="about"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28 lg:px-8"
    >
      {/* =====================================================
          BACKGROUND EFFECTS
      ====================================================== */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[20%] top-[20%] h-96 w-96 rounded-full bg-cyan-500/5 blur-3xl" />

        <div className="absolute right-[10%] top-[30%] h-80 w-80 rounded-full bg-blue-500/5 blur-3xl" />

        <div className="absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-500/[0.03] blur-3xl" />
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">

        {/* =================================================
            LEFT CONTENT
        ================================================== */}
        <div>

          {/* Availability */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2 text-sm font-medium text-emerald-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400/50" />

            Open to internship opportunities
          </div>

          {/* Main Heading */}
          <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Hi, I'm{" "}
            <span className="text-cyan-400">
              Sanket Khatkale
            </span>
            .
          </h1>

          {/* Role */}
          <h2 className="mt-6 text-2xl font-semibold text-slate-200 sm:text-3xl">
            Java Backend Developer
          </h2>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            Computer Science Engineering student focused on backend
            development, REST APIs, databases, and cloud technologies.
          </p>

          {/* =================================================
              BUTTONS
          ================================================== */}
          <div className="mt-9 flex flex-wrap gap-4">

            {/* View Projects */}
            <button
              onClick={scrollToProjects}
              className="inline-flex items-center gap-3 rounded-lg bg-cyan-400 px-6 py-3.5 text-sm font-semibold text-slate-950 transition-all duration-300 hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/10"
            >
              View My Projects

              <ArrowDown size={17} />
            </button>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/sanket-khatkale-9459122b0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/5"
            >
              LinkedIn

              <ExternalLink size={16} />
            </a>

          </div>

          {/* =================================================
              TECHNOLOGIES
          ================================================== */}
          <div className="mt-16 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-500">

            <span>Java</span>

            <span className="text-slate-700">•</span>

            <span>Spring Boot</span>

            <span className="text-slate-700">•</span>

            <span>REST APIs</span>

            <span className="text-slate-700">•</span>

            <span>MySQL</span>

            <span className="text-slate-700">•</span>

            <span>AWS</span>

          </div>
        </div>

        {/* =================================================
            RIGHT PROFILE IMAGE
        ================================================== */}
        <div className="relative flex justify-center lg:justify-end">

          {/* Profile Glow */}
          <div className="pointer-events-none absolute h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />

          {/* Profile Wrapper */}
          <div className="relative">

            {/* Outer Decorative Border */}
            <div className="absolute -inset-4 rounded-[2.25rem] border border-cyan-400/10" />

            {/* Inner Decorative Border */}
            <div className="absolute -inset-2 rounded-[2rem] border border-white/5" />

            {/* =================================================
                PROFILE IMAGE
            ================================================== */}
            <div
              className="
                relative
                h-72
                w-72
                overflow-hidden
                rounded-[2rem]
                border
                border-white/10
                bg-slate-900
                shadow-2xl
                shadow-black/40
                sm:h-80
                sm:w-80
                lg:h-96
                lg:w-96
              "
            >
              <img
                src="/images/Photo.png"
                alt="Sanket Khatkale"
                className="h-full w-full object-cover"
              />

              {/* Very subtle image overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/10 via-transparent to-transparent" />
            </div>

          </div>
        </div>
      </div>

      {/* =====================================================
          SCROLL INDICATOR
      ====================================================== */}
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-600 md:flex">

        <span className="text-[10px] uppercase tracking-[0.3em]">
          Scroll
        </span>

        <ArrowDown size={16} />

      </div>
    </section>
  );
}

export default Hero;