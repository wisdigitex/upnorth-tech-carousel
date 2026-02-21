import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          950: '#070b14',
          900: '#0a1020',
          850: '#0c1528',
        },
        card: {
          900: 'rgba(255,255,255,0.04)',
          800: 'rgba(255,255,255,0.06)',
        },
        primary: {
          500: '#2563eb',
          400: '#3b82f6',
        },
      },
      boxShadow: {
        soft: '0 20px 60px rgba(0,0,0,0.45)',
        glow: '0 0 0 1px rgba(59,130,246,0.35), 0 10px 40px rgba(37,99,235,0.25)',
      },
      borderRadius: {
        xl2: '1.25rem',
      },
      keyframes: {
        floaty: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
export default config
