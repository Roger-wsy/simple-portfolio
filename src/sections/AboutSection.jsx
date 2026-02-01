export default function AboutSection({ profile }) {
  return (
    <section id="about" className="scroll-mt-24">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <p className="section-subtitle">About</p>
          <h1 className="text-4xl font-semibold text-slate-900 dark:text-white sm:text-5xl">
            {profile.name}
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            {profile.title}
          </p>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400">
            {profile.location}
          </p>
          <div className="space-y-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">
            {profile.summary.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              className="rounded-full bg-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:bg-indigo-600"
              href={`mailto:${profile.contact.email}`}
            >
              Email Me
            </a>
            <a
              className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 transition hover:border-indigo-400 hover:text-indigo-500 dark:border-slate-700 dark:text-slate-300"
              href={profile.contact.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 transition hover:border-indigo-400 hover:text-indigo-500 dark:border-slate-700 dark:text-slate-300"
              href={profile.contact.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-6 rounded-3xl border border-slate-200 bg-white/70 p-8 shadow-soft transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/60">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-500/10 text-2xl font-semibold text-indigo-500">
              RW
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
                Currently
              </p>
              <p className="text-lg font-semibold text-slate-900 dark:text-white">
                {profile.title}
              </p>
            </div>
          </div>
          <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
            <p>
              Specialized in fintech mobile experiences, digital banking flows,
              and scalable backend services that meet compliance standards.
            </p>
            <p>
              Interested in cross-functional collaboration, clean architecture,
              and data-driven product decisions.
            </p>
          </div>
          <div className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-600 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300">
            <div className="flex items-center justify-between">
              <span className="font-medium text-slate-900 dark:text-white">
                Focus Areas
              </span>
            </div>
            <ul className="space-y-2">
              <li>• Mobile/Web/Backend Development</li>
              <li>• Fintech and Investments</li>
              <li>• AI and Automation</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
