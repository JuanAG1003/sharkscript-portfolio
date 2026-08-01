import { StaticImageData } from 'next/image'

export type ProjectLink = {
  label: string
  href: string
  type: 'demo' | 'source' | 'case-study'
}

export type ProjectChallengeSolution = {
  challenge: string
  solution: string
}

export type ProjectOrigin =
  | 'personal'
  | 'bootcamp'
  | 'academic'
  | 'freelance'
  | 'professional'

export type ProjectStatus = 'completed' | 'in-progress' | 'planned'

export type ProjectCategory = 'frontend' | 'fullstack' | 'tooling'

export type Project = {
  id: string
  title: string
  shortDescription: string
  description: string
  role: string
  status: ProjectStatus
  category: ProjectCategory
  origin: ProjectOrigin
  technologies: string[]
  features: string[]
  challengeSolutions: ProjectChallengeSolution[]
  images: StaticImageData[]
  links: ProjectLink[]
}
