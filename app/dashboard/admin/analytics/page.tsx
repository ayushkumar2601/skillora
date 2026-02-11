'use client'

import { AdminSidebar } from '@/components/admin-sidebar'
import { Card } from '@/components/ui/card'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    Legend
} from 'recharts'
import { Users, GraduationCap, Briefcase, AlertCircle, TrendingUp } from 'lucide-react'

const academicPerformanceData = [
    { dept: 'CSE', gpa: 8.1 },
    { dept: 'ECE', gpa: 7.5 },
    { dept: 'ME', gpa: 6.9 },
    { dept: 'CE', gpa: 7.2 },
    { dept: 'EE', gpa: 7.8 },
]

const placementReadinessData = [
    { name: 'Ready', value: 40 },
    { name: 'Almost Ready', value: 35 },
    { name: 'Not Ready', value: 25 },
]

const COLORS = ['hsl(var(--primary))', 'hsl(var(--secondary))', 'hsl(var(--muted)/0.5)']

export default function AnalyticsPage() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <AdminSidebar />

            <main className="lg:pl-64 pt-16 min-h-screen">
                <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold tracking-tight">Campus Analytics</h1>
                        <p className="text-muted-foreground mt-1">Real-time insights into student performance and placement readiness.</p>
                    </div>

                    {/* Section 1: Overview Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                        <Card className="p-6 border-border hover:shadow-md transition-all">
                            <div className="flex items-center justify-between mb-2">
                                <p className="text-sm font-medium text-muted-foreground">Total Students</p>
                                <Users className="w-5 h-5 text-primary" />
                            </div>
                            <p className="text-3xl font-bold">1,200</p>
                        </Card>

                        <Card className="p-6 border-border hover:shadow-md transition-all">
                            <div className="flex items-center justify-between mb-2">
                                <p className="text-sm font-medium text-muted-foreground">Average GPA</p>
                                <GraduationCap className="w-5 h-5 text-primary" />
                            </div>
                            <p className="text-3xl font-bold">7.4</p>
                        </Card>

                        <Card className="p-6 border-border hover:shadow-md transition-all">
                            <div className="flex items-center justify-between mb-2">
                                <p className="text-sm font-medium text-muted-foreground">Placement Ready</p>
                                <Briefcase className="w-5 h-5 text-secondary" />
                            </div>
                            <p className="text-3xl font-bold">58%</p>
                        </Card>

                        <Card className="p-6 border-border border-red-500/20 bg-red-500/5 hover:shadow-md transition-all">
                            <div className="flex items-center justify-between mb-2">
                                <p className="text-sm font-medium text-red-600">At-Risk Students</p>
                                <AlertCircle className="w-5 h-5 text-red-500" />
                            </div>
                            <p className="text-3xl font-bold text-red-600">142</p>
                        </Card>
                    </div>

                    {/* Section 2 & 3: Performance & Readiness Charts */}
                    <div className="grid lg:grid-cols-2 gap-8 mb-8">
                        <Card className="p-6 border-border">
                            <h2 className="text-xl font-bold mb-6">Academic Performance by Department</h2>
                            <div className="h-[300px] w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={academicPerformanceData}>
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                                        <XAxis
                                            dataKey="dept"
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
                                        <Bar dataKey="gpa" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </Card>

                        <Card className="p-6 border-border">
                            <h2 className="text-xl font-bold mb-6">Placement Readiness Summary</h2>
                            <div className="h-[300px] w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie
                                            data={placementReadinessData}
                                            cx="50%"
                                            cy="50%"
                                            innerRadius={60}
                                            outerRadius={80}
                                            paddingAngle={5}
                                            dataKey="value"
                                        >
                                            {placementReadinessData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                            ))}
                                        </Pie>
                                        <Tooltip
                                            contentStyle={{ backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: '8px' }}
                                        />
                                        <Legend />
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>
                        </Card>
                    </div>

                    {/* Section 4 & 5: Skill Gaps & Stress */}
                    <div className="grid lg:grid-cols-3 gap-8">
                        <Card className="lg:col-span-2 p-6 border-border">
                            <h2 className="text-xl font-bold mb-6">Top Missing Skills Across Campus</h2>
                            <div className="space-y-6">
                                {[
                                    { skill: 'DSA', percentage: 45, students: 540 },
                                    { skill: 'SQL', percentage: 38, students: 456 },
                                    { skill: 'Communication', percentage: 35, students: 420 },
                                    { skill: 'System Design', percentage: 30, students: 360 },
                                ].map((item) => (
                                    <div key={item.skill}>
                                        <div className="flex justify-between items-center mb-2">
                                            <p className="font-semibold">{item.skill}</p>
                                            <p className="text-sm text-muted-foreground">{item.students} students missing</p>
                                        </div>
                                        <div className="w-full bg-secondary/20 rounded-full h-2">
                                            <div
                                                className="bg-primary h-2 rounded-full"
                                                style={{ width: `${item.percentage}%` }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Card>

                        <Card className="p-6 border-border bg-gradient-to-br from-secondary/5 to-transparent">
                            <h2 className="text-xl font-bold mb-6">Wellness Index</h2>
                            <div className="space-y-6">
                                <div className="p-4 rounded-xl bg-background border border-border">
                                    <div className="flex items-center gap-3 mb-2">
                                        <AlertCircle className="w-5 h-5 text-orange-500" />
                                        <p className="text-sm font-bold uppercase tracking-tighter">High Stress</p>
                                    </div>
                                    <p className="text-3xl font-black">22%</p>
                                    <p className="text-xs text-muted-foreground mt-1">Students reporting high workload</p>
                                </div>

                                <div className="p-4 rounded-xl bg-background border border-border">
                                    <div className="flex items-center gap-3 mb-2">
                                        <TrendingUp className="w-5 h-5 text-primary" />
                                        <p className="text-sm font-bold uppercase tracking-tighter">Avg. Study Hours</p>
                                    </div>
                                    <p className="text-3xl font-black">6.4 hrs</p>
                                    <p className="text-xs text-muted-foreground mt-1">Per day average across departments</p>
                                </div>

                                <div className="flex items-center justify-between p-2">
                                    <span className="text-sm font-medium">Burnout Risk Trend</span>
                                    <span className="text-xs font-bold text-red-500">+4% this week</span>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </main>
        </div>
    )
}
