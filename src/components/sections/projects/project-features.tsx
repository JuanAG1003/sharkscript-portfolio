import { CheckCircle2 } from 'lucide-react'

type ProjectFeaturesProps = {
  features: string[]
}

export default function ProjectFeatures ({ features }: ProjectFeaturesProps) {
  return (
    <ul className='space-y-3'>
      {features.map((feature) => (
        <li className='flex items-start gap-2.5 text-sm text-muted' key={feature}>
          <CheckCircle2
            aria-hidden='true'
            className='mt-0.5 size-4 shrink-0 text-primary'
          />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  )
}
