import { redirect } from 'next/navigation'
import { getCurrentUser } from '@/lib/actions/auth.actions'
import { getAdminDashboardStats, getDepartmentStats, getAtRiskStudents } from '@/lib/actions/admin.actions'
import AdminDashboardClient from '@/components/dashboard/admin-dashboard-client'

export default async function AdminDashboard() {
  const currentUser = await getCurrentUser()

  if (!currentUser) {
    redirect('/login')
  }

  if (currentUser.profile?.role !== 'admin') {
    redirect('/dashboard/student')
  }

  const [stats, departmentStats, atRiskStudents] = await Promise.all([
    getAdminDashboardStats(),
    getDepartmentStats(),
    getAtRiskStudents(),
  ])

  return (
    <AdminDashboardClient
      user={currentUser}
      stats={stats}
      departmentStats={departmentStats}
      atRiskStudents={atRiskStudents}
    />
  )
}
