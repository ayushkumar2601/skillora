'use client'

import { LogOut } from 'lucide-react'
import { signOut } from '@/lib/actions/auth.actions'
import { useState } from 'react'
import { BrutalButton } from './brutal'

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
      className="flex items-center justify-center gap-3 w-full px-4 py-4 mt-4 border-2 border-black bg-white hover:bg-black hover:text-white transition-all duration-150 disabled:opacity-50 font-bold uppercase text-xs tracking-wide"
    >
      <LogOut className="w-4 h-4" />
      <span>
        {isLoading ? 'LOGGING OUT...' : 'LOG OUT'}
      </span>
    </button>
  )
}
