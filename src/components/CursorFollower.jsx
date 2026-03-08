import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const INTERACTIVE_SELECTOR =
  "a, button, input, textarea, select, summary, [role='button'], [data-cursor='interactive']";

export default function CursorFollower() {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isInteractive, setIsInteractive] = useState(false);
  const glowRef = useRef(null);
  const ringRef = useRef(null);
  const dotRef = useRef(null);
  const interactiveRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const canUsePointer = window.matchMedia("(pointer: fine)");

    const updateEnabled = () => {
      setEnabled(!mediaQuery.matches && canUsePointer.matches);
    };

    updateEnabled();
    mediaQuery.addEventListener("change", updateEnabled);
    canUsePointer.addEventListener("change", updateEnabled);

    return () => {
      mediaQuery.removeEventListener("change", updateEnabled);
      canUsePointer.removeEventListener("change", updateEnabled);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return undefined;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (prefersReducedMotion.matches) return undefined;

    gsap.set([glowRef.current, ringRef.current, dotRef.current], {
      xPercent: -50,
      yPercent: -50,
    });

    const glowX = gsap.quickTo(glowRef.current, "x", {
      duration: 0.55,
      ease: "power3.out",
    });
    const glowY = gsap.quickTo(glowRef.current, "y", {
      duration: 0.55,
      ease: "power3.out",
    });
    const ringX = gsap.quickTo(ringRef.current, "x", {
      duration: 0.28,
      ease: "power3.out",
    });
    const ringY = gsap.quickTo(ringRef.current, "y", {
      duration: 0.28,
      ease: "power3.out",
    });
    const dotX = gsap.quickTo(dotRef.current, "x", {
      duration: 0.16,
      ease: "power3.out",
    });
    const dotY = gsap.quickTo(dotRef.current, "y", {
      duration: 0.16,
      ease: "power3.out",
    });

    const updatePointer = (event) => {
      setVisible(true);
      glowX(event.clientX);
      glowY(event.clientY);
      ringX(event.clientX);
      ringY(event.clientY);
      dotX(event.clientX);
      dotY(event.clientY);

      const target = event.target;
      if (target instanceof Element) {
        const interactive = Boolean(target.closest(INTERACTIVE_SELECTOR));
        interactiveRef.current = interactive;
        setIsInteractive(interactive);
        gsap.to(ringRef.current, {
          scale: interactive ? 1.35 : 1,
          borderColor: interactive ? "rgba(16,185,129,0.7)" : "rgba(15,23,42,0.35)",
          backgroundColor: interactive ? "rgba(16,185,129,0.10)" : "rgba(255,255,255,0.10)",
          duration: 0.25,
          overwrite: true,
        });
        gsap.to(dotRef.current, {
          scale: interactive ? 0.72 : 1,
          backgroundColor: interactive ? "#10b981" : "#0f172a",
          duration: 0.22,
          overwrite: true,
        });
      }
    };

    const hidePointer = () => {
      setVisible(false);
      interactiveRef.current = false;
      setIsInteractive(false);
    };

    const handleMouseDown = () => {
      interactiveRef.current = true;
      setIsInteractive(true);
      gsap.to(ringRef.current, {
        scale: 0.92,
        duration: 0.16,
        yoyo: true,
        repeat: 1,
        overwrite: true,
      });
      gsap.to(dotRef.current, {
        scale: 0.6,
        duration: 0.16,
        yoyo: true,
        repeat: 1,
        overwrite: true,
      });
    };

    window.addEventListener("mousemove", updatePointer, { passive: true });
    window.addEventListener("mousedown", handleMouseDown, { passive: true });
    window.addEventListener("mouseleave", hidePointer);

    return () => {
      window.removeEventListener("mousemove", updatePointer);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseleave", hidePointer);
    };
  }, [enabled]);

  if (!enabled) {
    return null;
  }

  return (
    <>
      <div
        ref={glowRef}
        aria-hidden="true"
        className={`pointer-events-none fixed left-0 top-0 z-40 h-48 w-48 rounded-full bg-[radial-gradient(circle,_rgba(16,185,129,0.22)_0%,_rgba(59,130,246,0.16)_34%,_rgba(255,255,255,0)_68%)] blur-3xl transition-opacity duration-300 dark:bg-[radial-gradient(circle,_rgba(16,185,129,0.24)_0%,_rgba(56,189,248,0.18)_34%,_rgba(15,23,42,0)_68%)] ${visible ? "opacity-100" : "opacity-0"}`}
      />
      <div
        ref={ringRef}
        aria-hidden="true"
        className={`pointer-events-none fixed left-0 top-0 z-50 h-10 w-10 rounded-full border border-slate-950/35 bg-white/10 backdrop-blur-[2px] transition-[opacity,border-color,background-color] duration-300 dark:border-white/45 dark:bg-slate-50/5 ${visible ? "opacity-100" : "opacity-0"} ${isInteractive ? "border-emerald-500/70 bg-emerald-500/10 dark:border-emerald-300/80 dark:bg-emerald-300/10" : ""}`}
      />
      <div
        ref={dotRef}
        aria-hidden="true"
        className={`pointer-events-none fixed left-0 top-0 z-[51] h-3 w-3 rounded-full bg-slate-950 shadow-[0_0_24px_rgba(15,23,42,0.28)] transition-[opacity,background-color] duration-300 dark:bg-white dark:shadow-[0_0_24px_rgba(255,255,255,0.22)] ${visible ? "opacity-100" : "opacity-0"} ${isInteractive ? "bg-emerald-500 dark:bg-emerald-300" : ""}`}
      />
    </>
  );
}
