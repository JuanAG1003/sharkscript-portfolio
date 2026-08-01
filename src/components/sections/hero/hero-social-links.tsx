import { ExternalLink } from 'lucide-react'
import Button from '@/components/ui/button'
import { socialLinks } from '@/data/social-links'

export default function HeroSocialLinks () {
  return (
    <ul className='flex flex-wrap gap-3 animate-fade-in-up animate-delay-200 animate-duration-700' aria-label='Enlaces sociales'>
      {socialLinks.map(({ id, label, href, icon: Icon, external }) => {
        if (label !== 'GitHub' && label !== 'LinkedIn') return null

        return (
          <li key={id}>
            <Button
              aria-label={external === true ? `${label} - abrir en nueva pestaña` : label}
              external={external}
              href={href}
              variant='icon'
            >
              <Icon aria-hidden='true' className='size-5' />

              {external === true && (
                <ExternalLink aria-hidden='true' className='sr-only' size={14} />
              )}
            </Button>
          </li>
        )
      })}
    </ul>
  )
}
