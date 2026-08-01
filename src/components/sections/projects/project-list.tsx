import type { Project } from '@/types/project'
import { cn } from '@/lib/cn'
import ProjectCard from './project-card'

type ProjectListProps = {
  projects: Project[]
  featuredFirst?: boolean
  variant?: 'default' | 'practice'
}

export default function ProjectList ({
  projects,
  featuredFirst = true,
  variant = 'default'
}: ProjectListProps) {
  return (
    <div
      className={cn(
        'grid gap-4 sm:gap-6 md:grid-cols-2',
        variant === 'default' && 'lg:grid-cols-[minmax(0,1.45fr)_minmax(20rem,0.85fr)]',
        variant === 'practice' && 'grid-cols-2 gap-2.5 sm:gap-4 lg:grid-cols-4'
      )}
    >
      {projects.map((project, index) => (
        <ProjectCard
          featured={featuredFirst && index === 0}
          key={project.id}
          project={project}
          revealIndex={index}
          variant={variant}
        />
      ))}
    </div>
  )
}
