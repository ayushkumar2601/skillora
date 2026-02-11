'use client'

import { StudentSidebar } from '@/components/student-sidebar'
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
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    Radar,
    Legend
} from 'recharts'
import {
    TrendingUp,
    Users,
    Target,
    ArrowUpRight,
    ShieldCheck,
    Zap,
    Award,
    ChevronRight,
    Brain
} from 'lucide-react'

const benchmarkData = [
    { subject: 'DSA', you: 85, average: 65 },
    { subject: 'DBMS', you: 72, average: 70 },
    { subject: 'Web Dev', you: 90, average: 60 },
    { subject: 'OS', you: 65, average: 75 },
    { subject: 'Aptitude', you: 88, average: 55 },
]

const radarData = [
    { subject: 'Technical', A: 120, B: 110, fullMark: 150 },
    { subject: 'Soft Skills', A: 98, B: 130, fullMark: 150 },
    { subject: 'Projects', A: 86, B: 130, fullMark: 150 },
    { subject: 'Experience', A: 99, B: 100, fullMark: 150 },
    { subject: 'Academics', A: 85, B: 90, fullMark: 150 },
]

const predictionData = [
    { month: 'Sep', score: 65 },
    { month: 'Oct', score: 68 },
    { month: 'Nov', score: 72 },
    { month: 'Dec (Pred)', score: 78 },
    { month: 'Jan (Pred)', score: 85 },
]

