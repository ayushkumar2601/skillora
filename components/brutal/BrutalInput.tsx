import React from 'react'
import { cn } from '@/lib/utils'

interface BrutalInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

export const BrutalInput = React.forwardRef<HTMLInputElement, BrutalInputProps>(
  ({ className, label, error, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="brutal-label block mb-2 text-black">
            {label}
          </label>
        )}
        <input
          className={cn(
            "brutal-input w-full",
            error && "border-brutal-accent",
            className
          )}
          ref={ref}
          {...props}
        />
        {error && (
          <p className="text-brutal-accent text-sm font-medium mt-1">{error}</p>
        )}
      </div>
    )
  }
)

BrutalInput.displayName = 'BrutalInput'
