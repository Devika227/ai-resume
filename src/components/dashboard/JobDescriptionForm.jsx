import { useResume } from '../../context/ResumeContext.jsx'

export default function JobDescriptionForm() {
  const { jobDescription, setJobDescription } = useResume()

  return (
    <div className="rounded-[1.75rem] border border-slate-800 bg-slate-900 p-6 shadow-xl shadow-slate-950/50">
      
      {/* Header Section */}
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-slate-100">
            Job Description
          </h3>
          <p className="mt-2 text-sm text-slate-400">
            Paste the JD you want to benchmark against your resume.
          </p>
        </div>
        <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-400">
          Step 2
        </span>
      </div>

      {/* Dark Textarea Input Box */}
      <textarea 
        value={jobDescription} 
        onChange={(e) => setJobDescription(e.target.value)} 
        rows={8} 
        className="min-h-[210px] w-full resize-none rounded-[1.5rem] border border-slate-800 bg-slate-950/60 px-5 py-4 text-sm text-slate-200 placeholder-slate-600 outline-none transition focus:border-indigo-500 focus:bg-slate-950 focus:ring-4 focus:ring-indigo-500/10" 
        placeholder="Paste the job description criteria here..."
      />
    </div>
  )
}