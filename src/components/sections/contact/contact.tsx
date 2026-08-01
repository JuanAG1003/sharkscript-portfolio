import Container from '@/components/ui/container'
import ContactList from './contact-list'

export default function Contact () {
  return (
    <section
      aria-labelledby='contact-title'
      className='py-16 sm:py-28'
      id='contact'
    >
      <Container>
        <div className='relative overflow-clip rounded-4xl border border-border bg-surface/75 p-4 shadow-[0_24px_80px_rgba(0,0,0,0.28)] timeline-view animate-fade-in-up animate-duration-700 animate-range-[entry_0%_cover_24%] sm:rounded-[2.6rem] sm:p-8 lg:p-10'>
          <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(47,217,244,0.12),transparent_28%),radial-gradient(circle_at_92%_8%,rgba(221,228,229,0.06),transparent_24%)] timeline-view animate-fade-in animate-duration-700 animate-range-[entry_0%_cover_26%]' />
          <div className='pointer-events-none absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-primary/70 to-transparent timeline-view animate-fade-in animate-duration-700 animate-range-[entry_0%_cover_18%]' />

          <div className='relative grid gap-6 sm:gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-12'>
            <div>
              <p className='mb-5 inline-flex w-fit rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1.5 font-mono text-[0.62rem] font-medium uppercase tracking-[0.16em] text-primary shadow-primary-glow timeline-view animate-blurred-fade-in animate-duration-700 animate-range-[entry_0%_cover_18%] sm:px-4 sm:text-[0.68rem] sm:tracking-[0.18em]'>
                Punto de encuentro
              </p>

              <h2
                className='font-heading text-[2rem] font-bold leading-tight tracking-[-0.02em] text-foreground timeline-view animate-fade-in-up animate-duration-700 animate-range-[entry_3%_cover_22%] sm:text-4xl lg:text-[3rem]'
                id='contact-title'
              >
                Construyamos algo <span className='text-primary'>útil</span>
              </h2>

              <p className='mt-4 max-w-xl text-sm font-medium leading-6 text-muted timeline-view animate-fade-in-up animate-duration-700 animate-range-[entry_6%_cover_26%] sm:mt-5 sm:text-lg sm:leading-8'>
                Disponible para oportunidades remotas, híbridas o presenciales. Si tienes una idea clara, una necesidad real o un reto técnico, conversemos.
              </p>
            </div>

            <ContactList />
          </div>
        </div>
      </Container>
    </section>
  )
}
