'use client'

import { AdminSidebar } from '@/components/admin-sidebar'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
    MessageSquare,
    Smile,
    Meh,
    Frown,
    PieChart as PieChartIcon,
    Sparkles,
    ArrowRight,
    Send,
    Brain,
    Filter
} from 'lucide-react'
import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    Tooltip,
    Legend
} from 'recharts'

const feedbackCategoryData = [
    { name: 'Academics', value: 35 },
    { name: 'Faculty', value: 20 },
    { name: 'Placement', value: 15 },
    { name: 'Workload', value: 15 },
    { name: 'Facilities', value: 10 },
    { name: 'Mental Health', value: 5 },
]

const COLORS = [
    'hsl(var(--primary))',
    'hsl(var(--secondary))',
    '#fbbf24',
    '#f87171',
    '#818cf8',
    '#34d399'
]

const recentFeedback = [
    { text: "Too many assignments in one week, feeling overwhelmed.", sentiment: 'negative', category: 'Workload' },
    { text: "Need more placement training sessions for backend roles.", sentiment: 'neutral', category: 'Placement' },
    { text: "Classes are too fast-paced, harder to follow complex logic.", sentiment: 'negative', category: 'Academics' },
    { text: "The new lab facilities are excellent and very helpful.", sentiment: 'positive', category: 'Facilities' },
]

