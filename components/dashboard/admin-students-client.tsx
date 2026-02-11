'use client'

import { AdminSidebar } from '@/components/admin-sidebar'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
    Search,
    Filter,
    ChevronRight,
    Download,
    User,
    GraduationCap,
    Briefcase,
    Activity
} from 'lucide-react'
import { useState } from 'react'

interface AdminStudentsClientProps {
  user: any
  students: any[]
}

export default function AdminStudentsClient({ user, students: initialStudents }: AdminStudentsClientProps) {
    const [selectedDept, setSelectedDept] = useState('All')
    const [searchQuery, setSearchQuery] = useState('')
    const [students, setStudents] = useState(initialStudents)

    const getStatusBadge = (status: string) => {
        switch (status) {
            case 'Normal':
                return <Badge variant="secondary" className="bg-blue-500/10 text-blue-500 border-none font-bold">Normal</Badge>
            case 'At Risk':
                return <Badge variant="destructive" className="font-bold">At Risk</Badge>
            case 'Placement Ready':
                return <Badge variant="secondary" className="bg-green-500/10 text-green-500 border-none font-bold">Ready</Badge>
            default:
                return <Badge variant="outline">{status}</Badge>
        }
    }

    const filteredStudents = students.filter(student => {
        const matchesDept = selectedDept === 'All' || student.department === selectedDept
        const matchesSearch = student.full_name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            student.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            student.department?.toLowerCase().includes(searchQuery.toLowerCase())
        return matchesDept && matchesSearch
    })

    const departments = ['All', ...Array.from(new Set(students.map(s => s.department).filter(Boolean)))]

    return (
        <div className="min-h-screen bg-background text-foreground">
            <AdminSidebar />

            <main className="lg:pl-64 pt-16 min-h-screen">
                <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                        <div>
                            <h1 className="text-3xl font-bold tracking-tight">Student Directory</h1>
                            <p className="text-muted-foreground mt-1">Monitor individual student progress and performance across departments.</p>
                        </div>
                        <div className="flex gap-2">
                            <Button variant="outline" className="gap-2">
                                <Download className="w-4 h-4" /> Export CSV
                            </Button>
                            <Button className="bg-primary hover:bg-primary/90">Add Student</Button>
                        </div>
                    </div>

                    {/* Search & Filters */}
                    <Card className="p-4 mb-8 border-border">
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="relative flex-1">
                                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                <input
                                    type="search"
                                    placeholder="Search by name, roll number, or department..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="pl-10 h-10 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                                />
                            </div>
                            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
                                {departments.map((dept) => (
                                    <Button
                                        key={dept}
                                        variant={selectedDept === dept ? 'default' : 'outline'}
                                        size="sm"
                                        onClick={() => setSelectedDept(dept)}
                                        className="min-w-[60px]"
                                    >
                                        {dept}
                                    </Button>
                                ))}
                                <Button variant="outline" size="sm" className="gap-2">
                                    <Filter className="w-4 h-4" /> More Filters
                                </Button>
                            </div>
                        </div>
                    </Card>

                    {/* Students List Table */}
                    <Card className="border-border overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="bg-muted/30 border-b border-border text-muted-foreground">
                                        <th className="text-left p-4 font-semibold">Student</th>
                                        <th className="text-left p-4 font-semibold">Department</th>
                                        <th className="text-center p-4 font-semibold">GPA</th>
                                        <th className="text-center p-4 font-semibold">Career Score</th>
                                        <th className="text-center p-4 font-semibold">Stress</th>
                                        <th className="text-center p-4 font-semibold">Status</th>
                                        <th className="text-right p-4 font-semibold">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-border">
                                    {filteredStudents.map((student) => (
                                        <tr key={student.id} className="group hover:bg-muted/50 transition-colors cursor-pointer">
                                            <td className="p-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground font-bold">
                                                        {student.full_name?.charAt(0) || 'U'}
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">{student.full_name || 'Unknown'}</div>
                                                        <div className="text-xs text-muted-foreground">{student.email}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="p-4">
                                                <div className="font-medium">{student.department || 'N/A'}</div>
                                                <div className="text-[10px] text-muted-foreground uppercase">Semester {student.semester || 'N/A'}</div>
                                            </td>
                                            <td className="p-4 text-center">
                                                <div className="font-bold">{student.gpa?.toFixed(2) || 'N/A'}</div>
                                            </td>
                                            <td className="p-4 text-center">
                                                <div className="flex flex-col items-center gap-1">
                                                    <span className="font-bold">{student.career_score || 0}%</span>
                                                    <div className="w-16 bg-secondary/30 rounded-full h-1">
                                                        <div className="bg-secondary h-1 rounded-full" style={{ width: `${student.career_score || 0}%` }} />
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="p-4 text-center">
                                                <div className={`font-bold ${(student.stress_index || 0) > 70 ? 'text-red-500' : 'text-foreground'}`}>
                                                    {student.stress_index || 0}%
                                                </div>
                                            </td>
                                            <td className="p-4 text-center">
                                                {getStatusBadge(student.status || 'Normal')}
                                            </td>
                                            <td className="p-4 text-right">
                                                <Button variant="ghost" size="icon" className="group-hover:bg-background">
                                                    <ChevronRight className="w-5 h-5 text-muted-foreground" />
                                                </Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="p-4 border-t border-border bg-muted/20 flex items-center justify-between text-xs text-muted-foreground">
                            <span>Showing {filteredStudents.length} of {students.length} students</span>
                            <div className="flex gap-2">
                                <Button variant="outline" size="sm" disabled>Previous</Button>
                                <Button variant="outline" size="sm" disabled>Next</Button>
                            </div>
                        </div>
                    </Card>

                    {/* Performance Snapshots */}
                    <section className="mt-12">
                        <h2 className="text-2xl font-bold mb-6">Performance Snapshots</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                { 
                                    label: 'Highest GPA', 
                                    name: students.sort((a, b) => (b.gpa || 0) - (a.gpa || 0))[0]?.full_name || 'N/A',
                                    value: students[0]?.gpa?.toFixed(2) || 'N/A',
                                    icon: GraduationCap 
                                },
                                { 
                                    label: 'Career Ready', 
                                    name: students.sort((a, b) => (b.career_score || 0) - (a.career_score || 0))[0]?.full_name || 'N/A',
                                    value: `${students.sort((a, b) => (b.career_score || 0) - (a.career_score || 0))[0]?.career_score || 0}%`,
                                    icon: Briefcase 
                                },
                                { 
                                    label: 'Most Active', 
                                    name: students[0]?.full_name || 'N/A',
                                    value: 'Active',
                                    icon: Activity 
                                },
                            ].map((item, i) => (
                                <Card key={i} className="p-6 border-border hover:shadow-lg transition-all group">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="p-3 rounded-2xl bg-primary/10 group-hover:bg-primary transition-colors">
                                            <item.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                                        </div>
                                        <Badge variant="outline" className="text-[10px] uppercase font-bold tracking-widest">{item.label}</Badge>
                                    </div>
                                    <h3 className="text-lg font-black">{item.name}</h3>
                                    <p className="text-3xl font-black text-primary mt-2">{item.value}</p>
                                </Card>
                            ))}
                        </div>
                    </section>
                </div>
            </main>
        </div>
    )
}
