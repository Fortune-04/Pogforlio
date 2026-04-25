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
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    }
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        portfoolio: {
          'primary': '#6366f1',
          'primary-content': '#ffffff',
          'secondary': '#a855f7',
          'secondary-content': '#ffffff',
          'accent': '#22d3ee',
          'accent-content': '#000000',
          'neutral': '#1e1e2e',
          'neutral-content': '#cdd6f4',
          'base-100': '#0f0f17',
          'base-200': '#181825',
          'base-300': '#1e1e2e',
          'base-content': '#cdd6f4',
          'info': '#89b4fa',
          'success': '#a6e3a1',
          'warning': '#f9e2af',
          'error': '#f38ba8'
        }
      }
    ],
    darkTheme: false
  }
}
export default config
