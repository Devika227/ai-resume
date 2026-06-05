export default function Sidebar(){
  return (
    <aside className="hidden lg:block">
      <div className="sticky top-24 space-y-4 rounded-[2rem] border border-slate-200 bg-white p-5 shadow-lg shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-950">
        <div className="rounded-[1.5rem] bg-gradient-to-r from-indigo-600 to-slate-900 px-5 py-5 text-white shadow-lg shadow-indigo-500/10">
          <p className="text-sm uppercase tracking-[0.3em] text-indigo-100">Dashboard</p>
          <p className="mt-3 text-lg font-semibold">Workflow overview</p>
        </div>

        <div className="space-y-3">
          <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 px-4 py-4 text-sm dark:border-slate-800 dark:bg-slate-900">
            <p className="text-slate-500 dark:text-slate-400">Resume</p>
            <p className="mt-2 text-lg font-semibold text-slate-900 dark:text-slate-100">Upload & scan</p>
          </div>
          <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 px-4 py-4 text-sm dark:border-slate-800 dark:bg-slate-900">
            <p className="text-slate-500 dark:text-slate-400">Job description</p>
            <p className="mt-2 text-lg font-semibold text-slate-900 dark:text-slate-100">Match keywords</p>
          </div>
          <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 px-4 py-4 text-sm dark:border-slate-800 dark:bg-slate-900">
            <p className="text-slate-500 dark:text-slate-400">Insights</p>
            <p className="mt-2 text-lg font-semibold text-slate-900 dark:text-slate-100">Improve your resume</p>
          </div>
        </div>
      </div>
    </aside>
  )
}
