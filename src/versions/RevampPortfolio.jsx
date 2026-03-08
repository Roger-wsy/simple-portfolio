import { gsap } from "gsap";
import {
  ArrowRight,
  BriefcaseBusiness,
  Cpu,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { useEffect, useRef } from "react";
import CursorFollower from "../components/CursorFollower.jsx";
import HeroBackdrop from "../components/HeroBackdrop.jsx";
import Footer from "../components/layout/Footer.jsx";
import Reveal from "../components/Reveal.jsx";

function SectionHeading({ eyebrow, title, body }) {
  return (
    <div className="max-w-3xl space-y-4">
      <p className="section-subtitle text-emerald-600 dark:text-emerald-300">
        {eyebrow}
      </p>
      <h2 className="section-title text-3xl sm:text-4xl">{title}</h2>
      <p className="text-base leading-7 text-slate-600 dark:text-slate-300">
        {body}
      </p>
    </div>
  );
}

export default function RevampPortfolio({ data }) {
  const { contact } = data.profile;
  const heroRef = useRef(null);
  const marqueeItems = [
    "Flutter",
    "Java Spring Boot",
    "Angular",
    ".NET Core",
    "REST APIs",
    "AWS",
    "PostgreSQL",
    "MongoDB",
    "GitLab CI/CD",
    "Argo CD",
  ];

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return undefined;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        "[data-hero-badge]",
        { autoAlpha: 0, y: 18 },
        { autoAlpha: 1, y: 0, duration: 0.55 },
      )
        .fromTo(
          "[data-hero-title]",
          { autoAlpha: 0, y: 26 },
          { autoAlpha: 1, y: 0, duration: 0.75 },
          "-=0.2",
        )
        .fromTo(
          "[data-hero-meta]",
          { autoAlpha: 0, y: 18 },
          { autoAlpha: 1, y: 0, duration: 0.5 },
          "-=0.42",
        )
        .fromTo(
          "[data-hero-copy]",
          { autoAlpha: 0, y: 24 },
          { autoAlpha: 1, y: 0, duration: 0.65 },
          "-=0.35",
        )
        .fromTo(
          "[data-hero-body]",
          { autoAlpha: 0, y: 24 },
          { autoAlpha: 1, y: 0, duration: 0.65 },
          "-=0.4",
        )
        .fromTo(
          "[data-hero-actions]",
          { autoAlpha: 0, y: 20 },
          { autoAlpha: 1, y: 0, duration: 0.55 },
          "-=0.35",
        )
        .fromTo(
          "[data-hero-metric]",
          { autoAlpha: 0, y: 28, scale: 0.98 },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.55,
            stagger: 0.08,
          },
          "-=0.3",
        )
        .fromTo(
          "[data-hero-card]",
          { y: 30, rotate: 1.5, scale: 0.98 },
          {
            y: 0,
            rotate: 0,
            scale: 1,
            duration: 0.7,
            stagger: 0.08,
          },
          "-=0.45",
        );

      const cards = gsap.utils.toArray("[data-hero-card]");
      const floatingLayers = gsap.utils.toArray("[data-float]");

      floatingLayers.forEach((card, index) => {
        const configs = [
          { y: -10, rotate: 0.8, duration: 3.8 },
          { y: -14, rotate: -1.6, duration: 3.2 },
          { y: -12, rotate: 1.3, duration: 4.1 },
          { y: 10, rotate: -0.9, duration: 3.5 },
        ];
        const config = configs[index] || configs[0];

        gsap.to(card, {
          y: config.y,
          rotate: config.rotate,
          duration: config.duration,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      });

      const moveCards = (event) => {
        const bounds = hero.getBoundingClientRect();
        const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 20;
        const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 20;

        cards.forEach((card, index) => {
          const factor = index === 0 ? 0.5 : index === 1 ? 0.9 : 0.7;
          gsap.to(card, {
            x: x * factor,
            y: y * factor,
            rotate: x * 0.08 * factor,
            duration: 0.6,
            ease: "power3.out",
            overwrite: true,
          });
        });
      };

      const resetCards = () => {
        cards.forEach((card) => {
          gsap.to(card, {
            x: 0,
            y: 0,
            rotate: 0,
            duration: 0.7,
            ease: "power3.out",
            overwrite: true,
          });
        });
      };

      hero.addEventListener("mousemove", moveCards);
      hero.addEventListener("mouseleave", resetCards);

      return () => {
        hero.removeEventListener("mousemove", moveCards);
        hero.removeEventListener("mouseleave", resetCards);
      };
    }, hero);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <main className="relative isolate overflow-hidden">
        <CursorFollower />
        <HeroBackdrop />

        <section
          id="overview"
          ref={heroRef}
          className="relative z-10 mx-auto grid max-w-6xl gap-14 px-6 pb-16 pt-32 lg:grid-cols-[1.05fr_0.95fr] lg:items-center"
        >
          <div className="space-y-10">
            <div className="space-y-5">
              <p
                data-hero-badge
                className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/85 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700 shadow-soft dark:border-emerald-400/20 dark:bg-slate-900/85 dark:text-emerald-300"
              >
                <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                Version 5.4 · Software Engineer Portfolio
              </p>
              <h1
                data-hero-title
                className="max-w-5xl text-5xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-6xl xl:text-7xl"
              >
                {Array.isArray(data.profile.headline)
                  ? data.profile.headline.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))
                  : data.profile.headline}
              </h1>
              <p
                data-hero-meta
                className="max-w-3xl text-lg font-medium text-slate-700 dark:text-slate-200"
              >
                {data.profile.subheadline}
              </p>
              <div
                data-hero-copy
                className="flex flex-wrap gap-x-4 gap-y-2 text-sm font-medium text-slate-500 dark:text-slate-400"
              >
                <span>{data.profile.title}</span>
                <span>{data.profile.location}</span>
              </div>
              <p
                data-hero-body
                className="max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300"
              >
                {data.profile.intro}
              </p>
            </div>

            <div data-hero-actions className="flex flex-wrap gap-3">
              <a
                href={contact.resume}
                className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Download Resume
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/80 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-emerald-400 hover:text-emerald-700 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-100 dark:hover:border-emerald-400 dark:hover:text-emerald-300"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                Contact Me
              </a>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-transparent px-5 py-3 text-sm font-semibold text-slate-600 transition hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
              >
                <Linkedin className="h-4 w-4" aria-hidden="true" />
                LinkedIn
              </a>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {data.profile.metrics.map((metric) => (
                <div
                  key={metric.label}
                  data-hero-metric
                  className="rounded-[1.6rem] border border-slate-200 bg-white/75 p-5 backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/80"
                >
                  <p className="text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">
                    {metric.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden min-h-[34rem] lg:block">
            <div className="absolute inset-x-8 top-8 h-48 rounded-full bg-emerald-300/30 blur-3xl dark:bg-emerald-500/20" />
            <div className="absolute inset-x-12 bottom-6 h-40 rounded-full bg-sky-300/25 blur-3xl dark:bg-sky-500/15" />

            <div className="relative mx-auto max-w-[34rem]">
              <div data-hero-card>
                <div
                  data-float
                  className="rounded-[2.25rem] border border-white/70 bg-white/80 p-7 shadow-[0_30px_80px_rgba(15,23,42,0.16)] backdrop-blur dark:border-slate-800 dark:bg-slate-900/80"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                        Current focus
                      </p>
                      <h2 className="mt-3 text-2xl font-semibold text-slate-950 dark:text-white">
                        Engineering for fintech, banking, and internal platforms
                      </h2>
                    </div>
                    <div className="rounded-2xl bg-emerald-50 p-3 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300">
                      <ShieldCheck className="h-6 w-6" aria-hidden="true" />
                    </div>
                  </div>

                  <div className="mt-6 grid gap-4">
                    {data.profile.focus.map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-slate-200 bg-slate-50/90 px-4 py-4 text-sm leading-6 text-slate-700 dark:border-slate-800 dark:bg-slate-950/80 dark:text-slate-200"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div data-hero-card className="absolute -left-6 top-10 w-56">
                <div
                  data-float
                  className="rounded-[1.8rem] border border-slate-200 bg-white/90 p-5 shadow-xl backdrop-blur dark:border-slate-800 dark:bg-slate-900/90"
                >
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl bg-slate-950 p-3 text-white dark:bg-white dark:text-slate-950">
                      <BriefcaseBusiness
                        className="h-5 w-5"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                        Production
                      </p>
                      <p className="mt-1 text-sm font-semibold text-slate-950 dark:text-white">
                        FSMOne + UK digital banking
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div data-hero-card className="absolute -right-4 top-28 w-60">
                <div
                  data-float
                  className="rounded-[1.8rem] border border-slate-200 bg-slate-950 p-5 text-white shadow-xl dark:border-slate-700 dark:bg-slate-900"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
                    Core stack
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {["Flutter", "Spring Boot", "Angular", "AWS"].map(
                      (item) => (
                        <span
                          key={item}
                          className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-white"
                        >
                          {item}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              </div>

              <div data-hero-card className="absolute bottom-5 left-8 w-60">
                <div
                  data-float
                  className="rounded-[1.8rem] border border-emerald-200 bg-emerald-50/95 p-5 shadow-xl backdrop-blur dark:border-emerald-400/20 dark:bg-emerald-500/10"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-300">
                    Delivery profile
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-700 dark:text-slate-100">
                    Mobile, backend, dashboards, APIs, deployment flows, and the
                    coordination needed to ship them.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-10">
          <Reveal className="overflow-hidden rounded-full border border-slate-200 bg-white/80 py-4 shadow-soft dark:border-slate-800 dark:bg-slate-900/80">
            <div className="marquee-track">
              {[...marqueeItems, ...marqueeItems].map((item, index) => (
                <span
                  key={`${item}-${index}`}
                  className="mx-4 inline-flex items-center gap-4 text-sm font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-300"
                >
                  <Cpu
                    className="h-4 w-4 text-emerald-500"
                    aria-hidden="true"
                  />
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-8">
          <Reveal className="grid gap-5 md:grid-cols-3">
            {data.strengths.map((item) => (
              <article
                key={item.title}
                className="relative overflow-hidden rounded-[1.9rem] border border-slate-200 bg-white/85 p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/85"
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-400 via-sky-400 to-slate-900 dark:to-white" />
                <h3 className="text-lg font-semibold text-slate-950 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {item.description}
                </p>
              </article>
            ))}
          </Reveal>
        </section>

        <section id="experience" className="mx-auto max-w-6xl px-6 py-16">
          <Reveal>
            <SectionHeading
              eyebrow="Experience"
              title="Built around real systems, regulated workflows, and product delivery pressure."
              body="The portfolio is now organized around shipped work. The strongest signal is not the number of tools used, but the kinds of systems delivered and the constraints they had to satisfy."
            />
          </Reveal>
          <div className="mt-10 space-y-6">
            {data.experiences.map((experience, index) => (
              <Reveal
                key={`${experience.company}-${experience.role}`}
                className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white/90 p-7 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/90"
              >
                <div className="absolute inset-y-6 left-0 w-1 rounded-r-full bg-gradient-to-b from-emerald-400 via-sky-400 to-transparent" />
                <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                  <div className="space-y-5 pl-2 lg:pl-4">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-11 min-w-11 items-center justify-center rounded-2xl bg-slate-950 text-sm font-semibold text-white dark:bg-white dark:text-slate-950">
                        0{index + 1}
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                          {experience.period}
                        </p>
                        <p className="mt-1 text-sm font-medium text-slate-500 dark:text-slate-400">
                          {experience.location}
                        </p>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-slate-950 dark:text-white">
                        {experience.role}
                      </h3>
                      <p className="mt-2 text-base font-medium text-slate-600 dark:text-slate-300">
                        {experience.company}
                      </p>
                      <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
                        {experience.summary}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {experience.stack.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-slate-600 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <ul className="grid gap-3 border-l border-slate-200 pl-5 dark:border-slate-800">
                    {experience.achievements.map((item) => (
                      <li
                        key={item}
                        className="rounded-[1.5rem] border border-slate-200 bg-slate-50/80 px-5 py-4 text-sm leading-7 text-slate-700 dark:border-slate-800 dark:bg-slate-950/70 dark:text-slate-200"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-6xl px-6 py-16">
          <Reveal>
            <SectionHeading
              eyebrow="Projects"
              title="Selected projects with cleaner context and clearer signal."
              body="This section stays concise: what the project was, what I contributed, and why the work mattered."
            />
          </Reveal>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {data.projects.map((project) => (
              <Reveal
                key={project.title}
                className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-7 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-400 via-sky-400 to-slate-950 dark:to-white" />
                <div className="flex flex-1 flex-col">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                      Project
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold text-slate-950 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
                      {project.summary}
                    </p>
                  </div>

                  <div className="mt-6 space-y-5">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                        Role
                      </p>
                      <p className="mt-2 text-sm leading-7 text-slate-700 dark:text-slate-200">
                        {project.role}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                        Impact
                      </p>
                      <p className="mt-2 text-sm leading-7 text-slate-700 dark:text-slate-200">
                        {project.impact}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-slate-600 dark:border-slate-700 dark:text-slate-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3 border-t border-slate-200 pt-5 dark:border-slate-800">
                    {project.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition hover:text-emerald-700 dark:text-slate-100 dark:hover:text-emerald-300"
                      >
                        {link.label}
                        <ExternalLink className="h-4 w-4" aria-hidden="true" />
                      </a>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-6xl px-6 py-16">
          <Reveal>
            <SectionHeading
              eyebrow="Skills"
              title="A stack shaped by delivery across mobile, backend, infrastructure, and operations."
              body="This is not a keyword dump. It reflects the technologies that show up repeatedly in shipped work across apps, APIs, cloud services, and release management."
            />
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {data.skillGroups.map((group) => (
              <Reveal
                key={group.title}
                className="rounded-[2rem] border border-slate-200 bg-white/85 p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/85"
              >
                <h3 className="text-lg font-semibold text-slate-950 dark:text-white">
                  {group.title}
                </h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-slate-100 px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-200 dark:bg-slate-950 dark:text-slate-200 dark:hover:bg-slate-800"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="education" className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal className="rounded-[2rem] border border-slate-200 bg-white/85 p-7 shadow-soft dark:border-slate-800 dark:bg-slate-900/85">
              <SectionHeading
                eyebrow="Education"
                title="Academic grounding backed by practical product work."
                body="The resume shows strong academic performance, but the portfolio keeps the emphasis on how those fundamentals translated into shipped systems and team execution."
              />
            </Reveal>
            <Reveal className="grid gap-6">
              {data.education.map((item) => (
                <article
                  key={item.school}
                  className="rounded-[2rem] border border-slate-200 bg-white/85 p-7 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/85"
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <div className="mb-4 inline-flex rounded-2xl bg-slate-100 p-3 text-slate-700 dark:bg-slate-950 dark:text-slate-200">
                        <GraduationCap className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <h3 className="text-xl font-semibold text-slate-950 dark:text-white">
                        {item.school}
                      </h3>
                      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                        {item.degree}
                      </p>
                    </div>
                    <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                      {item.period}
                    </p>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-slate-700 dark:text-slate-200">
                    {item.detail}
                  </p>
                </article>
              ))}
              <article className="rounded-[2rem] border border-emerald-200 bg-emerald-50/70 p-7 shadow-soft dark:border-emerald-400/20 dark:bg-emerald-500/10">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700 dark:text-emerald-300">
                  Leadership
                </p>
                <h3 className="mt-3 text-xl font-semibold text-slate-950 dark:text-white">
                  {data.leadership.title}
                </h3>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  {data.leadership.org} · {data.leadership.period}
                </p>
                <p className="mt-4 text-sm leading-7 text-slate-700 dark:text-slate-200">
                  {data.leadership.description}
                </p>
              </article>
            </Reveal>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-6 pb-24 pt-16">
          <Reveal className="rounded-[2.25rem] border border-slate-200 bg-slate-950 px-8 py-10 text-white shadow-[0_35px_90px_rgba(15,23,42,0.28)] dark:border-slate-800">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl space-y-5">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300">
                  Contact
                </p>
                <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  Open to software engineering roles where product quality and
                  execution matter.
                </h2>
                <p className="text-base leading-7 text-slate-300">
                  I am most relevant to teams building fintech, digital banking,
                  backend platforms, or mobile products that need disciplined
                  engineering and reliable delivery.
                </p>
              </div>
              <div className="grid gap-3 sm:min-w-[18rem]">
                <a
                  href={`mailto:${contact.email}`}
                  className="inline-flex items-center justify-between rounded-2xl bg-white px-5 py-4 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-emerald-100"
                >
                  <span className="inline-flex items-center gap-2">
                    <Mail className="h-4 w-4" aria-hidden="true" />
                    {contact.email}
                  </span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-between rounded-2xl border border-slate-700 px-5 py-4 text-sm font-semibold text-white transition hover:border-emerald-400 hover:text-emerald-300"
                >
                  <span className="inline-flex items-center gap-2">
                    <Linkedin className="h-4 w-4" aria-hidden="true" />
                    LinkedIn
                  </span>
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
                {/* <a
                  href={contact.portfolio}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-between rounded-2xl border border-slate-700 px-5 py-4 text-sm font-semibold text-white transition hover:border-emerald-400 hover:text-emerald-300"
                >
                  <span className="inline-flex items-center gap-2">
                    <Building2 className="h-4 w-4" aria-hidden="true" />
                    Live Portfolio
                  </span>
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a> */}
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-between rounded-2xl border border-slate-700 px-5 py-4 text-sm font-semibold text-white transition hover:border-emerald-400 hover:text-emerald-300"
                >
                  <span className="inline-flex items-center gap-2">
                    <Github className="h-4 w-4" aria-hidden="true" />
                    GitHub
                  </span>
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer name={data.profile.name} versionLabel="GPT-5.4 revamp edition" />
    </>
  );
}
