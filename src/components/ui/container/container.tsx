import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'
import { cn } from '@/lib/cn'

type ContainerProps<TElement extends ElementType = 'div'> = {
  as?: TElement
  children: ReactNode
  className?: string
} & Omit<ComponentPropsWithoutRef<TElement>, 'as' | 'children' | 'className'>

export default function Container<TElement extends ElementType = 'div'> ({
  as,
  children,
  className,
  ...props
}: ContainerProps<TElement>) {
  const Component = as ?? 'div'

  return (
    <Component
      className={cn(
        'mx-auto w-full max-w-300 px-4 sm:px-6 lg:px-8',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
}
