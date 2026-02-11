import { redirect } from 'next/navigation'
import { getCurrentUser } from '@/lib/actions/auth.actions'
import { getStudentDashboardData } from '@/lib/actions/student.actions'
import StudentSettingsClient from '@/components/dashboard/student-settings-client'

export default async function StudentSettingsPage() {
  const currentUser = await getCurrentUser()

  if (!currentUser) {
    redirect('/login')
  }

  const dashboardData = await getStudentDashboardData(currentUser.user.id)

  if (!dashboardData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Error loading profile data</p>
      </div>
    )
  }

  return <StudentSettingsClient user={currentUser} dashboardData={dashboardData} />
}
