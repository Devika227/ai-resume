import { useState } from 'react'
import { useAuth } from '../context/AuthContext.jsx'
import { Link, useLocation, useNavigate, Navigate } from 'react-router-dom'

export default function Register() {
  const { register, user } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const location = useLocation()
  const navigate = useNavigate()
  const from = location.state?.from?.pathname || '/dashboard'

  if (user) {
    return <Navigate to="/dashboard" replace />
  }

  function onSubmit(e) {
    e.preventDefault()
    register({ email })
    navigate(from, { replace: true })
  }

  return (
    <div className="min-h-[calc(100vh-6rem)] flex items-center justify-center bg-slate-950 p-4 py-12">
      {/* Dark Outer Card Shell */}
      <div className="w-full max-w-4xl overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900 shadow-2xl shadow-slate-950/60">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr]">
          
          {/* Form Interactive Panel */}
          <div className="p-8 sm:p-12">
            <div className="mb-8">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-indigo-400">
                Join the community
              </p>
              <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-100 sm:text-3xl">
                Create your account
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                Get access to resume scoring, keyword matching, and AI-powered interview prep.
              </p>
            </div>

            <form onSubmit={onSubmit} className="space-y-5">
              {/* Email Input Field */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Email Address
                </label>
                <input 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  type="email" 
                  required 
                  className="mt-2 w-full rounded-2xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-sm text-slate-200 placeholder-slate-600 outline-none transition focus:border-indigo-500 focus:bg-slate-950 focus:ring-4 focus:ring-indigo-500/10" 
                  placeholder="name@company.com"
                />
              </div>

              {/* Password Input Field */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Password
                </label>
                <input 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  type="password" 
                  required 
                  className="mt-2 w-full rounded-2xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-sm text-slate-200 placeholder-slate-600 outline-none transition focus:border-indigo-500 focus:bg-slate-950 focus:ring-4 focus:ring-indigo-500/10" 
                  placeholder="••••••••"
                />
              </div>

              {/* Action Trigger Button */}
              <button 
                type="submit" 
                className="w-full rounded-2xl bg-indigo-600 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                Create Free Account
              </button>
            </form>

            {/* Bottom Navigation Link */}
            <div className="mt-6 text-center text-xs text-slate-500">
              Already registered?{' '}
              <Link to="/login" className="font-semibold text-indigo-400 hover:text-indigo-300 transition-colors">
                Login now
              </Link>
            </div>
          </div>

          {/* Right Content Branding Panel */}
          <div className="hidden flex-col justify-between rounded-[2rem] bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-900 p-10 text-slate-300 lg:flex border-l border-slate-800/40">
            <div className="space-y-6">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-indigo-300">
                  ResumePilot
                </span>
                <h3 className="mt-6 text-2xl font-bold text-slate-100 leading-snug">
                  Turn your resume into a hiring asset
                </h3>
              </div>
              
              <p className="text-sm leading-relaxed text-slate-400">
                Save time with AI review, keyword matching, and interview preparation — all in one polished workspace.
              </p>
              
              <div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-4 text-xs leading-relaxed text-slate-400">
                Create a better resume and move confidently toward your next opportunity.
              </div>
            </div>

            <div className="text-[11px] text-slate-600 tracking-wide mt-6">
              Powered by Secure Machine Intelligence
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}