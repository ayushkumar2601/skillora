import { redirect } from 'next/navigation'
import { getCurrentUser } from '@/lib/actions/auth.actions'
import { getStudentDashboardData } from '@/lib/actions/student.actions'
import StudentDashboardClient from '@/components/dashboard/student-dashboard-client'

export default async function StudentDashboard() {
  const currentUser = await getCurrentUser()

  if (!currentUser) {
    redirect('/login')
  }

  const dashboardData = await getStudentDashboardData(currentUser.user.id)

  if (!dashboardData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Error loading dashboard data</p>
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
