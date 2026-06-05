export default function SuggestionsCard({ items = [] }) {
  const hasSuggestions = items.length > 0

  return (
    <div className="rounded-[1.75rem] border border-slate-800 bg-slate-900 p-6 shadow-xl shadow-slate-950/50">
      
      {/* Card Header */}
      <div className="mb-5 flex items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
            Resume Improvement
          </p>
          <h3 className="mt-2 text-lg font-semibold text-slate-100">
            Suggestions
          </h3>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.467 5.99 5.99 0 0 0-1.925 3.546 5.974 5.974 0 0 1-2.133-1A3.75 3.75 0 0 0 12 18Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 1 0-1.5 0v3.75a.75.75 0 0 0 1.5 0V6ZM12.75 14.25a.75.75 0 1 0-1.5 0v.008a.75.75 0 0 0 1.5 0V14.25Z" />
          </svg>
          AI Tips
        </span>
      </div>

      {/* Content List */}
      <ul className="space-y-3 text-sm text-slate-300">
        {hasSuggestions ? (
          items.map((suggestion, index) => (
            <li 
              key={index} 
              className="flex gap-3 rounded-2xl border border-slate-800/60 bg-slate-950/40 p-4 transition-all hover:bg-slate-950"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400 shadow-[0_0_8px_rgba(129,140,248,0.5)]" />
              <span className="leading-relaxed">{suggestion}</span>
            </li>
          ))
        ) : (
          /* Empty / Perfect State */
          <li className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-800 bg-slate-950/20 p-8 text-center">
            <div className="rounded-full bg-emerald-500/10 p-2 text-emerald-400">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </div>
            <p className="mt-3 font-medium text-slate-100">Looking good!</p>
            <p className="mt-1 text-xs text-slate-500">No layout or keyword improvements needed.</p>
          </li>
        )}
      </ul>
    </div>
  )
}