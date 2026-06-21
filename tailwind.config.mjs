/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Deep dark surfaces used for hero / dark bands
        ink: {
          950: '#080B10',
          900: '#0B0F14',
          800: '#0E1420',
          700: '#141C2B',
          600: '#1C2638',
        },
        // Amber / electric orange brand accent
        brand: {
          50: '#FFF7ED',
          100: '#FFEDD5',
          200: '#FED7AA',
          300: '#FDBA74',
          400: '#FB9A3C',
          500: '#F97316',
          600: '#EA6A0C',
          700: '#C2540A',
          800: '#9A4310',
          900: '#7C3A12',
        },
        slatey: {
          50: '#F7F9FB',
          100: '#EEF2F6',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
      },
      fontFamily: {
        sans: ['Inter Variable', 'system-ui', 'sans-serif'],
        display: ['Sora Variable', 'Inter Variable', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1200px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(15,23,42,0.04), 0 8px 24px rgba(15,23,42,0.06)',
        'card-hover': '0 2px 4px rgba(15,23,42,0.06), 0 16px 40px rgba(15,23,42,0.10)',
      },
      backgroundImage: {
        'grid-dark':
          'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16,1,0.3,1) forwards',
      },
    },
  },
  plugins: [],
};
