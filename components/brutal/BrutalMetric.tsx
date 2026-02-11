import React from 'react'
import { cn } from '@/lib/utils'
import { LucideIcon } from 'lucide-react'

interface BrutalMetricProps {
  value: string | number
  label: string
  icon?: LucideIcon
  trend?: 'up' | 'down' | 'neutral'
  trendValue?: string
  className?: string
  accentColor?: string
}

export function BrutalMetric({
  value,
  label,
  icon: Icon,
  trend,
  trendValue,
  className,
  accentColor = 'bg-black'
}: BrutalMetricProps) {
  return (
    <div className={cn("brutal-metric", className)}>
      <div className="flex items-start justify-between mb-4">
        {Icon && (
          <div className={cn("p-3 border-2 border-black", accentColor)}>
            <Icon className="w-6 h-6 text-white" />
          </div>
        )}
        {trend && trendValue && (
          <div className={cn(
            "brutal-badge",
            trend === 'up' && "bg-brutal-secondary text-black",
            trend === 'down' && "bg-brutal-accent text-white",
            trend === 'neutral' && "bg-black text-white"
          )}>
            {trend === 'up' && '↑'} {trend === 'down' && '↓'} {trendValue}
          </div>
        )}
      </div>
      <div className="brutal-metric-value">{value}</div>
      <div className="brutal-metric-label mt-2">{label}</div>
    </div>
  )
}
