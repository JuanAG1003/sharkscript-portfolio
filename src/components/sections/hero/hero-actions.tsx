import { ArrowDown, Send } from 'lucide-react'
import Button from '@/components/ui/button'

export default function HeroActions () {
  return (
    <>
      <div className='flex gap-2 animate-fade-in-up animate-delay-100 animate-duration-700 sm:hidden'>
        <Button className='min-w-25 rounded-xl px-4 py-3 text-xs' href='#projects'>
          Proyectos
        </Button>

        <Button
          className='min-w-20 rounded-xl border-primary/45 bg-transparent px-4 py-3 text-xs text-primary hover:bg-primary hover:text-primary-contrast'
          href='#skills'
          variant='secondary'
        >
          Stack
        </Button>
      </div>

      <div className='hidden flex-col gap-3 animate-fade-in-up animate-delay-100 animate-duration-700 sm:flex sm:flex-row'>
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
    </>
  )
}
