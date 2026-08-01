import { certificateImages } from '@/constants/certificate-image'
import type { Certificate } from '@/types/certificate'

export const certificates: Certificate[] = [
  {
    id: 'generation-java-full-stack',
    title: 'Desarrollador Java Full Stack',
    description:
      'Programa intensivo de 500 horas para construir aplicaciones full stack con fundamentos sólidos de desarrollo web.',
    issuer: 'Generation México / AMITI',
    issuedAt: '2026',
    category: 'Full Stack',
    credentialType: 'diploma',
    image: certificateImages.generationJavaFullStack
  },
  {
    id: 'vercel-react-foundations-nextjs',
    title: 'React Foundations for Next.js',
    description:
      'Fundamentos de React aplicados al ecosistema Next.js, composición de interfaces y bases modernas de frontend.',
    issuer: 'Vercel',
    issuedAt: '2026',
    category: 'Next.js',
    credentialType: 'certificate',
    image: certificateImages.vercelReactFoundationsNextjs,
    validationUrl: 'https://nextjs.org/learn/certificate?course=react-foundations&user=165836&certId=react-foundations-165836-1782758457459'
  },
  {
    id: 'vercel-nextjs-app-router-fundamentals',
    title: 'Next.js App Router Fundamentals',
    description:
      'Bases del App Router de Next.js para construir rutas, layouts y experiencias web modernas con React Server Components.',
    issuer: 'Vercel',
    issuedAt: '2026',
    category: 'Next.js',
    credentialType: 'certificate',
    image: certificateImages.vercelNextjsAppRouterFundamentals,
    validationUrl: 'https://nextjs.org/learn/certificate?course=dashboard-app&user=165836&certId=dashboard-app-165836-1783622192111'
  },
  {
    id: 'big-school-desarrollo-ia-produccion',
    title: 'Desarrollo con IA: de 0 a Producción',
    description:
      'Jornadas formativas sobre desarrollo con inteligencia artificial, desde fundamentos hasta enfoque de producción.',
    issuer: 'BIG school',
    issuedAt: '2026',
    category: 'AI',
    credentialType: 'certificate',
    image: certificateImages.bigSchoolDesarrolloIaProduccion
  }
]