export default function FeedbackInsightsPage() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <AdminSidebar />

            <main className="lg:pl-64 pt-16 min-h-screen">
                <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold tracking-tight">Student Feedback Insights</h1>
                        <p className="text-muted-foreground mt-1">Anonymous feedback and AI sentiment analysis for better campus decisions.</p>
                    </div>

                    {/* Section 1: Feedback Summary Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                        <Card className="p-6 border-border">
                            <div className="flex items-center justify-between mb-2">
                                <p className="text-sm font-medium text-muted-foreground">Total Feedback</p>
                                <MessageSquare className="w-5 h-5 text-primary" />
                            </div>
                            <p className="text-3xl font-bold">350</p>
                        </Card>

                        <Card className="p-6 border-border bg-green-500/5 border-green-500/10">
                            <div className="flex items-center justify-between mb-2">
                                <p className="text-sm font-medium text-green-700">Positive Sentiment</p>
                                <Smile className="w-5 h-5 text-green-500" />
                            </div>
                            <p className="text-3xl font-bold text-green-700">62%</p>
                        </Card>

                        <Card className="p-6 border-border bg-yellow-500/5 border-yellow-500/10">
                            <div className="flex items-center justify-between mb-2">
                                <p className="text-sm font-medium text-yellow-700">Neutral Sentiment</p>
                                <Meh className="w-5 h-5 text-yellow-500" />
                            </div>
                            <p className="text-3xl font-bold text-yellow-700">25%</p>
                        </Card>

                        <Card className="p-6 border-border bg-red-500/5 border-red-500/10">
                            <div className="flex items-center justify-between mb-2">
                                <p className="text-sm font-medium text-red-700">Negative Sentiment</p>
                                <Frown className="w-5 h-5 text-red-500" />
                            </div>
                            <p className="text-3xl font-bold text-red-700">13%</p>
                        </Card>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 mb-8">
                        {/* Section 2: Feedback Categories Chart */}
                        <Card className="p-6 border-border">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-xl font-bold">Feedback Categories</h2>
                                <PieChartIcon className="w-5 h-5 text-muted-foreground" />
                            </div>
                            <div className="h-[300px] w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie
                                            data={feedbackCategoryData}
                                            cx="50%"
                                            cy="50%"
                                            innerRadius={60}
                                            outerRadius={80}
                                            paddingAngle={5}
                                            dataKey="value"
                                        >
                                            {feedbackCategoryData.map((entry, index) => (
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

                        {/* Section 4: Sentiment Analysis (AI Summary) */}
                        <Card className="p-6 border-border bg-gradient-to-br from-primary/5 to-secondary/5">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-primary/10 rounded-lg">
                                    <Sparkles className="w-5 h-5 text-primary" />
                                </div>
                                <h2 className="text-xl font-bold">AI Sentiment Summary</h2>
                            </div>
                            <div className="space-y-4">
                                <div className="p-4 rounded-xl bg-background border border-border">
                                    <p className="text-sm font-bold text-red-600 mb-1">Critical Insight</p>
                                    <p className="text-sm leading-relaxed text-muted-foreground">
                                        "High stress reported predominantly in the 2nd-year CSE department due to assignment clustering."
                                    </p>
                                </div>
                                <div className="p-4 rounded-xl bg-background border border-border">
                                    <p className="text-sm font-bold text-secondary mb-1">Opportunity</p>
                                    <p className="text-sm leading-relaxed text-muted-foreground">
                                        "Placement concerns are increasing among 3rd years. Demand for focused DSA workshops is high."
                                    </p>
                                </div>
                                <div className="p-4 rounded-xl bg-background border border-border">
                                    <p className="text-sm font-bold text-green-600 mb-1">Growth Area</p>
                                    <p className="text-sm leading-relaxed text-muted-foreground">
                                        "Mental health sessions are requested by more than 15% of respondents this month."
                                    </p>
                                </div>
                                <Button className="w-full gap-2 mt-2 bg-primary hover:bg-primary/90">
                                    <Brain className="w-4 h-4" /> Generate Full AI Report
                                </Button>
                            </div>
                        </Card>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Section 3: Recent Feedback */}
                        <Card className="lg:col-span-2 p-6 border-border">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-xl font-bold">Recent Anonymous Feedback</h2>
                                <Button variant="ghost" size="sm" className="gap-2">
                                    <Filter className="w-4 h-4" /> Filter
                                </Button>
                            </div>
                            <div className="space-y-4">
                                {recentFeedback.map((item, i) => (
                                    <div key={i} className="p-4 rounded-xl border border-border bg-card/50 hover:border-primary/50 transition-colors">
                                        <div className="flex justify-between items-start mb-2">
                                            <Badge variant="outline" className="text-[10px] uppercase font-bold tracking-widest">{item.category}</Badge>
                                            <div className={`p-1 rounded-full ${item.sentiment === 'positive' ? 'bg-green-500/20 text-green-600' :
                                                    item.sentiment === 'negative' ? 'bg-red-500/20 text-red-600' :
                                                        'bg-yellow-500/20 text-yellow-600'
                                                }`}>
                                                {item.sentiment === 'positive' ? <Smile className="w-4 h-4" /> :
                                                    item.sentiment === 'negative' ? <Frown className="w-4 h-4" /> :
                                                        <Meh className="w-4 h-4" />}
                                            </div>
                                        </div>
                                        <p className="text-sm italic text-muted-foreground">"{item.text}"</p>
                                    </div>
                                ))}
                            </div>
                            <Button className="w-full mt-6" variant="outline">Load More Feedback</Button>
                        </Card>

                        {/* Section 5: Action Insights */}
                        <Card className="p-6 border-border flex flex-col">
                            <h2 className="text-lg font-bold mb-6">Suggested Actions</h2>
                            <div className="space-y-4 flex-1">
                                {[
                                    { action: 'Conduct Placement Bootcamp', target: '3rd Year Students', icon: ArrowRight },
                                    { action: 'Reduce Assignment Clustering', target: 'Policy Update', icon: Send },
                                    { action: 'Add Mental Health Sessions', target: 'Wellness Program', icon: Sparkles },
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 items-start group cursor-pointer p-3 rounded-xl hover:bg-secondary/10 transition-colors">
                                        <div className="p-2 rounded-lg bg-secondary text-foreground group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                                            <item.icon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold leading-tight">{item.action}</p>
                                            <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-tight">{item.target}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <Button className="w-full mt-6 bg-secondary hover:bg-secondary/90 text-foreground font-bold">
                                Implement Recommendations
                            </Button>
                        </Card>
                    </div>
                </div>
            </main>
        </div>
    )
}
