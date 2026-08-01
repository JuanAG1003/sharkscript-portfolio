import Image from 'next/image'
import sharkscriptLogotipo from '@/assets/logotipo.webp'
import Container from '@/components/ui/container'
import { footerSocialLinks } from '@/data/social-links'
import { cn } from '@/lib/cn'

export default function Footer () {
  return (
    <footer className='px-3 pb-28 pt-12 sm:px-6 sm:pb-28 sm:pt-14 lg:px-8 lg:pb-6'>
      <Container>
        <div className={cn(
          'overflow-clip px-4 py-7 sm:border-t sm:border-primary/10 sm:bg-background/70 sm:px-8 sm:py-8 lg:px-10',
          'sm:shadow-[0_-1px_0_rgb(47_217_244/0.04),0_-22px_80px_rgb(47_217_244/0.035)] sm:backdrop-blur-xl'
        )}
        >
          <div className='relative z-10 flex flex-col items-center justify-center gap-5 sm:grid sm:grid-cols-[auto_1fr] sm:gap-8 md:gap-10 lg:flex lg:flex-row lg:gap-0'>
            <a
              aria-label='Ir al inicio'
              className='group inline-flex items-center gap-3 rounded-full pr-3 transition duration-300 hover:text-primary-hover animate-fade-in-up animate-duration-700 lg:absolute lg:left-0'
              href='#hero'
            >
              <span className='grid size-12 place-items-center rounded-lg bg-primary/5 shadow-[inset_0_0_16px_rgb(47_217_244/0.06),0_0_18px_rgb(47_217_244/0.14)] ring-1 ring-primary/15 sm:size-16'>
                <Image
                  alt=''
                  aria-hidden='true'
                  className='size-11 rounded-md object-contain drop-shadow-[0_0_8px_rgb(47_217_244/0.55)] sm:size-15'
                  height={82}
                  placeholder='blur'
                  src={sharkscriptLogotipo}
                  width={85}
                />
              </span>

              <span className='font-heading text-lg font-bold tracking-[-0.04em] text-foreground sm:text-xl'>
                Shark<span className='text-primary'>Script</span>
              </span>
            </a>

            <div className='flex flex-col items-center text-center font-mono text-[0.64rem] font-medium leading-5 tracking-widest text-muted animate-fade-in-up animate-duration-700 sm:items-end sm:text-right sm:text-[0.68rem] sm:tracking-[0.12em] lg:items-center lg:text-center'>
              <p>Ideas profundas, software útil.</p>
              <p>
                {footerSocialLinks.map(({ id, label, href, ariaLabel }, index) => (
                  <span key={id}>
                    {index > 0 && ' · '}
                    <a
                      aria-label={ariaLabel}
                      className='transition duration-300 hover:text-primary-hover'
                      href={href}
                      rel='noopener noreferrer'
                      target='_blank'
                    >
                      {label}
                    </a>
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
