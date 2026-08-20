import {
  GraduationCap,
  CalendarDays,
  MapPin,
  Award,
  BookOpen,
} from "lucide-react";

const education = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    specialization: "Data Science",
    institution: "KIT's College of Engineering",
    location: "Kolhapur, Maharashtra, India",
    duration: "2023 – Present",
    score: "CGPA: 8.5",
    current: true,
    description:
      "Pursuing a Bachelor's degree with a focus on software development, data science, machine learning, databases, backend engineering, and cloud technologies.",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    specialization: "Science",
    institution: "Maharashtra State Board",
    location: "Maharashtra, India",
    duration: "2023",
    score: "70%",
    current: false,
    description:
      "Completed higher secondary education with a foundation in mathematics, science, and computer-related subjects.",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    specialization: "Secondary Education",
    institution: "Maharashtra State Board",
    location: "Maharashtra, India",
    duration: "2021",
    score: "96%",
    current: false,
    description:
      "Completed secondary education with strong academic performance and a solid foundation in mathematics and science.",
  },
];

function Education() {
  return (
    <section
      id="education"
      className="border-t border-white/5 px-6 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-14 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Education
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Academic journey.
          </h2>

          <p className="mt-4 leading-7 text-slate-400">
            My academic background has helped me build a strong foundation in
            computer science, software engineering, data science, and
            problem-solving.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="relative">

          {/* Timeline Line */}
          <div className="absolute left-[23px] top-6 hidden h-[calc(100%-48px)] w-px bg-gradient-to-b from-cyan-400/40 via-white/10 to-transparent md:block" />

          <div className="space-y-8">

            {education.map((item, index) => (
              <article
                key={`${item.degree}-${index}`}
                className="relative md:pl-16"
              >

                {/* Timeline Icon */}
                <div className="absolute left-0 top-6 hidden h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-slate-950 md:flex">
                  {item.current ? (
                    <GraduationCap
                      size={21}
                      className="text-cyan-400"
                    />
                  ) : (
                    <BookOpen
                      size={19}
                      className="text-slate-400"
                    />
                  )}
                </div>

                {/* Card */}
                <div
                  className={`rounded-2xl border p-7 transition-all duration-300 sm:p-8 ${
                    item.current
                      ? "border-cyan-400/20 bg-cyan-400/[0.03] hover:border-cyan-400/35"
                      : "border-white/10 bg-white/[0.02] hover:border-white/20"
                  }`}
                >

                  {/* Top Row */}
                  <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">

                    <div>

                      {/* Current Badge */}
                      {item.current && (
                        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 text-xs font-medium text-cyan-300">
                          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                          Currently Pursuing
                        </span>
                      )}

                      <h3 className="text-xl font-bold leading-snug text-white sm:text-2xl">
                        {item.degree}
                      </h3>

                      <p className="mt-2 text-sm font-medium text-cyan-400">
                        {item.specialization}
                      </p>

                      <p className="mt-4 text-base font-medium text-slate-300">
                        {item.institution}
                      </p>
                    </div>

                    {/* Score */}
                    <div className="flex w-fit items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2.5">
                      <Award
                        size={17}
                        className="text-cyan-400"
                      />

                      <span className="text-sm font-semibold text-white">
                        {item.score}
                      </span>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="mt-6 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:flex-wrap sm:gap-x-7">

                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <CalendarDays
                        size={16}
                        className="text-slate-600"
                      />

                      <span>{item.duration}</span>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <MapPin
                        size={16}
                        className="text-slate-600"
                      />

                      <span>{item.location}</span>
                    </div>

                  </div>

                  {/* Description */}
                  <p className="mt-6 max-w-4xl text-sm leading-7 text-slate-400">
                    {item.description}
                  </p>

                </div>
              </article>
            ))}

          </div>
        </div>

        {/* Academic Highlights */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Current Degree
            </p>

            <p className="mt-2 text-lg font-bold text-white">
              B.Tech
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Computer Science & Engineering
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Specialization
            </p>

            <p className="mt-2 text-lg font-bold text-white">
              Data Science
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Data, ML & intelligent systems
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 sm:col-span-2 lg:col-span-1">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Current CGPA
            </p>

            <p className="mt-2 text-lg font-bold text-white">
              8.5
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Academic performance
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Education;