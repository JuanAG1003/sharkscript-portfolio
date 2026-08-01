import Image from 'next/image'
import { Braces } from 'lucide-react'
import Card from '@/components/ui/card'
import { cn } from '@/lib/cn'
import type { Project } from '@/types/project'
import ProjectActions from './project-actions'
import ProjectTechStack from './project-tech-stack'

type ProjectCardProps = {
  project: Project
  featured?: boolean
  revealIndex?: number
  variant?: 'default' | 'practice'
}

const statusLabels = {
  completed: 'Completado',
  'in-progress': 'En desarrollo',
  planned: 'Planeado'
} as const

const categoryLabels = {
  frontend: 'Frontend',
  fullstack: 'Fullstack',
  tooling: 'Tooling'
} as const

function getRevealRange (index: number) {
  switch (index % 4) {
    case 1:
      return 'animate-range-[entry_4%_cover_28%]'
    case 2:
      return 'animate-range-[entry_8%_cover_30%]'
    case 3:
      return 'animate-range-[entry_12%_cover_32%]'
    default:
      return 'animate-range-[entry_0%_cover_26%]'
  }
}

export default function ProjectCard ({
  project,
  featured = false,
  revealIndex = 0,
  variant = 'default'
}: ProjectCardProps) {
  const coverImage = project.images[0]
  const revealRange = getRevealRange(revealIndex)
  const titleId = `project-${project.id}-modal-title`

  if (variant === 'practice') {
    return (
      <>
        <Card
          as='article'
          className={cn(
            'group relative flex h-full min-h-39 flex-col overflow-clip p-0 sm:min-h-80',
            'border-primary/10 bg-surface/70 shadow-[0_18px_54px_rgb(0_0_0/0.22)]',
            'hover:border-primary/45 hover:bg-surface-elevated/80',
            'animate-fade-in-up timeline-view animate-duration-700',
            revealRange
          )}
          interactive
        >
          <div className='pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary/70 to-transparent opacity-0 transition group-hover:opacity-100' />

          <div className='relative hidden h-32 overflow-clip border-b border-border bg-background sm:block'>
            <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgb(47_217_244/0.20),transparent_44%),linear-gradient(145deg,rgb(22_29_30/0.84),rgb(9_15_17)_68%)]' />

            {coverImage !== undefined && (
              <Image
                alt={`Vista previa de ${project.title}`}
                className='object-contain object-center p-4 opacity-55 saturate-75 transition duration-500 group-hover:scale-[1.04] group-hover:opacity-80 group-hover:saturate-100'
                fill
                sizes='(min-width: 1024px) 25vw, (min-width: 768px) 50vw, calc(50vw - 1.75rem)'
                src={coverImage}
              />
            )}

            <div className='absolute left-4 top-4 inline-flex size-10 items-center justify-center rounded-2xl border border-primary/20 bg-background/70 text-primary shadow-primary-glow backdrop-blur-md'>
              <Braces aria-hidden='true' size={18} />
            </div>
          </div>

          <div className='flex flex-1 flex-col p-3.5 sm:p-5'>
            <p className='font-mono text-[0.54rem] font-medium uppercase tracking-[0.16em] text-primary sm:text-[0.64rem] sm:tracking-[0.22em]'>
              Práctica técnica
            </p>

            <h3 className='mt-2 font-heading text-sm font-medium leading-tight text-foreground sm:mt-3 sm:text-xl'>
              {project.title}
            </h3>

            <p className='mt-3 hidden line-clamp-3 text-sm leading-6 text-muted sm:block'>
              {project.shortDescription}
            </p>

            <div className='mt-4 hidden flex-wrap gap-2 sm:flex'>
              {project.technologies.slice(0, 3).map((technology) => (
                <span
                  className='rounded-full border border-border bg-surface-muted/80 px-2.5 py-1 font-mono text-[0.62rem] text-muted'
                  key={technology}
                >
                  {technology}
                </span>
              ))}
            </div>

            <ProjectActions project={project} titleId={titleId} variant='practice' />
          </div>
        </Card>
      </>
    )
  }

  return (
    <>
      <Card
        as='article'
        className={cn(
          'group flex h-full flex-col overflow-clip p-0',
          'border-border/90 bg-surface/75 shadow-[0_18px_60px_rgb(0_0_0/0.24)]',
          'hover:border-primary/50 hover:bg-surface-elevated/85',
          featured && 'md:col-span-2 lg:col-span-1 lg:grid lg:grid-cols-[1.1fr_0.9fr] animate-fade-in-up timeline-view animate-duration-700 animate-range-[entry_0%_cover_30%]',
          !featured && 'animate-fade-in-right timeline-view animate-duration-700',
          !featured && revealRange
        )}
        interactive
      >
        <div
          className={cn(
            'relative min-h-52 overflow-clip border-b border-border bg-background sm:min-h-72',
            featured && 'lg:min-h-full lg:border-r lg:border-b-0'
          )}
        >
          {featured && (
            <div className='absolute inset-x-0 top-0 z-10 hidden h-8 items-center justify-between border-b border-primary/10 bg-surface-muted/90 px-4 md:flex'>
              <p className='font-mono text-[0.58rem] font-medium uppercase tracking-[0.24em] text-foreground'>
                {project.origin}
              </p>

              <div className='flex items-center gap-1.5' aria-hidden='true'>
                <span className='size-1.5 rounded-full bg-primary' />
                <span className='size-1.5 rounded-full bg-border-strong' />
                <span className='size-1.5 rounded-full bg-border-strong' />
              </div>
            </div>
          )}

          <div
            className={cn(
              'absolute inset-0',
              'bg-[radial-gradient(circle_at_24%_24%,rgb(47_217_244/0.16),transparent_30%),linear-gradient(135deg,rgb(22_29_30/0.72),rgb(9_15_17)_58%)]'
            )}
          />
          {featured && (
            <div
              aria-hidden='true'
              className='absolute left-5 top-14 hidden grid-cols-5 gap-2 lg:grid'
            >
              {project.technologies.slice(0, 20).map((technology, index) => (
                <span
                  className={cn(
                    'size-5 rounded-full border border-primary/15 bg-primary/40 shadow-[0_0_14px_rgb(47_217_244/0.14)]',
                    index % 3 === 0 && 'bg-emerald-400/45',
                    index % 4 === 0 && 'bg-border-strong/70'
                  )}
                  key={`${technology}-${index}`}
                />
              ))}
            </div>
          )}

          {featured && (
            <div
              aria-hidden='true'
              className='absolute right-4 top-14 hidden w-[46%] space-y-3 lg:block'
            >
              <div className='rounded-xl border border-primary/15 bg-surface-muted/90 p-2 shadow-primary-glow'>
                <div className='mb-2 h-2 w-16 rounded-full bg-primary/80' />
                <div className='grid grid-cols-3 gap-1.5'>
                  <span className='h-10 rounded-md bg-primary/25' />
                  <span className='h-10 rounded-md bg-border-strong/80' />
                  <span className='h-10 rounded-md bg-emerald-300/30' />
                </div>
              </div>
            </div>
          )}

          {coverImage !== undefined && (
            <div
              className={cn(
                'absolute z-10 overflow-clip rounded-xl border border-primary/15 bg-background/75 p-2 shadow-primary-glow',
                featured
                  ? 'inset-x-4 bottom-4 top-4 sm:inset-x-5 sm:bottom-5 sm:top-5 lg:inset-x-auto lg:top-36 lg:bottom-29 lg:w-full'
                  : 'inset-x-4 bottom-4 top-4 sm:inset-x-5 sm:bottom-5 sm:top-5'
              )}
            >
              <div className='relative h-full overflow-clip rounded-lg bg-surface-muted/80'>
                <Image
                  alt={`Portada de ${project.title}`}
                  className='object-contain object-center p-1.5'
                  fill
                  priority={featured}
                  sizes={featured ? '(min-width: 1024px) 24vw, (min-width: 768px) 46vw, calc(100vw - 6.75rem)' : '(min-width: 768px) 50vw, calc(100vw - 6.75rem)'}
                  src={coverImage}
                />
              </div>
            </div>
          )}

          {featured && (
            <div
              aria-hidden='true'
              className='absolute inset-x-5 bottom-5 hidden rounded-xl border border-primary/10 bg-surface-muted/80 p-3 backdrop-blur-sm lg:block'
            >
              <div className='mb-2 flex items-center justify-between'>
                <span className='h-2 w-24 rounded-full bg-primary/70' />
                <span className='size-3 rounded-full border border-primary/50' />
              </div>
              <div className='grid grid-cols-3 gap-2'>
                <span className='h-12 rounded-lg bg-surface-elevated' />
                <span className='h-12 rounded-lg bg-primary/20' />
                <span className='h-12 rounded-lg bg-border-strong/70' />
              </div>
            </div>
          )}
        </div>

        <div className='flex flex-1 flex-col p-5 sm:p-7'>
          <div className='flex items-start justify-between gap-3 sm:gap-4'>
            <div>
              <p className='font-mono text-[0.64rem] font-medium uppercase tracking-[0.18em] text-primary sm:text-xs sm:tracking-[0.2em]'>
                {categoryLabels[project.category]}
              </p>

              <h3 className='mt-2 font-heading text-xl font-medium leading-tight text-foreground sm:mt-3 sm:text-2xl'>
                {project.title}
              </h3>
            </div>

            <span className='shrink-0 rounded-full border border-primary/25 bg-primary/10 px-2.5 py-1 font-mono text-[0.58rem] text-primary sm:px-3 sm:text-[0.65rem]'>
              {statusLabels[project.status]}
            </span>
          </div>

          <p className='mt-3 line-clamp-2 text-sm leading-6 text-muted sm:mt-4 sm:line-clamp-none sm:text-base sm:leading-7'>
            {project.shortDescription}
          </p>

          {featured && (
            <div className='mt-5 hidden md:block'>
              <ProjectTechStack technologies={project.technologies.slice(0, 8)} />
            </div>
          )}

          {featured && (
            <div className='mt-6 hidden border-t border-border pt-5 md:block'>
              <p className='font-mono text-xs uppercase tracking-[0.2em] text-muted'>
                Rol
              </p>

              <p className='mt-2 font-heading text-sm font-semibold text-foreground'>
                {project.role}
              </p>
            </div>
          )}

          <ProjectActions project={project} titleId={titleId} />
        </div>
      </Card>
    </>
  )
}
