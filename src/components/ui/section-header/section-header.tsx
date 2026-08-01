import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'
import { cn } from '@/lib/cn'

type SectionHeaderProps<TElement extends ElementType = 'div'> = {
  as?: TElement
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  align?: 'left' | 'center'
  className?: string
} & Omit<ComponentPropsWithoutRef<TElement>, 'as' | 'title' | 'children' | 'className'>

export default function SectionHeader<TElement extends ElementType = 'div'> ({
  as,
  eyebrow,
  title,
  description,
  align = 'left',
  className,
  id,
  ...props
}: SectionHeaderProps<TElement>) {
  const Component = as ?? 'div'

  return (
    <Component
      className={cn(
        'max-w-3xl',
        align === 'center' && 'mx-auto text-center',
        className
      )}
      {...props}
    >
      {eyebrow !== undefined && (
        <p className={cn(
          'inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5',
          'font-mono text-[0.65rem] font-medium uppercase tracking-[0.18em] text-primary shadow-primary-glow'
        )}
        >
          {eyebrow}
        </p>
      )}

      <h2
        className={cn(
          'font-heading text-3xl font-bold leading-tight tracking-[-0.04em] text-foreground sm:text-4xl',
          eyebrow !== undefined ? 'mt-4' : 'mt-0'
        )}
        id={id}
      >
        {title}
      </h2>

      {description !== undefined && (
        <p className='mx-auto mt-3 max-w-2xl text-sm leading-6 text-muted sm:text-base sm:leading-7'>
          {description}
        </p>
      )}
    </Component>
  )
}
