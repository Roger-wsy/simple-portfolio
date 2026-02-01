export default function ContactSection({ contact }) {
  return (
    <section id="contact" className="scroll-mt-24">
      <p className="section-subtitle">Contact</p>
      <div className="mt-4 grid gap-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-soft dark:border-slate-800 dark:bg-slate-900 md:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4">
          <h2 className="section-title">Let&apos;s build something impactful</h2>
          <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            Open to collaborating on fintech, mobile, and platform engineering initiatives. Reach out for roles,
            consulting, or knowledge sharing.
          </p>
          <div className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
            <p>
              <span className="font-semibold text-slate-900 dark:text-white">Email:</span>{' '}
              <a className="text-indigo-500" href={`mailto:${contact.email}`}>
                {contact.email}
              </a>
            </p>
            <p>
              <span className="font-semibold text-slate-900 dark:text-white">Phone:</span> {contact.phone}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3 text-sm">
          <a
            className="flex items-center justify-between rounded-xl border border-slate-200 px-4 py-3 text-slate-600 transition hover:border-indigo-400 hover:text-indigo-500 dark:border-slate-700 dark:text-slate-300"
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
            <span aria-hidden>↗</span>
          </a>
          <a
            className="flex items-center justify-between rounded-xl border border-slate-200 px-4 py-3 text-slate-600 transition hover:border-indigo-400 hover:text-indigo-500 dark:border-slate-700 dark:text-slate-300"
            href={contact.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
            <span aria-hidden>↗</span>
          </a>
          <a
            className="flex items-center justify-between rounded-xl border border-slate-200 px-4 py-3 text-slate-600 transition hover:border-indigo-400 hover:text-indigo-500 dark:border-slate-700 dark:text-slate-300"
            href={`mailto:${contact.email}`}
          >
            Email
            <span aria-hidden>↗</span>
          </a>
        </div>
      </div>
    </section>
  )
}

