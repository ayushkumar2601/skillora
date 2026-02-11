import { redirect } from 'next/navigation'
import { getCurrentUser } from '@/lib/actions/auth.actions'
import { getAllStudents } from '@/lib/actions/admin.actions'
import AdminStudentsClient from '@/components/dashboard/admin-students-client'

export default async function StudentsDirectoryPage() {
  const currentUser = await getCurrentUser()

  if (!currentUser) {
    redirect('/login')
  }

  if (currentUser.profile?.role !== 'admin') {
    redirect('/dashboard/student')
  }

  const students = await getAllStudents()

  return <AdminStudentsClient user={currentUser} students={students} />
}
