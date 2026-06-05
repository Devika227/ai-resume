export default function Footer(){
  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-50 py-8 text-center dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 text-sm text-slate-600 dark:text-slate-400 sm:px-6">
        © {new Date().getFullYear()} ResumePilot. Built with React, Tailwind CSS, and fast AI resume insights.
      </div>
    </footer>
  )
}
