export default function ContactSection({ contact }) {
  return (
    <section id="contact" className="scroll-mt-24">
      <p className="section-subtitle">Contact</p>

      <div className="mt-4 grid gap-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-soft dark:border-slate-800 dark:bg-slate-900 md:grid-cols-[1.2fr_0.8fr]">
        {/* Left */}
        <div className="space-y-4">
          <h2 className="section-title">
            Open to Software Engineering Opportunities
          </h2>

          <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            I am currently open to full-time software engineering roles,
            particularly in fintech, digital banking, and platform engineering.
            I am interested in building scalable, reliable systems in regulated
            production environments.
          </p>

          <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            Feel free to reach out for opportunities, technical discussions, or
            referrals.
          </p>

          <div className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
            <p>
              <span className="font-semibold text-slate-900 dark:text-white">
                Email:
              </span>{" "}
              <a
                className="text-indigo-500 hover:underline"
                href={`mailto:${contact.email}`}
              >
                {contact.email}
              </a>
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-3 text-sm">
          <a
            className="flex items-center justify-between rounded-xl border border-slate-200 px-4 py-3 font-medium text-slate-700 transition hover:border-indigo-400 hover:text-indigo-500 dark:border-slate-700 dark:text-slate-300"
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn Profile
            <span aria-hidden>↗</span>
          </a>

          <a
            className="flex items-center justify-between rounded-xl border border-slate-200 px-4 py-3 font-medium text-slate-700 transition hover:border-indigo-400 hover:text-indigo-500 dark:border-slate-700 dark:text-slate-300"
            href={contact.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub Projects
            <span aria-hidden>↗</span>
          </a>

          <a
            className="flex items-center justify-between rounded-xl border border-indigo-500 bg-indigo-50 px-4 py-3 font-medium text-indigo-600 transition hover:bg-indigo-100 dark:border-indigo-400 dark:bg-indigo-500/10 dark:text-indigo-400"
            href={`mailto:${contact.email}`}
          >
            Get in Touch
            <span aria-hidden>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
