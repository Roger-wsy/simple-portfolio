export default function SkillsSection({ skills }) {
  return (
    <section id="skills" className="scroll-mt-24">
      <p className="section-subtitle">Skills</p>
      <div className="mt-4 flex flex-col gap-8">
        <h2 className="section-title">Tech stack & tools</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {skills.map((group) => (
            <div
              key={group.category}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 dark:border-slate-800 dark:bg-slate-900"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">{group.category}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 px-3 py-1 text-sm text-slate-600 dark:border-slate-700 dark:text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

