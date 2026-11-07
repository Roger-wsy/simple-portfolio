import { ArrowRight, Download, ExternalLink, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useRef } from "react";
import Footer from "../components/layout/Footer.jsx";

function JournalSection({ id, label, title, body, children }) {
  return (
    <section id={id} className="journal-reveal border-t border-stone-300/80 py-10 dark:border-[#6f604e]/70 sm:py-12">
      <div className="grid gap-6 lg:grid-cols-[14rem_1fr]">
        <div>
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-stone-500 dark:text-[#80694f]">
            {label}
          </p>
        </div>
        <div>
          <div className="max-w-5xl">
            <h2 className="font-serif text-3xl font-semibold tracking-[-0.03em] text-stone-950 dark:text-[#211910] sm:text-4xl">
              {title}
            </h2>
            {body ? (
              <p className="mt-4 text-base leading-8 text-stone-600 dark:text-[#5d4a38]">{body}</p>
            ) : null}
          </div>
          {children ? <div className="mt-7">{children}</div> : null}
        </div>
      </div>
    </section>
  );
}

function InlineLink({ href, children, external = false }) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="group inline-flex items-center gap-2 border-b border-stone-400 pb-1 text-sm font-semibold text-stone-950 transition hover:border-stone-950 dark:border-[#a87955] dark:text-[#211910] dark:hover:border-[#f6c99d]"
    >
      {children}
      {external ? (
        <ExternalLink className="h-3.5 w-3.5 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      ) : (
        <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
      )}
    </a>
  );
}

