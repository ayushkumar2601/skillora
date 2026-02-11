'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import {
    BarChart3,
    Users,
    LayoutDashboard,
    Menu,
    X,
    Sparkles,
    Brain,
    BookOpen,
    Briefcase,
    AlertCircle,
    Settings,
    Zap,
    ChevronRight,
    ChevronLeft
} from 'lucide-react'
import { useState, useEffect } from 'react'
import { LogoutButton } from './logout-button'

export function AdminSidebar() {
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
        { name: 'Overview', href: '/dashboard/admin', icon: LayoutDashboard },
        { name: 'Campus Intel', href: '/dashboard/admin/insights', icon: Brain },
        { name: 'Registry', href: '/dashboard/admin/students', icon: Users },
        { name: 'Programs', href: '/dashboard/admin/programs', icon: BookOpen },
        { name: 'Career Hub', href: '/dashboard/admin/analytics', icon: Briefcase },
        { name: 'Risk Radar', href: '/dashboard/admin/risk-alerts', icon: AlertCircle },
        { name: 'Settings', href: '/dashboard/admin/feedback', icon: Settings },
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
                        <div className="w-10 h-10 rounded-2xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
                            <Brain className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <span className="font-black text-xl tracking-tighter text-slate-900 block leading-none">GROW-DEX</span>
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">ADMIN CONSOLE</span>
                        </div>
                    </div>

                    <nav className="flex-1 space-y-1.5 overflow-y-auto pr-2 custom-scrollbar">
                        {navItems.map((item) => {
                            const active = pathname === item.href
                            return (
                                <Link key={item.name} href={item.href}>
                                    <div className={`flex items-center justify-between group px-4 py-3.5 rounded-2xl transition-all duration-300 ${active ? 'bg-primary text-white shadow-lg shadow-primary/25 translate-x-1' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'}`}>
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
                        <div className="p-5 rounded-[2rem] bg-slate-900 text-white relative overflow-hidden group">
                            <Zap className="absolute -right-4 -top-4 w-16 h-16 opacity-10 text-primary group-hover:scale-110 transition-transform" />
                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Engine Status</p>
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                <span className="text-xs font-black tracking-tight">AI CORE ACTIVE</span>
                            </div>
                            <Button size="sm" className="w-full bg-white text-black hover:bg-slate-100 font-black rounded-xl h-9">Diagnostics</Button>
                        </div>

                        <LogoutButton />
                    </div>
                </div>
            </aside>
        </>
    )
}
