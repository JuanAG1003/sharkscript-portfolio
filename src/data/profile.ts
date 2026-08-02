export const profile = {
  name: 'Juan Ariel Alarcón García',
  shortName: 'Juan Ariel',
  alias: 'Juan AG',
  role: 'Desarrollador Web',
  location: 'México',
  email: 'juanssj24@gmail.com',
  heroPhrase:
    'Desarrollador Web',
  availability:
    'Hola, soy Juan Ariel',
  about: [
    [
      '¡Soy Juan Ariel! Empecé programando en el Bloc de notas y hoy desarrollo herramientas propias como ',
      { text: 'StackNotes', strong: true },
      ' y ',
      { text: 'CodeContext Exporter', strong: true },
      ', proyectos creados para resolver problemas reales de organización, documentación y flujo de trabajo técnico.'
    ],
    [
      'Mi primer acercamiento a la programación nació por curiosidad, después de ver un video sobre desarrollo de software. Empecé estudiando Java mientras cursaba Ingeniería en Electrónica, y con el tiempo retomé ese camino en un ',
      { text: 'bootcamp Full Stack', strong: true },
      ', donde consolidé mis bases como desarrollador web.'
    ],
    [
      'Durante mi formación participé en ',
      { text: 'Kin Conecta', strong: true },
      ', una plataforma de turismo local desarrollada en equipo bajo ',
      { text: 'Scrum', strong: true },
      '. Mi trabajo se centró en la interfaz, la responsividad y la integración del frontend con el sistema, además de colaborar activamente con mis compañeros compartiendo conocimiento y resolviendo problemas técnicos.'
    ],
    [
      'Actualmente trabajo en ',
      { text: 'SharkScript', strong: true },
      ', un proyecto personal donde convierto ideas, aprendizajes y necesidades cotidianas en herramientas web útiles. Es mi espacio para practicar, experimentar y construir software útil con enfoque en experiencia de usuario, arquitectura y calidad de código.'
    ]
  ],
  stats: [
    {
      label: 'Formación',
      value: 'Bootcamp Full Stack'
    },
    {
      label: 'Enfoque',
      value: 'Frontend & UI'
    },
    {
      label: 'Trabajo',
      value: 'Mobile First'
    },
    {
      label: 'Base',
      value: 'Buenas prácticas'
    }
  ]
} as const
