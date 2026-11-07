import { gsap } from "gsap";
import { useEffect, useRef } from "react";

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

export default function GravityField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const host = canvas?.parentElement;
    const context = canvas?.getContext("2d");
    if (!canvas || !host || !context) return undefined;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const field = {
      width: 0,
      height: 0,
      pointerX: 0.72,
      pointerY: 0.42,
      energy: 0.18,
      visible: true,
      dark: false,
      ink: "#171815",
      fieldColor: "#171815",
      signal: "#ef462f",
    };

    const readPalette = () => {
      const styles = window.getComputedStyle(document.documentElement);
      field.dark = document.documentElement.classList.contains("dark");
      field.ink = styles.getPropertyValue("--ink").trim() || field.ink;
      field.fieldColor = styles.getPropertyValue("--field").trim() || field.fieldColor;
      field.signal = styles.getPropertyValue("--signal").trim() || field.signal;
    };

    const resize = () => {
      const bounds = host.getBoundingClientRect();
      const density = Math.min(window.devicePixelRatio || 1, 1.5);
      field.width = Math.max(1, bounds.width);
      field.height = Math.max(1, bounds.height);
      canvas.width = Math.round(field.width * density);
      canvas.height = Math.round(field.height * density);
      canvas.style.width = `${field.width}px`;
      canvas.style.height = `${field.height}px`;
      context.setTransform(density, 0, 0, density, 0, 0);
    };

    const fieldSlope = (x, y, time) => {
      let slope = Math.sin(y * 0.012 + time * 0.16) * 0.055;
      const wells = [
        { x: field.width * 0.61, y: field.height * 0.43, swirl: 1.05, pull: 0.2 },
        {
          x: field.width * field.pointerX,
          y: field.height * field.pointerY,
          swirl: 0.72 * field.energy,
          pull: 0.12 * field.energy,
        },
      ];

      wells.forEach((well) => {
        const dx = x - well.x;
        const dy = y - well.y;
        const distance = Math.max(1, Math.hypot(dx, dy));
        const falloff = Math.exp(-distance / Math.max(180, field.width * 0.24));
        slope += ((dx / distance) * well.swirl + (dy / distance) * well.pull) * falloff;
      });

      return clamp(slope, -1.1, 1.1);
    };

    const draw = (time = 0) => {
      const { width, height } = field;
      if (!width || !height) return;

      context.clearRect(0, 0, width, height);
      const lineCount = width < 700 ? 12 : 20;
      const step = width < 700 ? 22 : 18;

      context.lineWidth = field.dark ? 1.25 : 0.75;
      context.strokeStyle = field.fieldColor;
      context.globalAlpha = field.dark ? 0.58 : 0.13;

      for (let line = 0; line < lineCount; line += 1) {
        let x = -step;
        let y = ((line + 0.5) / lineCount) * height + Math.sin(line * 1.7 + time * 0.22) * 5;
        context.beginPath();
        context.moveTo(x, y);

        while (x < width + step) {
          y += fieldSlope(x, y, time) * step;
          x += step;
          context.lineTo(x, y);
        }

        context.stroke();
      }

      context.globalAlpha = field.dark ? 0.76 : 0.18;
      context.fillStyle = field.fieldColor;
      const pointGap = width < 700 ? 74 : 88;
      for (let y = pointGap * 0.6; y < height; y += pointGap) {
        for (let x = pointGap * 0.6; x < width; x += pointGap) {
          const offset = Math.sin(x * 0.008 + y * 0.011 + time * 0.24) * 3;
          context.beginPath();
          context.arc(x + offset, y - offset, 0.9, 0, Math.PI * 2);
          context.fill();
        }
      }

      const focusX = width * 0.61;
      const focusY = height * 0.43;
      context.globalAlpha = field.dark ? 0.9 : 0.28;
      context.strokeStyle = field.signal;
      context.lineWidth = 1;
      context.beginPath();
      context.arc(focusX, focusY, 34 + Math.sin(time * 0.8) * 3, 0.15, Math.PI * 1.25);
      context.stroke();
      context.globalAlpha = 1;
    };

    let running = false;
    const start = () => {
      if (running || reduceMotion || !field.visible || document.hidden) return;
      running = true;
      gsap.ticker.add(draw);
    };
    const stop = () => {
      if (!running) return;
      running = false;
      gsap.ticker.remove(draw);
    };

    const pointerXTo = gsap.quickTo(field, "pointerX", {
      duration: 0.75,
      ease: "power3.out",
    });
    const pointerYTo = gsap.quickTo(field, "pointerY", {
      duration: 0.75,
      ease: "power3.out",
    });
    const energyTo = gsap.quickTo(field, "energy", {
      duration: 0.55,
      ease: "power2.out",
    });

    const onPointerMove = (event) => {
      const bounds = host.getBoundingClientRect();
      pointerXTo(clamp((event.clientX - bounds.left) / bounds.width, 0, 1));
      pointerYTo(clamp((event.clientY - bounds.top) / bounds.height, 0, 1));
      energyTo(1);
    };
    const onPointerLeave = () => energyTo(0.18);
    const onVisibilityChange = () => (document.hidden ? stop() : start());

    const resizeObserver = new ResizeObserver(() => {
      resize();
      if (reduceMotion) draw(0);
    });
    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        field.visible = entry.isIntersecting;
        if (field.visible) start();
        else stop();
      },
      { threshold: 0.02 },
    );
    const themeObserver = new MutationObserver(() => {
      readPalette();
      if (reduceMotion) draw(0);
    });

    readPalette();
    resize();
    draw(0);
    resizeObserver.observe(host);
    intersectionObserver.observe(host);
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    document.addEventListener("visibilitychange", onVisibilityChange);

    if (!reduceMotion) {
      host.addEventListener("pointermove", onPointerMove, { passive: true });
      host.addEventListener("pointerleave", onPointerLeave);
      start();
    }

    return () => {
      stop();
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      themeObserver.disconnect();
      document.removeEventListener("visibilitychange", onVisibilityChange);
      host.removeEventListener("pointermove", onPointerMove);
      host.removeEventListener("pointerleave", onPointerLeave);
      gsap.killTweensOf(field);
    };
  }, []);

  return <canvas ref={canvasRef} className="gravity-field" data-gravity-field aria-hidden="true" />;
}
