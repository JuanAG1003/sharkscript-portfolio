import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'
import { cn } from '@/lib/cn'

type CardProps<TElement extends ElementType = 'div'> = {
  as?: TElement
  children: ReactNode
  className?: string
  interactive?: boolean
} & Omit<ComponentPropsWithoutRef<TElement>, 'as' | 'children' | 'className'>

export default function Card<TElement extends ElementType = 'div'> ({
  as,
  children,
  className,
  interactive = false,
  ...props
}: CardProps<TElement>) {
  const Component = as ?? 'div'

  return (
    <Component
      className={cn(
        'rounded-3xl border border-border bg-surface/80 p-6',
        'backdrop-blur-xl',
        'transition duration-300',
        interactive && [
          'hover:-translate-y-1',
          'hover:border-primary',
          'hover:bg-surface-elevated',
          'hover:shadow-primary-glow'
        ],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
}
