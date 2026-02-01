export default function ExperienceSection({ experiences }) {
  return (
    <section id="experience" className="scroll-mt-24">
      <p className="section-subtitle">Experience</p>
      <div className="mt-4 flex flex-col gap-8">
        <h2 className="section-title">Work history</h2>
        <div className="space-y-6">
          {experiences.map((experience) => (
            <div
              key={`${experience.role}-${experience.company}`}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{experience.role}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {experience.company} • {experience.location}
                  </p>
                </div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  {experience.period}
                </span>
              </div>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {experience.highlights.map((highlight) => (
                  <li key={highlight}>• {highlight}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

