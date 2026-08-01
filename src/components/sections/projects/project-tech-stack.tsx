import Tag from '@/components/ui/tag'

type ProjectTechStackProps = {
  technologies: string[]
}

export default function ProjectTechStack ({
  technologies
}: ProjectTechStackProps) {
  return (
    <ul className='flex flex-wrap gap-2' aria-label='Tecnologías utilizadas'>
      {technologies.map((technology) => (
        <li key={technology}>
          <Tag>{technology}</Tag>
        </li>
      ))}
    </ul>
  )
}
