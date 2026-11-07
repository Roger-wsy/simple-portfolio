import { Menu, Orbit, Sparkles, X } from "lucide-react";
import { useEffect, useId, useState } from "react";

export default function Header({ name, navigation, controls, variant = "revamp" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState(navigation[0]?.href || "#overview");
  const menuId = useId();
  const homeHref = navigation[0]?.href || "#overview";
  const isLegacy = variant === "legacy";
  const isJournal = variant === "orbital";

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    const onDismiss = () => {
      setIsOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("scroll", onDismiss, { passive: true });
    window.addEventListener("wheel", onDismiss, { passive: true });
    window.addEventListener("touchmove", onDismiss, { passive: true });

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("scroll", onDismiss);
      window.removeEventListener("wheel", onDismiss);
      window.removeEventListener("touchmove", onDismiss);
    };
  }, [isOpen]);

  useEffect(() => {
    const sectionIds = navigation
      .map((item) => item.href)
      .filter((href) => href.startsWith("#"));

    const sections = sectionIds
      .map((href) => document.querySelector(href))
      .filter(Boolean);

    const updateHeaderState = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 18);

      let current = sectionIds[0] || homeHref;

      sections.forEach((section) => {
        const element = section;
        if (!(element instanceof HTMLElement)) return;

        const top = element.offsetTop - 140;
        if (scrollY >= top) {
          current = `#${element.id}`;
        }
      });

      setActiveHref(current);
    };

    updateHeaderState();
    window.addEventListener("scroll", updateHeaderState, { passive: true });

    return () => window.removeEventListener("scroll", updateHeaderState);
  }, [homeHref, navigation]);

  if (isLegacy) {
    return (
      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-lg dark:border-slate-800 dark:bg-slate-950/80">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a
            href={homeHref}
            className="group inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-indigo-500 shadow-soft transition hover:-translate-y-0.5 hover:border-indigo-300 hover:text-indigo-600 dark:border-slate-800 dark:bg-slate-950"
            aria-label={`${name} — Home`}
            title={name}
            onClick={() => setIsOpen(false)}
          >
            <Orbit
              className="h-5 w-5 animate-[floaty_2.6s_ease-in-out_infinite] transition-transform duration-300 group-hover:rotate-12 motion-reduce:animate-none"
              aria-hidden="true"
            />
          </a>
          <div className="flex items-center gap-6">
            <nav className="hidden items-center gap-5 text-sm font-medium text-slate-600 dark:text-slate-300 md:flex">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="transition-colors hover:text-indigo-500"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <button
              type="button"
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white p-2 text-slate-700 shadow-soft transition hover:-translate-y-0.5 hover:border-indigo-300 hover:text-indigo-600 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 md:hidden"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-controls={menuId}
              aria-expanded={isOpen}
              onClick={() => setIsOpen((prev) => !prev)}
            >
              {isOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>

            <div className="hidden md:block">{controls}</div>
          </div>
        </div>

        {isOpen ? (
          <div className="md:hidden" id={menuId}>
            <div
              className="fixed inset-0 z-40 bg-white/55 backdrop-blur-sm dark:bg-slate-950/40"
              aria-hidden="true"
              onClick={() => setIsOpen(false)}
            />
            <div className="fixed inset-x-0 top-[72px] z-50 mx-auto w-full max-w-6xl px-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-xl dark:border-slate-800 dark:bg-slate-950">
                <nav className="flex flex-col">
                  {navigation.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-indigo-600 dark:text-slate-200 dark:hover:bg-slate-900"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
                <div className="mt-2 border-t border-slate-200 pt-3 dark:border-slate-800">
                  {controls}
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </header>
    );
  }

  return (
    <header
      className={
        isJournal
          ? "fixed inset-x-0 top-0 z-50 border-b border-stone-950/80 bg-[#f7f2ea]/94 backdrop-blur-xl dark:border-[#211910]/80 dark:bg-[#d8c7ae]/94"
          : "fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6"
      }
    >
      <div
        className={`mx-auto flex items-center justify-between transition-all duration-300 ${
          isJournal
            ? isScrolled
              ? "w-full px-5 py-4 shadow-[0_10px_30px_rgba(41,37,36,0.08)] sm:px-8 lg:px-12"
              : "w-full px-5 py-5 sm:px-8 lg:px-12"
            : isScrolled
              ? "max-w-6xl bg-white/82 px-6 py-5 shadow-[0_16px_40px_rgba(15,23,42,0.11)] backdrop-blur-xl dark:bg-slate-950/82"
              : "max-w-6xl bg-white/58 px-6 py-5 shadow-[0_12px_34px_rgba(15,23,42,0.07)] backdrop-blur-xl dark:bg-slate-950/58"
        }`}
      >
        <a
          href={homeHref}
          className={`group relative inline-flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl transition hover:-translate-y-0.5 ${
            isJournal
              ? "border-0 bg-transparent text-stone-950 hover:bg-transparent dark:text-[#211910]"
              : "bg-slate-950 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
          }`}
          aria-label={`${name} — Home`}
          title={name}
          onClick={() => setIsOpen(false)}
        >
          <span
            className={`absolute inset-0 rounded-2xl opacity-90 ${
              isJournal
                ? "bg-transparent"
                : "bg-[radial-gradient(circle_at_30%_30%,rgba(16,185,129,0.45),transparent_40%),radial-gradient(circle_at_70%_70%,rgba(56,189,248,0.32),transparent_44%)]"
            }`}
          />
          <Orbit
            className="relative z-10 h-4 w-4 animate-[floaty_2.8s_ease-in-out_infinite] transition-transform duration-300 group-hover:rotate-12 motion-reduce:animate-none"
            aria-hidden="true"
          />
        </a>
        <div className="flex items-center gap-3 md:gap-5">
          <nav
            className={`hidden items-center gap-1 text-sm font-medium md:flex ${
              isJournal ? "text-stone-600 dark:text-[#5d4a38]" : "text-slate-600 dark:text-slate-300"
            }`}
          >
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`px-3 py-2 transition ${
                  isJournal
                    ? activeHref === item.href
                      ? "border-b-2 border-stone-950 text-stone-950 dark:border-[#211910] dark:text-[#211910]"
                      : "border-b-2 border-transparent hover:border-stone-400 hover:text-stone-950 dark:hover:border-[#8d765f] dark:hover:text-[#211910]"
                    : activeHref === item.href
                    ? "rounded-full bg-white/90 text-slate-950 shadow-sm dark:bg-slate-900 dark:text-white"
                    : "rounded-full hover:bg-white/80 hover:text-emerald-700 dark:hover:bg-slate-900/80 dark:hover:text-emerald-300"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            className={`inline-flex items-center justify-center rounded-2xl p-2.5 shadow-soft transition hover:-translate-y-0.5 md:hidden ${
              isJournal
                ? "border border-stone-950/70 bg-transparent text-stone-700 hover:text-stone-950 dark:border-[#211910]/70 dark:text-[#38291c] dark:hover:text-[#211910]"
                : "bg-white/80 text-slate-700 hover:text-emerald-700 dark:bg-slate-900/80 dark:text-slate-200"
            }`}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-controls={menuId}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>

          <div className="hidden md:block">{controls}</div>
        </div>
      </div>

      {isOpen ? (
        <div className="md:hidden" id={menuId}>
          <div
            className="fixed inset-0 z-40 bg-white/55 backdrop-blur-sm dark:bg-slate-950/40"
            aria-hidden="true"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed inset-x-0 top-[92px] z-50 mx-auto w-full max-w-6xl px-4 sm:px-6">
            <div
              className={`overflow-hidden rounded-[1.5rem] p-3 shadow-[0_24px_80px_rgba(15,23,42,0.14)] backdrop-blur ${
                isJournal
                  ? "border border-stone-300 bg-[#f7f2ea]/94 dark:border-[#6f604e] dark:bg-[#d8c7ae]/94"
                  : "bg-white/92 dark:bg-slate-950/92"
              }`}
            >
              <div
                className={`mb-2 flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] ${
                  isJournal ? "text-stone-600 dark:text-[#5d4a38]" : "text-slate-500 dark:text-slate-300"
                }`}
              >
                <Sparkles
                  className={`h-4 w-4 ${isJournal ? "text-stone-600 dark:text-[#5d4a38]" : "text-emerald-500"}`}
                  aria-hidden="true"
                />
                Navigation
              </div>
              <nav className="flex flex-col">
                {navigation.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`rounded-2xl px-4 py-3 text-sm font-medium transition ${
                      isJournal
                        ? activeHref === item.href
                          ? "bg-[#fbf7ef] text-stone-950 dark:bg-[#eadcc6] dark:text-[#211910]"
                          : "text-stone-700 hover:bg-[#fbf7ef] hover:text-stone-950 dark:text-[#38291c] dark:hover:bg-[#f1e5d2] dark:hover:text-[#211910]"
                        : activeHref === item.href
                          ? "bg-slate-100 text-slate-950 dark:bg-slate-900 dark:text-white"
                          : "text-slate-700 hover:bg-slate-50 hover:text-emerald-700 dark:text-slate-200 dark:hover:bg-slate-900 dark:hover:text-emerald-300"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
              <div
                className={`mt-3 border-t pt-3 ${
                  isJournal ? "border-stone-300 dark:border-[#6f604e]" : "border-slate-200/80 dark:border-slate-800"
                }`}
              >
                {controls}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
