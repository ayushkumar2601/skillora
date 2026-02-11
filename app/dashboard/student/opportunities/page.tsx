'use client'

import { StudentSidebar } from '@/components/student-sidebar'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
    Briefcase,
    Code,
    Award,
    Target,
    ArrowRight,
    ExternalLink,
    MapPin,
    Calendar,
    DollarSign,
    ChevronRight,
    TrendingUp
} from 'lucide-react'

const internships = [
    {
        title: 'Software Engineering Intern',
        company: 'Google',
        location: 'Remote / Bangalore',
        stipend: '₹50,000/mo',
        type: 'Summer Internship',
        match: 92,
        tags: ['Python', 'Cloud', 'Algorithms']
    },
    {
        title: 'Frontend Developer Intern',
        company: 'Zomato',
        location: 'Gurugram',
        stipend: '₹35,000/mo',
        type: '6 Months',
        match: 85,
        tags: ['React', 'TypeScript', 'Tailwind']
    },
    {
        title: 'Data Analyst Intern',
        company: 'Airtel',
        location: 'New Delhi',
        stipend: '₹25,000/mo',
        type: 'Winter Internship',
        match: 78,
        tags: ['SQL', 'PowerBI', 'Statistics']
    }
]

const events = [
    {
        title: 'Smart India Hackathon 2024',
        type: 'HACKATHON',
        date: 'Dec 15-18',
        prize: '₹1.0L',
        organizer: 'Govt. of India'
    },
    {
        title: 'Microsoft Imagine Cup',
        type: 'COMPETITION',
        date: 'Jan 2025',
        prize: '$100K Global',
        organizer: 'Microsoft'
    }
]

