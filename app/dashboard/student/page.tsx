import { redirect } from 'next/navigation'
import { getCurrentUser } from '@/lib/actions/auth.actions'
import { getStudentDashboardData, initializeStudentRecord } from '@/lib/actions/student.actions'
import StudentDashboardClient from '@/components/dashboard/student-dashboard-client'

export default async function StudentDashboard() {
  const currentUser = await getCurrentUser()

  if (!currentUser) {
    redirect('/login')
  }

  let dashboardData = await getStudentDashboardData(currentUser.user.id)

  // If no data exists, initialize student record
  if (!dashboardData) {
    const department = currentUser.profile?.department || 'Computer Science'
    await initializeStudentRecord(currentUser.user.id, department)
    dashboardData = await getStudentDashboardData(currentUser.user.id)
  }

  // If still no data, show error
  if (!dashboardData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brutal">
        <div className="brutal-card p-8 text-center">
          <p className="font-bold text-black uppercase">Error loading dashboard data</p>
          <p className="text-sm text-black mt-2">Please try refreshing the page</p>
        </div>
      </div>
    )
  }

  return (
    <StudentDashboardClient
      user={currentUser}
      dashboardData={dashboardData}
    />
  )
}
