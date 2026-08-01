'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useRef, useState } from 'react'
import { certificates } from '@/data/certificates'
import CertificateCard from './certificate-card'

export default function CertificateList () {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const navigate = (direction: 'previous' | 'next') => {
    const carousel = carouselRef.current

    if (carousel === null) return

    const nextIndex = direction === 'next'
      ? Math.min(activeIndex + 1, certificates.length - 1)
      : Math.max(activeIndex - 1, 0)

    if (nextIndex === activeIndex) return

    const card = carousel.querySelector('article')
    const cardWidth = card instanceof HTMLElement ? card.offsetWidth : 480
    const scrollDistance = (cardWidth + 20) * (nextIndex - activeIndex)

    setActiveIndex(nextIndex)

    carousel.scrollBy({
      behavior: 'smooth',
      left: scrollDistance
    })
  }

  return (
    <div className='relative -mx-4 px-4 pb-2 sm:-mx-6 sm:px-6 sm:pb-4 lg:-mx-8 lg:px-8'>
      <div className='mb-3 flex items-center justify-between gap-4 timeline-view animate-fade-in-up animate-duration-700 animate-range-[entry_4%_cover_22%] sm:mb-4'>
        <p className='font-mono text-[0.62rem] font-medium uppercase tracking-[0.18em] text-muted sm:text-xs sm:tracking-[0.24em]'>
          Credential rail / {certificates.length} records
        </p>

        <p className='sr-only' aria-live='polite'>
          Certificado {activeIndex + 1} de {certificates.length}: {certificates[activeIndex]?.title}
        </p>

        <div className='flex items-center gap-2'>
          <button
            aria-label='Ver certificado anterior'
            className='inline-flex size-9 items-center justify-center rounded-full border border-primary/30 bg-surface/85 text-primary shadow-primary-glow backdrop-blur-xl transition duration-300 hover:border-primary hover:bg-primary/10 hover:text-primary-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-45 sm:size-10'
            disabled={activeIndex === 0}
            onClick={() => {
              navigate('previous')
            }}
            type='button'
          >
            <ChevronLeft aria-hidden='true' className='size-4 sm:size-5' />
          </button>

          <button
            aria-label='Ver certificado siguiente'
            className='inline-flex size-9 items-center justify-center rounded-full border border-primary/30 bg-surface/85 text-primary shadow-primary-glow backdrop-blur-xl transition duration-300 hover:border-primary hover:bg-primary/10 hover:text-primary-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-45 sm:size-10'
            disabled={activeIndex === certificates.length - 1}
            onClick={() => {
              navigate('next')
            }}
            type='button'
          >
            <ChevronRight aria-hidden='true' className='size-4 sm:size-5' />
          </button>
        </div>
      </div>

      <div
        aria-label='Carrusel de certificados'
        className='-mt-2 snap-x snap-mandatory overflow-x-auto pt-2 scroll-smooth [scrollbar-width:none] sm:snap-none [&::-webkit-scrollbar]:hidden'
        ref={carouselRef}
        role='region'
      >
        <div className='flex w-max gap-4 sm:gap-5'>
          {certificates.map((certificate) => (
            <CertificateCard
              certificate={certificate}
              key={certificate.id}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
