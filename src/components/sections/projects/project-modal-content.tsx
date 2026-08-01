import Image from 'next/image'
import { ChevronLeft, ChevronRight, ExternalLink, FileText, Lightbulb, Target } from 'lucide-react'
import { GitHubIcon } from '@/components/icons'
import Button from '@/components/ui/button'
import Tag from '@/components/ui/tag'
import { cn } from '@/lib/cn'
import type { Project } from '@/types/project'
import ProjectFeatures from './project-features'

type ProjectModalContentProps = {
  activeImage?: Project['images'][number]
  hasMultipleImages: boolean
  imageIndex: number
  onNextImage: () => void
  onPreviousImage: () => void
  project: Project
  titleId: string
}

const categoryLabels = {
  frontend: 'Frontend',
  fullstack: 'Fullstack',
  tooling: 'Tooling'
} as const

export default function ProjectModalContent ({
  activeImage,
  hasMultipleImages,
  imageIndex,
  onNextImage,
  onPreviousImage,
  project,
  titleId
}: ProjectModalContentProps) {
  return (
    <div className='min-h-dvh overflow-clip rounded-none border-primary/20 bg-surface shadow-[0_24px_90px_rgb(0_0_0/0.55),0_0_46px_rgb(47_217_244/0.12)] sm:min-h-0 sm:rounded-4xl sm:border'>
      <div className='relative min-h-64 overflow-clip bg-surface-muted sm:min-h-[24rem]'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_32%_10%,rgb(47_217_244/0.14),transparent_34%),linear-gradient(135deg,rgb(47_217_244/0.08),transparent_42%)]' />

        {activeImage !== undefined && (
          <Image
            alt={`Captura ${imageIndex + 1} de ${project.title}`}
            className='object-contain object-top px-4 pb-22 pt-10 sm:px-10 sm:pb-32 sm:pt-8'
            fill
            sizes='(min-width: 1024px) 50rem, calc(100vw - 2rem)'
            src={activeImage}
          />
        )}

        {hasMultipleImages && (
          <p className='sr-only' aria-live='polite'>
            Imagen {imageIndex + 1} de {project.images.length} de {project.title}
          </p>
        )}

        <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_12%,rgb(47_217_244/0.12),transparent_26%),linear-gradient(90deg,rgb(9_15_17/0.72),transparent_26%,transparent_74%,rgb(9_15_17/0.58))]' />

        {hasMultipleImages && (
          <div className='absolute inset-x-3 top-1/2 z-10 flex -translate-y-1/2 justify-between sm:inset-x-5'>
            <button
              aria-label={`Imagen anterior de ${project.title}`}
              className={cn(
                'inline-flex size-11 items-center justify-center rounded-full border border-primary/15 sm:size-10',
                'bg-background/45 text-foreground backdrop-blur-md transition duration-300',
                'hover:border-primary/50 hover:bg-background/80 hover:text-primary-hover'
              )}
              onClick={onPreviousImage}
              type='button'
            >
              <ChevronLeft aria-hidden='true' size={20} />
            </button>

            <button
              aria-label={`Imagen siguiente de ${project.title}`}
              className={cn(
                'inline-flex size-11 items-center justify-center rounded-full border border-primary/15 sm:size-10',
                'bg-background/45 text-foreground backdrop-blur-md transition duration-300',
                'hover:border-primary/50 hover:bg-background/80 hover:text-primary-hover'
              )}
              onClick={onNextImage}
              type='button'
            >
              <ChevronRight aria-hidden='true' size={20} />
            </button>
          </div>
        )}

        {hasMultipleImages && (
          <div className='absolute inset-x-0 bottom-18 z-10 flex justify-center gap-1.5 sm:bottom-24' aria-hidden='true'>
            {project.images.map((image, index) => (
              <span
                className={cn(
                  'size-1.5 rounded-full bg-primary/25 transition duration-300',
                  index === imageIndex && 'w-6 bg-primary shadow-[0_0_10px_rgb(47_217_244/0.5)]'
                )}
                key={`${image.src}-${index}`}
              />
            ))}
          </div>
        )}

        <div className='pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-surface/88 via-surface/58 to-transparent sm:h-44' />
      </div>

      <div className='relative z-10 -mt-20 px-4 pb-24 pt-0 before:pointer-events-none before:absolute before:inset-x-0 before:-top-24 before:h-48 before:bg-gradient-to-b before:from-transparent before:via-surface/68 before:to-surface/96 before:content-[""] sm:-mt-28 sm:px-8 sm:pb-8 sm:before:-top-32 sm:before:h-64'>
        <div className='relative z-10'>
          <div className='flex flex-col gap-5 border-b border-border pb-6 sm:gap-6 sm:pb-8 lg:flex-row lg:items-end lg:justify-between'>
            <div>
              <p className='font-mono text-xs font-medium uppercase leading-[1.4] tracking-[0.2em] text-primary sm:text-sm sm:tracking-[0.22em]'>
                {categoryLabels[project.category]}
              </p>

              <h2
                className='mt-2 font-heading text-2xl font-bold leading-[1.12] tracking-[-0.03em] text-foreground sm:text-5xl sm:font-extrabold sm:leading-[1.1]'
                id={titleId}
              >
                {project.title}
              </h2>
            </div>

            <div className='flex flex-wrap gap-2.5 sm:gap-3'>
              {project.links.map((link) => (
                <Button
                  className='min-h-11 flex-1 border-border-strong bg-surface-muted/70 text-xs sm:min-w-32 sm:flex-none sm:text-sm'
                  external
                  href={link.href}
                  key={link.href}
                  variant={link.type === 'demo' ? 'primary' : 'secondary'}
                >
                  {link.type === 'source'
                    ? <GitHubIcon aria-hidden='true' className='size-4.5 [&>path]:fill-current' />
                    : <ExternalLink aria-hidden='true' size={18} />}
                  {link.label}
                </Button>
              ))}
            </div>
          </div>

          <div className='mt-6 grid gap-7 sm:mt-8 sm:gap-8 lg:grid-cols-[1fr_17rem]'>
            <div className='space-y-7 sm:space-y-8'>
              <section aria-labelledby={`${titleId}-description`}>
                <h3
                  className='flex items-center gap-2 font-heading text-xl font-semibold leading-[1.3] text-primary sm:text-2xl'
                  id={`${titleId}-description`}
                >
                  <FileText aria-hidden='true' size={20} />
                  Descripción Técnica
                </h3>

                <p className='mt-3 max-w-2xl text-sm leading-6 text-muted sm:mt-4 sm:text-lg sm:leading-[1.6]'>
                  {project.description}
                </p>
              </section>

              <section aria-labelledby={`${titleId}-role`}>
                <h3
                  className='font-heading text-xl font-semibold leading-[1.3] text-primary sm:text-2xl'
                  id={`${titleId}-role`}
                >
                  Desafíos y Soluciones
                </h3>

                <div className='mt-4 space-y-4'>
                  {project.challengeSolutions.map((item, index) => (
                    <article
                      className={cn(
                        'group relative overflow-clip rounded-3xl border border-primary/10 bg-surface-muted/55 p-4 sm:p-5',
                        'shadow-[inset_0_1px_0_rgb(255_255_255/0.03),0_18px_48px_rgb(0_0_0/0.18)] transition duration-300',
                        'hover:border-primary/25 hover:bg-surface-muted/75 hover:shadow-[0_0_34px_rgb(47_217_244/0.08)]'
                      )}
                      key={`${item.challenge}-${index}`}
                    >
                      <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_0%,rgb(47_217_244/0.12),transparent_32%)] opacity-0 transition duration-300 group-hover:opacity-100' />

                      <div className='relative z-10 flex gap-3 sm:gap-4'>
                        <span className='flex size-8 shrink-0 items-center justify-center rounded-2xl border border-primary/15 bg-primary/10 font-mono text-[0.68rem] font-medium text-primary shadow-[0_0_18px_rgb(47_217_244/0.08)] sm:size-9 sm:text-xs'>
                          {String(index + 1).padStart(2, '0')}
                        </span>

                        <div className='min-w-0 space-y-4'>
                          <div>
                            <p className='flex items-center gap-2 font-mono text-[0.68rem] font-medium uppercase tracking-[0.18em] text-primary'>
                              <Target aria-hidden='true' className='size-3.5' />
                              Desafío
                            </p>

                            <p className='mt-2 text-sm leading-6 text-muted sm:text-base'>
                              {item.challenge}
                            </p>
                          </div>

                          <div className='rounded-2xl border border-border bg-background/35 p-3.5 sm:p-4'>
                            <p className='flex items-center gap-2 font-mono text-[0.68rem] font-medium uppercase tracking-[0.18em] text-primary-hover'>
                              <Lightbulb aria-hidden='true' className='size-3.5' />
                              Solución
                            </p>

                            <p className='mt-2 text-sm leading-6 text-foreground/88 sm:text-base'>
                              {item.solution}
                            </p>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            </div>

            <aside className='space-y-7 sm:space-y-8'>
              <section aria-labelledby={`${titleId}-features`}>
                <h3
                  className='border-b border-border pb-3 font-heading text-xl font-semibold leading-[1.3] text-foreground sm:text-2xl'
                  id={`${titleId}-features`}
                >
                  Funcionalidades
                </h3>

                <div className='mt-4'>
                  <ProjectFeatures features={project.features} />
                </div>
              </section>

              <section aria-labelledby={`${titleId}-stack`}>
                <h3
                  className='border-b border-border pb-3 font-heading text-xl font-semibold leading-[1.3] text-foreground sm:text-2xl'
                  id={`${titleId}-stack`}
                >
                  Tech Stack
                </h3>

                <ul className='mt-4 grid grid-cols-2 gap-2.5 sm:gap-3'>
                  {project.technologies.map((technology) => (
                    <li key={technology}>
                      <Tag className='w-full justify-center bg-surface-muted/80 py-2.5 text-xs leading-[1.4] text-foreground sm:py-3 sm:text-sm'>
                        {technology}
                      </Tag>
                    </li>
                  ))}
                </ul>
              </section>
            </aside>
          </div>
        </div>
      </div>
    </div>
  )
}
