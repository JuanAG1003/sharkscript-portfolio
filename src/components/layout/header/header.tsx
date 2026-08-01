import Image from 'next/image'
import { Download } from 'lucide-react'
import sharkscriptIsologo from '@/assets/isologo.webp'
import Button from '@/components/ui/button'
import { cn } from '@/lib/cn'
import HeaderNav from './header-nav'
import MobileMenu from './mobile-menu'

export default function Header () {
  return (
    <header className='fixed inset-x-0 top-3 z-40 px-3 sm:top-4 sm:px-6 lg:px-8'>
      <div
        className={cn(
          'mx-auto hidden min-h-13 w-full max-w-300 items-center gap-2 rounded-full px-3 py-1.5 animate-fade-in-down animate-duration-700 lg:flex',
          'border border-primary/15 bg-background/80 text-foreground shadow-[0_0_0_1px_rgb(47_217_244/0.04),0_16px_50px_rgb(0_0_0/0.36),0_0_22px_rgb(47_217_244/0.1)] backdrop-blur-2xl'
        )}
      >
        <a
          aria-label='Ir al inicio'
          className={cn(
            'group inline-flex shrink-0 items-center gap-3 rounded-full py-1 pr-3 pl-1',
            'font-heading text-xl font-bold tracking-[-0.04em] transition duration-300 sm:text-2xl',
            'hover:bg-primary/5 hover:text-primary-hover'
          )}
          href='#hero'
        >
          <span className='grid h-10 w-18 shrink-0 place-items-center rounded-xl bg-primary/5 shadow-[inset_0_0_18px_rgb(47_217_244/0.06),0_0_18px_rgb(47_217_244/0.14),0_0_20px_rgb(0_0_0/0.5)] ring-1 ring-primary/15 sm:h-12 sm:w-22'>
            <Image
              alt=''
              aria-hidden='true'
              className='h-auto w-15 object-contain drop-shadow-[0_0_9px_rgb(47_217_244/0.75)] sm:w-18'
              height={70}
              placeholder='blur'
              src={sharkscriptIsologo}
              width={128}
            />
          </span>
          <span className='hidden text-foreground sm:inline'>Shark<span className='text-primary'>Script</span></span>
        </a>

        <HeaderNav className='mx-auto hidden lg:block' />

        <Button
          className={cn(
            'hidden shrink-0 rounded-full px-3.5 py-2 font-mono text-[0.68rem] font-medium lg:inline-flex',
            'border border-primary/25 bg-primary/10 text-primary shadow-[inset_0_0_14px_rgb(47_217_244/0.07),0_0_14px_rgb(47_217_244/0.1)]',
            'hover:border-primary/45 hover:bg-primary hover:text-primary-contrast hover:shadow-primary-glow'
          )}
          download
          href='/juan-ariel-alarcon-garcia-desarrollador-web-jr.pdf'
          variant='secondary'
        >
          Descargar CV
          <Download aria-hidden='true' className='size-3' strokeWidth={2.4} />
        </Button>
      </div>
      <MobileMenu />
    </header>
  )
}
