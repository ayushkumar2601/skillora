'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'

export async function getStudentDashboardData(userId: string) {
  const supabase = await createClient()

  // Get student data
  const { data: student, error: studentError } = await supabase
    .from('students')
    .select('*')
    .eq('profile_id', userId)
    .single()

  if (studentError) {
    console.error('Error fetching student:', studentError)
    return null
  }

  // Get predictions
  const { data: prediction } = await supabase
    .from('predictions')
    .select('*')
    .eq('user_id', userId)
    .single()

  // Get subject scores
  const { data: subjectScores } = await supabase
    .from('subject_scores')
    .select('*')
    .eq('user_id', userId)

  // Get upcoming tasks
  const { data: tasks } = await supabase
    .from('tasks')
    .select('*')
    .eq('user_id', userId)
    .eq('completed', false)
    .order('deadline', { ascending: true })
    .limit(5)

  return {
    student,
    prediction,
    subjectScores: subjectScores || [],
    upcomingTasks: tasks || [],
  }
}

export async function getStudentTasks(userId: string) {
  const supabase = await createClient()

  const { data: tasks, error } = await supabase
    .from('tasks')
    .select('*')
    .eq('user_id', userId)
    .order('deadline', { ascending: true })

  if (error) {
    console.error('Error fetching tasks:', error)
    return []
  }

  return tasks
}

export async function createTask(taskData: {
  user_id: string
  title: string
  subject: string
  deadline: string
  priority: 'low' | 'medium' | 'high'
  estimated_hours: number
}) {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('tasks')
    .insert([taskData])
    .select()
    .single()

  if (error) {
    return { error: error.message }
  }

  revalidatePath('/dashboard/student/planner')
  return { data }
}

export async function updateTask(taskId: string, updates: {
  title?: string
  subject?: string
  deadline?: string
  priority?: 'low' | 'medium' | 'high'
  completed?: boolean
  estimated_hours?: number
}) {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('tasks')
    .update(updates)
    .eq('id', taskId)
    .select()
    .single()

  if (error) {
    return { error: error.message }
  }

  revalidatePath('/dashboard/student/planner')
  return { data }
}

export async function deleteTask(taskId: string) {
  const supabase = await createClient()

  const { error } = await supabase
    .from('tasks')
    .delete()
    .eq('id', taskId)

  if (error) {
    return { error: error.message }
  }

  revalidatePath('/dashboard/student/planner')
  return { success: true }
}

export async function getStudentPredictions(userId: string) {
  const supabase = await createClient()

  const { data: prediction, error } = await supabase
    .from('predictions')
    .select('*')
    .eq('user_id', userId)
    .single()

  if (error) {
    console.error('Error fetching predictions:', error)
    return null
  }

  return prediction
}

export async function getSubjectScores(userId: string) {
  const supabase = await createClient()

  const { data: scores, error } = await supabase
    .from('subject_scores')
    .select('*')
    .eq('user_id', userId)
    .order('score', { ascending: false })

  if (error) {
    console.error('Error fetching subject scores:', error)
    return []
  }

  return scores
}

export async function updateStudentProfile(userId: string, updates: {
  gpa?: number
  stress_index?: number
  career_score?: number
  study_streak?: number
}) {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('students')
    .update(updates)
    .eq('profile_id', userId)
    .select()
    .single()

  if (error) {
    return { error: error.message }
  }

  revalidatePath('/dashboard/student')
  return { data }
}
