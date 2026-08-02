import { ArrowDown, Send } from 'lucide-react'
import Button from '@/components/ui/button'

export default function HeroActions () {
  return (
    <div className='flex flex-col gap-3 animate-fade-in-up animate-delay-100 animate-duration-700 sm:flex-row'>
      <Button href='#projects'>
        Explorar proyectos
        <ArrowDown aria-hidden='true' size={18} />
      </Button>

      <Button
        href='#contact'
        variant='secondary'
      >
        Contactarme
        <Send aria-hidden='true' size={18} />
      </Button>
    </div>
  )
}
