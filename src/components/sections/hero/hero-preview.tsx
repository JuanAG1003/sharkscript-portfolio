'use client'

import Image from 'next/image'
import { Braces, CheckCircle2, Code2, Pause, Play } from 'lucide-react'
import { useEffect, useState } from 'react'
import heroImage from '@/assets/hero-image.webp'
import Card from '@/components/ui/card'
import IconBox from '@/components/ui/icon-box'
import Tag from '@/components/ui/tag'
import { cn } from '@/lib/cn'

const highlights = [
  'Componentes reutilizables',
  'Arquitectura modular',
  'Accesibilidad desde el inicio'
]

export default function HeroPreview () {
  const [activeView, setActiveView] = useState<'profile' | 'portrait'>('portrait')
  const [isPaused, setIsPaused] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches)
    }

    mediaQuery.addEventListener('change', handleChange)

    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  useEffect(() => {
    if (isPaused || prefersReducedMotion) return

    const interval = window.setInterval(() => {
      setActiveView((currentView) => currentView === 'profile' ? 'portrait' : 'profile')
    }, 5200)

    return () => window.clearInterval(interval)
  }, [isPaused, prefersReducedMotion])

  return (
    <Card className='relative min-h-118 overflow-clip p-0 shadow-[0_0_44px_rgb(47_217_244/0.08)] md:min-h-110 lg:min-h-118'>
      <div className='absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-primary to-transparent' />
      <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgb(47_217_244/0.14),transparent_32%)]' />

      {!prefersReducedMotion && (
        <button
          aria-label={isPaused ? 'Reanudar cambio de vista' : 'Pausar cambio de vista'}
          className='absolute right-4 top-4 z-20 inline-flex size-10 items-center justify-center rounded-full border border-primary/15 bg-background/50 text-primary backdrop-blur-md transition duration-300 hover:border-primary/50 hover:bg-background/80 hover:text-primary-hover'
          onClick={() => setIsPaused((currentValue) => !currentValue)}
          type='button'
        >
          {isPaused
            ? <Play aria-hidden='true' size={16} />
            : <Pause aria-hidden='true' size={16} />}
        </button>
      )}

      <div className='relative z-10 border-b border-border px-5 py-4'>
        <div className='flex items-center gap-2'>
          <span className='size-3 rounded-full bg-red-400' />
          <span className='size-3 rounded-full bg-yellow-400' />
          <span className='size-3 rounded-full bg-green-400' />
          <span className='ml-3 font-mono text-xs text-muted'>
            portfolio.config.ts
          </span>
        </div>
      </div>

      <div
        aria-hidden={activeView !== 'portrait'}
        className={cn(
          'absolute inset-x-0 bottom-0 top-12 transition duration-700 ease-out',
          activeView === 'portrait'
            ? 'translate-y-0 opacity-100 blur-0'
            : 'translate-y-3 opacity-0 blur-sm'
        )}
      >
        <Image
          alt='Retrato de Juan Ariel con identidad visual SharkScript'
          className='object-cover object-center'
          fill
          priority
          sizes='(min-width: 1024px) 22rem, (min-width: 640px) 32rem, calc(100vw - 2rem)'
          src={heroImage}
        />
        <div className='absolute inset-0 bg-[linear-gradient(180deg,transparent_42%,rgb(9_15_17/0.84)_100%),radial-gradient(circle_at_50%_12%,transparent_0%,rgb(9_15_17/0.18)_60%)]' />
        <div className='absolute inset-x-5 bottom-5 rounded-2xl border border-primary/15 bg-background/55 p-4 backdrop-blur-md'>
          <p className='font-mono text-[0.65rem] font-medium uppercase tracking-[0.22em] text-primary'>
            SharkScript
          </p>
          <p className='mt-2 font-heading text-xl font-bold text-foreground'>
            Si lo puedes imaginar, lo puedes construir.
          </p>
        </div>
      </div>

      <div
        aria-hidden={activeView !== 'profile'}
        className={cn(
          'relative z-10 space-y-6 p-5 transition duration-700 ease-out sm:p-6',
          activeView === 'profile'
            ? 'translate-y-0 opacity-100 blur-0'
            : '-translate-y-3 opacity-0 blur-sm'
        )}
      >
        <div className='flex items-start gap-4'>
          <IconBox>
            <Code2 aria-hidden='true' size={22} />
          </IconBox>

          <div>
            <p className='font-mono text-sm text-primary'>developer.profile</p>
            <h2 className='mt-2 font-heading text-2xl font-bold text-foreground'>
              Web Developer
            </h2>
            <p className='mt-2 text-sm leading-6 text-muted'>
              Pensar profundo. Construir claro.
            </p>
          </div>
        </div>

        <div className='flex flex-wrap gap-2'>
          <Tag>Next.js</Tag>
          <Tag>React</Tag>
          <Tag>Express.js</Tag>
          <Tag>TypeScript</Tag>
        </div>

        <div className='rounded-2xl border border-border bg-background/60 p-4 font-mono text-sm'>
          <p>
            <span className='text-muted'>const</span>{' '}
            <span className='text-primary'>focus</span>{' '}
            <span className='text-muted'>=</span>{' '}
            <span className='text-foreground'>
              &apos;clean architecture&apos;
            </span>
          </p>

          <p>
            <span className='text-muted'>const</span>{' '}
            <span className='text-primary'>mindset</span>{' '}
            <span className='text-muted'>=</span>{' '}
            <span className='text-foreground'>
              &apos;maintainable code&apos;
            </span>
          </p>

          <p className='mt-2'>
            <span className='text-muted'>status:</span>{' '}
            <span className='text-primary'>open_to_work</span>
          </p>
        </div>

        <ul className='space-y-3'>
          {highlights.map((highlight) => (
            <li
              className='flex items-center gap-3 text-sm text-muted'
              key={highlight}
            >
              <CheckCircle2
                aria-hidden='true'
                className='shrink-0 text-primary'
                size={18}
              />
              {highlight}
            </li>
          ))}
        </ul>

        <div className='flex items-center gap-2 border-t border-border pt-5 font-mono text-xs text-muted'>
          <Braces aria-hidden='true' size={16} />
          <span>build: accessible · modular · responsive</span>
        </div>
      </div>

      <div className='absolute inset-x-0 bottom-3 z-20 flex justify-center gap-1.5' aria-hidden='true'>
        {(['portrait', 'profile'] as const).map((view) => (
          <span
            className={cn(
              'h-1.5 rounded-full bg-primary/25 transition-all duration-300',
              activeView === view ? 'w-6 bg-primary' : 'w-1.5'
            )}
            key={view}
          />
        ))}
      </div>
    </Card>
  )
}
