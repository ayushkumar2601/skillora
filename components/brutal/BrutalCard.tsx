import React from 'react'
import { cn } from '@/lib/utils'

interface BrutalCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  hover?: boolean
}

export function BrutalCard({ className, children, hover = true, ...props }: BrutalCardProps) {
  return (
    <div
      className={cn(
        "brutal-card p-6",
        hover && "hover:transform hover:translate-y-[-3px]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
