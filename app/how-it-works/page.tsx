'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowLeft, Upload, Zap, Target, TrendingUp } from 'lucide-react'

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="bg-card/50 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link href="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A four-step workflow to transform your academic journey and unlock your potential
          </p>
        </div>
      </div>

      {/* Main Workflow */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {/* Step 1 */}
          <div className="relative">
            <Card className="p-8 h-full border-border bg-card hover:shadow-lg transition">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 mb-6">
                <Upload className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Step 1: Student Input</h3>
              <p className="text-muted-foreground mb-6">
                You provide your academic data and personal information:
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Academic marks and GPA</li>
                <li>• Current subjects and courses</li>
                <li>• Personal goals and aspirations</li>
                <li>• Technical and soft skills</li>
                <li>• Stress level and workload</li>
                <li>• Learning preferences</li>
              </ul>
            </Card>
            <div className="hidden md:block absolute right-0 top-1/2 w-8 h-0.5 bg-gradient-to-r from-primary/50 to-transparent" style={{ right: '-32px' }} />
          </div>

          {/* Step 2 */}
          <div className="relative">
            <Card className="p-8 h-full border-border bg-card hover:shadow-lg transition">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary/20 mb-6">
                <Zap className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Step 2: AI Analysis</h3>
              <p className="text-muted-foreground mb-6">
                Our advanced AI engine processes your data:
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Performance pattern analysis</li>
                <li>• Risk prediction algorithms</li>
                <li>• Skill gap detection</li>
                <li>• Career path matching</li>
                <li>• Burnout risk assessment</li>
                <li>• Learning optimization</li>
              </ul>
            </Card>
            <div className="hidden md:block absolute right-0 top-1/2 w-8 h-0.5 bg-gradient-to-r from-primary/50 to-transparent" style={{ right: '-32px' }} />
          </div>

          {/* Step 3 */}
          <div className="relative">
            <Card className="p-8 h-full border-border bg-card hover:shadow-lg transition">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 mb-6">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Step 3: Personalized Output</h3>
              <p className="text-muted-foreground mb-6">
                You receive customized recommendations:
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Personalized study plan</li>
                <li>• Optimized weekly schedule</li>
                <li>• Skill development roadmap</li>
                <li>• Career readiness score</li>
                <li>• Wellness recommendations</li>
                <li>• Resource suggestions</li>
              </ul>
            </Card>
            <div className="hidden md:block absolute right-0 top-1/2 w-8 h-0.5 bg-gradient-to-r from-primary/50 to-transparent" style={{ right: '-32px' }} />
          </div>

          {/* Step 4 */}
          <div>
            <Card className="p-8 h-full border-border bg-card hover:shadow-lg transition">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary/20 mb-6">
                <TrendingUp className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Step 4: Continuous Tracking</h3>
              <p className="text-muted-foreground mb-6">
                We monitor your progress ongoing:
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Real-time progress updates</li>
                <li>• Performance alerts</li>
                <li>• Dynamic recommendations</li>
                <li>• Milestone celebrations</li>
                <li>• Adaptive adjustments</li>
                <li>• Success tracking</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Explanation */}
      <section className="bg-card/50 border-y border-border py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">The Process in Detail</h2>

          <div className="space-y-12">
            {/* Input Details */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">1. Comprehensive Data Collection</h3>
                <p className="text-muted-foreground mb-4">
                  GROW-DEX starts by gathering comprehensive information about you through an intuitive onboarding process. This includes your academic performance, current skills, career aspirations, and personal challenges you might be facing.
                </p>
                <p className="text-muted-foreground">
                  The more detailed your input, the more personalized and accurate your recommendations will be. All your data is kept secure and private.
                </p>
              </div>
              <Card className="p-8 border-border bg-background">
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Academic Profile</p>
                      <p className="text-sm text-muted-foreground">Marks, subjects, performance trends</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Skills Assessment</p>
                      <p className="text-sm text-muted-foreground">Technical & soft skills inventory</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Career Goals</p>
                      <p className="text-sm text-muted-foreground">Dream roles, industry preferences</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Wellness Data</p>
                      <p className="text-sm text-muted-foreground">Stress levels, workload, sleep patterns</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Analysis Details */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <Card className="p-8 border-border bg-background order-2 md:order-1">
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Performance Analytics</p>
                      <p className="text-sm text-muted-foreground">Identify strengths and weaknesses</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Risk Prediction</p>
                      <p className="text-sm text-muted-foreground">Predict academic and career risks</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Skill Gap Analysis</p>
                      <p className="text-sm text-muted-foreground">Identify missing capabilities</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Career Mapping</p>
                      <p className="text-sm text-muted-foreground">Match skills to industry needs</p>
                    </div>
                  </div>
                </div>
              </Card>
              <div className="order-1 md:order-2">
                <h3 className="text-2xl font-bold mb-4">2. Intelligent AI Analysis</h3>
                <p className="text-muted-foreground mb-4">
                  Our AI engine uses machine learning algorithms to analyze your data and understand your unique learning patterns, challenges, and opportunities. This involves deep pattern recognition across academic, skill, and career dimensions.
                </p>
                <p className="text-muted-foreground">
                  The system continuously learns from millions of successful student journeys to make increasingly accurate predictions and recommendations for you.
                </p>
              </div>
            </div>

            {/* Output Details */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">3. Actionable Personalization</h3>
                <p className="text-muted-foreground mb-4">
                  Based on the analysis, you receive a comprehensive set of personalized recommendations. These aren't generic suggestions—they're tailored specifically to your situation, goals, and learning style.
                </p>
                <p className="text-muted-foreground">
                  You get actionable insights you can implement immediately, from study schedules to skill development plans, all designed to maximize your success.
                </p>
              </div>
              <Card className="p-8 border-border bg-background">
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Study Plans</p>
                      <p className="text-sm text-muted-foreground">Weekly schedules optimized for you</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Skill Roadmaps</p>
                      <p className="text-sm text-muted-foreground">Path to develop key capabilities</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Career Strategy</p>
                      <p className="text-sm text-muted-foreground">Placement readiness roadmap</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Wellness Plan</p>
                      <p className="text-sm text-muted-foreground">Balance studies with wellbeing</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Tracking Details */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <Card className="p-8 border-border bg-background order-2 md:order-1">
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Progress Tracking</p>
                      <p className="text-sm text-muted-foreground">See how far you've come</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Smart Alerts</p>
                      <p className="text-sm text-muted-foreground">Get notified of important milestones</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Dynamic Updates</p>
                      <p className="text-sm text-muted-foreground">Plans adapt as you progress</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Success Metrics</p>
                      <p className="text-sm text-muted-foreground">Measure your growth and achievements</p>
                    </div>
                  </div>
                </div>
              </Card>
              <div className="order-1 md:order-2">
                <h3 className="text-2xl font-bold mb-4">4. Continuous Evolution</h3>
                <p className="text-muted-foreground mb-4">
                  Your journey doesn't end with the initial plan. GROW-DEX continuously monitors your progress and automatically adjusts recommendations as you grow and your circumstances change.
                </p>
                <p className="text-muted-foreground">
                  The platform celebrates your wins, keeps you motivated, and ensures you stay on track to achieve your goals while maintaining healthy balance in your life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why This Approach Works</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 border-border">
              <div className="text-4xl font-bold text-primary/30 mb-4">1</div>
              <h3 className="text-xl font-bold mb-3">Personalized to You</h3>
              <p className="text-muted-foreground">
                Every student is unique. Our AI understands this and creates plans that work specifically for your learning style, pace, and goals.
              </p>
            </Card>

            <Card className="p-8 border-border">
              <div className="text-4xl font-bold text-primary/30 mb-4">2</div>
              <h3 className="text-xl font-bold mb-3">Data-Driven Insights</h3>
              <p className="text-muted-foreground">
                Based on real academic data and proven success patterns from thousands of students, our recommendations are grounded in evidence, not guesses.
              </p>
            </Card>

            <Card className="p-8 border-border">
              <div className="text-4xl font-bold text-primary/30 mb-4">3</div>
              <h3 className="text-xl font-bold mb-3">Holistic Support</h3>
              <p className="text-muted-foreground">
                We don't just focus on grades. We help with career readiness, wellness, skill development, and overall personal growth.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-card/50 border-t border-border py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Transformation?</h2>
          <p className="text-lg text-muted-foreground mb-8 text-balance">
            Join GROW-DEX today and experience a smarter way to achieve your academic and career goals.
          </p>
          <Link href="/signup">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Get Started Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
