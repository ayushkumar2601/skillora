import { redirect } from 'next/navigation'
import { getCurrentUser } from '@/lib/actions/auth.actions'
import { getStudentTasks } from '@/lib/actions/student.actions'
import StudentPlannerClient from '@/components/dashboard/student-planner-client'

export default async function PlannerPage() {
  const currentUser = await getCurrentUser()

  if (!currentUser) {
    redirect('/login')
  }

  const tasks = await getStudentTasks(currentUser.user.id)

  return <StudentPlannerClient user={currentUser} tasks={tasks} />
}
