import { Atom, Menu, X } from "lucide-react";
import { useEffect, useId, useState } from "react";

export default function Header({ name, navigation, themeToggle }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();

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

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-lg dark:border-slate-800 dark:bg-slate-950/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#about"
          className="group inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-indigo-500 shadow-soft transition hover:-translate-y-0.5 hover:border-indigo-300 hover:text-indigo-600 dark:border-slate-800 dark:bg-slate-950"
          aria-label={`${name} — Home`}
          title={name}
          onClick={() => setIsOpen(false)}
        >
          <Atom
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

          <div className="hidden md:block">{themeToggle}</div>
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
                {themeToggle}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
