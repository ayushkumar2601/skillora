import { redirect } from 'next/navigation'
import { getCurrentUser } from '@/lib/actions/auth.actions'
import { getAllStudents } from '@/lib/actions/admin.actions'
import AdminStudentsClient from '@/components/dashboard/admin-students-client'

export default async function StudentsDirectoryPage() {
  const currentUser = await getCurrentUser()

  if (!currentUser) {
    redirect('/login')
  }

  // Redirect all users to student dashboard (admin role removed)
  redirect('/dashboard/student')

  return <AdminStudentsClient user={currentUser} students={students} />
}
