export default function VersionSelect({ value, options, onChange, variant = "revamp" }) {
  const isLegacy = variant === "legacy";
  const isJournal = variant === "orbital";
  const activeOption = options.find((option) => option.value === value) || options[0];

  return (
    <label
      className={
        isLegacy
          ? "relative flex cursor-pointer items-center gap-3 rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
          : isJournal
            ? "relative flex cursor-pointer items-center gap-3 border border-stone-950/70 bg-transparent px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-stone-700 backdrop-blur dark:border-[#211910]/70 dark:text-[#38291c]"
          : "relative flex cursor-pointer items-center gap-3 rounded-full border border-emerald-200/70 bg-white/95 px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600 shadow-[0_6px_18px_rgba(15,23,42,0.08)] dark:border-emerald-400/20 dark:bg-slate-900/95 dark:text-slate-200"
      }
    >
      <span>Version</span>
      <span className={isJournal ? "text-stone-950 dark:text-[#211910]" : "text-slate-700 dark:text-slate-100"}>
        {activeOption?.shortLabel}
      </span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="absolute inset-0 cursor-pointer opacity-0"
        aria-label="Select portfolio version"
      >
        {options.map((option) => (
          <option key={option.id} value={option.value}>
            {option.shortLabel} · {option.description}
          </option>
        ))}
      </select>
    </label>
  );
}
