export default function ThemeToggle({ theme, toggleLabel, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-semibold uppercase tracking-wide text-slate-600 transition hover:border-indigo-400 hover:text-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
      aria-label={toggleLabel}
      title={toggleLabel}
    >
      <span className="inline-flex h-2 w-2 rounded-full bg-indigo-500 shadow-sm" />
      {theme === 'dark' ? 'Dark' : 'Light'}
    </button>
  )
}

