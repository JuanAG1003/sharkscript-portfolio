import Container from '@/components/ui/container'
import SectionHeader from '@/components/ui/section-header'
import { projects } from '@/data/projects'
import ProjectList from './project-list'

export default function Projects () {
  return (
    <section
      aria-labelledby='projects-title'
      className='relative py-16 sm:py-28'
      id='projects'
    >
      <div
        aria-hidden='true'
        className='pointer-events-none absolute left-1/2 top-36 -z-10 h-56 w-[min(42rem,88vw)] -translate-x-1/2 rounded-full bg-primary/8 blur-3xl timeline-view animate-fade-in animate-duration-700 animate-range-[entry_0%_cover_24%]'
      />

      <Container>
        <SectionHeader
          align='center'
          className='text-left timeline-view animate-blurred-fade-in animate-duration-700 animate-range-[entry_0%_cover_24%] sm:text-center'
          description='Arquitectura escalable y soluciones técnicas de alto rendimiento desarrolladas bajo el concepto de eficiencia absoluta.'
          eyebrow='Deep work'
          id='projects-title'
          title={
            <>
              Proyectos <span className='text-primary'>Destacados</span>
            </>
          }
        />

        <div className='mt-7 timeline-view animate-fade-in animate-duration-700 animate-range-[entry_8%_cover_26%] sm:mt-10'>
          <ProjectList projects={projects} />
        </div>
      </Container>
    </section>
  )
}
