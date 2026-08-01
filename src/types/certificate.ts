import type { StaticImageData } from 'next/image'

export type Certificate = {
  id: string
  title: string
  description: string
  issuer: string
  issuedAt: string
  category: string
  credentialType: 'certificate' | 'diploma'
  image: StaticImageData
  validationUrl?: string
}
