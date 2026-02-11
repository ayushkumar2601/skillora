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
    Legend
} from 'recharts'
import {
    GraduationCap,
    Users,
    TrendingUp,
    CheckCircle,
    Clock,
    ArrowUpRight,
    Plus,
    PlayCircle
} from 'lucide-react'

const impactData = [
    { name: 'Baseline', readiness: 45, gpa: 7.2 },
    { name: 'Post-Workshop 1', readiness: 58, gpa: 7.3 },
    { name: 'Post-Workshop 2', readiness: 72, gpa: 7.5 },
    { name: 'Current', readiness: 85, gpa: 7.8 },
]

const workshopImpact = [
    {
        title: 'Advanced DSA Bootcamp',
        attendance: '450/500',
        impact: '+22%',
        status: 'Completed',
        desc: 'Preparation for FAANG-level technical interviews.'
    },
    {
        title: 'Soft Skills Masterclass',
        attendance: '380/400',
        impact: '+15%',
        status: 'In Progress',
        desc: 'Communication and leadership development for campus recruits.'
    },
    {
        title: 'Cloud Computing 101',
        attendance: '120/150',
        impact: '+30%',
        status: 'Planned',
        desc: 'AWS and Azure foundation training.'
    }
]

export default function ProgramImpactPage() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <AdminSidebar />

            <main className="lg:pl-64 pt-16 min-h-screen">
                <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                            <h1 className="text-3xl font-bold tracking-tight">Workshop & Program Impact</h1>
                            <p className="text-muted-foreground mt-1">Measuring the real-world ROI of institutional training programs.</p>
                        </div>
                        <Button className="bg-primary gap-2">
                            <Plus className="w-4 h-4" /> Create New Program
                        </Button>
                    </div>

                    {/* Section 1: Top Metrics */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                        <Card className="p-6 border-border">
                            <div className="flex items-center justify-between mb-2">
                                <p className="text-sm font-medium text-muted-foreground">Active Programs</p>
                                <PlayCircle className="w-5 h-5 text-primary" />
                            </div>
                            <p className="text-3xl font-bold">12</p>
                        </Card>

                        <Card className="p-6 border-border">
                            <div className="flex items-center justify-between mb-2">
                                <p className="text-sm font-medium text-muted-foreground">Total Attendees</p>
                                <Users className="w-5 h-5 text-secondary" />
                            </div>
                            <p className="text-3xl font-bold">1,840</p>
                        </Card>

                        <Card className="p-6 border-border">
                            <div className="flex items-center justify-between mb-2">
                                <p className="text-sm font-medium text-muted-foreground">Avg. Skill Lift</p>
                                <TrendingUp className="w-5 h-5 text-green-500" />
                            </div>
                            <p className="text-3xl font-bold">+18%</p>
                        </Card>

                        <Card className="p-6 border-border">
                            <div className="flex items-center justify-between mb-2">
                                <p className="text-sm font-medium text-muted-foreground">Success Rate</p>
                                <CheckCircle className="w-5 h-5 text-primary" />
                            </div>
                            <p className="text-3xl font-bold">92%</p>
                        </Card>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Impact Chart */}
                        <Card className="lg:col-span-2 p-8 border-border">
                            <div className="flex items-center justify-between mb-8">
                                <div>
                                    <h2 className="text-xl font-bold">Outcome Tracking</h2>
                                    <p className="text-xs text-muted-foreground">Student growth across Readiness and GPA markers post-intervention</p>
                                </div>
                                <Badge variant="outline" className="text-primary border-primary">Live ROI Tracking</Badge>
                            </div>
                            <div className="h-[350px] w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart data={impactData}>
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                                        <XAxis
                                            dataKey="name"
                                            axisLine={false}
                                            tickLine={false}
                                            tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
                                        />
                                        <YAxis
                                            axisLine={false}
                                            tickLine={false}
                                            tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
                                        />
                                        <Tooltip
                                            contentStyle={{ backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: '8px' }}
                                        />
                                        <Legend />
                                        <Line
                                            type="monotone"
                                            dataKey="readiness"
                                            name="Readiness %"
                                            stroke="hsl(var(--primary))"
                                            strokeWidth={4}
                                            dot={{ r: 6, fill: 'hsl(var(--primary))' }}
                                        />
                                        <Line
                                            type="monotone"
                                            dataKey="gpa"
                                            name="Avg. GPA (Normalized)"
                                            stroke="hsl(var(--secondary))"
                                            strokeWidth={4}
                                            dot={{ r: 6, fill: 'hsl(var(--secondary))' }}
                                        />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </Card>

                        {/* Recommendations Based on Analytics */}
                        <Card className="p-8 border-border bg-gradient-to-br from-secondary/5 to-transparent">
                            <div className="flex items-center gap-2 mb-6">
                                <GraduationCap className="w-5 h-5 text-secondary" />
                                <h2 className="text-xl font-bold">AI Intervention Recs</h2>
                            </div>
                            <div className="space-y-6">
                                <div className="p-4 rounded-xl bg-background border border-border">
                                    <p className="text-xs font-bold text-primary mb-2 uppercase tracking-widest">Priority 1</p>
                                    <h3 className="text-sm font-bold mb-1">DSA Remedial Sessions</h3>
                                    <p className="text-xs text-muted-foreground">For 120 students in CSE Year 2 showing &lt;40% aptitude scores.</p>
                                    <Button variant="outline" className="w-full mt-4 text-xs h-8">Schedule Now</Button>
                                </div>
                                <div className="p-4 rounded-xl bg-background border border-border">
                                    <p className="text-xs font-bold text-secondary mb-2 uppercase tracking-widest">Priority 2</p>
                                    <h3 className="text-sm font-bold mb-1">Resume Review Marathon</h3>
                                    <p className="text-xs text-muted-foreground">Detected 82% of ECE Year 4 students missing portfolio links.</p>
                                    <Button variant="outline" className="w-full mt-4 text-xs h-8">Schedule Now</Button>
                                </div>
                                <div className="pt-4 text-center">
                                    <p className="text-[10px] text-muted-foreground italic">Based on real-time campus skill gap patterns.</p>
                                </div>
                            </div>
                        </Card>
                    </div>

                    {/* Program List */}
                    <div className="mt-8">
                        <h2 className="text-2xl font-bold mb-6">Recent Workships & Impact</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {workshopImpact.map((prog, i) => (
                                <Card key={i} className="group p-6 border-border hover:shadow-xl transition-all relative overflow-hidden">
                                    <div className={`absolute top-0 right-0 w-16 h-16 opacity-5 flex items-center justify-center`}>
                                        <TrendingUp className="w-full h-full" />
                                    </div>
                                    <Badge className={`mb-4 ${prog.status === 'Completed' ? 'bg-green-500/10 text-green-600' :
                                            prog.status === 'In Progress' ? 'bg-blue-500/10 text-blue-600' :
                                                'bg-muted text-muted-foreground'
                                        } border-none font-bold`}>
                                        {prog.status}
                                    </Badge>
                                    <h3 className="text-lg font-black mb-2 group-hover:text-primary transition-colors">{prog.title}</h3>
                                    <p className="text-xs text-muted-foreground mb-6 leading-relaxed">{prog.desc}</p>

                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center text-xs font-bold uppercase tracking-tight">
                                            <span className="flex items-center gap-1 text-muted-foreground"><Users className="w-3 h-3" /> Attendance</span>
                                            <span>{prog.attendance}</span>
                                        </div>
                                        <div className="flex justify-between items-center text-xs font-bold uppercase tracking-tight">
                                            <span className="flex items-center gap-1 text-muted-foreground"><ArrowUpRight className="w-3 h-3" /> Readiness Lift</span>
                                            <span className="text-green-600">{prog.impact}</span>
                                        </div>
                                    </div>
                                    <Button className="w-full mt-6 bg-secondary text-foreground font-bold hover:bg-secondary/80">
                                        View Impact Report
                                    </Button>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
