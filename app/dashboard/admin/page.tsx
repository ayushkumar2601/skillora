'use client'

import { AdminSidebar } from '@/components/admin-sidebar'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  BarChart3,
  Users,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  ShieldCheck,
  ChevronRight,
  Briefcase,
  Activity
} from 'lucide-react'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts'

const data = [
  { name: 'Sep', value: 62 },
  { name: 'Oct', value: 68 },
  { name: 'Nov', value: 65 },
  { name: 'Dec', value: 74 },
  { name: 'Jan', value: 78 },
  { name: 'Feb', value: 85 },
]

const deptData = [
  { name: 'CSE', value: 850, color: 'hsl(var(--primary))' },
  { name: 'ECE', value: 620, color: 'hsl(var(--secondary))' },
  { name: 'ME', value: 480, color: '#f87171' },
  { name: 'CE', value: 530, color: '#fbbf24' },
]

export default function AdminDashboard() {
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
              <p className="text-primary font-black text-xs uppercase tracking-[0.3em] mb-3">Institutional Overview</p>
              <h1 className="text-4xl font-black tracking-tighter text-slate-900 mb-2">Campus Dashboard</h1>
              <p className="text-muted-foreground font-medium">Real-time intelligence and institutional performance markers.</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="rounded-xl border-2 font-bold px-6 h-12 hover:bg-white transition-all">Export Report</Button>
              <Button className="rounded-xl font-bold px-8 h-12 shadow-lg shadow-primary/25 hover:scale-105 transition-all">Live Insights</Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {[
              { label: 'Total Students', value: '2,480', icon: Users, color: 'text-primary', bg: 'bg-primary/10' },
              { label: 'Avg. Attendance', value: '94.2%', icon: BarChart3, color: 'text-secondary', bg: 'bg-secondary/10' },
              { label: 'Placement Rate', value: '88%', icon: Briefcase, color: 'text-green-600', bg: 'bg-green-500/10' },
              { label: 'Risk Alerts', value: '12', icon: AlertTriangle, color: 'text-destructive', bg: 'bg-destructive/10' },
            ].map((stat, i) => (
              <Card key={i} className="glass-card p-6 group hover:translate-y-[-4px] transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-2xl ${stat.bg} ${stat.color} group-hover:scale-110 transition-transform`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <Badge variant="secondary" className="bg-white/50 text-[10px] font-black py-0.5 border-none">LIVE</Badge>
                </div>
                <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-1">{stat.label}</p>
                <p className="text-3xl font-black text-slate-900">{stat.value}</p>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-10">
            {/* Enrollment Growth */}
            <Card className="lg:col-span-2 glass-card p-8">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-black text-slate-900">Placement Probability Trend</h2>
                  <p className="text-sm text-muted-foreground font-medium">Monthly projections across all cohorts</p>
                </div>
                <div className="flex gap-2">
                  <div className="flex items-center gap-1.5 px-3 py-1 bg-primary/5 rounded-full text-[10px] font-black text-primary border border-primary/10">PROJECTION</div>
                </div>
              </div>
              <div className="h-[350px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data}>
                    <defs>
                      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                      </linearGradient>
                    </defs>
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
                      contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', backdropFilter: 'blur(10px)', border: '1px solid hsl(var(--border))', borderRadius: '16px', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
                    />
                    <Area type="monotone" dataKey="value" stroke="hsl(var(--primary))" strokeWidth={4} fillOpacity={1} fill="url(#colorValue)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </Card>

            {/* Department Breakdown */}
            <Card className="glass-card p-8 flex flex-col items-center justify-center text-center">
              <div className="relative w-full h-[250px] mb-8">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={deptData}
                      cx="50%"
                      cy="50%"
                      innerRadius={70}
                      outerRadius={90}
                      paddingAngle={8}
                      dataKey="value"
                      stroke="none"
                    >
                      {deptData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <p className="text-3xl font-black text-slate-900 leading-none">2.4k</p>
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mt-1">Students</p>
                </div>
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-4">Department Load</h3>
              <div className="w-full space-y-3">
                {deptData.map((dept, i) => (
                  <div key={i} className="flex items-center justify-between group">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: dept.color }} />
                      <span className="text-xs font-bold text-slate-600 group-hover:text-slate-900 transition-colors">{dept.name}</span>
                    </div>
                    <span className="text-xs font-black text-slate-900">{dept.value}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Critical Alerts */}
            <Card className="glass-card border-l-4 border-l-destructive overflow-hidden">
              <div className="p-6 border-b border-border flex items-center justify-between">
                <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-destructive" /> Immediate Attention
                </h3>
                <Badge variant="destructive" className="font-bold">12 ALERTS</Badge>
              </div>
              <div className="p-2">
                {[
                  { title: 'High Attrition Risk', dept: 'Mechanical Year 2', trend: 'Critical', color: 'text-red-600' },
                  { title: 'Attendance Drop', dept: 'ECE Year 4 Section B', trend: 'High', color: 'text-orange-600' },
                  { title: 'Certification Lag', dept: 'CS Year 3 (Azure)', trend: 'Moderate', color: 'text-yellow-600' },
                ].map((alert, i) => (
                  <div key={i} className="p-4 flex items-center justify-between hover:bg-red-50/50 rounded-xl transition-colors group cursor-pointer">
                    <div>
                      <h4 className="font-bold text-slate-800 group-hover:text-slate-900">{alert.title}</h4>
                      <p className="text-xs text-muted-foreground font-medium">{alert.dept}</p>
                    </div>
                    <div className="text-right">
                      <Badge variant="outline" className={`font-black text-[10px] ${alert.color} border-current`}>{alert.trend}</Badge>
                      <ChevronRight className="w-4 h-4 ml-2 inline-block text-muted-foreground group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4 bg-muted/30">
                <Button variant="ghost" className="w-full text-xs font-bold text-muted-foreground hover:text-primary">VIEW ALL RISK ALERTS</Button>
              </div>
            </Card>

            {/* Campus Highlights */}
            <Card className="glass-card overflow-hidden">
              <div className="p-6 border-b border-border">
                <h3 className="text-lg font-black text-slate-900">Institutional Highlights</h3>
              </div>
              <div className="p-6 grid grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-primary/5 border border-primary/10 group cursor-pointer hover:bg-primary/10 transition-all">
                  <TrendingUp className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <h4 className="font-black text-slate-900 leading-tight">Skill Lift +22%</h4>
                  <p className="text-[10px] text-muted-foreground font-bold mt-1 uppercase tracking-tighter">Cohort 2024</p>
                </div>
                <div className="p-5 rounded-2xl bg-secondary/5 border border-secondary/10 group cursor-pointer hover:bg-secondary/10 transition-all">
                  <CheckCircle className="w-8 h-8 text-secondary mb-3 group-hover:scale-110 transition-transform" />
                  <h4 className="font-black text-slate-900 leading-tight">Placement Target Met</h4>
                  <p className="text-[10px] text-muted-foreground font-bold mt-1 uppercase tracking-tighter">CSE DEPT</p>
                </div>
              </div>
              <div className="px-6 pb-6">
                <Button className="w-full bg-slate-900 text-white hover:bg-slate-800 rounded-xl font-bold h-12 shadow-xl shadow-slate-900/10">Generate Strategy Report</Button>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
