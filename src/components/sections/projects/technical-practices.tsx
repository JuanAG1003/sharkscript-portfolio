import Container from '@/components/ui/container'
import SectionHeader from '@/components/ui/section-header'
import { technicalPractices } from '@/data/projects'
import ProjectList from './project-list'

export default function TechnicalPractices () {
  return (
    <section
      aria-labelledby='technical-practices-title'
      className='relative py-14 sm:py-24'
      id='technical-practices'
    >
      <div
        aria-hidden='true'
        className='absolute left-1/2 top-4 -z-10 h-24 w-80 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl timeline-view animate-fade-in animate-duration-700 animate-range-[entry_0%_cover_24%]'
      />

      <Container>
        <SectionHeader
          align='center'
          className='text-left timeline-view animate-blurred-fade-in animate-duration-700 animate-range-[entry_0%_cover_22%] sm:text-center'
          description='Ejercicios frontend enfocados en estado, consumo de datos, lógica de interacción y patrones reutilizables.'
          eyebrow='Entrenamiento táctico'
          id='technical-practices-title'
          title={(
            <>
              Prácticas <span className='text-primary'>Técnicas</span>
            </>
          )}
        />

        <div className='mt-7 timeline-view animate-fade-in animate-duration-700 animate-range-[entry_6%_cover_24%] sm:mt-10'>
          <ProjectList
            featuredFirst={false}
            projects={technicalPractices}
            variant='practice'
          />
        </div>
      </Container>
    </section>
  )
}
