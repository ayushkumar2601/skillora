'use server'

import { createClient } from '@/lib/supabase/server'
import { calculateCareerReadiness, calculateStressIndex, predictGPA, chatWithAI } from '@/lib/ai/groq'
import { revalidatePath } from 'next/cache'

export async function updateAIMetrics(userId: string) {
  try {
    const supabase = await createClient()

    // Get student data
    const { data: student } = await supabase
      .from('students')
      .select('*')
      .eq('profile_id', userId)
      .single()

    if (!student) {
      return { error: 'Student not found' }
    }

    // Get subject scores
    const { data: subjectScores } = await supabase
      .from('subject_scores')
      .select('*')
      .eq('user_id', userId)

    // Get tasks
    const { data: tasks } = await supabase
      .from('tasks')
      .select('*')
      .eq('user_id', userId)
      .eq('completed', false)

    const pendingTasks = tasks?.length || 0
    const upcomingDeadlines = tasks?.filter(t => {
      const daysUntil = Math.ceil((new Date(t.deadline).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))
      return daysUntil <= 7 && daysUntil >= 0
    }).length || 0

    // Calculate AI metrics
    const [careerScore, stressIndex, predictedGPA] = await Promise.all([
      calculateCareerReadiness({
        gpa: student.gpa,
        department: student.department,
        semester: student.semester,
        subjectScores: subjectScores || [],
        tasks: tasks || [],
      }),
      calculateStressIndex({
        gpa: student.gpa,
        semester: student.semester,
        pendingTasks,
        upcomingDeadlines,
      }),
      predictGPA({
        currentGPA: student.gpa,
        semester: student.semester,
        subjectScores: subjectScores || [],
        studyStreak: student.study_streak,
      }),
    ])

    // Update student record
    const { error: updateError } = await supabase
      .from('students')
      .update({
        career_score: Math.round(careerScore),
        stress_index: Math.round(stressIndex),
      })
      .eq('profile_id', userId)

    if (updateError) {
      return { error: updateError.message }
    }

    // Update or create prediction
    const { error: predictionError } = await supabase
      .from('predictions')
      .upsert({
        user_id: userId,
        predicted_gpa: predictedGPA,
        placement_probability: Math.min(Math.round(careerScore * 1.1), 100),
      })

    if (predictionError) {
      console.error('Prediction error:', predictionError)
    }

    revalidatePath('/dashboard/student')
    return { 
      success: true, 
      data: { 
        career_score: Math.round(careerScore), 
        stress_index: Math.round(stressIndex),
        predicted_gpa: predictedGPA 
      } 
    }
  } catch (error: any) {
    console.error('Error updating AI metrics:', error)
    return { error: error.message || 'Failed to update AI metrics' }
  }
}

export async function sendChatMessage(message: string, userId: string) {
  try {
    const supabase = await createClient()

    // Get user context
    const { data: profile } = await supabase
      .from('profiles')
      .select('full_name')
      .eq('id', userId)
      .single()

    const { data: student } = await supabase
      .from('students')
      .select('gpa, department, semester')
      .eq('profile_id', userId)
      .single()

    const response = await chatWithAI(message, {
      studentName: profile?.full_name,
      gpa: student?.gpa,
      department: student?.department,
      semester: student?.semester,
    })

    return { success: true, response }
  } catch (error: any) {
    console.error('Error in chat:', error)
    return { error: error.message || 'Failed to send message' }
  }
}
