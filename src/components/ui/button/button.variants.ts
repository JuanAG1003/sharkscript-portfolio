export const buttonVariants = {
  base: [
    'inline-flex items-center justify-center gap-2',
    'rounded-xl px-5 py-3',
    'font-heading text-sm font-bold',
    'transition duration-300',
    'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring',
    'disabled:pointer-events-none disabled:opacity-50'
  ].join(' '),

  variants: {
    primary: [
      'bg-primary text-primary-contrast',
      'shadow-primary-glow',
      'hover:bg-primary-hover hover:shadow-primary-glow-strong'
    ].join(' '),

    secondary: [
      'border border-border bg-surface text-foreground',
      'hover:border-primary hover:text-primary hover:shadow-primary-glow'
    ].join(' '),

    ghost: [
      'text-muted',
      'hover:text-primary'
    ].join(' '),

    icon: [
      'size-11 rounded-full p-0',
      'border border-border bg-surface text-foreground',
      'hover:border-primary hover:text-primary hover:shadow-primary-glow'
    ].join(' ')
  }
} as const

export type ButtonVariant = keyof typeof buttonVariants.variants
