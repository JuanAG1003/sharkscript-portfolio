import neostandard from 'neostandard'
import tseslint from 'typescript-eslint'
import nextPlugin from '@next/eslint-plugin-next'

export default tseslint.config(
  {
    ignores: ['next-env.d.ts']
  },

  // 1. Configuración de Neostandard
  ...neostandard({
    ignores: ['.next/**/*', 'node_modules/**/*', 'public/**/*'],
    noJsx: false
  }),

  // 2. Configuración optimizada de TypeScript (Incluye parser y reglas automáticamente)
  ...tseslint.configs.recommended,

  // 3. Reglas de Next.js
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      '@next/next': nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
    },
  }
)
