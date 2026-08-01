'use client'

import { X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/cn'
import type { Project } from '@/types/project'
import ProjectModalContent from './project-modal-content'

type ProjectModalProps = {
  isOpen: boolean
  onClose: () => void
  project: Project
  titleId: string
}

export default function ProjectModal ({
  isOpen,
  onClose,
  project,
  titleId
}: ProjectModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [imageIndex, setImageIndex] = useState(0)
  const activeImage = project.images[imageIndex]
  const hasMultipleImages = project.images.length > 1

  const showPreviousImage = () => {
    setImageIndex((currentIndex) => (
      currentIndex === 0 ? project.images.length - 1 : currentIndex - 1
    ))
  }

  const showNextImage = () => {
    setImageIndex((currentIndex) => (
      currentIndex === project.images.length - 1 ? 0 : currentIndex + 1
    ))
  }

  useEffect(() => {
    setImageIndex(0)
  }, [project.id])

  useEffect(() => {
    if (!isOpen || !hasMultipleImages) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        showPreviousImage()
      }

      if (event.key === 'ArrowRight') {
        event.preventDefault()
        showNextImage()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [hasMultipleImages, isOpen])

  useEffect(() => {
    const dialog = dialogRef.current

    if (dialog === null) return

    if (isOpen && !dialog.open) {
      dialog.showModal()
      return
    }

    if (!isOpen && dialog.open) {
      dialog.close()
    }
  }, [isOpen])

  return (
    <dialog
      aria-labelledby={titleId}
      className={cn(
        'animate-dialog animate-dialog-duration-300 animate-dialog-zoom m-0 h-dvh w-screen max-w-none overflow-visible bg-transparent p-0 text-foreground sm:m-auto sm:h-auto sm:w-[min(50rem,calc(100vw-2rem))]',
        'backdrop:bg-[radial-gradient(circle_at_50%_18%,rgb(47_217_244/0.14),transparent_34%),linear-gradient(180deg,rgb(3_8_10/0.86),rgb(9_15_17/0.92))] backdrop:backdrop-blur-md'
      )}
      onCancel={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
      onClose={onClose}
      ref={dialogRef}
    >
      <div
        className={cn(
          'relative h-dvh overflow-y-auto overscroll-contain rounded-none scroll-smooth sm:h-auto sm:max-h-[calc(100vh-2rem)] sm:rounded-4xl',
          '[scrollbar-color:rgb(47_217_244/0.38)_rgb(14_20_22/0.35)] [scrollbar-gutter:stable]',
          '[&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-background/30',
          '[&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary/40',
          '[&::-webkit-scrollbar-thumb:hover]:bg-primary/65'
        )}
      >
        <button
          aria-label='Cerrar modal'
          className={cn(
            'absolute right-5 top-5 z-20 inline-flex size-11 items-center justify-center rounded-full',
            'border border-primary/10 bg-background/35 text-foreground backdrop-blur-md',
            'transition duration-300 hover:border-primary/50 hover:bg-background/80 hover:text-primary-hover'
          )}
          onClick={onClose}
          type='button'
        >
          <X aria-hidden='true' size={22} />
        </button>

        <ProjectModalContent
          activeImage={activeImage}
          hasMultipleImages={hasMultipleImages}
          imageIndex={imageIndex}
          onNextImage={showNextImage}
          onPreviousImage={showPreviousImage}
          project={project}
          titleId={titleId}
        />
      </div>
    </dialog>
  )
}
