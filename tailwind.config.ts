import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  corePlugins: {
    // Disable preflight (CSS reset) to avoid conflicts with existing globals.css
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        foreground: 'var(--foreground)',
        background: 'var(--background)',
      },
    },
  },
  plugins: [],
}

export default config
