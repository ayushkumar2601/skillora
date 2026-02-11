'use client'

import { StudentSidebar } from '@/components/student-sidebar'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
    Send,
    Sparkles,
    Brain,
    Zap,
    Search,
    BookOpen,
    Briefcase,
    Lightbulb,
    MessageSquare,
    X,
    ChevronRight
} from 'lucide-react'
import { useState } from 'react'

export default function AIAssistantPage() {
    const [messages, setMessages] = useState([
        {
            role: 'assistant',
            content: 'Hello Aarav! I am your GROW-DEX AI Assistant. How can I help you with your studies or career today?',
            type: 'text'
        }
    ])
    const [input, setInput] = useState('')

    const quickPrompts = [
        { label: 'DSA Study Plan', icon: BookOpen },
        { label: 'Resume Feedback', icon: Briefcase },
        { label: 'Stress Management', icon: Zap },
        { label: 'Career Roadmap', icon: Lightbulb },
    ]

    const handleSend = () => {
        if (!input.trim()) return

        const newMessages = [
            ...messages,
            { role: 'user', content: input, type: 'text' }
        ]
        setMessages(newMessages)
        setInput('')

        // Simulate AI response
        setTimeout(() => {
            setMessages(prev => [
                ...prev,
                {
                    role: 'assistant',
                    content: "That's a great question! Based on your current progress in Data Structures, I recommend focusing on dynamic programming this week. Would you like me to generate a 3-day intense study plan for it?",
                    type: 'text'
                }
            ])
        }, 1000)
    }

    return (
        <div className="min-h-screen bg-background text-foreground">
            <StudentSidebar />

            <main className="lg:pl-64 pt-16 min-h-screen relative overflow-hidden flex flex-col">
                {/* Background Depth Elements */}
                <div className="absolute top-20 right-[10%] w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 left-[5%] w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float" />

                <div className="p-4 sm:p-6 lg:p-8 max-w-5xl mx-auto w-full flex-1 flex flex-col relative z-10">
                    {/* Header */}
                    <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div>
                            <p className="text-primary font-black text-xs uppercase tracking-[0.3em] mb-3">Intelligence Core</p>
                            <h1 className="text-4xl font-black tracking-tighter text-slate-900 mb-2">AI Academic Assistant</h1>
                            <p className="text-muted-foreground font-medium">Instant guidance for your academic and career journey.</p>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-2xl border border-primary/20">
                            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                            <span className="text-xs font-black uppercase tracking-widest text-primary">Ultra-X Model Active</span>
                        </div>
                    </div>

                    {/* Chat Container */}
                    <Card className="flex-1 glass-card mb-4 overflow-hidden flex flex-col border-white/20">
                        <div className="flex-1 p-6 overflow-y-auto space-y-6 custom-scrollbar">
                            {messages.map((msg, i) => (
                                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[85%] flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                                        <div className={`w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg ${msg.role === 'user' ? 'bg-secondary shadow-secondary/20' : 'bg-primary shadow-primary/20'
                                            }`}>
                                            {msg.role === 'user' ? <MessageSquare className="w-5 h-5 text-white" /> : <Brain className="w-5 h-5 text-white" />}
                                        </div>
                                        <div className={`p-5 rounded-[2rem] ${msg.role === 'user'
                                            ? 'bg-slate-900 text-white rounded-tr-none shadow-xl shadow-slate-900/10'
                                            : 'bg-white/80 backdrop-blur-sm border border-white/40 rounded-tl-none shadow-sm'
                                            }`}>
                                            <p className="text-sm font-medium leading-relaxed">{msg.content}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Quick Prompts */}
                        <div className="p-6 border-t border-slate-100 bg-slate-50/50">
                            <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em] mb-4 ml-1">Suggested Inquiries</p>
                            <div className="flex flex-wrap gap-2">
                                {quickPrompts.map((prompt, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setInput(prompt.label)}
                                        className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white border border-slate-200 hover:border-primary/50 hover:bg-primary/5 hover:scale-105 transition-all text-xs font-bold text-slate-700"
                                    >
                                        <prompt.icon className="w-3.5 h-3.5 text-primary" />
                                        {prompt.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Input Area */}
                        <div className="p-6 border-t border-slate-100 bg-white">
                            <div className="relative group">
                                <input
                                    type="text"
                                    placeholder="Ask me anything about your studies, career, or wellness..."
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                    className="w-full h-14 pl-6 pr-14 rounded-2xl border-2 border-slate-100 focus:border-primary/30 focus:outline-none bg-slate-50/50 transition-all font-bold placeholder:text-slate-400"
                                />
                                <button
                                    onClick={handleSend}
                                    disabled={!input.trim()}
                                    className="absolute right-2 top-2 w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center hover:bg-primary/90 hover:scale-105 transition-all disabled:opacity-50 shadow-lg shadow-primary/20"
                                >
                                    <Send className="w-5 h-5" />
                                </button>
                            </div>
                            <div className="mt-4 flex items-center justify-center gap-6 text-[10px] text-muted-foreground font-black uppercase tracking-widest">
                                <span className="flex items-center gap-1.5"><Search className="w-3 h-3" /> Search Resources</span>
                                <span className="flex items-center gap-1.5"><Zap className="w-3 h-3" /> Smart Suggestions</span>
                            </div>
                        </div>
                    </Card>
                </div>
            </main>
        </div>
    )
}
