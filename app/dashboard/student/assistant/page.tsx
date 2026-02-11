import { redirect } from 'next/navigation'
import { getCurrentUser } from '@/lib/actions/auth.actions'
import AIAssistantClient from '@/components/dashboard/ai-assistant-client'

export default async function AIAssistantPage() {
  const currentUser = await getCurrentUser()

  if (!currentUser) {
    redirect('/login')
  }

  return <AIAssistantClient user={currentUser} />
}

