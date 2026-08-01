import type { ComponentType, SVGProps } from 'react'

export type SocialLink = {
  id: string
  label: string
  description: string
  href: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
  external?: boolean
}
