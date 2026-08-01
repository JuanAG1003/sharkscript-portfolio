import Card from '@/components/ui/card'
import IconBox from '@/components/ui/icon-box'
import { cn } from '@/lib/cn'
import type { SkillGroup } from '@/types/skill'

type SkillCardProps = {
  skillGroup: SkillGroup
  className?: string
  revealIndex?: number
}

function getRevealRange (index: number) {
  switch (index % 5) {
    case 1:
      return 'animate-range-[entry_4%_cover_24%]'
    case 2:
      return 'animate-range-[entry_8%_cover_26%]'
    case 3:
      return 'animate-range-[entry_12%_cover_28%]'
    case 4:
      return 'animate-range-[entry_16%_cover_30%]'
    default:
      return 'animate-range-[entry_0%_cover_22%]'
  }
}

export default function SkillCard ({
  className,
  skillGroup,
  revealIndex = 0
}: SkillCardProps) {
  const GroupIcon = skillGroup.icon
  const revealRange = getRevealRange(revealIndex)

  return (
    <Card
      as='article'
      className={cn(
        'group relative h-full overflow-clip p-4 sm:p-6',
        'border-border/90 bg-surface/75 shadow-[0_18px_60px_rgb(0_0_0/0.24)]',
        'hover:border-primary/50 hover:bg-surface-elevated/85',
        'animate-zoom-in timeline-view animate-duration-700',
        revealRange,
        className
      )}
      interactive
    >
      <div className='pointer-events-none absolute inset-x-6 top-0 h-px bg-linear-to-r from-transparent via-primary/70 to-transparent opacity-0 transition duration-300 group-hover:opacity-100' />
      <div className='pointer-events-none absolute -right-10 -top-10 size-28 rounded-full bg-primary/8 blur-2xl transition duration-500 group-hover:bg-primary/14' />

      <div className='relative z-10 flex items-start gap-3.5 sm:gap-4'>
        <IconBox className='size-9 rounded-xl transition duration-300 group-hover:border-primary group-hover:bg-primary/10 sm:size-10'>
          <GroupIcon aria-hidden='true' className='size-4.5 sm:size-5' />
        </IconBox>

        <div className='min-w-0 flex-1'>
          <div className='flex items-start justify-between gap-3'>
            <h3 className='font-heading text-base font-semibold leading-tight text-foreground sm:text-lg'>
              {skillGroup.title}
            </h3>

            <span className='shrink-0 rounded-full border border-primary/20 bg-primary/10 px-2 py-1 font-mono text-[0.58rem] font-medium leading-none text-primary sm:text-[0.62rem]'>
              {skillGroup.skills.length} skills
            </span>
          </div>

          <p className='mt-1 text-sm leading-5 text-muted sm:leading-6'>
            {skillGroup.description}
          </p>
        </div>
      </div>

      <ul className='relative z-10 mt-4 flex flex-wrap gap-1.5 border-t border-border/70 pt-4 sm:mt-5 sm:gap-2 sm:pt-5'>
        {skillGroup.skills.map(({ id, name, icon: Icon }) => (
          <li key={id}>
            <span className='inline-flex items-center gap-1.5 rounded-full border border-border bg-background/40 px-2.5 py-1.5 font-mono text-xs font-medium text-foreground transition duration-300 group-hover:-translate-y-px group-hover:border-border-strong group-hover:bg-surface-muted/70 sm:gap-2 sm:px-3 sm:py-2 sm:text-sm'>
              {Icon !== undefined && (
                <Icon
                  aria-hidden='true'
                  className='size-3.5 shrink-0 text-primary sm:size-4'
                />
              )}

              {name}
            </span>
          </li>
        ))}
      </ul>
    </Card>
  )
}
