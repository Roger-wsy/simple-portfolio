import { Menu, X } from "lucide-react";
import { useEffect, useId, useState } from "react";
import GravityMark from "../GravityMark.jsx";

export default function Header({ name, navigation, controls }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHref, setActiveHref] = useState(navigation[0]?.href || "#overview");
  const menuId = useId();

  useEffect(() => {
    const sections = navigation
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveHref(`#${visible.target.id}`);
      },
      { rootMargin: "-18% 0px -68%", threshold: [0, 0.2, 0.6] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [navigation]);

  useEffect(() => {
    if (!isOpen) return undefined;
    const close = (event) => {
      if (event.type === "keydown" && event.key !== "Escape") return;
      setIsOpen(false);
    };
    window.addEventListener("keydown", close);
    window.addEventListener("resize", close);
    return () => {
      window.removeEventListener("keydown", close);
      window.removeEventListener("resize", close);
    };
  }, [isOpen]);

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="wordmark" href="#overview" aria-label={`${name}, home`}>
          <GravityMark />
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={activeHref === item.href ? "is-active" : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          {controls}
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={isOpen}
            aria-controls={menuId}
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
            onClick={() => setIsOpen((value) => !value)}
          >
            {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>

      {isOpen ? (
        <nav id={menuId} className="mobile-nav" aria-label="Mobile navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
              <span>{item.label}</span>
              <span aria-hidden="true">↘</span>
            </a>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
