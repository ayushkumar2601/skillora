import React from 'react'
import { cn } from '@/lib/utils'

interface BrutalButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'primary' | 'accent' | 'secondary'
  children: React.ReactNode
}

export function BrutalButton({ 
  variant = 'default', 
  className, 
  children, 
  ...props 
}: BrutalButtonProps) {
  const baseStyles = "brutal-button"
  
  const variantStyles = {
    default: "bg-white text-black",
    primary: "brutal-button-primary",
    accent: "brutal-button-accent",
    secondary: "brutal-button-secondary"
  }

  return (
    <button
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </button>
  )
}
