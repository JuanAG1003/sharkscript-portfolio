import type { SocialLink } from '@/types/social-link'
import { cn } from '@/lib/cn'

type ContactCardProps = {
  contact: SocialLink
  revealIndex?: number
  variant?: 'primary' | 'secondary'
}

const contactMeta: Record<string, string> = {
  email: 'Directo',
  github: 'Código',
  linkedin: 'Social',
  whatsapp: 'Principal'
}

function getRevealRange (index: number) {
  switch (index % 4) {
    case 1:
      return 'animate-range-[entry_12%_cover_30%]'
    case 2:
      return 'animate-range-[entry_16%_cover_34%]'
    case 3:
      return 'animate-range-[entry_20%_cover_38%]'
    default:
      return 'animate-range-[entry_8%_cover_28%]'
  }
}

export default function ContactCard ({ contact, revealIndex = 0, variant = 'secondary' }: ContactCardProps) {
  const Icon = contact.icon
  const isPrimary = variant === 'primary'

  return (
    <a
      aria-label={
        contact.external === true
          ? `${contact.label} - abrir en nueva pestaña`
          : contact.label
      }
      className={cn(
        'group relative overflow-clip rounded-3xl border border-border bg-surface/80 text-left transition duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-surface-elevated/85 hover:shadow-primary-glow',
        'timeline-view animate-duration-700',
        isPrimary ? 'animate-zoom-in' : 'animate-fade-in-up',
        getRevealRange(revealIndex),
        isPrimary
          ? 'flex min-h-40 items-center gap-4 p-5 sm:min-h-44 sm:gap-5 sm:p-6'
          : 'flex min-h-0 items-center gap-3.5 rounded-2xl p-3.5 sm:min-h-34 sm:flex-col sm:justify-center sm:gap-0 sm:rounded-3xl sm:p-5 sm:text-center'
      )}
      href={contact.href}
      rel={contact.external === true ? 'noreferrer' : undefined}
      target={contact.external === true ? '_blank' : undefined}
    >
      <span className='pointer-events-none absolute inset-x-5 top-0 h-px bg-linear-to-r from-transparent via-primary/60 to-transparent opacity-0 transition duration-300 group-hover:opacity-100' />
      <span className='pointer-events-none absolute -right-12 -top-12 size-32 rounded-full bg-primary/10 blur-3xl transition duration-300 group-hover:bg-primary/15' />

      <span className={cn(
        'relative inline-flex shrink-0 items-center justify-center rounded-2xl border border-border bg-surface-muted/70 text-primary shadow-primary-glow transition duration-300 group-hover:border-primary group-hover:bg-primary/10',
        isPrimary ? 'size-13 sm:size-15' : 'size-10 sm:size-12'
      )}
      >
        <Icon
          aria-hidden='true'
          className={cn(isPrimary ? 'size-5.5 sm:size-6' : 'size-4.5 sm:size-5')}
        />
      </span>

      <span className={cn('relative min-w-0', !isPrimary && 'sm:mt-5')}>
        <span className='mb-2 block font-mono text-[0.58rem] font-medium uppercase tracking-[0.18em] text-primary/80'>
          {contactMeta[contact.id] ?? 'Canal'}
        </span>

        <span className={cn(
          'block font-heading font-bold leading-tight text-foreground',
          isPrimary ? 'text-xl sm:text-2xl' : 'text-base'
        )}
        >
          {contact.label}
        </span>

        <span className={cn(
          'mt-1 block text-sm leading-5 text-muted sm:mt-2 sm:leading-6',
          isPrimary && 'max-w-sm sm:text-base sm:leading-7'
        )}
        >
          {contact.description}
        </span>

        {isPrimary && (
          <span className='mt-3 inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1 font-mono text-[0.6rem] font-medium uppercase tracking-[0.16em] text-primary sm:hidden'>
            Abrir chat
          </span>
        )}
      </span>
    </a>
  )
}
