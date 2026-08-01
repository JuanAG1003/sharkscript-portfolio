import Container from '@/components/ui/container'
import SectionHeader from '@/components/ui/section-header'
import { skillGroups } from '@/data/skills'
import SkillList from './skill-list'

export default function Skills () {
  return (
    <section
      aria-labelledby='skills-title'
      className='relative py-16 sm:py-28'
      id='skills'
    >
      <div
        aria-hidden='true'
        className='pointer-events-none absolute right-[10%] top-28 -z-10 h-64 w-64 rounded-full bg-primary/7 blur-3xl timeline-view animate-fade-in animate-duration-700 animate-range-[entry_0%_cover_24%]'
      />

      <Container>
        <SectionHeader
          align='center'
          className='text-left timeline-view animate-blurred-fade-in animate-duration-700 animate-range-[entry_0%_cover_22%] sm:text-center'
          description='Herramientas letales y tecnologías dominadas para conquistar cualquier desafío.'
          id='skills-title'
          title={(
            <>
              Tech Stack & <span className='text-primary'>Skills</span>
            </>
          )}
        />

        <div className='mt-7 timeline-view animate-fade-in animate-duration-700 animate-range-[entry_6%_cover_24%] sm:mt-10'>
          <SkillList skillGroups={skillGroups} />
        </div>
      </Container>
    </section>
  )
}
