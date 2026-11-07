import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowDownRight,
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import { useEffect, useRef } from "react";
import GravityField from "../components/GravityField.jsx";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

function HeroTrajectory() {
  return (
    <svg
      className="hero-trajectory"
      viewBox="0 0 1440 820"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        className="hero-trajectory__ghost"
        d="M -120 145 C 210 165 595 190 820 335 C 1045 480 987 680 665 764 C 390 835 325 915 486 1020"
      />
      <path
        data-orbit-path
        data-trajectory
        className="hero-trajectory__line"
        pathLength="1"
        d="M -120 145 C 210 165 595 190 820 335 C 1045 480 987 680 665 764 C 390 835 325 915 486 1020"
      />
      <circle className="trajectory-traveler" data-orbit-traveler r="6" />
      <circle cx="829" cy="341" r="9" className="trajectory-node trajectory-node--current" />
      <circle cx="665" cy="764" r="5" className="trajectory-node trajectory-node--past" />
    </svg>
  );
}

function TextLink({ href, children, external = false, download = false }) {
  return (
    <a
      className="text-link"
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      download={download || undefined}
    >
      <span>{children}</span>
      {external ? <ArrowUpRight aria-hidden="true" /> : <ArrowDownRight aria-hidden="true" />}
    </a>
  );
}

