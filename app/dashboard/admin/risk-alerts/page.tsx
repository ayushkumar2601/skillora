'use client'

import { AdminSidebar } from '@/components/admin-sidebar'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
    AlertTriangle,
    Briefcase,
    GraduationCap,
    Zap,
    Mail,
    Calendar,
    User,
    Search,
    ArrowUpRight
} from 'lucide-react'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from 'recharts'

const riskTrendData = [
    { month: 'Sep', count: 45 },
    { month: 'Oct', count: 52 },
    { month: 'Nov', count: 80 },
    { month: 'Dec', count: 65 },
    { month: 'Jan', count: 142 },
]

const riskStudents = [
    { name: 'Rahul Sharma', dept: 'CSE', type: 'Academic', score: 85, reason: 'GPA below 6.5', status: 'critical' },
    { name: 'Priya Patel', dept: 'ECE', type: 'Placement', score: 72, reason: 'No projects added', status: 'warning' },
    { name: 'Amit Kumar', dept: 'ME', type: 'High Stress', score: 90, reason: 'Burnout alert', status: 'critical' },
    { name: 'Sneha Gupta', dept: 'CE', type: 'Attendance', score: 65, reason: 'Below 75%', status: 'warning' },
]

export default function RiskAlertsPage() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <AdminSidebar />

            <main className="lg:pl-64 pt-16 min-h-screen">
                <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold tracking-tight">Risk Alerts</h1>
                        <p className="text-muted-foreground mt-1">Early detection of students facing academic or placement risks.</p>
                    </div>

                    {/* Section 1: Risk Summary Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                        <Card className="p-6 border-l-4 border-l-red-500">
                            <div className="flex items-center gap-3 mb-2">
                                <GraduationCap className="w-5 h-5 text-red-500" />
                                <p className="text-sm font-bold uppercase tracking-tighter">Academic Risk</p>
                            </div>
                            <p className="text-3xl font-bold">80</p>
                            <p className="text-xs text-muted-foreground mt-1 text-red-500 font-medium">Students flagged</p>
                        </Card>

                        <Card className="p-6 border-l-4 border-l-orange-500">
                            <div className="flex items-center gap-3 mb-2">
                                <Briefcase className="w-5 h-5 text-orange-500" />
                                <p className="text-sm font-bold uppercase tracking-tighter">Placement Risk</p>
                            </div>
                            <p className="text-3xl font-bold">120</p>
                            <p className="text-xs text-muted-foreground mt-1 text-orange-500 font-medium">Incomplete profiles</p>
                        </Card>

                        <Card className="p-6 border-l-4 border-l-purple-500">
                            <div className="flex items-center gap-3 mb-2">
                                <Zap className="w-5 h-5 text-purple-500" />
                                <p className="text-sm font-bold uppercase tracking-tighter">High Stress</p>
                            </div>
                            <p className="text-3xl font-bold">60</p>
                            <p className="text-xs text-muted-foreground mt-1 text-purple-500 font-medium">Reporting burnout</p>
                        </Card>

                        <Card className="p-6 border-l-4 border-l-blue-500">
                            <div className="flex items-center gap-3 mb-2">
                                <AlertTriangle className="w-5 h-5 text-blue-500" />
                                <p className="text-sm font-bold uppercase tracking-tighter">Attendance Risk</p>
                            </div>
                            <p className="text-3xl font-bold">40</p>
                            <p className="text-xs text-muted-foreground mt-1 text-blue-500 font-medium">Below threshold</p>
                        </Card>
                    </div>

                    {/* Section 2: Student Risk Table */}
                    <div className="grid lg:grid-cols-3 gap-8 mb-8">
                        <Card className="lg:col-span-2 p-6 border-border">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-xl font-bold">At-Risk Students</h2>
                                <div className="relative">
                                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                    <input
                                        type="search"
                                        placeholder="Search students..."
                                        className="pl-9 h-9 w-[200px] lg:w-[300px] rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                                    />
                                </div>
                            </div>

                            <div className="overflow-x-auto">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="border-b border-border text-muted-foreground">
                                            <th className="text-left pb-4 font-semibold">Name</th>
                                            <th className="text-left pb-4 font-semibold">Risk Type</th>
                                            <th className="text-left pb-4 font-semibold">Reason</th>
                                            <th className="text-right pb-4 font-semibold">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-border">
                                        {riskStudents.map((student) => (
                                            <tr key={student.name} className="group hover:bg-muted/50 transition-colors">
                                                <td className="py-4">
                                                    <div className="font-semibold">{student.name}</div>
                                                    <div className="text-[10px] text-muted-foreground uppercase">{student.dept} Dept</div>
                                                </td>
                                                <td className="py-4">
                                                    <Badge variant={student.status === 'critical' ? 'destructive' : 'secondary'} className="font-bold">
                                                        {student.type}
                                                    </Badge>
                                                </td>
                                                <td className="py-4 text-muted-foreground">{student.reason}</td>
                                                <td className="py-4 text-right">
                                                    <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                        <Button variant="outline" size="icon" className="h-8 w-8 hover:bg-primary/10 hover:text-primary">
                                                            <Mail className="w-4 h-4" />
                                                        </Button>
                                                        <Button variant="outline" size="icon" className="h-8 w-8 hover:bg-secondary/10 hover:text-secondary">
                                                            <Calendar className="w-4 h-4" />
                                                        </Button>
                                                        <Button variant="outline" size="icon" className="h-8 w-8">
                                                            <User className="w-4 h-4" />
                                                        </Button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <Button className="w-full mt-6" variant="ghost">View All At-Risk Students</Button>
                        </Card>

                        <div className="space-y-8">
                            <Card className="p-6 border-border">
                                <h2 className="text-xl font-bold mb-6">Risk Trend Graph</h2>
                                <div className="h-[200px] w-full">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <LineChart data={riskTrendData}>
                                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                                            <XAxis
                                                dataKey="month"
                                                axisLine={false}
                                                tickLine={false}
                                                tick={{ fontSize: 10, fill: 'hsl(var(--muted-foreground))' }}
                                            />
                                            <YAxis
                                                axisLine={false}
                                                tickLine={false}
                                                tick={{ fontSize: 10, fill: 'hsl(var(--muted-foreground))' }}
                                            />
                                            <Tooltip
                                                contentStyle={{ backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: '8px' }}
                                            />
                                            <Line
                                                type="monotone"
                                                dataKey="count"
                                                stroke="hsl(var(--primary))"
                                                strokeWidth={2}
                                                dot={{ fill: 'hsl(var(--primary))', r: 4 }}
                                            />
                                        </LineChart>
                                    </ResponsiveContainer>
                                </div>
                                <p className="text-xs text-muted-foreground mt-4 text-center">
                                    Total flagged students per month
                                </p>
                            </Card>

                            <Card className="p-6 border-border overflow-hidden relative">
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <ArrowUpRight className="w-12 h-12" />
                                </div>
                                <h2 className="text-lg font-bold mb-4">Intervention Success</h2>
                                <p className="text-3xl font-black text-primary">82%</p>
                                <p className="text-sm text-muted-foreground mt-2">
                                    Of students recovered after admin counseling sessions last month.
                                </p>
                                <Button className="w-full mt-6 bg-secondary hover:bg-secondary/90 text-foreground font-bold">
                                    View Case Studies
                                </Button>
                            </Card>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
