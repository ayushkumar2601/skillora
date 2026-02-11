'use client'

import { StudentSidebar } from '@/components/student-sidebar'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import {
    CheckCircle,
    Map,
    FileText,
    Target,
    ArrowRight,
    Sparkles,
    Github,
    Award,
    Users,
    ChevronRight,
    Search
} from 'lucide-react'
import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer
} from 'recharts'

const readinessData = [
    { name: 'Completed', value: 72 },
    { name: 'Remaining', value: 28 },
]
const COLORS = ['hsl(var(--primary))', 'rgba(0,0,0,0.05)']

export default function CareerPage() {
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
                            <p className="text-primary font-black text-xs uppercase tracking-[0.3em] mb-3">Professional Trajectory</p>
                            <h1 className="text-4xl font-black tracking-tighter text-slate-900 mb-2">Career Readiness</h1>
                            <p className="text-muted-foreground font-medium">Quantifying market feasibility and institutional readiness.</p>
                        </div>
                        <div className="flex gap-3">
                            <Button variant="outline" className="rounded-xl border-2 font-bold px-6 h-12 hover:bg-white transition-all">Audit History</Button>
                            <Button className="rounded-xl font-bold px-8 h-12 shadow-lg shadow-primary/25 hover:scale-105 transition-all">Update Profile</Button>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8 mb-10">
                        {/* Readiness Score */}
                        <div className="space-y-8">
                            <Card className="glass-card p-10 flex flex-col items-center text-center relative overflow-hidden group">
                                <div className="absolute -top-10 -right-10 opacity-5 group-hover:scale-110 transition-transform">
                                    <Target className="w-40 h-40" />
                                </div>

                                <h2 className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground mb-10">Readiness Coefficient</h2>

                                <div className="relative w-56 h-56 mb-10">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <PieChart>
                                            <Pie
                                                data={readinessData}
                                                cx="50%"
                                                cy="50%"
                                                innerRadius={75}
                                                outerRadius={95}
                                                paddingAngle={8}
                                                dataKey="value"
                                                startAngle={90}
                                                endAngle={-270}
                                                stroke="none"
                                            >
                                                {readinessData.map((entry, index) => (
                                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                                ))}
                                            </Pie>
                                        </PieChart>
                                    </ResponsiveContainer>
                                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                                        <span className="text-6xl font-black text-primary tracking-tighter">72%</span>
                                        <span className="text-[10px] uppercase font-black tracking-[0.3em] text-muted-foreground mt-1">FEASIBLE</span>
                                    </div>
                                </div>

                                <div className="w-full space-y-5">
                                    {[
                                        { label: 'Technical Stack', value: 70 },
                                        { label: 'Portfolio Density', value: 80 },
                                        { label: 'Case Prep', value: 65 },
                                    ].map(stat => (
                                        <div key={stat.label} className="space-y-2">
                                            <div className="flex justify-between text-[10px] font-black uppercase tracking-widest px-1">
                                                <span className="text-slate-500">{stat.label}</span>
                                                <span className="text-slate-900">{stat.value}%</span>
                                            </div>
                                            <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                                <div className="h-full bg-slate-900" style={{ width: `${stat.value}%` }} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Card>

                            <Card className="glass-card p-8 bg-primary text-white group overflow-hidden">
                                <Map className="absolute -right-6 -bottom-6 w-32 h-32 opacity-10 group-hover:scale-110 transition-transform" />
                                <div className="flex items-center gap-3 mb-6 relative z-10">
                                    <div className="p-2.5 bg-white/10 rounded-xl">
                                        <Target className="w-5 h-5 text-white" />
                                    </div>
                                    <h2 className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60">TARGET OBJECTIVE</h2>
                                </div>
                                <p className="text-3xl font-black mb-10 tracking-tighter relative z-10 leading-none">Software Architect</p>
                                <div className="flex flex-col gap-3 relative z-10">
                                    <Button className="w-full h-12 bg-white text-primary hover:bg-slate-50 rounded-xl font-black shadow-xl shadow-primary/20">
                                        ANALYZE MARKET GAPS <ChevronRight className="w-4 h-4 ml-2" />
                                    </Button>
                                    <Button variant="ghost" className="w-full text-white/60 hover:text-white hover:bg-white/10 font-black">Switch Objective</Button>
                                </div>
                            </Card>
                        </div>

                        {/* Resume & Preparation */}
                        <div className="lg:col-span-2 space-y-8">
                            <Card className="glass-card p-10">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
                                    <div className="flex items-center gap-5">
                                        <div className="p-4 bg-slate-900 rounded-2xl shadow-xl shadow-slate-900/20">
                                            <FileText className="w-8 h-8 text-white" />
                                        </div>
                                        <div>
                                            <h2 className="text-2xl font-black text-slate-900">Resume Intelligence</h2>
                                            <p className="text-sm text-muted-foreground font-medium">Algorithmic scoring and ATS optimization</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 bg-slate-50 px-6 py-3 rounded-2xl border border-slate-100">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">ATS SCORE</span>
                                        <span className="text-3xl font-black text-primary">65<span className="text-xs text-muted-foreground font-medium">/100</span></span>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-10 mb-10">
                                    <div className="space-y-6">
                                        <h3 className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground flex items-center gap-2">
                                            <Sparkles className="w-4 h-4 text-secondary" /> OPTIMIZATION CRITICALS
                                        </h3>
                                        <ul className="space-y-4">
                                            {[
                                                'Insufficient High-Density Technical Keywords',
                                                'Lacking Quantifiable Performance Metrics',
                                                'Missing Cross-Link Strategy (GitHub / Portfolio)'
                                            ].map((item, i) => (
                                                <li key={i} className="flex gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 text-xs font-bold leading-relaxed text-slate-600">
                                                    <span className="w-5 h-5 rounded-lg bg-secondary/10 text-secondary flex-shrink-0 flex items-center justify-center text-[10px] font-black border border-secondary/20">!</span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden group">
                                        <Sparkles className="absolute -right-4 -top-4 w-32 h-32 opacity-10 group-hover:rotate-12 transition-transform" />
                                        <h4 className="text-xl font-black mb-3 relative z-10">Hyper-Format Generation</h4>
                                        <p className="text-xs text-slate-400 font-bold mb-10 leading-relaxed relative z-10">Let AI synthesize your competencies into a high-yield professional dossier.</p>
                                        <Button className="w-full h-14 bg-white text-slate-900 hover:bg-slate-100 rounded-xl font-black shadow-xl shadow-white/5 relative z-10 transition-all hover:scale-105">
                                            GENERATE AI DOSSIER
                                        </Button>
                                    </div>
                                </div>
                            </Card>

                            <Card className="glass-card p-10">
                                <h2 className="text-2xl font-black text-slate-900 mb-10">Preparation Milestones</h2>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    {[
                                        { label: 'Resume Finalization', status: true, detail: 'High Yield Format Applied' },
                                        { label: 'Technical Portfolio', status: false, detail: '2 / 3 Case Studies Loaded' },
                                        { label: 'DSA Strike Rate', status: false, detail: '50 / 150 Target Achieved' },
                                        { label: 'Simulated Interviews', status: false, detail: '1 / 5 Rounds Conducted' },
                                    ].map((item, i) => (
                                        <div key={i} className={`p-6 rounded-[2rem] border-2 flex items-start gap-5 transition-all cursor-pointer ${item.status ? 'bg-white border-primary shadow-lg shadow-primary/5' : 'bg-slate-50 border-slate-100 hover:border-slate-300'}`}>
                                            <div className={`mt-1 p-1 rounded-full ${item.status ? 'bg-primary text-white shadow-lg shadow-primary/50' : 'bg-slate-200 text-transparent'}`}>
                                                <CheckCircle className="w-4 h-4" />
                                            </div>
                                            <div className="flex-1">
                                                <p className={`font-black text-sm tracking-tight ${item.status ? 'text-slate-900' : 'text-slate-500'}`}>{item.label}</p>
                                                <p className="text-[10px] text-muted-foreground uppercase font-black tracking-widest mt-1">{item.detail}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Card>
                        </div>
                    </div>

                    <section className="mt-16">
                        <div className="flex items-center justify-between mb-10">
                            <div>
                                <h2 className="text-3xl font-black text-slate-900 tracking-tight">AI Role Recommendations</h2>
                                <p className="text-sm text-muted-foreground font-medium italic">Alternative professional paths mapped to your cognitive profile.</p>
                            </div>
                            <Button variant="ghost" className="font-black text-primary px-6">Market Trends <ArrowRight className="w-4 h-4 ml-2" /></Button>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    role: 'Backend Architect',
                                    match: 85,
                                    skills: ['Distributed Systems', 'K8s', 'Go'],
                                    icon: Github,
                                    color: 'border-primary shadow-primary/5'
                                },
                                {
                                    role: 'Intelligence Analyst',
                                    match: 78,
                                    skills: ['NLP', 'Predictive ML', 'SQL'],
                                    icon: Award,
                                    color: 'border-secondary shadow-secondary/5'
                                },
                                {
                                    role: 'Lead Systems Eng',
                                    match: 92,
                                    skills: ['Rust', 'V8 Engine', 'Networking'],
                                    icon: Users,
                                    color: 'border-slate-900 shadow-slate-900/5'
                                },
                            ].map(role => (
                                <Card key={role.role} className={`glass-card p-8 group hover:scale-[1.02] transition-all duration-300 cursor-pointer border-2 ${role.color}`}>
                                    <div className="flex justify-between items-start mb-10">
                                        <div className="p-4 bg-slate-50 rounded-2xl group-hover:bg-slate-900 group-hover:text-white transition-all duration-300">
                                            <role.icon className="w-8 h-8" />
                                        </div>
                                        <div className="text-[10px] font-black uppercase tracking-[0.2em] text-primary bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
                                            {role.match}% MATCH
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-black text-slate-900 mb-3 tracking-tight">{role.role}</h3>
                                    <div className="flex flex-wrap gap-2.5 mb-10">
                                        {role.skills.map(s => (
                                            <span key={s} className="text-[9px] font-black uppercase tracking-widest text-slate-400 bg-slate-50 px-3 py-1 rounded-lg">{s}</span>
                                        ))}
                                    </div>
                                    <Button className="w-full h-12 rounded-xl font-black bg-slate-900 hover:bg-slate-800 shadow-xl shadow-slate-900/10">
                                        VIEW ROADMAP
                                    </Button>
                                </Card>
                            ))}
                        </div>
                    </section>
                </div>
            </main>
        </div>
    )
}
