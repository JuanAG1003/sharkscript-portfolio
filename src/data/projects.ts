import type { Project } from '@/types/project'
import { PROJECT_IMAGES } from '@/constants/project-image'

export const projects: Project[] = [
  {
    id: 'stacknotes',
    title: 'StackNotes',
    shortDescription:
      'Aplicación fullstack para organizar documentación técnica por tecnologías, stacks y categorías.',
    description:
      'Proyecto fullstack creado para centralizar apuntes técnicos y convertir documentación dispersa en una experiencia navegable, organizada por tecnologías, stacks, categorías y modo general.',
    role: 'Fullstack Developer',
    status: 'in-progress',
    category: 'fullstack',
    origin: 'personal',
    technologies: [
      'React',
      'React Router',
      'Express',
      'Node.js',
      'TypeScript',
      'TanStack Query',
      'TailwindCSS',
      'Vite',
      'ESLint'
    ],
    features: [
      'API REST con Express',
      'Arquitectura modular',
      'Navegación por tecnologías',
      'Organización por stacks',
      'Consumo de datos con TanStack Query'
    ],
    challengeSolutions: [
      {
        challenge:
          'Organizar información técnica que puede pertenecer a múltiples tecnologías, stacks, categorías y capacidades sin duplicar contenido.',
        solution:
          'Diseñé una estructura de datos basada en relaciones mediante identificadores, permitiendo reutilizar tecnologías en diferentes vistas y mantener una fuente de información más limpia.'
      },
      {
        challenge:
          'Construir una experiencia de navegación clara para consultar documentación tanto por stack como en modo general.',
        solution:
          'Separé la lógica de consulta y transformación de datos en el backend, entregando al frontend estructuras listas para renderizar según el contexto de navegación.'
      },
      {
        challenge:
          'Mantener sincronizada la información entre cliente y servidor evitando lógica innecesaria en componentes.',
        solution:
          'Implementé consumo de datos con TanStack Query, separando responsabilidades entre capa de datos, servicios y componentes de interfaz.'
      }
    ],
    images: PROJECT_IMAGES.stackNotes,
    links: []
  },
  {
    id: 'code-context-exporter',
    title: 'CodeContext Exporter',
    shortDescription:
      'Herramienta para exportar estructura y contenido de proyectos en formato Markdown.',
    description:
      'Aplicación frontend creada para generar contexto técnico de proyectos de código mediante lectura local de archivos, árbol visual, filtros, preview de contenido y exportación Markdown.',
    role: 'Frontend Developer',
    status: 'in-progress',
    category: 'tooling',
    origin: 'personal',
    technologies: [
      'React',
      'JavaScript',
      'TailwindCSS',
      'File API',
      'Vite',
      'ESLint'
    ],
    features: [
      'Árbol de archivos tipo explorador',
      'Filtros de archivos',
      'Preview de contenido',
      'Exportación Markdown',
      'Resumen del proyecto'
    ],
    challengeSolutions: [
      {
        challenge:
          'Leer múltiples archivos locales desde el navegador y representar su estructura de forma comprensible.',
        solution:
          'Utilicé File API para procesar los archivos seleccionados y construí un árbol jerárquico que separa carpetas, archivos y contenido.'
      },
      {
        challenge:
          'Evitar que archivos irrelevantes o pesados ensuciaran el contexto exportado.',
        solution:
          'Implementé filtros para excluir carpetas y extensiones comunes como dependencias, builds y archivos no útiles para análisis técnico.'
      },
      {
        challenge:
          'Convertir una estructura de proyecto en un formato útil para documentación o contexto de IA.',
        solution:
          'Diseñé una generación Markdown con resumen, árbol de archivos y contenido organizado para facilitar su lectura y reutilización.'
      }
    ],
    images: PROJECT_IMAGES.codeContextExporter,
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/JuanAG1003/CodeContext-Exporter',
        type: 'source'
      },
      {
        label: 'Demo',
        href: 'https://code-context-exporter.vercel.app',
        type: 'demo'
      }
    ]
  },
  {
    id: 'kin-conecta',
    title: 'Kin Conecta',
    shortDescription:
      'Plataforma web de turismo local desarrollada en equipo para conectar viajeros con experiencias auténticas.',
    description:
      'Proyecto colaborativo desarrollado durante el bootcamp de Generation bajo metodología Scrum. La plataforma fue construida para promover experiencias de turismo local mediante una interfaz responsiva conectada con servicios del sistema.',
    role: 'Frontend Developer',
    status: 'completed',
    category: 'frontend',
    origin: 'bootcamp',
    technologies: [
      'JavaScript',
      'Git',
      'GitHub',
      'CSS3',
      'HTML5'
    ],
    features: [
      'Interfaz responsiva',
      'Trabajo colaborativo con Git',
      'Metodología Scrum',
      'Integración frontend con APIs',
      'Entrega incremental de funcionalidades'
    ],
    challengeSolutions: [
      {
        challenge:
          'Trabajar en una base de código compartida con entregas constantes y coordinación entre integrantes del equipo.',
        solution:
          'Utilizamos Git, GitHub y una dinámica de trabajo basada en Scrum para organizar tareas, revisar avances y mantener una integración ordenada.'
      },
      {
        challenge:
          'Construir una interfaz responsiva que comunicara claramente el propósito de la plataforma.',
        solution:
          'Me enfoqué en la maquetación frontend, adaptación responsive y estructura visual de las secciones principales.'
      },
      {
        challenge:
          'Integrar el frontend con datos y funcionalidades provenientes del sistema.',
        solution:
          'Colaboré en la conexión de la interfaz con APIs, cuidando que la experiencia de usuario se mantuviera clara y funcional.'
      }
    ],
    images: PROJECT_IMAGES.kinConecta,
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/isa-capa/KinConecta',
        type: 'source'
      },
      {
        label: 'Demo',
        href: 'https://kin-conecta-nine.vercel.app',
        type: 'demo'
      }
    ]
  }
]

