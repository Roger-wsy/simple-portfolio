import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function HeroBackdrop() {
  const ref = useRef(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return undefined;

    const ctx = gsap.context(() => {
      gsap.to("[data-orbit]", {
        rotate: 360,
        transformOrigin: "50% 50%",
        duration: 32,
        repeat: -1,
        ease: "none",
        stagger: 2,
      });

      gsap.to("[data-grid]", {
        y: 24,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to("[data-beam-left]", {
        x: 18,
        opacity: 0.9,
        duration: 5.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to("[data-beam-right]", {
        x: -22,
        opacity: 0.85,
        duration: 6.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to("[data-node]", {
        scale: 1.18,
        opacity: 1,
        duration: 1.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.22,
      });
    }, root);

    return () => ctx.revert();
  }, []);

    return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[54rem] overflow-hidden"
    >
      <div className="absolute inset-x-0 top-0 h-[54rem] bg-[radial-gradient(circle_at_18%_12%,_rgba(16,185,129,0.18),_transparent_30%),radial-gradient(circle_at_86%_12%,_rgba(14,165,233,0.16),_transparent_24%),radial-gradient(circle_at_50%_40%,_rgba(15,23,42,0.05),_transparent_40%),linear-gradient(180deg,_rgba(255,255,255,0.98),_rgba(245,247,250,0.98))] dark:bg-[radial-gradient(circle_at_18%_12%,_rgba(16,185,129,0.18),_transparent_28%),radial-gradient(circle_at_86%_12%,_rgba(56,189,248,0.14),_transparent_22%),radial-gradient(circle_at_50%_40%,_rgba(15,23,42,0.3),_transparent_36%),linear-gradient(180deg,_rgba(2,6,23,0.98),_rgba(2,6,23,1))]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.7),transparent_18%),radial-gradient(circle_at_18%_30%,rgba(255,255,255,0.45),transparent_14%),radial-gradient(circle_at_82%_24%,rgba(255,255,255,0.4),transparent_12%),radial-gradient(circle_at_12%_62%,rgba(255,255,255,0.3),transparent_10%),radial-gradient(circle_at_76%_68%,rgba(255,255,255,0.38),transparent_10%),radial-gradient(circle_at_58%_54%,rgba(255,255,255,0.25),transparent_8%)] opacity-50 dark:opacity-35" />

      <svg
        viewBox="0 0 1440 860"
        className="absolute inset-0 h-full w-full opacity-80 dark:opacity-70"
        preserveAspectRatio="xMidYMin slice"
      >
        <defs>
          <linearGradient id="heroBeam" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(16,185,129,0)" />
            <stop offset="50%" stopColor="rgba(16,185,129,0.5)" />
            <stop offset="100%" stopColor="rgba(56,189,248,0)" />
          </linearGradient>
          <linearGradient id="heroLine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(15,23,42,0.02)" />
            <stop offset="50%" stopColor="rgba(15,23,42,0.16)" />
            <stop offset="100%" stopColor="rgba(15,23,42,0.02)" />
          </linearGradient>
          <radialGradient id="heroNode" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(16,185,129,0.95)" />
            <stop offset="100%" stopColor="rgba(16,185,129,0)" />
          </radialGradient>
        </defs>

        <g data-grid opacity="0.5">
          <path d="M-20 140 H1460" stroke="url(#heroLine)" strokeWidth="1" />
          <path d="M-20 260 H1460" stroke="url(#heroLine)" strokeWidth="1" />
          <path d="M-20 380 H1460" stroke="url(#heroLine)" strokeWidth="1" />
          <path d="M-20 500 H1460" stroke="url(#heroLine)" strokeWidth="1" />
          <path d="M-20 620 H1460" stroke="url(#heroLine)" strokeWidth="1" />
          <path d="M180 -30 V760" stroke="rgba(15,23,42,0.08)" strokeWidth="1" />
          <path d="M420 -30 V760" stroke="rgba(15,23,42,0.08)" strokeWidth="1" />
          <path d="M660 -30 V760" stroke="rgba(15,23,42,0.08)" strokeWidth="1" />
          <path d="M900 -30 V760" stroke="rgba(15,23,42,0.08)" strokeWidth="1" />
          <path d="M1140 -30 V760" stroke="rgba(15,23,42,0.08)" strokeWidth="1" />
        </g>

        <g opacity="0.45">
          <path
            d="M120 720 C280 610, 500 600, 690 700 S1030 810, 1320 700"
            stroke="rgba(16,185,129,0.12)"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M40 120 C260 40, 520 40, 740 150 S1150 260, 1410 150"
            stroke="rgba(56,189,248,0.12)"
            strokeWidth="1"
            fill="none"
          />
        </g>

        <g opacity="0.9">
          <path
            data-beam-left
            d="M-60 240 C180 120, 400 140, 610 250 S980 420, 1260 260"
            stroke="url(#heroBeam)"
            strokeWidth="2"
            fill="none"
          />
          <path
            data-beam-right
            d="M1180 40 C980 140, 930 320, 1080 470 S1310 700, 1510 620"
            stroke="url(#heroBeam)"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M250 540 C430 460, 610 470, 740 540 S1020 650, 1210 560"
            stroke="rgba(56,189,248,0.18)"
            strokeWidth="1.4"
            fill="none"
          />
        </g>

        <g data-orbit opacity="0.75">
          <circle cx="1020" cy="250" r="170" stroke="rgba(16,185,129,0.16)" strokeWidth="1" fill="none" />
          <circle cx="1020" cy="250" r="108" stroke="rgba(56,189,248,0.16)" strokeWidth="1" fill="none" />
          <circle cx="1020" cy="250" r="216" stroke="rgba(255,255,255,0.12)" strokeWidth="1" fill="none" />
          <path d="M1020 34 V466" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
          <path d="M804 250 H1236" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
          <circle data-node cx="1190" cy="250" r="9" fill="url(#heroNode)" />
          <circle data-node cx="1020" cy="80" r="7" fill="url(#heroNode)" />
          <circle data-node cx="874" cy="250" r="6" fill="url(#heroNode)" />
          <circle data-node cx="1020" cy="466" r="5" fill="url(#heroNode)" />
        </g>

        <g data-orbit opacity="0.68">
          <circle cx="360" cy="220" r="116" stroke="rgba(15,23,42,0.12)" strokeWidth="1" fill="none" />
          <circle cx="360" cy="220" r="162" stroke="rgba(56,189,248,0.12)" strokeWidth="1" fill="none" />
          <path d="M198 220 H522" stroke="rgba(15,23,42,0.08)" strokeWidth="1" />
          <path d="M360 58 V382" stroke="rgba(15,23,42,0.08)" strokeWidth="1" />
          <circle data-node cx="476" cy="220" r="8" fill="url(#heroNode)" />
          <circle data-node cx="360" cy="104" r="6" fill="url(#heroNode)" />
          <circle data-node cx="244" cy="220" r="5" fill="url(#heroNode)" />
        </g>

        <g data-orbit opacity="0.56">
          <circle cx="760" cy="560" r="124" stroke="rgba(16,185,129,0.14)" strokeWidth="1" fill="none" />
          <circle cx="760" cy="560" r="188" stroke="rgba(56,189,248,0.1)" strokeWidth="1" fill="none" />
          <path d="M572 560 H948" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
          <path d="M760 372 V748" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
          <circle data-node cx="884" cy="560" r="7" fill="url(#heroNode)" />
          <circle data-node cx="760" cy="436" r="6" fill="url(#heroNode)" />
          <circle data-node cx="760" cy="748" r="5" fill="url(#heroNode)" />
        </g>

        <g opacity="0.9">
          <circle data-node cx="230" cy="500" r="7" fill="url(#heroNode)" />
          <circle data-node cx="780" cy="170" r="6" fill="url(#heroNode)" />
          <circle data-node cx="1280" cy="520" r="7" fill="url(#heroNode)" />
          <circle data-node cx="1180" cy="150" r="5" fill="url(#heroNode)" />
          <circle data-node cx="610" cy="680" r="6" fill="url(#heroNode)" />
          <circle data-node cx="150" cy="250" r="4" fill="url(#heroNode)" />
        </g>
      </svg>
    </div>
  );
}
