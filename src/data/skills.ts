import { Code2, Layout, Server, Terminal, Users } from 'lucide-react'
import {
  CSSNewIcon,
  ExpressjsIcon,
  GitIcon,
  GitHubIcon,
  HTML5Icon,
  JavaScriptIcon,
  NextjsIcon,
  NodejsIcon,
  ReactIcon,
  TailwindCSSIcon,
  TypeScriptIcon,
  TanStackIcon,
  ViteIcon,
  ESLintIcon,
  PostmanIcon
} from '@/components/icons'
import type { SkillGroup } from '@/types/skill'

export const skillGroups: SkillGroup[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    description: 'Interfaces modernas, responsivas y accesibles.',
    icon: Layout,
    skills: [
      { id: 'react', name: 'React', icon: ReactIcon },
      { id: 'tailwind', name: 'TailwindCSS', icon: TailwindCSSIcon },
      { id: 'tanstack-query', name: 'TanStack Query', icon: TanStackIcon },
      { id: 'css', name: 'CSS3', icon: CSSNewIcon },
      { id: 'html', name: 'HTML5', icon: HTML5Icon }
    ]
  },
  {
    id: 'languages-frameworks',
    title: 'Languages & Frameworks',
    description: 'Lenguajes, frameworks y bases para construir aplicaciones.',
    icon: Code2,
    skills: [
      { id: 'nextjs', name: 'Next.js', icon: NextjsIcon },
      { id: 'typescript', name: 'TypeScript', icon: TypeScriptIcon },
      { id: 'javascript', name: 'JavaScript', icon: JavaScriptIcon },
    ]
  },
  {
    id: 'backend',
    title: 'Backend',
    description: 'APIs, servidor y lógica de datos.',
    icon: Server,
    skills: [
      { id: 'express', name: 'Express', icon: ExpressjsIcon },
      { id: 'nodejs', name: 'Node.js', icon: NodejsIcon },
      { id: 'api-rest', name: 'API REST' }
    ]
  },
  {
    id: 'tools-workflow',
    title: 'Tools & Workflow',
    description: 'Flujo de trabajo, calidad y productividad.',
    icon: Terminal,
    skills: [
      { id: 'git', name: 'Git', icon: GitIcon },
      { id: 'github', name: 'GitHub', icon: GitHubIcon },
      { id: 'vite', name: 'Vite', icon: ViteIcon },
      { id: 'eslint', name: 'ESLint', icon: ESLintIcon },
      { id: 'postman', name: 'Postman', icon: PostmanIcon }
    ]
  },
  {
    id: 'work-ethic',
    title: 'Work Ethic',
    description: 'Buenas prácticas y forma de trabajo.',
    icon: Users,
    skills: [
      { id: 'scrum', name: 'Scrum' },
      { id: 'collaboration', name: 'Colaboración' },
      { id: 'self-taught', name: 'Self-taught learner' },
      { id: 'documentation', name: 'Documentación' }
    ]
  }
]