export default function OrbitalPortfolio({ data }) {
  const rootRef = useRef(null);
  const { contact } = data.profile;
  const leadExperience = data.experiences[0];
  const supportingExperiences = data.experiences.slice(1);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const items = Array.from(root.querySelectorAll(".journal-reveal"));

    if (reduceMotion) {
      items.forEach((item) => item.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={rootRef}
      className="min-h-screen overflow-x-hidden bg-[#f7f2ea] text-stone-950 transition-colors duration-300 dark:bg-[#d8c7ae] dark:text-[#211910]"
    >
      <style>
        {`
          .journal-reveal {
            opacity: 0;
            transform: translateY(18px);
            transition: opacity 680ms ease, transform 680ms ease;
          }
          .journal-reveal.is-visible {
            opacity: 1;
            transform: translateY(0);
          }
          .journal-full-bleed {
            margin-left: calc(50% - 50vw);
            margin-right: calc(50% - 50vw);
            padding-left: max(1.25rem, calc((100vw - 88rem) / 2));
            padding-right: max(1.25rem, calc((100vw - 88rem) / 2));
          }
          @media (prefers-reduced-motion: reduce) {
            .journal-reveal {
              opacity: 1;
              transform: none;
              transition: none;
            }
          }
        `}
      </style>

      <main className="mx-auto w-full max-w-[88rem] px-5 pb-16 pt-28 sm:px-6 lg:px-8 xl:px-10">
        <section id="overview" className="journal-reveal border-b border-stone-300/80 pb-9 pt-8 dark:border-[#6f604e]/70 sm:pb-11 sm:pt-9">
          <div className="journal-full-bleed mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-stone-300/80 pb-4 dark:border-[#6f604e]/70">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-stone-500 dark:text-[#80694f]">
              Minimal Journal · Version 5.5
            </p>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-stone-500 dark:text-[#80694f]">
              Kuala Lumpur / Software Engineering
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-start xl:gap-16">
            <div>
              <h1 className="font-serif text-[clamp(4rem,12vw,8.5rem)] font-semibold leading-[0.88] tracking-[-0.075em] text-stone-950 dark:text-[#211910]">
                Roger Wong
              </h1>
              <p className="mt-7 max-w-3xl text-xl leading-9 text-stone-700 dark:text-[#38291c]">
                {data.profile.subheadline}
              </p>
              <p className="mt-5 max-w-3xl text-base leading-8 text-stone-600 dark:text-[#5d4a38]">
                {data.profile.intro}
              </p>

              <div className="mt-7 flex flex-wrap gap-4">
                <InlineLink href={contact.resume}>
                  <Download className="h-4 w-4" />
                  Resume
                </InlineLink>
                <InlineLink href={`mailto:${contact.email}`}>
                  <Mail className="h-4 w-4" />
                  Contact
                </InlineLink>
                <InlineLink href={contact.linkedin} external>
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </InlineLink>
              </div>
            </div>

            <aside className="border border-stone-300 bg-[#fbf7ef]/70 p-6 shadow-[0_24px_80px_rgba(41,37,36,0.08)] dark:border-[#6f604e] dark:bg-[#eadcc6] dark:shadow-[0_24px_80px_rgba(8,5,3,0.22)]">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-stone-500 dark:text-[#80694f]">
                Profile Brief
              </p>
              <div className="mt-5 space-y-5">
                <div>
                  <p className="text-sm text-stone-500 dark:text-[#80694f]">Current role</p>
                  <p className="mt-1 font-serif text-2xl font-semibold text-stone-950 dark:text-[#211910]">
                    {data.profile.title}
                  </p>
                </div>
                <div className="grid gap-4 border-y border-stone-300 py-5 dark:border-[#6f604e]">
                  {data.profile.metrics.map((metric) => (
                    <div key={metric.label} className="grid grid-cols-[5.5rem_1fr] gap-4">
                      <p className="font-serif text-3xl font-semibold text-stone-950 dark:text-[#211910]">
                        {metric.value}
                      </p>
                      <p className="text-sm leading-6 text-stone-600 dark:text-[#5d4a38]">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-sm text-stone-500 dark:text-[#80694f]">Primary stack</p>
                  <p className="mt-2 text-sm leading-7 text-stone-700 dark:text-[#38291c]">
                    Flutter, Java Spring Boot, Angular, AWS, PostgreSQL, GitLab CI/CD, Argo CD
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <JournalSection
          id="experience"
          label="Professional Record"
          title="A record of shipped systems under production constraints."
          body="The strongest signal is ownership across regulated flows: mobile surfaces, payment workflows, compliance tooling, APIs, data persistence, and release operations."
        >
          <article className="border border-stone-300 bg-[#fbf7ef]/68 dark:border-[#6f604e] dark:bg-[#eadcc6]/86">
            <div className="border-b border-stone-300 px-5 py-4 dark:border-[#6f604e] sm:px-6">
              <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-stone-500 dark:text-[#80694f]">
                  Lead Story · {leadExperience.period}
                </p>
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-stone-500 dark:text-[#80694f]">
                  {leadExperience.location}
                </p>
              </div>
              <h3 className="mt-4 max-w-5xl font-serif text-3xl font-semibold leading-tight tracking-[-0.03em] text-stone-950 dark:text-[#211910]">
                {leadExperience.role}
              </h3>
              <p className="mt-2 text-base font-semibold text-stone-700 dark:text-[#38291c]">
                {leadExperience.company}
              </p>
            </div>

            <div className="grid lg:grid-cols-[0.78fr_1.22fr]">
              <div className="border-b border-stone-300 p-5 dark:border-[#6f604e] sm:p-6 lg:border-b-0 lg:border-r">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-stone-500 dark:text-[#80694f]">
                  Context
                </p>
                <p className="mt-4 text-base leading-8 text-stone-700 dark:text-[#38291c]">
                  {leadExperience.summary}
                </p>
                <div className="mt-7">
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-stone-500 dark:text-[#80694f]">
                    Stack
                  </p>
                  <div className="mt-3 grid gap-2 sm:grid-cols-2">
                    {leadExperience.stack.map((item) => (
                      <span
                        key={item}
                        className="border-t border-stone-300 pt-2 font-mono text-xs uppercase tracking-[0.12em] text-stone-600 dark:border-[#6f604e] dark:text-[#5d4a38]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-5 sm:p-6">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-stone-500 dark:text-[#80694f]">
                  Selected Outcomes
                </p>
                <ol className="mt-4 grid gap-4">
                  {leadExperience.achievements.map((item, index) => (
                    <li
                      key={item}
                      className="grid gap-4 border-t border-stone-300 pt-4 text-sm leading-7 text-stone-700 dark:border-[#6f604e] dark:text-[#38291c] sm:grid-cols-[3rem_1fr]"
                    >
                      <span className="font-serif text-2xl font-semibold text-stone-950 dark:text-[#211910]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </article>

          <div className="mt-5 divide-y divide-stone-300 border-y border-stone-300 dark:divide-[#6f604e] dark:border-[#6f604e]">
            {supportingExperiences.map((experience) => (
              <article
                key={`${experience.company}-${experience.role}`}
                className="grid gap-5 py-5 transition hover:bg-[#fbf7ef]/55 dark:hover:bg-[#f1e5d2]/55 sm:px-4 lg:grid-cols-[15rem_1fr_18rem]"
              >
                <div>
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-stone-500 dark:text-[#80694f]">
                    {experience.period}
                  </p>
                  <p className="mt-3 text-sm font-semibold text-stone-700 dark:text-[#38291c]">
                    {experience.company}
                  </p>
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-semibold leading-tight text-stone-950 dark:text-[#211910]">
                    {experience.role}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-stone-600 dark:text-[#5d4a38]">
                    {experience.summary}
                  </p>
                </div>
                <p className="font-mono text-xs uppercase leading-6 tracking-[0.12em] text-stone-500 dark:text-[#80694f] lg:text-right">
                  {experience.stack.join(" / ")}
                </p>
              </article>
            ))}
          </div>
        </JournalSection>

        <JournalSection
          id="cases"
          label="Case Notes"
          title="Work framed by problem, ownership, and result."
          body="A journal-style clipping view keeps project evidence compact while making the role and impact clear."
        >
          <div className="divide-y divide-stone-300 border-y border-stone-300 dark:divide-[#6f604e] dark:border-[#6f604e]">
            {data.projects.map((project) => (
              <article
                key={project.title}
                className="grid gap-5 py-6 transition hover:bg-[#fbf7ef]/55 dark:hover:bg-[#f1e5d2]/55 sm:px-4 lg:grid-cols-[15rem_1fr_18rem]"
              >
                <div>
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-stone-500 dark:text-[#80694f]">
                    Case Note
                  </p>
                  <h3 className="mt-3 font-serif text-2xl font-semibold leading-tight text-stone-950 dark:text-[#211910]">
                    {project.title}
                  </h3>
                </div>
                <div className="grid gap-4 text-sm leading-7 text-stone-700 dark:text-[#38291c]">
                  <p className="text-stone-600 dark:text-[#5d4a38]">{project.summary}</p>
                  <p>
                    <span className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-stone-500 dark:text-[#80694f]">
                      Role
                    </span>
                    <span className="mt-1 block">{project.role}</span>
                  </p>
                  <p>
                    <span className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-stone-500 dark:text-[#80694f]">
                      Impact
                    </span>
                    <span className="mt-1 block">{project.impact}</span>
                  </p>
                </div>
                <div className="flex flex-col gap-5 lg:items-end lg:text-right">
                  <p className="max-w-xs font-mono text-xs uppercase leading-6 tracking-[0.12em] text-stone-500 dark:text-[#80694f]">
                    {project.technologies.join(" / ")}
                  </p>
                  {project.links.map((link) => (
                    <InlineLink key={link.href} href={link.href} external>
                      {link.label}
                    </InlineLink>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </JournalSection>

        <JournalSection
          id="projects"
          label="Builds"
          title="Selected builds, reduced to the facts."
          body="This section keeps the project archive readable for fast scanning."
        >
          <div className="divide-y divide-stone-300 border-y border-stone-300 dark:divide-[#5f4a3c] dark:border-[#6f604e]">
            {data.projects.map((project) => (
              <div key={`build-${project.title}`} className="grid gap-4 py-5 md:grid-cols-[15rem_1fr_16rem]">
                <p className="font-serif text-2xl font-semibold text-stone-950 dark:text-[#211910]">
                  {project.title}
                </p>
                <p className="text-sm leading-7 text-stone-600 dark:text-[#5d4a38]">{project.summary}</p>
                <p className="font-mono text-xs uppercase tracking-[0.12em] text-stone-500 dark:text-[#80694f] md:text-right">
                  {project.technologies.slice(0, 3).join(" / ")}
                </p>
              </div>
            ))}
          </div>
        </JournalSection>

        <JournalSection
          id="skills"
          label="Capability Index"
          title="A compact matrix of delivery capabilities."
          body="The stack is grouped by how it contributes to shipped systems rather than presented as decoration."
        >
          <div className="grid border border-stone-300 dark:border-[#6f604e] md:grid-cols-2">
            {data.skillGroups.map((group) => (
              <div key={group.title} className="border-b border-stone-300 p-5 last:border-b-0 dark:border-[#6f604e] md:border-r md:last:border-r-0">
                <h3 className="font-serif text-2xl font-semibold text-stone-950 dark:text-[#211910]">
                  {group.title}
                </h3>
                <div className="mt-5 grid gap-2">
                  {group.items.map((item) => (
                    <p key={item} className="border-t border-stone-300 pt-2 text-sm text-stone-600 dark:border-[#6f604e] dark:text-[#5d4a38]">
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </JournalSection>

        <JournalSection
          id="contact"
          label="Credentials"
          title="Academic grounding, leadership, and direct contact."
          body="A concise close: the background, the leadership signal, and the fastest ways to reach Roger."
        >
          <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
            <div className="grid gap-4">
              {data.education.map((item) => (
                <article key={item.school} className="border border-stone-300 p-5 dark:border-[#6f604e]">
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-stone-500 dark:text-[#80694f]">
                    {item.period}
                  </p>
                  <h3 className="mt-3 font-serif text-2xl font-semibold text-stone-950 dark:text-[#211910]">
                    {item.school}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-stone-600 dark:text-[#5d4a38]">
                    {item.degree} · {item.detail}
                  </p>
                </article>
              ))}
              <article className="border border-stone-300 p-5 dark:border-[#6f604e]">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-stone-500 dark:text-[#80694f]">
                  Leadership · {data.leadership.period}
                </p>
                <h3 className="mt-3 font-serif text-2xl font-semibold text-stone-950 dark:text-[#211910]">
                  {data.leadership.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-stone-600 dark:text-[#5d4a38]">
                  {data.leadership.description}
                </p>
              </article>
            </div>

            <aside className="border border-stone-300 bg-stone-950 p-6 text-stone-50 dark:border-[#6f604e] dark:bg-[#f3dfca] dark:text-[#24170f]">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-stone-400 dark:text-[#211910]">
                Contact
              </p>
              <h3 className="mt-5 font-serif text-3xl font-semibold tracking-[-0.03em]">
                Open to software engineering roles where product quality and execution matter.
              </h3>
              <div className="mt-8 grid gap-4">
                <a href={`mailto:${contact.email}`} className="inline-flex items-center justify-between border-b border-stone-500 pb-3 text-sm font-semibold">
                  <span className="inline-flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    {contact.email}
                  </span>
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a href={contact.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center justify-between border-b border-stone-500 pb-3 text-sm font-semibold">
                  <span className="inline-flex items-center gap-2">
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </span>
                  <ExternalLink className="h-4 w-4" />
                </a>
                <a href={contact.github} target="_blank" rel="noreferrer" className="inline-flex items-center justify-between border-b border-stone-500 pb-3 text-sm font-semibold">
                  <span className="inline-flex items-center gap-2">
                    <Github className="h-4 w-4" />
                    GitHub
                  </span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </aside>
          </div>
        </JournalSection>
      </main>

      <Footer name={data.profile.name} versionLabel="GPT-5.5 minimal journal edition" />
    </div>
  );
}
