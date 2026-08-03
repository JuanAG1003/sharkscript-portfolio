import About from '@/components/sections/about'
import Certificates from '@/components/sections/certificates'
import Contact from '@/components/sections/contact'
import Footer from '@/components/layout/footer'
import Header from '@/components/layout/header'
import Hero from '@/components/sections/hero'
import Image from 'next/image'
import OceanBackground from '@/components/ui/ocean-background'
import Projects from '@/components/sections/projects'
import sharkscriptIsotipo from '@/assets/sharkscript-isotipo.webp'
import SharkTraceMark from '@/components/ui/shark-trace-mark'
import Skills from '@/components/sections/skills'
import TechnicalPractices from '@/components/sections/projects/technical-practices'

export default function HomePage () {
  return (
    <div className='relative isolate overflow-clip'>
      <a
        className='fixed left-4 top-4 z-[60] -translate-y-24 rounded-full border border-primary/30 bg-background px-4 py-2 font-mono text-xs font-medium text-primary shadow-primary-glow transition focus-visible:translate-y-0'
        href='#main-content'
      >
        Saltar al contenido
      </a>
      <OceanBackground />
      <Image
        alt=''
        aria-hidden='true'
        className='pointer-events-none fixed left-1/2 top-42 z-10 w-86 max-w-none mix-blend-screen blur-[0.2px] [--mark-opacity:0.07] [--mark-x:-50%] [--mark-y:0rem] animate-neon-trace-watermark sm:top-48 sm:w-110 lg:top-88 lg:w-120 lg:[--mark-opacity:0.055] lg:[--mark-x:-54%] lg:[--mark-y:-50%] xl:w-136'
        priority
        src={sharkscriptIsotipo}
      />
      <SharkTraceMark />
      <div className='relative z-20'>
        <Header />
        <main id='main-content'>
          <Hero />
          <Projects />
          <TechnicalPractices />
          <Skills />
          <Certificates />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}
