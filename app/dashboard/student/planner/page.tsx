'use client'

import { StudentSidebar } from '@/components/student-sidebar'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Plus,
  CheckCircle,
  Clock,
  AlertCircle,
  Calendar,
  ChevronRight,
  Sparkles,
  Brain,
  X,
  Layout
} from 'lucide-react'
import { useState } from 'react'

export default function PlannerPage() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [newTask, setNewTask] = useState({ title: '', subject: '', deadline: '', priority: 'medium' })

  const tasks = [
    {
      id: 1,
      title: 'Study Arrays and Linked Lists',
      subject: 'Data Structures',
      deadline: '2024-02-15',
      priority: 'high',
      completed: false,
      estimatedHours: 3,
    },
    {
      id: 2,
      title: 'Complete Calculus Problem Set',
      subject: 'Mathematics',
      deadline: '2024-02-20',
      priority: 'high',
      completed: false,
      estimatedHours: 2.5,
    },
    {
      id: 3,
      title: 'Write Physics Lab Report',
      subject: 'Physics',
      deadline: '2024-02-18',
      priority: 'medium',
      completed: false,
      estimatedHours: 2,
    },
    {
      id: 4,
      title: 'Read Chapter 5-7',
      subject: 'Literature',
      deadline: '2024-02-16',
      priority: 'low',
      completed: true,
      estimatedHours: 1.5,
    },
  ]

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-500 bg-red-500/10 border-red-500/20'
      case 'medium': return 'text-orange-500 bg-orange-500/10 border-orange-500/20'
      case 'low': return 'text-green-500 bg-green-500/10 border-green-500/20'
      default: return 'text-slate-500 bg-slate-500/10 border-slate-500/20'
    }
  }

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
              <p className="text-primary font-black text-xs uppercase tracking-[0.3em] mb-3">Efficiency Engine</p>
              <h1 className="text-4xl font-black tracking-tighter text-slate-900 mb-2">Smart Study Planner</h1>
              <p className="text-muted-foreground font-medium">Algorithmic scheduling for optimized academic output.</p>
            </div>
            <div className="flex gap-3">
              <Button onClick={() => setShowAddTask(!showAddTask)} className="rounded-xl font-bold px-8 h-12 shadow-lg shadow-primary/25 hover:scale-105 transition-all">
                {showAddTask ? <><X className="w-4 h-4 mr-2" /> CLOSE PANEL</> : <><Plus className="w-4 h-4 mr-2" /> NEW OBJECTIVE</>}
              </Button>
            </div>
          </div>

          {/* Add Task Panel */}
          {showAddTask && (
            <Card className="glass-card p-10 mb-10 border-primary/20 bg-primary/[0.02] relative overflow-hidden">
              <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
              <h3 className="text-xl font-black text-slate-900 mb-8 uppercase tracking-tight flex items-center gap-3">
                <Layout className="w-5 h-5 text-primary" /> Define New Task
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-3 ml-1">Objective Title</label>
                  <input
                    type="text"
                    placeholder="e.g. Master DP Algorithms"
                    className="w-full h-12 px-5 border-2 border-slate-100 rounded-xl focus:border-primary/30 focus:outline-none bg-white/50 backdrop-blur-sm transition-all font-bold placeholder:text-slate-300"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-3 ml-1">Domain / Subject</label>
                  <input
                    type="text"
                    placeholder="e.g. Computer Science"
                    className="w-full h-12 px-5 border-2 border-slate-100 rounded-xl focus:border-primary/30 focus:outline-none bg-white/50 backdrop-blur-sm transition-all font-bold placeholder:text-slate-300"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-3 ml-1">Target Milestone</label>
                  <input
                    type="date"
                    className="w-full h-12 px-5 border-2 border-slate-100 rounded-xl focus:border-primary/30 focus:outline-none bg-white/50 backdrop-blur-sm transition-all font-bold"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-3 ml-1">Priority Index</label>
                  <select className="w-full h-12 px-5 border-2 border-slate-100 rounded-xl focus:border-primary/30 focus:outline-none bg-white/50 backdrop-blur-sm transition-all font-bold">
                    <option value="low">Low Impact</option>
                    <option value="medium">Medium Priority</option>
                    <option value="high">Critical / High</option>
                  </select>
                </div>
              </div>
              <div className="flex gap-4">
                <Button className="h-12 px-10 rounded-xl font-black shadow-xl shadow-primary/20">CREATE OBJECTIVE</Button>
                <Button variant="ghost" onClick={() => setShowAddTask(false)} className="h-12 px-8 font-black text-slate-400 hover:text-slate-900">CANCEL</Button>
              </div>
            </Card>
          )}

          {/* Planner Content */}
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Primary Task Column */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Active Trajectory</h2>
                <Badge className="bg-slate-900 text-white border-none font-black text-[9px] px-3 py-1 tracking-widest">{tasks.filter(t => !t.completed).length} REMAINING</Badge>
              </div>

              <div className="space-y-4">
                {tasks.filter((t) => !t.completed).map((task) => (
                  <Card key={task.id} className="glass-card p-8 group hover:scale-[1.01] transition-all cursor-pointer relative overflow-hidden">
                    <div className="absolute top-0 right-0">
                      <div className={`px-4 py-2 text-[10px] font-black uppercase tracking-widest rounded-bl-2xl border-l border-b ${getPriorityColor(task.priority)}`}>
                        {task.priority} Priority
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                      <div className="flex-1">
                        <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-2">{task.subject}</p>
                        <h3 className="text-xl font-black text-slate-900 mb-6 group-hover:text-primary transition-colors leading-tight">{task.title}</h3>
                        <div className="flex items-center gap-10 text-[10px] font-black uppercase tracking-widest text-slate-500">
                          <span className="flex items-center gap-2"><Clock className="w-4 h-4 opacity-40" /> Intensity: {task.estimatedHours}H</span>
                          <span className="flex items-center gap-2 text-primary/80"><Calendar className="w-4 h-4 opacity-40" /> Cycles: 3-Day Forecast</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="px-6 py-2.5 bg-slate-50 rounded-xl border border-slate-100 flex flex-col items-center justify-center">
                          <span className="text-[9px] font-black text-muted-foreground uppercase opacity-60">DUE IN</span>
                          <span className="text-lg font-black text-slate-900 leading-none">3 Days</span>
                        </div>
                        <Button className="h-14 w-14 rounded-2xl shadow-xl shadow-primary/20 flex items-center justify-center p-0">
                          <ChevronRight className="w-6 h-6" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Completed Section */}
              <div className="pt-10">
                <div className="flex items-center gap-4 mb-8">
                  <h3 className="text-sm font-black text-muted-foreground uppercase tracking-[0.2em]">Archived Milestones</h3>
                  <div className="h-px flex-1 bg-slate-100" />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {tasks.filter((t) => t.completed).map((task) => (
                    <Card key={task.id} className="glass-card p-6 opacity-60 bg-slate-50/50 grayscale group hover:grayscale-0 hover:opacity-100 transition-all border-dashed">
                      <div className="flex items-center gap-4">
                        <div className="p-2 bg-green-500 text-white rounded-xl shadow-lg shadow-green-500/20">
                          <CheckCircle className="w-4 h-4" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-sm font-black text-slate-900 group-hover:text-green-600 transition-colors line-through decoration-slate-900/10 mb-0.5">{task.title}</h4>
                          <p className="text-[9px] font-black text-muted-foreground uppercase tracking-widest">{task.subject}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar Stats */}
            <div className="space-y-8">
              <Card className="glass-card p-8 bg-slate-900 text-white relative overflow-hidden group">
                <Brain className="absolute -right-8 -top-8 w-40 h-40 opacity-10 group-hover:rotate-12 transition-transform" />
                <h2 className="text-lg font-black mb-8 flex items-center gap-3 relative z-10 uppercase tracking-tight">
                  <Sparkles className="w-5 h-5 text-primary" /> AI Schedule Audit
                </h2>
                <div className="space-y-6 relative z-10">
                  <div className="p-5 rounded-3xl bg-white/5 border border-white/10">
                    <p className="text-[10px] font-black text-primary uppercase tracking-widest mb-3">Efficiency Insight</p>
                    <p className="text-xs font-bold leading-relaxed text-slate-300 italic">“Detected high density of Math tasks in Cycle 2. Recommended: Shift Physics to Cycle 3 for optimal cognitive retention.”</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                      <p className="text-[9px] font-black text-slate-500 uppercase mb-2">Completion Rate</p>
                      <p className="text-2xl font-black text-white">92%</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                      <p className="text-[9px] font-black text-slate-500 uppercase mb-2">Focus Quotient</p>
                      <p className="text-2xl font-black text-secondary">8.4</p>
                    </div>
                  </div>
                </div>
                <Button className="w-full mt-10 h-12 rounded-xl bg-white text-slate-900 font-black hover:bg-slate-100 transition-all shadow-xl shadow-white/5 relative z-10">OPTIMIZE MY WEEK</Button>
              </Card>

              <Card className="glass-card p-8">
                <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-8">Capacity Index</h2>
                <div className="space-y-8">
                  <div>
                    <div className="flex justify-between text-[10px] font-black uppercase tracking-widest mb-3">
                      <span className="text-slate-500">Weekly Bandwidth</span>
                      <span className="text-primary">85% LOADED</span>
                    </div>
                    <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: '85%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-[10px] font-black uppercase tracking-widest mb-3">
                      <span className="text-slate-500">Project Velocity</span>
                      <span className="text-secondary">EXCEPTIONAL</span>
                    </div>
                    <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-secondary" style={{ width: '92%' }} />
                    </div>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-center">
                    <p className="text-[10px] font-bold text-slate-500 leading-tight">Current trend indicates you will complete <span className="text-slate-900 font-black">4 OBJECTIVES</span> earlier than predicted.</p>
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
