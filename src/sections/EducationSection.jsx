export default function EducationSection({ education }) {
  return (
    <section id="education" className="scroll-mt-24">
      <p className="section-subtitle">Education</p>
      <div className="mt-4 flex flex-col gap-8">
        <h2 className="section-title">Academic background</h2>
        {education.map((item) => (
          <div
            key={item.school}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{item.school}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">{item.degree}</p>
              </div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">{item.period}</span>
            </div>
            <div className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
              <p>{item.detail}</p>
              <p>
                <span className="font-semibold text-slate-900 dark:text-white">Relevant coursework:</span>{' '}
                {item.courses}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

