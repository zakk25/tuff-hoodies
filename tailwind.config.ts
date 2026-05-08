import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0a0a0a',
        secondary: '#1a1a1a',
        accent: '#d4af37',
        'accent-orange': '#ff6b35',
        'text-primary': '#ffffff',
        'text-secondary': '#a0a0a0',
        'border-color': '#2a2a2a',
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in',
        slideInUp: 'slideInUp 0.6s ease-out',
        slideInDown: 'slideInDown 0.6s ease-out',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        shimmer: 'shimmer 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1200px 0' },
          '100%': { backgroundPosition: 'calc(1200px + 100%)' },
        },
      },
      boxShadow: {
        'luxury': '0 20px 60px rgba(0, 0, 0, 0.8)',
        'card': '0 10px 40px rgba(0, 0, 0, 0.5)',
        'hover': '0 30px 80px rgba(212, 175, 55, 0.2)',
      },
      backdropBlur: {
        'xs': '2px',
      },
      borderRadius: {
        '2xl': '1rem',
      },
      transitionProperty: {
        'all-smooth': 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
    fontFamily: {
      sans: ['var(--font-family-sans)', 'system-ui', 'sans-serif'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
};

export default config;
