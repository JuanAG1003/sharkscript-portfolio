import type { SkillGroup } from '@/types/skill'
import { cn } from '@/lib/cn'
import SkillCard from './skill-card'

type SkillListProps = {
  skillGroups: SkillGroup[]
}

export default function SkillList ({ skillGroups }: SkillListProps) {
  const cardLayouts = [
    'md:col-span-2 lg:col-span-3',
    'lg:col-span-3',
    'lg:col-span-2',
    'lg:col-span-2',
    'md:col-span-2 lg:col-span-2'
  ]

  return (
    <div className='grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-6'>
      {skillGroups.map((skillGroup, index) => (
        <SkillCard
          className={cn(cardLayouts[index])}
          key={skillGroup.id}
          revealIndex={index}
          skillGroup={skillGroup}
        />
      ))}
    </div>
  )
}
