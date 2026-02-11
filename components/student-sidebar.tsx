'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import {
  BarChart3,
  BookOpen,
  TrendingUp,
  CheckCircle,
  AlertCircle,
  Menu,
  X,
  Zap,
  Briefcase,
  ShieldCheck,
  Sparkles,
  Brain,
  ChevronRight,
  ChevronLeft,
  MessageSquare,
  Globe,
  LineChart,
  Target
} from 'lucide-react'
import { useState, useEffect } from 'react'
import { LogoutButton } from './logout-button'

export function StudentSidebar() {
  const pathname = usePathname()
  const [sidebarOpen, setSidebarOpen] = useState(true)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) setSidebarOpen(false)
      else setSidebarOpen(true)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const navItems = [
    { name: 'Dashboard', href: '/dashboard/student', icon: Brain },
    { name: 'AI Assistant', href: '/dashboard/student/assistant', icon: MessageSquare },
    { name: 'Study Planner', href: '/dashboard/student/planner', icon: BookOpen },
    { name: 'Skill Mastery', href: '/dashboard/student/skills', icon: Target },
    { name: 'Career Path', href: '/dashboard/student/career', icon: Briefcase },
    { name: 'Opportunities', href: '/dashboard/student/opportunities', icon: Globe },
    { name: 'Future Predictions', href: '/dashboard/student/predictions', icon: LineChart },
    { name: 'Wellness Tracker', href: '/dashboard/student/wellness', icon: AlertCircle },
  ]

  return (
    <>
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed top-4 left-4 z-50 p-2 bg-white rounded-xl border-2 border-slate-100 lg:hidden shadow-sm"
      >
        {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      <aside
        className={`fixed left-0 top-0 bottom-0 w-72 bg-card/80 backdrop-blur-3xl border-r border-white/20 transition-all duration-500 ease-in-out z-40 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} shadow-[4px_0_24px_rgba(0,0,0,0.02)]`}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex items-center gap-3 mb-10 px-2 mt-4">
            <div className="w-10 h-10 rounded-2xl bg-secondary flex items-center justify-center shadow-lg shadow-secondary/20">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="font-black text-xl tracking-tighter text-slate-900 block leading-none">GROW-DEX</span>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary">Student Portal</span>
            </div>
          </div>

          <nav className="flex-1 space-y-1.5 overflow-y-auto pr-2 custom-scrollbar">
            {navItems.map((item) => {
              const active = pathname === item.href
              return (
                <Link key={item.name} href={item.href}>
                  <div className={`flex items-center justify-between group px-4 py-3.5 rounded-2xl transition-all duration-300 ${active ? 'bg-secondary text-white shadow-lg shadow-secondary/25 translate-x-1' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'}`}>
                    <div className="flex items-center gap-3">
                      <item.icon className={`w-5 h-5 transition-transform duration-300 ${active ? 'scale-110' : 'group-hover:scale-110'}`} />
                      <span className={`text-sm font-bold tracking-tight ${active ? 'font-black' : ''}`}>{item.name}</span>
                    </div>
                    {active && <ChevronRight className="w-4 h-4 opacity-50" />}
                  </div>
                </Link>
              )
            })}
          </nav>

          <div className="mt-6 pt-6 border-t border-slate-100">
            <div className="p-6 rounded-[2rem] bg-slate-50 border border-slate-100 relative overflow-hidden group">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span className="text-xs font-black text-slate-700">78% READY</span>
              </div>
              <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden mb-3">
                <div className="h-full bg-secondary w-[78%]" />
              </div>
              <p className="text-[9px] font-black text-slate-400 tracking-wider">CAREER READINESS SCORE</p>
            </div>

            <LogoutButton />
          </div>
        </div>
      </aside>
    </>
  )
}
