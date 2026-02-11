'use client'

import { StudentSidebar } from '@/components/student-sidebar'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import {
    TrendingUp,
    Search,
    BookOpen,
    ExternalLink,
    Plus,
    Briefcase,
    Layers,
    Award,
    AlertCircle,
    ChevronRight,
    Target
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

const skillProgressData = [
    { name: 'Mon', hours: 2 },
    { name: 'Tue', hours: 4 },
    { name: 'Wed', hours: 3 },
    { name: 'Thu', hours: 6 },
    { name: 'Fri', hours: 4 },
    { name: 'Sat', hours: 8 },
    { name: 'Sun', hours: 5 },
]

export default function SkillsPage() {
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
                            <p className="text-primary font-black text-xs uppercase tracking-[0.3em] mb-3">Cognitive Capital</p>
                            <h1 className="text-4xl font-black tracking-tighter text-slate-900 mb-2">Skill Mastery</h1>
                            <p className="text-muted-foreground font-medium">Quantifying expertise and closing institutional learning gaps.</p>
                        </div>
                        <div className="flex gap-3">
                            <Button variant="outline" className="rounded-xl border-2 font-bold px-6 h-12 hover:bg-white transition-all">Competency Report</Button>
                            <Button className="rounded-xl font-bold px-8 h-12 shadow-lg shadow-primary/25 hover:scale-105 transition-all">Add New Skill</Button>
                        </div>
                    </div>

                    {/* Summary Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                        {[
                            { label: 'Total Proficiencies', value: '8', icon: Layers, color: 'text-primary', bg: 'bg-primary/10' },
                            { label: 'Market Alignment', value: '65%', icon: TrendingUp, color: 'text-secondary', bg: 'bg-secondary/10' },
                            { label: 'Critical Skill Gaps', value: '3', icon: AlertCircle, color: 'text-red-500', bg: 'bg-red-500/10' },
                            { label: 'Weekly Grind', value: '40 hrs', icon: BookOpen, color: 'text-slate-900', bg: 'bg-slate-100' },
                        ].map((stat, i) => (
                            <Card key={i} className="glass-card p-6 group hover:translate-y-[-4px] transition-all duration-300">
                                <div className="flex items-center justify-between mb-4">
                                    <div className={`p-3 rounded-2xl ${stat.bg} ${stat.color} group-hover:scale-110 transition-transform`}>
                                        <stat.icon className="w-6 h-6" />
                                    </div>
                                    <Badge variant="secondary" className="bg-white/50 text-[10px] font-black py-0.5 border-none">ACTIVE</Badge>
                                </div>
                                <p className="text-xs font-black text-muted-foreground uppercase tracking-wider mb-1">{stat.label}</p>
                                <p className="text-3xl font-black text-slate-900">{stat.value}</p>
                            </Card>
                        ))}
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Current Stack */}
                        <div className="lg:col-span-2 space-y-8">
                            <Card className="glass-card p-8">
                                <div className="flex items-center justify-between mb-10">
                                    <h2 className="text-2xl font-black text-slate-900">Expertise Stack</h2>
                                    <Button variant="ghost" className="font-black text-primary hover:bg-primary/5">View Full Matrix</Button>
                                </div>

                                <div className="space-y-10">
                                    <div>
                                        <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-6">Foundational Programming</h3>
                                        <div className="space-y-8">
                                            {[
                                                { name: 'Python', level: 'Intermediate', progress: 70, color: 'bg-primary' },
                                                { name: 'JavaScript / TS', level: 'Advanced', progress: 85, color: 'bg-secondary' },
                                                { name: 'C++ Systems', level: 'Intermediate', progress: 65, color: 'bg-slate-900' },
                                            ].map(skill => (
                                                <div key={skill.name} className="group cursor-pointer">
                                                    <div className="flex justify-between items-end mb-3">
                                                        <div>
                                                            <span className="text-lg font-black text-slate-800 group-hover:text-primary transition-colors">{skill.name}</span>
                                                            <span className="ml-3 text-[10px] font-black text-muted-foreground uppercase tracking-widest">{skill.level}</span>
                                                        </div>
                                                        <span className="text-sm font-black text-slate-900">{skill.progress}%</span>
                                                    </div>
                                                    <div className="h-3 bg-slate-100 rounded-full overflow-hidden relative">
                                                        <div
                                                            className={`h-full ${skill.color} transition-all duration-1000 group-hover:brightness-110`}
                                                            style={{ width: `${skill.progress}%` }}
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-6">Tools & Infrastructure</h3>
                                        <div className="flex flex-wrap gap-3">
                                            {[
                                                { name: 'Git Protocol', level: 'ADV' },
                                                { name: 'PostgreSQL', level: 'INT' },
                                                { name: 'Docker Engine', level: 'BEG' },
                                                { name: 'Kubernetes', level: 'BEG' },
                                                { name: 'AWS Cloud', level: 'INT' },
                                            ].map(tool => (
                                                <Badge key={tool.name} variant="secondary" className="px-5 py-2.5 rounded-2xl bg-white border-2 border-slate-100 text-slate-700 font-bold text-xs hover:border-primary/50 hover:bg-primary/5 transition-all cursor-pointer">
                                                    {tool.name} <span className="ml-2 opacity-40 text-[9px] font-black uppercase tracking-tighter">{tool.level}</span>
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </Card>

                            <Card className="glass-card p-8">
                                <div className="mb-10">
                                    <h2 className="text-2xl font-black text-slate-900">Learning Velocity</h2>
                                    <p className="text-sm text-muted-foreground font-medium">Intense focus hours logged per day</p>
                                </div>
                                <div className="h-[350px] w-full">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <BarChart data={skillProgressData}>
                                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                                            <XAxis
                                                dataKey="name"
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
                                                contentStyle={{ backgroundColor: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(10px)', border: '1px solid hsl(var(--border))', borderRadius: '16px' }}
                                            />
                                            <Bar dataKey="hours" fill="hsl(var(--primary))" radius={[6, 6, 0, 0]} />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                            </Card>
                        </div>

                        {/* Gap Analysis */}
                        <div className="space-y-8">
                            <Card className="glass-card p-8 bg-slate-900 text-white relative overflow-hidden group">
                                <div className="absolute -right-8 -top-8 w-40 h-40 opacity-10 text-primary group-hover:rotate-12 transition-transform">
                                    <Briefcase className="w-full h-full" />
                                </div>
                                <div className="mb-8 relative z-10">
                                    <div className="p-3 bg-primary/20 rounded-2xl w-fit mb-6 shadow-lg shadow-primary/20">
                                        <Target className="w-6 h-6 text-primary" />
                                    </div>
                                    <h2 className="text-2xl font-black leading-tight uppercase tracking-tight">Focus Target: Data Architect</h2>
                                    <p className="text-xs text-slate-400 font-bold mt-2 uppercase tracking-[0.1em]">Strategy alignment based on market data</p>
                                </div>

                                <div className="space-y-4 relative z-10">
                                    <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">IDENTIFIED GAPS:</h3>
                                    {[
                                        'Distributed Systems',
                                        'NoSQL Architecture',
                                        'Data Governance',
                                        'ETL Pipelines'
                                    ].map(skill => (
                                        <div key={skill} className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all cursor-pointer group/item">
                                            <span className="text-xs font-bold text-slate-300 group-hover/item:text-white">{skill}</span>
                                            <Plus className="w-4 h-4 text-primary" />
                                        </div>
                                    ))}
                                    <Button className="w-full mt-6 bg-white text-black hover:bg-slate-100 font-black rounded-xl h-12 shadow-xl shadow-white/5 transition-all hover:scale-105">
                                        Update Learning Graph
                                    </Button>
                                </div>
                            </Card>

                            <Card className="glass-card p-8 group">
                                <h2 className="text-xl font-black text-slate-900 mb-8 flex items-center gap-2">
                                    <Award className="w-6 h-6 text-secondary" /> Micro-Certs Recommended
                                </h2>
                                <div className="space-y-5">
                                    <div className="relative overflow-hidden rounded-[2rem] border-2 border-slate-50 bg-white p-6 hover:border-primary/30 transition-all cursor-pointer">
                                        <div className="flex items-start justify-between mb-4">
                                            <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-none font-black text-[9px] px-3 py-1">PREMIUM PATH</Badge>
                                            <span className="text-[10px] font-black text-muted-foreground uppercase tracking-tighter">12 Hours Intensity</span>
                                        </div>
                                        <h4 className="text-lg font-black text-slate-900 mb-2 leading-tight">Advanced SQL Strategy</h4>
                                        <p className="text-xs text-muted-foreground font-medium mb-6">Expert-level query optimization and database normalization techniques.</p>
                                        <Button size="sm" className="w-full rounded-xl font-black h-10 group-hover:scale-105 transition-transform">
                                            Initiate Mastery <ChevronRight className="w-4 h-4 ml-2" />
                                        </Button>
                                    </div>

                                    <div className="p-6 rounded-[2rem] border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-center group-hover:bg-slate-50 transition-all">
                                        <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mb-4">
                                            <Layers className="w-6 h-6 text-slate-400" />
                                        </div>
                                        <p className="text-sm font-black text-slate-500 uppercase tracking-tighter">Project Simulation</p>
                                        <p className="text-xs text-muted-foreground font-medium mt-1">Deploy K8s Cluster on AWS (Predicted 2h Focus)</p>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
