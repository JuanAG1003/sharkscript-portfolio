import { BadgeCheck, Clock3, Languages, Rocket } from 'lucide-react'
import { cn } from '@/lib/cn'

type AboutStat = {
  label: string
  value: string
}

type AboutStatsProps = {
  stats: readonly AboutStat[]
}

const statIcons = [BadgeCheck, Languages, Rocket, Clock3]

function getRevealRange (index: number) {
  switch (index % 4) {
    case 1:
      return 'animate-range-[entry_4%_cover_24%]'
    case 2:
      return 'animate-range-[entry_8%_cover_26%]'
    case 3:
      return 'animate-range-[entry_12%_cover_28%]'
    default:
      return 'animate-range-[entry_0%_cover_22%]'
  }
}

export default function AboutStats ({ stats }: AboutStatsProps) {
  return (
    <dl className='grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4'>
      {stats.map((stat, index) => {
        const Icon = statIcons[index] ?? BadgeCheck

        return (
          <div
            className={cn(
              'group relative overflow-clip rounded-2xl border border-border bg-surface-elevated/55 p-3.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.025)] transition duration-300 hover:border-primary/35 hover:bg-surface-elevated sm:p-5',
              'timeline-view animate-zoom-in animate-duration-700',
              getRevealRange(index)
            )}
            key={stat.label}
          >
            <div className='pointer-events-none absolute inset-x-4 top-0 h-px bg-linear-to-r from-transparent via-primary/50 to-transparent opacity-0 transition duration-300 group-hover:opacity-100' />

            <Icon aria-hidden='true' className='mb-3 size-4.5 text-primary transition duration-300 group-hover:scale-110 sm:mb-5 sm:size-5' strokeWidth={2.35} />

            <dt className='font-mono text-[0.56rem] font-medium uppercase tracking-[0.16em] text-muted/70 sm:text-[0.65rem] sm:tracking-[0.22em]'>
              {stat.label}
            </dt>

            <dd className='mt-1.5 font-heading text-xs font-bold leading-tight text-foreground sm:mt-2 sm:text-sm lg:text-base'>
              {stat.value}
            </dd>
          </div>
        )
      })}
    </dl>
  )
}
