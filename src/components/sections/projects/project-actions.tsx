'use client'

import dynamic from 'next/dynamic'
import { ArrowUpRight } from 'lucide-react'
import { useRef, useState } from 'react'
import { GitHubIcon } from '@/components/icons'
import Button from '@/components/ui/button'
import type { Project } from '@/types/project'

const ProjectModal = dynamic(() => import('./project-modal'))

type ProjectActionsProps = {
  project: Project
  titleId: string
  variant?: 'default' | 'practice'
}

export default function ProjectActions ({
  project,
  titleId,
  variant = 'default'
}: ProjectActionsProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const modalTriggerRef = useRef<HTMLElement | null>(null)

  const openModal = () => {
    modalTriggerRef.current = document.activeElement instanceof HTMLElement
      ? document.activeElement
      : null
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    window.requestAnimationFrame(() => modalTriggerRef.current?.focus())
  }

  if (variant === 'practice') {
    return (
      <>
        <div className='mt-auto flex items-center gap-2 pt-4 sm:gap-3 sm:pt-6'>
          <Button
            aria-haspopup='dialog'
            className='min-h-10 flex-1 bg-primary px-3 py-2 text-[0.68rem] text-primary-contrast sm:py-2.5 sm:text-xs'
            onClick={openModal}
            variant='primary'
          >
            Ver detalles
            <ArrowUpRight aria-hidden='true' size={15} />
          </Button>

          {project.links.map((link) => (
            <Button
              className='hidden size-10 rounded-full p-0 sm:inline-flex'
              external
              href={link.href}
              key={link.href}
              variant='ghost'
            >
              {link.type === 'source'
                ? <GitHubIcon aria-hidden='true' className='size-4 [&>path]:fill-current' />
                : <ArrowUpRight aria-hidden='true' size={16} />}
              <span className='sr-only'>{link.label}</span>
            </Button>
          ))}
        </div>

        {isModalOpen && (
          <ProjectModal
            isOpen={isModalOpen}
            onClose={closeModal}
            project={project}
            titleId={titleId}
          />
        )}
      </>
    )
  }

  return (
    <>
      <div className='mt-auto flex flex-wrap items-center gap-2.5 pt-5 sm:gap-3 sm:pt-6'>
        <Button
          aria-haspopup='dialog'
          className='min-h-11 flex-1 bg-primary py-2.5 text-xs text-primary-contrast'
          onClick={openModal}
          variant='primary'
        >
          Ver detalles
          <ArrowUpRight aria-hidden='true' size={16} />
        </Button>

        {project.links.map((link) => (
          <Button
            className='size-10 rounded-full p-0'
            external
            href={link.href}
            key={link.href}
            variant='ghost'
          >
            {link.type === 'source' && (
              <GitHubIcon aria-hidden='true' className='size-4.5 [&>path]:fill-current' />
            )}
            <span className='sr-only'>{link.label}</span>
            {link.type !== 'source' && (
              <ArrowUpRight aria-hidden='true' size={16} />
            )}
          </Button>
        ))}
      </div>

      {isModalOpen && (
        <ProjectModal
          isOpen={isModalOpen}
          onClose={closeModal}
          project={project}
          titleId={titleId}
        />
      )}
    </>
  )
}