export default function RevampPortfolio({ data }) {
  const { profile } = data;
  const mainRef = useRef(null);
  const heroRef = useRef(null);
  const careerRef = useRef(null);

  useEffect(() => {
    const root = mainRef.current;
    const career = careerRef.current;
    if (!root || !heroRef.current || !career) return undefined;

    const select = gsap.utils.selector(root);
    const media = gsap.matchMedia();

    media.add(
      {
        isDesktop: "(min-width: 981px)",
        isMobile: "(max-width: 980px)",
        reduceMotion: "(prefers-reduced-motion: reduce)",
      },
      (context) => {
        const { isDesktop, reduceMotion } = context.conditions;
        const path = select("[data-orbit-path]")[0];
        const traveler = select("[data-orbit-traveler]")[0];
        const currentNode = select(".trajectory-node--current")[0];
        const gravityField = select("[data-gravity-field]")[0];

        if (reduceMotion) {
          gsap.set(select("[data-trajectory]"), { strokeDashoffset: 0 });
          gsap.set(traveler, { autoAlpha: 0 });
          return undefined;
        }

        const heroTimeline = gsap.timeline({
          defaults: { ease: "expo.out" },
        });

        heroTimeline
          .addLabel("launch")
          .fromTo(
            "[data-name-line]",
            { yPercent: 108, rotation: 1.5 },
            { yPercent: 0, rotation: 0, duration: 1.05, stagger: 0.075 },
            "launch",
          )
          .fromTo(
            path,
            { strokeDashoffset: 1 },
            { strokeDashoffset: 0, duration: 1.55, ease: "power2.inOut" },
            "launch+=0.08",
          )
          .set(traveler, { autoAlpha: 1 }, "launch+=0.12")
          .fromTo(
            traveler,
            {
              motionPath: {
                path,
                align: path,
                alignOrigin: [0.5, 0.5],
                start: 0.02,
                end: 0.02,
              },
            },
            {
              motionPath: {
                path,
                align: path,
                alignOrigin: [0.5, 0.5],
                start: 0.02,
                end: isDesktop ? 0.43 : 0.36,
              },
              duration: 1.45,
              ease: "power2.inOut",
            },
            "launch+=0.14",
          )
          .fromTo(
            "[data-hero-detail]",
            { autoAlpha: 0, y: 14 },
            { autoAlpha: 1, y: 0, duration: 0.62, stagger: 0.055 },
            "launch+=0.48",
          )
          .fromTo(
            currentNode,
            { scale: 0.4, transformOrigin: "center" },
            { scale: 1, duration: 0.55 },
            "launch+=1.28",
          )
          .to(traveler, { autoAlpha: 0, duration: 0.24 }, "launch+=1.5");

        gsap.to(gravityField, {
          yPercent: isDesktop ? 10 : 5,
          autoAlpha: 0.4,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.5,
          },
        });

        const progressLine = select(".career-route__progress")[0];
        const marker = select(".career-route__marker")[0];
        const route = select(".career-route")[0];

        gsap.fromTo(
          progressLine,
          { scaleY: 0, transformOrigin: "top" },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: career,
              start: "top 68%",
              end: "bottom 38%",
              scrub: 0.45,
            },
          },
        );

        gsap.fromTo(
          marker,
          { y: 0 },
          {
            y: () => Math.max(0, route.offsetHeight - marker.offsetHeight),
            ease: "none",
            scrollTrigger: {
              trigger: career,
              start: "top 68%",
              end: "bottom 38%",
              scrub: 0.45,
              invalidateOnRefresh: true,
            },
          },
        );

        select(".career-entry").forEach((entry) => {
          const body = entry.querySelector(".career-entry__body");
          gsap.fromTo(
            body,
            { x: isDesktop ? 34 : 14, clipPath: "inset(0 0 0 8%)" },
            {
              x: 0,
              clipPath: "inset(0 0 0 0%)",
              duration: 0.72,
              ease: "expo.out",
              scrollTrigger: {
                trigger: entry,
                start: "top 76%",
                toggleActions: "play none none reverse",
                toggleClass: { targets: entry, className: "is-active" },
              },
            },
          );
        });

        select(".project-entry").forEach((entry, index) => {
          gsap.fromTo(
            entry,
            {
              x: isDesktop ? (index % 2 === 0 ? -46 : 46) : 16,
              autoAlpha: 0.35,
              clipPath: isDesktop ? "inset(0 5% 0 5%)" : "inset(0 0 0 5%)",
            },
            {
              x: 0,
              autoAlpha: 1,
              clipPath: "inset(0 0% 0 0%)",
              duration: 0.8,
              ease: "expo.out",
              scrollTrigger: {
                trigger: entry,
                start: "top 82%",
                once: true,
              },
            },
          );
        });

        gsap.fromTo(
          select(".skill-row"),
          { clipPath: "inset(0 100% 0 0)" },
          {
            clipPath: "inset(0 0% 0 0)",
            duration: 0.7,
            stagger: 0.09,
            ease: "expo.out",
            scrollTrigger: {
              trigger: select(".skills-index")[0],
              start: "top 78%",
              once: true,
            },
          },
        );

        gsap.fromTo(
          select(".education-grid article"),
          { y: 24, autoAlpha: 0.4 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.72,
            stagger: 0.1,
            ease: "expo.out",
            scrollTrigger: {
              trigger: select(".education-grid")[0],
              start: "top 78%",
              once: true,
            },
          },
        );

        gsap.to(select(".contact-orbit__ring")[0], {
          rotation: isDesktop ? 170 : 90,
          ease: "none",
          scrollTrigger: {
            trigger: select(".contact-section")[0],
            start: "top bottom",
            end: "bottom bottom",
            scrub: 0.6,
          },
        });

        gsap.fromTo(
          select(".contact-section h2")[0],
          { clipPath: "inset(0 0 100% 0)", y: 22 },
          {
            clipPath: "inset(0 0 0% 0)",
            y: 0,
            duration: 0.85,
            ease: "expo.out",
            scrollTrigger: {
              trigger: select(".contact-section")[0],
              start: "top 62%",
              once: true,
            },
          },
        );

        ScrollTrigger.refresh();
        return undefined;
      },
      root,
    );

    return () => media.revert();
  }, []);

  return (
    <main id="main-content" ref={mainRef}>
      <section id="overview" className="hero" ref={heroRef}>
        <GravityField />
        <HeroTrajectory />

        <div className="hero-meta hero-meta--location" data-hero-detail>
          <span>01°17′33″ N</span>
          <span>103°50′00″ E</span>
          <strong>Singapore</strong>
        </div>

        <div className="hero-name" aria-label={profile.name}>
          {["Roger", "Wong", "Sie Yang"].map((line) => (
            <div className="hero-name__mask" key={line}>
              <span data-name-line aria-hidden="true">
                {line}
              </span>
            </div>
          ))}
        </div>

        <div className="hero-statement" data-hero-detail>
          <p>{profile.subheadline}</p>
        </div>

        <div className="current-position" data-hero-detail>
          <span className="current-position__node" aria-hidden="true" />
          <p>
            <strong>Athena Dynamics</strong>
            <span>Singapore · 2026—Now</span>
          </p>
        </div>

        <div className="hero-focus" data-hero-detail>
          <p className="measure-label">Current focus</p>
          <ol>
            {profile.focus.map((item, index) => (
              <li key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item}
              </li>
            ))}
          </ol>
        </div>

        <div className="hero-actions" data-hero-detail>
          <TextLink href={profile.contact.resume} download>
            Download résumé
          </TextLink>
          <TextLink href={`mailto:${profile.contact.email}`}>Start a conversation</TextLink>
        </div>

        <a className="hero-scroll" href="#experience" data-hero-detail>
          Follow the trajectory
          <ArrowDownRight aria-hidden="true" />
        </a>
      </section>

      <section id="experience" className="career-section" ref={careerRef}>
        <header className="section-intro">
          <h2>Career trajectory</h2>
          <p>
            From production mobile systems and fintech infrastructure to AI-assisted
            compliance—each role added another layer of system ownership.
          </p>
        </header>

        <div className="career-layout">
          <div className="career-route" aria-hidden="true">
            <span className="career-route__base" />
            <span className="career-route__progress" />
            <span className="career-route__marker" />
          </div>

          <div className="career-list">
            {data.experiences.map((experience, index) => (
              <article className="career-entry" key={`${experience.company}-${experience.period}`}>
                <div className="career-entry__index" aria-hidden="true">
                  {String(data.experiences.length - index).padStart(2, "0")}
                </div>
                <div className="career-entry__time">
                  <span>{experience.period}</span>
                  <span>{experience.location}</span>
                </div>
                <div className="career-entry__body">
                  <h3>{experience.role}</h3>
                  <p className="career-entry__company">{experience.company}</p>
                  <p className="career-entry__summary">{experience.summary}</p>
                  <ul>
                    {experience.achievements.map((achievement) => (
                      <li key={achievement}>{achievement}</li>
                    ))}
                  </ul>
                  <p className="career-entry__stack">{experience.stack.join(" · ")}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="projects-section">
        <header className="section-intro section-intro--split">
          <h2>Selected systems</h2>
          <p>
            Three builds that show how I move between infrastructure, product
            experience, and domain-specific workflows.
          </p>
        </header>

        <div className="project-ledger">
          {data.projects.map((project, index) => (
            <article className="project-entry" key={project.title}>
              <div className="project-entry__number" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="project-entry__title">
                <h3>{project.title}</h3>
                <p>{project.role}</p>
              </div>
              <div className="project-entry__detail">
                <p>{project.summary}</p>
                <p className="project-entry__impact">{project.impact}</p>
                <p className="project-entry__tech">{project.technologies.join(" · ")}</p>
              </div>
              <div className="project-entry__links">
                {project.links.map((link) => (
                  <TextLink key={link.href} href={link.href} external>
                    {link.label}
                  </TextLink>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="skills-section">
        <div className="skills-statement">
          <h2>I work across the whole path from interface to infrastructure.</h2>
          <p>
            The tools change with the problem. The constant is ownership: understanding
            the workflow, building the system, and carrying it into production.
          </p>
        </div>
        <div className="skills-index">
          {data.skillGroups.map((group) => (
            <div className="skill-row" key={group.title}>
              <h3>{group.title}</h3>
              <p>{group.items.join(" / ")}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="education" className="education-section">
        <h2>Education and leadership</h2>
        <div className="education-grid">
          <div className="education-list">
            {data.education.map((item) => (
              <article key={item.school}>
                <p className="measure-label">{item.period}</p>
                <h3>{item.degree}</h3>
                <p>{item.school}</p>
                <strong>{item.detail}</strong>
              </article>
            ))}
          </div>
          <article className="leadership-note">
            <p className="measure-label">{data.leadership.period}</p>
            <h3>{data.leadership.title}</h3>
            <p>{data.leadership.org}</p>
            <p>{data.leadership.description}</p>
          </article>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <p className="contact-orbit" aria-hidden="true">
          <span className="contact-orbit__ring" />
          <span className="contact-orbit__label">Open to the next meaningful system</span>
        </p>
        <h2>Let’s build what comes next.</h2>
        <p>
          If my experience fits the role you are hiring for, I would be glad to hear
          about the team, the system, and the problem you are solving.
        </p>
        <div className="contact-actions">
          <a href={`mailto:${profile.contact.email}`}>
            <Mail aria-hidden="true" />
            {profile.contact.email}
          </a>
          <a href={profile.contact.linkedin} target="_blank" rel="noreferrer">
            <Linkedin aria-hidden="true" />
            LinkedIn
          </a>
          <a href={profile.contact.github} target="_blank" rel="noreferrer">
            <Github aria-hidden="true" />
            GitHub
          </a>
          <a href={profile.contact.resume} download>
            <Download aria-hidden="true" />
            Résumé
          </a>
        </div>
        <footer>
          <span>© 2026 {profile.name}</span>
          <a href="#overview">Return to orbit ↑</a>
        </footer>
      </section>
    </main>
  );
}