export const technicalPractices: Project[] = [
  {
    id: 'conecta-4',
    title: 'Conecta 4',
    shortDescription:
      'Juego interactivo desarrollado en React para practicar lógica de estado, renderizado condicional y detección de victoria.',
    description:
      'Proyecto frontend construido para reforzar fundamentos de React mediante un juego interactivo con lógica de turnos, validación de jugadas y detección automática de combinaciones ganadoras.',
    role: 'Frontend Developer',
    status: 'completed',
    category: 'frontend',
    origin: 'personal',
    technologies: [
      'React',
      'JavaScript',
      'CSS3',
      'HTML5',
      'Vite',
      'ESLint'
    ],
    features: [
      'Gestión de estado con React',
      'Lógica de turnos',
      'Detección de jugadas ganadoras',
      'Renderizado condicional',
      'Lógica encapsulada en Custom Hooks'
    ],
    challengeSolutions: [
      {
        challenge:
          'Detectar automáticamente una victoria en distintas direcciones del tablero.',
        solution:
          'Implementé lógica basada en arreglos para evaluar combinaciones horizontales, verticales y diagonales después de cada jugada.'
      },
      {
        challenge:
          'Evitar que la lógica del juego quedara mezclada directamente con la interfaz.',
        solution:
          'Encapsulé reglas y operaciones del tablero en Custom Hooks, separando la lógica del renderizado.'
      },
      {
        challenge:
          'Mantener una experiencia clara durante los cambios de turno y estados del juego.',
        solution:
          'Utilicé estado local y renderizado condicional para reflejar turno actual, ganador y reinicio de partida.'
      }
    ],
    images: PROJECT_IMAGES.conecta4,
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/JuanAG1003/Conecta-4---Juego-Interactivo',
        type: 'source'
      }
    ]
  },
  {
    id: 'movie-search-app',
    title: 'Buscador de Películas Web',
    shortDescription:
      'Aplicación frontend para buscar películas consumiendo una API externa con una experiencia fluida y responsiva.',
    description:
      'Proyecto frontend enfocado en practicar consumo de APIs, control de asincronía, manejo de estados de carga y optimización de búsquedas para evitar peticiones innecesarias.',
    role: 'Frontend Developer',
    status: 'completed',
    category: 'frontend',
    origin: 'personal',
    technologies: [
      'React',
      'JavaScript',
      'CSS3',
      'HTML5',
      'Vite',
      'ESLint'
    ],
    features: [
      'Consumo de API externa',
      'Búsqueda con debounce',
      'Estados de carga',
      'Manejo de resultados',
      'Diseño responsivo'
    ],
    challengeSolutions: [
      {
        challenge:
          'Evitar realizar una petición a la API en cada tecla escrita por el usuario.',
        solution:
          'Implementé debounce para retrasar la búsqueda y ejecutar la petición solo cuando el usuario deja de escribir por un breve momento.'
      },
      {
        challenge:
          'Mostrar una experiencia clara mientras los datos se cargan o no existen resultados.',
        solution:
          'Gestioné estados de carga, resultados y mensajes de respuesta para mejorar la retroalimentación visual.'
      },
      {
        challenge:
          'Mantener una interfaz usable en diferentes tamaños de pantalla.',
        solution:
          'Construí una UI responsiva adaptada a móvil y escritorio, cuidando la lectura de resultados y la interacción con el buscador.'
      }
    ],
    images: PROJECT_IMAGES.movieSearchApp,
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/JuanAG1003/Buscador-de-Pel-culas',
        type: 'source'
      }
    ]
  },
  {
    id: 'shopping-cart',
    title: 'Carrito de Compras',
    shortDescription:
      'Simulador de e-commerce desarrollado en React para practicar estado global y lógica de carrito.',
    description:
      'Proyecto frontend construido para implementar un flujo de carrito de compras usando Context API y useReducer, centralizando operaciones como agregar, eliminar y actualizar productos.',
    role: 'Frontend Developer',
    status: 'completed',
    category: 'frontend',
    origin: 'personal',
    technologies: [
      'React',
      'JavaScript',
      'CSS3',
      'HTML5',
      'Vite',
      'ESLint'
    ],
    features: [
      'Estado global con Context API',
      'Gestión de acciones con useReducer',
      'Custom Hook para el carrito',
      'Actualización de cantidades',
      'Arquitectura escalable de estado'
    ],
    challengeSolutions: [
      {
        challenge:
          'Compartir el estado del carrito entre múltiples componentes sin prop drilling.',
        solution:
          'Implementé Context API para exponer el estado y las acciones del carrito desde una capa centralizada.'
      },
      {
        challenge:
          'Gestionar operaciones del carrito de forma predecible conforme aumentaba la lógica.',
        solution:
          'Utilicé useReducer para modelar acciones como agregar, eliminar y actualizar cantidades mediante un flujo más ordenado.'
      },
      {
        challenge:
          'Evitar acoplar los componentes directamente a la implementación del contexto.',
        solution:
          'Creé un Custom Hook para consumir el carrito, facilitando la reutilización y manteniendo una API interna más limpia.'
      }
    ],
    images: PROJECT_IMAGES.shoppingCart,
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/JuanAG1003/Carrito-de-Compras-E-commerce-',
        type: 'source'
      }
    ]
  },
  {
    id: 'user-management-crud',
    title: 'Panel de Gestión de Usuarios',
    shortDescription:
      'Panel CRUD desarrollado en React para administrar usuarios mediante estado global con Redux Toolkit.',
    description:
      'Proyecto frontend enfocado en practicar una arquitectura de estado más cercana a aplicaciones escalables, implementando flujos de creación, lectura, actualización y eliminación de usuarios con Redux Toolkit.',
    role: 'Frontend Developer',
    status: 'completed',
    category: 'frontend',
    origin: 'personal',
    technologies: [
      'React',
      'JavaScript',
      'Redux Toolkit',
      'CSS3',
      'HTML5',
      'Vite',
      'ESLint'
    ],
    features: [
      'CRUD de usuarios',
      'Estado global con Redux Toolkit',
      'Store y slices',
      'Actualización de datos',
      'Separación de lógica de estado'
    ],
    challengeSolutions: [
      {
        challenge:
          'Administrar operaciones CRUD manteniendo un flujo de datos consistente.',
        solution:
          'Centralicé el estado de usuarios en Redux Toolkit, separando acciones y reducers mediante slices.'
      },
      {
        challenge:
          'Evitar que la lógica de actualización de usuarios quedara dispersa en componentes.',
        solution:
          'Moví la lógica de estado a una store global, dejando los componentes enfocados principalmente en renderizar e interactuar.'
      },
      {
        challenge:
          'Practicar una arquitectura más parecida a aplicaciones con estado compartido a mayor escala.',
        solution:
          'Organicé el flujo con store, slices y acciones, reforzando patrones de mantenimiento para interfaces más complejas.'
      }
    ],
    images: PROJECT_IMAGES.userManagementCrud,
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/JuanAG1003/Panel-de-Gestion-de-Usuarios-CRUD-',
        type: 'source'
      }
    ]
  }
]
