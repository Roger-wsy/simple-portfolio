import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Reveal({ as: Tag = "div", className = "", children }) {
  const Component = Tag;
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const ctx = gsap.context(() => {
      gsap.set(node, { autoAlpha: 0, y: 28 });
      gsap.to(node, {
        autoAlpha: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: node,
          start: "top 88%",
          once: true,
        },
      });
    }, node);

    return () => ctx.revert();
  }, []);

  return (
    <Component ref={ref} className={className}>
      {children}
    </Component>
  );
}
