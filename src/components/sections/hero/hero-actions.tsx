import { Download, Send } from 'lucide-react'
import Button from '@/components/ui/button'

export default function HeroActions () {
  return (
    <div className='flex flex-col gap-3 animate-fade-in-up animate-delay-100 animate-duration-700 sm:flex-row'>
      <Button href='#contact'>
        Contactarme
        <Send aria-hidden='true' size={18} />
      </Button>

      <Button
        download
        href='/juan-ariel-alarcon-garcia-desarrollador-web-jr.pdf'
        variant='secondary'
      >
        Descargar CV
        <Download aria-hidden='true' size={18} />
      </Button>
    </div>
  )
}