export default function OpportunitiesPage() {
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
                            <p className="text-secondary font-black text-xs uppercase tracking-[0.3em] mb-3">Career Intelligence</p>
                            <h1 className="text-4xl font-black tracking-tighter text-slate-900 mb-2">Market Opportunities</h1>
                            <p className="text-muted-foreground font-medium">Algorithmic matching for internships and professional milestones.</p>
                        </div>
                        <div className="flex gap-3">
                            <Button variant="outline" className="rounded-xl border-2 font-bold px-6 h-12 hover:bg-white transition-all">Preferences</Button>
                            <Button className="rounded-xl bg-secondary hover:bg-secondary/80 text-foreground font-bold px-8 h-12 shadow-lg shadow-secondary/25 hover:scale-105 transition-all">Global Board</Button>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Main Opportunities List */}
                        <div className="lg:col-span-2 space-y-6">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-2xl font-black text-slate-900 flex items-center gap-3">
                                    <Briefcase className="w-6 h-6 text-primary" /> Curated Placements
                                </h2>
                                <Button variant="ghost" size="sm" className="font-black text-primary hover:bg-primary/5 px-4 h-9">View Global List</Button>
                            </div>

                            {internships.map((job, i) => (
                                <Card key={i} className="glass-card group p-8 border-white/20 hover:scale-[1.01] transition-all cursor-pointer relative overflow-hidden">
                                    <div className="absolute top-0 right-0">
                                        <div className="bg-primary shadow-lg shadow-primary/20 text-white text-[10px] font-black px-4 py-2 rounded-bl-[1.5rem] tracking-widest">
                                            {job.match}% MATCH
                                        </div>
                                    </div>

                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                                        <div className="flex-1">
                                            <h3 className="text-2xl font-black text-slate-900 mb-1 group-hover:text-primary transition-colors">{job.title}</h3>
                                            <p className="text-sm font-black text-muted-foreground uppercase tracking-widest mb-6">{job.company}</p>

                                            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
                                                <div className="flex items-center gap-2.5 text-xs font-bold text-slate-600">
                                                    <div className="p-1.5 bg-slate-50 rounded-lg"><MapPin className="w-3.5 h-3.5" /></div> {job.location}
                                                </div>
                                                <div className="flex items-center gap-2.5 text-xs font-bold text-slate-600">
                                                    <div className="p-1.5 bg-slate-50 rounded-lg"><DollarSign className="w-3.5 h-3.5" /></div> {job.stipend}
                                                </div>
                                                <div className="flex items-center gap-2.5 text-xs font-bold text-slate-600">
                                                    <div className="p-1.5 bg-slate-50 rounded-lg"><Calendar className="w-3.5 h-3.5" /></div> {job.type}
                                                </div>
                                            </div>

                                            <div className="flex flex-wrap gap-2.5">
                                                {job.tags.map(tag => (
                                                    <Badge key={tag} variant="secondary" className="text-[10px] font-black bg-primary/5 text-primary border-none px-4 py-1.5 rounded-xl uppercase tracking-wider">
                                                        {tag}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>

                                        <Button className="md:w-40 h-12 rounded-xl font-black shadow-lg shadow-primary/10 group-hover:scale-105 transition-all">
                                            Apply Case <ChevronRight className="w-4 h-4 ml-2" />
                                        </Button>
                                    </div>
                                </Card>
                            ))}

                            <div className="pt-12">
                                <h2 className="text-2xl font-black text-slate-900 flex items-center gap-3 mb-8">
                                    <Code className="w-6 h-6 text-secondary" /> High-Utility Events
                                </h2>
                                <div className="grid sm:grid-cols-2 gap-8">
                                    {events.map((event, i) => (
                                        <Card key={i} className="glass-card p-6 border-l-4 border-l-secondary group hover:bg-white transition-all">
                                            <Badge className="mb-4 bg-secondary/10 text-secondary hover:bg-secondary/20 border-none font-black text-[9px] px-3 py-1 tracking-widest">{event.type}</Badge>
                                            <h3 className="font-black text-xl text-slate-900 mb-1 leading-tight">{event.title}</h3>
                                            <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-6">{event.organizer}</p>
                                            <div className="flex justify-between items-center text-xs font-black p-4 bg-slate-50 rounded-2xl mb-6">
                                                <span className="text-slate-600 flex items-center gap-2 tracking-tighter"><Calendar className="w-4 h-4 opacity-40" /> {event.date}</span>
                                                <span className="text-primary flex items-center gap-2 tracking-tighter"><Award className="w-4 h-4 opacity-40" /> {event.prize}</span>
                                            </div>
                                            <Button variant="outline" className="w-full border-2 rounded-xl font-black h-11 hover:bg-slate-900 hover:text-white transition-all">Register Portal</Button>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">
                            <Card className="glass-card p-8 bg-slate-900 text-white relative overflow-hidden group">
                                <div className="absolute -right-10 -top-10 w-48 h-48 bg-primary/10 rounded-full blur-3xl group-hover:scale-110 transition-transform" />
                                <h2 className="text-xl font-black mb-6 flex items-center gap-3 relative z-10">
                                    <Target className="w-6 h-6 text-primary" /> Skill Validation
                                </h2>
                                <p className="text-xs font-bold text-slate-400 mb-8 leading-relaxed relative z-10">
                                    Maximize algorithmic visibility for <b>Software Engineering</b> roles with these verified credentials.
                                </p>
                                <div className="space-y-4 relative z-10">
                                    {[
                                        { name: 'AWS Cloud Protocol', provider: 'ASAP', time: '15h' },
                                        { name: 'Meta Frontend Core', provider: 'Coursera', time: '40h' },
                                        { name: 'Google Data Engine', provider: 'Google', time: '30h' },
                                    ].map((cert, i) => (
                                        <div key={i} className="p-4 rounded-[2rem] bg-white/5 border border-white/10 group/item hover:bg-white/10 cursor-pointer transition-all">
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="text-sm font-black text-slate-200 group-hover/item:text-white">{cert.name}</span>
                                                <ExternalLink className="w-4 h-4 text-slate-500 group-hover/item:text-primary transition-colors" />
                                            </div>
                                            <div className="flex justify-between text-[9px] text-slate-500 uppercase font-black tracking-[0.2em]">
                                                <span>{cert.provider}</span>
                                                <span>INTENSITY: {cert.time}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <Button className="w-full mt-10 bg-white text-black hover:bg-slate-100 font-black rounded-xl h-12 relative z-10 transition-all hover:scale-105 shadow-xl shadow-white/5">
                                    Strategic Learning Path
                                </Button>
                            </Card>

                            <Card className="glass-card p-8">
                                <h2 className="text-xl font-black text-slate-900 mb-8 flex items-center gap-2">
                                    <TrendingUp className="w-6 h-6 text-secondary" /> Opportunity Index
                                </h2>
                                <div className="space-y-8">
                                    <div>
                                        <div className="flex justify-between text-[10px] font-black uppercase tracking-widest mb-3">
                                            <span className="text-slate-500 font-bold tracking-tight">STIPEND YIELD</span>
                                            <span className="text-green-600">HIGH POTENTIAL</span>
                                        </div>
                                        <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
                                            <div className="h-full bg-green-500 shadow-lg shadow-green-500/30" style={{ width: '85%' }} />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between text-[10px] font-black uppercase tracking-widest mb-3">
                                            <span className="text-slate-500 font-bold tracking-tight">ALGO MATCH FEASIBILITY</span>
                                            <span className="text-primary">72% ELIGIBLE</span>
                                        </div>
                                        <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
                                            <div className="h-full bg-primary shadow-lg shadow-primary/30" style={{ width: '72%' }} />
                                        </div>
                                    </div>
                                    <div className="p-5 rounded-[2rem] bg-slate-50 border border-slate-100 mt-4">
                                        <p className="text-[10px] text-slate-500 text-center font-bold leading-relaxed italic">
                                            Complete the <b>Advanced Statistics</b> module to unlock Tier-1 Data Analytics roles.
                                        </p>
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
