import {
  Mail,
  MapPin,
  MessageCircle,
  Send,
  ArrowUpRight,
  Code2,
  BriefcaseBusiness,
} from "lucide-react";

function GitHubIcon({ size = 19 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.866-.014-1.7-2.782.605-3.369-1.342-3.369-1.342-.455-1.157-1.11-1.465-1.11-1.465-.908-.622.069-.61.069-.61 1.004.071 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.58 9.58 0 0 1 2.504.337c1.909-1.296 2.748-1.026 2.748-1.026.546 1.378.202 2.397.1 2.65.64.701 1.028 1.595 1.028 2.688 0 3.847-2.339 4.695-4.566 4.944.359.31.678.921.678 1.857 0 1.34-.012 2.421-.012 2.749 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.523 2 12 2Z" />
    </svg>
  );
}

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      return;
    }

    const subject = encodeURIComponent(
      `Portfolio Contact - ${name}`
    );

    const body = encodeURIComponent(
      `Hello Sanket,\n\n` +
        `Name: ${name}\n` +
        `Email: ${email}\n\n` +
        `Message:\n${message}`
    );

    window.location.href =
      `mailto:sanketkhatkale@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="border-t border-white/5 px-6 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="mb-14 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Contact
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Let's build something meaningful.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400">
            I'm open to internship opportunities, backend development
            roles, collaborative projects, and conversations around
            software engineering and technology.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">

          {/* =========================
              CONTACT INFORMATION
          ========================== */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-7 lg:p-9">

            <div>
              <h3 className="text-xl font-semibold text-white">
                Get in touch
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                Have an opportunity, project idea, or simply want to
                connect? Feel free to reach out through any of the
                platforms below.
              </p>
            </div>

            <div className="mt-8 space-y-4">

              {/* Email */}
              <a
                href="mailto:sanketkhatkale@gmail.com"
                className="group flex items-center gap-4 rounded-xl border border-white/10 bg-slate-950/40 p-4 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/5"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-cyan-400">
                  <Mail size={19} />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                    Email
                  </p>

                  <p className="mt-1 truncate text-sm font-medium text-slate-200">
                    sanketkhatkale@gmail.com
                  </p>
                </div>

                <ArrowUpRight
                  size={17}
                  className="text-slate-600 transition-colors group-hover:text-cyan-400"
                />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/sanket-khatkale-9459122b0"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-white/10 bg-slate-950/40 p-4 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/5"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-cyan-400">
                  <BriefcaseBusiness size={19} />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                    LinkedIn
                  </p>

                  <p className="mt-1 text-sm font-medium text-slate-200">
                    Connect with me
                  </p>
                </div>

                <ArrowUpRight
                  size={17}
                  className="text-slate-600 transition-colors group-hover:text-cyan-400"
                />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Sanket-378"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-white/10 bg-slate-950/40 p-4 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/5"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-cyan-400">
                  <Code2 size={19} />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                    GitHub
                  </p>

                  <p className="mt-1 text-sm font-medium text-slate-200">
                    View my repositories
                  </p>
                </div>

                <ArrowUpRight
                  size={17}
                  className="text-slate-600 transition-colors group-hover:text-cyan-400"
                />
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-slate-950/40 p-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-cyan-400">
                  <MapPin size={19} />
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                    Location
                  </p>

                  <p className="mt-1 text-sm font-medium text-slate-200">
                    Maharashtra, India
                  </p>
                </div>
              </div>

            </div>

            {/* Availability */}
            <div className="mt-8 rounded-xl border border-cyan-400/10 bg-cyan-400/[0.03] p-5">
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-50" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-cyan-400" />
                </span>

                <span className="text-sm font-medium text-slate-200">
                  Open to opportunities
                </span>
              </div>

              <p className="mt-2 text-xs leading-5 text-slate-500">
                Interested in software engineering, Java backend,
                Spring Boot, and full-stack opportunities.
              </p>
            </div>

          </div>

          {/* =========================
              CONTACT FORM
          ========================== */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-7 lg:p-9">

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white">
                Send me a message
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                I'll get back to you as soon as possible.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  required
                  className="w-full rounded-lg border border-white/10 bg-slate-950/50 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 transition-all duration-200 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/10"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-lg border border-white/10 bg-slate-950/50 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 transition-all duration-200 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/10"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Tell me about your opportunity or project..."
                  required
                  className="w-full resize-none rounded-lg border border-white/10 bg-slate-950/50 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 transition-all duration-200 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/10"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition-all duration-200 hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/10 active:scale-[0.99]"
              >
                Send Message
                <Send size={17} />
              </button>

            </form>

          </div>

        </div>

        {/* Bottom Email CTA */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/[0.02] p-5 text-center sm:flex-row sm:text-left">

          <p className="text-sm text-slate-500">
            Prefer email? Reach me directly at{" "}
            <a
              href="mailto:sanketkhatkale@gmail.com"
              className="font-medium text-slate-300 transition-colors hover:text-cyan-400"
            >
              sanketkhatkale@gmail.com
            </a>
          </p>

          <a
            href="mailto:sanketkhatkale@gmail.com"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-cyan-400 transition-colors hover:text-cyan-300"
          >
            Email me
            <ArrowUpRight size={16} />
          </a>

        </div>

      </div>
    </section>
  );
}

export default Contact;