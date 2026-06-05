export default function SkillsMatch({ items = [] }) {
  const hasItems = items.length > 0

  return (
    <div className="rounded-[1.75rem] border border-slate-800 bg-slate-900 p-6 shadow-xl shadow-slate-950/50">
      
      {/* Header Container Section */}
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-slate-100">
          Matching Skills
        </h3>
        <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-400">
          Keywords
        </span>
      </div>

      {/* Keywords Badge Wrapper Flexbox */}
      <div className="flex flex-wrap gap-2">
        {hasItems ? (
          items.map((skill, index) => (
            <span 
              key={index} 
              className="inline-flex items-center rounded-xl bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 text-xs font-medium text-emerald-400 transition hover:bg-emerald-500/20"
            >
              {skill}
            </span>
          ))
        ) : (
          /* Empty / Default Fallback message color */
          <div className="text-xs text-slate-500 py-2">
            No matched parameters mapped yet.
          </div>
        )}
      </div>
    </div>
  )
}