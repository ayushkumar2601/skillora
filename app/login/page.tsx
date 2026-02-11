'use client'

import React from "react"

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
import { Brain, ArrowRight, AlertCircle } from 'lucide-react'
import { useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { signIn } from '@/lib/actions/auth.actions'

function LoginContent() {
  const searchParams = useSearchParams()
  const roleParam = searchParams.get('role')

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    if (!formData.password) {
      newErrors.password = 'Password is required'
    }

    return newErrors
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => { const newErrors = { ...prev }; delete newErrors[name]; return newErrors })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors = validateForm()

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsSubmitting(true)
    
    const result = await signIn({
      email: formData.email,
      password: formData.password,
    })

    if (result?.error) {
      setErrors({ general: result.error })
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link href="/" className="inline-flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Brain className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-xl">GROW-DEX</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="w-full max-w-md">
          {/* Form Card */}
          <Card className="p-8 border-border">
            <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
            <p className="text-muted-foreground mb-8">
              Sign in to your GROW-DEX account
            </p>

            {errors.general && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
                <AlertCircle className="w-5 h-5 text-red-600" />
                <span className="text-sm text-red-700">{errors.general}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Email Input */}
              <div>
                <label className="block text-sm font-medium mb-2">Email Address</label>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full ${errors.email ? 'border-red-500' : ''}`}
                />
                {errors.email && (
                  <p className="text-sm text-red-500 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" /> {errors.email}
                  </p>
                )}
              </div>

              {/* Password Input */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-medium">Password</label>
                  <Link href="/forgot-password" className="text-xs text-primary hover:text-primary/80">
                    Forgot password?
                  </Link>
                </div>
                <Input
                  type="password"
                  placeholder="Enter password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full ${errors.password ? 'border-red-500' : ''}`}
                />
                {errors.password && (
                  <p className="text-sm text-red-500 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" /> {errors.password}
                  </p>
                )}
              </div>

              {/* Remember Me */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="rememberMe"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  className="w-4 h-4 rounded border-border"
                />
                <label htmlFor="rememberMe" className="ml-2 text-sm font-medium cursor-pointer">
                  Remember me
                </label>
              </div>

              {/* Submit Button */}
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 h-11 disabled:opacity-70"
              >
                {isSubmitting ? 'Signing In...' : 'Sign In'}
                {!isSubmitting && <ArrowRight className="w-4 h-4 ml-2" />}
              </Button>

              {/* Signup Link */}
              <p className="text-center text-sm text-muted-foreground">
                Don't have an account?{' '}
                <Link href="/signup" className="text-primary hover:text-primary/80 font-semibold">
                  Create one
                </Link>
              </p>
            </form>

            {/* Demo Credentials */}
            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-xs text-muted-foreground font-semibold mb-3">Demo Credentials</p>
              <div className="space-y-2">
                <div className="p-3 rounded-lg bg-card/50 border border-border">
                  <p className="text-xs"><span className="font-semibold">Student:</span> demo@student.com</p>
                </div>
                <div className="p-3 rounded-lg bg-card/50 border border-border">
                  <p className="text-xs"><span className="font-semibold">Admin:</span> admin@institution.com</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background" />}>
      <LoginContent />
    </Suspense>
  )
}
