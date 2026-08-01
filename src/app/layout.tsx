import type { Metadata } from 'next'
import favicon from '@/assets/favicon.webp'
import { hankenGrotesk, inter, jetBrainsMono } from '@/lib/fonts'
import './globals.css'

export const metadata: Metadata = {
  title: 'SKT | Desarrollador Web',
  description:
    'Portafolio de Juan Ariel Alarcón García, desarrollador web enfocado en interfaces modernas, accesibles y bien estructuradas.',
  icons: {
    icon: [{ url: favicon.src, type: 'image/webp' }]
  }
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang='es'
      className={`${inter.variable} ${hankenGrotesk.variable} ${jetBrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
