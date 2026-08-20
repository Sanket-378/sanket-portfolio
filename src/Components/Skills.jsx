import {
  Braces,
  Database,
  Cloud,
  Code2,
  GitBranch,
  Layout,
  Server,
  Wrench,
} from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Braces,
    skills: ["Java", "Python", "JavaScript", "SQL"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      "Spring Boot",
      "Spring Security",
      "REST APIs",
      "JPA / Hibernate",
      "Maven",
    ],
  },
  {
    title: "Frontend",
    icon: Layout,
    skills: [
      "React",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Vite",
    ],
  },
  {
    title: "Database",
    icon: Database,
    skills: [
      "MySQL",
      "MySQL Workbench",
      "Database Design",
      "SQL",
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      "AWS",
      "Render",
      "Git",
      "GitHub",
      "GitHub Actions",
    ],
  },
  {
    title: "Tools & Technologies",
    icon: Wrench,
    skills: [
      "IntelliJ IDEA",
      "VS Code",
      "Postman",
      "GitHub Desktop",
      "npm",
    ],
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-white/5 px-6 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Technical Skills
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Technologies I work with.
          </h2>

          <p className="mt-4 leading-7 text-slate-400">
            A collection of technologies and tools I use while building
            backend systems, full-stack applications, and data-driven
            projects.
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.title}
                className="group rounded-xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.05]"
              >
                {/* Icon + title */}
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-cyan-400 transition-colors group-hover:border-cyan-400/20 group-hover:bg-cyan-400/10">
                    <Icon size={20} />
                  </div>

                  <h3 className="font-semibold text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skills */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-white/10 bg-slate-900/60 px-3 py-1.5 text-sm text-slate-300 transition-colors hover:border-cyan-400/20 hover:text-cyan-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom note */}
        <div className="mt-10 flex items-center gap-3 text-sm text-slate-500">
          <Code2 size={16} className="text-cyan-400" />

          <span>
            Continuously learning and expanding my engineering toolkit.
          </span>

          <GitBranch size={16} className="ml-2 hidden sm:block" />
        </div>
      </div>
    </section>
  );
}

export default Skills;    