import Image from 'next/image'
import heroImage from '@/assets/hero-image.webp'
import Container from '@/components/ui/container'
import HeroActions from './hero-actions'
import HeroPreview from './hero-preview'
import HeroSocialLinks from './hero-social-links'

export default function Hero () {
  return (
    <section
      aria-labelledby='hero-title'
      className='relative overflow-clip pt-21 pb-18 sm:pt-38 sm:pb-28 md:pt-34 md:pb-30 lg:pt-42 lg:pb-38'
      id='hero'
    >
      <div
        aria-hidden='true'
        className='absolute left-1/2 top-12 -z-20 size-150 -translate-x-1/2 rounded-full bg-primary/8 blur-3xl'
      />
      <div
        aria-hidden='true'
        className='absolute inset-0 -z-20 bg-[radial-gradient(circle_at_72%_28%,rgb(47_217_244/0.08),transparent_34%),linear-gradient(180deg,transparent_0%,rgb(9_15_17/0.82)_78%)]'
      />

      <Container>
        <div className='relative grid items-center gap-12 sm:min-h-136 md:gap-14 lg:grid-cols-[1fr_0.82fr] lg:gap-12'>
          <div className='animate-blurred-fade-in animate-duration-700 max-w-2xl md:mx-auto md:text-center lg:mx-0 lg:text-left'>
            <div className='relative mb-7 size-22 overflow-clip rounded-full border border-primary/55 bg-surface shadow-[0_0_0_4px_rgb(47_217_244/0.08),0_0_24px_rgb(47_217_244/0.22)] animate-hero-avatar-bounce sm:hidden'>
              <Image
                alt='Retrato de Juan Ariel'
                className='h-full w-full object-cover object-center'
                height={88}
                src={heroImage}
                width={88}
              />
            </div>

            <p className='inline-flex border-t-2 border-primary pt-2 font-mono text-[0.58rem] font-medium uppercase tracking-[0.2em] text-primary sm:text-[0.68rem] sm:tracking-[0.24em]'>
              Hola, soy Juan Ariel
            </p>

            <h1
              className='mt-4 max-w-3xl font-heading text-[2.62rem] font-extrabold leading-[0.92] tracking-[-0.055em] text-foreground sm:mt-5 sm:text-5xl sm:leading-[0.98] md:text-[4.4rem] lg:text-6xl'
              id='hero-title'
            >
              <span className='block'>Desarrollador</span>
              <span className='block text-primary'>Web</span>
            </h1>

            <p className='mt-5 max-w-86 text-sm leading-6 text-muted sm:mt-6 sm:max-w-xl sm:text-base sm:leading-7 md:mx-auto lg:mx-0'>
              Navegando por las profundidades del desarrollo web para construir
              interfaces modernas, eficientes y seguras. Con <span className='text-primary'>SharkScript</span>, convierto ideas, aprendizajes y necesidades reales en productos digitales.
            </p>

            <div className='mt-7 sm:mt-8 md:flex md:justify-center lg:block'>
              <HeroActions />
            </div>

            <div className='mt-8 hidden sm:block md:flex md:justify-center lg:block'>
              <HeroSocialLinks />
            </div>
          </div>

          <div className='hidden animate-fade-in-up animate-delay-200 animate-duration-700 md:mx-auto md:block md:w-full md:max-w-2xl lg:max-w-none'>
            <HeroPreview />
          </div>
        </div>
      </Container>
    </section>
  )
}
