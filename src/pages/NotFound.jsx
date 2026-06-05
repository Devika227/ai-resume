import { Link } from 'react-router-dom'

export default function NotFound(){
  return (
    <div className="py-24 text-center">
      <div className="mx-auto max-w-xl rounded-[2rem] border border-slate-200 bg-white px-8 py-14 shadow-2xl shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100">
        <p className="text-sm uppercase tracking-[0.3em] text-indigo-600">404 error</p>
        <h2 className="mt-4 text-4xl font-semibold">Page not found</h2>
        <p className="mt-4 text-slate-600 dark:text-slate-400">We couldn't find the page you were looking for. Try returning to the dashboard or home screen.</p>
        <Link to="/" className="mt-8 inline-flex rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500">Go home</Link>
      </div>
    </div>
  )
}

