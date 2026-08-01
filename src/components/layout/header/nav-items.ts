export const navItems = [
  { href: '#hero', label: 'Inicio' },
  { href: '#projects', label: 'Proyectos' },
  { href: '#skills', label: 'Skills' },
  { href: '#certificates', label: 'Certificados' },
  { href: '#about', label: 'Sobre mí' },
  { href: '#contact', label: 'Contacto' }
] as const

export const mobileNavItems = [
  { href: '#hero', label: 'Inicio' },
  { href: '#projects', label: 'Proyectos' },
  { href: '#skills', label: 'Skills' },
  { href: '#about', label: 'Sobre mí' },
  { href: '#contact', label: 'Contacto' }
] as const

export type NavHref = typeof navItems[number]['href']
