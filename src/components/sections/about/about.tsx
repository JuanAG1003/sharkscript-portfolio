import { profile } from '@/data/profile'
import aboutImage from '@/assets/about-image.webp'
import AboutStats from './about-stats'
import Card from '@/components/ui/card'
import Container from '@/components/ui/container'
import Image from 'next/image'
import { cn } from '@/lib/cn'

function getParagraphRevealRange (index: number) {
  switch (index % 3) {
    case 1:
      return 'animate-range-[entry_8%_cover_26%]'
    case 2:
      return 'animate-range-[entry_12%_cover_30%]'
    default:
      return 'animate-range-[entry_4%_cover_22%]'
  }
}

export default function About () {
  return (
    <section
      aria-labelledby='about-title'
      className='py-16 sm:py-24'
      id='about'
    >
      <Container>
        <Card
          as='article'
          className='relative min-h-0 overflow-clip rounded-3xl border-border/80 bg-surface/75 p-5 shadow-[0_0_0_1px_rgba(47,217,244,0.03),0_28px_80px_rgba(0,0,0,0.32)] timeline-view animate-fade-in-up animate-duration-700 animate-range-[entry_0%_cover_24%] sm:rounded-[2.6rem] sm:p-9 lg:min-h-152 lg:p-12 xl:p-14'
        >
          <div className='pointer-events-none absolute inset-y-0 right-0 hidden w-[48%] timeline-view animate-fade-in-right animate-duration-700 animate-range-[entry_4%_cover_30%] lg:block'>
            <Image
              alt='Retrato de Juan Ariel Alarcón García con estética tecnológica marina'
              className='absolute -bottom-16 -right-16 rotate-45 rounded-full opacity-[0.5] grayscale saturate-0'
              placeholder='blur'
              priority={false}
              src={aboutImage}
            />
            <div className='absolute inset-0 bg-linear-to-r from-surface via-surface/60 to-surface/40' />
            <div className='absolute inset-0 bg-linear-to-t from-surface via-transparent to-surface/60' />
          </div>

          <div className='pointer-events-none absolute inset-0 rounded-[inherit] bg-[radial-gradient(circle_at_86%_44%,rgba(221,228,229,0.045),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.018),transparent_44%)]' />
          <div className='pointer-events-none absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-primary/70 to-transparent timeline-view animate-fade-in animate-duration-700 animate-range-[entry_0%_cover_20%]' />

          <div className='relative flex min-h-0 max-w-204 flex-col lg:min-h-120'>
            <p className='mb-5 inline-flex w-fit rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1.5 font-mono text-[0.62rem] font-medium uppercase tracking-[0.16em] text-primary shadow-primary-glow timeline-view animate-blurred-fade-in animate-duration-700 animate-range-[entry_0%_cover_18%] sm:mb-8 sm:px-4 sm:text-[0.68rem] sm:tracking-[0.18em]'>
              Serendipia
            </p>

            <h2 className='font-heading text-[1.7rem] font-semibold tracking-[-0.03em] text-foreground timeline-view animate-fade-in-up animate-duration-700 animate-range-[entry_2%_cover_20%] sm:text-4xl' id='about-title'>
              Sobre mí
            </h2>

            <div className='mt-5 max-w-3xl space-y-4 text-sm font-medium leading-7 text-muted sm:mt-8 sm:space-y-6 sm:text-lg sm:leading-9'>
              {profile.about.map((paragraph, paragraphIndex) => (
                <p
                  className={cn(
                    'timeline-view animate-fade-in-up animate-duration-700',
                    getParagraphRevealRange(paragraphIndex),
                    paragraphIndex === 0 && 'border-l border-primary/45 pl-4 text-base leading-8 text-foreground sm:pl-5 sm:text-xl sm:leading-9'
                  )}
                  key={paragraphIndex}
                >
                  {paragraph.map((part, partIndex) => {
                    if (typeof part === 'string') {
                      return part
                    }

                    return (
                      <strong className='font-bold text-primary' key={`${part.text}-${partIndex}`}>
                        {part.text}
                      </strong>
                    )
                  })}
                </p>
              ))}
            </div>

            <div className='mt-auto pt-7 timeline-view animate-fade-in animate-duration-700 animate-range-[entry_14%_cover_30%] sm:pt-10'>
              <AboutStats stats={profile.stats} />
            </div>
          </div>
        </Card>
      </Container>
    </section>
  )
}
