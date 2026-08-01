import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/cn'
import { buttonVariants, type ButtonVariant } from './button.variants'

type ButtonBaseProps = {
  children: ReactNode
  variant?: ButtonVariant
  className?: string
}

type ButtonAsButtonProps = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never
    external?: never
  }

type ButtonAsAnchorProps = ButtonBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string
    external?: boolean
  }

type ButtonProps = ButtonAsButtonProps | ButtonAsAnchorProps

export default function Button ({
  children,
  variant = 'primary',
  className,
  ...props
}: ButtonProps) {
  const classes = cn(
    buttonVariants.base,
    buttonVariants.variants[variant],
    className
  )

  if ('href' in props && props.href !== undefined) {
    const { href, external, ...anchorProps } = props

    return (
      <a
        className={classes}
        href={href}
        rel={external === true ? 'noreferrer' : undefined}
        target={external === true ? '_blank' : undefined}
        {...anchorProps}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      className={classes}
      type={props.type ?? 'button'}
      {...props}
    >
      {children}
    </button>
  )
}
