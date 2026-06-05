import { useRef } from 'react'
import { useResume } from '../../context/ResumeContext.jsx'
import { Upload } from 'lucide-react'

export default function ResumeUpload() {
  const fileRef = useRef()
  const { setResumeFile, resumeFile } = useResume()

  function onChange(e) {
    const f = e.target.files?.[0]
    if (f) setResumeFile(f)
  }

  return (
    <div className="rounded-[1.75rem] border border-slate-800 bg-slate-900 p-6 shadow-xl shadow-slate-950/50">
      
      {/* Header Section */}
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
         
          <h3 className="text-lg font-semibold text-slate-100">
            Upload Resume
          </h3>
          <p className="mt-2 text-sm text-slate-400">
            Add your CV file to generate a review and ATS analysis.
          </p>
        </div>
        <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-indigo-300">
          Step 1
        </span>
      </div>

      {/* Drag & Drop Upload Label Wrapper */}
      <label className="group flex h-36 cursor-pointer flex-col items-center justify-center rounded-[1.5rem] border-2 border-dashed border-slate-800 bg-slate-950/40 px-5 text-center text-sm transition hover:border-indigo-500 hover:bg-slate-950">
        
        {resumeFile ? (
          /* Active Selected Document State */
          <>
            <span className="font-medium text-indigo-400 group-hover:text-indigo-300 truncate max-w-[220px]">
              {resumeFile.name}
            </span>
           <span className="mt-2  text-center text-xs text-slate-400">
              Click to replace file
            </span>
          </>
        ) : (
          /* Empty / Default Upload State */
          <>
            <span className="flex flex-col items-center justify-center text-center font-medium text-slate-300 group-hover:text-indigo-400 transition-colors">

              <Upload className="mb-4 h-8 w-8 text-indigo-400" />
              Click to upload or drag and drop
            </span>
             
            <span className="mt-5 text-xs text-slate-500">
              PDF, DOC, or DOCX formats accepted
            </span>
          </>
        )}

        <input 
          ref={fileRef} 
          onChange={onChange} 
          type="file" 
          accept=".pdf,.doc,.docx" 
          className="sr-only" 
        />
      </label>
    </div>
  )
}