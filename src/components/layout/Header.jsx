export default function Header({ name, title, navigation, themeToggle }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-lg dark:border-slate-800 dark:bg-slate-950/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex flex-col">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-500">{name}</span>
          <span className="text-xs text-slate-500 dark:text-slate-400">{title}</span>
        </div>
        <div className="flex items-center gap-6">
          <nav className="hidden items-center gap-5 text-sm font-medium text-slate-600 dark:text-slate-300 md:flex">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} className="transition-colors hover:text-indigo-500">
                {item.label}
              </a>
            ))}
          </nav>
          {themeToggle}
        </div>
      </div>
    </header>
  )
}

