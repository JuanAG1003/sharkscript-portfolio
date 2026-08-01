import type { ComponentType, SVGProps } from 'react'

export type IconComponent = ComponentType<SVGProps<SVGSVGElement>>

export type Skill = {
  id: string
  name: string
  icon?: IconComponent
}

export type SkillGroup = {
  id: string
  title: string
  description: string
  icon: IconComponent
  skills: Skill[]
}
