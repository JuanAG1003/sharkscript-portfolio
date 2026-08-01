import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import { cn } from '@/lib/cn'

type IconBoxProps = {
  children: ReactNode
  className?: string
} & ComponentPropsWithoutRef<'span'>

export default function IconBox ({
  children,
  className,
  ...props
}: IconBoxProps) {
  return (
    <span
      className={cn(
        'inline-flex size-11 items-center justify-center rounded-2xl',
        'border border-border bg-surface-muted/70 text-primary',
        'shadow-primary-glow',
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
