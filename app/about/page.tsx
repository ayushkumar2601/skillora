'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowLeft, Users, Zap, Target, Heart } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="bg-card/50 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link href="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About GROW-DEX</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Empowering students and institutions through AI-driven insights and personalized growth
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-4">
              Every student deserves personalized guidance and support to achieve their full potential. Yet, most students navigate their academic journeys without proper direction, struggling with academic drift, career confusion, stress, and lack of guidance.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              GROW-DEX bridges this gap by using advanced AI to provide intelligent, personalized recommendations that help students excel academically while maintaining wellness and building successful careers.
            </p>
          </div>
          <Card className="p-8 border-border bg-card">
            <div className="space-y-6">
              <div className="flex gap-4">
                <Zap className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Empower Students</h3>
                  <p className="text-sm text-muted-foreground">With AI-powered insights and personalized guidance</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Target className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Support Institutions</h3>
                  <p className="text-sm text-muted-foreground">With analytics to improve outcomes at scale</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Heart className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Foster Wellness</h3>
                  <p className="text-sm text-muted-foreground">By balancing academics with mental health</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-card/50 border-y border-border py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we build and every decision we make
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                title: 'Student-Centric',
                description: 'Every feature is designed with student success at the core',
                icon: Users,
              },
              {
                title: 'Data-Driven',
                description: 'Our recommendations are based on proven academic patterns',
                icon: Zap,
              },
              {
                title: 'Holistic',
                description: 'We support academics, careers, and wellness together',
                icon: Heart,
              },
              {
                title: 'Inclusive',
                description: 'Everyone deserves quality guidance regardless of background',
                icon: Target,
              },
            ].map((value, i) => (
              <Card key={i} className="p-6 border-border text-center">
                <value.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Making a difference in the lives of students and institutions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              stat: '50,000+',
              label: 'Students Supported',
              description: 'Across 150+ institutions worldwide'
            },
            {
              stat: '35%',
              label: 'Average Improvement',
              description: 'In academic performance within 6 months'
            },
            {
              stat: '92%',
              label: 'Student Satisfaction',
              description: 'Users report improved confidence and clarity'
            },
          ].map((item, i) => (
            <Card key={i} className="p-8 border-border text-center">
              <div className="text-4xl font-bold text-primary mb-2">{item.stat}</div>
              <h3 className="font-bold text-lg mb-2">{item.label}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-card/50 border-y border-border py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experts in education, AI, and student success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Dr. Rajesh Kumar',
                role: 'Founder & CEO',
                expertise: 'Education & AI',
              },
              {
                name: 'Sarah Chen',
                role: 'Chief Data Officer',
                expertise: 'Data Science & Analytics',
              },
              {
                name: 'Marcus Johnson',
                role: 'VP Product',
                expertise: 'EdTech & UX',
              },
            ].map((member, i) => (
              <Card key={i} className="p-8 border-border text-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                <p className="text-sm font-semibold text-primary mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.expertise}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-lg text-muted-foreground mb-8 text-balance">
            Be part of transforming how students learn, grow, and succeed
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Get Started Today
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
