import Image from 'next/image'
import { ArrowUpRight, Award } from 'lucide-react'
import Card from '@/components/ui/card'
import { cn } from '@/lib/cn'
import type { Certificate } from '@/types/certificate'

const credentialTypeLabels: Record<Certificate['credentialType'], string> = {
  certificate: 'Certificado',
  diploma: 'Diploma'
}

const viewCredentialLabels: Record<Certificate['credentialType'], string> = {
  certificate: 'Ver certificado',
  diploma: 'Ver diploma'
}

type CertificateCardProps = {
  certificate: Certificate
}

export default function CertificateCard ({
  certificate
}: CertificateCardProps) {
  const validationHref = certificate.validationUrl ?? certificate.image.src
  const validationLabel = certificate.validationUrl === undefined
    ? viewCredentialLabels[certificate.credentialType]
    : 'Validar'
  const credentialTypeLabel = credentialTypeLabels[certificate.credentialType]

  return (
    <Card
      as='article'
      className={cn(
        'group relative flex min-h-[23rem] w-[82vw] shrink-0 snap-center flex-col overflow-clip p-3.5 sm:min-h-[27rem] sm:w-[29rem] sm:p-4 lg:w-[31rem]'
      )}
      interactive
    >
      <div className='pointer-events-none absolute inset-x-6 top-0 h-px bg-linear-to-r from-transparent via-primary/70 to-transparent opacity-0 transition duration-300 group-hover:opacity-100' />
      <div className='pointer-events-none absolute -left-12 bottom-10 size-36 rounded-full bg-primary/8 blur-3xl transition duration-500 group-hover:bg-primary/14' />

      <div className='relative overflow-clip rounded-2xl border border-border bg-surface-container/80'>
        <div
          aria-hidden='true'
          className='absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgb(47_217_244/0.18),transparent_58%)] opacity-80'
        />
        <span className='absolute left-3 top-3 z-10 rounded-full border border-primary/25 bg-background/70 px-2.5 py-1 font-mono text-[0.58rem] font-medium uppercase tracking-[0.16em] text-primary backdrop-blur-md sm:left-4 sm:top-4 sm:text-[0.62rem]'>
          {credentialTypeLabel}
        </span>

        <Image
          alt={`Diploma o certificado: ${certificate.title}`}
          className='relative aspect-[16/10] h-auto w-full object-cover object-top opacity-90 transition duration-500 group-hover:scale-[1.03] group-hover:opacity-100'
          placeholder='blur'
          sizes='(min-width: 1024px) 31rem, (min-width: 640px) 30rem, 84vw'
          src={certificate.image}
        />
      </div>

      <div className='mt-4 flex flex-1 flex-col sm:mt-5'>
        <div className='flex items-center justify-between gap-3 sm:gap-4'>
          <p className='font-mono text-[0.62rem] font-medium uppercase tracking-[0.18em] text-primary sm:text-xs sm:tracking-[0.24em]'>
            {certificate.category} / {certificate.issuedAt}
          </p>

          <span className='inline-flex size-7 shrink-0 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 text-primary sm:size-8'>
            <Award aria-hidden='true' className='size-3.5 sm:size-4' />
          </span>
        </div>

        <h3 className='mt-2.5 font-heading text-lg font-bold leading-tight text-foreground sm:mt-3 sm:text-xl'>
          {certificate.title}
        </h3>

        <p className='mt-2 line-clamp-2 text-sm leading-5 text-muted sm:leading-6'>
          {certificate.description}
        </p>

        <div className='mt-auto grid grid-cols-[1fr_auto] gap-2.5 border-t border-border/70 pt-3.5 font-mono text-[0.6rem] uppercase tracking-[0.1em] text-muted sm:gap-3 sm:pt-4 sm:text-[0.68rem] sm:tracking-[0.12em]'>
          <span className='min-w-0'>
            <span className='block text-foreground'>Emisor</span>
            <span className='mt-1 block truncate'>{certificate.issuer}</span>
          </span>

          <a
            aria-label={`${validationLabel} ${certificate.title} - abrir en nueva pestaña`}
            className='group/link inline-flex items-center justify-center gap-1.5 rounded-full border border-primary/25 bg-primary/10 px-3 py-2 font-mono text-[0.62rem] font-medium uppercase tracking-[0.14em] text-primary transition duration-300 hover:translate-x-0.5 hover:border-primary hover:bg-primary/15 hover:text-primary-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring sm:gap-2 sm:px-4 sm:text-xs sm:tracking-[0.16em]'
            href={validationHref}
            rel='noreferrer'
            target='_blank'
          >
            {validationLabel}
            <ArrowUpRight aria-hidden='true' className='size-3.5 transition duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 sm:size-4' />
          </a>
        </div>

      </div>
    </Card>
  )
}
