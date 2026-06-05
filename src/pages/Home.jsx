import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-indigo-950 px-6 py-16 text-white shadow-2xl shadow-slate-900/20">
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.4),_transparent_45%)]"></div>
      <div className="relative mx-auto max-w-5xl">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex rounded-full bg-indigo-500/20 px-4 py-1 text-sm font-semibold text-indigo-100">AI-powered resume intelligence</span>
            <h1 className="mt-6 text-5xl font-semibold tracking-tight sm:text-6xl">Build resumes that pass ATS and impress hiring teams.</h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">Analyze resumes, compare against job descriptions, and get tailored improvement suggestions plus interview prep questions in one beautiful dashboard.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/dashboard" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm text-white transition hover:-translate-y-0.5 hover:bg-white/10">Start analysis</Link>
              <Link to="/register" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm text-white transition hover:-translate-y-0.5 hover:bg-white/10">Create account</Link>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <p className="text-sm uppercase tracking-[0.24em] text-indigo-200">Resume match</p>
              <p className="mt-3 text-4xl font-semibold">92%</p>
              <p className="mt-2 text-sm text-slate-300">Predictive ATS compatibility score for your profile.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <p className="text-sm uppercase tracking-[0.24em] text-indigo-200">Interview readiness</p>
              <p className="mt-3 text-4xl font-semibold">8/10</p>
              <p className="mt-2 text-sm text-slate-300">Practice ready questions generated instantly.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