export default function PredictionsPage() {
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
                            <p className="text-primary font-black text-xs uppercase tracking-[0.3em] mb-3">Forecasting Engine</p>
                            <h1 className="text-4xl font-black tracking-tighter text-slate-900 mb-2">Future Predictions</h1>
                            <p className="text-muted-foreground font-medium">AI-driven predictive modeling and peer benchmarking.</p>
                        </div>
                        <div className="flex gap-3">
                            <Button variant="outline" className="rounded-xl border-2 font-bold px-6 h-12 hover:bg-white transition-all">Download Forecast</Button>
                            <Button className="rounded-xl font-bold px-8 h-12 shadow-lg shadow-primary/25 hover:scale-105 transition-all">Simulation Mode</Button>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8 mb-10">
                        {/* GPA Prediction */}
                        <Card className="glass-card p-10 flex flex-col items-center justify-center text-center overflow-hidden relative group">
                            <div className="absolute -top-10 -right-10 opacity-5 group-hover:scale-110 transition-transform">
                                <TrendingUp className="w-40 h-40" />
                            </div>
                            <h2 className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground mb-6">Predicted Cycle GPA</h2>
                            <p className="text-7xl font-black text-primary tracking-tighter mb-4">8.42</p>
                            <div className="flex items-center gap-2 text-[10px] font-black text-green-600 bg-green-500/10 px-4 py-1.5 rounded-full border border-green-500/20">
                                <ArrowUpRight className="w-3 h-3" /> +0.25 GAIN FORECASTED
                            </div>
                            <p className="text-[10px] text-muted-foreground mt-8 font-bold italic">
                                Algorithm confidence: 94% based on current trajectory.
                            </p>
                        </Card>

                        {/* Placement Readiness Prediction */}
                        <Card className="glass-card p-10 flex flex-col items-center justify-center text-center overflow-hidden relative group">
                            <div className="absolute -top-10 -right-10 opacity-5 group-hover:scale-110 transition-transform">
                                <ShieldCheck className="w-40 h-40" />
                            </div>
                            <h2 className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground mb-6">Placement Probability</h2>
                            <p className="text-7xl font-black text-secondary tracking-tighter mb-4">88%</p>
                            <div className="flex items-center gap-2 text-[10px] font-black text-primary bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20">
                                <Zap className="w-3 h-3" /> TIER-1 RECRUITMENT READY
                            </div>
                            <p className="text-[10px] text-muted-foreground mt-8 font-bold italic">
                                Forecasted based on technical stack & project density.
                            </p>
                        </Card>

                        {/* AI Recommendation */}
                        <Card className="glass-card p-8 bg-slate-900 text-white relative overflow-hidden">
                            <Brain className="absolute -right-8 -bottom-8 w-48 h-48 opacity-5 text-primary" />
                            <h2 className="text-xl font-black mb-8 flex items-center gap-2 relative z-10">
                                <Award className="w-6 h-6 text-primary" /> Strategy Hub
                            </h2>
                            <div className="space-y-4 relative z-10">
                                <div className="p-4 rounded-2xl bg-white/10 border border-white/10 hover:bg-white/15 transition-all">
                                    <p className="text-[10px] font-black text-primary mb-2 uppercase tracking-widest">Immediate Strike</p>
                                    <p className="text-xs font-bold leading-relaxed text-slate-300">Complete <b>Operating Systems</b> core by Friday to secure an A-grade projection.</p>
                                </div>
                                <div className="p-4 rounded-2xl bg-white/10 border border-white/10 hover:bg-white/15 transition-all">
                                    <p className="text-[10px] font-black text-secondary mb-2 uppercase tracking-widest">Growth Path</p>
                                    <p className="text-xs font-bold leading-relaxed text-slate-300">Scale <b>Open Source</b> contributions to reach 95% placement feasibility.</p>
                                </div>
                            </div>
                            <Button className="w-full mt-8 bg-white text-black hover:bg-slate-100 font-black rounded-xl h-12 relative z-10 shadow-xl shadow-white/5 transition-all hover:scale-105">View Full Roadmap</Button>
                        </Card>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Peer Benchmarking */}
                        <Card className="glass-card p-10">
                            <div className="flex items-center justify-between mb-10">
                                <div>
                                    <h2 className="text-2xl font-black text-slate-900">Peer Benchmarking</h2>
                                    <p className="text-sm text-muted-foreground font-medium italic">Anonymized department performance comparison</p>
                                </div>
                                <div className="p-3 bg-slate-50 rounded-2xl">
                                    <Users className="w-6 h-6 text-slate-400" />
                                </div>
                            </div>
                            <div className="h-[350px] w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={benchmarkData}>
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                                        <XAxis
                                            dataKey="subject"
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
                                            contentStyle={{ backgroundColor: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(10px)', border: '1px solid hsl(var(--border))', borderRadius: '16px', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
                                        />
                                        <Legend wrapperStyle={{ fontSize: '10px', fontWeight: 'bold', paddingTop: '20px' }} />
                                        <Bar dataKey="you" name="YOUR SCORE" fill="hsl(var(--primary))" radius={[6, 6, 0, 0]} />
                                        <Bar dataKey="average" name="DEPT. AVERAGE" fill="hsl(var(--muted)/0.5)" radius={[6, 6, 0, 0]} />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </Card>

                        {/* Performance Radar */}
                        <Card className="glass-card p-10">
                            <div className="flex items-center justify-between mb-10">
                                <div>
                                    <h2 className="text-2xl font-black text-slate-900">Holistic Skill Matrix</h2>
                                    <p className="text-sm text-muted-foreground font-medium italic">Performance vs Industry Gold Standards</p>
                                </div>
                                <div className="p-3 bg-slate-50 rounded-2xl">
                                    <Target className="w-6 h-6 text-slate-400" />
                                </div>
                            </div>
                            <div className="h-[350px] w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                                        <PolarGrid stroke="hsl(var(--border))" />
                                        <PolarAngleAxis dataKey="subject" tick={{ fontSize: 11, fill: 'hsl(var(--muted-foreground))', fontWeight: 700 }} />
                                        <PolarRadiusAxis angle={30} domain={[0, 150]} tick={false} axisLine={false} />
                                        <Radar
                                            name="Your Core Skills"
                                            dataKey="A"
                                            stroke="hsl(var(--secondary))"
                                            fill="hsl(var(--secondary))"
                                            fillOpacity={0.6}
                                        />
                                        <Radar
                                            name="Market Goal"
                                            dataKey="B"
                                            stroke="hsl(var(--primary))"
                                            fill="transparent"
                                            strokeDasharray="6 6"
                                            strokeWidth={3}
                                        />
                                        <Tooltip
                                            contentStyle={{ backgroundColor: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(10px)', border: '1px solid hsl(var(--border))', borderRadius: '16px' }}
                                        />
                                        <Legend wrapperStyle={{ fontSize: '10px', fontWeight: 'bold', paddingTop: '20px' }} />
                                    </RadarChart>
                                </ResponsiveContainer>
                            </div>
                        </Card>

                        {/* Readness Trend */}
                        <Card className="lg:col-span-2 glass-card p-10">
                            <div className="flex items-center justify-between mb-12">
                                <div>
                                    <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Growth Forecasting</h2>
                                    <p className="text-sm text-muted-foreground font-medium">Predictive analysis of recruitment readiness over next cycle.</p>
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-2xl border border-primary/20">
                                    <Zap className="w-4 h-4 text-primary animate-pulse" />
                                    <span className="text-[10px] font-black uppercase tracking-widest text-primary">Predictive Model Active</span>
                                </div>
                            </div>
                            <div className="h-[350px] w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart data={predictionData}>
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                                        <XAxis
                                            dataKey="month"
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
                                        <Line
                                            type="monotone"
                                            dataKey="score"
                                            stroke="hsl(var(--primary))"
                                            strokeWidth={5}
                                            dot={{ r: 8, fill: 'hsl(var(--primary))', stroke: '#fff', strokeWidth: 3 }}
                                            activeDot={{ r: 10, stroke: 'hsl(var(--primary))', strokeWidth: 4, fill: '#fff' }}
                                        />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                            <div className="mt-8 pt-8 border-t border-slate-100 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="p-2.5 bg-green-50 rounded-xl">
                                        <ArrowUpRight className="w-5 h-5 text-green-600" />
                                    </div>
                                    <p className="text-xs font-bold text-slate-600 tracking-tight">Predicted to hit <span className="text-slate-900 font-black">92% FEASIBILITY</span> by February cycle.</p>
                                </div>
                                <Button variant="ghost" className="font-black text-sm text-primary hover:bg-primary/5">DETAILED REPORT <ChevronRight className="w-4 h-4 ml-1" /></Button>
                            </div>
                        </Card>
                    </div>
                </div>
            </main>
        </div>
    )
}
