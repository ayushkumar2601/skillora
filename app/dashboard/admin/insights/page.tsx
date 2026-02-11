'use client'

import { AdminSidebar } from '@/components/admin-sidebar'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    LineChart,
    Line,
    Cell,
    PieChart,
    Pie,
    Legend
} from 'recharts'
import {
    Brain,
    Sparkles,
    TrendingUp,
    AlertCircle,
    ArrowRight,
    Target,
    ChevronRight,
    Zap,
    ShieldCheck
} from 'lucide-react'

const cohortData = [
    { year: '1st Year', performance: 65, readiness: 30 },
    { year: '2nd Year', performance: 72, readiness: 45 },
    { year: '3rd Year', performance: 80, readiness: 70 },
    { year: '4th Year', performance: 85, readiness: 92 },
]

const riskDistribution = [
    { name: 'Low Risk', value: 700, color: 'hsl(var(--primary))' },
    { name: 'Medium Risk', value: 350, color: 'hsl(var(--secondary))' },
    { name: 'High Risk', value: 150, color: '#f87171' },
]

export default function CampusIntelligencePage() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <AdminSidebar />

            <main className="lg:pl-64 pt-16 min-h-screen relative overflow-hidden">
                {/* Background Depth Elements */}
                <div className="absolute top-20 right-[10%] w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 left-[5%] w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float" />

                <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto relative z-10">
                    {/* Header */}
                    <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div>
                            <div className="flex items-center gap-2 mb-3">
                                <Brain className="w-6 h-6 text-primary" />
                                <Badge className="bg-primary/10 text-primary border-none font-black tracking-[0.2em] uppercase text-[10px]">
                                    AI STRATEGY HUB
                                </Badge>
                            </div>
                            <h1 className="text-4xl font-black tracking-tighter text-slate-900 mb-2">Campus Intelligence</h1>
                            <p className="text-muted-foreground font-medium">Deep institutional patterns and emerging risk predictions.</p>
                        </div>
                        <div className="flex gap-3">
                            <Button variant="outline" className="rounded-xl border-2 font-bold px-6 h-12 hover:bg-white transition-all">Archived Reports</Button>
                            <Button className="rounded-xl font-bold px-8 h-12 shadow-lg shadow-primary/25 hover:scale-105 transition-all group">
                                Generate PDF <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8 mb-10">
                        {/* Campus Health Score */}
                        <Card className="glass-card p-10 flex flex-col items-center justify-center text-center overflow-hidden relative border-primary/20 group hover:translate-y-[-4px] transition-all">
                            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary to-secondary" />
                            <div className="p-4 bg-primary/10 rounded-3xl mb-6 group-hover:scale-110 transition-transform">
                                <Zap className="w-10 h-10 text-primary animate-pulse" />
                            </div>
                            <h2 className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground mb-3">Campus Health Score</h2>
                            <p className="text-7xl font-black text-slate-900 tracking-tighter">78.5</p>
                            <div className="mt-6 flex items-center gap-2 text-[10px] font-black text-green-600 bg-green-500/10 px-4 py-1.5 rounded-full uppercase tracking-widest">
                                ↑ 4.2% Growth
                            </div>
                            <p className="text-[10px] text-muted-foreground mt-8 font-bold uppercase tracking-tight opacity-60">
                                Institutional performance markers are within target range.
                            </p>
                        </Card>

                        {/* AI Summary Panel */}
                        <Card className="lg:col-span-2 glass-card p-8 group overflow-hidden">
                            <div className="absolute top-0 right-0 w-48 h-48 bg-secondary/5 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform" />
                            <div className="flex items-center gap-2 mb-8 relative z-10">
                                <Sparkles className="w-6 h-6 text-secondary" />
                                <h2 className="text-2xl font-black text-slate-900">Executive AI Summary</h2>
                            </div>
                            <div className="grid md:grid-cols-2 gap-8 relative z-10">
                                <div className="space-y-4">
                                    <div className="p-5 rounded-2xl bg-white/50 border border-slate-100 hover:border-primary/30 transition-colors">
                                        <h3 className="text-[10px] font-black mb-2 flex items-center gap-2 text-primary uppercase tracking-widest">
                                            <TrendingUp className="w-4 h-4" /> COHORT TREND
                                        </h3>
                                        <p className="text-sm text-slate-700 font-medium leading-relaxed">
                                            3rd-year CS students showing 15% faster skill acquisition in cloud tech than previous batches.
                                        </p>
                                    </div>
                                    <div className="p-5 rounded-2xl bg-white/50 border border-slate-100 hover:border-secondary/30 transition-colors">
                                        <h3 className="text-[10px] font-black mb-2 flex items-center gap-2 text-secondary uppercase tracking-widest">
                                            <Target className="w-4 h-4" /> OPPORTUNITY
                                        </h3>
                                        <p className="text-sm text-slate-700 font-medium leading-relaxed">
                                            High placement demand detected for <b>Product Design</b> roles; 120+ students eligible.
                                        </p>
                                    </div>
                                </div>
                                <div className="space-y-4 text-center md:text-left">
                                    <div className="p-5 rounded-2xl border border-red-100 bg-red-500/5 hover:bg-red-500/10 transition-colors">
                                        <h3 className="text-[10px] font-black mb-2 flex items-center gap-2 text-red-600 uppercase tracking-widest">
                                            <AlertCircle className="w-4 h-4" /> RISK PATTERN
                                        </h3>
                                        <p className="text-sm text-slate-700 font-medium leading-relaxed">
                                            Assignment clustering in 2nd year is correlating with a 22% spike in "High Stress" reports.
                                        </p>
                                    </div>
                                    <Button className="w-full bg-slate-900 text-white hover:bg-slate-800 font-black rounded-xl h-12 shadow-xl shadow-slate-900/10" variant="outline">
                                        Optimize Campus Structure
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 mb-10">
                        {/* Cohort Growth Chart */}
                        <Card className="glass-card p-8">
                            <div className="flex items-center justify-between mb-10">
                                <div>
                                    <h2 className="text-2xl font-black text-slate-900">Progression Matrix</h2>
                                    <p className="text-sm text-muted-foreground font-medium">Performance vs Placement Readiness</p>
                                </div>
                                <div className="flex gap-2">
                                    <Badge className="bg-primary/10 text-primary border-none font-bold">BY COHORT</Badge>
                                </div>
                            </div>
                            <div className="h-[350px] w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={cohortData}>
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                                        <XAxis
                                            dataKey="year"
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
                                            contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', backdropFilter: 'blur(10px)', border: '1px solid hsl(var(--border))', borderRadius: '16px', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
                                        />
                                        <Legend wrapperStyle={{ paddingTop: '20px', fontWeight: 700, fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.05em' }} />
                                        <Bar dataKey="performance" name="Academic Perf." fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} barSize={32} />
                                        <Bar dataKey="readiness" name="Placement Ready" fill="hsl(var(--secondary))" radius={[8, 8, 0, 0]} barSize={32} />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </Card>

                        {/* Risk & Intervention */}
                        <div className="space-y-8">
                            <Card className="glass-card p-8">
                                <h2 className="text-2xl font-black text-slate-900 mb-8 underline decoration-destructive/20 decoration-4 underline-offset-8">Campus Risk Distribution</h2>
                                <div className="flex flex-col md:flex-row items-center gap-10">
                                    <div className="h-[200px] w-[200px] relative">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <PieChart>
                                                <Pie
                                                    data={riskDistribution}
                                                    cx="50%"
                                                    cy="50%"
                                                    innerRadius={65}
                                                    outerRadius={85}
                                                    paddingAngle={8}
                                                    dataKey="value"
                                                    stroke="none"
                                                >
                                                    {riskDistribution.map((entry, index) => (
                                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                                    ))}
                                                </Pie>
                                                <Tooltip />
                                            </PieChart>
                                        </ResponsiveContainer>
                                        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                                            <p className="text-2xl font-black text-slate-900">1.2k</p>
                                            <p className="text-[8px] font-black text-muted-foreground uppercase tracking-widest">Total Monitored</p>
                                        </div>
                                    </div>
                                    <div className="space-y-4 flex-1 w-full">
                                        {riskDistribution.map((item, i) => (
                                            <div key={i} className="flex items-center justify-between group">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                                                    <span className="text-xs font-bold text-slate-600 group-hover:text-slate-900 transition-colors uppercase tracking-tight">{item.name}</span>
                                                </div>
                                                <span className="text-sm font-black text-slate-900">{item.value}</span>
                                            </div>
                                        ))}
                                        <div className="pt-6 border-t border-slate-100">
                                            <Button variant="ghost" className="w-full text-[10px] font-black uppercase tracking-widest gap-2 group text-primary hover:bg-primary/5">
                                                Risk Action Protocol <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </Card>

                            <Card className="glass-card p-10 bg-black border-slate-800 relative overflow-hidden group">
                                <ShieldCheck className="absolute -bottom-6 -right-6 w-40 h-40 opacity-10 text-primary group-hover:scale-110 transition-transform duration-700" />
                                <h2 className="text-xl font-black text-white mb-4 relative z-10">Intervention AI</h2>
                                <p className="text-sm text-slate-400 font-medium leading-relaxed mb-8 relative z-10">
                                    Our model predicts a <b className="text-white">92% recovery rate</b> if counseling is initiated for the "High Stress" cohort within the next 10 days.
                                </p>
                                <Button className="w-full bg-white text-black hover:bg-slate-200 font-black rounded-xl h-12 relative z-10 shadow-xl shadow-white/5">Start Recovery Protocol</Button>
                            </Card>
                        </div>
                    </div>

                    {/* Department Benchmarking Table */}
                    <Card className="glass-card p-10 mb-10 overflow-hidden">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                            <div>
                                <h2 className="text-2xl font-black text-slate-900">Department Performance Index</h2>
                                <p className="text-sm text-muted-foreground font-medium">Global institutional benchmarking across all verticals.</p>
                            </div>
                            <Button variant="outline" className="rounded-xl border-2 font-black text-[10px] tracking-widest uppercase h-10 hover:bg-white transition-all px-6">Dataset v2.4</Button>
                        </div>
                        <div className="overflow-x-auto min-w-[800px]">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="border-b-2 border-slate-100 text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">
                                        <th className="pb-6 font-black uppercase">Vertical / Dept</th>
                                        <th className="pb-6">Mean GPA</th>
                                        <th className="pb-6">Market Readiness</th>
                                        <th className="pb-6">Engagement</th>
                                        <th className="pb-6">Institutional Risk</th>
                                        <th className="pb-6 text-right">Momentum</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-50">
                                    {[
                                        { dept: 'Computer Science', gpa: 8.12, readiness: 75, engagement: 92, risk: 'Optimized', trend: 'up', color: 'text-primary' },
                                        { dept: 'Electronics Eng.', gpa: 7.54, readiness: 60, engagement: 85, risk: 'Stable', trend: 'stable', color: 'text-secondary' },
                                        { dept: 'Mechanical Eng.', gpa: 6.91, readiness: 45, engagement: 78, risk: 'Critical', trend: 'down', color: 'text-red-500' },
                                        { dept: 'Civil Eng.', gpa: 7.28, readiness: 52, engagement: 82, risk: 'Stable', trend: 'up', color: 'text-orange-500' },
                                    ].map((item, i) => (
                                        <tr key={i} className="group hover:bg-slate-50/50 transition-colors">
                                            <td className="py-6 font-black text-slate-900 border-l-4 border-transparent group-hover:border-primary pl-0 group-hover:pl-4 transition-all">{item.dept}</td>
                                            <td className="py-6 font-black text-slate-700">{item.gpa}</td>
                                            <td className="py-6">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-32 bg-slate-100 rounded-full h-2 overflow-hidden">
                                                        <div className="bg-primary h-full rounded-full" style={{ width: `${item.readiness}%` }} />
                                                    </div>
                                                    <span className="text-[10px] font-black text-slate-900">{item.readiness}%</span>
                                                </div>
                                            </td>
                                            <td className="py-6 font-black text-slate-900">{item.engagement}%</td>
                                            <td className="py-6">
                                                <Badge variant="secondary" className={`font-black text-[9px] uppercase tracking-widest px-3 py-1 ${item.risk === 'Optimized' ? 'bg-green-500/10 text-green-600' : item.risk === 'Critical' ? 'bg-red-500/10 text-red-600' : 'bg-slate-100 text-slate-600'} border-none`}>
                                                    {item.risk}
                                                </Badge>
                                            </td>
                                            <td className="py-6 text-right">
                                                <span className={`text-[10px] font-black uppercase tracking-tighter ${item.trend === 'up' ? 'text-green-500' : item.trend === 'down' ? 'text-red-500' : 'text-blue-500'}`}>
                                                    {item.trend === 'up' ? '↑ Rising' : item.trend === 'down' ? '↓ Falling' : '→ Neutral'}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </Card>

                    {/* Health Score Timeline */}
                    <Card className="glass-card p-10 relative overflow-hidden">
                        <div className="flex items-center justify-between mb-10 relative z-10">
                            <div>
                                <h2 className="text-2xl font-black text-slate-900">Institutional Vitality</h2>
                                <p className="text-sm text-muted-foreground font-medium">6-month campus health trajectory analysis</p>
                            </div>
                            <div className="flex items-center gap-1.5 px-4 py-2 bg-primary/5 rounded-xl text-[10px] font-black text-primary border border-primary/10 tracking-[0.2em] uppercase">SYSTEM ANALYTICS</div>
                        </div>
                        <div className="h-[400px] w-full relative z-10">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={[
                                    { month: 'Aug', score: 72, target: 75 },
                                    { month: 'Sep', score: 74, target: 75 },
                                    { month: 'Oct', score: 73, target: 75 },
                                    { month: 'Nov', score: 76, target: 80 },
                                    { month: 'Dec', score: 77, target: 80 },
                                    { month: 'Jan', score: 78.5, target: 80 },
                                ]}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                                    <XAxis
                                        dataKey="month"
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fontSize: 11, fill: 'hsl(var(--muted-foreground))', fontWeight: 700 }}
                                    />
                                    <YAxis
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fontSize: 11, fill: 'hsl(var(--muted-foreground))', fontWeight: 700 }}
                                        domain={[60, 90]}
                                    />
                                    <Tooltip
                                        contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', backdropFilter: 'blur(10px)', border: '1px solid hsl(var(--border))', borderRadius: '16px', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
                                    />
                                    <Legend wrapperStyle={{ paddingTop: '20px', fontWeight: 800, fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em' }} />
                                    <Line
                                        type="monotone"
                                        dataKey="score"
                                        name="Campus Health"
                                        stroke="hsl(var(--primary))"
                                        strokeWidth={5}
                                        dot={{ r: 7, fill: 'hsl(var(--primary))', strokeWidth: 3, stroke: 'white' }}
                                        activeDot={{ r: 9, strokeWidth: 0 }}
                                    />
                                    <Line
                                        type="monotone"
                                        dataKey="target"
                                        name="Goal Target"
                                        stroke="hsl(var(--secondary))"
                                        strokeWidth={3}
                                        strokeDasharray="8 8"
                                        dot={false}
                                        opacity={0.5}
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </Card>
                </div>
            </main>
        </div>
    )
}
