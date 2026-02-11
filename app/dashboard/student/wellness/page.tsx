'use client'

import { StudentSidebar } from '@/components/student-sidebar'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import {
    Smile,
    Meh,
    Frown,
    AlertTriangle,
    Clock,
    Battery,
    Coffee,
    Brain,
    Zap,
    CheckCircle2,
    Calendar,
    ChevronRight
} from 'lucide-react'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from 'recharts'
import { useState } from 'react'

const workloadData = [
    { day: 'Mon', study: 5, assignments: 3 },
    { day: 'Tue', study: 4, assignments: 5 },
    { day: 'Wed', study: 6, assignments: 2 },
    { day: 'Thu', study: 5, assignments: 4 },
    { day: 'Fri', study: 4, assignments: 4 },
    { day: 'Sat', study: 2, assignments: 8 },
    { day: 'Sun', study: 3, assignments: 2 },
]

export default function WellnessPage() {
    const [mood, setMood] = useState<string | null>(null)

    const stress = { level: 'High', color: 'text-red-500', bg: 'bg-red-500/10', border: 'border-red-500/20 shadow-red-500/10' }

    return (
        <div className="min-h-screen bg-background text-foreground">
            <StudentSidebar />

            <main className="lg:pl-64 pt-16 min-h-screen relative overflow-hidden">
                {/* Background Depth Elements */}
                <div className="absolute top-20 right-[10%] w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 left-[5%] w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float" />

                <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto relative z-10">
                    {/* Header */}
                    <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div>
                            <p className="text-secondary font-black text-xs uppercase tracking-[0.3em] mb-3">Holistic Balance</p>
                            <h1 className="text-4xl font-black tracking-tighter text-slate-900 mb-2">Wellness & Productivity</h1>
                            <p className="text-muted-foreground font-medium">Monitoring cognitive load and institutional well-being.</p>
                        </div>
                        <div className="flex gap-3">
                            <Button variant="outline" className="rounded-xl border-2 font-bold px-6 h-12 hover:bg-white transition-all">Health History</Button>
                            <Button className="rounded-xl bg-secondary hover:bg-secondary/80 text-foreground font-bold px-8 h-12 shadow-lg shadow-secondary/25 hover:scale-105 transition-all">Support Portal</Button>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8 mb-10">
                        {/* Stress & Burnout */}
                        <div className="space-y-8">
                            <Card className={`glass-card p-8 border-l-4 border-l-red-500 relative overflow-hidden group`}>
                                <div className="absolute -top-10 -right-10 opacity-5 group-hover:scale-110 transition-transform">
                                    <AlertTriangle className="w-40 h-40" />
                                </div>

                                <h2 className="text-sm font-black uppercase tracking-widest text-muted-foreground mb-6 flex items-center gap-2">
                                    <Zap className={`w-5 h-5 ${stress.color}`} /> Cognitive Stress Level
                                </h2>

                                <div className="flex items-baseline gap-2 mb-4">
                                    <span className={`text-6xl font-black ${stress.color} tracking-tighter`}>{stress.level}</span>
                                </div>

                                <p className="text-sm font-bold leading-relaxed mb-8 text-slate-600 italic">
                                    “Heavy institutional load detected. Consider deferring non-critical tasks to next cycle.”
                                </p>

                                <div className="flex gap-3">
                                    <div className="h-2 flex-1 rounded-full bg-green-500/20"></div>
                                    <div className="h-2 flex-1 rounded-full bg-yellow-500/20"></div>
                                    <div className="h-2 flex-1 rounded-full bg-red-500 shadow-lg shadow-red-500/50"></div>
                                </div>
                            </Card>

                            <Card className="glass-card p-8">
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="p-3 bg-secondary/10 rounded-2xl text-secondary">
                                        <Battery className="w-6 h-6" />
                                    </div>
                                    <h2 className="text-xl font-black text-slate-900">Burnout Profile</h2>
                                </div>

                                <div className="flex justify-between items-center mb-6">
                                    <span className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground">Current Status</span>
                                    <Badge variant="outline" className="text-yellow-600 bg-yellow-50 border-yellow-200 font-black px-3 py-1">ELEVATED RISK</Badge>
                                </div>

                                <div className="space-y-5 mb-10">
                                    <div className="flex items-start gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100">
                                        <Calendar className="w-5 h-5 text-muted-foreground mt-0.5" />
                                        <p className="text-xs font-bold text-slate-600 leading-relaxed">Continuous study for 6 days straight without a full cognitive reset.</p>
                                    </div>
                                    <div className="flex items-start gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100">
                                        <Clock className="w-5 h-5 text-muted-foreground mt-0.5" />
                                        <p className="text-xs font-bold text-slate-600 leading-relaxed">Average sleep: 5.5 hours/night (Target: 7+ hrs for optimal retention)</p>
                                    </div>
                                </div>

                                <div className="p-6 rounded-[2rem] bg-slate-900 text-white shadow-xl shadow-slate-900/20">
                                    <h4 className="text-xs font-black text-secondary leading-none uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4" /> RECOVERY PLAN
                                    </h4>
                                    <ul className="text-xs space-y-3 font-bold text-slate-300">
                                        <li className="flex items-center gap-2 tracking-tight">• 2-hour forced digital detox today</li>
                                        <li className="flex items-center gap-2 tracking-tight">• Low-intensity physical activity (30m)</li>
                                        <li className="flex items-center gap-2 tracking-tight">• Early sleep cycle (before 11 PM)</li>
                                    </ul>
                                </div>
                            </Card>
                        </div>

                        {/* Workload Analysis */}
                        <div className="lg:col-span-2 space-y-8">
                            <Card className="glass-card p-10">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-12">
                                    <div>
                                        <h2 className="text-2xl font-black text-slate-900">Workload Analysis</h2>
                                        <p className="text-sm text-muted-foreground font-medium">Weekly distribution of cognitive resources</p>
                                    </div>
                                    <div className="flex gap-6">
                                        <div className="flex items-center gap-2.5">
                                            <div className="w-3.5 h-3.5 rounded-full bg-primary" />
                                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-600">Pure Study</span>
                                        </div>
                                        <div className="flex items-center gap-2.5">
                                            <div className="w-3.5 h-3.5 rounded-full bg-secondary" />
                                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-600">Deliverables</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="h-[350px] w-full">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <BarChart data={workloadData}>
                                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                                            <XAxis
                                                dataKey="day"
                                                axisLine={false}
                                                tickLine={false}
                                                tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))', fontWeight: 600 }}
                                            />
                                            <YAxis
                                                axisLine={false}
                                                tickLine={false}
                                                tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))', fontWeight: 600 }}
                                            />
                                            <Tooltip
                                                cursor={{ fill: 'rgba(0,0,0,0.03)' }}
                                                contentStyle={{
                                                    backgroundColor: 'rgba(255,255,255,0.9)',
                                                    backdropFilter: 'blur(10px)',
                                                    border: '1px solid hsl(var(--border))',
                                                    borderRadius: '16px',
                                                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                                                }}
                                            />
                                            <Bar dataKey="study" stackId="a" fill="hsl(var(--primary))" radius={[0, 0, 0, 0]} />
                                            <Bar dataKey="assignments" stackId="a" fill="hsl(var(--secondary))" radius={[6, 6, 0, 0]} />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>

                                <div className="mt-10 p-6 rounded-[2rem] bg-slate-50 border border-slate-100 flex items-center justify-between group cursor-pointer hover:bg-white transition-all">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-white shadow-sm rounded-2xl group-hover:scale-110 transition-transform">
                                            <Brain className="w-6 h-6 text-slate-900" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-black text-slate-900 uppercase tracking-tight">Productivity Intelligence</p>
                                            <p className="text-xs text-muted-foreground font-medium">“Recommended limit: 7.2 hours/day. Current trend: 8.5. Over-exertion likely.”</p>
                                        </div>
                                    </div>
                                    <Button variant="ghost" size="sm" className="font-black text-primary hover:bg-primary/5 px-6">Optimize</Button>
                                </div>
                            </Card>

                            <div className="grid sm:grid-cols-2 gap-8">
                                {/* Mood Check-in */}
                                <Card className="glass-card p-8">
                                    <h2 className="text-xl font-black text-slate-900 mb-8 leading-tight">Daily Psychological Check-in</h2>
                                    <div className="grid grid-cols-2 gap-4">
                                        {[
                                            { label: 'Motivated', icon: Smile, color: 'text-green-500', bg: 'hover:bg-green-500/10 hover:border-green-500/20' },
                                            { label: 'Neutral', icon: Meh, color: 'text-gray-500', bg: 'hover:bg-gray-500/10 hover:border-gray-500/20' },
                                            { label: 'Stressed', icon: AlertTriangle, color: 'text-orange-500', bg: 'hover:bg-orange-500/10 hover:border-orange-500/20' },
                                            { label: 'Exhausted', icon: Frown, color: 'text-red-500', bg: 'hover:bg-red-500/10 hover:border-red-500/20' },
                                        ].map((item) => (
                                            <button
                                                key={item.label}
                                                onClick={() => setMood(item.label)}
                                                className={`flex flex-col items-center gap-3 p-6 rounded-[2rem] border-2 transition-all group ${mood === item.label
                                                    ? `bg-slate-900 border-slate-900 scale-105`
                                                    : 'bg-white border-slate-50 hover:border-slate-200'
                                                    }`}
                                            >
                                                <item.icon className={`w-10 h-10 ${mood === item.label ? 'text-white' : item.color} group-hover:scale-110 transition-transform`} />
                                                <span className={`text-[10px] font-black uppercase tracking-widest ${mood === item.label ? 'text-white' : 'text-slate-500'}`}>{item.label}</span>
                                            </button>
                                        ))}
                                    </div>
                                    <p className="text-[10px] font-bold text-center text-muted-foreground mt-8 uppercase tracking-tighter">
                                        Real-time data adjusts your study intensity algorithms.
                                    </p>
                                </Card>

                                {/* Productivity Tips */}
                                <Card className="glass-card p-8 flex flex-col bg-slate-900 text-white relative overflow-hidden">
                                    <Zap className="absolute -right-8 -bottom-8 w-40 h-40 opacity-5 text-secondary" />
                                    <h2 className="text-xl font-black mb-8 relative z-10">Productivity Hacks</h2>
                                    <div className="space-y-6 flex-1 relative z-10">
                                        {[
                                            { tip: 'Pomodoro Protocol', sub: '25m Focus / 5m Cognitive Reset', icon: Coffee },
                                            { tip: 'Deep Work Segments', sub: 'No-notification zones for 90m', icon: Zap },
                                            { tip: 'Brain Dumping', sub: 'Offload active memory before sleep', icon: Brain },
                                        ].map((item, i) => (
                                            <div key={i} className="flex gap-4 items-start group cursor-pointer">
                                                <div className="p-3 rounded-2xl bg-white/10 group-hover:bg-secondary/20 transition-all shadow-sm">
                                                    <item.icon className="w-5 h-5 text-secondary group-hover:scale-110 transition-transform" />
                                                </div>
                                                <div>
                                                    <p className="text-sm font-black leading-tight tracking-tight mb-0.5">{item.tip}</p>
                                                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{item.sub}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <Button className="w-full mt-10 bg-white text-black hover:bg-slate-100 font-black rounded-xl h-12 relative z-10 transition-all hover:scale-105">Resource Library</Button>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
