'use client'

import { StudentSidebar } from '@/components/student-sidebar'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { useState } from 'react'
import { updateStudentProfile } from '@/lib/actions/student.actions'
import { User, GraduationCap, TrendingUp, AlertCircle, Zap, Save, ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface StudentSettingsClientProps {
  user: any
  dashboardData: any
}

export default function StudentSettingsClient({ user, dashboardData }: StudentSettingsClientProps) {
  const router = useRouter()
  const { student } = dashboardData

  const [formData, setFormData] = useState({
    gpa: student.gpa || 0,
    stress_index: student.stress_index || 0,
    career_score: student.career_score || 0,
    study_streak: student.study_streak || 0,
  })

  const [isSaving, setIsSaving] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: parseFloat(value) || 0 }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSaving(true)
    setMessage(null)

    try {
      const result = await updateStudentProfile(user.user.id, formData)

      if (result.error) {
        setMessage({ type: 'error', text: result.error })
      } else {
        setMessage({ type: 'success', text: 'Profile updated successfully!' })
        setTimeout(() => {
          router.push('/dashboard/student')
          router.refresh()
        }, 1500)
      }
    } catch (error: any) {
      setMessage({ type: 'error', text: error.message || 'Failed to update profile' })
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <StudentSidebar />

      <main className="lg:pl-64 pt-16 min-h-screen">
        <div className="p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Button
              variant="ghost"
              onClick={() => router.push('/dashboard/student')}
              className="mb-4 font-bold"
            >
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Dashboard
            </Button>
            <h1 className="text-3xl font-bold tracking-tight">Profile Settings</h1>
            <p className="text-muted-foreground mt-1">Update your academic information and metrics</p>
          </div>

          {/* Message Alert */}
          {message && (
            <div className={`mb-6 p-4 rounded-xl border ${
              message.type === 'success' 
                ? 'bg-green-50 border-green-200 text-green-800' 
                : 'bg-red-50 border-red-200 text-red-800'
            }`}>
              {message.text}
            </div>
          )}

          <div className="grid gap-8">
            {/* Profile Info Card */}
            <Card className="p-8 border-border">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">{user.profile?.full_name || user.user.email}</h2>
                  <p className="text-sm text-muted-foreground">{user.user.email}</p>
                  <Badge className="mt-2 bg-primary/10 text-primary border-none">
                    {student.department || 'Computer Science'} • Semester {student.semester || 1}
                  </Badge>
                </div>
              </div>
            </Card>

            {/* Edit Form */}
            <form onSubmit={handleSubmit}>
              <Card className="p-8 border-border">
                <h2 className="text-2xl font-bold mb-6">Academic Metrics</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {/* GPA */}
                  <div className="space-y-2">
                    <Label htmlFor="gpa" className="flex items-center gap-2 font-bold">
                      <GraduationCap className="w-4 h-4 text-primary" />
                      Current GPA
                    </Label>
                    <Input
                      id="gpa"
                      name="gpa"
                      type="number"
                      step="0.01"
                      min="0"
                      max="10"
                      value={formData.gpa}
                      onChange={handleChange}
                      className="h-12 text-lg font-bold"
                    />
                    <p className="text-xs text-muted-foreground">Scale: 0.00 - 10.00</p>
                  </div>

                  {/* Career Score */}
                  <div className="space-y-2">
                    <Label htmlFor="career_score" className="flex items-center gap-2 font-bold">
                      <TrendingUp className="w-4 h-4 text-secondary" />
                      Career Readiness Score
                    </Label>
                    <Input
                      id="career_score"
                      name="career_score"
                      type="number"
                      min="0"
                      max="100"
                      value={formData.career_score}
                      onChange={handleChange}
                      className="h-12 text-lg font-bold"
                    />
                    <p className="text-xs text-muted-foreground">Percentage: 0 - 100</p>
                  </div>

                  {/* Stress Index */}
                  <div className="space-y-2">
                    <Label htmlFor="stress_index" className="flex items-center gap-2 font-bold">
                      <AlertCircle className="w-4 h-4 text-yellow-600" />
                      Stress Index
                    </Label>
                    <Input
                      id="stress_index"
                      name="stress_index"
                      type="number"
                      min="0"
                      max="100"
                      value={formData.stress_index}
                      onChange={handleChange}
                      className="h-12 text-lg font-bold"
                    />
                    <p className="text-xs text-muted-foreground">
                      {formData.stress_index > 70 ? '⚠️ High stress level' : 
                       formData.stress_index > 40 ? '⚡ Moderate stress' : 
                       '✅ Low stress level'}
                    </p>
                  </div>

                  {/* Study Streak */}
                  <div className="space-y-2">
                    <Label htmlFor="study_streak" className="flex items-center gap-2 font-bold">
                      <Zap className="w-4 h-4 text-orange-500" />
                      Study Streak (Days)
                    </Label>
                    <Input
                      id="study_streak"
                      name="study_streak"
                      type="number"
                      min="0"
                      value={formData.study_streak}
                      onChange={handleChange}
                      className="h-12 text-lg font-bold"
                    />
                    <p className="text-xs text-muted-foreground">Consecutive days of study</p>
                  </div>
                </div>

                {/* Save Button */}
                <div className="mt-8 flex gap-4">
                  <Button
                    type="submit"
                    disabled={isSaving}
                    className="flex-1 h-12 bg-primary hover:bg-primary/90 font-bold text-lg"
                  >
                    {isSaving ? (
                      'Saving...'
                    ) : (
                      <>
                        <Save className="w-5 h-5 mr-2" /> Save Changes
                      </>
                    )}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => router.push('/dashboard/student')}
                    className="h-12 px-8 font-bold"
                  >
                    Cancel
                  </Button>
                </div>
              </Card>
            </form>

            {/* Info Card */}
            <Card className="p-6 border-border bg-blue-50/50 border-blue-200">
              <div className="flex gap-3">
                <div className="p-2 bg-blue-100 rounded-lg h-fit">
                  <AlertCircle className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-blue-900 mb-1">About These Metrics</h3>
                  <p className="text-sm text-blue-800 leading-relaxed">
                    These metrics help GROW-DEX provide personalized recommendations. Update them regularly to get the most accurate insights and predictions for your academic journey.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
