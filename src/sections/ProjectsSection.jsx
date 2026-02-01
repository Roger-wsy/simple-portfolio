export default function ProjectsSection({ projects }) {
  return (
    <section id="projects" className="scroll-mt-24">
      <p className="section-subtitle">Projects</p>
      <div className="mt-4 flex flex-col gap-8">
        <h2 className="section-title">Selected case studies</h2>
        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.name}
              className="flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{project.name}</h3>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <a
                className="mt-6 text-sm font-semibold text-indigo-500 transition hover:text-indigo-600"
                href={project.link}
                target="_blank"
                rel="noreferrer"
              >
                View project →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

