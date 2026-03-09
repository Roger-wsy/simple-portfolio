import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const stars = [
  { top: "8%", left: "10%", size: "h-1.5 w-1.5" },
  { top: "16%", left: "28%", size: "h-1 w-1" },
  { top: "12%", left: "64%", size: "h-2 w-2" },
  { top: "24%", left: "82%", size: "h-1.5 w-1.5" },
  { top: "38%", left: "18%", size: "h-1 w-1" },
  { top: "52%", left: "72%", size: "h-1.5 w-1.5" },
  { top: "66%", left: "8%", size: "h-2 w-2" },
  { top: "74%", left: "44%", size: "h-1 w-1" },
  { top: "82%", left: "88%", size: "h-1.5 w-1.5" },
];

export default function SectionStars() {
  const ref = useRef(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return undefined;

    const ctx = gsap.context(() => {
      gsap.to("[data-section-star]", {
        opacity: 1,
        scale: 1.2,
        duration: 1.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.18,
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.08),transparent_24%),radial-gradient(circle_at_80%_20%,rgba(56,189,248,0.08),transparent_24%)]" />
      {stars.map((star, index) => (
        <span
          key={`${star.top}-${star.left}-${index}`}
          data-section-star
          className={`absolute rounded-full bg-white/80 opacity-50 shadow-[0_0_18px_rgba(56,189,248,0.2)] dark:bg-white/70 ${star.size}`}
          style={{ top: star.top, left: star.left }}
        />
      ))}
    </div>
  );
}
