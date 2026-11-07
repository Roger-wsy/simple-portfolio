export default function ThemeToggle({ theme, toggleLabel, onToggle, variant = "revamp" }) {
  const isLegacy = variant === "legacy";
  const isJournal = variant === "orbital";

  return (
    <button
      type="button"
      onClick={onToggle}
      className={
        isLegacy
          ? "flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600 transition hover:border-indigo-400 hover:text-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
          : isJournal
            ? "flex items-center gap-2 border border-stone-950/70 bg-transparent px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-stone-700 backdrop-blur transition hover:text-stone-950 dark:border-[#211910]/70 dark:text-[#38291c] dark:hover:text-[#211910]"
          : "flex items-center gap-2 rounded-full border border-emerald-200/70 bg-white/95 px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-[0_6px_18px_rgba(15,23,42,0.08)] transition hover:-translate-y-0.5 hover:border-emerald-400 hover:text-emerald-700 dark:border-emerald-400/20 dark:bg-slate-900/95 dark:text-slate-100 dark:hover:border-emerald-400 dark:hover:text-emerald-300"
      }
      aria-label={toggleLabel}
      title={toggleLabel}
    >
      <span
        className={
          isLegacy
            ? "inline-flex h-2 w-2 rounded-full bg-indigo-500 shadow-sm"
            : isJournal
              ? "inline-flex h-2.5 w-2.5 rounded-full bg-stone-700 shadow-sm dark:bg-[#211910]"
            : "inline-flex h-2.5 w-2.5 rounded-full bg-gradient-to-br from-emerald-400 to-sky-400 shadow-sm"
        }
      />
      {theme === "dark" ? "Dark" : "Light"}
    </button>
  );
}
