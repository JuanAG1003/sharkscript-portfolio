import type { StaticImageData } from 'next/image'

export type Certificate = {
  id: string
  title: string
  description: string
  issuer: string
  issuedAt: string
  category: string
  image: StaticImageData
  validationUrl?: string
}
