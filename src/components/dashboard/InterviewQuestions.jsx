export default function InterviewQuestions({ items = [] }) {
  const hasQuestions = items.length > 0

  return (
    <div className="rounded-[1.75rem] border border-slate-800 bg-slate-900 p-6 shadow-xl shadow-slate-950/50">
      
      {/* Card Header */}
      <div className="mb-5 flex items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
            AI Interview Questions
          </p>
          <h3 className="mt-2 text-lg font-semibold text-slate-100">
            Practice Prompts
          </h3>
        </div>
        <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-indigo-300">
          Practice
        </span>
      </div>

      {/* Content List */}
      <ol className="space-y-3 text-sm text-slate-300">
        {hasQuestions ? (
          items.map((question, index) => (
            <li 
              key={index} 
              className="flex gap-4 rounded-2xl border border-slate-800/60 bg-slate-950/40 p-4 transition-all hover:bg-slate-950"
            >
              {/* Modern ordered list index number indicator */}
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-indigo-500/10 text-[11px] font-bold text-indigo-400 border border-indigo-500/20">
                {index + 1}
              </span>
              <span className="leading-relaxed">{question}</span>
            </li>
          ))
        ) : (
          /* Empty / Default Fallback State */
          <li className="rounded-2xl border border-dashed border-slate-800 bg-slate-950/20 p-6 text-center text-xs text-slate-500">
            No practice questions generated yet.
          </li>
        )}
      </ol>
    </div>
  )
}