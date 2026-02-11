'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
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
    { name: 'DASHBOARD', href: '/dashboard/student', icon: Brain },
    { name: 'AI ASSISTANT', href: '/dashboard/student/assistant', icon: MessageSquare },
    { name: 'STUDY PLANNER', href: '/dashboard/student/planner', icon: BookOpen },
    { name: 'SKILL MASTERY', href: '/dashboard/student/skills', icon: Target },
    { name: 'CAREER PATH', href: '/dashboard/student/career', icon: Briefcase },
    { name: 'OPPORTUNITIES', href: '/dashboard/student/opportunities', icon: Globe },
    { name: 'PREDICTIONS', href: '/dashboard/student/predictions', icon: LineChart },
    { name: 'WELLNESS', href: '/dashboard/student/wellness', icon: AlertCircle },
  ]

  return (
    <>
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed top-4 left-4 z-50 p-3 bg-white border-2 border-black lg:hidden shadow-brutal"
        >
        {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      <aside
        className={`brutal-sidebar fixed left-0 top-0 bottom-0 w-72 transition-all duration-300 ease-in-out z-40 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex items-center gap-3 mb-10 px-2 mt-4">
            <div className="w-12 h-12 bg-black border-2 border-black flex items-center justify-center">
              <Sparkles className="w-7 h-7 text-white" />
            </div>
            <div>
              <span className="font-black text-xl tracking-tighter text-black block leading-none uppercase">GROW-DEX</span>
              <span className="text-[9px] font-black uppercase tracking-[0.2em] text-black opacity-50">STUDENT PORTAL</span>
            </div>
          </div>

          <nav className="flex-1 space-y-0 overflow-y-auto">
            {navItems.map((item) => {
              const active = pathname === item.href
              return (
                <Link key={item.name} href={item.href}>
                  <div className={`brutal-sidebar-item flex items-center justify-between px-4 py-4 transition-all duration-150 ${active ? 'brutal-sidebar-item-active' : ''}`}>
                    <div className="flex items-center gap-3">
                      <item.icon className="w-5 h-5" />
                      <span className="text-sm font-bold tracking-tight">{item.name}</span>
                    </div>
                    {active && <ChevronRight className="w-4 h-4" />}
                  </div>
                </Link>
              )
            })}
          </nav>

          <div className="mt-6 pt-6 border-t-2 border-black">
            <div className="p-6 bg-brutal-secondary border-2 border-black mb-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-black border-2 border-black flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4 text-white" />
                </div>
                <span className="text-xs font-black text-black uppercase tracking-wide">78% READY</span>
              </div>
              <div className="brutal-progress mb-3">
                <div className="brutal-progress-bar" style={{ width: '78%' }} />
              </div>
              <p className="text-[9px] font-black text-black tracking-wider uppercase opacity-70">CAREER READINESS</p>
            </div>

            <LogoutButton />
          </div>
        </div>
      </aside>
    </>
  )
}
