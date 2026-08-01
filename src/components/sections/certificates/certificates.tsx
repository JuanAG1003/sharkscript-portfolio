import Container from '@/components/ui/container'
import SectionHeader from '@/components/ui/section-header'
import CertificateList from './certificate-list'

export default function Certificates () {
  return (
    <section
      aria-labelledby='certificates-title'
      className='relative py-16 sm:py-24'
      id='certificates'
    >
      <div
        aria-hidden='true'
        className='absolute left-1/2 top-8 -z-10 h-32 w-96 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl timeline-view animate-fade-in animate-duration-700 animate-range-[entry_0%_cover_24%]'
      />

      <Container>
        <SectionHeader
          align='center'
          className='text-left timeline-view animate-blurred-fade-in animate-duration-700 animate-range-[entry_0%_cover_22%] sm:text-center'
          description='Reconocimientos y formación continua en la vanguardia del desarrollo.'
          id='certificates-title'
          title={(
            <>
              Certificados y <span className='text-primary'>Diplomas</span>
            </>
          )}
        />

        <div className='mt-7 timeline-view animate-fade-in-up animate-duration-700 animate-range-[entry_8%_cover_28%] sm:mt-10'>
          <CertificateList />
        </div>

        <div
          aria-hidden='true'
          className='mx-auto mt-4 h-px w-36 bg-linear-to-r from-transparent via-primary/60 to-transparent shadow-[0_0_18px_rgb(47_217_244/0.35)] timeline-view animate-fade-in animate-duration-700 animate-range-[entry_12%_cover_28%] sm:mt-6 sm:w-52'
        />
      </Container>
    </section>
  )
}
