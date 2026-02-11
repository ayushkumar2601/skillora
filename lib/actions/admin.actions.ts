'use server'

import { createClient } from '@/lib/supabase/server'

export async function getAdminDashboardStats() {
  const supabase = await createClient()

  // Get total students count
  const { count: totalStudents } = await supabase
    .from('students')
    .select('*', { count: 'exact', head: true })

  // Get average GPA
  const { data: students } = await supabase
    .from('students')
    .select('gpa, stress_index, career_score')

  const avgGpa = students?.reduce((acc, s) => acc + (s.gpa || 0), 0) / (students?.length || 1)
  const avgAttendance = 94.2 // This would come from an attendance table in production

  // Get placement rate (students with career_score >= 80)
  const placementReady = students?.filter(s => s.career_score >= 80).length || 0
  const placementRate = ((placementReady / (students?.length || 1)) * 100).toFixed(0)

  // Get risk alerts (students with stress_index > 70)
  const riskAlerts = students?.filter(s => s.stress_index > 70).length || 0

  return {
    totalStudents: totalStudents || 0,
    avgAttendance,
    placementRate: `${placementRate}%`,
    riskAlerts,
  }
}

export async function getAllStudents() {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('student_analytics')
    .select('*')
    .order('full_name', { ascending: true })

  if (error) {
    console.error('Error fetching students:', error)
    return []
  }

  return data
}

export async function getStudentById(studentId: string) {
  const supabase = await createClient()

  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', studentId)
    .single()

  const { data: student } = await supabase
    .from('students')
    .select('*')
    .eq('profile_id', studentId)
    .single()

  const { data: prediction } = await supabase
    .from('predictions')
    .select('*')
    .eq('user_id', studentId)
    .single()

  const { data: subjectScores } = await supabase
    .from('subject_scores')
    .select('*')
    .eq('user_id', studentId)

  return {
    profile,
    student,
    prediction,
    subjectScores: subjectScores || [],
  }
}

export async function getDepartmentStats() {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('department_stats')
    .select('*')

  if (error) {
    console.error('Error fetching department stats:', error)
    return []
  }

  return data
}

export async function getAtRiskStudents() {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('student_analytics')
    .select('*')
    .eq('status', 'At Risk')
    .order('stress_index', { ascending: false })

  if (error) {
    console.error('Error fetching at-risk students:', error)
    return []
  }

  return data
}

export async function getPlacementReadyStudents() {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('student_analytics')
    .select('*')
    .eq('status', 'Placement Ready')
    .order('career_score', { ascending: false })

  if (error) {
    console.error('Error fetching placement ready students:', error)
    return []
  }

  return data
}

export async function getAnalyticsData() {
  const supabase = await createClient()

  // Get all students for analytics
  const { data: students } = await supabase
    .from('students')
    .select('department, gpa, stress_index, career_score')

  // Calculate department-wise average GPA
  const deptGpaMap = new Map<string, { total: number; count: number }>()
  
  students?.forEach(student => {
    const dept = student.department
    const current = deptGpaMap.get(dept) || { total: 0, count: 0 }
    deptGpaMap.set(dept, {
      total: current.total + (student.gpa || 0),
      count: current.count + 1,
    })
  })

  const academicPerformance = Array.from(deptGpaMap.entries()).map(([dept, data]) => ({
    dept,
    gpa: Number((data.total / data.count).toFixed(1)),
  }))

  // Calculate placement readiness
  const totalStudents = students?.length || 1
  const ready = students?.filter(s => s.career_score >= 80).length || 0
  const almostReady = students?.filter(s => s.career_score >= 60 && s.career_score < 80).length || 0
  const notReady = totalStudents - ready - almostReady

  const placementReadiness = [
    { name: 'Ready', value: Math.round((ready / totalStudents) * 100) },
    { name: 'Almost Ready', value: Math.round((almostReady / totalStudents) * 100) },
    { name: 'Not Ready', value: Math.round((notReady / totalStudents) * 100) },
  ]

  // Calculate average stress
  const avgStress = students?.reduce((acc, s) => acc + (s.stress_index || 0), 0) / totalStudents
  const highStressCount = students?.filter(s => s.stress_index > 70).length || 0

  return {
    academicPerformance,
    placementReadiness,
    totalStudents,
    atRiskStudents: highStressCount,
    avgGpa: Number((students?.reduce((acc, s) => acc + (s.gpa || 0), 0) / totalStudents).toFixed(1)),
    avgStress: Math.round(avgStress),
  }
}

export async function searchStudents(query: string) {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('student_analytics')
    .select('*')
    .or(`full_name.ilike.%${query}%,email.ilike.%${query}%,department.ilike.%${query}%`)
    .order('full_name', { ascending: true })

  if (error) {
    console.error('Error searching students:', error)
    return []
  }

  return data
}
