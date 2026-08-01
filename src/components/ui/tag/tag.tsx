import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import { cn } from '@/lib/cn'

type TagProps = {
  children: ReactNode
  className?: string
} & ComponentPropsWithoutRef<'span'>

export default function Tag ({
  children,
  className,
  ...props
}: TagProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-border',
        'bg-surface-muted/70 px-3 py-1',
        'font-mono text-xs font-medium text-muted',
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
