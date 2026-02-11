import React from 'react'
import { cn } from '@/lib/utils'

interface BrutalBadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'accent' | 'secondary' | 'black'
  className?: string
}

export function BrutalBadge({ children, variant = 'default', className }: BrutalBadgeProps) {
  const variantStyles = {
    default: 'bg-white text-black',
    accent: 'bg-brutal-accent text-white',
    secondary: 'bg-brutal-secondary text-black',
    black: 'bg-black text-white'
  }

  return (
    <span className={cn("brutal-badge", variantStyles[variant], className)}>
      {children}
    </span>
  )
}
