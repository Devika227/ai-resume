export default function MissingSkills({ items = [] }) {
  const hasItems = items.length > 0

  return (
    <div className="rounded-[1.75rem] border border-slate-800 bg-slate-900 p-6 shadow-xl shadow-slate-950/50">
      
      {/* Header Container Section */}
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-slate-100">
          Missing Skills
        </h3>
        <span className="rounded-full bg-rose-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-rose-400">
          Improve
        </span>
      </div>

      {/* Missing Keywords Content Stack */}
      <div className="space-y-2">
        {hasItems ? (
          items.map((skill, index) => (
            <div 
              key={index} 
              className="flex items-center gap-3 rounded-xl bg-rose-500/5 border border-rose-500/10 px-4 py-2.5 text-xs font-medium text-rose-400 transition hover:bg-rose-500/10"
            >
              {/* Sleek Warning Dash instead of a generic text dot */}
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-rose-500" />
              <span>{skill}</span>
            </div>
          ))
        ) : (
          /* Perfect/All Clear Fallback State */
          <div className="text-xs text-slate-500 py-2">
            No missing parameters detected.
          </div>
        )}
      </div>
    </div>
  )
}