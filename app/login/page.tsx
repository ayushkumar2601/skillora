'use client'

import React, { Suspense } from "react"
import Link from 'next/link'
import { Brain, ArrowRight, AlertCircle } from 'lucide-react'
import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { signIn } from '@/lib/actions/auth.actions'
import { BrutalButton, BrutalCard, BrutalInput } from '@/components/brutal'

function LoginContent() {
  const searchParams = useSearchParams()

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
    <div className="min-h-screen bg-brutal text-black flex flex-col">
      {/* Header */}
      <header className="border-b-4 border-black bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link href="/" className="inline-flex items-center gap-2">
            <div className="w-10 h-10 bg-black border-2 border-black flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <span className="font-black text-xl uppercase tracking-tighter">GROW-DEX</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="w-full max-w-md">
          {/* Form Card */}
          <BrutalCard className="p-8">
            <h1 className="text-4xl font-black mb-2 uppercase tracking-tight">WELCOME BACK</h1>
            <p className="text-black font-medium mb-8 opacity-70">
              Sign in to your GROW-DEX account
            </p>

            {errors.general && (
              <div className="mb-6 p-4 bg-white border-2 border-brutal-accent flex items-center gap-3">
                <AlertCircle className="w-5 h-5 text-brutal-accent flex-shrink-0" />
                <span className="text-sm font-medium text-black">{errors.general}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email Input */}
              <BrutalInput
                type="email"
                placeholder="your@email.com"
                name="email"
                label="EMAIL ADDRESS"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
              />

              {/* Password Input */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="brutal-label block text-black">PASSWORD</label>
                  <Link href="/forgot-password" className="text-xs text-brutal-accent hover:text-black font-bold uppercase tracking-wide">
                    Forgot?
                  </Link>
                </div>
                <input
                  type="password"
                  placeholder="Enter password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`brutal-input w-full ${errors.password ? 'border-brutal-accent' : ''}`}
                />
                {errors.password && (
                  <p className="text-brutal-accent text-sm font-medium mt-1 flex items-center gap-1">
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
                  className="w-5 h-5 border-2 border-black"
                />
                <label htmlFor="rememberMe" className="ml-3 text-sm font-bold cursor-pointer uppercase tracking-wide">
                  Remember me
                </label>
              </div>

              {/* Submit Button */}
              <BrutalButton 
                type="submit" 
                disabled={isSubmitting}
                variant="primary"
                className="w-full py-4 disabled:opacity-50"
              >
                {isSubmitting ? 'SIGNING IN...' : 'SIGN IN'}
                {!isSubmitting && <ArrowRight className="w-4 h-4 ml-2 inline" />}
              </BrutalButton>

              {/* Signup Link */}
              <p className="text-center text-sm font-medium text-black">
                Don't have an account?{' '}
                <Link href="/signup" className="text-brutal-accent hover:text-black font-bold uppercase">
                  Create one
                </Link>
              </p>
            </form>

            {/* Demo Credentials */}
            <div className="mt-8 pt-8 border-t-2 border-black">
              <p className="text-xs text-black font-bold mb-3 uppercase tracking-wide">Demo Credentials</p>
              <div className="space-y-2">
                <div className="p-3 bg-brutal border-2 border-black">
                  <p className="text-xs font-bold text-black"><span className="font-black">STUDENT:</span> demo@student.com</p>
                </div>
                <div className="p-3 bg-brutal border-2 border-black">
                  <p className="text-xs font-bold text-black"><span className="font-black">ADMIN:</span> admin@institution.com</p>
                </div>
              </div>
            </div>
          </BrutalCard>
        </div>
      </div>
    </div>
  )
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-brutal" />}>
      <LoginContent />
    </Suspense>
  )
}
