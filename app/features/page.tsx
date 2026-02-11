'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowLeft, BookOpen, TrendingUp, AlertCircle, CheckCircle, Users, BarChart3, Brain } from 'lucide-react'

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="bg-card/50 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link href="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Features</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Discover all the powerful tools available in GROW-DEX to support your growth
          </p>
        </div>
      </div>

      {/* Student Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">For Students</h2>
          <p className="text-lg text-muted-foreground">
            Personalized tools designed to help you excel academically and plan your future
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Smart Study Planner */}
          <Card className="p-8 border-border hover:shadow-lg transition">
            <BookOpen className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-3">Smart Study Planner</h3>
            <p className="text-muted-foreground mb-6">
              Let AI create personalized study schedules based on your learning style and goals.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>AI-generated timetables tailored to your schedule</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Deadline tracking for assignments and projects</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Subject prioritization based on academic gaps</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Adaptive scheduling as your workload changes</span>
              </li>
            </ul>
          </Card>

          {/* First Semester Navigator */}
          <Card className="p-8 border-border hover:shadow-lg transition">
            <Brain className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-3">First Semester Navigator</h3>
            <p className="text-muted-foreground mb-6">
              Special guidance for incoming freshers to smoothly transition to college life.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>College adaptation guides and resources</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Time management tips for new students</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Campus life orientation content</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Peer support and mentorship matching</span>
              </li>
            </ul>
          </Card>

          {/* Stress & Workload Tracker */}
          <Card className="p-8 border-border hover:shadow-lg transition">
            <AlertCircle className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-3">Stress & Workload Tracker</h3>
            <p className="text-muted-foreground mb-6">
              Monitor your wellbeing and get alerts before burnout becomes a problem.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Weekly workload scoring and analysis</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Burnout risk predictions</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Wellness recommendations</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Mental health resources and support</span>
              </li>
            </ul>
          </Card>

          {/* Dynamic Skill Roadmap */}
          <Card className="p-8 border-border hover:shadow-lg transition">
            <TrendingUp className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-3">Dynamic Skill Roadmap</h3>
            <p className="text-muted-foreground mb-6">
              Identify gaps and follow a personalized path to build in-demand skills.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Skill gap detection and analysis</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Personalized course and project suggestions</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Industry-aligned skill development paths</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Progress tracking and certifications</span>
              </li>
            </ul>
          </Card>

          {/* Career Readiness Score */}
          <Card className="p-8 border-border hover:shadow-lg transition md:col-span-2">
            <CheckCircle className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-3">Career Readiness Score</h3>
            <p className="text-muted-foreground mb-6">
              Get a comprehensive assessment of your readiness for placements and future careers.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Resume Strength</h4>
                <p className="text-sm text-muted-foreground">AI-powered resume analysis and enhancement suggestions</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Skills vs Job Requirements</h4>
                <p className="text-sm text-muted-foreground">Match your skills against job market demands</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Placement Readiness</h4>
                <p className="text-sm text-muted-foreground">Percentage score and improvement recommendations</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Admin Features Section */}
      <section className="bg-card/50 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">For Institutions</h2>
            <p className="text-lg text-muted-foreground">
              Powerful analytics and insights to improve student outcomes at scale
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Campus Analytics */}
            <Card className="p-8 border-border hover:shadow-lg transition">
              <BarChart3 className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-3">Campus Analytics</h3>
              <p className="text-muted-foreground mb-6">
                Get comprehensive insights into institutional performance.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Overall performance trends by department</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Subject-wise failure analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Comparative performance metrics</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Year-over-year improvement tracking</span>
                </li>
              </ul>
            </Card>

            {/* Risk Detection */}
            <Card className="p-8 border-border hover:shadow-lg transition">
              <AlertCircle className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-3">Risk Detection</h3>
              <p className="text-muted-foreground mb-6">
                Identify students at risk and intervene proactively.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Academic risk identification algorithms</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>At-risk student lists and notifications</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Placement risk group segmentation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Early intervention recommendations</span>
                </li>
              </ul>
            </Card>

            {/* Placement Analytics */}
            <Card className="p-8 border-border hover:shadow-lg transition">
              <TrendingUp className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-3">Placement Analytics</h3>
              <p className="text-muted-foreground mb-6">
                Monitor and improve placement outcomes across your institution.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Department-wise placement readiness</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Skill gap by department analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Ready vs not ready segmentation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Placement outcome tracking</span>
                </li>
              </ul>
            </Card>

            {/* Feedback Insights */}
            <Card className="p-8 border-border hover:shadow-lg transition">
              <Users className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-3">Feedback Insights</h3>
              <p className="text-muted-foreground mb-6">
                Anonymous student feedback to improve institutional strategies.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Anonymous feedback collection and analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Sentiment analysis and trending topics</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Student satisfaction metrics</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Actionable insights for improvement</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground mb-8 text-balance">
            Experience the power of AI-driven student success and institutional intelligence.
          </p>
          <Link href="/signup">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Start Your Free Trial
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
