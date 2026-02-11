import { redirect } from 'next/navigation'
import { getCurrentUser } from '@/lib/actions/auth.actions'
import { getAdminDashboardStats, getDepartmentStats, getAtRiskStudents } from '@/lib/actions/admin.actions'
import AdminDashboardClient from '@/components/dashboard/admin-dashboard-client'

export default async function AdminDashboard() {
  const currentUser = await getCurrentUser()

  if (!currentUser) {
    redirect('/login')
  }

  // Redirect all users to student dashboard (admin role removed)
  redirect('/dashboard/student')

  return (
    <AdminDashboardClient
      user={currentUser}
      stats={stats}
      departmentStats={departmentStats}
      atRiskStudents={atRiskStudents}
    />
  )
}
