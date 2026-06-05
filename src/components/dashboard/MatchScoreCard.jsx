export default function MatchScoreCard({ score = 0 }) {
  // Determine contextual badge colors based on the score tier
  const scoreTier = score >= 80 ? 'Strong' : score >= 60 ? 'Good' : 'Needs work'
  const badgeColorClass = 
    score >= 80 
      ? 'bg-emerald-500/10 text-emerald-400' 
      : score >= 60 
        ? 'bg-amber-500/10 text-amber-400' 
        : 'bg-rose-500/10 text-rose-400'

  return (
    <div className="rounded-[1.75rem] border border-slate-800 bg-slate-900 p-6 shadow-xl shadow-slate-950/50">
      
      {/* Header Info Area */}
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
            Match Score
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-100">
            {score}%
          </h2>
        </div>
        
        {/* Dynamic Status Badge */}
        <span className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider ${badgeColorClass}`}>
          {scoreTier}
        </span>
      </div>

      {/* Progress Track Layout */}
      <div className="rounded-full bg-slate-950 p-1 border border-slate-800/40">
        <div 
          style={{ width: `${score}%` }} 
          className="h-3 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 transition-all duration-500"
        />
      </div>

      {/* Context Explainer Footer */}
      <p className="mt-4 text-xs leading-relaxed text-slate-400">
        Higher matches optimize compliance mapping — target an 80%+ benchmark score to capture ATS indexing successfully.
      </p>
    </div>
  )
}