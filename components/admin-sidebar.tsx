'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
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
    ChevronRight
} from 'lucide-react'
import { useState, useEffect } from 'react'
import { LogoutButton } from './logout-button'
import { BrutalButton } from './brutal'

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
        { name: 'OVERVIEW', href: '/dashboard/admin', icon: LayoutDashboard },
        { name: 'CAMPUS INTEL', href: '/dashboard/admin/insights', icon: Brain },
        { name: 'REGISTRY', href: '/dashboard/admin/students', icon: Users },
        { name: 'PROGRAMS', href: '/dashboard/admin/programs', icon: BookOpen },
        { name: 'CAREER HUB', href: '/dashboard/admin/analytics', icon: Briefcase },
        { name: 'RISK RADAR', href: '/dashboard/admin/risk-alerts', icon: AlertCircle },
        { name: 'SETTINGS', href: '/dashboard/admin/feedback', icon: Settings },
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
                        <div className="w-12 h-12 bg-brutal-accent border-2 border-black flex items-center justify-center">
                            <Brain className="w-7 h-7 text-white" />
                        </div>
                        <div>
                            <span className="font-black text-xl tracking-tighter text-black block leading-none uppercase">GROW-DEX</span>
                            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-black opacity-50">ADMIN CONSOLE</span>
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
                        <div className="p-5 bg-black border-2 border-black text-white mb-4">
                            <Zap className="w-8 h-8 text-brutal-accent mb-3" />
                            <p className="text-[10px] font-black uppercase tracking-widest text-white opacity-50 mb-2">ENGINE STATUS</p>
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-2 h-2 bg-brutal-secondary" />
                                <span className="text-xs font-black tracking-tight uppercase">AI CORE ACTIVE</span>
                            </div>
                            <BrutalButton variant="accent" className="w-full py-2 text-xs">
                                DIAGNOSTICS
                            </BrutalButton>
                        </div>

                        <LogoutButton />
                    </div>
                </div>
            </aside>
        </>
    )
}
