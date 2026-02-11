'use client'

import { LogOut } from 'lucide-react'
import { signOut } from '@/lib/actions/auth.actions'
import { useState } from 'react'

export function LogoutButton() {
  const [isLoading, setIsLoading] = useState(false)

  const handleLogout = async () => {
    setIsLoading(true)
    await signOut()
  }

  return (
    <button
      onClick={handleLogout}
      disabled={isLoading}
      className="flex items-center gap-3 w-full px-4 py-4 mt-4 text-slate-400 hover:text-destructive transition-colors rounded-2xl group disabled:opacity-50"
    >
      <LogOut className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
      <span className="text-sm font-bold uppercase tracking-widest text-[10px]">
        {isLoading ? 'Logging out...' : 'Log Out'}
      </span>
    </button>
  )
}
