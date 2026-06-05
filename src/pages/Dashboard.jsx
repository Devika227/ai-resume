import Sidebar from '../components/common/Sidebar.jsx'
import ResumeUpload from '../components/dashboard/ResumeUpload.jsx'
import JobDescriptionForm from '../components/dashboard/JobDescriptionForm.jsx'
import MatchScoreCard from '../components/dashboard/MatchScoreCard.jsx'
import SkillsMatch from '../components/dashboard/SkillsMatch.jsx'
import MissingSkills from '../components/dashboard/MissingSkills.jsx'
import SuggestionsCard from '../components/dashboard/SuggestionsCard.jsx'
import InterviewQuestions from '../components/dashboard/InterviewQuestions.jsx'
import DownloadReport from '../components/dashboard/DownloadReport.jsx'
import Loader from '../components/common/Loader.jsx'
import { useResume } from '../context/ResumeContext.jsx'

export default function Dashboard() {
  const { analyze, loading, results, resumeFile, jobDescription } = useResume()

  // Guard flag for validation
  const canAnalyze = resumeFile && jobDescription

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 lg:grid lg:grid-cols-[300px_minmax(0,1fr)]">
      {/* Structural Sidebar Navigation */}
      <Sidebar />

      {/* Primary Dashboard Area */}
      <main className="space-y-8 p-4 sm:p-6 lg:p-8">
        
        {/* Step 1: Workspace Header & Global Core Card */}
        <section className="relative overflow-hidden rounded-[2rem] border border-slate-800/80 bg-slate-900 p-6 shadow-xl shadow-slate-950/50 sm:p-8">
          <div className="grid gap-8 xl:grid-cols-[1.6fr_0.95fr]">
            
            {/* Informational Panel */}
            <div className="flex flex-col justify-between space-y-6">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-indigo-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-indigo-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
                  AI Intelligence Hub
                </span>
                <h1 className="mt-4 text-3xl font-bold tracking-tight bg-gradient-to-r from-indigo-400 to-slate-200 bg-clip-text text-transparent sm:text-4xl">
                  AI Resume Workspace
                </h1>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-400">
                  Optimize compliance metrics and contextual keyword parameters against real-world targeted performance benchmarks instantly.
                </p>
              </div>

              {/* Document Checkpoints Indicators */}
              <div className="grid gap-3 sm:grid-cols-3">
                <div className="flex flex-col justify-between rounded-[1.25rem] border border-slate-800/40 bg-slate-950/40 p-4 transition">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Resume Status</span>
                  <p className="mt-2 text-xs font-semibold text-slate-200 truncate">
                    {resumeFile ? resumeFile.name : 'Awaiting Document'}
                  </p>
                </div>
                
                <div className="flex flex-col justify-between rounded-[1.25rem] border border-slate-800/40 bg-slate-950/40 p-4 transition">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Target Mapping</span>
                  <p className="mt-2 text-xs font-semibold text-slate-200">
                    {jobDescription ? 'Parameters Active' : 'Awaiting Matrix'}
                  </p>
                </div>

                <div className="flex flex-col justify-between rounded-[1.25rem] border border-slate-800/40 bg-slate-950/40 p-4 transition">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">System Processing</span>
                  <p className="mt-2 text-xs font-semibold text-slate-200">
                    {results ? 'Analysis Finalized' : loading ? 'Parsing Ecosystem...' : 'Idle state'}
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Core Execution Trigger Box */}
            <div className="flex flex-col justify-between rounded-[1.5rem] border border-slate-800 bg-slate-950/50 p-6">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-slate-500">Execution Panel</p>
                <h3 className="mt-2 text-xl font-semibold text-slate-100">Comparative Parsing</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-400">
                  Cross-reference targeted syntax nodes to dynamically calculate skills coverage margins and extract smart contextual optimization paths.
                </p>
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <button 
                    onClick={analyze} 
                    disabled={!canAnalyze || loading}
                    className="inline-flex h-11 items-center justify-center rounded-xl bg-indigo-600 px-6 text-xs font-semibold tracking-wide text-white transition hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-900 disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Processing System...' : 'Run Diagnostics'}
                  </button>
                  {results && <DownloadReport />}
                </div>

                {/* Refined Loader Layout integration */}
                {loading && (
                  <div className="flex items-center gap-3 rounded-xl bg-slate-900 p-3 text-xs font-medium text-slate-300 border border-slate-800/60 shadow-inner">
                    <Loader size="sm" /> 
                    <span>Analyzing resume & Processing data...</span>
                  </div>
                )}
              </div>
            </div>

          </div>
        </section>

        {/* Step 2: Input Operations Setup Row */}
        <section className="grid gap-6 md:grid-cols-2">
          <div className="transition-all hover:shadow-2xl hover:shadow-slate-950/40">
            <ResumeUpload />
          </div>
          <div className="transition-all hover:shadow-2xl hover:shadow-slate-950/40">
            <JobDescriptionForm />
          </div>
        </section>

        {/* Step 3: Actionable Analytics Panel Block */}
        {results && (
          <div className="space-y-8 animate-fade-in">
            
            {/* Metric Overview Row (Three Essential Scoreboards) */}
            <section id="report" className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <MatchScoreCard score={results.score ?? 0} />
              <SkillsMatch items={results.matched ?? []} />
              <MissingSkills items={results.missing ?? []} />
            </section>

            {/* Deep-Dive AI Recommendations Subgrid */}
            <section className="grid gap-6 xl:grid-cols-[1.45fr_0.95fr]">
              <SuggestionsCard items={results.suggestions ?? []} />
              <InterviewQuestions items={results.questions ?? []} />
            </section>

          </div>
        )}
      </main>
    </div>
  )
}