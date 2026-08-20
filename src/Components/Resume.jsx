import {
  FileText,
  Download,
  ArrowUpRight,
  BriefcaseBusiness,
} from "lucide-react";

function Resume() {
  return (
    <section
      id="resume"
      className="border-t border-white/5 px-6 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-5xl">

        {/* Resume Card */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02]">

          {/* Background decoration */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-cyan-400/5 blur-3xl" />

          <div className="relative p-8 sm:p-10 lg:p-12">

            {/* Header */}
            <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">

              {/* Icon + Title */}
              <div className="flex items-start gap-5">

                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/5">
                  <FileText
                    size={25}
                    className="text-cyan-400"
                  />
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                    Resume
                  </p>

                  <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Let's work together.
                  </h2>

                  <p className="mt-3 max-w-2xl leading-7 text-slate-400">
                    Explore my technical background, projects, education,
                    skills, and experience in a concise resume.
                  </p>
                </div>

              </div>

              {/* Resume Icon */}
              <div className="hidden rounded-xl border border-white/10 bg-white/5 p-3 sm:block">
                <BriefcaseBusiness
                  size={22}
                  className="text-slate-400"
                />
              </div>

            </div>

            {/* Information */}
            <div className="mt-10 grid gap-4 border-t border-white/10 pt-8 sm:grid-cols-3">

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Focus
                </p>

                <p className="mt-2 text-sm font-medium text-slate-200">
                  Java Backend Development
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Technologies
                </p>

                <p className="mt-2 text-sm font-medium text-slate-200">
                  Java · Spring Boot · React · MySQL
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Available For
                </p>

                <p className="mt-2 text-sm font-medium text-slate-200">
                  Internships & Opportunities
                </p>
              </div>

            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">

              {/* Download */}
              <a
                href="/Sanket_Khatkale_Resume.pdf"
                download
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition-all hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/10"
              >
                <Download size={17} />
                Download Resume
              </a>

              {/* View */}
              <a
                href="/Sanket_Khatkale_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white transition-all hover:border-cyan-400/30 hover:bg-cyan-400/5"
              >
                View Resume
                <ArrowUpRight size={17} />
              </a>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Resume;