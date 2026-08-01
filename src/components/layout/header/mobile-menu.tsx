'use client'

import { Home, Mail, PanelsTopLeft, UserRound, Wrench } from 'lucide-react'
import { cn } from '@/lib/cn'
import { mobileNavItems, type NavHref } from './nav-items'
import { useActiveNav } from './use-active-nav'

const navIcons: Record<NavHref, typeof Home> = {
  '#hero': Home,
  '#projects': PanelsTopLeft,
  '#skills': Wrench,
  '#certificates': PanelsTopLeft,
  '#about': UserRound,
  '#contact': Mail
}

export default function MobileMenu () {
  const { activeHref, setActiveHref } = useActiveNav()

  return (
    <nav
      aria-label='Navegación móvil'
      className='fixed inset-x-0 bottom-4 z-50 px-3 lg:hidden'
    >
      <ul className={cn(
        'mx-auto grid max-w-108 grid-cols-5 gap-1 rounded-[1.65rem] border border-primary/15 bg-background/82 p-1.5 text-foreground backdrop-blur-2xl animate-fade-in-up animate-duration-700',
        'shadow-[0_0_0_1px_rgb(47_217_244/0.04),0_-16px_50px_rgb(0_0_0/0.42),0_0_22px_rgb(47_217_244/0.1)]'
      )}
      >
        {mobileNavItems.map((item) => {
          const Icon = navIcons[item.href]
          const isActive = item.href === activeHref

          return (
            <li key={item.href}>
              <a
                aria-current={isActive ? 'location' : undefined}
                className={cn(
                  'group flex min-h-13 flex-col items-center justify-center gap-1 rounded-2xl px-1 font-mono text-[0.58rem] font-medium leading-none text-muted transition duration-300',
                  'hover:bg-primary/5 hover:text-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring',
                  isActive && 'bg-primary/10 text-primary shadow-[inset_0_0_16px_rgb(47_217_244/0.07),0_0_16px_rgb(47_217_244/0.08)]'
                )}
                href={item.href}
                onClick={() => setActiveHref(item.href)}
              >
                <Icon
                  aria-hidden='true'
                  className={cn(
                    'size-4 transition duration-300',
                    isActive ? 'drop-shadow-[0_0_7px_rgb(47_217_244/0.55)]' : 'group-hover:text-primary-hover'
                  )}
                  strokeWidth={2.2}
                />
                <span>{item.label}</span>
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
