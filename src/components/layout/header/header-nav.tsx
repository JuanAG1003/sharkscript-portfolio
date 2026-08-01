'use client'

import { cn } from '@/lib/cn'
import { navItems } from './nav-items'
import { useActiveNav } from './use-active-nav'

type HeaderNavProps = {
  className?: string
}

export default function HeaderNav ({ className }: HeaderNavProps) {
  const { activeHref, setActiveHref } = useActiveNav()

  return (
    <nav
      aria-label='Navegación principal'
      className={cn('min-w-0 flex-1', className)}
    >
      <ul className='flex items-center justify-start gap-0.5 overflow-x-auto px-1 [scrollbar-width:none] sm:justify-center sm:gap-1 [&::-webkit-scrollbar]:hidden'>
        {navItems.map((item) => {
          const isActive = item.href === activeHref

          return (
            <li className='shrink-0' key={item.href}>
              <a
                aria-current={isActive ? 'location' : undefined}
                className={cn(
                  'relative inline-flex rounded-full px-2.5 py-2 font-mono text-[0.62rem] font-medium leading-none tracking-[0.03em] text-muted sm:px-3 sm:text-[0.68rem]',
                  'transition duration-300 hover:bg-primary/5 hover:text-primary-hover',
                  'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring',
                  isActive && 'bg-primary/10 text-primary after:absolute after:inset-x-3 after:bottom-1 after:h-px after:rounded-full after:bg-primary after:shadow-[0_0_8px_rgb(47_217_244/0.55)]'
                )}
                href={item.href}
                onClick={() => setActiveHref(item.href)}
              >
                {item.label}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
