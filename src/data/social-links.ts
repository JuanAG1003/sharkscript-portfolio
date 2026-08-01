import { GitHubIcon, LinkedInIcon, GmailIcon, WhatsAppIcon } from '@/components/icons'
import type { SocialLink } from '@/types/social-link'

type FooterSocialLink = {
  id: string
  label: string
  href: string
  ariaLabel: string
}

export const socialLinks: SocialLink[] = [
  {
    id: 'email',
    label: 'Email',
    description: 'Proyectos, colaboraciones o entrevistas',
    href: 'mailto:juanssj24@gmail.com',
    icon: GmailIcon
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    description: 'Contacto rápido y directo',
    href: 'https://wa.me/5520417971',
    icon: WhatsAppIcon,
    external: true
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    description: 'Trayectoria y red profesional',
    href: 'https://www.linkedin.com/in/juan-ag-dev',
    icon: LinkedInIcon,
    external: true
  },
  {
    id: 'github',
    label: 'GitHub',
    description: 'Repositorios y prácticas técnicas',
    href: 'https://github.com/JuanAG1003',
    icon: GitHubIcon,
    external: true
  }
]

export const footerSocialLinks: FooterSocialLink[] = [
  {
    id: 'juan-instagram',
    label: '@JuanAG1003',
    href: 'https://www.instagram.com/JuanAG1003',
    ariaLabel: 'Instagram de JuanAG1003'
  },
  {
    id: 'sharkscript-instagram',
    label: '@SharkScript1003',
    href: 'https://www.instagram.com/SharkScript1003',
    ariaLabel: 'Instagram de SharkScript1003'
  }
]
