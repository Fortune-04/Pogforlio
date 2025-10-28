import type { Config } from 'tailwindcss'
import daisyui from 'daisyui'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        portfoolio: {
          'primary': '#2563eb',
          'primary-content': '#ffffff',
          'secondary': '#9333ea',
          'secondary-content': '#ffffff',
          'accent': '#f59e0b',
          'neutral': '#374151',
          'base-100': '#e8e8e8',
          'base-200': '#d1d1d1',
          'base-300': '#b8b8b8',
          'info': '#0ea5e9',
          'success': '#10b981',
          'warning': '#f59e0b',
          'error': '#ef4444'
        }
      }
    ],
    darkTheme: false
  }
}
export default config
