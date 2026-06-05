import { NavLink, useNavigate } from 'react-router-dom'

import { useAuth } from '../../context/AuthContext.jsx'

function NavItem({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `rounded-full px-3 py-2 text-sm font-medium transition ${
          isActive
            ? 'bg-slate-100 text-slate-900 dark:bg-slate-700 dark:text-white'
            : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-700'
        }`
      }
    >
      {children}
    </NavLink>
  )
}

export default function Navbar() {
  const navigate = useNavigate()
  const { user, logout } = useAuth()
  return (
    <nav className="border-b border-slate-200 bg-white/95 py-4 backdrop-blur-sm shadow-sm dark:border-slate-800 dark:bg-slate-950/95">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-6">
          <NavLink to="/" className="text-xl font-semibold tracking-tight text-slate-900 dark:text-white">ResumePilot</NavLink>
          <div className="hidden items-center gap-2 md:flex">
            <NavItem to="/">Home</NavItem>
            <NavItem to="/dashboard">Dashboard</NavItem>
          </div>
        </div>

        <div className="flex items-center gap-3">
         
          {user ? (
            <div className="flex items-center gap-4 rounded-full border border-slate-800 bg-slate-900 px-4 py-1.5 text-xs font-medium shadow-xl shadow-slate-950/20">
  {/* Active User Identity Info */}
  <span className="max-w-[10rem] truncate text-slate-300 tracking-wide">
    {user.email}
  </span>
  
  {/* Premium Translucent Warning Logout Button */}
 <button 
  onClick={() => logout(navigate)} 
  className="rounded-full bg-slate-950 border border-slate-800 px-3 py-1 font-semibold uppercase tracking-wider text-[10px] text-slate-400 transition-all hover:bg-slate-800 hover:border-slate-700 hover:text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/30"
>
  Logout
</button>
</div>
          ) : (
            <div className="hidden items-center gap-2 sm:flex">
              <NavLink 
  to="/login" 
  className="rounded-full border border-slate-800 bg-slate-900 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-slate-300 transition-all hover:bg-slate-950 hover:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
>
  Login
</NavLink>
             <NavLink 
  to="/register" 
  className="rounded-full bg-indigo-600 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white transition-all hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-950"
>
  Register
</NavLink>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
