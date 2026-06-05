import { useAuth } from '../context/AuthContext.jsx';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Login() {
  const { login, user } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const from =
    location.state?.from?.pathname || '/dashboard';

  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  function onSubmit(e) {
    e.preventDefault();

    login({ email });

    navigate(from, { replace: true });
  }


  return (
    <div className="min-h-[calc(100vh-6rem)] flex items-center justify-center bg-slate-950 p-4 py-12">
      <div className="w-full max-w-4xl overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900 shadow-2xl shadow-slate-950/60">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr]">

          {/* Login Form */}
          <div className="p-8 sm:p-12">
            <div className="mb-8">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-indigo-400">
                Welcome Back
              </p>

              <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-100 sm:text-3xl">
                Sign in to your account
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                Access your resume insights, ATS reports, and interview preparation dashboard.
              </p>
            </div>

            <form onSubmit={onSubmit} className="space-y-5">

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Email Address
                </label>

                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  required
                  placeholder="name@company.com"
                  className="mt-2 w-full rounded-2xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-sm text-slate-200 placeholder-slate-600 outline-none transition focus:border-indigo-500 focus:bg-slate-950 focus:ring-4 focus:ring-indigo-500/10"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Password
                </label>

                <div className="relative">
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type={showPassword ? 'text' : 'password'}
                    required
                    placeholder="••••••••"
                    className="mt-2 w-full rounded-2xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-sm text-slate-200 placeholder-slate-600 outline-none transition focus:border-indigo-500 focus:bg-slate-950 focus:ring-4 focus:ring-indigo-500/10"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-5 text-xs font-medium text-indigo-400 hover:text-indigo-300"
                  >
                    {showPassword ? 'Hide' : 'Show'}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs">
                <label className="flex items-center gap-2 text-slate-400">
                  <input
                    type="checkbox"
                    className="rounded border-slate-700 bg-slate-800"
                  />
                  Remember me
                </label>

                <Link
                  to="#"
                  className="font-medium text-indigo-400 hover:text-indigo-300"
                >
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                className="w-full rounded-2xl bg-indigo-600 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                Sign In
              </button>
            </form>

            <div className="mt-6 text-center text-xs text-slate-500">
              Don't have an account?{' '}
              <Link
                to="/register"
                className="font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                Create account
              </Link>
            </div>
          </div>

          {/* Right Branding Panel */}
          <div className="hidden flex-col justify-between rounded-[2rem] bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-900 p-10 text-slate-300 lg:flex border-l border-slate-800/40">
            <div className="space-y-6">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-indigo-300">
                  ResumePilot
                </span>

                <h3 className="mt-6 text-2xl font-bold text-slate-100 leading-snug">
                  Continue building your career journey
                </h3>
              </div>

              <p className="text-sm leading-relaxed text-slate-400">
                Access AI-powered resume analysis, ATS optimization, keyword matching, and interview preparation tools.
              </p>

              <div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-4 text-xs leading-relaxed text-slate-400">
                Sign in and continue improving your resume with intelligent insights.
              </div>
            </div>

            <div className="text-[11px] text-slate-600 tracking-wide mt-6">
              Powered by Secure Machine Intelligence
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

