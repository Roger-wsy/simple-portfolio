export default function Footer({ name, versionLabel }) {
  return (
    <footer className="border-t border-slate-200 py-8 text-center text-xs text-slate-500 dark:border-slate-800 dark:text-slate-400">
      <p>
        © 2026 {name}. Built with React + Vite. {versionLabel}
      </p>
    </footer>
  );
}
